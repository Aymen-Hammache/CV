# Rapport d'Analyse de Performance - https://trbarry.github.io/page_cv

**Date d'analyse:** 22 octobre 2025
**Outil utilisé:** Google Lighthouse
**URL analysée:** https://trbarry.github.io/page_cv/

---

## Résumé Exécutif

Ce rapport présente une analyse complète des performances du site web pour les versions desktop et mobile, incluant les métriques Core Web Vitals, les scores de qualité, et les recommandations d'optimisation.

---

## 1. Scores Globaux

### Version Desktop
- **Performance:** 76/100 (Bon)
- **Accessibilité:** 95/100 (Excellent)
- **Bonnes Pratiques:** 96/100 (Excellent)
- **SEO:** 100/100 (Parfait)

### Version Mobile
- **Performance:** 83/100 (Bon)
- **Accessibilité:** 95/100 (Excellent)
- **Bonnes Pratiques:** 96/100 (Excellent)
- **SEO:** 100/100 (Parfait)

---

## 2. Métriques de Performance (Core Web Vitals)

### 2.1 Version Desktop

| Métrique | Valeur | Description |
|----------|--------|-------------|
| **First Contentful Paint (FCP)** | 0.2 s | Temps avant l'affichage du premier contenu |
| **Largest Contentful Paint (LCP)** | 0.5 s | Temps de chargement du plus grand élément visible |
| **Total Blocking Time (TBT)** | 0 ms | Temps total de blocage du thread principal |
| **Cumulative Layout Shift (CLS)** | 0.78 | Décalage cumulatif de la mise en page |
| **Speed Index** | 0.3 s | Vitesse d'affichage du contenu |
| **Time to Interactive (TTI)** | 0.5 s | Temps avant l'interactivité complète |

### 2.2 Version Mobile

| Métrique | Valeur | Description |
|----------|--------|-------------|
| **First Contentful Paint (FCP)** | 0.8 s | Temps avant l'affichage du premier contenu |
| **Largest Contentful Paint (LCP)** | 1.9 s | Temps de chargement du plus grand élément visible |
| **Total Blocking Time (TBT)** | 50 ms | Temps total de blocage du thread principal |
| **Cumulative Layout Shift (CLS)** | 0.327 | Décalage cumulatif de la mise en page |
| **Speed Index** | 0.8 s | Vitesse d'affichage du contenu |
| **Time to Interactive (TTI)** | 2.0 s | Temps avant l'interactivité complète |
| **Max Potential First Input Delay** | 100 ms | Délai maximal de première interaction |

### 2.3 Analyse des Core Web Vitals

#### LCP (Largest Contentful Paint)
- **Desktop:** ✅ Excellent (0.5s) - Bien en dessous du seuil de 2.5s
- **Mobile:** ✅ Bon (1.9s) - Sous le seuil de 2.5s

#### FID/TBT (First Input Delay / Total Blocking Time)
- **Desktop:** ✅ Excellent (0ms TBT)
- **Mobile:** ✅ Excellent (50ms TBT, 100ms Max FID)

#### CLS (Cumulative Layout Shift)
- **Desktop:** ❌ Problématique (0.78) - Dépasse largement le seuil de 0.1
- **Mobile:** ❌ Problématique (0.327) - Dépasse largement le seuil de 0.1

---

## 3. Opportunités d'Optimisation Prioritaires

### 3.1 Version Desktop

#### 🔴 Critique - Redirections Multiples
- **Impact:** Économie potentielle de 210 ms
- **Score:** 0/100
- **Description:** Les redirections introduisent des délais supplémentaires avant le chargement de la page
- **Action:** Éviter les redirections de page multiples

#### 🔴 Critique - CSS Inutilisé
- **Impact:** Économie potentielle de 42 KiB
- **Score:** 0/100
- **Description:** Réduire les règles CSS inutilisées pour diminuer l'activité réseau
- **Action:** Identifier et supprimer les règles CSS non utilisées

