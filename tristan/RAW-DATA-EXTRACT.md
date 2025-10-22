# Extraction des Données Brutes - Analyse de Performance

## Métadonnées de l'Analyse

```json
{
  "url": "https://trbarry.github.io/page_cv/",
  "fetch_time_desktop": "2025-10-22T14:07:23.498Z",
  "fetch_time_mobile": "2025-10-22T14:07:45.301Z",
  "tool": "Google Lighthouse",
  "version": "Latest (npx)",
  "lighthouse_version": "CLI",
  "environment": "Linux 6.14.0-33-generic"
}
```

---

## DONNÉES BRUTES DESKTOP

### Scores de Catégories
```json
{
  "performance": 0.76,
  "accessibility": 0.95,
  "best-practices": 0.96,
  "seo": 1.00
}
```

### Core Web Vitals
```json
{
  "first-contentful-paint": {
    "displayValue": "0.2 s",
    "numericValue": 200
  },
  "largest-contentful-paint": {
    "displayValue": "0.5 s",
    "numericValue": 500
  },
  "total-blocking-time": {
    "displayValue": "0 ms",
    "numericValue": 0
  },
  "cumulative-layout-shift": {
    "displayValue": "0.78",
    "numericValue": 0.7800207620584239
  },
  "speed-index": {
    "displayValue": "0.3 s",
    "numericValue": 300
  },
  "interactive": {
    "displayValue": "0.5 s",
    "numericValue": 500
  }
}
```

### Opportunités d'Optimisation (Critiques)
```json
[
  {
    "id": "redirects",
    "title": "Avoid multiple page redirects",
    "description": "Redirects introduce additional delays before the page can be loaded.",
    "score": 0,
    "displayValue": "Est savings of 210 ms",
    "numericValue": 207.464
  },
  {
    "id": "unused-css-rules",
    "title": "Reduce unused CSS",
    "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content.",
    "score": 0,
    "displayValue": "Est savings of 42 KiB",
    "numericValue": 40
  },
  {
    "id": "cumulative-layout-shift",
    "title": "Cumulative Layout Shift",
    "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport.",
    "score": 0.05,
    "displayValue": "0.78",
    "numericValue": 0.7800207620584239
  }
]
```

### Layout Shifts (Éléments problématiques)
```json
{
  "title": "Avoid large layout shifts",
  "score": 0,
  "details": [
    {
      "node": "<body data-bs-theme=\"dark\">",
      "score": 0.774250936329588
    },
    {
      "node": "<div class=\"d-flex flex-wrap gap-2\">",
      "score": 0.004497330688420493
    },
    {
      "node": "<ul class=\"navbar-nav ms-auto align-items-lg-center gap-lg-2\">",
      "score": 0.0012724950404153547
    }
  ]
}
```

### Diagnostics Techniques
```json
{
  "mainthread-work-breakdown": {
    "title": "Minimizes main-thread work",
    "displayValue": "0.1 s",
    "score": 1
  },
  "bootup-time": {
    "title": "JavaScript execution time",
    "displayValue": "0.0 s",
    "score": 1
  },
  "uses-long-cache-ttl": {
    "title": "Uses efficient cache policy on static assets",
    "displayValue": "0 resources found",
    "score": 1
  },
  "dom-size": {
    "title": "Avoids an excessive DOM size",
    "displayValue": "161 elements",
    "score": 1,
    "numericValue": 161
  },
  "font-display": {
    "title": "All text remains visible during webfont loads",
    "score": 1
  }
}
```

### Analyse des Ressources
```json
{
  "total-byte-weight": {
    "title": "Avoids enormous network payloads",
    "displayValue": "Total size was 209 KiB",
    "score": 1,
    "numericValue": 214499
  },
  "render-blocking-resources": {
    "title": "Eliminate render-blocking resources",
    "score": 1,
    "numericValue": 0
  },
  "unminified-css": {
    "title": "Minify CSS",
    "score": 1
  },
  "unminified-javascript": {
    "title": "Minify JavaScript",
    "score": 1
  }
}
```

### Métriques Réseau
```json
{
  "network-rtt": {
    "title": "Network Round Trip Times",
    "displayValue": "10 ms",
    "numericValue": 9.094
  },
  "network-server-latency": {
    "title": "Server Backend Latencies",
    "displayValue": "10 ms",
    "numericValue": 7.7464999999999975
  }
}
```

### Optimisation des Images
```json
{
  "modern-image-formats": {
    "title": "Serve images in next-gen formats",
    "score": 1,
    "displayValue": ""
  },
  "uses-optimized-images": {
    "title": "Efficiently encode images",
    "score": 1,
    "displayValue": ""
  },
  "uses-responsive-images": {
    "title": "Properly size images",
    "score": 1,
    "displayValue": ""
  }
}
```

