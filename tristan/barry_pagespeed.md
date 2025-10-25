# Analyse PageSpeed Insights - https://trbarry.github.io/page_cv

**Date d'analyse :** 2025-10-22
**Outil :** Google PageSpeed Insights / Lighthouse
**URL testée :** https://trbarry.github.io/page_cv

---

## 📊 RÉSULTATS DESKTOP

### Scores Globaux
| Métrique | Score | Niveau |
|----------|-------|--------|
| **Performance** | 62/100 | ⚠️ À améliorer |
| **Accessibilité** | 95/100 | ✅ Bon |
| **Bonnes Pratiques** | 96/100 | ✅ Bon |
| **SEO** | 100/100 | ✅ Excellent |

### Core Web Vitals (Desktop)
| Métrique | Valeur | Score | Évaluation |
|----------|--------|-------|-----------|
| **LCP** (Largest Contentful Paint) | 2.6s | 43/100 | 🔴 Mauvais |
| **CLS** (Cumulative Layout Shift) | 0.732 | 6/100 | 🔴 Très mauvais |
| **FID** (First Input Delay) | 70ms | 100/100 | ✅ Excellent |

### Métriques de Performance (Desktop)
| Métrique | Valeur | Score |
|----------|--------|-------|
| **FCP** (First Contentful Paint) | 0.8s | 95/100 |
| **TTI** (Time to Interactive) | 2.6s | 87/100 |
| **Speed Index** | 0.9s | 98/100 |
| **TBT** (Total Blocking Time) | 0ms | 100/100 |

---

## 📱 RÉSULTATS MOBILE

### Scores Globaux
| Métrique | Score | Niveau |
|----------|-------|--------|
| **Performance** | 85/100 | ✅ Bon |
| **Accessibilité** | 95/100 | ✅ Bon |
| **Bonnes Pratiques** | 96/100 | ✅ Bon |
| **SEO** | 100/100 | ✅ Excellent |

### Core Web Vitals (Mobile)
| Métrique | Valeur | Score | Évaluation |
|----------|--------|-------|-----------|
| **LCP** (Largest Contentful Paint) | 2.0s | 97/100 | ✅ Excellent |
| **CLS** (Cumulative Layout Shift) | 0.275 | 44/100 | ⚠️ À améliorer |
| **FID** (First Input Delay) | 70ms | 99/100 | ✅ Excellent |

### Métriques de Performance (Mobile)
| Métrique | Valeur | Score |
|----------|--------|-------|
| **FCP** (First Contentful Paint) | 0.8s | 100/100 |
| **TTI** (Time to Interactive) | 2.0s | 99/100 |
| **Speed Index** | 0.8s | 100/100 |
| **TBT** (Total Blocking Time) | 0ms | 100/100 |

---

## 🔴 PROBLÈMES CRITIQUES IDENTIFIÉS

### 1. Cumulative Layout Shift (CLS) - PRIORITÉ HAUTE

**Desktop:** 0.732 | **Mobile:** 0.275
**Seuil recommandé :** < 0.1

**Cause :** Layout shifts détectés lors du chargement des éléments
**Impact :** Détériore significativement l'expérience utilisateur et le score de performance
**Correction :** Fixer les dimensions des images et éléments dynamiques, réserver l'espace pour le contenu

### 2. Redirections Multiples - PRIORITÉ HAUTE

**Économie potentielle :** 750-760ms

**Cause :** Chaîne de redirections lors du chargement initial
**Impact :** Ralentit le chargement de la page
**Correction :** Éliminer les redirections inutiles et pointer directement vers la ressource finale

### 3. CSS Non Utilisé - PRIORITÉ MOYENNE

**Taille non utilisée :** 42 KiB
**Économie potentielle :** 40-150ms

**Cause :** Bootstrap et autres styles non exploités sur la page
**Impact :** Augmente la taille du fichier CSS à télécharger
**Correction :** Utiliser PurgeCSS ou Tailwind pour ne charger que le CSS nécessaire

### 4. Contraste des Couleurs - PRIORITÉ HAUTE (Accessibilité)

