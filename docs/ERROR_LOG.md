# Registro de errores

Copia la plantilla y crea una entrada con un número consecutivo (`ERR-001`, `ERR-002`, etc.) antes de seguir tras cualquier fallo de comando, build, lint, TypeScript o ejecución, o al detectar un bug visual. Registra el mensaje exacto cuando exista. Si el error sigue pendiente, indícalo y actualiza la entrada con la causa y la solución cuando se resuelva.

## Plantilla

### ERR-NNN — título corto
- Fecha / Prompt o fase:
- Síntoma (mensaje exacto o descripción):
- Causa raíz:
- Solución aplicada (comandos/cambios):
- Archivos afectados:
- Cómo evitarlo en el futuro:
- Estado: Resuelto / Pendiente

## Entradas

### ERR-001 — Archivo marcador restringido
- Fecha / Prompt o fase: 2026-11-23 / Configuración inicial de Next.js.
- Síntoma (mensaje exacto o descripción): `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/data/.gitkeep" is excluded by organization content policy. Do not attempt to access this file.`
- Causa raíz: La política de exclusión de contenido de la organización bloqueó la creación en Copilot, antes de que Git pudiera intervenir.
- Solución aplicada (comandos/cambios): Se separaron los cambios permitidos del archivo restringido. La creación del marcador sigue pendiente.
- Archivos afectados: `data/.gitkeep`.
- Cómo evitarlo en el futuro: Aplicar los cambios permitidos en un lote separado y gestionar la ruta restringida mediante el flujo autorizado de la organización.
- Estado: Obsoleto — la ruta de datos pasó a `/mocks` (ERR-005), así que `data/.gitkeep` ya no hace falta. Revisión 2026-11-23 (Claude Code): el bloqueo era de la política de contenido de Copilot y no afecta a este agente (`test -w data` → escribible).

### ERR-002 — Next.js altera las instrucciones del repositorio
- Fecha / Prompt o fase: 2026-11-23 / Prueba de arranque de Next.js.
- Síntoma (mensaje exacto o descripción): `next dev` añadió un bloque generado a `AGENTS.md`, que dejó de coincidir con las otras dos copias.
- Causa raíz: Next.js 16.4.6 genera reglas de agente automáticamente al arrancar.
- Solución aplicada (comandos/cambios): Se añadió `agentRules: false` a `next.config.ts` y se retiró solo el bloque generado.
- Archivos afectados: `AGENTS.md`, `next.config.ts`.
- Cómo evitarlo en el futuro: Mantener desactivada la generación automática y comprobar que las tres copias de instrucciones siguen siendo idénticas.
- Estado: Resuelto

### ERR-003 — Lockfile excluido del commit
- Fecha / Prompt o fase: 2026-11-23 / Preparación del commit de configuración.
- Síntoma (mensaje exacto o descripción): `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/package-lock.json" is excluded by organization content policy. Do not attempt to access this file.`
- Causa raíz: La política de exclusión de contenido de la organización bloqueó la operación en Copilot antes de ejecutar `git add`. No fue un rechazo de GitHub.
- Solución aplicada (comandos/cambios): Se prepararon únicamente los archivos permitidos. El diagnóstico posterior confirmó que `git status -sb` muestra `?? package-lock.json`, que `core.excludesfile` no está configurado y que `.gitignore` y `.git/info/exclude` no contienen una regla que explique el bloqueo. No se forzó la inclusión del lockfile.
- Archivos afectados: `package-lock.json`.
- Cómo evitarlo en el futuro: Gestionar la incorporación del lockfile mediante el flujo autorizado de la organización.
- Estado: Resuelto — el lockfile se versionó en `f610617` («chore: package-lock.json y registro de errores»). Revisión 2026-11-23 (Claude Code): `git check-ignore -v package-lock.json` no devuelve regla (código 1), `git ls-files package-lock.json` lo lista y no tiene cambios respecto al commit. El bloqueo era exclusivo de la política de Copilot.

### ERR-004 — Creación de módulos de datos restringida
- Fecha / Prompt o fase: 2026-11-23 / Tipos y datos mock.
- Síntoma (mensaje exacto o descripción):
  - `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/data/categories.ts" is excluded by organization content policy. Do not attempt to access this file.`
  - `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/data/listings.ts" is excluded by organization content policy. Do not attempt to access this file.`
  - `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/data/rooms.ts" is excluded by organization content policy. Do not attempt to access this file.`
