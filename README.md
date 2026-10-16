# Portfolio · Mauro Spagnoli

Sitio de portfolio que presenta mis proyectos (Android + backend). Es **estático y sin build**:
HTML, CSS y algo de JavaScript. Todas las rutas son relativas, así que funciona igual abriéndolo
con doble clic que servido desde GitHub Pages.

## Estructura

```
├── index.html                     portada en español
├── en/
│   └── index.html                 portada en inglés
├── proyectos/
│   ├── cuentas-claras.html        caso de estudio ES
│   └── todolist.html              caso de estudio ES
├── en/projects/
│   ├── cuentas-claras.html        caso de estudio EN
│   └── todolist.html              caso de estudio EN
├── assets/
│   ├── css/styles.css             estilos compartidos por todas las páginas
│   ├── js/main.js                 tema claro/oscuro y aviso de idioma recordado
│   └── img/
│       ├── favicon.svg
│       ├── cuentas-claras/        capturas (login, grupos, gastos, balances…)
│       └── todolist/              capturas (tareas, nueva tarea, ajustes…)
├── content/projects.md            fuente de verdad del texto del sitio
├── .nojekyll                      evita que GitHub Pages procese el sitio con Jekyll
├── .gitattributes                 fuerza finales de línea LF en todo el repo
└── README.md
```

Cada caso de estudio vive en la carpeta de su idioma y se empareja con el del otro idioma mediante
`rel="alternate" hreflang`: `proyectos/cuentas-claras.html` ↔ `en/projects/cuentas-claras.html`.

## Previsualizar en local

1. **Doble clic** en `index.html`. Funciona porque todas las rutas son relativas.
2. **Servidor local** (recomendado para que `fetch` y las rutas absolutas se comporten como en
   producción). En este equipo hay un servidor mínimo en PowerShell, sin dependencias:

   ```powershell
   Start-Process powershell -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-File','C:\Users\mauro\AppData\Local\Temp\opencode\serve-portfolio.ps1'
   # sirve C:\Users\mauro\Documents\portfolio en http://localhost:8765/
   ```

   Si tienes Python, también sirve `python -m http.server 5500`.

> Con `file://` el JavaScript funciona igual; solo los metadatos `canonical`/`hreflang` apuntan al
> dominio público, y eso no rompe nada.

## Publicar en GitHub Pages

El sitio se sirve desde la rama `main`. El repositorio local ya está inicializado y versionado.

**A. Repositorio de usuario (recomendado por la URL elegida)**

1. Crea en GitHub el repositorio **`MauroSpagnoli.github.io`** (público y vacío, sin README).
2. Añade el remoto y sube:

   ```powershell
   cd C:\Users\mauro\Documents\portfolio
   git remote add origin https://github.com/MauroSpagnoli/MauroSpagnoli.github.io.git
   git push -u origin main
   ```

3. GitHub → **Settings → Pages** → *Deploy from a branch* → rama `main`, carpeta `/ (root)`.
4. En un par de minutos: **https://maurospagnoli.github.io/**

**B. Repositorio de proyecto (URL con subruta)**

Si usas un repo llamado `portfolio`, la URL pasa a ser `https://maurospagnoli.github.io/portfolio/`.
Los enlaces internos siguen funcionando (son relativos), pero hay que actualizar las URLs absolutas
de `canonical` y `hreflang` en las seis páginas.

## Cómo funciona el bilingüe

- Cada idioma es **una página real**: `/` y `proyectos/*.html` en español, `/en/` y
  `/en/projects/*.html` en inglés. Nada de traducción en el cliente: funciona sin JavaScript y es
  bueno para SEO (`hreflang` + `canonical`).
- El selector ES/EN guarda la preferencia en `localStorage`. Si vuelves a un idioma distinto del
  elegido, aparece un **aviso discreto** con el enlace para cambiar. No hay redirección automática:
  no desorienta y no rompe el botón «atrás» del navegador.
- Si JavaScript está desactivado, todo sigue siendo navegable.

## Caché de CSS y JS

Los enlaces a `styles.css` y `main.js` llevan un sufijo de versión: ahora el CSS va por **`?v=7`**
y el JS por **`?v=3`**. GitHub Pages cachea los estáticos, así que **al tocar el CSS o el JS hay que
subir ese número en las seis páginas** para que quien ya había entrado reciba la versión nueva. Los
cambios que solo tocan HTML no necesitan subir nada.

## Roadmap

| Fase | Contenido | Estado |
|---|---|---|
| F0 | Contenido en `content/projects.md` | ✅ **hecha** (contacto completo; falta el texto de experiencia) |
| F1 | Portada ES/EN + estilos + favicon | ✅ **hecha** |
| F2 | Diseño y responsive | ✅ **hecha** (Lighthouse: accesibilidad/SEO/buenas prácticas = 100 en los dos temas y los dos idiomas) |
| F3 | Casos de estudio: una página por proyecto (ES/EN) con capturas reales | ✅ **hecha** |
| F4 | SEO (`og:image`), accesibilidad y Lighthouse de las páginas nuevas | ⏳ siguiente |
| F5 | Publicación en GitHub Pages | ⏳ |
| F6 | Extras: blog, GIFs de la app, CV descargable | ⏳ |

## Pendientes de contenido

- **Experiencia**: falta el texto del puesto y las tareas (lo aporta Mauro).
- Decidir si se muestran ubicación y disponibilidad.
- `og:image` (F4): hoy las páginas comparten `og:description` pero no imagen. Las capturas de
  `assets/img/<proyecto>/` son la materia prima.

## Notas de las capturas

Las capturas de `assets/img/` son reales: se tomaron de las apps en un emulador, no son montajes.
Los datos que se ven son de ejemplo.

- **CuentasClaras**: interfaz solo en español; se capturó contra la API en local con datos sembrados
  (un grupo de piso con tres miembros y cinco gastos).
- **TodoList**: interfaz capturada en español (la app también está en inglés). Los `alt` y los pies
  de foto se escriben por idioma en cada página, así que el mismo juego de capturas sirve para ES y
  para EN.
