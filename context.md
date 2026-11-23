# Contexto del proyecto

## 1. Usuario y objetivo

El usuario es un viajero que busca alojamiento vacacional, sobre todo desde el móvil. En la Home descubre estancias con la búsqueda y los filtros; en el Catálogo compara precios y ubicaciones en el mapa; en el Detalle revisa fotos, servicios y el coste para sus fechas y su grupo antes de decidir dónde alojarse.

## 2. Las tres páginas

### Home — `/`

La barra superior reúne el logo, el campo de búsqueda y los accesos del menú de usuario. Debajo aparecen los filtros horizontales por categoría y una cuadrícula de tarjetas con foto, título, precio por noche y valoración. La cuadrícula pasa de una columna en móvil a varias en escritorio. Cada tarjeta lleva al detalle.

**Estado local:** texto de búsqueda, categoría activa, lista de tarjetas visibles e indicador de carga. Al montar la vista, la lista parte vacía y un `useEffect` simula la carga durante aproximadamente un segundo. Después, los resultados se actualizan con cada pulsación y cada cambio de categoría, sin perder la lista original.

### Catálogo — `/catalog`

La cabecera indica cuántos alojamientos se encontraron y permite ordenar por precio ascendente o descendente. La lista reutiliza las tarjetas de la Home. El mapa interactivo de Leaflet muestra un pin por alojamiento según sus coordenadas; va debajo de la lista en móvil y a su derecha en escritorio.

**Estado local:** sentido del orden por precio. Al cambiarlo se reordena la lista visible sin modificar los datos de origen.

### Detalle — `/rooms/[id]`

La ficha muestra una galería con botones «Anterior» y «Siguiente»; una cabecera con título, valoración, número de reseñas y ubicación; una fila con el avatar, el nombre y los años de experiencia del anfitrión; una cuadrícula de servicios; y una tarjeta de reserva. El viajero ajusta los huéspedes dentro del rango admitido, elige entrada y salida y ve el total calculado como noches × precio por noche. La tarjeta incluye el botón «Reservar» y la vista ofrece un enlace para volver al Catálogo.

**Estado local:** alojamiento e indicador de carga, índice de la foto, número de huéspedes y rango de fechas. Un `useEffect` simula la carga con `setTimeout` usando el `id` de la ruta. El total se calcula a partir de las fechas, sin duplicarlo en el estado.

## 3. Componentes principales por vista

