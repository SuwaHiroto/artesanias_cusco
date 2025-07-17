// Animaciones y transiciones para index.html
document.addEventListener('DOMContentLoaded', function () {
    // Animación de aparición para elementos con la clase .animate-up
    const animUp = document.querySelectorAll('.animate-up');
    animUp.forEach((el, i) => {
        // Estado inicial: oculto y desplazado hacia abajo
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        // Animación escalonada con retardo progresivo
        setTimeout(() => {
            el.style.transition = 'all 0.7s cubic-bezier(.4,2,.3,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 150); // Aumenta el delay para efecto en cascada
    });

    // Animación de aparición por opacidad para .animate-fadein
    document.querySelectorAll('.animate-fadein').forEach((el, i) => {
        el.style.opacity = 0; // Inicialmente invisible
        setTimeout(() => {
            el.style.transition = 'opacity 1s';
            el.style.opacity = 1;
        }, 400 + i * 200); // Aparece con retardo progresivo
    });

    // Animación infinita de rebote para botones con clase .animate-bounce
    document.querySelectorAll('.animate-bounce').forEach(btn => {
        btn.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0)' }
        ], {
            duration: 1200,
            iterations: Infinity, // Repite para siempre
            easing: 'ease-in-out',
            delay: 800
        });
    });

    // Navegación suave al hacer clic en enlaces de navegación o botones
    document.querySelectorAll('a.nav-link, .btn').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Solo aplica si el href es un ancla local (#seccion)
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault(); // Previene el comportamiento por defecto
                    // Desplazamiento suave hacia el destino
                    window.scrollTo({
                        top: target.offsetTop - 60, // Ajusta por altura de navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

/**
 * Función que revela elementos con clase .fade-in al hacer scroll
 */
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        // Si el elemento entra en la vista (con un margen de 60px)
        if (position < windowHeight - 60) {
            el.classList.add('visible'); // Se activa el efecto desde CSS
        }
    });
}

// Se ejecuta revealOnScroll cuando se hace scroll
window.addEventListener('scroll', revealOnScroll);

// Se ejecuta al cargar completamente el DOM
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll(); // Revela elementos visibles desde el inicio

    // Navegación suave también para enlaces en footer y botones específicos
    document.querySelectorAll('a.nav-link, .footer a, .hero-btn').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: 'smooth'
                    });

                    // Marca como activo solo el enlace de navegación clicado
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    }
                }
            }
        });
    });
});