### Accessibilité
```json
{
  "color-contrast": {
    "title": "Background and foreground colors do not have a sufficient contrast ratio.",
    "score": 0
  },
  "image-alt": {
    "title": "Image elements have [alt] attributes",
    "score": null
  },
  "heading-order": {
    "title": "Heading elements appear in a sequentially-descending order",
    "score": 1
  }
}
```

### SEO
```json
{
  "meta-description": {
    "title": "Document has a meta description",
    "score": 1
  },
  "viewport": {
    "title": "Has a <meta name=\"viewport\"> tag with width or initial-scale",
    "score": 1
  }
}
```

---

## DONNÉES BRUTES MOBILE

### Scores de Catégories
```json
{
  "performance": 0.83,
  "accessibility": 0.95,
  "best-practices": 0.96,
  "seo": 1.00
}
```

### Core Web Vitals
```json
{
  "first-contentful-paint": {
    "displayValue": "0.8 s",
    "numericValue": 800
  },
  "largest-contentful-paint": {
    "displayValue": "1.9 s",
    "numericValue": 1947.5805000000003
  },
  "total-blocking-time": {
    "displayValue": "50 ms",
    "numericValue": 50
  },
  "cumulative-layout-shift": {
    "displayValue": "0.327",
    "numericValue": 0.3271350574452482
  },
  "speed-index": {
    "displayValue": "0.8 s",
    "numericValue": 800
  },
  "interactive": {
    "displayValue": "2.0 s",
    "numericValue": 1955.2972500000003
  },
  "max-potential-fid": {
    "displayValue": "100 ms",
    "numericValue": 102
  }
}
```

### Opportunités d'Optimisation (Critiques)
```json
[
  {
    "id": "redirects",
    "title": "Avoid multiple page redirects",
    "description": "Redirects introduce additional delays before the page can be loaded.",
    "score": 0,
    "displayValue": "Est savings of 770 ms",
    "numericValue": 768.738
  },
  {
    "id": "unused-css-rules",
    "title": "Reduce unused CSS",
    "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content.",
    "score": 0,
    "displayValue": "Est savings of 42 KiB",
    "numericValue": 150
  },
  {
    "id": "cumulative-layout-shift",
    "title": "Cumulative Layout Shift",
    "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport.",
    "score": 0.35,
    "displayValue": "0.327",
    "numericValue": 0.3271350574452482
  },
  {
    "id": "largest-contentful-paint",
    "title": "Largest Contentful Paint",
    "description": "Largest Contentful Paint marks the time at which the largest text or image is painted.",
    "score": 0.97,
    "displayValue": "1.9 s",
    "numericValue": 1947.5805000000003
  }
]
```

### Layout Shifts (Éléments problématiques)
```json
{
  "title": "Avoid large layout shifts",
  "score": 0,
  "details": [
    {
      "node": "<body data-bs-theme=\"dark\">",
      "score": 0.31922083839611176
    },
    {
      "node": "<span class=\"pill-link\" aria-disabled=\"true\">",
      "score": 0.006566885367778206
    },
    {
      "node": "<a class=\"btn btn-ghost btn-sm\" href=\"https://github.com/Trbarry\" target=\"_blank\" rel=\"noopener\">",
      "score": 0.0013473336813582166
    }
  ]
}
```

### Diagnostics Techniques
```json
{
  "mainthread-work-breakdown": {
    "title": "Minimizes main-thread work",
    "displayValue": "0.4 s",
    "score": 1
  },
  "bootup-time": {
    "title": "JavaScript execution time",
    "displayValue": "0.0 s",
    "score": 1
  },
  "uses-long-cache-ttl": {
    "title": "Uses efficient cache policy on static assets",
    "displayValue": "0 resources found",
    "score": 1
  },
  "dom-size": {
    "title": "Avoids an excessive DOM size",
    "displayValue": "161 elements",
    "score": 1,
    "numericValue": 161
  },
  "font-display": {
    "title": "All text remains visible during webfont loads",
    "score": 1
  }
}
```

### Analyse des Ressources
```json
{
  "total-byte-weight": {
    "title": "Avoids enormous network payloads",
    "displayValue": "Total size was 209 KiB",
    "score": 1,
    "numericValue": 214342
  },
  "render-blocking-resources": {
    "title": "Eliminate render-blocking resources",
    "score": 1,
    "numericValue": 0
  },
  "unminified-css": {
    "title": "Minify CSS",
    "score": 1
  },
  "unminified-javascript": {
    "title": "Minify JavaScript",
    "score": 1
  }
}
```

