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
   - Evidencia: [context.md](../context.md), sección 3 «Componentes principales por vista». El inventario inicial queda pendiente de contraste con las capturas.
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

 - [ ] 2.1 Captura de cada una de las 3 páginas de Airbnb en viewport móvil 375px
   - Evidencia de Home: [home-1.jpg](./screenshots/home-1.jpg), [home-2.jpg](./screenshots/home-2.jpg) y [home-3.jpg](./screenshots/home-3.jpg).
   - [x] Catálogo — referencias móviles aportadas: [catalog-1.jpg](./screenshots/catalog-1.jpg) y [catalog-2.jpg](./screenshots/catalog-2.jpg), dos tramos de la misma página a ~606 px.
   - Estado/fecha: Parcial — 2026-11-23. Home y Catálogo cuentan con referencias a ~606 px; falta verificar el viewport de 375 px y registrar la evidencia de Detalle.
   - [x] Home: tres tramos de scroll recibidos como referencia visual.
 - [ ] 2.2 Adjuntar cada captura al agente y pedir especificación de componentes (nombre, props, relación de layout)
   - Evidencia de Home: capturas y prompt literal en [context.md → Home](../context.md#home).
   - [x] Catálogo — ambas capturas revisadas; referencias y prompt literal en [context.md → Catálogo](../context.md#catálogo--especificación-de-visión).
   - Estado/fecha: Parcial — 2026-11-23. Home y Catálogo revisados; Detalle pendiente.
   - [x] Home: prompt de visión y capturas revisados.
 - [ ] 2.3 Documentar cada especificación como comentario en el código o en context.md ANTES de implementar esa vista
   - Evidencia de Home: especificación completa en [context.md → Home](../context.md#home).
   - [x] Catálogo — especificación completa previa a la implementación en [context.md → Catálogo](../context.md#catálogo--especificación-de-visión).
   - Estado/fecha: Parcial — 2026-11-23. Home y Catálogo documentados antes de implementar sus vistas; Detalle pendiente.
   - [x] Home: componentes, props, estado, layout y adaptación responsive documentados.
 - [ ] 2.4 IMPORTANTE: ninguna librería de componentes preconstruida (ni shadcn, MUI, Ant Design, Chakra)
   - Evidencia:
   - Estado/fecha:

### 3 — Página de inicio (/)

 - [x] 3.1 Barra de navegación superior: logo, campo de búsqueda, iconos del menú de usuario
   - Evidencia: [Navbar.tsx](../components/Navbar.tsx) incorpora una marca propia, el buscador y los iconos del menú.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.2 Búsqueda con useState: guarda el texto y filtra tarjetas en tiempo real (la lista de tarjetas es estado local, se actualiza en cada pulsación)
   - Evidencia: [SearchBar.tsx](../components/SearchBar.tsx) actualiza la consulta de [HomeContent.tsx](../components/HomeContent.tsx) en cada pulsación; la vista deriva los resultados del estado local sin duplicarlo.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.3 Fila horizontal de filtros por categoría bajo la navbar (icono + etiqueta: Playa, Mansiones, Tendencias, etc.), useState para la categoría activa y resaltarla
   - Evidencia: [CategoryBar.tsx](../components/CategoryBar.tsx) permite desplazamiento horizontal y [CategoryItem.tsx](../components/CategoryItem.tsx) destaca la selección controlada por [HomeContent.tsx](../components/HomeContent.tsx).
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.4 Cuadrícula responsive de tarjetas: foto placeholder, título, precio por noche y valoración con estrellas
   - Evidencia: [ListingCard.tsx](../components/ListingCard.tsx) muestra una portada ilustrada 4:3 con [PlaceholderPhoto.tsx](../components/PlaceholderPhoto.tsx), conserva título, ubicación, precio y [StarRating.tsx](../components/StarRating.tsx), y añade un corazón decorativo y la etiqueta de recomendación desde 4,9. Los cinco tipos se asignan en [mocks/listings.ts](../mocks/listings.ts); la [galería de detalle](../app/rooms/%5Bid%5D/page.tsx) reutiliza el icono del alojamiento con cinco gradientes distintos.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.5 useEffect para simular carga: lista vacía, loading=true, tras setTimeout (~1s) asignar datos y loading=false; indicador de carga visible
   - Evidencia: [HomeContent.tsx](../components/HomeContent.tsx) programa y limpia el temporizador de 1000 ms; [LoadingSpinner.tsx](../components/LoadingSpinner.tsx) muestra el estado de carga inicial.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] 3.6 Cuadrícula en 1 columna en móvil y varias columnas en escritorio
   - Evidencia: [ListingGrid.tsx](../components/ListingGrid.tsx) declara una columna base, dos en `md:` y cuatro en `lg:`.
   - Estado/fecha: Completado — 2026-11-23.

### 4 — Página de catálogo (/catalog)

 - [ ] 4.1 Cabecera de resultados: número de resultados y control de orden (Ascendente/Descendente por precio) con useState que reordena las tarjetas
   - Evidencia:
   - Estado/fecha:
 - [ ] 4.2 Reutilizar el componente de tarjeta de la Home
   - Evidencia:
   - Estado/fecha:
 - [ ] 4.3 Área de mapa a la derecha de la lista (escritorio) o debajo (móvil); por defecto placeholder gris con texto "Mapa"
   - Evidencia:
   - Estado/fecha:
 - [ ] 4.4 RETO OPCIONAL: sustituir placeholder por mapa interactivo real (react-leaflet o Google Maps) con cada alojamiento como pin usando sus coordenadas
   - Evidencia:
   - Estado/fecha:

### 5 — Página de detalle (/rooms/[id])

 - [ ] 5.1 useEffect para cargar datos de la habitación al montar usando el id de la URL, con setTimeout y estado de carga
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.2 Galería de fotos arriba: useState con el índice visible y botones Anterior/Siguiente sobre un array de placeholders
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.3 Cabecera: título, valoración con estrellas, número de reseñas y ubicación
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.4 Fila del anfitrión: avatar placeholder, nombre y años como anfitrión
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.5 Sección de servicios (amenities) como cuadrícula de pares icono + etiqueta
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.6 Tarjeta de reserva: precio por noche, contador de huéspedes (useState, rango mín/máx) y botón CTA
   - Evidencia:
   - Estado/fecha:
 - [ ] 5.7 RETO OPCIONAL: campos funcionales de fecha entrada/salida con librería de date picker y precio total según noches seleccionadas
   - Evidencia:
   - Estado/fecha:

### 6 — Navegación

 - [ ] 6.1 Clic en tarjeta (Home o Catálogo) navega al detalle
   - Evidencia:
   - Estado/fecha:
 - [ ] 6.2 Usar <Link> de Next.js para toda la navegación entre páginas
   - Evidencia:
   - Estado/fecha:
 - [ ] 6.3 Botón volver o breadcrumb en el detalle que regrese al Catálogo
   - Evidencia:
   - Estado/fecha:
 - [ ] 6.4 IMPORTANTE: nunca <a href="..."> plano para navegación interna
   - Evidencia:
   - Estado/fecha:

### 7 — Calidad de código

 - [ ] 7.1 Cada componente en su propio archivo dentro de /components
   - Evidencia: Parcial: la Home compone archivos individuales de [components/](../components/) desde [app/page.tsx](../app/page.tsx).
   - Estado/fecha: Home completada — 2026-11-23; faltan Catálogo y Detalle.
 - [ ] 7.2 Ningún componente supera ~80 líneas de JSX + lógica
   - Evidencia: Parcial: los componentes de [Home](../components/HomeContent.tsx), incluidos [Navbar.tsx](../components/Navbar.tsx) y [BottomNav.tsx](../components/BottomNav.tsx), no superan 80 líneas.
   - Estado/fecha: Home completada — 2026-11-23; faltan Catálogo y Detalle.
 - [ ] 7.3 Todos los componentes funcionales definidos como const; sin clases
   - Evidencia: Parcial: [page.tsx](../app/page.tsx) y los componentes de la Home en [components/](../components/) usan funciones definidas con `const`.
   - Estado/fecha: Home completada — 2026-11-23; faltan Catálogo y Detalle.

## SECCIÓN B — QUÉ VAMOS A EVALUAR

 - [x] E1 Existe `context.md` en la raíz con descripción clara de interfaz, componentes y usuario
   - Evidencia: [context.md](../context.md), secciones 1 a 3.
   - Estado/fecha: Completado — 2026-11-23.
 - [x] E2 Proyecto configurado con Next.js 16, TypeScript, Tailwind y App Router (sin plantilla de inicio)
   - Evidencia: [package.json](../package.json), [app/page.tsx](../app/page.tsx) y [app/globals.css](../app/globals.css). Página mínima en lugar de la plantilla; `npm run build` y `npm run lint` sin errores.
   - Estado/fecha: Completado — 2026-11-23.
 - [ ] E3 Tres rutas implementadas y navegables: /, /catalog y /rooms/[id]
   - Evidencia: Parcial: [app/page.tsx](../app/page.tsx) implementa `/` (HTTP 200 en desarrollo). [HomeContent.tsx](../components/HomeContent.tsx) y [ListingCard.tsx](../components/ListingCard.tsx) apuntan a las rutas aún pendientes.
   - Estado/fecha: Home completada — 2026-11-23; faltan Catálogo y Detalle.
 - [ ] E4 Toda la navegación interna usa <Link>, sin recargas completas
   - Evidencia:
   - Estado/fecha:
 - [ ] E5 Diseño mobile-first: 375px correcto antes de aplicar breakpoints de escritorio
   - Evidencia: Parcial: [Navbar.tsx](../components/Navbar.tsx), [ListingGrid.tsx](../components/ListingGrid.tsx) y [BottomNav.tsx](../components/BottomNav.tsx) definen estilos base de móvil. No se ha validado visualmente a 375 px.
   - Estado/fecha: Parcial — 2026-11-23; faltan la comprobación visual y las demás vistas.
 - [ ] E6 Componente de tarjeta reutilizado en Home y Catálogo
   - Evidencia: Parcial: [ListingCard.tsx](../components/ListingCard.tsx) se usa desde [ListingGrid.tsx](../components/ListingGrid.tsx) en Home; falta reutilizarlo en Catálogo.
   - Estado/fecha: Parcial — 2026-11-23.
 - [ ] E7 useState en al menos tres casos distintos (búsqueda, categoría, orden, huéspedes, índice de galería)
   - Evidencia: Parcial: [HomeContent.tsx](../components/HomeContent.tsx) implementa búsqueda y categoría activa con `useState`; falta un tercer caso de interacción.
   - Estado/fecha: Parcial — 2026-11-23.
 - [ ] E8 useEffect para simular carga en al menos dos páginas, con estado de carga visible
   - Evidencia: Parcial: [HomeContent.tsx](../components/HomeContent.tsx) y [LoadingSpinner.tsx](../components/LoadingSpinner.tsx) cubren la carga de Home; falta la de Detalle.
   - Estado/fecha: Parcial — 2026-11-23.
 - [ ] E9 Detalle con las cinco secciones: galería con navegación, cabecera, anfitrión, amenities, tarjeta de reserva
   - Evidencia:
   - Estado/fecha:
 - [ ] E10 Componentes en archivos individuales, una única responsabilidad cada uno
   - Evidencia:
   - Estado/fecha:
 - [ ] E11 Sin componentes de clase; todos funcionales con const
   - Evidencia:
   - Estado/fecha:
 - [x] E12 Tipos/interfaces TS para estructuras principales (alojamiento, habitación)
   - Evidencia: [types/listing.ts](../types/listing.ts) exporta `Listing`, `Room` (extiende `Listing`), `Host` y `Category`.
   - Estado/fecha: Completado — 2026-11-23.
 - [ ] E13 Clases de utilidad Tailwind para todos los estilos, sin style={{}} en línea
   - Evidencia:
   - Estado/fecha:
 - [ ] E14 Flujo visión→especificación visible: especificaciones documentadas en context.md o en comentarios del código
   - Evidencia:
   - Estado/fecha:
 - Nota: los retos opcionales (mapa real, date picker funcional) no son evaluación base, pero en ESTE proyecto SÍ los vamos a hacer (4.4 y 5.7).