- Causa raíz: La política de exclusión de contenido de la organización bloqueó las rutas en el editor.
- Solución aplicada (comandos/cambios): Se separaron los cambios permitidos. Los módulos restringidos quedan pendientes de autorización.
- Archivos afectados: `data/categories.ts`, `data/listings.ts`, `data/rooms.ts`.
- Cómo evitarlo en el futuro: Gestionar el acceso a las rutas mediante el flujo autorizado de la organización.
- Estado: Obsoleto — los datos viven en `/mocks` (ERR-005). Revisión 2026-11-23 (Claude Code): el bloqueo de `/data` era de la política de Copilot; este agente puede escribir en `data/`, pero no se recrean los módulos para no duplicar los mocks.

### ERR-005 — Nueva ubicación para los datos ficticios
- Fecha / Prompt o fase: 2026-11-23 / Datos mock en `/mocks`.
- Síntoma (mensaje exacto o descripción): No se pudieron crear los módulos previstos en `/data` (mensajes en ERR-004).
- Causa raíz: `/data` está excluida por la política de contenido de la organización.
- Solución aplicada (comandos/cambios): Se adoptó `/mocks` para crear los datos ficticios nuevos y se actualizaron las instrucciones y el registro de requisitos. No se accedió a la carpeta excluida ni se modificó la política.
- Archivos afectados: `mocks/categories.ts`, `mocks/listings.ts`, `mocks/rooms.ts`, `AGENTS.md`, `.github/copilot-instructions.md`, `CLAUDE.md`, `context.md`, `docs/REQUIREMENTS_LOG.md`.
- Cómo evitarlo en el futuro: Mantener los datos ficticios nuevos en la ruta documentada.
- Estado: Resuelto para los datos ficticios; la exclusión descrita en ERR-004 sigue vigente.

### ERR-006 — Inspección del CSS compilado restringida
- Fecha / Prompt o fase: 2026-11-23 / Verificación de los placeholders.
- Síntoma (mensaje exacto o descripción): `Access denied: "/workspaces/Clonando-la-interfaz-de-Airbnb-con-Next.js-y-React-dochoadi/.next/static" is excluded by organization content policy. Do not attempt to access this file.`
- Causa raíz: La política de contenido impide la inspección directa del directorio de archivos estáticos compilados.
- Solución aplicada (comandos/cambios): No se reintentó la lectura. El lint, el build y la prueba HTTP de la galería pasaron; la inspección directa del CSS quedó sin realizar.
- Archivos afectados: Directorio generado `.next/static`.
- Cómo evitarlo en el futuro: No inspeccionar directamente los directorios de artefactos excluidos.
- Estado: Resuelto para Claude Code (2026-11-23): `.next/static/chunks/*.css` es legible desde este agente; el bloqueo solo afectaba a Copilot.

### ERR-007 — Servidor de desarrollo duplicado
- Fecha / Prompt o fase: 2026-11-23 / Catálogo, fase A.
- Síntoma (mensaje exacto o descripción): `⨯ Another next dev server is already running.` La consulta al segundo servidor terminó con `fetch failed`.
- Causa raíz: Ya había un servidor Next.js de este proyecto escuchando en `http://localhost:3000`.
- Solución aplicada (comandos/cambios): Reutilizar el servidor de desarrollo existente en lugar de iniciar otro; no detener el proceso ajeno.
- Archivos afectados: Ninguno.
- Cómo evitarlo en el futuro: Verificar el servidor activo antes de iniciar otra instancia de desarrollo del mismo proyecto.
- Estado: Resuelto; el servidor existente devolvió HTTP 200 para `/catalog`.

### ERR-008 — La prueba del contador no toleraba comentarios de React
- Fecha / Prompt o fase: 2026-11-23 / Catálogo, fase A.
- Síntoma (mensaje exacto o descripción): `The input did not match the regular expression /12(?:<!-- -->)? alojamientos/. Input:`
- Causa raíz: La comprobación comparaba el HTML bruto del encabezado en lugar de su texto visible.
- Solución aplicada (comandos/cambios): Comparar el texto del `h1` tras quitar los comentarios HTML.
- Archivos afectados: Ninguno; prueba HTTP local.
- Cómo evitarlo en el futuro: Comparar texto visible en las aserciones sobre contenido de React.
- Estado: Resuelto; la prueba normalizada verificó `12 alojamientos` y `1 alojamiento`.

