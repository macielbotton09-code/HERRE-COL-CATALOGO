import { SOCIAL } from '../social.js';
import { waLink } from '../wa.js';
import { whatsappGlyph } from '../icons.js';
import { socialBadge } from './social-badge.js';

/**
 * Persistent floating stack (bottom-right): Facebook, Instagram, and the WhatsApp FAB.
 * All three are plain anchors with fully-resolved hrefs — they work with JavaScript
 * disabled and are unaffected by any other script on the page failing.
 */
export function renderFloatingWA() {
  const quoteHref = waLink({});
  return `
    <div class="hc-floating-stack">
      ${socialBadge({ kind: 'facebook', href: SOCIAL.facebook, size: 50, title: 'Síguenos en Facebook' })}
      ${socialBadge({ kind: 'instagram', href: SOCIAL.instagram, size: 50, title: 'Síguenos en Instagram' })}
      <a href="${quoteHref}" target="_blank" rel="noopener" class="hc-fab" aria-label="Cotizar por WhatsApp">
        ${whatsappGlyph(30, '#fff')}
      </a>
    </div>
  `;
}
