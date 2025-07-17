// Animaciones y transiciones para servicios.html

document.addEventListener('DOMContentLoaded', function() {

    // === Animación de entrada para tarjetas (cards) con clase .animate-up ===
    const animUp = document.querySelectorAll('.animate-up'); // Selecciona todas las cards animables
    animUp.forEach((el, i) => {
        el.style.opacity = 0; // Inicialmente oculto
        el.style.transform = 'translateY(40px)'; // Desplazado hacia abajo

        setTimeout(() => {
            el.style.transition = 'all 0.7s cubic-bezier(.4,2,.3,1)'; // Animación con rebote
            el.style.opacity = 1; // Aparece
            el.style.transform = 'translateY(0)'; // Vuelve a su posición original
        }, 200 + i * 150); // Delay escalonado para que aparezcan de forma secuencial
    });

    // === Scroll suave para enlaces de navegación interna (anclas) ===
    document.querySelectorAll('a.nav-link, .btn').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href'); // Obtiene el destino del enlace
            if (href && href.startsWith('#')) { // Verifica si es un enlace interno
                const target = document.querySelector(href); // Busca el elemento de destino
                if (target) {
                    e.preventDefault(); // Previene el salto brusco
                    window.scrollTo({
                        top: target.offsetTop - 60, // Ajusta posición para navbar fijo
                        behavior: 'smooth' // Desplazamiento suave
                    });
                }
            }
        });
    });

});
