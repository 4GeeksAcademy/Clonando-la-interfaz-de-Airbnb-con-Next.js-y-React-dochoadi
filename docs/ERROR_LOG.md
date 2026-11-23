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
- Estado: Pendiente

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
- Estado: Pendiente

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
- Estado: Pendiente

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
- Estado: Pendiente de verificación directa del CSS; no bloquea la compilación.

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
