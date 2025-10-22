# Aide-Mémoire - Commandes d'Analyse de Performance

## Navigation Rapide

```bash
# Lire le fichier de démarrage
cat START-HERE.md

# Résumé ultra-rapide (1 minute)
cat QUICK-SUMMARY.md

# Index complet (5 minutes)
cat PERFORMANCE-ANALYSIS-INDEX.md

# Rapport détaillé (30 minutes)
cat performance-analysis-report.md | less

# Visualisations
cat performance-visual-summary.md | less

# Données brutes formatées
cat RAW-DATA-EXTRACT.md | less

# Guide d'utilisation
cat README-PERFORMANCE-ANALYSIS.md | less
```

---

## Commandes jq pour Lighthouse

### Extraire les Scores

```bash
# Tous les scores (Desktop)
jq '.categories | map_values(.score * 100)' lighthouse-desktop.json

# Tous les scores (Mobile)
jq '.categories | map_values(.score * 100)' lighthouse-mobile.json

# Score de performance uniquement
jq '.categories.performance.score * 100' lighthouse-desktop.json

# Comparer Desktop vs Mobile
echo "Desktop:" && jq '.categories.performance.score * 100' lighthouse-desktop.json
echo "Mobile:" && jq '.categories.performance.score * 100' lighthouse-mobile.json
```

### Extraire les Core Web Vitals

```bash
# Core Web Vitals Desktop
jq '{
  FCP: .audits["first-contentful-paint"].displayValue,
  LCP: .audits["largest-contentful-paint"].displayValue,
  CLS: .audits["cumulative-layout-shift"].displayValue,
  TBT: .audits["total-blocking-time"].displayValue,
  TTI: .audits.interactive.displayValue
}' lighthouse-desktop.json

# Core Web Vitals Mobile
jq '{
  FCP: .audits["first-contentful-paint"].displayValue,
  LCP: .audits["largest-contentful-paint"].displayValue,
  CLS: .audits["cumulative-layout-shift"].displayValue,
  TBT: .audits["total-blocking-time"].displayValue,
  TTI: .audits.interactive.displayValue,
  Max_FID: .audits["max-potential-fid"].displayValue
}' lighthouse-mobile.json

# Valeurs numériques (pour calculs)
jq '{
  FCP_ms: .audits["first-contentful-paint"].numericValue,
  LCP_ms: .audits["largest-contentful-paint"].numericValue,
  CLS: .audits["cumulative-layout-shift"].numericValue,
  TBT_ms: .audits["total-blocking-time"].numericValue,
  TTI_ms: .audits.interactive.numericValue
}' lighthouse-desktop.json
```

### Extraire les Problèmes

```bash
# Tous les audits avec score < 1
jq '[.audits | to_entries[] |
  select(.value.score != null and .value.score < 1) |
  {id: .key, title: .value.title, score: .value.score}] |
  sort_by(.score) | .[:10]' lighthouse-desktop.json

# Audits critiques (score = 0)
jq '[.audits | to_entries[] |
  select(.value.score == 0) |
  {id: .key, title: .value.title, displayValue: .value.displayValue}]' lighthouse-desktop.json

# Opportunités d'optimisation avec économies
jq '[.audits | to_entries[] |
  select(.value.details.type == "opportunity") |
  {
    id: .key,
    title: .value.title,
    savings: .value.displayValue,
    score: .value.score
  }] | sort_by(.score)' lighthouse-desktop.json
```

### Extraire les Diagnostics

```bash
# Diagnostics techniques
jq '{
  mainthread: .audits["mainthread-work-breakdown"].displayValue,
  javascript: .audits["bootup-time"].displayValue,
  dom_size: .audits["dom-size"].displayValue,
  page_size: .audits["total-byte-weight"].displayValue
}' lighthouse-desktop.json

# Métriques réseau
jq '{
  rtt: .audits["network-rtt"].displayValue,
  server_latency: .audits["network-server-latency"].displayValue
}' lighthouse-desktop.json
```

### Extraire les Éléments CLS

```bash
# Éléments causant le layout shift
jq '.audits["layout-shifts"].details.items | map({
  element: .node.snippet,
  score: .score
})' lighthouse-desktop.json
```

---

## Comparaisons

### Comparer Deux Analyses

```bash
# Comparer les scores de performance
diff <(jq '.categories.performance.score' lighthouse-desktop.json) \
     <(jq '.categories.performance.score' lighthouse-desktop-new.json)

# Comparer tous les scores
diff <(jq '.categories | map_values(.score)' lighthouse-desktop.json | jq -S .) \
     <(jq '.categories | map_values(.score)' lighthouse-desktop-new.json | jq -S .)

# Comparer le CLS
echo "Avant: $(jq '.audits["cumulative-layout-shift"].displayValue' lighthouse-desktop.json)"
echo "Après: $(jq '.audits["cumulative-layout-shift"].displayValue' lighthouse-desktop-new.json)"

# Différence de CLS en nombre
jq -n --argjson before $(jq '.audits["cumulative-layout-shift"].numericValue' lighthouse-desktop.json) \
      --argjson after $(jq '.audits["cumulative-layout-shift"].numericValue' lighthouse-desktop-new.json) \
      '$before - $after'
```

---

## Génération de Nouveaux Rapports

### Lighthouse via npx

```bash
# Desktop
npx lighthouse https://trbarry.github.io/page_cv \
  --output=json \
  --output-path=./lighthouse-desktop.json \
  --preset=desktop \
  --quiet \
  --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"

# Mobile (par défaut)
npx lighthouse https://trbarry.github.io/page_cv \
  --output=json \
  --output-path=./lighthouse-mobile.json \
  --quiet \
  --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"

# Génération HTML (pour navigation visuelle)
npx lighthouse https://trbarry.github.io/page_cv \
  --output=html \
  --output-path=./lighthouse-report.html \
  --preset=desktop

# Multi-formats
npx lighthouse https://trbarry.github.io/page_cv \
  --output=json,html \
  --output-path=./lighthouse-desktop \
  --preset=desktop
```

