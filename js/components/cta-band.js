import { waLink } from '../wa.js';
import { whatsappGlyph } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';

export function renderCtaBand() {
  const quoteHref = waLink({});
  return `
    <section class="hc-ctaband">
      <div class="hc-ctaband-inner">
        ${imageWithFallback({
          src: 'assets/img/hero/welder-hero.jpg',
          alt: '',
          imgClass: 'hc-ctaband-img',
          wrapClass: 'hc-ctaband-img-wrap',
        })}
        <div class="hc-ctaband-content">
          <div>
            <h2 class="hc-ctaband-title">¿Ya viste algo que te gusta?</h2>
            <p class="hc-ctaband-lede">Escríbenos la referencia y te cotizamos hoy mismo.</p>
          </div>
          <a class="hc-btn hc-btn--whatsapp hc-btn--lg" href="${quoteHref}" target="_blank" rel="noopener">
            ${whatsappGlyph(20, '#fff')} Cotizar ahora
          </a>
        </div>
      </div>
    </section>
  `;
}