**Impact :** Ratio de contraste insuffisant entre texte et arrière-plan
**Correction :** Augmenter le contraste pour respecter WCAG AA (ratio minimum 4.5:1 pour le texte)

### 5. Erreurs JavaScript Console - PRIORITÉ MOYENNE

**Cause :** Erreurs détectées dans la console du navigateur
**Correction :** Déboguer et corriger les erreurs JavaScript

---

## ✅ POINTS POSITIFS

- ✅ **Excellente performance mobile** (85/100)
- ✅ **SEO parfait** (100/100)
- ✅ **Zéro temps de blocage** (TBT: 0ms)
- ✅ **Réactivité excellente** (FID: 70ms sur desktop, 99/100 sur mobile)
- ✅ **Chargement initial rapide** (FCP: 0.8s)
- ✅ **Bonnes pratiques respectées** (96/100)
- ✅ **Accessibilité globalement bonne** (95/100)

---

## 📋 COMPARAISON DESKTOP vs MOBILE

| Aspect | Desktop | Mobile | Tendance |
|--------|---------|--------|----------|
| Performance | 62/100 | 85/100 | ⬆️ Meilleur sur mobile |
| LCP | 2.6s | 2.0s | ⬆️ Meilleur sur mobile |
| CLS | 0.732 | 0.275 | ⬆️ Meilleur sur mobile |
| FCP | 0.8s | 0.8s | = Identique |
| Accessibilité | 95/100 | 95/100 | = Identique |
| SEO | 100/100 | 100/100 | = Excellent |
| Bonnes Pratiques | 96/100 | 96/100 | = Identique |

**Observation :** Le site performerait mieux sur mobile que sur desktop. Le problème de CLS est plus critique sur desktop.

---

## 🎯 RECOMMANDATIONS PAR PRIORITÉ

### Immédiat (Impact maximal)

1. **Corriger le CLS (Cumulative Layout Shift)**
   - Fixer les dimensions de tous les éléments (images, vidéos, blocs dynamiques)
   - Ajouter des reserves d'espace pour les contenus qui se chargent
   - Gain estimé : +15-25 points de performance

2. **Éliminer les redirections**
   - Identifier et éliminer les redirections dans la chaîne de chargement
   - Gain estimé : 750-760ms de temps de chargement

3. **Améliorer le contraste des couleurs**
   - Vérifier le ratio de contraste de tous les textes
   - Viser minimum 4.5:1 pour WCAG AA
   - Gain : Meilleure accessibilité et conformité

### Court terme (Impact modéré)

4. **Réduire le CSS non utilisé**
   - Purger Bootstrap ou utiliser un framework plus léger
   - Gain estimé : 40-150ms

5. **Corriger les erreurs JavaScript**
   - Déboguer et corriger les erreurs console
   - Gain : Meilleure stabilité et performance

6. **Optimiser le LCP (Desktop)**
   - Optimiser les images critiques
   - Différer le JavaScript non-critique
   - Gain estimé : 0.6-1.0s de réduction

### Moyen terme (Optimisations avancées)

7. **Optimiser la chaîne de dépendances réseau**
8. **Implémenter le lazy loading pour les images**
9. **Minifier et compresser les ressources**
10. **Ajouter un service worker pour le caching**

---

## 📈 OBJECTIFS D'AMÉLIORATION

| Métrique | Actuel | Objectif | Impact |
|----------|--------|----------|--------|
| Performance Desktop | 62/100 | 80/100 | +18 pts |
| CLS Desktop | 0.732 | < 0.1 | Critique |
| LCP Desktop | 2.6s | < 2.5s | Bon |
| Performance Mobile | 85/100 | 90/100 | +5 pts |
| Accessibilité | 95/100 | 98/100 | +3 pts |

---

## 📝 NOTES ADDITIONNELLES

- Le site affiche une bonne performance globale, particulièrement sur mobile
- Les scores de SEO et de Bonnes Pratiques sont excellents
- Les priorités d'amélioration sont bien ciblées sur CLS et redirections
- La maintenance régulière des performances recommandée (mensuelle)

---

**Statut :** Analyse complète réalisée
**Prochaine action :** Implémenter les corrections prioritaires
**Suivi :** Réévaluer après corrections via PageSpeed Insights
