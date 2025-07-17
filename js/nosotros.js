// Animaciones para nosotros.html

document.addEventListener('DOMContentLoaded', function() {

    // Fade in progresivo para elementos con la clase .animate-fadein
    document.querySelectorAll('.animate-fadein').forEach((el, i) => {
        el.style.opacity = 0; // Estado inicial invisible
        setTimeout(() => {
            el.style.transition = 'opacity 1s'; // Transición suave de opacidad
            el.style.opacity = 1; // Aparece luego del retardo
        }, 300 + i * 200); // Retardo escalonado para efecto en cadena
    });

    // Animación de entrada desde abajo para imagen con clase .animate-up
    const img = document.querySelector('.animate-up');
    if (img) {
        img.style.opacity = 0; // Oculto inicialmente
        img.style.transform = 'translateY(40px)'; // Desplazado hacia abajo
        setTimeout(() => {
            img.style.transition = 'all 0.8s cubic-bezier(.4,2,.3,1)'; // Animación de rebote
            img.style.opacity = 1; // Aparece
            img.style.transform = 'translateY(0)'; // Regresa a su posición original
        }, 800); // Inicia después de un breve retraso
    }

    // Navegación suave para enlaces internos (anclas con #)
    document.querySelectorAll('a.nav-link, .btn').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href'); // Obtiene el destino del enlace
            if (href && href.startsWith('#')) { // Verifica que sea un ancla
                const target = document.querySelector(href); // Busca el elemento destino
                if (target) {
                    e.preventDefault(); // Cancela el salto automático
                    window.scrollTo({
                        top: target.offsetTop - 60, // Ajusta por altura de navbar
                        behavior: 'smooth' // Desplazamiento suave
                    });
                }
            }
        });
    });

});
