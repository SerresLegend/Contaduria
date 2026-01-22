// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    
    // --- CÓDIGO EXISTENTE: DETECTAR PARÁMETROS URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId) {
        const targetAccordion = document.getElementById('ser-' + serviceId);
        if (targetAccordion) {
            targetAccordion.setAttribute('open', '');
            targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // --- NUEVO: LÓGICA DEL MENÚ MÓVIL ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = menuToggle?.querySelector('i'); // El icono dentro del botón

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            // Abrir/Cerrar menú
            mobileMenu.classList.toggle('active');
            
            // Cambiar icono de Hamburguesa (List) a X
            if (mobileMenu.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });

        // Cerrar menú al hacer click en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                icon.classList.replace('ph-x', 'ph-list');
            });
        });
    }
});