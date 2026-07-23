import { matchCategory } from '../router.js';
import { icon, whatsappGlyph } from '../icons.js';
import { waLink } from '../wa.js';

const NAV_LINKS = [
  { href: '#/', label: 'Inicio', iconName: 'home' },
  { href: '#/catalogo/puertas', label: 'Catálogo', iconName: 'layout-grid' },
  { href: '#/nosotros', label: 'Nosotros', iconName: 'users' },
  { href: '#/contacto', label: 'Contacto', iconName: 'phone' },
];

function isLinkActive(link, route) {
  if (link.href === '#/catalogo/puertas') return Boolean(matchCategory(route));
  if (link.href === '#/') return route === '/' || route === '';
  return `#${route}` === link.href;
}

/** Renders the fixed header. `overlay` is true only at the very top of image-led pages. */
export function renderNavbar(route, overlay) {
  const quoteHref = waLink({});
  const links = NAV_LINKS.map((link) => {
    const active = isLinkActive(link, route);
    return `
      <a href="${link.href}" class="hc-navlink${active ? ' is-active' : ''}">
        <span class="hc-navicon">${icon(link.iconName, 17)}</span><span class="hc-navlabel">${link.label}</span>
      </a>
    `;
  }).join('');

  return `
    <div class="hc-nav-inner">
      <a href="#/" class="hc-logo-link" aria-label="HERRE-COL — inicio">
        <div class="hc-logo-media">
          <img class="hc-logo" src="assets/logo/logo-mark${overlay ? '-white' : ''}.png" alt="HERRE-COL" data-fallback>
          <span class="hc-logo-fallback" hidden>HERRE-COL</span>
        </div>
      </a>
      <nav class="hc-navlinks" aria-label="Navegación principal">${links}</nav>
      <a class="hc-btn hc-btn--whatsapp hc-wa-btn" href="${quoteHref}" target="_blank" rel="noopener">
        ${whatsappGlyph(18, '#fff')} <span class="hc-wa-label">WhatsApp</span>
      </a>
    </div>
  `;
}
