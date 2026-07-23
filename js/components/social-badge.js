import { SOCIAL } from '../social.js';
import { waLink } from '../wa.js';
import { whatsappGlyph, facebookGlyph, instagramGlyph } from '../icons.js';

const GLYPHS = { whatsapp: whatsappGlyph, facebook: facebookGlyph, instagram: instagramGlyph };

/**
 * A round, brand-colored social badge. Always a real <a href>, target="_blank",
 * rel="noopener" — per the handoff requirements for Instagram/Facebook/WhatsApp links.
 */
export function socialBadge({ kind, href, size = 52, title }) {
  const glyph = GLYPHS[kind](Math.round(size * 0.5), '#fff');
  return `
    <a href="${href}" target="_blank" rel="noopener" title="${title}" aria-label="${title}"
       class="hc-social-badge hc-social-badge--${kind}" style="width:${size}px;height:${size}px">
      ${glyph}
    </a>
  `;
}

/** Vertical stack: Facebook → Instagram → WhatsApp, matching the approved handoff design. */
export function socialStack({ size = 52, waMessage = {} } = {}) {
  const wa = waLink(waMessage);
  return `
    <div class="hc-social-stack">
      ${socialBadge({ kind: 'facebook', href: SOCIAL.facebook, size, title: 'Síguenos en Facebook' })}
      ${socialBadge({ kind: 'instagram', href: SOCIAL.instagram, size, title: 'Síguenos en Instagram' })}
      ${socialBadge({ kind: 'whatsapp', href: wa, size, title: 'Escríbenos por WhatsApp' })}
    </div>
  `;
}
