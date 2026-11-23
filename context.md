# Contexto del proyecto

## 1. Usuario y objetivo

El usuario es un viajero que busca alojamiento vacacional, sobre todo desde el móvil. En la Home descubre estancias con la búsqueda y los filtros; en el Catálogo compara precios y ubicaciones en el mapa; en el Detalle revisa fotos, servicios y el coste para sus fechas y su grupo antes de decidir dónde alojarse.

## 2. Las tres páginas

### Home — `/`

La barra superior reúne el logo, el campo de búsqueda y los accesos del menú de usuario. Debajo aparecen los filtros horizontales por categoría y una cuadrícula de tarjetas con foto, título, precio por noche y valoración. La cuadrícula pasa de una columna en móvil a varias en escritorio. Cada tarjeta lleva al detalle.

**Estado local:** texto de búsqueda, categoría activa, lista de tarjetas visibles e indicador de carga. Al montar la vista, la lista parte vacía y un `useEffect` simula la carga durante aproximadamente un segundo. Después, los resultados se actualizan con cada pulsación y cada cambio de categoría, sin perder la lista original.

### Catálogo — `/catalog`

La cabecera indica cuántos alojamientos se encontraron y permite ordenar por precio ascendente o descendente. La lista reutiliza las tarjetas de la Home. El área de mapa va debajo de la lista en móvil y permanece visible a su derecha en escritorio; parte de un placeholder y, en el reto de Leaflet, muestra un pin por alojamiento según sus coordenadas.

**Estado local:** sentido del orden por precio. Al cambiarlo se reordena la lista visible sin modificar los datos de origen.

### Detalle — `/rooms/[id]`

La ficha muestra una galería con botones «Anterior» y «Siguiente»; una cabecera con título, valoración, número de reseñas y ubicación; una fila con el avatar, el nombre y los años de experiencia del anfitrión; una cuadrícula de servicios; y una tarjeta de reserva. El viajero ajusta los huéspedes dentro del rango admitido, elige entrada y salida y ve el total calculado como noches × precio por noche. La tarjeta incluye el botón «Reservar» y la vista ofrece un enlace para volver al Catálogo.

**Estado local:** alojamiento e indicador de carga, índice de la foto, número de huéspedes y rango de fechas. Un `useEffect` simula la carga con `setTimeout` usando el `id` de la ruta. El total se calcula a partir de las fechas, sin duplicarlo en el estado.

## 3. Componentes principales por vista