#### 🔴 Critique - Cumulative Layout Shift
- **Impact:** CLS de 0.78
- **Score:** 5/100
- **Description:** Décalages importants de la mise en page détectés
- **Éléments problématiques:**
  - `<body data-bs-theme="dark">` (Score: 0.774)
  - `<div class="d-flex flex-wrap gap-2">` (Score: 0.004)
  - `<ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">` (Score: 0.001)

### 3.2 Version Mobile

#### 🔴 Critique - Redirections Multiples
- **Impact:** Économie potentielle de 770 ms
- **Score:** 0/100
- **Description:** Les redirections sont encore plus coûteuses sur mobile
- **Action:** Éliminer toutes les redirections

#### 🔴 Critique - CSS Inutilisé
- **Impact:** Économie potentielle de 42 KiB (150 ms)
- **Score:** 0/100
- **Description:** Impact plus important sur mobile en raison de connexions plus lentes
- **Action:** Optimiser le CSS pour mobile

#### 🟡 Importante - Cumulative Layout Shift
- **Impact:** CLS de 0.327
- **Score:** 35/100
- **Description:** Décalages de mise en page présents mais moins sévères qu'en desktop
- **Éléments problématiques:**
  - `<body data-bs-theme="dark">` (Score: 0.319)
  - `<span class="pill-link" aria-disabled="true">` (Score: 0.007)
  - `<a class="btn btn-ghost btn-sm" href="https://github.com/Trbarry">` (Score: 0.001)

---

## 4. Diagnostics Techniques

### 4.1 Travail du Thread Principal

| Version | Temps Total | Score |
|---------|-------------|-------|
| Desktop | 0.1 s | ✅ 100/100 |
| Mobile | 0.4 s | ✅ 100/100 |

### 4.2 Temps d'Exécution JavaScript

| Version | Temps | Score |
|---------|-------|-------|
| Desktop | 0.0 s | ✅ 100/100 |
| Mobile | 0.0 s | ✅ 100/100 |

### 4.3 Taille du DOM

- **Nombre d'éléments:** 161 éléments
- **Score:** ✅ 100/100
- **Statut:** Excellent - Le DOM n'est pas excessif

### 4.4 Politique de Cache

- **Score:** ✅ 100/100
- **Ressources trouvées:** 0 ressources nécessitant optimisation
- **Statut:** Excellente politique de cache sur les ressources statiques

---

## 5. Analyse des Ressources

### 5.1 Poids Total de la Page

- **Desktop:** 209 KiB (214,499 bytes)
- **Mobile:** 209 KiB (214,342 bytes)
- **Score:** ✅ 100/100 - Taille de page optimale

### 5.2 Ressources Bloquant le Rendu

- **Score:** ✅ 100/100
- **Temps bloqué:** 0 ms
- **Statut:** Aucune ressource ne bloque le premier rendu

### 5.3 Optimisation des Ressources

| Audit | Score | Statut |
|-------|-------|--------|
| Minification CSS | ✅ 100/100 | Optimisé |
| Minification JavaScript | ✅ 100/100 | Optimisé |
| Formats d'images modernes | ✅ 100/100 | Optimisé |
| Encodage efficace des images | ✅ 100/100 | Optimisé |
| Dimensionnement correct des images | ✅ 100/100 | Optimisé |

### 5.4 Affichage des Polices Web

- **Score:** ✅ 100/100
- **Statut:** Tout le texte reste visible pendant le chargement des polices web
- **Technique utilisée:** `font-display` correctement configuré

---

## 6. Métriques Réseau

### 6.1 Version Desktop

- **Round Trip Time (RTT):** 10 ms (9.094 ms)
- **Latence Backend:** 10 ms (7.746 ms)
- **Statut:** Excellente connectivité

### 6.2 Version Mobile

- **Round Trip Time (RTT):** 10 ms (12.761 ms)
- **Latence Backend:** 20 ms (18.738 ms)
- **Statut:** Bonne connectivité

