# Portfolio · Mauro Spagnoli

Sitio de portfolio que presenta mis proyectos (Android + backend). Es **estático y sin build**:
HTML, CSS y un poco de JavaScript. Se puede abrir con doble clic y se publica en GitHub Pages tal cual.

## Estructura

```
portfolio/
├── index.html              # Portada en español (idioma por defecto)
├── en/
│   └── index.html          # Portada en inglés
├── assets/
│   ├── css/styles.css      # Estilos compartidos por todas las páginas
│   ├── js/main.js          # Mejora progresiva: tema y memoria de idioma
│   └── img/favicon.svg     # Icono
├── content/
│   └── projects.md         # Fuente de verdad del contenido (textos ES/EN)
├── .nojekyll               # Evita el procesado de Jekyll en GitHub Pages
├── .gitattributes          # Finales de línea LF (Windows ↔ Linux/GitHub Pages)
└── README.md
```

Las rutas son **relativas**, así que el sitio funciona igual en la raíz de un dominio
(`https://usuario.github.io/`) que en un subdirectorio (`https://maurospagnoli.github.io/portfolio/`).

## Previsualizar en local

Cualquiera de estas opciones sirve:

1. **Doble clic** en `index.html` (funciona porque todas las rutas son relativas).
2. Un servidor local, si tienes Python:
   ```powershell
   cd C:\Users\mauro\Documents\portfolio
   python -m http.server 5500
   # luego abre http://localhost:5500
   ```

> Con `file://` el JavaScript funciona igual, pero las rutas `canonical`/`hreflang` apuntan al
> dominio público: son solo metadatos, no rompen nada.

## Publicar en GitHub Pages

El sitio se sirve desde la rama `main`. El **repositorio local ya está inicializado** (rama `main`,
con el commit inicial hecho), así que solo falta conectarlo con GitHub.

**A. Repositorio de usuario (recomendado por la URL elegida)**

1. Crea en GitHub el repositorio **`MauroSpagnoli.github.io`** (público y vacío, sin README).
2. Añade el remoto y sube:
   ```powershell
   cd C:\Users\mauro\Documents\portfolio
   git remote add origin https://github.com/MauroSpagnoli/MauroSpagnoli.github.io.git
   git push -u origin main
   ```
3. GitHub → **Settings → Pages** → *Deploy from a branch* → branch `main`, carpeta `/ (root)`.
4. En un par de minutos: **https://maurospagnoli.github.io/**

**B. Repositorio de proyecto (URL con subruta)**

Si usas un repo llamado `portfolio`, la URL pasa a ser `https://maurospagnoli.github.io/portfolio/`.
Los enlaces internos siguen funcionando (son relativos), pero hay que actualizar las URLs absolutas
de `canonical` y `hreflang` en `index.html` y `en/index.html`.

## Cómo funciona el bilingüe

- Cada idioma es **una página real** (`/` en español, `/en/` en inglés). Nada de traducción en el
  cliente: funciona sin JavaScript y es bueno para SEO (`hreflang` + `canonical`).
- El selector ES/EN guarda la preferencia en `localStorage`. Si vuelves a un idioma distinto del
  elegido, aparece un **aviso discreto** con el enlace para cambiar. No hay redirección automática:
  no desorienta y no rompe el botón "atrás" del navegador.
- Si JavaScript está desactivado, todo sigue siendo navegable.

## Caché de CSS y JS

Los enlaces a `styles.css` y `main.js` llevan un sufijo de versión (`?v=N`; ahora el CSS va por
`?v=6` y el JS por `?v=3`). GitHub Pages cachea los estáticos, así que **al tocar el CSS o el JS
hay que subir ese número** en `index.html` y en `en/index.html` para que los visitantes que ya
habían entrado reciban la versión nueva.

## Roadmap

El **repositorio git local ya está creado** (rama `main`, commit inicial hecho); falta publicarlo (F5).

| Fase | Contenido | Estado |
|---|---|---|
| F0 | Contenido en `content/projects.md` | ✅ **hecha** (contacto completo; falta el texto de experiencia) |
| F1 | Portada ES/EN + estilos + favicon | ✅ **hecha** |
| F2 | Diseño y responsive | ✅ **hecha** (Lighthouse: accesibilidad/SEO/buenas prácticas = 100 en los dos temas y los dos idiomas) |
| F3 | Case studies: una página por proyecto (ES/EN) con capturas | ⏳ siguiente |
| F4 | SEO (`og:image`), accesibilidad y Lighthouse | ⏳ |
| F5 | Publicación en GitHub Pages | ⏳ |
| F6 | Extras: blog, GIFs de la app, CV descargable | ⏳ |

## Pendientes de contenido

- **Experiencia**: falta el texto del puesto y las tareas (lo aporta Mauro).
- Decidir si se muestran ubicación y disponibilidad.
- Capturas de pantalla de las apps → guardar en `assets/img/` (necesarias para F3 y `og:image` en F4).
- Decidir si se mantiene **Ktor** en el titular, en «Sobre mí» y en las pills: solo lo respaldaba
  Split, que ya no está en el portfolio (aunque el conocimiento es real).
