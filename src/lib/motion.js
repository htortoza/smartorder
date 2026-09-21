// src/lib/motion.js — utilidades de motion compartidas entre páginas bespoke
// (home, producto, producción, contacto). Antes vivían copiadas en cada
// <script> de página; un fix acá alcanza a todas.
import { gsap } from 'gsap';

// Cursor magnético: acerca un elemento [data-magnetic] hacia el cursor al pasar por encima.
export function bindMagnetic(strength = 0.3) {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    if (el.dataset.magBound) return;
    el.dataset.magBound = '1';
    const qx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const qy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      qx((e.clientX - (r.left + r.width / 2)) * strength);
      qy((e.clientY - (r.top + r.height / 2)) * strength);
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' }));
  });
}

// Reveal genérico para encabezados .shead (stagger de sus hijos) y bloques [data-item]
// sueltos. Cubre el patrón repetido en todas las páginas; las escenas a medida
// (hero, cascadas, contadores) se definen aparte en cada página.
export function bindSectionReveals(ScrollTrigger, reduced) {
  if (reduced) return;
  gsap.utils.toArray('.shead').forEach((h) => {
    gsap.from(h.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: h, start: 'top 86%' } });
  });
  gsap.utils.toArray('[data-item]').forEach((el) => {
    gsap.from(el, { y: 32, opacity: 0, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}

// Las fuentes de Google cargan async y cambian el alto de las secciones después
// de que ScrollTrigger ya midió posiciones — sin este refresh, un scroll rápido
// deja triggers desalineados y elementos pegados en su estado inicial (invisibles).
//
// OJO: `window.addEventListener('load', ...)` NO sirve acá. El evento 'load' del
// documento ocurre una sola vez por sesión de navegador; con View Transitions,
// initProducto()/initProduccion() se re-ejecutan en cada navegación por el menú,
// pero 'load' ya disparó hace rato (en la página de entrada) — el refresh nunca
// corre para las páginas a las que se llega navegando. document.fonts.ready sí
// resuelve en cada llamada: la primera vez espera a que las fuentes terminen de
// cargar, y en navegaciones siguientes (fuentes ya cargadas) resuelve al toque.
export function refreshOnFontsReady(ScrollTrigger) {
  const ready = document.fonts?.ready ?? Promise.resolve();
  ready.then(() => ScrollTrigger.refresh());
}
