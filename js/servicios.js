// Función para ABRIR (y cerrar los demás automáticamente)
function toggleSquare(element) {
    // Si ya está abierto, no hacemos nada (el botón minimizar se encarga de cerrar)
    if (element.classList.contains('expanded')) return;

    // 1. Cerrar todos los demás items primero
    document.querySelectorAll('.service-square-item').forEach(item => {
        item.classList.remove('expanded');
    });

    // 2. Abrir el item actual
    element.classList.add('expanded');
    
    // 3. Scroll suave para centrar la atención
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// NUEVA FUNCIÓN: Minimizar el cuadro actual
function minimizeSquare(event, button) {
    event.stopPropagation(); // Evita que el clic llegue al contenedor padre y lo quiera abrir de nuevo
    const card = button.closest('.service-square-item');
    if (card) {
        card.classList.remove('expanded');
    }
}

// Lógica para abrir desde URL (si vienes de otro link)
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