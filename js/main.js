// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // Detectar parámetros en la URL (?id=X)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId) {
        // Buscamos el acordeón (details) en servicios.html
        const targetAccordion = document.getElementById('ser-' + serviceId);
        if (targetAccordion) {
            targetAccordion.setAttribute('open', ''); // Abrir
            targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});