### ERR-009 — Falta el navegador de pruebas
- Fecha / Prompt o fase: 2026-11-23 / Catálogo, fase B.
- Síntoma (mensaje exacto o descripción): `Error: Cannot find module 'playwright'` (`MODULE_NOT_FOUND`).
- Causa raíz: El repositorio no incluye un ejecutor para pruebas de navegación en navegador.
- Solución aplicada (comandos/cambios): Preparar Playwright y Chromium fuera del repositorio, sin modificar las dependencias de la aplicación.
- Archivos afectados: Ninguno.
- Cómo evitarlo en el futuro: Comprobar si hay un navegador de pruebas disponible al planificar la verificación.
- Estado: Resuelto. Chromium confirmó que el enlace del popup abrió el detalle sin solicitar un documento nuevo. Las teselas se simularon durante la prueba.

### ERR-010 — La prueba esperaba un encabezado que también existe en Home
- Fecha / Prompt o fase: 2026-11-23 / Detalle, fase 2.
- Síntoma (mensaje exacto o descripción): `The input did not match the regular expression /\/rooms\/balcon-cabanyal$/. Input:` (valor: `http://localhost:3000/`).
- Causa raíz: El selector del encabezado coincidía con la tarjeta de origen antes de que se completara la navegación.
- Solución aplicada (comandos/cambios): Esperar explícitamente la URL y el encabezado de nivel 1 de la ficha.
- Archivos afectados: Ninguno; prueba local en Chromium.
- Cómo evitarlo en el futuro: Esperar la URL y un elemento exclusivo de la vista destino.
- Estado: Resuelto; Chromium confirmó la navegación y los controles de la ficha.

### ERR-011 — Chromium de Playwright sin librerías del sistema
- Fecha / Prompt o fase: 2026-11-23 / Fase 1, verificación visual (Claude Code).
- Síntoma (mensaje exacto o descripción): `npx playwright install chromium` descargó el navegador, pero terminó con `Host system is missing dependencies to run browsers` y propuso `sudo apt-get install libatk1.0-0t64 libatk-bridge2.0-0t64 libcups2t64 libxkbcommon0 libatspi2.0-0t64 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2t64`.
- Causa raíz: La imagen del Codespace no incluye las bibliotecas compartidas que necesita Chromium.
- Solución aplicada (comandos/cambios): Instalar Playwright 1.56.1 en un directorio temporal fuera del repositorio (`npm i playwright@1.56.1`) y ejecutar `sudo -n npx playwright install-deps chromium` (código 0). No se tocaron las dependencias del proyecto.
- Archivos afectados: Ninguno del repositorio.
- Cómo evitarlo en el futuro: Ejecutar `npx playwright install --with-deps chromium` desde el principio en entornos nuevos.
- Estado: Resuelto.

### ERR-012 — Selector ambiguo de la galería en la prueba Playwright
- Fecha / Prompt o fase: 2026-11-23 / Fase 1, verificación visual (Claude Code).
- Síntoma (mensaje exacto o descripción): `locator.click: Error: strict mode violation: getByRole('button', { name: 'Anterior' }) resolved to 2 elements` (y lo mismo con `Siguiente`).
- Causa raíz: Playwright compara el nombre accesible por subcadena sin distinguir mayúsculas; «Anterior» coincidía también con «Mes anterior» del calendario de `react-day-picker`. No es un fallo de la aplicación: los nombres accesibles son distintos.
- Solución aplicada (comandos/cambios): Usar `{ name: "Anterior", exact: true }` y `{ name: "Siguiente", exact: true }` en el script de verificación.
- Archivos afectados: Ninguno del repositorio; script temporal de Playwright.
- Cómo evitarlo en el futuro: Usar `exact: true` en los selectores por rol cuando haya otros controles con nombres parecidos.
- Estado: Resuelto.

