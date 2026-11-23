# Registro de requisitos

## SECCIÓN A — QUÉ DEBES HACER (7 tareas)

### 0 — Antes de escribir código

 - [x] 0.1 Crear `context.md` en la raíz del proyecto
   - Evidencia: [context.md](../context.md), en la raíz.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 0.2 context.md: descripción de las tres páginas y qué muestra cada una
   - Evidencia: [context.md](../context.md), sección 2 «Las tres páginas».
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 0.3 context.md: listado de los componentes principales de cada vista (Airbnb.com como referencia)
   - Evidencia: [context.md](../context.md), sección 3 «Componentes principales por vista». El inventario se contrastó con las capturas de Airbnb: primero con las referencias a ~606 px en las especificaciones de visión de la sección 6 ([Home](../context.md#home), [Catálogo](../context.md#catálogo--especificación-de-visión) y [Detalle](../context.md#detalle--especificación-de-visión)) y después con capturas reales a 375 px en [context.md → Contraste con Airbnb real a 375 px](../context.md#contraste-con-airbnb-real-a-375-px).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 0.4 context.md: párrafo corto que describa al usuario y qué intenta conseguir en la plataforma
   - Evidencia: [context.md](../context.md), sección 1 «Usuario y objetivo».
   - Estado/fecha: Completado — 2026-11-23.

### 1 — Configuración del proyecto

 - [x] 1.1 Configurar Next.js 16 con TypeScript, Tailwind CSS y App Router usando create-next-app
   - Evidencia: [package.json](../package.json), [tsconfig.json](../tsconfig.json) y [app/layout.tsx](../app/layout.tsx). Scaffold de `create-next-app@16`.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 1.2 Revisar los comandos generados antes de ejecutarlos y confirmar que el servidor de desarrollo arranca
   - Evidencia: comandos y flags explicados antes de ejecutarlos; `npm run dev` ([package.json](../package.json)) sirvió [app/page.tsx](../app/page.tsx) en `http://localhost:3000/` con HTTP 200. Se detuvo el servidor tras la prueba.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 1.3 Carpetas: /app (rutas), /components (UI reutilizable), /types (interfaces TS)
   - Evidencia: [app/](../app/), [components/.gitkeep](../components/.gitkeep) y [types/.gitkeep](../types/.gitkeep). Los datos ficticios viven en [mocks/](../mocks/), sin marcador adicional (ERR-005).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 1.4 Tailwind CSS para todos los estilos
   - Evidencia: [app/globals.css](../app/globals.css) importa Tailwind; [app/layout.tsx](../app/layout.tsx) y [app/page.tsx](../app/page.tsx) usan utilidades. Se comprobó que el servidor entrega el CSS compilado.
   - Estado/fecha: Completado — 2026-11-23.

### 2 — Flujo de trabajo con prompts de visión

 - [x] 2.1 Captura de cada una de las 3 páginas de Airbnb en viewport móvil 375px
   - Evidencia: capturas reales de airbnb.es a 375 × 812 CSS px (Playwright/Chromium, perfil iPhone X con UA móvil, `innerWidth = 375`, sin scroll horizontal):
     - Home: [airbnb-home-375.png](./screenshots/airbnb-home-375.png), [airbnb-home-375-2.png](./screenshots/airbnb-home-375-2.png) y [airbnb-home-375-3.png](./screenshots/airbnb-home-375-3.png).
     - Catálogo (`/s/Alicante--España/homes`): [airbnb-catalog-375.png](./screenshots/airbnb-catalog-375.png), [airbnb-catalog-375-2.png](./screenshots/airbnb-catalog-375-2.png) y [airbnb-catalog-375-3.png](./screenshots/airbnb-catalog-375-3.png).
     - Detalle (clic en la primera tarjeta): [airbnb-room-375.png](./screenshots/airbnb-room-375.png), [airbnb-room-375-2.png](./screenshots/airbnb-room-375-2.png), [airbnb-room-375-3.png](./screenshots/airbnb-room-375-3.png) y [airbnb-room-375-4.png](./screenshots/airbnb-room-375-4.png).
     - Diferencias con las especificaciones en [context.md → Contraste con Airbnb real a 375 px](../context.md#contraste-con-airbnb-real-a-375-px). Las referencias previas a ~606 px (home-1…3, catalog-1…2, room-1…4) se conservan.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 2.2 Adjuntar cada captura al agente y pedir especificación de componentes (nombre, props, relación de layout)
   - Evidencia de Home: capturas y prompt literal en [context.md → Home](../context.md#home).
   - [x] Catálogo — ambas capturas revisadas; referencias y prompt literal en [context.md → Catálogo](../context.md#catálogo--especificación-de-visión).
   - [x] Detalle — [capturas y prompt](../context.md#detalle--especificación-de-visión) analizados con Claude porque el chat de Copilot de este Codespace no permite adjuntar imágenes.
   - Estado/fecha: Completado — 2026-11-23.
   - [x] Home: prompt de visión y capturas revisados.
 - [x] 2.3 Documentar cada especificación como comentario en el código o en context.md ANTES de implementar esa vista
   - Evidencia de Home: especificación completa en [context.md → Home](../context.md#home).
   - [x] Catálogo — especificación completa previa a la implementación en [context.md → Catálogo](../context.md#catálogo--especificación-de-visión).
   - [x] Detalle — [especificación de Claude](../context.md#detalle--especificación-de-visión) documentada antes de implementar la ficha completa; ya existía una galería provisional.
   - Estado/fecha: Completado — 2026-11-23.
   - [x] Home: componentes, props, estado, layout y adaptación responsive documentados.
 - [x] 2.4 IMPORTANTE: ninguna librería de componentes preconstruida (ni shadcn, MUI, Ant Design, Chakra)
   - Evidencia: `grep -rnE "shadcn|@mui|antd|chakra" package.json app components` → vacío. [package.json](../package.json) solo tiene `next`, `react`, `react-dom`, `leaflet`/`react-leaflet` (reto 4.4), `react-day-picker` (reto 5.7) y `date-fns`, utilidad de fechas que no aporta componentes.
   - Estado/fecha: Completado — 2026-11-23.

### 3 — Página de inicio (/)

 - [x] 3.1 Barra de navegación superior: logo, campo de búsqueda, iconos del menú de usuario
   - Evidencia: [Navbar.tsx](../components/Navbar.tsx) incorpora una marca propia, el buscador y los iconos del menú.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.2 Búsqueda con useState: guarda el texto y filtra tarjetas en tiempo real (la lista de tarjetas es estado local, se actualiza en cada pulsación)
   - Evidencia: [SearchBar.tsx](../components/SearchBar.tsx) actualiza la consulta de [HomeContent.tsx](../components/HomeContent.tsx) en cada pulsación; la vista deriva los resultados del estado local sin duplicarlo. Fase 1 (2026-11-23): Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones; «bilbao» → 1 tarjeta y texto sin coincidencias → mensaje vacío.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.3 Fila horizontal de filtros por categoría bajo la navbar (icono + etiqueta: Playa, Mansiones, Tendencias, etc.), useState para la categoría activa y resaltarla
   - Evidencia: [CategoryBar.tsx](../components/CategoryBar.tsx) permite desplazamiento horizontal y [CategoryItem.tsx](../components/CategoryItem.tsx) destaca la selección controlada por [HomeContent.tsx](../components/HomeContent.tsx). Fase 1 (2026-11-23): Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones; «Playa» → 2 tarjetas con `aria-pressed="true"` y, combinada con «valencia», 1 tarjeta.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.4 Cuadrícula responsive de tarjetas: foto placeholder, título, precio por noche y valoración con estrellas
   - Evidencia: [ListingCard.tsx](../components/ListingCard.tsx) muestra una portada ilustrada 4:3 con [PlaceholderPhoto.tsx](../components/PlaceholderPhoto.tsx), conserva título, ubicación, precio y [StarRating.tsx](../components/StarRating.tsx), y añade un corazón decorativo y la etiqueta de recomendación desde 4,9. Los cinco tipos se asignan en [mocks/listings.ts](../mocks/listings.ts); la [galería de detalle](../app/rooms/%5Bid%5D/page.tsx) reutiliza el icono del alojamiento con cinco gradientes distintos. **Actualización 2026-11-23 (fotos reales):** sigue cumpliéndose; la foto placeholder pasa a ser una foto real con placeholder de respaldo. [ListingPhoto.tsx](../components/ListingPhoto.tsx) muestra `listing.photo` (ruta local de `public/photos/`, licencias en [CREDITS.md](./CREDITS.md)) con `next/image`, y vuelve a [PlaceholderPhoto.tsx](../components/PlaceholderPhoto.tsx) si no hay ruta o la imagen falla. Playwright a 375 y 1280 px: 12/12 fotos cargadas en `/` y `/catalog`, sin respuestas 404, y placeholder visible al forzar un 404. Capturas: [impl-fotos-home-375.png](./screenshots/impl-fotos-home-375.png) e [impl-fotos-catalog-1280.png](./screenshots/impl-fotos-catalog-1280.png).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.5 useEffect para simular carga: lista vacía, loading=true, tras setTimeout (~1s) asignar datos y loading=false; indicador de carga visible
   - Evidencia: [HomeContent.tsx](../components/HomeContent.tsx) programa y limpia el temporizador de 1000 ms; [LoadingSpinner.tsx](../components/LoadingSpinner.tsx) muestra el estado de carga inicial.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.6 Cuadrícula en 1 columna en móvil y varias columnas en escritorio
   - Evidencia: [ListingGrid.tsx](../components/ListingGrid.tsx) declara una columna base, dos en `md:` y cuatro en `lg:`.
   - Estado/fecha: Completado — 2026-11-23.

### 4 — Página de catálogo (/catalog)

 - [x] 4.1 Cabecera de resultados: número de resultados y control de orden (Ascendente/Descendente por precio) con useState que reordena las tarjetas
   - Evidencia: [ResultsHeader.tsx](../components/ResultsHeader.tsx) muestra el recuento y el selector accesible. [CatalogContent.tsx](../components/CatalogContent.tsx) ordena una copia de la lista con `useState`. `/catalog` respondió HTTP 200 en dev; la prueba confirmó el recuento, orden inicial y búsqueda. Fase 1 (2026-11-23): Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones; ascendente 60 → 450 y descendente 450 → 60.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 4.2 Reutilizar el componente de tarjeta de la Home
   - Evidencia: [ListingGrid.tsx](../components/ListingGrid.tsx) comparte [ListingCard.tsx](../components/ListingCard.tsx) entre Home y Catálogo, incluida su portada y valoración.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 4.3 Área de mapa a la derecha de la lista (escritorio) o debajo (móvil); por defecto placeholder gris con texto "Mapa"
   - Evidencia: [CatalogContent.tsx](../components/CatalogContent.tsx) coloca el mapa después de la lista en móvil y a la derecha con `sticky` desde `md:`. La respuesta HTTP en dev incluyó [MapPlaceholder.tsx](../components/MapPlaceholder.tsx) con el texto «Mapa».
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 4.4 RETO OPCIONAL: sustituir placeholder por mapa interactivo real (react-leaflet o Google Maps) con cada alojamiento como pin usando sus coordenadas
   - Evidencia: [MapSection.tsx](../components/MapSection.tsx) carga Leaflet sin SSR. [ListingsMap.tsx](../components/ListingsMap.tsx) muestra pines de precio y teselas de OpenStreetMap con atribución; [FitListingBounds.tsx](../components/FitListingBounds.tsx) encuadra las coordenadas. Chromium verificó 12 pines, un pin al filtrar y la navegación desde el popup sin recargar el documento (teselas simuladas). Fase 1 (2026-11-23): Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones; 12 pines (uno por alojamiento) en `/catalog`. Se corrigió el centrado del precio en el pin (ERR-013). Capturas: [impl-catalog-375.png](./screenshots/impl-catalog-375.png) e [impl-catalog-1280.png](./screenshots/impl-catalog-1280.png). Las teselas OSM se simularon en la prueba.
   - Estado/fecha: Completado — 2026-11-23.

### 5 — Página de detalle (/rooms/[id])

 - [x] 5.1 useEffect para cargar datos de la habitación al montar usando el id de la URL, con setTimeout y estado de carga
   - Evidencia: [RoomDetail.tsx](../components/RoomDetail.tsx) simula una carga de 1000 ms con limpieza del temporizador. `/rooms/1` devolvió HTTP 200 con indicador; `/rooms/999` devolvió HTTP 404 con «Alojamiento no encontrado».
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.2 Galería de fotos arriba: useState con el índice visible y botones Anterior/Siguiente sobre un array de placeholders
   - Evidencia: [PhotoGallery.tsx](../components/PhotoGallery.tsx) reutiliza `PlaceholderPhoto`; Chromium comprobó el salto cíclico entre la primera y la quinta foto. **Actualización 2026-11-23 (fotos reales):** sigue cumpliéndose; el array de placeholders pasa a ser un array de 5 fotos reales con placeholder de respaldo. `Room.photos` contiene 5 rutas locales ([mocks/rooms.ts](../mocks/rooms.ts): portada, otras fotos del mismo tipo e interiores). [PhotoGallery.tsx](../components/PhotoGallery.tsx) conserva `useState` del índice, Anterior/Siguiente y el contador. Playwright: 1/5 → 5/5 con 5 fotos distintas y vuelta a 1/5; «Anterior» desde 1/5 lleva a 5/5. Captura: [impl-fotos-room-375.png](./screenshots/impl-fotos-room-375.png).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.3 Cabecera: título, valoración con estrellas, número de reseñas y ubicación
   - Evidencia: [RoomHeader.tsx](../components/RoomHeader.tsx) reutiliza [StarRating.tsx](../components/StarRating.tsx) y muestra los datos de la ficha.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.4 Fila del anfitrión: avatar placeholder, nombre y años como anfitrión
   - Evidencia: [HostInfo.tsx](../components/HostInfo.tsx) muestra avatar con iniciales, nombre y experiencia.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.5 Sección de servicios (amenities) como cuadrícula de pares icono + etiqueta
   - Evidencia: [AmenitiesGrid.tsx](../components/AmenitiesGrid.tsx) organiza los pares de [AmenityItem.tsx](../components/AmenityItem.tsx) en dos columnas en móvil y tres en escritorio.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.6 Tarjeta de reserva: precio por noche, contador de huéspedes (useState, rango mín/máx) y botón CTA
   - Evidencia: [BookingCard.tsx](../components/BookingCard.tsx) controla [GuestCounter.tsx](../components/GuestCounter.tsx). Chromium verificó límites de 1 a 6 y el aviso de que no se realizan reservas reales.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 5.7 RETO OPCIONAL: campos funcionales de fecha entrada/salida con librería de date picker y precio total según noches seleccionadas
   - Evidencia: [DateRangePicker.tsx](../components/DateRangePicker.tsx) usa `react-day-picker` v9 en español; [BookingCard.tsx](../components/BookingCard.tsx) calcula noches con `differenceInCalendarDays` y actualiza el total. Chromium a 375 px comprobó que las fechas pasadas y el CTA sin rango completo quedan deshabilitados, que 3 noches × 112 € dan 336 € y que no hay desbordamiento horizontal. Fase 1 (2026-11-23): Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones; `Reservar` deshabilitado sin rango, rango 23–26 nov → «3 noches × 112 € · Total: 336 €» y aviso al pulsar. Capturas: [impl-rooms-1-375.png](./screenshots/impl-rooms-1-375.png) e [impl-rooms-1-1280.png](./screenshots/impl-rooms-1-1280.png).
   - Estado/fecha: Completado — 2026-11-23.

### 6 — Navegación

 - [x] 6.1 Clic en tarjeta (Home o Catálogo) navega al detalle
   - Evidencia: [ListingCard.tsx](../components/ListingCard.tsx) envuelve la tarjeta en `Link` a `/rooms/[id]`. Playwright 1.56.1 (Chromium) contra `npm run dev`, 48/48 comprobaciones superadas a 375 y 1280 px: el clic en la primera tarjeta de la Home abre su ficha; el enlace «Ver alojamiento» del popup del mapa y las tarjetas del Catálogo usan el mismo componente.
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] 6.2 Usar <Link> de Next.js para toda la navegación entre páginas
   - Evidencia: `grep -rn "<a " app components --include=*.tsx` solo encuentra [ListingsMap.tsx:40](../components/ListingsMap.tsx), un string con el enlace **externo** de atribución de OpenStreetMap que exige su licencia y que Leaflet inserta en el control de atribución. No hay `<a>` de navegación interna. Toda la navegación usa `Link`: [ListingCard.tsx](../components/ListingCard.tsx), [Navbar.tsx](../components/Navbar.tsx), [BottomNav.tsx](../components/BottomNav.tsx), [HomeContent.tsx](../components/HomeContent.tsx), [catalog/page.tsx](../app/catalog/page.tsx), [CatalogContent.tsx](../components/CatalogContent.tsx), [ListingsMap.tsx](../components/ListingsMap.tsx) (popup), [BackToCatalog.tsx](../components/BackToCatalog.tsx) y [RoomNotFound.tsx](../components/RoomNotFound.tsx). La búsqueda del Catálogo es un `<form action="/catalog">` GET, no un enlace.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 6.3 Botón volver o breadcrumb en el detalle que regrese al Catálogo
   - Evidencia: [BackToCatalog.tsx](../components/BackToCatalog.tsx) (migas Inicio / Catálogo y «← Volver al catálogo»). Playwright 1.56.1 (Chromium) contra `npm run dev`, 48/48 comprobaciones superadas a 375 y 1280 px: el clic en «Volver al catálogo» desde `/rooms/[id]` lleva a `/catalog`. `/rooms/999` muestra [RoomNotFound.tsx](../components/RoomNotFound.tsx) con enlace al Catálogo y HTTP 404 ([impl-rooms-999-375.png](./screenshots/impl-rooms-999-375.png)).
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] 6.4 IMPORTANTE: nunca <a href="..."> plano para navegación interna
   - Evidencia: Ver 6.2: el único `<a>` del código es la atribución externa de OpenStreetMap ([ListingsMap.tsx:40](../components/ListingsMap.tsx)). Los demás `<a>` del DOM los genera Leaflet (zoom y atribución). Ninguno es navegación interna.
   - Estado/fecha: Completado — 2026-11-23.

### 7 — Calidad de código

 - [x] 7.1 Cada componente en su propio archivo dentro de /components
   - Evidencia: 29 archivos en [components/](../components/), cada uno con un solo componente exportado. Comprobado con `grep -cE "^(export )?const [A-Z]" components/*.tsx`. La única segunda coincidencia es [MapSection.tsx](../components/MapSection.tsx), donde `ListingsMap` es la referencia `dynamic()` al componente de su propio archivo, no un segundo componente.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 7.2 Ningún componente supera ~80 líneas de JSX + lógica
   - Evidencia: `wc -l components/*.tsx | sort -rn`: el mayor es [HomeContent.tsx](../components/HomeContent.tsx) con 67 líneas (imports incluidos), seguido de [ListingsMap.tsx](../components/ListingsMap.tsx) (62) y [Navbar.tsx](../components/Navbar.tsx) (60). Ninguno pasa de ~80, así que no hizo falta dividir nada.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 7.3 Todos los componentes funcionales definidos como const; sin clases
   - Evidencia: `grep -rnE "^export default function|^function |^export function" components` → vacío; `grep -rnE "extends (React\.)?(Component|PureComponent)|class [A-Z]" app components` → vacío. Las páginas y layouts de [app/](../app/) también usan `const` + `export default`.
   - Estado/fecha: Completado — 2026-11-23.

## SECCIÓN B — QUÉ VAMOS A EVALUAR

 - [x] E1 Existe `context.md` en la raíz con descripción clara de interfaz, componentes y usuario
   - Evidencia: [context.md](../context.md), secciones 1 a 3.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E2 Proyecto configurado con Next.js 16, TypeScript, Tailwind y App Router (sin plantilla de inicio)
   - Evidencia: [package.json](../package.json), [app/page.tsx](../app/page.tsx) y [app/globals.css](../app/globals.css). Página mínima en lugar de la plantilla; `npm run build` y `npm run lint` sin errores.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E3 Tres rutas implementadas y navegables: /, /catalog y /rooms/[id]
   - Evidencia: [app/page.tsx](../app/page.tsx), [app/catalog/page.tsx](../app/catalog/page.tsx) y [app/rooms/[id]/page.tsx](../app/rooms/%5Bid%5D/page.tsx) con su [not-found.tsx](../app/rooms/%5Bid%5D/not-found.tsx). Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones: `/`, `/catalog` y `/rooms/1` cargan; `/rooms/999` devuelve HTTP 404 con «Alojamiento no encontrado». La salida de `npm run build` lista `/`, `/catalog` y `/rooms/[id]`.
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] E4 Toda la navegación interna usa <Link>, sin recargas completas
   - Evidencia: Playwright 1.56.1 (Chromium) contra `npm run dev`, 48/48 comprobaciones superadas a 375 y 1280 px. Recorrido Home → detalle (clic en tarjeta) → Catálogo («Volver al catálogo») con `window.__spaMarker` fijado al principio: el marcador persiste tras las dos navegaciones y Playwright no registró ninguna petición de documento nuevo (0), es decir, no hubo recarga completa.
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] E5 Diseño mobile-first: 375px correcto antes de aplicar breakpoints de escritorio
   - Evidencia: Playwright 1.56.1 (Chromium) contra `npm run dev`, 48/48 comprobaciones superadas a 375 y 1280 px. Sin scroll horizontal (`scrollWidth` = `clientWidth`) en `/`, `/catalog`, `/rooms/1` y `/rooms/999` a 375 y 1280 px. Capturas: [impl-home-375.png](./screenshots/impl-home-375.png), [impl-home-1280.png](./screenshots/impl-home-1280.png), [impl-catalog-375.png](./screenshots/impl-catalog-375.png), [impl-catalog-1280.png](./screenshots/impl-catalog-1280.png), [impl-rooms-1-375.png](./screenshots/impl-rooms-1-375.png), [impl-rooms-1-1280.png](./screenshots/impl-rooms-1-1280.png), [impl-rooms-999-375.png](./screenshots/impl-rooms-999-375.png) e [impl-rooms-999-1280.png](./screenshots/impl-rooms-999-1280.png). Las clases base son de móvil y `md:` adapta a escritorio (por ejemplo, [ListingGrid.tsx](../components/ListingGrid.tsx) y [CatalogContent.tsx](../components/CatalogContent.tsx)). Bugs visuales corregidos durante la prueba: ERR-013 (pines) y ERR-014 (buscador a 375 px).
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] E6 Componente de tarjeta reutilizado en Home y Catálogo
   - Evidencia: [HomeContent.tsx](../components/HomeContent.tsx) y [CatalogContent.tsx](../components/CatalogContent.tsx) usan [ListingGrid.tsx](../components/ListingGrid.tsx), que renderiza el mismo [ListingCard.tsx](../components/ListingCard.tsx).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E7 useState en al menos tres casos distintos (búsqueda, categoría, orden, huéspedes, índice de galería)
   - Evidencia: [HomeContent.tsx](../components/HomeContent.tsx) usa `useState` para búsqueda y categoría; [CatalogContent.tsx](../components/CatalogContent.tsx), para el orden por precio. Chromium comprobó el cambio de ascendente a descendente. 10 `useState` en 5 componentes: búsqueda, categoría, lista y carga ([HomeContent.tsx](../components/HomeContent.tsx)); orden ([CatalogContent.tsx](../components/CatalogContent.tsx)); habitación ([RoomDetail.tsx](../components/RoomDetail.tsx)); índice de galería ([PhotoGallery.tsx](../components/PhotoGallery.tsx)); huéspedes, rango y aviso ([BookingCard.tsx](../components/BookingCard.tsx)).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E8 useEffect para simular carga en al menos dos páginas, con estado de carga visible
   - Evidencia: `useEffect` + `setTimeout(…, 1000)` con limpieza en [HomeContent.tsx:20](../components/HomeContent.tsx) y [RoomDetail.tsx:19](../components/RoomDetail.tsx); ambos muestran [LoadingSpinner.tsx](../components/LoadingSpinner.tsx) («Cargando alojamientos…», `role="status"`). Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones: spinner visible al montar en `/` y `/rooms/1`; desaparece cuando llegan los datos.
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] E9 Detalle con las cinco secciones: galería con navegación, cabecera, anfitrión, amenities, tarjeta de reserva
   - Evidencia: [RoomDetail.tsx](../components/RoomDetail.tsx) compone [PhotoGallery.tsx](../components/PhotoGallery.tsx), [RoomHeader.tsx](../components/RoomHeader.tsx), [HostInfo.tsx](../components/HostInfo.tsx), [AmenitiesGrid.tsx](../components/AmenitiesGrid.tsx) y [BookingCard.tsx](../components/BookingCard.tsx). Playwright (Chromium) a 375 y 1280 px, 48/48 comprobaciones: galería cíclica 1/5 → 5/5 → 1/5, huéspedes 1–6 con botones deshabilitados en los límites, 3 noches × 112 € = 336 €. Capturas: [impl-rooms-1-375.png](./screenshots/impl-rooms-1-375.png) e [impl-rooms-1-1280.png](./screenshots/impl-rooms-1-1280.png).
   - Estado/fecha: Completado — verificado en navegador 2026-11-23.
 - [x] E10 Componentes en archivos individuales, una única responsabilidad cada uno
   - Evidencia: Ver 7.1: 29 archivos con un componente cada uno (incluido [ListingPhoto.tsx](../components/ListingPhoto.tsx), añadido con las fotos reales). Responsabilidades separadas: por ejemplo, [MapSection.tsx](../components/MapSection.tsx) solo hace la carga sin SSR, [ListingsMap.tsx](../components/ListingsMap.tsx) pinta el mapa y [FitListingBounds.tsx](../components/FitListingBounds.tsx) ajusta el encuadre; [GuestCounter.tsx](../components/GuestCounter.tsx) y [DateRangePicker.tsx](../components/DateRangePicker.tsx) están separados de [BookingCard.tsx](../components/BookingCard.tsx).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E11 Sin componentes de clase; todos funcionales con const
   - Evidencia: Ver 7.3: no hay componentes de clase ni declaraciones `function` en [components/](../components/) ni en [app/](../app/).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E12 Tipos/interfaces TS para estructuras principales (alojamiento, habitación)
   - Evidencia: [types/listing.ts](../types/listing.ts) exporta `Listing`, `Room` (extiende `Listing`), `Host` y `Category`.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E13 Clases de utilidad Tailwind para todos los estilos, sin style={{}} en línea
   - Evidencia: `grep -rnE "style=\{\{" app components` → vacío. [app/globals.css](../app/globals.css) solo contiene `@import "tailwindcss";`. Las únicas hojas externas son `leaflet.css` y `react-day-picker/style.css`, que exigen las librerías permitidas de los retos. El calendario se personaliza con variables CSS mediante clases arbitrarias de Tailwind en [DateRangePicker.tsx](../components/DateRangePicker.tsx).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E14 Flujo visión→especificación visible: especificaciones documentadas en context.md o en comentarios del código
   - Evidencia: [sección 6 de context.md](../context.md#6-especificaciones-derivadas-de-visión). Detalle conserva la especificación, las capturas de referencia y el prompt de Claude, usado porque el chat de Copilot de este Codespace no permite adjuntar imágenes.
   - Estado/fecha: Completado — 2026-11-23.
 - Nota: los retos opcionales (mapa real, date picker funcional) no son evaluación base, pero en ESTE proyecto SÍ los vamos a hacer (4.4 y 5.7).

## Resumen de la auditoría final (2026-11-23)

Comandos: `npm run lint` sin errores ni avisos; `npm run build` compila `/`, `/catalog` y `/rooms/[id]`. Verificación en navegador: Playwright 1.56.1 (Chromium) contra `npm run dev`, 48/48 comprobaciones a 375 y 1280 px.

| Tarea | Estado | Evidencia |
| --- | --- | --- |
| 0 — context.md | Completado | [context.md](../context.md) |
| 1 — Configuración | Completado | [package.json](../package.json), [app/](../app/) |
| 2 — Flujo de visión | Completado | [context.md §6](../context.md#6-especificaciones-derivadas-de-visión) y capturas reales de Airbnb a 375 px (`docs/screenshots/airbnb-*-375*.png`) |
| 3 — Home | Completado | [HomeContent.tsx](../components/HomeContent.tsx), [impl-home-375.png](./screenshots/impl-home-375.png), [impl-home-1280.png](./screenshots/impl-home-1280.png) |
| 4 — Catálogo (+ reto 4.4) | Completado | [CatalogContent.tsx](../components/CatalogContent.tsx), [ListingsMap.tsx](../components/ListingsMap.tsx), [impl-catalog-375.png](./screenshots/impl-catalog-375.png), [impl-catalog-1280.png](./screenshots/impl-catalog-1280.png) |
| 5 — Detalle (+ reto 5.7) | Completado | [RoomDetail.tsx](../components/RoomDetail.tsx), [BookingCard.tsx](../components/BookingCard.tsx), [impl-rooms-1-375.png](./screenshots/impl-rooms-1-375.png), [impl-rooms-999-375.png](./screenshots/impl-rooms-999-375.png) |
| 6 — Navegación | Completado | `Link` en todos los enlaces internos; navegación sin recarga (marcador en `window`, 0 documentos nuevos) |
| 7 — Calidad de código | Completado | Máximo 67 líneas por componente; todo `const`; sin clases ni `style={{}}` |
| E1–E14 | Completado | Ver cada ítem arriba |

### Pendiente de verificación manual

- **Teselas reales del mapa** — en la prueba automática se simularon las teselas de OpenStreetMap para no depender de la red; conviene abrir `/catalog` en un navegador con conexión y confirmar que se ve el mapa base.
- **Dispositivo físico** — la verificación se hizo en Chromium con viewport de 375 px, no en un móvil real (Safari iOS: área segura, teclado virtual sobre el buscador).

