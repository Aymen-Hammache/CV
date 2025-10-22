# Résumé Éclair - Analyse de Performance
## https://trbarry.github.io/page_cv

**Date:** 22 octobre 2025 | **Outil:** Google Lighthouse

---

## Scores (sur 100)

| Catégorie | Desktop | Mobile |
|-----------|---------|--------|
| Performance | 76 | 83 |
| Accessibilité | 95 | 95 |
| Bonnes Pratiques | 96 | 96 |
| SEO | 100 | 100 |

---

## Core Web Vitals

| Métrique | Desktop | Mobile | Seuil | OK? |
|----------|---------|--------|-------|-----|
| LCP | 0.5s | 1.9s | < 2.5s | ✅ |
| CLS | 0.78 | 0.33 | < 0.1 | ❌ |
| TBT | 0ms | 50ms | < 100ms | ✅ |

---

## Problèmes Critiques

### 🔴 1. CLS (Cumulative Layout Shift)
- **Desktop:** 0.78 (7.8x trop élevé)
- **Mobile:** 0.33 (3.3x trop élevé)
- **Cause:** Élément `<body data-bs-theme="dark">`
- **Fix:** Définir le thème avant le rendu
- **Impact:** +10-15 points de performance

### 🔴 2. Redirections
- **Desktop:** +210ms de délai
- **Mobile:** +770ms de délai
- **Fix:** Servir l'URL finale directement
- **Impact:** 210-770ms économisés

### 🟡 3. CSS Inutilisé
- **Taille:** 42 KiB
- **Impact:** 40-150ms
- **Fix:** PurgeCSS
- **Impact:** Économie bande passante

### 🟡 4. Contraste Couleurs
- **Problème:** Ratio insuffisant
- **Fix:** Ajuster pour 4.5:1 minimum
- **Impact:** +5 points accessibilité

---

## Actions Immédiates (Semaine 1)

1. ✅ Fixer le thème dark avant rendu (2-4h)
2. ✅ Éliminer les redirections (1h)
3. ✅ Corriger les contrastes (2-3h)

**Gain attendu:** Score Performance 90+, CLS < 0.1

---

## Points Forts

- ✅ SEO parfait (100/100)
- ✅ Page légère (209 KiB)
- ✅ JavaScript optimisé
- ✅ Images optimisées
- ✅ DOM minimal (161 éléments)

---

## Fichiers Générés

1. **PERFORMANCE-ANALYSIS-INDEX.md** - Index complet
2. **performance-analysis-report.md** - Rapport détaillé (14 KiB)
3. **performance-visual-summary.md** - Visualisations (18 KiB)
4. **performance-summary.json** - Données JSON (6 KiB)
5. **lighthouse-desktop.json** - Données brutes (717 KiB)
6. **lighthouse-mobile.json** - Données brutes (693 KiB)

**Localisation:** `/home/fab/projet/SIO25/cv/`

---

## Objectif Final

**Avant:** Performance 76-83/100, CLS 0.33-0.78
**Après:** Performance 90+/100, CLS < 0.1

**Temps estimé:** 2-3 semaines
**Effort:** ~20-30 heures

---

**Pour plus de détails, consulter PERFORMANCE-ANALYSIS-INDEX.md**
