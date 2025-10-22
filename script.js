// Attend que le DOM (la structure HTML) soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- Gestion du système d'onglets (Tabs) pour les expériences ---
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Fonction pour afficher un onglet spécifique
    function showTab(index) {
        // Cacher tous les contenus
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Désactiver tous les boutons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Afficher le contenu de l'onglet cliqué
        if (tabContents[index]) {
            tabContents[index].classList.add('active');
        }
        
        // Activer le bouton cliqué
        if (tabButtons[index]) {
            tabButtons[index].classList.add('active');
        }
    }

    // Ajouter un écouteur d'événement 'click' à chaque bouton d'onglet
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showTab(index);
        });
    });

    // --- Gestion du bouton "Scroll to Top" ---

    const scrollTopBtn = document.querySelector('.scroll-top');

    // Fonction pour remonter en haut de page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Défilement fluide
        });
    }

    // Fonction pour afficher/cacher le bouton en fonction du défilement
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Ajouter les écouteurs d'événements
    scrollTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    // --- Gestion du défilement fluide pour les ancres (ex: lien "Me contacter") ---

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche le comportement par défaut (saut brusque)
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Défilement fluide vers la section
                });
            }
        });
    });

});