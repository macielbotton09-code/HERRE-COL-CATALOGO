import { startRouter, matchCategory } from './router.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderFloatingWA } from './components/floating-wa.js';
import { renderHomePage } from './pages/home.js';
import { renderCategoryPage } from './pages/category.js';
import { renderContactPage } from './pages/contact.js';
import { renderNosotrosPage } from './pages/nosotros.js';
import { bindImageFallbacks } from './placeholder.js';
import { shareDesign, WHATSAPP_NUMBER } from './wa.js';
import { icon } from './icons.js';

const navbarEl = document.getElementById('hc-navbar');
const mainEl = document.getElementById('main-content');
const footerEl = document.getElementById('hc-footer');
const floatingEl = document.getElementById('hc-floating');

let currentRoute = '/';
let revealObserver = null;

function isOverlayRoute(route) {
  return route === '/' || route === '' || Boolean(matchCategory(route));
}

function updateNavbar() {
  const overlay = isOverlayRoute(currentRoute) && window.scrollY <= 24;
  navbarEl.classList.toggle('is-overlay', overlay);
  navbarEl.innerHTML = renderNavbar(currentRoute, overlay);
  bindImageFallbacks(navbarEl);
}

function initRevealObserver() {
  if (revealObserver) revealObserver.disconnect();
  const targets = mainEl.querySelectorAll('.hc-reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 90 + Math.floor(i / 3) * 40}ms`;
    revealObserver.observe(el);
  });
}

function renderRoute(route) {
  currentRoute = route;
  const categorySlug = matchCategory(route);

  if (categorySlug) mainEl.innerHTML = renderCategoryPage(categorySlug);
  else if (route === '/contacto') mainEl.innerHTML = renderContactPage();
  else if (route === '/nosotros') mainEl.innerHTML = renderNosotrosPage();
  else mainEl.innerHTML = renderHomePage();

  updateNavbar();
  bindImageFallbacks(mainEl);
  initRevealObserver();
  window.scrollTo({ top: 0 });
}

// ---- Share buttons (design cards + category header) — the only feature needing JS ----
async function handleShareClick(button) {
  const { ref, name, cat, slug } = button.dataset;
  const result = await shareDesign({ ref, name, cat, slug });
  if (result !== 'copied') return;

  if (ref) {
    // Design card: icon-only button — show a small floating tag instead of replacing the icon.
    button.insertAdjacentHTML('afterend', '<span class="hc-card-share-msg" data-share-msg>Enlace copiado</span>');
    window.setTimeout(() => button.parentElement?.querySelector('[data-share-msg]')?.remove(), 1600);
  } else {
    // Category header: icon + label button — swap the label in place.
    const original = button.innerHTML;
    button.innerHTML = `${icon('check', 16)} Enlace copiado`;
    window.setTimeout(() => { button.innerHTML = original; }, 1600);
  }
}

// ---- Contact form — composes the WhatsApp message from the fields, zero backend needed ----
function handleContactSubmit(form) {
  const data = new FormData(form);
  const nombre = (data.get('nombre') || '').toString().trim();
  const servicio = (data.get('servicio') || '').toString().trim();
  const detalle = (data.get('detalle') || '').toString().trim();

  const parts = [`Hola HERRE-COL 👋. Soy ${nombre || '(sin nombre)'}.`, `Me interesa: ${servicio}.`];
  if (detalle) parts.push(`Detalle: ${detalle}`);
  parts.push('¿Me pueden cotizar?');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join(' '))}`, '_blank', 'noopener');
}

document.addEventListener('click', (event) => {
  const shareButton = event.target.closest('[data-action="share"]');
  if (shareButton) handleShareClick(shareButton);
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'hc-contact-form') {
    event.preventDefault();
    handleContactSubmit(event.target);
  }
});

window.addEventListener('scroll', updateNavbar, { passive: true });

footerEl.innerHTML = renderFooter();
bindImageFallbacks(footerEl);
floatingEl.innerHTML = renderFloatingWA();

startRouter(renderRoute);
