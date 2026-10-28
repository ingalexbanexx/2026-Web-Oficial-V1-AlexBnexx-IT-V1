# AlexBanexx Soluciones IT — Pre-entrega: Estructura avanzada y control de versiones con GitHub

## Objetivos:
Dominar el flujo de trabajo de Git aplicado al proyecto. Al finalizar, vas a tener un repositorio público con el historial de cambios de tu sitio y al menos tres páginas completamente adaptadas a mobile y desktop.

## El repositorio es parte del Modulo 5 de PseudoClases y BootsTrap y se presenta así, indizamos

### Estructura

- `index.html`: portada con carrusel Bootstrap.
- `pages/sobre-mi.html`: presentación y fotografía.
- `pages/servicios.html`: especialidades organizadas por categorías.
- `pages/proyectos.html`: galería de proyectos y modales Bootstrap.
- `pages/contacto.html`: vías de contacto.
- `scss/`: estilos Sass divididos por responsabilidad; `main.scss` reúne los módulos.
- `images/`: logo optimizado, foto, ilustraciones SVG, favicon y bandas decorativas neon para header/footer.

### Tecnologías

HTML5, Sass, Bootstrap 5.3.3 por CDN y Vite. No se incluye JavaScript propio; el bundle oficial de Bootstrap se utiliza para los componentes interactivos exigidos (menú responsive, carrusel y modales).

### Desarrollo Sass paso a paso

1. Instala las dependencias con `npm install`.
2. Ejecuta `npm run dev` para iniciar Vite. Las páginas cargan `scss/main.scss`, y Vite compila Sass automáticamente durante el desarrollo.
3. Edita el módulo correspondiente dentro de `scss/`: estilos globales en `_base.scss`, navegación en `_header.scss`, portada en `_home.scss`, componentes compartidos en `_sections.scss`, páginas internas en `_pages.scss` y adaptaciones de pantalla/tema en los módulos `_responsive.scss`, `_brand.scss`, `_theme.scss` y `_theme-responsive.scss`.
4. Mantén los breakpoints compartidos en `_variables.scss`; `main.scss` conserva el orden de importación para respetar la cascada existente.
5. Ejecuta `npm run build` para generar la versión de producción en `dist/`; `npm run preview` permite revisarla localmente.

### Contacto

- Facebook: `ing.alexbanexx`
- Instagram: `ing.alexbanexx`
- WhatsApp: `+54 9 388 590 0488`
- Email: `ingalexbanexx@gmail.com`