### Métriques Réseau
```json
{
  "network-rtt": {
    "title": "Network Round Trip Times",
    "displayValue": "10 ms",
    "numericValue": 12.761000000000001
  },
  "network-server-latency": {
    "title": "Server Backend Latencies",
    "displayValue": "20 ms",
    "numericValue": 18.738
  }
}
```

### Optimisation des Images
```json
{
  "modern-image-formats": {
    "title": "Serve images in next-gen formats",
    "score": 1,
    "displayValue": ""
  },
  "uses-optimized-images": {
    "title": "Efficiently encode images",
    "score": 1,
    "displayValue": ""
  },
  "uses-responsive-images": {
    "title": "Properly size images",
    "score": 1,
    "displayValue": ""
  }
}
```

### Accessibilité
```json
{
  "color-contrast": {
    "title": "Background and foreground colors do not have a sufficient contrast ratio.",
    "score": 0
  },
  "image-alt": {
    "title": "Image elements have [alt] attributes",
    "score": null
  },
  "heading-order": {
    "title": "Heading elements appear in a sequentially-descending order",
    "score": 1
  }
}
```

### SEO
```json
{
  "meta-description": {
    "title": "Document has a meta description",
    "score": 1
  },
  "viewport": {
    "title": "Has a <meta name=\"viewport\"> tag with width or initial-scale",
    "score": 1
  }
}
```

---

## COMPARAISON DESKTOP vs MOBILE

### Scores
| Catégorie | Desktop | Mobile | Différence |
|-----------|---------|--------|------------|
| Performance | 0.76 (76%) | 0.83 (83%) | +0.07 (+7%) |
| Accessibilité | 0.95 (95%) | 0.95 (95%) | 0.00 (0%) |
| Bonnes Pratiques | 0.96 (96%) | 0.96 (96%) | 0.00 (0%) |
| SEO | 1.00 (100%) | 1.00 (100%) | 0.00 (0%) |

### Core Web Vitals
| Métrique | Desktop | Mobile | Différence | Seuil Good |
|----------|---------|--------|------------|------------|
| FCP | 0.2s (200ms) | 0.8s (800ms) | +0.6s | < 1.8s |
| LCP | 0.5s (500ms) | 1.9s (1948ms) | +1.4s | < 2.5s |
| CLS | 0.78 | 0.327 | -0.453 | < 0.1 |
| TBT | 0ms | 50ms | +50ms | < 200ms |
| TTI | 0.5s (500ms) | 2.0s (1955ms) | +1.5s | < 3.8s |

### Opportunités (Impact en ms)
| Opportunité | Desktop | Mobile | Différence |
|-------------|---------|--------|------------|
| Redirections | 207ms | 769ms | +562ms |
| CSS inutilisé | 40ms | 150ms | +110ms |

### Ressources
| Métrique | Desktop | Mobile | Différence |
|----------|---------|--------|------------|
| Poids total | 214499 bytes | 214342 bytes | -157 bytes |
| RTT | 9.094ms | 12.761ms | +3.667ms |
| Latence serveur | 7.746ms | 18.738ms | +10.992ms |
| Thread principal | 0.1s (100ms) | 0.4s (400ms) | +300ms |

---

## PROBLÈMES IDENTIFIÉS PAR ORDRE DE SÉVÉRITÉ

### 1. CRITIQUE - CLS Desktop (0.78)
```json
{
  "severity": "critical",
  "metric": "cumulative-layout-shift",
  "current_value": 0.78,
  "threshold": 0.1,
  "ratio_over_threshold": 7.8,
  "score": 0.05,
  "main_culprit": {
    "element": "<body data-bs-theme=\"dark\">",
    "score": 0.774,
    "percentage_of_total": 99.2
  },
  "impact": "Very High - Causes content to shift unpredictably",
  "user_experience": "Poor - Elements move while user is trying to interact",
  "fix_priority": "IMMEDIATE"
}
```

### 2. CRITIQUE - Redirections Mobile (770ms)
```json
{
  "severity": "critical",
  "audit": "redirects",
  "desktop_impact": 207.464,
  "mobile_impact": 768.738,
  "score": 0,
  "impact": "High - Adds significant delay before page load",
  "user_experience": "Frustrating - Noticeable delay on mobile",
  "fix_priority": "IMMEDIATE"
}
```

### 3. CRITIQUE - CLS Mobile (0.327)
```json
{
  "severity": "high",
  "metric": "cumulative-layout-shift",
  "current_value": 0.327,
  "threshold": 0.1,
  "ratio_over_threshold": 3.27,
  "score": 0.35,
  "main_culprit": {
    "element": "<body data-bs-theme=\"dark\">",
    "score": 0.319,
    "percentage_of_total": 97.5
  },
  "impact": "High - Content shifts affect user interaction",
  "user_experience": "Poor - Layout instability",
  "fix_priority": "IMMEDIATE"
}
```

