# Guide d'Utilisation - Analyse de Performance

## Vue d'Ensemble

Cette analyse de performance complète du site **https://trbarry.github.io/page_cv** a été réalisée le **22 octobre 2025** avec **Google Lighthouse**.

L'analyse couvre les versions **desktop** et **mobile** et inclut:
- Scores de performance, accessibilité, bonnes pratiques et SEO
- Core Web Vitals (LCP, CLS, FID/TBT)
- Diagnostics techniques détaillés
- Opportunités d'optimisation
- Plan d'action priorisé

---

## Fichiers Disponibles (7 fichiers)

### 1. QUICK-SUMMARY.md (2.4 KiB) ⚡
**Temps de lecture: 1 minute**

Résumé ultra-condensé avec:
- Scores principaux
- Top 4 des problèmes
- Actions immédiates
- Objectifs finaux

**Commencer par ce fichier pour une vue rapide.**

```bash
cat QUICK-SUMMARY.md
```

---

### 2. PERFORMANCE-ANALYSIS-INDEX.md (8.4 KiB) 📑
**Temps de lecture: 5 minutes**

Index complet avec:
- Description de tous les fichiers
- Résumé des résultats
- Guide de lecture recommandé
- Commandes utiles
- Actions prioritaires

**Fichier de navigation principal.**

```bash
cat PERFORMANCE-ANALYSIS-INDEX.md
```

---

### 3. performance-visual-summary.md (18 KiB) 📊
**Temps de lecture: 10-15 minutes**

Visualisations et graphiques en mode texte:
- Barres de progression des scores
- Graphiques de comparaison Desktop vs Mobile
- Chronologie de chargement
- Impact visuel des problèmes
- Checklist de correction

**Idéal pour présenter aux équipes et stakeholders.**

```bash
cat performance-visual-summary.md
# ou
less performance-visual-summary.md
```

---

### 4. performance-analysis-report.md (14 KiB) 📋
**Temps de lecture: 20-30 minutes**

Rapport d'analyse complet avec:
- 14 sections détaillées
- Métriques complètes (Desktop et Mobile)
- Analyse des Core Web Vitals
- Opportunités d'optimisation
- Diagnostics techniques
- Analyse des ressources
- Recommandations détaillées avec plan d'action en 3 phases
- Résultats attendus

**Document de référence principal pour les développeurs.**

```bash
cat performance-analysis-report.md
# ou avec un pager
less performance-analysis-report.md
```

---

### 5. performance-summary.json (6.1 KiB) 💾
**Format: JSON structuré**

Données structurées pour traitement automatique:
- Scores et métriques
- Core Web Vitals
- Problèmes critiques avec recommandations
- Analyse des ressources
- Métriques réseau
- Diagnostics

**Idéal pour:**
- Intégration CI/CD
- Dashboards personnalisés
- Scripts d'automatisation
- Comparaisons historiques

```bash
# Afficher formaté
cat performance-summary.json | jq '.'

# Extraire les scores
jq '.scores' performance-summary.json

# Extraire les problèmes critiques
jq '.critical_issues' performance-summary.json

# Extraire les Core Web Vitals
jq '.core_web_vitals' performance-summary.json
```

---

### 6. lighthouse-desktop.json (717 KiB) 📦
**Format: JSON Lighthouse complet**

Rapport Lighthouse brut complet pour **Desktop**:
- Tous les audits (100+)
- Traces de performance détaillées
- Captures d'écran
- Méta-données de navigation
- Arbre de dépendances réseau

**Pour analyse approfondie et débogage.**

```bash
# Scores principaux
jq '.categories | map_values(.score)' lighthouse-desktop.json

# Core Web Vitals
jq '{
  FCP: .audits["first-contentful-paint"].displayValue,
  LCP: .audits["largest-contentful-paint"].displayValue,
  CLS: .audits["cumulative-layout-shift"].displayValue
}' lighthouse-desktop.json

# Liste des problèmes
jq '[.audits | to_entries[] |
  select(.value.score != null and .value.score < 1) |
  {id: .key, title: .value.title, score: .value.score}] |
  sort_by(.score) | .[:5]' lighthouse-desktop.json
```

---

### 7. lighthouse-mobile.json (693 KiB) 📱
**Format: JSON Lighthouse complet**

