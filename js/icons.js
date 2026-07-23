/**
 * Self-contained inline SVG icon set — no external icon-font/CDN dependency
 * (the original CDN unpkg.com/lucide script would be a production reliability risk:
 * one failed request away from every icon in the site disappearing).
 *
 * All icons share a 24x24 viewBox and inherit color via currentColor, so they can be
 * sized/colored purely from CSS at the call site.
 */

const STROKE = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

const PATHS = {
  'home': `<path ${STROKE} d="M4 11.5 12 4l8 7.5M6 10v9.5a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1V10"/>`,
  'layout-grid': `<g ${STROKE}><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5"/><rect x="13" y="13" width="7.5" height="7.5" rx="1.5"/></g>`,
  'users': `<g ${STROKE}><circle cx="9" cy="8" r="3.2"/><path d="M3.2 20c0-3.4 2.6-6 5.8-6s5.8 2.6 5.8 6"/><path d="M15.5 5.6a3.1 3.1 0 0 1 0 5.9"/><path d="M17.2 14.4c2.4.5 4.1 2.6 4.1 5.6"/></g>`,
  'phone': `<path ${STROKE} d="M6 3.5h2.6c.4 0 .8.3.9.7l.8 2.9c.1.4 0 .8-.3 1.1L8.7 9.6a13 13 0 0 0 5.7 5.7l1.4-1.3c.3-.3.7-.4 1.1-.3l2.9.8c.4.1.7.5.7.9V18c0 1.4-1.2 2.5-2.6 2.4C10.8 20 4 13.2 3.6 6.1 3.5 4.7 4.6 3.5 6 3.5Z"/>`,
  'message-circle': `<path ${STROKE} d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4c-1.3 0-2.5-.3-3.6-.8L3 20l1-4.6a8.3 8.3 0 0 1-.9-3.9A8.4 8.4 0 0 1 11.9 3a8.4 8.4 0 0 1 9.1 8.5Z"/>`,
  'share-2': `<g ${STROKE}><circle cx="18" cy="5" r="2.4"/><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="19" r="2.4"/><path d="m8.1 10.8 7.8-4.2M8.1 13.2l7.8 4.2"/></g>`,
  'chevron-right': `<path ${STROKE} d="m9 5 7 7-7 7"/>`,
  'arrow-right': `<path ${STROKE} d="M4 12h16M13 5l7 7-7 7"/>`,
  'arrow-up-right': `<path ${STROKE} d="M6 18 18 6M8 6h10v10"/>`,
  'map-pin': `<g ${STROKE}><path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></g>`,
  'mail': `<g ${STROKE}><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m4 7 8 6 8-6"/></g>`,
  'clock': `<g ${STROKE}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 2"/></g>`,
  'mouse-pointer-click': `<g ${STROKE}><path d="M6 4.5 9 18l2.4-4.6 4.6-2.4L6 4.5Z"/><path d="M17 17l3 3M20 12h2M16 8l1.5-1.5"/></g>`,
  'ruler': `<g ${STROKE}><rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-45 12 12)"/><path d="m8.5 10.5 1 1M11 8l1.4 1.4M13.5 5.5l1 1"/></g>`,
  'pencil-ruler': `<g ${STROKE}><path d="M14.5 3.5 20.5 9.5 9 21H3v-6L14.5 3.5Z"/><path d="m12 6 6 6"/></g>`,
  'flame': `<path ${STROKE} d="M12 21c4 0 6.5-2.7 6.5-6.2 0-3-1.8-4.9-3-6.7-.3 1.6-1.2 2.6-2.1 2.6-1.4 0-1.2-2-1-3.2C10.8 8.9 8 11 8 14.5 8 18.3 9.8 21 12 21Z"/>`,
  'shield-check': `<g ${STROKE}><path d="M12 3.5 5 6v5.5c0 5 3 8.3 7 9.5 4-1.2 7-4.5 7-9.5V6l-7-2.5Z"/><path d="m9 12 2.2 2.2L15.5 10"/></g>`,
  'check': `<path ${STROKE} d="m5 12.5 4.5 4.5L19 7"/>`,
  'menu': `<path ${STROKE} d="M4 6.5h16M4 12h16M4 17.5h16"/>`,
  'x': `<path ${STROKE} d="M6 6l12 12M18 6 6 18"/>`,

  // Category icons
  'door-closed': `<g ${STROKE}><rect x="5" y="3" width="14" height="18" rx="1"/><circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none"/></g>`,
  'app-window': `<g ${STROKE}><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9h17M9 4.5v15"/></g>`,
  'panels-top-left': `<g ${STROKE}><rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M3.5 10h17M10 10v10.5"/></g>`,
  'shield-half': `<g ${STROKE}><path d="M12 3.5 5 6v5.5c0 5 3 8.3 7 9.5V3.5Z"/><path d="M12 3.5 19 6v5.5c0 5-3 8.3-7 9.5"/></g>`,
  'fence': `<g ${STROKE}><path d="M5 21V6M5 6 3 3M5 6l2-3M12 21V6m0 0-2-3m2 3 2-3M19 21V6m0 0-2-3m2 3 2-3"/><path d="M2 11h20M2 16h20"/></g>`,
  'warehouse': `<g ${STROKE}><path d="M3 21V9.5L12 4l9 5.5V21"/><path d="M3 21h18"/><rect x="9" y="13" width="6" height="8"/></g>`,
  'chevrons-up': `<path ${STROKE} d="m5 16 7-7 7 7M5 10l7-7 7 7"/>`,
  'triangle': `<path ${STROKE} d="M12 4 3 20h18L12 4Z"/>`,
  'rows': `<g ${STROKE}><rect x="3.5" y="4" width="17" height="4.7" rx="1"/><rect x="3.5" y="10" width="17" height="4.7" rx="1"/><rect x="3.5" y="16" width="17" height="4.7" rx="1"/></g>`,
  'library': `<g ${STROKE}><path d="M4 21V6l3-2.5V21M11 21V4l3 1v16M18 21V7l2 1v13"/><path d="M2.5 21h19"/></g>`,
  'grid': `<g ${STROKE}><rect x="3.5" y="3.5" width="6" height="6" rx="1"/><rect x="14.5" y="3.5" width="6" height="6" rx="1"/><rect x="3.5" y="14.5" width="6" height="6" rx="1"/><rect x="14.5" y="14.5" width="6" height="6" rx="1"/></g>`,
  'shirt': `<path ${STROKE} d="M8 3.5 12 6l4-2.5 4 3.2-2.6 3-1.4-1V21H8V8.7l-1.4 1-2.6-3L8 3.5Z"/>`,
  'store': `<g ${STROKE}><path d="M3.5 9.5 5 4h14l1.5 5.5"/><path d="M3.5 9.5a2.6 2.6 0 0 0 5 1.1 2.6 2.6 0 0 0 5 0 2.6 2.6 0 0 0 5 0 2.6 2.6 0 0 0 5-1.1"/><path d="M5 10.5V20h14v-9.5"/></g>`,
};

/** Returns inline SVG markup for the given icon name at `size` pixels. */
export function icon(name, size = 20) {
  const body = PATHS[name];
  if (!body) return '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
}

// ---- Brand glyphs (official marks, filled) ----

export function whatsappGlyph(size = 20, color = '#fff') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;
}

export function instagramGlyph(size = 20, color = '#fff') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`;
}

export function facebookGlyph(size = 20, color = '#fff') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`;
}
