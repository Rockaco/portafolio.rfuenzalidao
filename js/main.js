let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remover la clase "active" de la imagen actual
    items[currentIndex].classList.remove('active');

    // Cambiar el índice según la dirección
    currentIndex += direction;

    // Asegurarse de que el índice esté dentro de los límites
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Añadir la clase "active" a la nueva imagen
    items[currentIndex].classList.add('active');
}

// Auto slide (Optional)
// This will automatically change slides every 5 seconds
setInterval(function() {
    moveSlide(1);
}, 5