Inventario inicial basado en los requisitos. Las especificaciones de [Home](#home) y [Catálogo](#catálogo--especificación-de-visión) lo contrastan con las capturas de Airbnb; Detalle queda pendiente de revisión visual.

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

### Catálogo — especificación de visión

**Capturas de referencia:** [catalog-1.jpg](./docs/screenshots/catalog-1.jpg) y [catalog-2.jpg](./docs/screenshots/catalog-2.jpg). Son dos tramos consecutivos de la misma página móvil (~606 px), no dos vistas distintas ni evidencia a 375 px.

<details>
<summary>Prompt literal de visión — Catálogo</summary>

```text
Nota: package-lock.json y la carpeta data/ están excluidos por política de la organización. No intentes acceder a ellos.

Estas dos capturas adjuntas (docs/screenshots/catalog-1.jpg y catalog-2.jpg) son tramos consecutivos de la página de resultados de búsqueda de Airbnb en vista móvil (ancho ~606px). Actúa como arquitecto frontend. NO escribas código de la app todavía. Genera una ESPECIFICACIÓN DE COMPONENTES para React/Next.js + Tailwind, en español, con este formato por cada componente que veas (de arriba abajo):

| Componente (PascalCase) | Responsabilidad única | Props (TypeScript) | Estado/efectos (useState/useEffect) | Relación de layout (padre, hijos, orden, flex/grid, scroll) |

Identifica como mínimo: la cabecera/barra de búsqueda superior, el bloque del mapa con pines de precio, el contador "Más de 1.000 alojamientos", el control de orden (en Airbnb no se ve: propón uno de precio ascendente/descendente según el enunciado), la lista de tarjetas en 2 columnas (indica cuáles se REUTILIZAN de la Home: ListingCard, StarRating, PlaceholderPhoto, Navbar), el botón flotante "Mapa" y la barra inferior fija. Indica cómo se dispone el mapa en móvil (arriba/debajo de la lista) y cómo debe cambiar a ≥768px (lista a la izquierda, mapa sticky a la derecha). Incluye el árbol de layout, espaciados y colores aproximados.

Nota para adaptar a la tarea: el enunciado pide cabecera de resultados (número de resultados + orden por precio con useState que reordena), reutilizar la tarjeta de la Home y un área de mapa (placeholder gris con el texto "Mapa" y, como reto, mapa real con react-leaflet y pines con coordenadas). Propón cómo mapear lo que ves a ese requisito.

Después: (1) pega esta especificación COMPLETA en `context.md` sección 6 → "Catálogo", precedida del prompt literal y los nombres de las capturas; (2) marca 2.1, 2.2 y 2.3 (parte Catálogo) en docs/REQUIREMENTS_LOG.md. No toques /app ni /components.

Commit: "docs: spec visión Catálogo" y push (verifica con `git status -sb`). Si el push falla, NO insistas: dime el error exacto y los comandos git que debo ejecutar yo.
```

</details>

#### Lectura de las capturas

- **Primer tramo:** barra blanca con flecha de vuelta, pastilla «Alojamientos cerca de Alicante», subtítulo «Cualquier fecha · Añade viajeros» e icono de filtros. Debajo aparece el mapa con un marcador de destino («Alicante, España») y pines de precio. Lo solapa el borde redondeado de la hoja blanca de resultados, con un tirador gris, el contador «Más de 1.000 alojamientos» y la ayuda «Cómo ordenamos los resultados». La ayuda no es un selector de orden.
- **Segundo tramo:** se mantiene la cabecera mientras se desplazan las tarjetas en dos columnas. Las tarjetas muestran foto con distintivo «Superanfitrión», corazón, indicadores de galería en algunas fotos, título, estrella y número de reseñas, metadatos, fechas y precio total (a veces con un importe tachado). Aparece la pastilla flotante «Mapa». En ambos tramos, «Explorar» está activo en la navegación inferior junto a «Favoritos» e «Iniciar sesión».

#### Componentes (de arriba abajo en la referencia)

Contratos propuestos, no código de aplicación. `Listing` y `Category` se toman de `types/listing.ts`; `PriceOrder` es la unión literal `'asc'` o `'desc'`.

| Componente (PascalCase) | Responsabilidad única | Props (TypeScript) | Estado/efectos (useState/useEffect) | Relación de layout (padre, hijos, orden, flex/grid, scroll) |
| --- | --- | --- | --- | --- |
| CatalogContent | Coordinar los resultados visibles del Catálogo. | `{ listings: readonly Listing[] }` | `useState` para `priceOrder`, inicial `'asc'`. Recuento y lista ordenada derivados en render; ningún `useEffect` para ordenar. | Raíz de la vista `/catalog`: `Navbar`, `main` y controles móviles fijos. |
| Navbar | Mantener accesible la cabecera de búsqueda. **Reutilizar de Home**. | Contrato de Home: `{ query: string; onQueryChange: (value: string) => void; categories: readonly Category[]; activeCategoryId: string; onCategoryChange: (id: string) => void }`. Propuesta: variante `mode?: 'home' \| 'catalog'` que omita categorías en Catálogo. | Controlada por el padre; sin hooks propios. | Blanca, `sticky top-0`, por encima de mapa y lista. Fila flex: volver/marca, buscador flexible, acceso de usuario. El icono de filtros es referencia visual, no un flujo obligatorio. |
| SearchBar | Recoger la consulta de alojamiento o destino. **Reutilizar de Home**. | `{ value: string; onChange: (value: string) => void }` | Campo controlado. Si se habilita edición en Catálogo, `CatalogContent` guarda `query` y filtra por título o ubicación antes de contar y ordenar. | Dentro de `Navbar`, pastilla central. Mantiene la prioridad visual del destino; fechas y viajeros no son filtros de esta fase. |
| ListingMap | Mostrar el área geográfica de los resultados. | `{ listings: readonly Listing[]; mode?: 'placeholder' \| 'interactive' }` | Sin hooks para el placeholder. El reto monta Leaflet solo en cliente; el orden por precio no reinicia el encuadre. | En Airbnb, bajo la cabecera y encima de la hoja. En el clon va después de la lista en móvil y en la columna derecha `sticky` desde `md:`. |
| PricePin | Identificar un alojamiento por posición y precio. Solo reto. | `{ listing: Pick<Listing, 'id' \| 'title' \| 'pricePerNight' \| 'coordinates'> }` | Sin hooks propios. | Hijo de `ListingMap`, situado por latitud y longitud; pastilla blanca con precio en euros por noche y nombre accesible que identifica el alojamiento. |
| ResultsHeader | Presentar el total y agrupar el control de orden. | `{ count: number; order: PriceOrder; onOrderChange: (value: PriceOrder) => void }` | Presentacional; el total no vive en estado duplicado. | Antes de `ListingGrid`. Centrado y apilado en móvil; flex con el total a la izquierda y el orden a la derecha cuando haya espacio desde `md:`. |
| PriceSort | Permitir escoger el sentido del orden por precio. Propuesta, no se ve en Airbnb. | `{ value: PriceOrder; onChange: (value: PriceOrder) => void }` | `select` nativo controlado; sin efectos. | Hijo de `ResultsHeader`, debajo del contador en móvil. Etiqueta visible «Ordenar por precio» y opciones «Menor a mayor» / «Mayor a menor». |
| ListingGrid | Distribuir los resultados en dos columnas. | `{ listings: readonly Listing[]; layout?: 'home' \| 'catalog' }`; por defecto conserva la cuadrícula de Home. | Ninguno; recibe la lista ya ordenada. | Lista semántica, `grid-cols-2` en Catálogo, sin scroll horizontal. Un `ListingCard` por elemento, clave `listing.id`. Si no hay resultados, mensaje en lugar de tarjetas. |
| ListingCard | Resumir un alojamiento y enlazar a su ficha. **Reutilizar de Home sin duplicarlo**. | `{ listing: Listing }` | Sin hooks; el corazón actual es decorativo. | Hijo de `ListingGrid`: portada 4:3 con `PlaceholderPhoto` y sobreimpresiones, luego título, ubicación, precio por noche y `StarRating`. Dejar que la fila de precio y valoración se adapte a columnas estrechas. |
| PlaceholderPhoto | Ilustrar el tipo de alojamiento sin fotos externas. **Reutilizar de Home**. | `{ gradient: string; variant?: Listing['propertyType']; className?: string }` | Ninguno. | Primera pieza de `ListingCard`: gradiente redondeado con SVG decorativo centrado. Sustituye la foto; no replica los indicadores de carrusel. |
| StarRating | Mostrar la valoración numérica y su estrella. **Reutilizar de Home**. | `{ rating: number }` | Ninguno. | Junto al precio en la tarjeta compartida; no añade por defecto el número de reseñas visto en Airbnb. |
| FloatingMapButton | Ofrecer un acceso directo al mapa en móvil. | `{ mapId: string }` | Sin hooks: enlace al ancla del mapa en la misma página. | Fijo y centrado, por encima de `BottomNav`; `md:hidden`. Pastilla oscura con texto blanco e icono decorativo. Al saltar al mapa, compensar la cabecera sticky para que no lo tape. |
| BottomNav | Mantener visibles los accesos principales en móvil. **Reutilizar de Home**. | Sin props actualmente; propuesta de `exploreHref?: string` para que «Explorar» conserve el contexto de Catálogo. | Ninguno. | Fija al pie, blanca, tres columnas iguales en orden: Explorar, Favoritos, Iniciar sesión. Oculta desde `md:`. Los accesos no implementados siguen marcados como no disponibles. |

#### Árbol de layout del clon

```text
CatalogContent
├─ Navbar (sticky arriba)
│  └─ Fila: volver/marca → SearchBar → acceso de usuario
├─ main (scroll vertical de página; grid 1 → 2 columnas desde md)
│  ├─ Sección de resultados (izquierda en md)
│  │  ├─ ResultsHeader → contador → PriceSort
│  │  └─ ListingGrid (2 columnas)
│  │     └─ ListingCard × N → PlaceholderPhoto + texto + StarRating
│  └─ ListingMap #mapa (debajo en móvil; derecha sticky desde md)
│     └─ «Mapa» (placeholder) o PricePin × N (reto)
├─ FloatingMapButton (móvil; salta a #mapa)
└─ BottomNav (fija en móvil)
```

**Móvil (<768 px):** Airbnb muestra el mapa **arriba** al entrar; el clon lo sitúa **debajo** de toda la lista, conforme al 4.3. Se usa un solo scroll vertical de página, sin panel arrastrable ni scroll anidado. Las tarjetas mantienen dos columnas: a 375 px, con 16 px de margen por lado y 12 px de separación, quedan unos 165 px por tarjeta; permitir el ajuste de texto y evitar desbordamientos. Reservar espacio al pie para la barra fija, el botón flotante y el área segura.

**Desde `md:` (≥768 px):** lista a la izquierda y mapa a la derecha (`md:grid`, columnas flexibles, reparto aproximado 55/45 y hueco de 24 px). Mapa con `sticky`, alineado al inicio de su columna y con el desplazamiento superior igual a la altura de la `Navbar` más 16 px; su altura máxima respeta el espacio visible (`dvh`). No poner `overflow` en los antecesores del mapa: debe seguir el scroll de la página. Ocultar la barra inferior y el botón «Mapa», y quitar el espacio reservado en móvil.

#### Espaciados y colores aproximados

- **Cabecera:** blanco `#fff`, borde gris `#e5e5e5` y sombra ligera. En la captura ocupa unos 82 px de alto; la pastilla mide unos 56 px de alto. En el clon: margen lateral de 16 px en móvil y 24–32 px desde `md:`, separación de 8–12 px y controles de al menos 44 px de alto.
- **Mapa:** en la captura ocupa unos 250 px antes de la hoja, con tierra marfil `#f3f1eb`, mar azul claro `#c8e5ee` y pines blancos de borde o sombra suave. Base del clon: bloque gris claro `#e5e5e5`, texto «Mapa» centrado en gris oscuro, 240–280 px de alto en móvil y radios de 16–20 px.
- **Resultados:** la hoja de la captura tiene esquinas superiores de unos 24 px y tirador gris; el clon conserva fondo blanco y separación de 12–16 px entre piezas, sin simular un panel arrastrable. Texto principal `#222`, secundario `#6b6b6b`; en la referencia las tarjetas tienen márgenes laterales cercanos a 24 px y separación de 24 px. En el clon reducir el hueco a 12 px en móvil, y ampliar a 16–24 px desde `md:`. Mantener radios de 16 px en portada y sombra discreta o ninguna en la tarjeta.
- **Controles fijos:** barra blanca de unos 64 px más área segura, borde superior fino y rosa `#e61e4d` para Explorar activo. Botón «Mapa» tipo pastilla, fondo `#222`, contenido blanco, centrado y separado unos 24 px de la barra.

#### Correspondencia con el enunciado

- **4.1 — Recuento y orden:** mostrar el total visible real, con singular/plural en español. «Más de 1.000 alojamientos» es una referencia visual, no un valor fijo. `CatalogContent` usa `useState` para alternar entre ascendente y descendente; compara `pricePerNight` numéricamente sobre una copia de los resultados y conserva el orden original entre empates. Cambiar el orden no cambia el total ni los pines. Si no hay resultados, mostrar «0 alojamientos», un mensaje vacío y deshabilitar el selector.
- **4.2 — Reutilización:** `Navbar` comparte estructura con Home; `ListingCard` se reutiliza directamente con `PlaceholderPhoto` y `StarRating`. Mantener precio por noche, no total ni descuentos. La etiqueta «Superanfitrión», las fechas, los indicadores de carrusel y los favoritos interactivos no forman parte del contrato de la tarjeta.
- **4.3 — Base:** `ListingMap` renderiza un placeholder gris con «Mapa» debajo de la lista en móvil y a la derecha en escritorio. El enlace flotante lleva a la misma área en las dos modalidades de mapa.
- **4.4 — Reto:** sustituir el contenido del placeholder por `react-leaflet`/Leaflet, con un pin por resultado visible en `coordinates.lat` y `coordinates.lng`. Usar un encuadre inicial que abarque los pines y mantener la lista como alternativa navegable. Si no hay resultados, mostrar el mapa sin pines; un fallo del proveedor de teselas no debe ocultar las tarjetas.

### Detalle — pendiente (se rellenará con los prompts de visión)
