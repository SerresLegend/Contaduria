function toggleSquare(element) {
    if (element.classList.contains('expanded')) return;

    // Cerrar otros
    document.querySelectorAll('.service-square-item').forEach(item => {
        item.classList.remove('expanded');
    });

    // Abrir actual
    element.classList.add('expanded');
    
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    if (serviceId) {
        const targetElement = document.getElementById('ser-' + serviceId);
        if (targetElement) {
            setTimeout(() => toggleSquare(targetElement), 100);
        }
    }
});