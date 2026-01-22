/* js/nosotros.js */

// 1. LISTA DE IMÁGENES (Asegúrate que los nombres coincidan con tus archivos)
const carouselImages = [
    "assets/img/equipo-grupo.png", // Foto grupal
    "assets/img/123.png",          // Foto chica trabajando
    "assets/img/423.png", 
    "assets/img/fotoservicio3.png",
    "assets/img/fotoservicio4.png",
    "assets/img/fotoservicio5.png"          
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('team-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    let autoPlayInterval;

    // 2. INICIALIZAR EL CARRUSEL
    if (container && carouselImages.length > 0) {
        
        // Crear elementos <img> dinámicamente
        carouselImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Equipo YINEH ${index + 1}`;
            img.classList.add('carousel-img');
            
            // La primera imagen empieza activa
            if (index === 0) img.classList.add('active');
            
            container.appendChild(img);
        });

        // Función para mostrar una imagen específica
        const showImage = (index) => {
            const images = document.querySelectorAll('.carousel-img');
            
            // Manejo de índices cíclicos (si llega al final, vuelve al inicio)
            if (index >= images.length) currentIndex = 0;
            else if (index < 0) currentIndex = images.length - 1;
            else currentIndex = index;

            // Quitar clase active de todas y ponerla solo en la actual
            images.forEach(img => img.classList.remove('active'));
            images[currentIndex].classList.add('active');
        };

        // Función Siguiente
        const nextImage = () => {
            showImage(currentIndex + 1);
        };

        // Función Anterior
        const prevImage = () => {
            showImage(currentIndex - 1);
        };

        // 3. EVENTOS DE LOS BOTONES
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextImage();
            resetAutoPlay(); // Reiniciar contador si el usuario toca
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevImage();
            resetAutoPlay();
        });

        // 4. AUTO-PLAY (Cambia cada 4 segundos)
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextImage, 4000);
        };

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        };

        // Arrancar
        startAutoPlay();
    }
});