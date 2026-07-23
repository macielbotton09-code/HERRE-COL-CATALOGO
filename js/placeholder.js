/**
 * Branded fallback for missing product photos.
 *
 * The real photos referenced by js/data.js are not part of this handoff yet, so any
 * <img> pointing at assets/cat/** will 404 until they're added. Rather than let the
 * browser show a broken-image icon, every catalog image renders with a hidden
 * fallback sibling that becomes visible on `error` — a branded placeholder instead of
 * a visibly broken page. Once real photos are dropped in at the exact same paths,
 * they load normally and the fallback never triggers.
 */

const IMAGE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 5-5 4 4 3-3 4 4"/></svg>`;

/**
 * Returns the HTML for an <img> plus its hidden placeholder sibling.
 * `label` is the short text shown inside the placeholder (e.g. a reference code).
 */
export function imageWithFallback({ src, alt, label = '', imgClass = '', wrapClass = '' }) {
  return `
    <div class="hc-img-media ${wrapClass}">
      <img class="${imgClass}" src="${src}" alt="${alt}" loading="lazy" data-fallback>
      <div class="hc-img-fallback" hidden>
        ${IMAGE_ICON}
        ${label ? `<span>${label}</span>` : ''}
      </div>
    </div>
  `;
}

/** Call once after inserting markup produced by imageWithFallback() into the DOM. */
export function bindImageFallbacks(root = document) {
  root.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      img.hidden = true;
      const fallback = img.nextElementSibling;
      if (fallback) fallback.hidden = false;
    }, { once: true });
  });
}