---

## 7. Accessibilité

### 7.1 Points Forts

- **Ordre des en-têtes:** ✅ Séquentiel et correct
- **Attributs alt sur les images:** ✅ Présents
- **Meta description:** ✅ Présente
- **Viewport:** ✅ Correctement configuré

### 7.2 Problème Identifié

#### ❌ Contraste des Couleurs
- **Score:** 0/100 (Desktop et Mobile)
- **Problème:** Les couleurs d'arrière-plan et de premier plan n'ont pas un ratio de contraste suffisant
- **Impact:** Peut affecter la lisibilité pour les utilisateurs malvoyants
- **Action requise:** Ajuster les couleurs pour atteindre un ratio de contraste minimal de 4.5:1

---

## 8. SEO

### 8.1 Résultats

Tous les critères SEO sont parfaitement respectés:
- ✅ Meta description présente
- ✅ Viewport configuré correctement
- ✅ Score global: 100/100

---

## 9. Recommandations Prioritaires

### 🔥 Priorité 1 - Résoudre le Cumulative Layout Shift

**Problème majeur:** Le CLS est très élevé, particulièrement en desktop (0.78).

**Actions recommandées:**

1. **Réserver l'espace pour le contenu dynamique**
   - Ajouter des dimensions explicites (width/height) pour tous les éléments médias
   - Utiliser `aspect-ratio` CSS pour les conteneurs responsives

2. **Stabiliser l'élément `<body>`**
   - L'élément body cause 99% du CLS en desktop (score: 0.774)
   - Vérifier les scripts qui modifient le thème (`data-bs-theme="dark"`)
   - S'assurer que le thème est défini avant le premier rendu

3. **Optimiser les polices web**
   - Utiliser `font-display: optional` ou `font-display: swap`
   - Précharger les polices critiques
   - Considérer les polices système en fallback

4. **Éviter les modifications DOM tardives**
   - Charger tout le contenu critique en HTML initial
   - Différer les scripts non essentiels

### 🔥 Priorité 2 - Éliminer les Redirections

**Impact:** 210 ms (desktop) à 770 ms (mobile) de délai additionnel

**Actions recommandées:**
1. Identifier la chaîne de redirection (ex: HTTP → HTTPS, avec/sans www)
2. Configurer le serveur pour servir directement l'URL finale
3. Mettre à jour tous les liens internes pour pointer vers l'URL canonique

### 🔥 Priorité 3 - Optimiser le CSS

**Impact:** 42 KiB de CSS inutilisé

**Actions recommandées:**
1. Auditer les feuilles de style Bootstrap/framework utilisé
2. Utiliser PurgeCSS ou similaire pour supprimer le CSS inutilisé
3. Implémenter le "Critical CSS" inline pour le contenu above-the-fold
4. Différer le chargement du CSS non critique

### 🟡 Priorité 4 - Améliorer le Contraste des Couleurs

**Impact:** Accessibilité réduite pour les utilisateurs malvoyants

**Actions recommandées:**
1. Utiliser un outil de vérification de contraste (WebAIM, Contrast Checker)
2. Ajuster les couleurs pour atteindre un ratio minimal de 4.5:1 (texte normal)
3. Viser un ratio de 7:1 pour le niveau AAA
4. Tester avec différents thèmes (dark/light)

---

## 10. Points Forts du Site

### ✅ Excellentes Performances Réseau
- Taille de page optimale (209 KiB)
- Pas de ressources bloquant le rendu
- Latence réseau très faible

### ✅ Optimisation JavaScript
- Temps d'exécution minimal (0.0 s)
- Pas de blocage du thread principal
- Code bien optimisé

### ✅ Optimisation des Ressources
- Images correctement optimisées
- CSS et JavaScript minifiés
- Formats modernes utilisés

### ✅ SEO Parfait
- Toutes les bonnes pratiques SEO respectées
- Score de 100/100

