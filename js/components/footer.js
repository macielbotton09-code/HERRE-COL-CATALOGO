import { CATEGORIES } from '../data.js';
import { waLink } from '../wa.js';
import { icon } from '../icons.js';

export function renderFooter() {
  const quoteHref = waLink({});
  const categoryLinks = CATEGORIES.map(
    (c) => `<a class="hc-footer-link" href="#/catalogo/${c.slug}">${c.name}</a>`
  ).join('');

  return `
    <div class="hc-footer-logo-wrap">
      <div class="hc-logo-media" style="height:clamp(90px, 16vw, 160px)">
        <img class="hc-footer-logo" src="assets/logo/logo-mark-white.png" alt="HERRE-COL" data-fallback>
        <span class="hc-logo-fallback" style="font-size:clamp(1.5rem,4vw,2.4rem)" hidden>HERRE-COL</span>
      </div>
    </div>
    <div class="hc-footgrid">
      <div class="hc-footer-col">
        <p class="hc-footer-lede">Arquitectura en metal. Diseño, fabricación e instalación a la medida.</p>
        <a class="hc-btn hc-btn--whatsapp" href="${quoteHref}" target="_blank" rel="noopener" style="align-self:flex-start">
          ${icon('message-circle', 17)} Cotizar por WhatsApp
        </a>
      </div>
      <div class="hc-footer-col">
        <h4 class="hc-footer-heading">Catálogo</h4>
        ${categoryLinks}
      </div>
      <div class="hc-footer-col">
        <h4 class="hc-footer-heading">Contacto</h4>
        <a class="hc-footer-link" href="#/contacto">Solicitar cotización</a>
        <span class="hc-footer-static">+57 310 669 7159</span>
        <a class="hc-footer-link" href="mailto:herre.col.oficial@gmail.com">herre.col.oficial@gmail.com</a>
        <a class="hc-footer-link" href="#/nosotros">Nosotros</a>
        <span class="hc-footer-static">Colombia</span>
      </div>
    </div>
    <div class="hc-footer-bottom">
      <div class="hc-footer-bottom-inner">
        <span>© ${new Date().getFullYear()} HERRE-COL · Arquitectura en metal</span>
        <span>Diseño, fabricación e instalación</span>
      </div>
    </div>
  `;
}
