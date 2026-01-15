document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SI ESTAMOS EN LA LISTA (BLOG.HTML)
    const gridContainer = document.getElementById('blog-grid-container');
    
    if (gridContainer && typeof blogPosts !== 'undefined') {
        gridContainer.innerHTML = ''; // Limpiar
        
        blogPosts.forEach(post => {
            const html = `
                <article class="blog-item">
                    <img src="${post.image}" alt="${post.title}" class="blog-thumb">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-tag">${post.category}</span>
                            <span class="blog-date">${post.date}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <a href="blog-detalle.html?id=${post.id}" class="read-btn">Leer artículo completo</a>
                    </div>
                </article>
            `;
            gridContainer.innerHTML += html;
        });
    }

    // 2. SI ESTAMOS EN EL DETALLE (BLOG-DETALLE.HTML)
    const readerContainer = document.getElementById('article-reader');
    
    if (readerContainer && typeof blogPosts !== 'undefined') {
        // Obtener el ID de la URL (ej: ?id=1)
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id')); // Convertir a número
        
        // Buscar el post en la base de datos
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            // Renderizar el artículo completo + EL BOTÓN NUEVO AL FINAL
            readerContainer.innerHTML = `
                <div class="article-header">
                    <span class="article-tag">${post.category}</span>
                    <h1 class="article-title">${post.title}</h1>
                    <span class="article-date"><i class="ph-bold ph-calendar-blank"></i> Publicado el ${post.date}</span>
                </div>
                <img src="${post.image}" alt="${post.title}" class="article-img-full">
                <div class="article-body">
                    ${post.content}
                </div>

                <div class="article-footer">
                    <a href="blog.html" class="btn-return">
                        <i class="ph-bold ph-arrow-left"></i> Volver a Noticias
                    </a>
                </div>
            `;
        } else {
            // Si no encuentra el post o no hay ID
            readerContainer.innerHTML = `
                <div class="error-msg">
                    <i class="ph-duotone ph-warning-circle" style="font-size: 3rem; color: #ef4444; margin-bottom:20px;"></i><br>
                    Lo sentimos, no encontramos la noticia que buscas.<br>
                    <a href="blog.html" class="btn-primary" style="margin-top:20px;">Volver al Blog</a>
                </div>
            `;
        }
    }
});