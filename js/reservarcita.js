//
// reservarcita.js
// ----------------
// Script para animaciones, validación y notificación en la página de reserva de cita.
// - Aplica animaciones de entrada al formulario y contacto de emergencia.
// - Scroll suave para navegación interna.
// - Al enviar el formulario, muestra un toast de Bootstrap y resetea el formulario.
// - El campo de fecha bloquea días pasados.

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

// === Bloquea la selección de fechas pasadas en el campo de fecha ===
document.addEventListener('DOMContentLoaded', function () {
    var fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        var hoy = new Date();
        var yyyy = hoy.getFullYear();
        var mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
        var dd = String(hoy.getDate()).padStart(2, '0'); // Día con dos dígitos
        var minDate = yyyy + '-' + mm + '-' + dd;
        fechaInput.setAttribute('min', minDate); // Establece el valor mínimo permitido
    }
});
