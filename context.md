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

Inventario propuesto a partir de los requisitos y de la interfaz de referencia de Airbnb.com. Falta contrastarlo con `home.png`, `catalog.png` y `room.png`, que aún no están en [docs/screenshots/](./docs/screenshots/).

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
- Servir los alojamientos y las fichas desde datos mock en `/data`, sin depender de un backend.
- Implementar ambos retos: `react-leaflet` y `leaflet` para el mapa, y `react-day-picker` para las fechas. Son las únicas excepciones al uso de componentes propios.

## 6. Especificaciones derivadas de visión

### Home — pendiente (se rellenará con los prompts de visión)

### Catálogo — pendiente (se rellenará con los prompts de visión)

### Detalle — pendiente (se rellenará con los prompts de visión)
