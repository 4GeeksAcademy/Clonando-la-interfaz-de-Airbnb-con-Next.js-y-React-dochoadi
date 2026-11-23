# Registro de requisitos

## SECCIÓN A — QUÉ DEBES HACER (7 tareas)

### 0 — Antes de escribir código

 - [ ] 0.1 Crear `context.md` en la raíz del proyecto
   - Evidencia:
   - Estado/fecha:
 - [ ] 0.2 context.md: descripción de las tres páginas y qué muestra cada una
   - Evidencia:
   - Estado/fecha:
 - [ ] 0.3 context.md: listado de los componentes principales de cada vista (Airbnb.com como referencia)
   - Evidencia:
   - Estado/fecha:
 - [ ] 0.4 context.md: párrafo corto que describa al usuario y qué intenta conseguir en la plataforma
   - Evidencia:
   - Estado/fecha:

### 1 — Configuración del proyecto

 - [ ] 1.1 Configurar Next.js 16 con TypeScript, Tailwind CSS y App Router usando create-next-app
   - Evidencia:
   - Estado/fecha:
 - [ ] 1.2 Revisar los comandos generados antes de ejecutarlos y confirmar que el servidor de desarrollo arranca
   - Evidencia:
   - Estado/fecha:
 - [ ] 1.3 Carpetas: /app (rutas), /components (UI reutilizable), /types (interfaces TS)
   - Evidencia:
   - Estado/fecha:
 - [ ] 1.4 Tailwind CSS para todos los estilos
   - Evidencia:
   - Estado/fecha:

### 2 — Flujo de trabajo con prompts de visión

 - [ ] 2.1 Captura de cada una de las 3 páginas de Airbnb en viewport móvil 375px
   - Evidencia:
   - Estado/fecha:
 - [ ] 2.2 Adjuntar cada captura al agente y pedir especificación de componentes (nombre, props, relación de layout)
   - Evidencia:
   - Estado/fecha:
 - [ ] 2.3 Documentar cada especificación como comentario en el código o en context.md ANTES de implementar esa vista
   - Evidencia:
   - Estado/fecha:
 - [ ] 2.4 IMPORTANTE: ninguna librería de componentes preconstruida (ni shadcn, MUI, Ant Design, Chakra)
   - Evidencia:
   - Estado/fecha:

### 3 — Página de inicio (/)

 - [ ] 3.1 Barra de navegación superior: logo, campo de búsqueda, iconos del menú de usuario
   - Evidencia:
   - Estado/fecha:
 - [ ] 3.2 Búsqueda con useState: guarda el texto y filtra tarjetas en tiempo real (la lista de tarjetas es estado local, se actualiza en cada pulsación)
   - Evidencia:
   - Estado/fecha:
 - [ ] 3.3 Fila horizontal de filtros por categoría bajo la navbar (icono + etiqueta: Playa, Mansiones, Tendencias, etc.), useState para la categoría activa y resaltarla
   - Evidencia:
   - Estado/fecha:
 - [ ] 3.4 Cuadrícula responsive de tarjetas: foto placeholder, título, precio por noche y valoración con estrellas
   - Evidencia:
   - Estado/fecha:
 - [ ] 3.5 useEffect para simular carga: lista vacía, loading=true, tras setTimeout (~1s) asignar datos y loading=false; indicador de carga visible
   - Evidencia:
   - Estado/fecha:
 - [ ] 3.6 Cuadrícula en 1 columna en móvil y varias columnas en escritorio
   - Evidencia:
   - Estado/fecha:

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
   - Evidencia:
   - Estado/fecha:
 - [ ] 7.2 Ningún componente supera ~80 líneas de JSX + lógica
   - Evidencia:
   - Estado/fecha:
 - [ ] 7.3 Todos los componentes funcionales definidos como const; sin clases
   - Evidencia:
   - Estado/fecha:

## SECCIÓN B — QUÉ VAMOS A EVALUAR

 - [ ] E1 Existe `context.md` en la raíz con descripción clara de interfaz, componentes y usuario
   - Evidencia:
   - Estado/fecha:
 - [ ] E2 Proyecto configurado con Next.js 16, TypeScript, Tailwind y App Router (sin plantilla de inicio)
   - Evidencia:
   - Estado/fecha:
 - [ ] E3 Tres rutas implementadas y navegables: /, /catalog y /rooms/[id]
   - Evidencia:
   - Estado/fecha:
 - [ ] E4 Toda la navegación interna usa <Link>, sin recargas completas
   - Evidencia:
   - Estado/fecha:
 - [ ] E5 Diseño mobile-first: 375px correcto antes de aplicar breakpoints de escritorio
   - Evidencia:
   - Estado/fecha:
 - [ ] E6 Componente de tarjeta reutilizado en Home y Catálogo
   - Evidencia:
   - Estado/fecha:
 - [ ] E7 useState en al menos tres casos distintos (búsqueda, categoría, orden, huéspedes, índice de galería)
   - Evidencia:
   - Estado/fecha:
 - [ ] E8 useEffect para simular carga en al menos dos páginas, con estado de carga visible
   - Evidencia:
   - Estado/fecha:
 - [ ] E9 Detalle con las cinco secciones: galería con navegación, cabecera, anfitrión, amenities, tarjeta de reserva
   - Evidencia:
   - Estado/fecha:
 - [ ] E10 Componentes en archivos individuales, una única responsabilidad cada uno
   - Evidencia:
   - Estado/fecha:
 - [ ] E11 Sin componentes de clase; todos funcionales con const
   - Evidencia:
   - Estado/fecha:
 - [ ] E12 Tipos/interfaces TS para estructuras principales (alojamiento, habitación)
   - Evidencia:
   - Estado/fecha:
 - [ ] E13 Clases de utilidad Tailwind para todos los estilos, sin style={{}} en línea
   - Evidencia:
   - Estado/fecha:
 - [ ] E14 Flujo visión→especificación visible: especificaciones documentadas en context.md o en comentarios del código
   - Evidencia:
   - Estado/fecha:
 - Nota: los retos opcionales (mapa real, date picker funcional) no son evaluación base, pero en ESTE proyecto SÍ los vamos a hacer (4.4 y 5.7).
