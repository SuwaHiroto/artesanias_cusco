// Animaciones para visitanos.html

document.addEventListener('DOMContentLoaded', function () {

    // Animación de aparición para los bloques principales
    const bloques = document.querySelectorAll('.contacto-main-row > div');
    bloques.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(.4,2,.3,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 200);
    });

    // Efecto de foco en inputs y botón
    document.querySelectorAll('.contacto-form input, .contacto-form select, .contacto-form textarea').forEach(input => {
        input.addEventListener('focus', function () {
            this.style.boxShadow = '0 0 0 2px #FF7F3244';
        });
        input.addEventListener('blur', function () {
            this.style.boxShadow = 'none';
        });
    });

    // Animación de botón enviar
    const boton = document.querySelector('.contacto-form .boton');
    if (boton) {
        boton.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });
        boton.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }
    // Scroll suave para navegación interna (anclas)
    document.querySelectorAll('a.nav-link, .btn').forEach(link => {
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
                }
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    // === Animación de entrada para el formulario y sección de contacto de emergencia ===
    const form = document.querySelector('form');
    const contacto = document.querySelector('main > div.mt-5'); // Selecciona el div de contacto (usualmente debajo del form)

    // Aplica animación a ambos elementos con un pequeño delay
    [form, contacto].forEach((el, i) => {
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)'; // Comienza desplazado hacia abajo
            setTimeout(() => {
                el.style.transition = 'all 0.8s cubic-bezier(.4,2,.3,1)'; // Transición suave
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)'; // Vuelve a su lugar
            }, 200 + i * 200); // Delay escalonado
        }
    });

    // === Scroll suave para enlaces con anclas internas (por ejemplo: #formulario) ===
    document.querySelectorAll('a.nav-link, .btn').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault(); // Previene el salto inmediato
                    window.scrollTo({
                        top: target.offsetTop - 60, // Ajuste por el navbar
                        behavior: 'smooth' // Desplazamiento animado
                    });
                }
            }
        });
    });

    // === Mostrar mensaje tipo toast y resetear formulario al enviarlo ===
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío real del formulario

        form.reset(); // Limpia los campos

        // Desactiva temporalmente el botón de envío y cambia su texto
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Enviado ✓';

        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Enviar';
        }, 2000); // Vuelve al estado original después de 2 segundos

        // Mostrar toast de confirmación si existe el elemento
        var toastEl = document.getElementById('noti-cita');
        if (toastEl) {
            toastEl.style.display = 'block'; // Asegura que sea visible
            var toast = new bootstrap.Toast(toastEl, { delay: 3000 });
            toast.show(); // Muestra el toast (requiere Bootstrap)
        }
    });
});
