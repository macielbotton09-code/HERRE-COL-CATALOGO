# HERRE-COL — Catálogo digital

Sitio catálogo de HERRE-COL (arquitectura en metal). Construido como una SPA de
JavaScript modular sin build step ni dependencias externas de CDN para
componentes críticos (React/Babel/íconos se auto-hospedan como código propio),
para que cargue rápido y no dependa de la disponibilidad de un tercero.

## Cómo correrlo localmente

Cualquier servidor estático sirve, por ejemplo:

```bash
python3 -m http.server 8080
# o
npx serve .
```

Luego abre `http://localhost:8080`.

## Estructura

```
index.html          Shell + metadatos SEO/Open Graph/schema.org
css/                 variables, base, componentes, animaciones, responsive
js/
  data.js            Categorías y diseños del catálogo (agrega uno y aparece solo)
  wa.js              Número de WhatsApp + generación de enlaces wa.me
  social.js          URLs reales de Instagram/Facebook
  icons.js           Set de íconos SVG inline (sin CDN externo)
  placeholder.js     Fallback de imagen cuando falta una foto
  router.js          Router por hash (#/, #/catalogo/:slug, #/contacto, #/nosotros)
  app.js             Punto de entrada: monta todo y maneja los eventos
  components/        Navbar, Footer, FloatingWA, DesignCard, tarjeta social, CTA band
  pages/             Home, Category, Contact, Nosotros
assets/
  logo/              logo-mark.png, logo-mark-white.png (faltan — ver abajo)
  img/hero/          Fotos de fondo para hero y bandas CTA (faltan)
  cat/<categoria>/   Fotos de producto por categoría, mismos nombres que en data.js
```

## Los 3 comportamientos pedidos (implementados y verificados)

1. **Instagram / Facebook** — `js/social.js` centraliza las URLs reales; se usan
   en el navbar (menú), el stack flotante y la cabecera de cada categoría. Todos
   son `<a target="_blank" rel="noopener">` reales (funcionan aunque falle JS).
2. **Botón flotante de WhatsApp** — `js/components/floating-wa.js`, fijo abajo a
   la derecha en todas las páginas, con el mismo patrón `<a>` real.
3. **"Cotizar este diseño"** — cada tarjeta (`js/components/design-card.js`)
   arma `https://wa.me/<numero>?text=<mensaje>` con la referencia, nombre y
   categoría del diseño ya incluidos y codificados con `encodeURIComponent`.

Probado en Chromium (Playwright): sin errores de consola, sin overflow móvil,
enlaces con el href correcto en Home/Categoría/Contacto/Nosotros.

## Datos reales ya aplicados

- WhatsApp: `+57 310 669 7159` → `573106697159`
- Instagram: `https://www.instagram.com/herre.col`
- Facebook: `https://www.facebook.com/share/1EboBBr6sT/`

## Pendiente para producción (no venía en el paquete de diseño)

- **Logo** — `assets/logo/logo-mark.png` (versión color) y
  `logo-mark-white.png` (versión blanca, para el header sobre fotos). Mientras
  no estén, el sitio muestra automáticamente el texto "HERRE-COL" en su lugar
  (sin ícono roto).
- **Fotos de producto** — colócalas exactamente en `assets/cat/<categoria>/` con
  el mismo nombre de archivo que ya está en `js/data.js` (ej.
  `assets/cat/puertas/puerta-190.jpg`) y aparecerán solas, sin tocar código.
  Mientras falten, cada tarjeta muestra un marcador de posición de marca en vez
  de un ícono de imagen rota.
- **Fotos de fondo** — `assets/img/hero/hero-soldador-atardecer.jpg` (hero de
  inicio) y `assets/img/hero/welder-hero.jpg` (cabecera de categoría y banda
  CTA), más `assets/cat/cubiertas/cubiertas-2.jpg` y
  `assets/cat/portones/portones-1.jpg` (fondos de Contacto/Nosotros).
- **Dominio real** — falta confirmar para completar `rel=canonical` y
  `og:url` en `index.html` (están marcados con `TODO`).
- **Correo de contacto** — se usa `herre.col.oficial@gmail.com` (tomado del
  prototipo); confirmar si es el correo vigente.