### ✅ Structure DOM Optimale
- Seulement 161 éléments
- Hiérarchie propre et performante

---

## 11. Comparaison Desktop vs Mobile

| Métrique | Desktop | Mobile | Différence |
|----------|---------|--------|------------|
| Score Performance | 76/100 | 83/100 | +7 points (mobile meilleur) |
| FCP | 0.2 s | 0.8 s | +0.6 s |
| LCP | 0.5 s | 1.9 s | +1.4 s |
| CLS | 0.78 | 0.327 | -0.453 (mobile meilleur) |
| TBT | 0 ms | 50 ms | +50 ms |
| TTI | 0.5 s | 2.0 s | +1.5 s |

**Observations:**
- Le score de performance mobile est paradoxalement meilleur que desktop à cause du CLS plus faible
- Les temps de chargement sont naturellement plus longs sur mobile
- Le problème de CLS est critique sur desktop mais gérable sur mobile

---

## 12. Plan d'Action Suggéré

### Phase 1 - Corrections Critiques (Semaine 1)
1. ✅ Résoudre le CLS sur l'élément `<body>` (desktop)
2. ✅ Éliminer les redirections
3. ✅ Corriger les problèmes de contraste de couleurs

### Phase 2 - Optimisations (Semaine 2-3)
1. ✅ Nettoyer le CSS inutilisé
2. ✅ Implémenter le Critical CSS
3. ✅ Tester et valider les améliorations

### Phase 3 - Validation (Semaine 4)
1. ✅ Re-tester avec Lighthouse
2. ✅ Valider les Core Web Vitals en production
3. ✅ Monitorer les performances réelles des utilisateurs

---

## 13. Résultats Attendus Après Optimisation

### Objectifs de Performance

| Métrique | Actuel (Desktop) | Actuel (Mobile) | Cible |
|----------|------------------|-----------------|-------|
| Performance Score | 76 | 83 | 90+ |
| CLS | 0.78 | 0.327 | < 0.1 |
| LCP | 0.5s | 1.9s | < 2.5s ✅ |
| FID/TBT | 0ms | 50ms | < 100ms ✅ |

### Impact Utilisateur Estimé

Après optimisation, les utilisateurs devraient bénéficier de:
- ✅ Réduction de 210-770ms du temps de chargement initial (élimination redirections)
- ✅ Expérience visuelle stable sans décalages de contenu
- ✅ Meilleure accessibilité pour tous les utilisateurs
- ✅ Performances optimales sur tous les appareils

---

## 14. Fichiers de Données Brutes

Les rapports Lighthouse complets au format JSON sont disponibles dans:
- **Desktop:** `/home/fab/projet/SIO25/cv/lighthouse-desktop.json`
- **Mobile:** `/home/fab/projet/SIO25/cv/lighthouse-mobile.json`

Ces fichiers contiennent l'intégralité des données collectées lors de l'analyse, incluant tous les audits détaillés, les traces de performance, et les captures d'écran.

---

## Conclusion

Le site https://trbarry.github.io/page_cv présente d'excellentes performances globales avec des scores remarquables en SEO (100/100), accessibilité (95/100) et bonnes pratiques (96/100). La taille de la page est optimale (209 KiB) et les ressources sont bien optimisées.

Le principal problème identifié concerne le **Cumulative Layout Shift (CLS)**, particulièrement critique sur desktop (0.78) où il dépasse largement le seuil recommandé de 0.1. Ce problème est principalement causé par l'élément `<body>` et son attribut de thème dynamique.

Les **redirections multiples** constituent également un problème significatif, ajoutant jusqu'à 770ms de latence sur mobile.

Avec les corrections suggérées, le site peut facilement atteindre un score de performance de 90+ sur les deux plateformes et offrir une expérience utilisateur optimale.

---

**Rapport généré le:** 22 octobre 2025
**Outil:** Google Lighthouse via CLI
**Analyste:** Claude Code (Anthropic)
