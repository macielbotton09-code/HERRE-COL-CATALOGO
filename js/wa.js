/**
 * WhatsApp helpers — the single source of truth for every "Cotizar" link in the site.
 * Uses the documented https://wa.me/<number>?text=<url-encoded message> format.
 */

export const WHATSAPP_NUMBER = '573106697159'; // +57 310 669 7159 — formato internacional, sin '+' ni espacios

/**
 * Builds a wa.me link with a pre-filled message that references the design/category
 * the user was looking at, so the business receives full context in one click.
 */
export function waLink({ ref, name, cat } = {}) {
  let message;
  if (ref) {
    message = `Hola HERRE-COL 👋. Me interesa el diseño *${name}* (Ref. ${ref})`;
    if (cat) message += ` de la categoría ${cat}`;
    message += '. ¿Me pueden dar una cotización?';
  } else if (cat) {
    message = `Hola HERRE-COL 👋. Estoy viendo la categoría *${cat}* y quiero solicitar una cotización.`;
  } else {
    message = 'Hola HERRE-COL 👋. Quiero solicitar una cotización.';
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(opts) {
  window.open(waLink(opts), '_blank', 'noopener');
}

/**
 * Shares a design or category via the native share sheet, falling back to clipboard copy.
 * Returns a status string so callers can show feedback ('shared' | 'copied' | 'cancel' | 'error').
 */
export async function shareDesign({ ref, name, cat, slug } = {}) {
  const base = `${location.origin}${location.pathname}`;
  const url = slug ? `${base}#/catalogo/${slug}` : base;
  const title = ref ? `HERRE-COL · ${name} (${ref})` : 'HERRE-COL';
  const text = ref
    ? `Mira este diseño de HERRE-COL: ${name} — Ref. ${ref}`
    : 'Catálogo de herrería arquitectónica · HERRE-COL';

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return 'shared';
    } catch {
      return 'cancel';
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return 'copied';
  } catch {
    return 'error';
  }
}
