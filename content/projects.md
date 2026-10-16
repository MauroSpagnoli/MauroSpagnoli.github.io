# Contenido del portfolio · fuente de verdad

> Este documento es la **fuente de verdad** del texto del sitio. Si algo cambia aquí, se
> actualiza en `index.html` y `en/index.html` (y en los case studies, fase 3).

## 1. Datos de perfil

| Campo | Valor | Estado |
|---|---|---|
| Nombre a mostrar | Mauro Spagnoli | ✅ |
| Rol | Desarrollador Android & Backend | ✅ |
| GitHub | https://github.com/MauroSpagnoli | ✅ |
| Email | maurospagnoliherrera@hotmail.com | ✅ |
| LinkedIn | https://www.linkedin.com/in/mauro-spagnoli-herrera | ✅ |
| Ubicación | — | pendiente (opcional) |
| CV descargable (PDF) | — | opcional (fase 6) |
| Dominio | `https://maurospagnoli.github.io/` (asumido) | a confirmar según el nombre del repo |

## 2. Textos de las secciones (ES / EN)

### Portada · hero
- **ES · eyebrow:** Desarrollo Android & Backend
- **EN · eyebrow**: Android & Backend Development
- **ES lead:** Construyo apps móviles y servicios backend obsesionados con la corrección de los
  datos: dinero exacto, funcionamiento sin conexión y contratos de API claros.
- **EN lead**: I build mobile apps and backend services obsessed with data correctness: exact
  money, offline behaviour and clear API contracts.

## 2.1 Sobre mí

**ES**

> Trabajo donde se encuentran el móvil y el backend: apps Android con Jetpack Compose y APIs en
> Spring Boot o Ktor. Me interesan los problemas en los que la corrección importa —dinero,
> permisos, sincronización— y dejo cada proyecto con tests, integración continua y documentación.

**EN**

> I work where mobile meets backend: Android apps with Jetpack Compose and APIs in Spring Boot or
> Ktor. I care about problems where correctness matters —money, permissions, synchronisation— and
> I ship every project with tests, CI and documentation.

## 2. Niveles de calidad (a revisar por ti)

- [ ] Confirmar cómo quieres presentarte (rol exacto: "Desarrollador Android", "Backend", "Full-stack"…).
- [ ] Añadir **email** y **LinkedIn** (o decir que no se muestran).
- [ ] Decidir si aparece **ubicación**, **disponibilidad** (p. ej. "abierto a oportunidades") y **experiencia/estudios**.
- [ ] Validar el texto de "Sobre mí" (no inventar nada que no quieras afirmar).
- [ ] **Experiencia**: pendiente del texto que aporte Mauro (puesto y qué hace). Cuando llegue, se
      añade una sección propia o un apartado dentro de "Sobre mí".

## 3. Proyectos

### 3.1 CuentasClaras

- **Repo:** <https://github.com/MauroSpagnoli/cuentas-claras>
- **Tipo:** full-stack (Android + API)
- **Tagline ES:** App de gastos compartidos: grupos, reparto flexible, balances y liquidación con
  el mínimo número de transferencias.
- **Tagline EN:** Shared-expenses app: groups, flexible splits, balances and settlement with the
  minimum number of transfers.
- **Destacados ES:**
  - Cliente Android **offline-first**: escritura optimista, tabla `outbox` y `SyncWorker` con
    reintentos idempotentes.
  - API **Spring Boot** con JWT (refresh rotativo), Flyway, `openapi.yaml` como contrato y tests
    de integración con Testcontainers.
  - **Algoritmo de liquidación** (exacto y heurístico) con el dinero siempre en enteros.
- **Destacados EN:**
  - **Offline-first** Android client: optimistic writes, an `outbox` table and a `SyncWorker` with
    idempotent retries.
  - **Spring Boot** API with JWT (rotating refresh), Flyway, `openapi.yaml` as the contract and
    integration tests on Testcontainers.
  - **Settlement algorithm** (exact and heuristic) with money always kept as integers.
- **Stack:** Kotlin · Jetpack Compose · Hilt · Room · WorkManager · Retrofit · Spring Boot ·
  PostgreSQL · Flyway · OpenAPI · GitHub Actions

### 3.2 TodoList

- **Repo:** <https://github.com/MauroSpagnoli/todolist>
- **Tipo:** Android
- **Tagline ES:** App de tareas con Clean Architecture, Room y una interfaz Compose que reacciona
  al instante.
- **Tagline EN:** Task app built with Clean Architecture, Room and a Compose UI that reacts
  instantly.
- **Destacados ES:**
  - Tres capas (**dominio, datos, UI**) con casos de uso e inyección con Hilt.
  - Estado reactivo con **Flow/StateFlow** y persistencia local con Room.
  - Integración continua con **Detekt** y publicación de APK firmado.
- **Destacados EN:**
  - Three layers (**domain, data, UI**) with use cases and Hilt injection.
  - Reactive state with **Flow/StateFlow** and local persistence with Room.
  - CI with **Detekt** and signed APK publishing.
- **Stack:** Kotlin · Jetpack Compose · Hilt · Room · Coroutines/Flow · Detekt · GitHub Actions

### 3.3 Proyectos descartados (no mostrar)

**Split** (`C:\Users\mauro\Documents\split`) — descartado el 2026-10-16 por decisión explícita.

Motivo: **no es el backend de CuentasClaras**, es un proyecto independiente (paquete `msh.split`,
Ktor 3.6, su propio `contract/openapi.yaml`, sin remoto en GitHub). Comparte el dominio (gastos
compartidos) con CuentasClaras, lo que creaba **redundancia**: quien lo leía se preguntaba si era
la misma cosa. Además está a medias (solo el hito M1; `backend-dotnet/` y `android/` nunca se
crearon) y vive solo en local.

Si algún día se publica y se completa, la vía sería un **apartado dentro del case study de
CuentasClaras** ("el mismo dominio implementado otra vez con Ktor"), nunca una tarjeta propia.

## 4. Pendientes técnicos del sitio

- [ ] Fase 3: una página de caso de estudio por proyecto (ES/EN) con capturas.
- [ ] Fase 4: `og:image`, auditoría de accesibilidad y Lighthouse.
- [ ] Fase 5: publicar en GitHub Pages (`MauroSpagnoli.github.io`) y ajustar `canonical`/`hreflang`
      si el repositorio no es el de usuario (`<usuario>.github.io`).