### 4. IMPORTANT - CSS Inutilisé (42 KiB)
```json
{
  "severity": "medium-high",
  "audit": "unused-css-rules",
  "size": 43008,
  "size_display": "42 KiB",
  "desktop_impact": 40,
  "mobile_impact": 150,
  "score": 0,
  "impact": "Medium - Wastes bandwidth and slows initial render",
  "user_experience": "Slightly slower page load",
  "fix_priority": "THIS_WEEK"
}
```

### 5. MOYEN - Contraste des Couleurs
```json
{
  "severity": "medium",
  "audit": "color-contrast",
  "category": "accessibility",
  "score": 0,
  "impact": "Medium - Affects readability for users with vision impairments",
  "user_experience": "Reduced accessibility",
  "wcag_compliance": "FAIL - Does not meet WCAG AA standards",
  "fix_priority": "THIS_WEEK"
}
```

---

## DONNÉES POUR GRAPHIQUES ET VISUALISATIONS

### Données pour Score Radar Chart
```json
{
  "desktop": {
    "performance": 76,
    "accessibility": 95,
    "best_practices": 96,
    "seo": 100
  },
  "mobile": {
    "performance": 83,
    "accessibility": 95,
    "best_practices": 96,
    "seo": 100
  }
}
```

### Données pour Waterfall Chart (Mobile)
```json
{
  "timeline_ms": {
    "0": "Start",
    "769": "End of redirects",
    "800": "First Contentful Paint",
    "800": "Speed Index",
    "1948": "Largest Contentful Paint",
    "1955": "Time to Interactive"
  },
  "phases": {
    "redirects": {
      "start": 0,
      "duration": 769,
      "color": "red"
    },
    "loading": {
      "start": 769,
      "duration": 1186,
      "color": "orange"
    },
    "rendering": {
      "start": 1955,
      "duration": 45,
      "color": "green"
    }
  }
}
```

### Données pour CLS Contribution Chart
```json
{
  "desktop": [
    {
      "element": "body[data-bs-theme]",
      "score": 0.774,
      "percentage": 99.2
    },
    {
      "element": "div.d-flex",
      "score": 0.004,
      "percentage": 0.5
    },
    {
      "element": "ul.navbar-nav",
      "score": 0.001,
      "percentage": 0.2
    }
  ],
  "mobile": [
    {
      "element": "body[data-bs-theme]",
      "score": 0.319,
      "percentage": 97.5
    },
    {
      "element": "span.pill-link",
      "score": 0.007,
      "percentage": 2.0
    },
    {
      "element": "a.btn.btn-ghost",
      "score": 0.001,
      "percentage": 0.4
    }
  ]
}
```

---

## ACCÈS AUX FICHIERS JSON COMPLETS

### Commandes jq Utiles

#### Extraire tous les audits échoués
```bash
jq '[.audits | to_entries[] |
  select(.value.score != null and .value.score < 1) |
  {id: .key, title: .value.title, score: .value.score, description: .value.description}] |
  sort_by(.score)' lighthouse-desktop.json
```

#### Extraire les Core Web Vitals uniquement
```bash
jq '{
  FCP: .audits["first-contentful-paint"],
  LCP: .audits["largest-contentful-paint"],
  CLS: .audits["cumulative-layout-shift"],
  TBT: .audits["total-blocking-time"],
  TTI: .audits.interactive
} | map_values({displayValue, numericValue, score})' lighthouse-desktop.json
```

#### Extraire toutes les métriques de performance
```bash
jq '.audits | to_entries |
  map(select(.value.numericValue != null)) |
  map({id: .key, value: .value.numericValue, display: .value.displayValue})' lighthouse-desktop.json
```

#### Comparer deux rapports
```bash
# Créer un diff des scores
diff <(jq '.categories | map_values(.score)' lighthouse-desktop.json | jq -S .) \
     <(jq '.categories | map_values(.score)' lighthouse-desktop-new.json | jq -S .)
```

---

## FICHIERS SOURCES

Tous les fichiers JSON complets sont disponibles dans:
- **Desktop:** `/home/fab/projet/SIO25/cv/lighthouse-desktop.json` (717 KiB)
- **Mobile:** `/home/fab/projet/SIO25/cv/lighthouse-mobile.json` (693 KiB)

Ces fichiers contiennent:
- Tous les audits (100+)
- Traces de performance complètes
- Arbre de dépendances réseau
- Captures d'écran
- Méta-données de navigation
- Configurations d'émulation
- Timestamps précis

---

**Note:** Ce document contient les données brutes extraites des rapports Lighthouse complets.
Pour une analyse structurée, consultez `performance-summary.json`.
Pour un rapport lisible, consultez `performance-analysis-report.md`.
