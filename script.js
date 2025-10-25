// Attend que le DOM (la structure HTML) soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- Gestion du Thème (Clair/Sombre) ---
    // (Cette partie est correcte et n'a pas changé)
    const themeToggle = document.getElementById('theme-toggle');
    const docElement = document.documentElement; // Cible la balise <html>

    // 1. Détecter la préférence système
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 2. Détecter la préférence sauvegardée (localStorage)
    const savedTheme = localStorage.getItem('theme');
    
    let currentTheme;
    
    // 3. Appliquer le thème au chargement (Priorité : Sauvegardé > Système > Défaut)
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (systemPrefersDark.matches) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    
    // Applique l'attribut [data-theme] à la balise <html>
    docElement.setAttribute('data-theme', currentTheme);
    
    // 4. Mettre à jour l'état visuel de l'interrupteur
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
    
    // 5. Ajouter un écouteur d'événement au 'change' sur l'interrupteur
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            docElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            docElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 6. (Optionnel) Écouter les changements de préférence système en temps réel
    systemPrefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                docElement.setAttribute('data-theme', 'dark');
                themeToggle.checked = true;
            } else {
                docElement.setAttribute('data-theme', 'light');
                themeToggle.checked = false;
            }
        }
    });
    
    // --- FIN de la gestion du thème ---


    // --- (Code existant) Gestion du système d'onglets (Tabs) ---
    // (Cette partie est correcte et n'a pas changé)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(index) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        if (tabContents[index]) {
            tabContents[index].classList.add('active');
        }
        if (tabButtons[index]) {
            tabButtons[index].classList.add('active');
        }
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showTab(index);
        });
    });

    // --- (Code existant) Gestion du bouton "Scroll to Top" ---
    // (Cette partie est correcte et n'a pas changé)
    const scrollTopBtn = document.querySelector('.scroll-top');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function handleScroll() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    scrollTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    // --- CORRECTION : Gestion du défilement fluide pour les ancres ---
    // On revient à la méthode JS explicite avec e.preventDefault()
    // qui est plus fiable et ne crée pas de conflits.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // On empêche le comportement par défaut (le saut brusque)
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // On utilise scrollIntoView pour un défilement fluide
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
