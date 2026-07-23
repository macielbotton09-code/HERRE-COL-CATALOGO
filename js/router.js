/** Minimal hash router — no build step, no dependency, works on any static host. */

function parseHash() {
  const hash = (location.hash || '#/').replace(/^#/, '');
  return hash || '/';
}

/**
 * @param {(route: string) => void} onChange called immediately and on every hash change.
 */
export function startRouter(onChange) {
  const handle = () => onChange(parseHash());
  window.addEventListener('hashchange', handle);
  handle();
}

export function navigate(hash) {
  location.hash = hash;
}

export function matchCategory(route) {
  const match = route.match(/^\/catalogo\/([\w-]+)/);
  return match ? match[1] : null;
}