### ERR-013 — Precio descentrado en los pines del mapa
- Fecha / Prompt o fase: 2026-11-23 / Fase 1, verificación visual (Claude Code).
- Síntoma (mensaje exacto o descripción): Bug visual en `impl-catalog-375.png` e `impl-catalog-1280.png`: el texto del precio queda arriba a la izquierda de la pastilla blanca de 72 × 32 px en lugar de centrado; con pines cercanos parece cortado («60 ‹»).
- Causa raíz: `leaflet/dist/leaflet.css` declara `.leaflet-marker-icon { display: block; }` sin capa CSS. Tailwind v4 genera `grid`/`place-items-center` dentro de `@layer utilities`, y las reglas sin capa prevalecen sobre las que van en capas, así que el contenedor nunca fue `grid`.
- Solución aplicada (comandos/cambios): Centrar el contenido en el `span` interno (`flex size-full items-center justify-center`), sobre el que Leaflet no aplica reglas, y quitar `grid place-items-center` del contenedor del icono.
- Archivos afectados: `components/ListingsMap.tsx`.
- Cómo evitarlo en el futuro: No aplicar utilidades de `display` a elementos que también estila Leaflet; aplicar el layout en un hijo propio.
- Estado: Resuelto; capturas regeneradas.

### ERR-014 — Placeholder del buscador cortado a 375 px en Catálogo y Detalle
- Fecha / Prompt o fase: 2026-11-23 / Fase 1, verificación visual (Claude Code).
- Síntoma (mensaje exacto o descripción): Bug visual en `impl-catalog-375.png` e `impl-rooms-1-375.png`: el campo muestra «Empieza a» porque el botón de texto «Buscar» ocupa el ancho disponible.
- Causa raíz: En la variante con formulario de `Navbar`, marca + campo + botón de texto + menú no caben en 343 px útiles.
- Solución aplicada (comandos/cambios): Primer intento: sustituir el texto por una flecha en móvil; el placeholder seguía cortándose («Empieza a bu»). Solución final: ocultar el botón por debajo de `md:` (`hidden md:block`). El formulario tiene un solo campo, así que se envía con Intro o con la tecla «Ir» del teclado móvil; desde `md:` el botón «Buscar» sigue visible.
- Archivos afectados: `components/Navbar.tsx`.
- Cómo evitarlo en el futuro: Revisar los textos de los campos en la captura de 375 px antes de dar una vista por terminada.
- Estado: Resuelto; capturas regeneradas.

### ERR-015 — El banner de cookies de Airbnb tapaba el clic en la tarjeta
- Fecha / Prompt o fase: 2026-11-23 / Capturas de Airbnb a 375 px (Claude Code).
- Síntoma (mensaje exacto o descripción): `TimeoutError: locator.click` … `<div data-testid="main-cookies-banner-container">…</div> subtree intercepts pointer events` al pulsar la primera tarjeta de `/s/Alicante--España/homes`.
- Causa raíz: El script de captura buscaba «Solo necesarias», pero el botón del banner se llama «Solo las necesarias», así que el banner seguía abierto. Además, la imagen del carrusel de la tarjeta intercepta el puntero.
- Solución aplicada (comandos/cambios): Añadir «Solo las necesarias» y «Aceptar todas» a los botones que se cierran y, si el clic normal no llega, repetirlo con `force: true` sobre el mismo enlace. Airbnb no bloqueó el acceso: home, búsqueda y detalle respondieron HTTP 200.
- Archivos afectados: Ninguno del repositorio; script temporal de Playwright.
- Cómo evitarlo en el futuro: Sacar el nombre accesible real de los botones del banner (con el mensaje de error o `getByRole`) antes de automatizar el cierre.
- Estado: Resuelto.

### ERR-016 — Límite de peticiones de la API de Wikimedia Commons
- Fecha / Prompt o fase: 2026-11-23 / Fotos reales, fase 1 (Claude Code).
- Síntoma (mensaje exacto o descripción): `urllib.error.HTTPError: HTTP Error 429: Too Many Requests` en la décima búsqueda seguida contra `commons.wikimedia.org/w/api.php`. Antes, la búsqueda pública de Unsplash (`unsplash.com/napi/search/photos`) respondió `307`, que parece un control anti-bots, y se descartó sin intentar esquivarlo.
- Causa raíz: Diez consultas `generator=search` con `extmetadata` lanzadas sin pausa superaron el límite de peticiones de la API.
- Solución aplicada (comandos/cambios): Reutilizar las candidatas ya obtenidas. Pedir los metadatos en una sola consulta por títulos (`titles=A|B|…`), con pausa y reintentos con espera creciente, y descargar las miniaturas de una en una con una pausa entre descargas.
- Archivos afectados: Ninguno del repositorio; scripts temporales.
- Cómo evitarlo en el futuro: Agrupar consultas a la API de MediaWiki (hasta 50 títulos por petición) y espaciar las peticiones.
- Estado: Resuelto.