Rapport Lighthouse brut complet pour **Mobile**:
- Même structure que desktop
- Simulation de connexion 4G
- Émulation mobile (résolution, viewport)

**Pour analyse approfondie mobile.**

```bash
# Mêmes commandes que desktop, remplacer le nom du fichier
jq '.categories | map_values(.score)' lighthouse-mobile.json
```

---

## Parcours de Lecture Recommandés

### 🚀 Découverte Rapide (5 minutes)
```
1. QUICK-SUMMARY.md                    (1 min)
2. PERFORMANCE-ANALYSIS-INDEX.md       (4 min)
   → Sections: Résumé Rapide, Actions Prioritaires
```

### 📊 Présentation aux Équipes (15 minutes)
```
1. QUICK-SUMMARY.md                    (1 min)
2. performance-visual-summary.md       (10 min)
   → Sections: Scores, Core Web Vitals, Visualisations
3. Discussion sur les actions prioritaires (4 min)
```

### 🔧 Implémentation Développeur (1 heure)
```
1. PERFORMANCE-ANALYSIS-INDEX.md       (5 min)
2. performance-analysis-report.md      (30 min)
   → Focus: Sections 3, 4, 9 (Métriques, Opportunités, Recommandations)
3. performance-visual-summary.md       (10 min)
   → Section: Checklist de Correction
4. Tests et validation                 (15 min)
```

### 🔬 Analyse Technique Approfondie (2-3 heures)
```
1. performance-analysis-report.md      (complet)
2. lighthouse-desktop.json             (via jq)
3. lighthouse-mobile.json              (via jq)
4. Comparaisons et analyses croisées
```

---

## Actions Prioritaires

### 🔴 CRITIQUE - À faire IMMÉDIATEMENT

#### 1. Résoudre le CLS (Cumulative Layout Shift)
**Temps estimé:** 2-4 heures
**Impact:** +10-15 points de performance

```html
<!-- Avant (problématique) -->
<body data-bs-theme="dark">
  <!-- Le thème est appliqué après le chargement -->
</body>

<!-- Après (corrigé) -->
<head>
  <script>
    // Définir le thème AVANT le premier rendu
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  </script>
</head>
<body data-bs-theme="dark">
  <!-- Contenu stable dès le début -->
</body>
```

#### 2. Éliminer les Redirections
**Temps estimé:** 1 heure
**Impact:** -210ms (desktop) à -770ms (mobile)

```nginx
# Exemple de configuration Nginx pour éliminer les redirections
server {
    listen 80;
    server_name trbarry.github.io;
    return 301 https://trbarry.github.io/page_cv/$request_uri;
}
```

#### 3. Corriger le Contraste des Couleurs
**Temps estimé:** 2-3 heures
**Impact:** +5 points accessibilité, conformité WCAG

Utiliser: https://webaim.org/resources/contrastchecker/

---

### 🟡 IMPORTANT - À faire cette semaine

#### 4. Nettoyer le CSS Inutilisé
**Temps estimé:** 3-4 heures
**Impact:** -42 KiB, 40-150ms

```bash
# Installation de PurgeCSS
npm install -D @fullhuman/postcss-purgecss

# Configuration
# postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
```

---

## Validation et Tests

### 1. Re-tester avec Lighthouse

```bash
# Desktop
npx lighthouse https://trbarry.github.io/page_cv \
  --preset=desktop \
  --output=html \
  --output-path=./lighthouse-desktop-after.html

# Mobile
npx lighthouse https://trbarry.github.io/page_cv \
  --output=html \
  --output-path=./lighthouse-mobile-after.html
```

### 2. Comparer les Résultats

```bash
# Comparer les scores
diff <(jq '.categories.performance.score' lighthouse-desktop.json) \
     <(jq '.categories.performance.score' lighthouse-desktop-after.json)

# Comparer le CLS
diff <(jq '.audits["cumulative-layout-shift"].numericValue' lighthouse-desktop.json) \
     <(jq '.audits["cumulative-layout-shift"].numericValue' lighthouse-desktop-after.json)
```

### 3. Tests en Conditions Réelles

- **Chrome DevTools:** Performance tab, Network throttling
- **WebPageTest:** https://www.webpagetest.org/
- **Real User Monitoring:** Google Analytics, Search Console

---

## Automatisation et Monitoring

### Intégration CI/CD

