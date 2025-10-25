// Attend que le DOM (la structure HTML) soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- NOUVEAU : Gestion du Thème (Clair/Sombre) ---
    const themeToggle = document.getElementById('theme-toggle');
    const docElement = document.documentElement; // Cible la balise <html>

    // 1. Détecter la préférence système
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 2. Détecter la préférence sauvegardée (localStorage)
    const savedTheme = localStorage.getItem('theme');
    
    let currentTheme;
    
    // 3. Appliquer le thème au chargement (Priorité : Sauvegardé > Système > Défaut)
    if (savedTheme) {
        // Si un thème est sauvegardé, on l'utilise
        currentTheme = savedTheme;
    } else if (systemPrefersDark.matches) {
        // Sinon, on utilise la préférence système
        currentTheme = 'dark';
    } else {
        // Sinon, le défaut est 'light'
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
            // Si coché -> Thème sombre
            docElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Sauvegarde le choix
        } else {
            // Si décoché -> Thème clair
            docElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); // Sauvegarde le choix
        }
    });
    
    // 6. (Optionnel) Écouter les changements de préférence système en temps réel
    // Si l'utilisateur change son paramètre système PENDANT qu'il est sur le site
    systemPrefersDark.addEventListener('change', (e) => {
        // On n'applique le changement que s'il n'a PAS fait de choix manuel
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

    // --- (Code existant) Gestion du défilement fluide pour les ancres ---
    // Ce code gère AUTOMATIQUEMENT les nouveaux liens de la nav !

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // On laisse le comportement natif 'smooth' (défini dans le CSS)
            // e.preventDefault(); // On enlève le preventDefault pour utiliser le scroll-behavior natif
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // On s'assure juste que le focus est mis sur la section
                // Le défilement est géré par 'scroll-behavior: smooth'
                setTimeout(() => {
                    targetElement.focus();
                }, 0); // Léger délai pour assurer le scroll
            }
        });
    });

});