---

## Utilisation du fichier performance-summary.json

```bash
# Afficher formaté
cat performance-summary.json | jq '.'

# Extraire les scores
jq '.scores' performance-summary.json

# Extraire les Core Web Vitals
jq '.core_web_vitals' performance-summary.json

# Extraire les problèmes critiques
jq '.critical_issues' performance-summary.json

# Extraire une métrique spécifique
jq '.core_web_vitals.desktop.CLS' performance-summary.json

# Extraire les recommandations prioritaires
jq '.recommendations_summary.priority_1' performance-summary.json

# Créer un rapport personnalisé
jq '{
  performance: .scores.desktop.performance,
  cls: .core_web_vitals.desktop.CLS.value,
  issues: .critical_issues | length,
  actions: .recommendations_summary.priority_1
}' performance-summary.json
```

---

## Filtres et Recherches

### Rechercher dans les Rapports Markdown

```bash
# Rechercher un terme
grep -i "cumulative layout shift" *.md

# Rechercher avec contexte (3 lignes avant/après)
grep -i -C 3 "redirections" performance-analysis-report.md

# Rechercher les sections d'actions
grep "^##.*Action" *.md

# Compter les occurrences d'un problème
grep -c "CLS" performance-analysis-report.md
```

### Rechercher dans les JSON

```bash
# Rechercher tous les audits contenant "css"
jq '[.audits | to_entries[] | select(.key | contains("css"))] | 
  map({id: .key, title: .value.title, score: .value.score})' lighthouse-desktop.json

# Rechercher les audits d'accessibilité
jq '[.audits | to_entries[] | 
  select(.value.title | contains("aria") or contains("alt") or contains("contrast"))] |
  map({id: .key, title: .value.title, score: .value.score})' lighthouse-desktop.json
```

---

## Exports et Conversions

### Créer un CSV des Métriques

```bash
# Header
echo "Metric,Desktop,Mobile" > metrics.csv

# Core Web Vitals
jq -r '.core_web_vitals | 
  "FCP," + .desktop.FCP.value + "," + .mobile.FCP.value,
  "LCP," + .desktop.LCP.value + "," + .mobile.LCP.value,
  "CLS," + (.desktop.CLS.value | tostring) + "," + (.mobile.CLS.value | tostring),
  "TBT," + .desktop.TBT.value + "," + .mobile.TBT.value' performance-summary.json >> metrics.csv

cat metrics.csv
```

### Créer un JSON simplifié

```bash
# Créer un résumé ultra-simple
jq '{
  url: .analysis_metadata.url,
  date: .analysis_metadata.date,
  performance_desktop: .scores.desktop.performance,
  performance_mobile: .scores.mobile.performance,
  cls_desktop: .core_web_vitals.desktop.CLS.value,
  cls_mobile: .core_web_vitals.mobile.CLS.value,
  critical_issues: .critical_issues | length
}' performance-summary.json > simple-summary.json
```

---

## Surveillance et Monitoring

### Script de Test Automatique

```bash
#!/bin/bash
# test-performance.sh

URL="https://trbarry.github.io/page_cv"
THRESHOLD=90

echo "Testing performance..."
npx lighthouse $URL --quiet --output=json --output-path=/tmp/lighthouse.json

SCORE=$(jq '.categories.performance.score * 100' /tmp/lighthouse.json)
CLS=$(jq '.audits["cumulative-layout-shift"].numericValue' /tmp/lighthouse.json)

echo "Performance Score: $SCORE"
echo "CLS: $CLS"

if (( $(echo "$SCORE >= $THRESHOLD" | bc -l) )); then
  echo "✅ Performance OK"
  exit 0
else
  echo "❌ Performance below threshold"
  exit 1
fi
```

### Surveillance Continue

```bash
# Tester toutes les 5 minutes (cron)
*/5 * * * * /path/to/test-performance.sh >> /var/log/performance.log 2>&1

# Ou avec watch
watch -n 300 'npx lighthouse https://trbarry.github.io/page_cv --quiet --output=json | jq ".categories.performance.score * 100"'
```

---

## Intégration CI/CD

### GitHub Actions

```yaml
name: Performance Check
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse
        run: |
          npm install -g lighthouse
          lighthouse https://trbarry.github.io/page_cv \
            --output=json \
            --output-path=./lighthouse.json \
            --quiet
      - name: Check Performance
        run: |
          SCORE=$(jq '.categories.performance.score * 100' lighthouse.json)
          if (( $(echo "$SCORE < 90" | bc -l) )); then
            echo "Performance score too low: $SCORE"
            exit 1
          fi
```

---

## Outils Complémentaires

### WebPageTest

```bash
# Tester avec WebPageTest API
curl -X POST "https://www.webpagetest.org/runtest.php" \
  -d "url=https://trbarry.github.io/page_cv" \
  -d "k=YOUR_API_KEY" \
  -d "f=json"
```

### Chrome DevTools Protocol

```bash
# Capturer les métriques de performance en temps réel
chrome --headless --remote-debugging-port=9222 https://trbarry.github.io/page_cv

# Puis utiliser un script Node.js pour capturer les métriques
```

---

## Ressources

### Documentation
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- Web Vitals: https://web.dev/vitals/
- jq Manual: https://stedolan.github.io/jq/manual/

### Outils en Ligne
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Contrast Checker: https://webaim.org/resources/contrastchecker/

---

**Dernière mise à jour:** 22 octobre 2025