Inventario inicial basado en los requisitos. La [especificación de Home](#home) lo contrasta con las capturas de Airbnb; Catálogo y Detalle quedan pendientes de revisión visual.

### Home

- `Navbar` (compartida con Catálogo): agrupa la marca, la búsqueda y los accesos del menú de usuario.
- `SearchBar`: recoge el texto que filtra los alojamientos en tiempo real.
- `CategoryTabs`: muestra categorías con icono y etiqueta y resalta la selección activa.
- `ListingGrid`: organiza las tarjetas en una o varias columnas según el ancho.
- `ListingCard` (compartida con Catálogo): resume un alojamiento y enlaza a su detalle.
- `StarRating` (compartida con Catálogo y Detalle): muestra la puntuación con una estrella y su valor numérico.

### Catálogo

- `Navbar` (compartida con Home): mantiene accesibles la marca y la navegación principal.
- `ResultsHeader`: muestra el recuento y el control de orden por precio.
- `ListingCard` (compartida con Home): conserva el mismo formato para comparar alojamientos.
- `ListingMap`: ubica los alojamientos en un mapa interactivo con pines.

### Detalle

- `PhotoGallery`: muestra la foto activa y permite pasar a la anterior o a la siguiente.
- `RoomHeader`: agrupa título, ubicación y número de reseñas junto a `StarRating`.
- `StarRating` (compartida con Home y Catálogo): presenta la puntuación con el mismo formato que las tarjetas.
- `HostProfile`: muestra el avatar, el nombre y los años de experiencia del anfitrión.
- `AmenitiesGrid`: presenta cada servicio con su icono y etiqueta.
- `BookingCard`: reúne el precio por noche, los controles de reserva, el total y el botón «Reservar».
- `GuestCounter`: ajusta la cantidad de huéspedes sin salir del rango permitido.
- `StayDatePicker`: permite seleccionar la entrada y la salida como un rango de fechas.
- `BackToCatalogLink`: devuelve al viajero al Catálogo.

## 4. Modelo de datos (resumen)

- `Listing`: identificador, título, ubicación, identificador de categoría, foto de portada, precio por noche, valoración y coordenadas (latitud y longitud).
- `Room extends Listing`: añade galería de fotos, número de reseñas, anfitrión, servicios y límites de huéspedes.
- `Host`: nombre, avatar y años como anfitrión.
- `Category`: identificador, etiqueta en español e identificador de icono.

## 5. Decisiones de diseño

- Next.js 16 con App Router y TypeScript estricto: rutas en `/app`, componentes en `/components` e interfaces en `/types`.
- Diseñar primero para 375 px; usar `md:` (desde 768 px) solo para adaptar la distribución a escritorio.
- Estilos con clases de utilidad de Tailwind y componentes propios, sin estilos en línea ni librerías de componentes. Textos de interfaz en español.
- Usar `Link` de `next/link` para toda la navegación interna.
- Servir los alojamientos y las fichas desde datos mock en `/mocks`, sin depender de un backend.
- Implementar ambos retos: `react-leaflet` y `leaflet` para el mapa, y `react-day-picker` para las fechas. Son las únicas excepciones al uso de componentes propios.

## 6. Especificaciones derivadas de visión

### Home

**Capturas de referencia:** [home-1.jpg](./docs/screenshots/home-1.jpg), [home-2.jpg](./docs/screenshots/home-2.jpg) y [home-3.jpg](./docs/screenshots/home-3.jpg). Son tres tramos consecutivos de la misma página móvil (~606 px), no tres páginas ni una prueba a 375 px.

<details>
<summary>Prompt literal de visión — Home</summary>

```text
Nota: package-lock.json y la carpeta data/ están excluidos por política de la organización. No intentes acceder a ellos.

Estas tres capturas adjuntas (docs/screenshots/home-1.jpg, home-2.jpg y home-3.jpg) son tramos consecutivos de scroll de la página de inicio de Airbnb en vista móvil (ancho ~606px, diseño móvil de Airbnb). Actúa como arquitecto frontend. NO escribas código de la app todavía. Genera una ESPECIFICACIÓN DE COMPONENTES para React/Next.js + Tailwind, en español, con este formato por cada componente que veas (de arriba abajo):

| Componente (PascalCase) | Responsabilidad única | Props (TypeScript) | Estado/efectos (useState/useEffect) | Relación de layout (padre, hijos, orden, flex/grid, scroll) |

Debes identificar como mínimo: la barra superior fija (buscador "Empieza a buscar"), la fila horizontal de categorías (icono+etiqueta, activa resaltada), la tarjeta de alojamiento (foto, título, precio/noche, valoración con estrellas, corazón de favoritos, etiqueta "Recomendación del viajero"), las secciones con título y flecha que contienen carruseles horizontales de tarjetas, el indicador de carga y la barra de navegación inferior fija (Explorar, Favoritos, Iniciar sesión). Indica también: árbol de layout de la página, espaciados y colores aproximados (paleta, radios, sombras) y qué cambia a ≥768px (md:).

Nota para adaptar a la tarea: el enunciado pide navbar superior con logo, campo de búsqueda e iconos de usuario; propón cómo mapear lo que ves a ese requisito, y la cuadrícula de tarjetas en 1 columna en móvil y varias en escritorio (en vez de carruseles).

Después: (1) pega esta especificación COMPLETA en `context.md` sección 6 → "Home", precedida del prompt literal que se usó y los nombres de las capturas; (2) marca 2.1, 2.2 y 2.3 (parte Home) en docs/REQUIREMENTS_LOG.md. No toques /app ni /components.

Commit: "docs: spec visión Home" y push (verifica con `git status -sb`). Si el push falla, NO insistas: dime el error exacto y los comandos git que debo ejecutar yo.
```

</details>

#### Lectura de las capturas

- **Home 1:** cabecera con buscador y cuatro pastillas de categorías (Todo, Alojamientos, Experiencias, Servicios); debajo, un carrusel de experiencias con fotos y etiquetas y el comienzo del carrusel de Alicante.
- **Home 2:** la cabecera y la barra inferior permanecen visibles mientras se desplazan las tarjetas de Alicante y aparece la sección de Granada. Bajo cada foto se ven título, fechas, tipo de anfitrión, precio **total** y puntuación precedida por una estrella.
- **Home 3:** se mantiene el mismo patrón: final de otra tanda de alojamientos y comienzo de Oporto. Hay corazones sobre las fotos y algunas muestran «Recomendación del viajero». No se ve un indicador de carga: se especifica como requisito del bootcamp.

#### Componentes (de arriba abajo)

Los tipos `Category` y `Listing` son los del proyecto. Las props que solo sirven para describir la referencia visual no implican cambios en el modelo mock.

| Componente (PascalCase) | Responsabilidad única | Props (TypeScript) | Estado/efectos (useState/useEffect) | Relación de layout (padre, hijos, orden, flex/grid, scroll) |
| --- | --- | --- | --- | --- |
| `HomePage` | Coordinar la carga y el filtrado de alojamientos. | Sin props. | `useState`: `query: string`, `activeCategoryId: string` (inicial `all`), `visibleListings: Listing[]` (inicial `[]`) y `isLoading: boolean` (inicial `true`). `useEffect` carga los mocks tras ~1 s y limpia el temporizador al desmontar. Los controles actualizan la lista con el texto y la categoría vigentes, sin mutar los mocks. | Raíz: cabecera, `main` con resultados y barra inferior. Solo el contenido central se desplaza verticalmente bajo las barras. |
| `Navbar` | Agrupar los controles superiores y mantenerlos visibles durante el scroll. | `query: string; onQueryChange: (value: string) => void; categories: readonly Category[]; activeCategoryId: string; onCategoryChange: (id: string) => void` | Sin estado propio. | `sticky top-0` sobre `main`. Primera fila: marca, `SearchBar`, `UserMenuButton`; segunda fila: `CategoryTabs`. Fondo blanco y capa por encima de las tarjetas. |
| `SearchBar` | Recoger el texto de búsqueda. | `value: string; onChange: (value: string) => void; placeholder: string` | Controlado por `HomePage`; notifica cada pulsación sin esperar al envío. | Dentro de la primera fila de `Navbar`, crece en el espacio disponible. Icono de lupa y campo con etiqueta accesible; placeholder «Empieza a buscar». |
| `UserMenuButton` | Mostrar el acceso de usuario requerido por el enunciado. | `onOpen: () => void; expanded: boolean` | Sin estado propio; el contenedor controla la apertura si se habilita un menú. | Extremo derecho de la primera fila. Icono con nombre accesible; no se observa en la barra superior de las capturas. |
| `CategoryTabs` | Mostrar el filtro activo y permitir cambiarlo. | `categories: readonly Category[]; activeId: string; onSelect: (id: string) => void` | Controlado; cada botón usa `aria-pressed`. | Segunda fila de `Navbar`, `flex` sin saltos, botones que no se encogen y scroll horizontal. Cada pastilla tiene icono y etiqueta. |
| `SectionHeader` | Identificar un grupo y ofrecer un acceso para ver más. | `title: string; moreHref?: string; onNext?: () => void` | Sin estado. Solo se usa una acción por sección. | Primera fila de la sección, `flex` con título a la izquierda y flecha a la derecha. En la referencia se ve la flecha, no su resultado; si se usa para ir al catálogo en el clon, será un `Link`. |
| `ExperienceCarousel` | Agrupar las tarjetas temáticas de experiencias vistas en la primera captura. | `title: string; items: readonly ExperienceItem[]` (`ExperienceItem`: `id`, `label`, `imageSrc`, todos `string`). | Sin estado React; scroll horizontal nativo. | Primer bloque observado en `main`: `SectionHeader` y pista `flex`, con la próxima tarjeta asomando por el borde derecho. Solo referencia, fuera del alcance de implementación. |
| `ExperienceCard` | Mostrar la foto y el nombre de una temática. | `label: string; imageSrc: string` | Sin estado. | Hija de `ExperienceCarousel`; foto casi cuadrada y redondeada arriba, etiqueta debajo, tarjetas de ancho fijo. Solo referencia. |
| `ListingCarousel` | Presentar un grupo de alojamientos en una pista horizontal. | `title: string; listings: readonly Listing[]; onNext?: () => void` | Posición de scroll nativa; no hace falta replicarla con `useState`. | Bajo experiencias aparecen Alicante, Granada y Oporto, entre otras secciones. Cada grupo tiene `SectionHeader` y una pista `flex` con tarjetas sin encogerse. El clon sustituye la pista por `ListingGrid`. |
| `LoadingIndicator` | Anunciar la carga inicial simulada de resultados. | `message: string` | Sin estado propio. Se monta si `isLoading` es `true`. | Dentro de los resultados, tras el encabezado y antes de cualquier tarjeta; indicador centrado y texto «Cargando alojamientos…» con `role="status"`. |
| `ListingGrid` | Distribuir los alojamientos visibles sin carrusel. | `listings: readonly Listing[]; favoriteIds: ReadonlySet<string>; onToggleFavorite: (id: string) => void` | Sin estado propio; recibe las tarjetas filtradas. Con cero coincidencias, muestra «No hay alojamientos que coincidan con tu búsqueda». | Hija de `main` tras `SectionHeader`. Una columna en 375 px y hasta `md`; desde `md`, cuadrícula de varias columnas. Sin scroll horizontal. |
| `ListingCard` | Resumir un alojamiento y llevar a su ficha. | `listing: Listing; isFavorite: boolean; onToggleFavorite: (id: string) => void; isGuestFavorite?: boolean` | Sin estado propio; favorito controlado. | En la pista de referencia o en `ListingGrid`. Bloque de foto arriba; título y luego fila de precio/noche y `StarRating`. Usa `Link` a `/rooms/[id]`. El botón de favorito es hermano del enlace, nunca un botón dentro de él. |
| `ListingPhoto` | Mostrar la portada del alojamiento con sus elementos superpuestos. | `imageColor: string; children?: React.ReactNode` | Sin estado. | Contenedor relativo y recortado, casi cuadrado en la referencia. En el clon se utiliza el gradiente literal de `listing.imageColor` como decoración, sin imágenes externas. |
| `GuestFavoriteBadge` | Identificar un alojamiento recomendado. | `label: string` | Sin estado. Solo se renderiza si hay dato explícito de recomendación. | Pastilla clara en la esquina superior izquierda de `ListingPhoto`. No inferir la recomendación a partir de la nota ni exigir un campo nuevo en `Listing`. |
| `FavoriteButton` | Alternar la selección de un alojamiento como favorito. | `pressed: boolean; onToggle: () => void` | Controlado; si se incluye esta interacción visual, `useState<Set<string>>` en `HomePage`, sin cuenta ni persistencia. | Esquina superior derecha de la foto, superpuesto sin formar parte del `Link`. Corazón de contorno o relleno; área táctil de al menos 44 × 44 px y `aria-pressed`. |
| `StarRating` | Mostrar una puntuación numérica acompañada por una estrella. | `rating: number` | Sin estado. | En línea junto al precio, como en la captura; estrella decorativa y texto accesible como «4,93 de 5». Compartido con Catálogo y Detalle. |
| `BottomNav` | Reunir los accesos móviles persistentes. | `items: readonly BottomNavItem[]; activeId: string` (`BottomNavItem`: `id`, `label`, `icon` y `href?`, todos `string`). | Sin estado propio; el acceso activo se recibe desde el contenedor. | `fixed bottom-0`, por encima de `main`, tres columnas con icono arriba y texto debajo: Explorar, Favoritos e Iniciar sesión. Solo enlazar destinos implementados; no inventar rutas de cuentas o favoritos. |

#### Árbol de layout

```text
HomePage
├─ Navbar (arriba, sticky)
│  ├─ Fila principal: marca → SearchBar → UserMenuButton
│  └─ CategoryTabs (scroll horizontal)
├─ main (scroll vertical)
│  ├─ Referencia: ExperienceCarousel → SectionHeader + ExperienceCard × N
│  ├─ Referencia: ListingCarousel × N → SectionHeader + ListingCard × N
│  └─ Clon: SectionHeader → LoadingIndicator o ListingGrid
│     └─ ListingCard × N → ListingPhoto + GuestFavoriteBadge opcional
│                        + FavoriteButton + título + precio/noche + StarRating
└─ BottomNav (abajo, fija en móvil)
```

El buscador y las categorías se mantienen juntos arriba, como en los tres tramos. En el clon, la marca enlaza a `/`, la lupa se integra en el campo editable y el perfil se sitúa a la derecha. El `main` reserva espacio al pie para que la navegación fija no tape la última tarjeta, incluido el margen de seguridad del dispositivo.

#### Tokens visuales y adaptación responsive

- **Color:** fondo blanco `#fff`, texto `#222`, metadatos `#6b6b6b`, borde `#e5e5e5`, superficie suave `#f5f5f5` y acento rosa aproximado `#e61e4d` para el acceso activo y el corazón seleccionado. La categoría activa también se distingue por fondo/borde y `aria-pressed`, no solo por color.
- **Espaciado:** las capturas muestran unos 24 px de margen lateral, 10–12 px entre tarjetas y 24–32 px entre grupos. En el clon, a 375 px: 16 px a cada lado, 8 px entre pastillas, 16 px entre tarjetas y 24 px entre secciones. Buscador de unos 48–56 px de alto y barra inferior de unos 64 px más área segura.
- **Radios y sombras:** buscador y categorías en forma de pastilla (`rounded-full`), fotos redondeadas (aprox. 16–20 px), flecha en un botón circular gris claro. Sombra baja y borde fino en buscador/pastillas; sin sombra fuerte en las tarjetas. Corazón y distintivo con contraste respecto al gradiente.
- **Desde `md:` (≥768 px):** ampliar el margen lateral a unos 32 px, centrar el contenido con un ancho máximo y dar más espacio a marca, búsqueda y perfil. Las categorías siguen bajo el buscador y solo se desplazan si desbordan. Resultados en dos columnas desde `md:` y tres desde `lg:`, con separación de unos 24 px. Ocultar la barra móvil y retirar su espacio reservado; Explorar queda accesible desde la marca/navegación superior y el acceso de usuario queda arriba.

#### Alcance del bootcamp

- Conservar la jerarquía visual de Airbnb (búsqueda, categorías, contenido y accesos), no sus cuatro etiquetas comerciales: el clon usa las ocho categorías de `/mocks`.
- Usar un único encabezado de resultados con flecha/enlace a `/catalog` y una cuadrícula filtrable en lugar de los carruseles por ciudad. No implementar el carrusel de experiencias.
- Mostrar el precio en euros **por noche**, no el precio total visto en las capturas. No replicar fechas ni el texto «Anfitrión particular» en cada tarjeta: no son datos de `Listing`.
- El indicador aparece durante la carga inicial; el filtrado posterior combina texto (título o ubicación) y categoría a cada cambio. Si el usuario escribe mientras carga, aplicar esos filtros al recibir los datos para evitar que aparezca brevemente la lista sin filtrar.
- Los favoritos locales y el distintivo son detalles visuales, no un flujo de cuenta o autenticación. No añadir rutas fuera de las tres aprobadas ni dar por implementado un acceso solo porque aparece en la referencia.

### Catálogo — pendiente (se rellenará con los prompts de visión)

### Detalle — pendiente (se rellenará con los prompts de visión)
