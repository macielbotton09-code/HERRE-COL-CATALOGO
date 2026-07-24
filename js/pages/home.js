import { CATEGORIES, DESIGNS, categoryCover } from '../data.js';
import { waLink } from '../wa.js';
import { icon, whatsappGlyph } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';
import { renderDesignCard } from '../components/design-card.js';
import { renderCtaBand } from '../components/cta-band.js';

const FEATURED_REFS = ['ES-101', 'CU-106', 'EN-155'];

const PROCESS_STEPS = [
  { n: '01', iconName: 'mouse-pointer-click', title: 'Elige', desc: 'Recorre el catálogo y guarda la referencia que te gusta.' },
  { n: '02', iconName: 'message-circle', title: 'Cotiza', desc: 'Un clic abre WhatsApp con tu diseño ya escrito.' },
  { n: '03', iconName: 'ruler', title: 'Recibe', desc: 'Medimos, fabricamos e instalamos a la medida.' },
];

function renderHero() {
  const quoteHref = waLink({});
  const designCount = Math.floor(DESIGNS.length / 10) * 10;
  const stats = [
    { num: `${designCount}+`, label: 'Diseños en catálogo' },
    { num: '500+', label: 'Trabajos realizados en obra' },
    { num: '100%', label: 'Fabricado a la medida' },
  ];

  return `
    <section class="hc-hero">
      ${imageWithFallback({
        src: 'assets/img/hero/hero-soldador-atardecer.jpg',
        alt: 'Soldador fabricando herrería a la medida',
        imgClass: 'hc-hero-media',
        wrapClass: 'hc-hero-media-wrap',
      })}
      <div class="hc-hero-scrim" aria-hidden="true"></div>
      <div class="hc-hero-content">
        <h1 class="hc-hero-title">
          <span class="hc-hero-line" style="animation-delay:.1s">El aliado</span>
          <span class="hc-hero-line" style="animation-delay:.3s;color:var(--orange-500)">que tu obra</span>
          <span class="hc-hero-line" style="animation-delay:.5s;color:var(--blue-700)">necesita</span>
        </h1>
        <p class="hc-hero-lede hc-hero-rise" style="animation-delay:.75s">Soluciones Metalúrgicas para Hogares, Empresas e Industrias.</p>
        <div class="hc-hero-actions hc-hero-rise" style="animation-delay:.9s">
          <a class="hc-btn hc-btn--whatsapp hc-btn--lg" href="${quoteHref}" target="_blank" rel="noopener">
            ${whatsappGlyph(21, '#fff')} Cotizar por WhatsApp
          </a>
          <a class="hc-btn hc-btn--outline hc-btn--lg" href="#/catalogo/puertas">
            Ver catálogo ${icon('arrow-right', 18)}
          </a>
        </div>
        <div class="hc-hero-stats hc-hero-rise" style="animation-delay:1.05s">
          ${stats.map((s) => `
            <div class="hc-hero-stat">
              <span class="hc-hero-stat-num">${s.num}</span>
              <span class="hc-hero-stat-label">${s.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCategoryGrid() {
  const tiles = CATEGORIES.map((c) => `
    <a href="#/catalogo/${c.slug}" class="hc-cattile">
      ${imageWithFallback({
        src: categoryCover(c.slug),
        alt: c.name,
        label: c.name,
        imgClass: 'hc-cattile-img',
      })}
      <span class="hc-cattile-scrim" aria-hidden="true"></span>
      <span class="hc-cattile-body">
        <span class="hc-cattile-icon">${icon(c.icon, 22)}</span>
        <span class="hc-cattile-name">${c.name}</span>
        <span class="hc-cattile-cta">Ver diseños ${icon('arrow-up-right', 15)}</span>
      </span>
    </a>
  `).join('');

  return `
    <section class="hc-section" style="background:linear-gradient(160deg, var(--blue-950) 0%, var(--blue-900) 55%, #10162e 100%)">
      <div class="hc-container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:44px;flex-wrap:wrap">
          <div>
            <span class="hc-eyebrow" style="color:#fff">Catálogo</span>
            <h2 style="font-weight:800;font-size:var(--text-2xl);letter-spacing:-0.02em;color:#fff">Elige una línea. Nosotros la fabricamos.</h2>
          </div>
        </div>
        <div class="hc-catgrid">${tiles}</div>
      </div>
    </section>
  `;
}

function renderFeatured() {
  const featured = FEATURED_REFS.map((ref) => DESIGNS.find((d) => d.ref === ref)).filter(Boolean);
  return `
    <section class="hc-section" style="background:linear-gradient(160deg, var(--blue-950) 0%, var(--blue-900) 55%, #10162e 100%)">
      <div class="hc-container">
        <div style="text-align:center;max-width:560px;margin:0 auto 44px">
          <span class="hc-eyebrow" style="justify-content:center;color:var(--orange-400)">Selección</span>
          <h2 style="font-weight:800;font-size:var(--text-2xl);letter-spacing:-0.02em;color:#fff">Diseños que ya viven en obra</h2>
        </div>
        <div class="hc-designgrid">${featured.map(renderDesignCard).join('')}</div>
      </div>
    </section>
  `;
}

function renderProcess() {
  return `
    <section class="hc-section" style="background:var(--orange-50)">
      <div class="hc-container">
        <div class="hc-steps">
          ${PROCESS_STEPS.map((s) => `
            <div class="hc-step">
              <div style="display:flex;align-items:center;gap:14px">
                <span class="hc-step-num">${s.n}</span>
                <span class="hc-step-icon">${icon(s.iconName, 22)}</span>
              </div>
              <h3 class="hc-step-title">${s.title}</h3>
              <p class="hc-step-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderHomePage() {
  return renderHero() + renderCategoryGrid() + renderFeatured() + renderProcess() + renderCtaBand();
}
