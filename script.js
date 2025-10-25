// Attend que le DOM (la structure HTML) soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- Gestion du Thème (Clair/Sombre) ---
    // Ce script s'exécute en premier
    
    const themeToggle = document.getElementById('theme-toggle');
    const docElement = document.documentElement; // Cible la balise <html>

    // 1. Vérifier si l'élément 'themeToggle' existe AVANT de l'utiliser
    if (themeToggle) {
        
        // 2. Détecter la préférence système
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // 3. Détecter la préférence sauvegardée (localStorage)
        const savedTheme = localStorage.getItem('theme');
        
        let currentTheme;
        
        // 4. Appliquer le thème au chargement
        if (savedTheme) {
            currentTheme = savedTheme;
        } else if (systemPrefersDark.matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
        
        docElement.setAttribute('data-theme', currentTheme);
        
        // 5. Mettre à jour l'état visuel de l'interrupteur
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
        
        // 6. Ajouter l'écouteur d'événement pour le clic
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                docElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                docElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // 7. (Optionnel) Écouter les changements de préférence système
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

    } else {
        console.error("Erreur : L'élément #theme-toggle est introuvable dans le HTML.");
    }
    
    // --- FIN de la gestion du thème ---


    // --- Gestion du système d'onglets (Tabs) ---
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
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
    }

    // --- Gestion du bouton "Scroll to Top" ---
    
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
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
    }

    // --- Gestion du défilement fluide pour les ancres (Barre de Nav) ---
    
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
