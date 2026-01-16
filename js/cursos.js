document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. RENDERIZAR LISTA DE CURSOS (cursos.html) ---
    const gridContainer = document.getElementById('cursos-grid-container');
    
    if (gridContainer && typeof cursosData !== 'undefined') {
        gridContainer.innerHTML = ''; 
        
        cursosData.forEach((curso, index) => {
            // Detecta si es el primer curso para destacarlo
            const isFeatured = index === 0 ? 'featured-course' : '';
            
            const html = `
                <article class="curso-card ${isFeatured}">
                    <div class="curso-img-box">
                        <img src="${curso.imagen}" alt="${curso.titulo}">
                    </div>
                    <div class="curso-content">
                        <div class="curso-meta">
                            <span class="price">${curso.precio}</span>
                        </div>
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descripcion_corta}</p>
                        <a href="curso-detalle.html?id=${curso.id}" class="btn-curso">Ver Temario Completo</a>
                    </div>
                </article>
            `;
            gridContainer.innerHTML += html;
        });
    }

    // --- 2. RENDERIZAR DETALLE DEL CURSO (curso-detalle.html) ---
    const detalleContainer = document.getElementById('curso-detalle-container');
    
    if (detalleContainer && typeof cursosData !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = parseInt(urlParams.get('id'));
        
        const curso = cursosData.find(c => c.id === cursoId);

        if (curso) {
            // Mensaje para WhatsApp confirmando pago
            const mensajeWsp = `Hola, acabo de realizar el pago para el curso "${curso.titulo}". Envío mi comprobante.`;
            const linkWsp = `https://wa.me/59171600722?text=${encodeURIComponent(mensajeWsp)}`;

            detalleContainer.innerHTML = `
                <div class="curso-header">
                    <h1>${curso.titulo}</h1>
                    </div>

                <div class="curso-body-grid">
                    <div class="main-info">
                        <img src="${curso.imagen}" alt="${curso.titulo}" class="curso-main-img">
                        <div class="curso-description">
                            ${curso.descripcion_larga}
                        </div>
                    </div>

                    <div class="sidebar-info">
                        <div class="price-box">
                            <span class="label">Inversión Total</span>
                            <span class="amount">${curso.precio}</span>
                            
                            <div class="qr-container">
                                <p class="qr-label">Escanea para pagar</p>
                                <img src="assets/img/qr.png" alt="QR de Pago" class="qr-img">
                            </div>

                            <a href="${linkWsp}" class="btn-inscripcion" target="_blank">
                                <i class="ph-bold ph-whatsapp-logo"></i> Confirmar Pago
                            </a>
                            <p class="secure-text"><i class="ph-fill ph-shield-check"></i> Envía tu comprobante aquí</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            detalleContainer.innerHTML = `<div class="error-msg">Curso no encontrado. <a href="cursos.html">Volver</a></div>`;
        }
    }
});