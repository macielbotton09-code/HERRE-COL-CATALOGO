import { CATEGORIES } from '../data.js';
import { waLink } from '../wa.js';
import { icon } from '../icons.js';
import { imageWithFallback } from '../placeholder.js';

function infoRow(iconName, label, value) {
  return `
    <div class="hc-info-row">
      <span class="hc-info-icon">${icon(iconName, 20)}</span>
      <div>
        <div class="hc-info-label">${label}</div>
        <div class="hc-info-value">${value}</div>
      </div>
    </div>
  `;
}

export function renderContactPage() {
  const categoryOptions = CATEGORIES.map((c) => `<option>${c.name}</option>`).join('');
  const quoteHref = waLink({});

  return `
    <section class="hc-section" style="background:var(--surface-subtle)">
      <div class="hc-contact-grid">
        <div class="hc-contact-panel">
          ${imageWithFallback({
            src: 'assets/cat/cubiertas/cubiertas-2.jpg',
            alt: '',
            imgClass: 'hc-contact-panel-bg',
            wrapClass: 'hc-contact-panel-bg-wrap',
          })}
          <div class="hc-contact-panel-content">
            <div>
              <span class="hc-eyebrow hc-eyebrow--inverse">Contacto</span>
              <h1 class="hc-contact-title">Tu diseño, a un mensaje.</h1>
              <p class="hc-contact-lede">La forma más rápida es WhatsApp. Te respondemos hoy.</p>
            </div>
            <a class="hc-btn" style="background:var(--color-whatsapp-dark);color:#fff;align-self:flex-start;height:52px;padding:0 24px;font-size:var(--text-md)"
               href="${quoteHref}" target="_blank" rel="noopener">
              ${icon('message-circle', 20)} Abrir WhatsApp
            </a>
            <div style="display:flex;flex-direction:column;gap:20px">
              ${infoRow('phone', 'WhatsApp', '+57 310 669 7159')}
              ${infoRow('mail', 'Correo', 'herre.col.oficial@gmail.com')}
              ${infoRow('map-pin', 'Cobertura', 'Colombia')}
              ${infoRow('clock', 'Horario', 'Lun–Sáb · 7:00 a 17:00')}
            </div>
          </div>
        </div>
        <div class="hc-contact-form-wrap">
          <h3 class="hc-contact-form-title">O escríbenos aquí</h3>
          <p class="hc-contact-form-lede">Enviamos tu mensaje directo a WhatsApp — sin formularios eternos.</p>
          <form class="hc-contact-form" id="hc-contact-form">
            <div class="hc-field">
              <label for="hc-cf-name">Nombre</label>
              <input id="hc-cf-name" name="nombre" type="text" placeholder="Tu nombre" autocomplete="name">
            </div>
            <div class="hc-field">
              <label for="hc-cf-service">¿Qué necesitas?</label>
              <select id="hc-cf-service" name="servicio">${categoryOptions}<option>Otro</option></select>
            </div>
            <div class="hc-field">
              <label for="hc-cf-detail">Cuéntanos (opcional)</label>
              <textarea id="hc-cf-detail" name="detalle" rows="3" placeholder="Medidas, ubicación, referencia…"></textarea>
            </div>
            <button type="submit" class="hc-btn hc-btn--primary hc-btn--lg hc-btn--block">
              ${icon('message-circle', 18)} Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}
