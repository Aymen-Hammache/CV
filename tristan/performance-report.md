# Analyse de Performance - https://trbarry.github.io/page_cv

**Date d'analyse:** 22/10/2025 16:41:06

---

## Desktop (1920x1080)

**URL analysée:** https://trbarry.github.io/page_cv/

### Scores Globaux

| Catégorie | Score |
|-----------|-------|
| Performance | 62/100 |
| Accessibilité | 95/100 |
| Bonnes Pratiques | 96/100 |
| SEO | 100/100 |

### Core Web Vitals

| Métrique | Valeur | Score |
|----------|--------|-------|
| **LCP** (Largest Contentful Paint) | 2.6 s | 43/100 |
| **CLS** (Cumulative Layout Shift) | 0.732 | 6/100 |
| **FID/INP** (First Input Delay) | 70 ms | 100/100 |

### Métriques Détaillées

| Métrique | Valeur | Score |
|----------|--------|-------|
| **FCP** (First Contentful Paint) | 0.8 s | 95/100 |
| **LCP** (Largest Contentful Paint) | 2.6 s | 43/100 |
| **CLS** (Cumulative Layout Shift) | 0.732 | 6/100 |
| **TTI** (Time to Interactive) | 2.6 s | 87/100 |
| **SI** (Speed Index) | 0.9 s | 98/100 |
| **TBT** (Total Blocking Time) | 0 ms | 100/100 |

### Opportunités d'Optimisation

1. **Avoid multiple page redirects**
   - Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).
   - Économie potentielle: Est savings of 750 ms

2. **Reduce unused CSS**
   - Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).
   - Économie potentielle: Est savings of 42 KiB

### Diagnostics Techniques

1. **Browser errors were logged to the console**
   - Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)
   - Score: 0/100

2. **Largest Contentful Paint element**
   - This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)
   - Valeur: 2,640 ms
   - Score: 0/100

3. **Avoid large layout shifts**
   - These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)
   - Valeur: 2 layout shifts found
   - Score: 0/100

4. **Background and foreground colors do not have a sufficient contrast ratio.**
   - Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).
   - Score: 0/100

5. **Layout shift culprits**
   - Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://web.dev/articles/optimize-cls), such as elements being added, removed, or their fonts changing as the page loads.
   - Score: 0/100

6. **Document request latency**
   - Your first network request is the most important.  Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.
   - Valeur: Est savings of 40 ms
   - Score: 0/100

7. **Network dependency tree**
   - [Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.
   - Score: 0/100

8. **Largest Contentful Paint**
   - Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)
   - Valeur: 2.6 s
   - Score: 43/100

9. **Time to Interactive**
   - Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).
   - Valeur: 2.6 s
   - Score: 87/100

10. **First Contentful Paint**
   - First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).
   - Valeur: 0.8 s
   - Score: 95/100

11. **Speed Index**
   - Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).
   - Valeur: 0.9 s
   - Score: 98/100

---

## Mobile (412x823)

**URL analysée:** https://trbarry.github.io/page_cv/

### Scores Globaux

| Catégorie | Score |
|-----------|-------|
| Performance | 85/100 |
| Accessibilité | 95/100 |
| Bonnes Pratiques | 96/100 |
| SEO | 100/100 |

### Core Web Vitals

| Métrique | Valeur | Score |
|----------|--------|-------|
| **LCP** (Largest Contentful Paint) | 2.0 s | 97/100 |
| **CLS** (Cumulative Layout Shift) | 0.275 | 44/100 |
| **FID/INP** (First Input Delay) | 70 ms | 99/100 |

### Métriques Détaillées

| Métrique | Valeur | Score |
|----------|--------|-------|
| **FCP** (First Contentful Paint) | 0.8 s | 100/100 |
| **LCP** (Largest Contentful Paint) | 2.0 s | 97/100 |
| **CLS** (Cumulative Layout Shift) | 0.275 | 44/100 |
| **TTI** (Time to Interactive) | 2.0 s | 99/100 |
| **SI** (Speed Index) | 0.8 s | 100/100 |
| **TBT** (Total Blocking Time) | 0 ms | 100/100 |

### Opportunités d'Optimisation

1. **Avoid multiple page redirects**
   - Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).
   - Économie potentielle: Est savings of 760 ms

2. **Reduce unused CSS**
   - Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).
   - Économie potentielle: Est savings of 42 KiB

### Diagnostics Techniques

1. **Browser errors were logged to the console**
   - Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)
   - Score: 0/100

2. **Avoid large layout shifts**
   - These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)
   - Valeur: 2 layout shifts found
   - Score: 0/100

3. **Background and foreground colors do not have a sufficient contrast ratio.**
   - Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).
   - Score: 0/100

4. **Layout shift culprits**
   - Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://web.dev/articles/optimize-cls), such as elements being added, removed, or their fonts changing as the page loads.
   - Score: 0/100

5. **Document request latency**
   - Your first network request is the most important.  Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.
   - Valeur: Est savings of 50 ms
   - Score: 0/100

6. **Network dependency tree**
   - [Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.
   - Score: 0/100

7. **Largest Contentful Paint**
   - Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)
   - Valeur: 2.0 s
   - Score: 97/100

8. **Max Potential First Input Delay**
   - The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).
   - Valeur: 70 ms
   - Score: 99/100

9. **Time to Interactive**
   - Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).
   - Valeur: 2.0 s
   - Score: 99/100

---

## Légende

- **FCP (First Contentful Paint):** Temps avant l'affichage du premier contenu
- **LCP (Largest Contentful Paint):** Temps avant l'affichage du plus gros élément visible
- **CLS (Cumulative Layout Shift):** Stabilité visuelle de la page
- **TTI (Time to Interactive):** Temps avant que la page soit pleinement interactive
- **SI (Speed Index):** Rapidité d'affichage du contenu visible
- **TBT (Total Blocking Time):** Temps total de blocage du thread principal
- **FID/INP (First Input Delay / Interaction to Next Paint):** Réactivité aux interactions utilisateur

### Interprétation des Scores

- **90-100:** Bon
- **50-89:** À améliorer
- **0-49:** Mauvais
