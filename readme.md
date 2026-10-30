# AlexBanexx Soluciones IT
Sitio web institucional con estética neón futurista, desarrollado con **HTML5, Bootstrap 5 y SCSS modular**. Este proyecto documenta la refactorización de una hoja de estilos CSS monolítica a una arquitectura SCSS organizada por módulos.

## Objetivo
Migrar el CSS original del sitio (basado en Bootstrap y con varias capas de estilos superpuestas) a una estructura SCSS mantenible, reutilizable y fácil de escalar, sin modificar el aspecto visual final.

## Tecnologías
- HTML5
- Bootstrap 5
- SCSS (Dart Sass)
- Git y GitHub
- Visual Studio Code

## Qué se hizo
- Se separó el CSS en módulos por responsabilidad: base, layout, componentes y utilidades.
- Se centralizaron colores, tipografía, radios, capas (`z-index`) y breakpoints en variables SCSS.
- Se crearon mixins reutilizables: media queries (`respond-down`), transiciones, y estilos de tarjeta neón.
- Se fusionaron las tres capas del CSS original (Bootstrap, identidad intermedia y tema neón) en una sola regla por selector, sin duplicados.
- Se reemplazó `@import` por `@use`, la sintaxis vigente de Sass.
- Se aisló el código obsoleto en `_legacy.scss`.
- Se mantuvo el orden de la cascada importando `legacy` primero y `responsive` al final.
- Se conservaron las variables CSS (`:root`) para compatibilidad con Bootstrap y el HTML.
- Se mantuvieron las buenas prácticas de accesibilidad: foco visible, enlace "skip link" y soporte para `prefers-reduced-motion`.

## Estructura del proyecto
```
├── index.html
├── css/
│   └── styles.css            # CSS compilado (generado por Sass)
├── images/
│   ├── header-circuit.jpg
│   └── footer-circuit.jpg
├── scss/
│   ├── main.scss             # Punto de entrada
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── layout/
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   ├── _nav.scss
│   │   ├── _responsive.scss
│   │   └── _section.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _carousel.scss
│   │   ├── _forms.scss
│   │   ├── _legacy.scss
│   │   ├── _modals.scss
│   │   └── _skills.scss
│   └── utilities/
│       ├── _variables.scss
│       └── _mixins.scss
└── package.json
```

## Instalación y uso
1. Clonar el repositorio:

   ```bash
   git clone https://github.com/[usuario]/[repositorio].git
   cd [repositorio]
   ```
2. Instalar las dependencias:

   ```bash
   npm install
   ```
3. Compilar Sass en modo observador (recompila al guardar):

   ```bash
   npm run sass
   ```
4. Generar la versión comprimida para producción:

   ```bash
   npm run build
   ```
5. Abrir `index.html` con Live Server o directamente en el navegador.

## Orden de importación
El orden de los `@use` en `main.scss` define la cascada del CSS final:

1. Utilidades (variables y mixins)
2. Legacy
3. Base
4. Layout
5. Componentes
6. Responsive

## Personalización
Para cambiar la identidad visual, editá `scss/utilities/_variables.scss`: colores, radio de bordes, fuente y breakpoints se modifican en un solo lugar y se propagan a todo el sitio.

## Autor
**Ing Alejandro Banega** · [@ingalexbanexx](https://github.com/ingalexbanexx)