/* ==========================================
   LÓGICA JAVASCRIPT OPCIONAL
   ================================---------- */
document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.querySelector('.boton-menu');
  const navegacion = document.querySelector('.navegacion-sitio');

  if (botonMenu && navegacion) {
    const cerrarMenu = () => {
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú de navegación');
      navegacion.classList.remove('is-open');
    };

    botonMenu.addEventListener('click', () => {
      const estaAbierto = botonMenu.getAttribute('aria-expanded') === 'true';
      botonMenu.setAttribute('aria-expanded', String(!estaAbierto));
      botonMenu.setAttribute('aria-label', estaAbierto ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
      navegacion.classList.toggle('is-open', !estaAbierto);
    });

    navegacion.querySelectorAll('a').forEach(enlace => {
      enlace.addEventListener('click', cerrarMenu);
    });

    document.addEventListener('keydown', evento => {
      if (evento.key === 'Escape' && botonMenu.getAttribute('aria-expanded') === 'true') {
        cerrarMenu();
        botonMenu.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        cerrarMenu();
      }
    });
  }

  // Ejemplo: Animación o logica para los enlaces internos o alertas de contacto
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');
  enlacesInternos.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    });
  });
});