```yaml
# Exemple GitHub Actions
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse
        run: |
          npm install -g @lhci/cli
          lhci autorun
      - name: Check thresholds
        run: |
          # CLS doit être < 0.1
          # Performance score doit être > 90
```

### Dashboard de Suivi

```javascript
// Exemple de parsing pour dashboard
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./performance-summary.json'));

const metrics = {
  performance: data.scores.desktop.performance * 100,
  cls_desktop: data.core_web_vitals.desktop.CLS.value,
  cls_mobile: data.core_web_vitals.mobile.CLS.value,
  lcp_desktop: data.core_web_vitals.desktop.LCP.numeric,
  lcp_mobile: data.core_web_vitals.mobile.LCP.numeric
};

console.log('Performance Dashboard:', metrics);
```

---

## Ressources et Documentation

### Documentation Officielle
- **Web Vitals:** https://web.dev/vitals/
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **Chrome DevTools:** https://developer.chrome.com/docs/devtools/

### Guides Spécifiques

#### CLS (Cumulative Layout Shift)
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
- https://web.dev/articles/debug-layout-shifts

#### LCP (Largest Contentful Paint)
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp

#### Accessibilité
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/

### Outils

| Outil | Usage | URL |
|-------|-------|-----|
| Lighthouse | Audit complet | Built-in Chrome DevTools |
| WebPageTest | Tests réels multi-localisations | webpagetest.org |
| PageSpeed Insights | Quick check Google | pagespeed.web.dev |
| PurgeCSS | Nettoyage CSS | purgecss.com |
| jq | Parsing JSON | stedolan.github.io/jq/ |

---

## Support et Questions

### Structure des Fichiers
```
/home/fab/projet/SIO25/cv/
├── QUICK-SUMMARY.md                    # Résumé 1 minute
├── PERFORMANCE-ANALYSIS-INDEX.md       # Index complet
├── README-PERFORMANCE-ANALYSIS.md      # Ce fichier (Guide)
├── performance-visual-summary.md       # Visualisations
├── performance-analysis-report.md      # Rapport détaillé
├── performance-summary.json            # Données JSON
├── lighthouse-desktop.json             # Données brutes desktop
└── lighthouse-mobile.json              # Données brutes mobile
```

### FAQ

**Q: Par où commencer?**
R: Lire QUICK-SUMMARY.md puis PERFORMANCE-ANALYSIS-INDEX.md

**Q: Comment implémenter les corrections?**
R: Suivre performance-analysis-report.md section 9 (Recommandations)

**Q: Comment automatiser les tests?**
R: Utiliser performance-summary.json dans votre CI/CD

**Q: Comment comparer avant/après?**
R: Re-générer lighthouse-*.json et comparer avec jq

**Q: Les fichiers JSON sont trop gros?**
R: Utiliser performance-summary.json (6 KiB) au lieu des fichiers complets

---

## Objectifs de Performance

| Métrique | Actuel Desktop | Actuel Mobile | Cible | Priorité |
|----------|----------------|---------------|-------|----------|
| Performance Score | 76/100 | 83/100 | 90+/100 | 🔴 |
| CLS | 0.78 | 0.327 | < 0.1 | 🔴 |
| LCP | 0.5s | 1.9s | < 2.5s | ✅ |
| TBT | 0ms | 50ms | < 100ms | ✅ |
| Accessibilité | 95/100 | 95/100 | 100/100 | 🟡 |

---

## Timeline Suggérée

### Semaine 1: Corrections Critiques
- [ ] Jour 1-2: Résoudre le CLS
- [ ] Jour 3: Éliminer les redirections
- [ ] Jour 4-5: Corriger les contrastes de couleurs

### Semaine 2-3: Optimisations
- [ ] Semaine 2: Nettoyer le CSS, Critical CSS
- [ ] Semaine 3: Tests et ajustements

### Semaine 4: Validation
- [ ] Tests Lighthouse
- [ ] Tests utilisateurs réels
- [ ] Mise en place monitoring

---

## Changelog

| Date | Version | Changements |
|------|---------|-------------|
| 2025-10-22 | 1.0 | Analyse initiale - 7 fichiers générés |

---

**Dernière mise à jour:** 22 octobre 2025, 16:20 UTC
**Générateur:** Claude Code (Anthropic)
**Outil d'analyse:** Google Lighthouse
