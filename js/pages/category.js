import { CATEGORIES, categoryBySlug, designsByCategory } from '../data.js';
import { waLink } from '../wa.js';
import { icon, whatsappGlyph } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';
import { renderDesignCard } from '../components/design-card.js';
import { socialStack } from '../components/social-badge.js';
import { renderCtaBand } from '../components/cta-band.js';

function renderNotFound() {
  return `
    <section class="hc-section" style="text-align:center">
      <h1 style="font-weight:800;font-size:var(--text-2xl)">Categoría no encontrada</h1>
      <a class="hc-btn hc-btn--primary" style="margin-top:20px;display:inline-flex" href="#/catalogo/puertas">Ir al catálogo</a>
    </section>
  `;
}

function renderCategoryHero(category) {
  const quoteHref = waLink({ cat: category.name });
  return `
    <section class="hc-cathero">
      ${imageWithFallback({
        src: 'assets/img/hero/welder-hero.jpg',
        alt: 'Fabricación en metal HERRE-COL',
        imgClass: 'hc-cathero-media',
        wrapClass: 'hc-hero-media-wrap',
      })}
      <div class="hc-cathero-scrim" aria-hidden="true"></div>
      <div class="hc-cathero-content">
        <nav class="hc-breadcrumb" aria-label="Ruta de navegación">
          <a href="#/">Inicio</a>${icon('chevron-right', 14)}
          <a href="#/catalogo/puertas">Catálogo</a>${icon('chevron-right', 14)}
          <span style="color:#fff">${category.name}</span>
        </nav>
        <div class="hc-cathero-row">
          <div style="max-width:640px">
            <span class="hc-cathero-icon">${icon(category.icon, 26)}</span>
            <h1 class="hc-cathero-title">${category.name}</h1>
            <p class="hc-cathero-tagline">${category.tagline}</p>
          </div>
          <div class="hc-cathero-actions">
            <div class="hc-cathero-follow">
              <span class="hc-cathero-follow-label">Síguenos</span>
              ${socialStack({ size: 50, waMessage: { cat: category.name } })}
            </div>
            <div class="hc-cathero-buttons">
              <button type="button" class="hc-btn hc-btn--ghost-dark" data-action="share" data-cat="${category.name}" data-slug="${category.slug}">
                ${icon('share-2', 16)} Compartir
              </button>
              <a class="hc-btn hc-btn--whatsapp" href="${quoteHref}" target="_blank" rel="noopener">
                ${whatsappGlyph(17, '#fff')} Cotizar categoría
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCategorySwitcher(activeSlug) {
  const pills = CATEGORIES.map((c) => `
    <a href="#/catalogo/${c.slug}" class="hc-catpill${c.slug === activeSlug ? ' is-active' : ''}">
      ${icon(c.icon, 16)}${c.name}
    </a>
  `).join('');
  return `
    <div class="hc-catsticky">
      <div class="hc-sheen-bar" aria-hidden="true"></div>
      <div class="hc-catscroll">${pills}</div>
    </div>
  `;
}

function renderDesignsGrid(designs) {
  const count = designs.length;
  return `
    <section class="hc-section hc-section--tight">
      <div class="hc-container">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:28px">
          <div>
            <span class="hc-eyebrow hc-eyebrow--primary">Catálogo</span>
            <h2 style="font-weight:900;font-size:var(--text-2xl);letter-spacing:-0.02em;color:var(--color-primary)">Diseños disponibles</h2>
          </div>
          <p class="hc-meta-line"><b>${count}</b> ${count === 1 ? 'diseño' : 'diseños'} · toca <span class="hc-accent">Cotizar</span> para escribirnos con la referencia.</p>
        </div>
        <div class="hc-designgrid">${designs.map(renderDesignCard).join('')}</div>
      </div>
    </section>
  `;
}

export function renderCategoryPage(slug) {
  const category = categoryBySlug(slug);
  if (!category) return renderNotFound();

  const designs = designsByCategory(slug);
  return (
    renderCategoryHero(category) +
    renderCategorySwitcher(slug) +
    renderDesignsGrid(designs) +
    renderCtaBand()
  );
}
