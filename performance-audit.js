const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLighthouse(url, formFactor, screenEmulation) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    formFactor: formFactor,
    screenEmulation: screenEmulation
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  return runnerResult;
}

async function analyzeWebsite() {
  const url = 'https://trbarry.github.io/page_cv';

  console.log('Analyse Desktop en cours...\n');
  const desktopResult = await runLighthouse(url, 'desktop', {
    mobile: false,
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    disabled: false
  });

  console.log('Analyse Mobile en cours...\n');
  const mobileResult = await runLighthouse(url, 'mobile', {
    mobile: true,
    width: 412,
    height: 823,
    deviceScaleFactor: 2.625,
    disabled: false
  });

  function formatResults(result, type) {
    const lhr = result.lhr;
    const categories = lhr.categories;
    const audits = lhr.audits;

    const report = {
      type: type,
      url: lhr.finalUrl,
      fetchTime: lhr.fetchTime,
      scores: {
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories['best-practices'].score * 100),
        seo: Math.round(categories.seo.score * 100)
      },
      coreWebVitals: {
        lcp: {
          value: audits['largest-contentful-paint']?.numericValue,
          displayValue: audits['largest-contentful-paint']?.displayValue,
          score: audits['largest-contentful-paint']?.score
        },
        cls: {
          value: audits['cumulative-layout-shift']?.numericValue,
          displayValue: audits['cumulative-layout-shift']?.displayValue,
          score: audits['cumulative-layout-shift']?.score
        },
        inp: {
          value: audits['max-potential-fid']?.numericValue,
          displayValue: audits['max-potential-fid']?.displayValue,
          score: audits['max-potential-fid']?.score
        }
      },
      metrics: {
        fcp: {
          value: audits['first-contentful-paint']?.numericValue,
          displayValue: audits['first-contentful-paint']?.displayValue,
          score: audits['first-contentful-paint']?.score
        },
        lcp: {
          value: audits['largest-contentful-paint']?.numericValue,
          displayValue: audits['largest-contentful-paint']?.displayValue,
          score: audits['largest-contentful-paint']?.score
        },
        cls: {
          value: audits['cumulative-layout-shift']?.numericValue,
          displayValue: audits['cumulative-layout-shift']?.displayValue,
          score: audits['cumulative-layout-shift']?.score
        },
        tti: {
          value: audits['interactive']?.numericValue,
          displayValue: audits['interactive']?.displayValue,
          score: audits['interactive']?.score
        },
        si: {
          value: audits['speed-index']?.numericValue,
          displayValue: audits['speed-index']?.displayValue,
          score: audits['speed-index']?.score
        },
        tbt: {
          value: audits['total-blocking-time']?.numericValue,
          displayValue: audits['total-blocking-time']?.displayValue,
          score: audits['total-blocking-time']?.score
        }
      },
      opportunities: [],
      diagnostics: []
    };

    // Collecter les opportunités
    Object.keys(audits).forEach(key => {
      const audit = audits[key];
      if (audit.details && audit.details.type === 'opportunity' && audit.score !== null && audit.score < 1) {
        report.opportunities.push({
          title: audit.title,
          description: audit.description,
          displayValue: audit.displayValue,
          score: audit.score,
          numericValue: audit.numericValue,
          savings: audit.details.overallSavingsMs || audit.details.overallSavingsBytes
        });
      }
    });

    // Collecter les diagnostics
    Object.keys(audits).forEach(key => {
      const audit = audits[key];
      if (audit.details && audit.details.type === 'debugdata') {
        // Skip debug data
      } else if (audit.score !== null && audit.score < 1 && !audit.details?.type?.includes('opportunity')) {
        if (audit.scoreDisplayMode === 'informative') return;
        report.diagnostics.push({
          title: audit.title,
          description: audit.description,
          displayValue: audit.displayValue,
          score: audit.score
        });
      }
    });

    // Limiter aux principales opportunités (top 10)
    report.opportunities.sort((a, b) => (b.savings || 0) - (a.savings || 0));
    report.opportunities = report.opportunities.slice(0, 10);

    // Limiter aux principaux diagnostics (top 15)
    report.diagnostics.sort((a, b) => a.score - b.score);
    report.diagnostics = report.diagnostics.slice(0, 15);

    return report;
  }

  const desktopReport = formatResults(desktopResult, 'Desktop (1920x1080)');
  const mobileReport = formatResults(mobileResult, 'Mobile (412x823)');

  // Générer le markdown
  let markdown = '# Analyse de Performance - https://trbarry.github.io/page_cv\n\n';
  markdown += `**Date d\'analyse:** ${new Date().toLocaleString('fr-FR')}\n\n`;
  markdown += '---\n\n';

  function addReportToMarkdown(report) {
    markdown += `## ${report.type}\n\n`;
    markdown += `**URL analysée:** ${report.url}\n\n`;

    markdown += '### Scores Globaux\n\n';
    markdown += '| Catégorie | Score |\n';
    markdown += '|-----------|-------|\n';
    markdown += `| Performance | ${report.scores.performance}/100 |\n`;
    markdown += `| Accessibilité | ${report.scores.accessibility}/100 |\n`;
    markdown += `| Bonnes Pratiques | ${report.scores.bestPractices}/100 |\n`;
    markdown += `| SEO | ${report.scores.seo}/100 |\n\n`;

    markdown += '### Core Web Vitals\n\n';
    markdown += '| Métrique | Valeur | Score |\n';
    markdown += '|----------|--------|-------|\n';
    markdown += `| **LCP** (Largest Contentful Paint) | ${report.coreWebVitals.lcp.displayValue || 'N/A'} | ${report.coreWebVitals.lcp.score ? Math.round(report.coreWebVitals.lcp.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **CLS** (Cumulative Layout Shift) | ${report.coreWebVitals.cls.displayValue || 'N/A'} | ${report.coreWebVitals.cls.score ? Math.round(report.coreWebVitals.cls.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **FID/INP** (First Input Delay) | ${report.coreWebVitals.inp.displayValue || 'N/A'} | ${report.coreWebVitals.inp.score ? Math.round(report.coreWebVitals.inp.score * 100) : 'N/A'}/100 |\n\n`;

    markdown += '### Métriques Détaillées\n\n';
    markdown += '| Métrique | Valeur | Score |\n';
    markdown += '|----------|--------|-------|\n';
    markdown += `| **FCP** (First Contentful Paint) | ${report.metrics.fcp.displayValue || 'N/A'} | ${report.metrics.fcp.score ? Math.round(report.metrics.fcp.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **LCP** (Largest Contentful Paint) | ${report.metrics.lcp.displayValue || 'N/A'} | ${report.metrics.lcp.score ? Math.round(report.metrics.lcp.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **CLS** (Cumulative Layout Shift) | ${report.metrics.cls.displayValue || 'N/A'} | ${report.metrics.cls.score ? Math.round(report.metrics.cls.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **TTI** (Time to Interactive) | ${report.metrics.tti.displayValue || 'N/A'} | ${report.metrics.tti.score ? Math.round(report.metrics.tti.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **SI** (Speed Index) | ${report.metrics.si.displayValue || 'N/A'} | ${report.metrics.si.score ? Math.round(report.metrics.si.score * 100) : 'N/A'}/100 |\n`;
    markdown += `| **TBT** (Total Blocking Time) | ${report.metrics.tbt.displayValue || 'N/A'} | ${report.metrics.tbt.score ? Math.round(report.metrics.tbt.score * 100) : 'N/A'}/100 |\n\n`;

    if (report.opportunities.length > 0) {
      markdown += '### Opportunités d\'Optimisation\n\n';
      report.opportunities.forEach((opp, index) => {
        markdown += `${index + 1}. **${opp.title}**\n`;
        markdown += `   - ${opp.description}\n`;
        if (opp.displayValue) {
          markdown += `   - Économie potentielle: ${opp.displayValue}\n`;
        }
        markdown += '\n';
      });
    }

    if (report.diagnostics.length > 0) {
      markdown += '### Diagnostics Techniques\n\n';
      report.diagnostics.forEach((diag, index) => {
        markdown += `${index + 1}. **${diag.title}**\n`;
        markdown += `   - ${diag.description}\n`;
        if (diag.displayValue) {
          markdown += `   - Valeur: ${diag.displayValue}\n`;
        }
        markdown += `   - Score: ${diag.score ? Math.round(diag.score * 100) : 0}/100\n`;
        markdown += '\n';
      });
    }

    markdown += '---\n\n';
  }

  addReportToMarkdown(desktopReport);
  addReportToMarkdown(mobileReport);

  markdown += '## Légende\n\n';
  markdown += '- **FCP (First Contentful Paint):** Temps avant l\'affichage du premier contenu\n';
  markdown += '- **LCP (Largest Contentful Paint):** Temps avant l\'affichage du plus gros élément visible\n';
  markdown += '- **CLS (Cumulative Layout Shift):** Stabilité visuelle de la page\n';
  markdown += '- **TTI (Time to Interactive):** Temps avant que la page soit pleinement interactive\n';
  markdown += '- **SI (Speed Index):** Rapidité d\'affichage du contenu visible\n';
  markdown += '- **TBT (Total Blocking Time):** Temps total de blocage du thread principal\n';
  markdown += '- **FID/INP (First Input Delay / Interaction to Next Paint):** Réactivité aux interactions utilisateur\n\n';

  markdown += '### Interprétation des Scores\n\n';
  markdown += '- **90-100:** Bon\n';
  markdown += '- **50-89:** À améliorer\n';
  markdown += '- **0-49:** Mauvais\n';

  fs.writeFileSync('/home/fab/projet/SIO25/cv/performance-report.md', markdown);
  console.log('\n✓ Rapport généré avec succès dans performance-report.md');

  // Sauvegarder aussi les données JSON brutes
  fs.writeFileSync('/home/fab/projet/SIO25/cv/performance-data.json', JSON.stringify({
    desktop: desktopReport,
    mobile: mobileReport
  }, null, 2));
  console.log('✓ Données JSON sauvegardées dans performance-data.json');
}

analyzeWebsite().catch(err => {
  console.error('Erreur lors de l\'analyse:', err);
  process.exit(1);
});
