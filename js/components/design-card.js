import { categoryBySlug } from '../data.js';
import { waLink } from '../wa.js';
import { icon, whatsappGlyph } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';

/**
 * Renders a single design/product card, including the "Cotizar este diseño" CTA.
 *
 * The CTA is a real <a href="https://wa.me/...">, not a button+onclick: the wa.me
 * link is fully resolved (number + url-encoded message with the design's reference)
 * at render time, so it works even if a script fails to load, opens correctly with
 * right-click "open in new tab", and needs no JS click handler to function.
 */
export function renderDesignCard(design) {
  const category = categoryBySlug(design.cat);
  const categoryName = category ? category.name : '';
  const quoteHref = waLink({ ref: design.ref, name: design.name, cat: categoryName });

  return `
    <article class="hc-card hc-reveal">
      <div class="hc-card-accent" aria-hidden="true"></div>
      <div class="hc-card-media">
        ${imageWithFallback({
          src: design.img,
          alt: `${design.name} — ${categoryName}`,
          label: design.ref,
          imgClass: 'hc-card-img',
        })}
        <span class="hc-card-ref">${design.ref}</span>
        <button
          type="button"
          class="hc-card-share"
          data-action="share"
          data-ref="${design.ref}"
          data-name="${design.name}"
          data-cat="${categoryName}"
          data-slug="${design.cat}"
          aria-label="Compartir ${design.name}"
          title="Compartir"
        >${icon('share-2', 17)}</button>
      </div>
      <div class="hc-card-body">
        <span class="hc-card-cat">${categoryName}</span>
        <h3 class="hc-card-name">${design.name}</h3>
        ${design.desc ? `<p class="hc-card-desc">${design.desc}</p>` : ''}
        <div class="hc-card-cta-wrap">
          <a class="hc-card-cta" href="${quoteHref}" target="_blank" rel="noopener">
            ${whatsappGlyph(17, '#fff')} Cotizar este diseño
          </a>
        </div>
      </div>
    </article>
  `;
}
