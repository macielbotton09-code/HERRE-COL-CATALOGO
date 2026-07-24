import { icon } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';
import { renderCtaBand } from '../components/cta-band.js';

const PROCESS = [
  { iconName: 'pencil-ruler', title: 'Diseño', desc: 'Cada pieza se modela antes de cortar el primer perfil.' },
  { iconName: 'flame', title: 'Fabricación', desc: 'Soldadura especializada y acabado electrostático.' },
  { iconName: 'shield-check', title: 'Instalación', desc: 'Montaje propio y respaldo por escrito.' },
];

export function renderNosotrosPage() {
  return `
    <section class="hc-cathero">
      ${imageWithFallback({
        src: 'assets/cat/portones/portones-1.jpg',
        alt: '',
        imgClass: 'hc-cathero-media',
        wrapClass: 'hc-hero-media-wrap',
      })}
      <div class="hc-cathero-scrim" aria-hidden="true"></div>
      <div class="hc-cathero-content">
        <span class="hc-eyebrow hc-eyebrow--inverse">Nosotros</span>
        <h1 style="max-width:720px;font-weight:900;font-size:clamp(2.2rem, 4.5vw, 3.4rem);letter-spacing:-0.03em;line-height:1.02;color:#fff">
          Soluciones metálicas para hogares, empresas e industrias.
        </h1>
      </div>
    </section>

    <section class="hc-section" style="padding-bottom:0">
      <div style="max-width:920px;margin:0 auto;background:linear-gradient(160deg, var(--blue-950) 0%, var(--blue-900) 60%, #10162e 100%);border-radius:var(--radius-xl);padding:clamp(32px, 5vw, 60px);color:#fff;box-shadow:0 24px 60px rgba(5,15,43,0.28)">
        <span class="hc-eyebrow" style="color:var(--orange-400)">Nuestra historia</span>
        <h2 style="margin:0 0 22px;font-weight:900;font-size:clamp(1.8rem, 3.4vw, 2.6rem);letter-spacing:-0.025em;line-height:1.08;color:#fff">
          Detrás de HERRE-COL está <span style="color:var(--orange-400)">Hugo</span>.
        </h2>
        <p style="margin:0 0 20px;font-family:var(--font-display);font-weight:500;font-size:clamp(1.05rem, 1.5vw, 1.28rem);line-height:1.7;color:rgba(255,255,255,0.9)">
          A sus <strong style="color:#fff;font-weight:800">24 años</strong>, Hugo lleva <strong style="color:#fff;font-weight:800">una década</strong> conociendo a fondo el oficio de la metalúrgica. Hace <strong style="color:#fff;font-weight:800">6 años</strong> decidió independizar toda esa experiencia: empezó con trabajos por su cuenta y hoy dirige su propio taller, un negocio que no para de crecer.
        </p>
        <p style="margin:0 0 30px;font-family:var(--font-display);font-weight:500;font-size:clamp(1.05rem, 1.5vw, 1.28rem);line-height:1.7;color:rgba(255,255,255,0.9)">
          Somos <strong style="color:var(--orange-400);font-weight:800">expertos</strong> y contamos con un <strong style="color:var(--orange-400);font-weight:800">equipo que trabaja arduamente todos los días</strong> para que cada puerta, ventana o portón salga impecable y a la medida.
        </p>
        <a href="#/contacto" style="display:flex;align-items:center;gap:16px;background:rgba(255,255,255,0.08);border:1px solid rgba(148,174,228,0.4);border-radius:var(--radius-lg);padding:18px 22px;text-decoration:none;max-width:560px">
          <span style="flex-shrink:0;width:48px;height:48px;border-radius:var(--radius-md);background:var(--orange-500);color:#fff;display:inline-flex;align-items:center;justify-content:center">${icon('map-pin', 24)}</span>
          <span style="display:flex;flex-direction:column;gap:3px">
            <span style="font-family:var(--font-display);font-weight:700;font-size:var(--text-xs);letter-spacing:var(--ls-wider);text-transform:uppercase;color:var(--blue-300)">Nuestro taller</span>
            <span style="font-family:var(--font-display);font-weight:800;font-size:clamp(1.1rem, 1.8vw, 1.4rem);color:#fff;line-height:1.25">Calle 4 #6-59, Segundo Piso — Barrio Callejón, Centro</span>
          </span>
        </a>
      </div>
    </section>

    <section class="hc-section">
      <div class="hc-container">
        <div class="hc-steps">
          ${PROCESS.map((s) => `
            <div class="hc-step">
              <span class="hc-step-icon" style="background:var(--blue-50);color:var(--color-primary)">${icon(s.iconName, 26)}</span>
              <h3 class="hc-step-title">${s.title}</h3>
              <p class="hc-step-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderCtaBand()}
  `;
}
