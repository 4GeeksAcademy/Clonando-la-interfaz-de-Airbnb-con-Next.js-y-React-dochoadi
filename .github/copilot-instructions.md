# Instrucciones del proyecto

- Stack: Next.js 16, TypeScript estricto, Tailwind CSS y App Router. Carpetas: `/app` (rutas), `/components` (UI reutilizable), `/types` (interfaces TS) y `/data` (datos mock).
- PROHIBIDO usar shadcn, MUI, Ant Design, Chakra o cualquier librería de componentes. Usa solo clases de utilidad de Tailwind y componentes propios. Solo para los retos opcionales se permiten `react-leaflet`/`leaflet` para el mapa y `react-day-picker` para el selector de fechas.
- PROHIBIDO usar `<a href>` para navegación interna. Usa siempre `<Link>` de `next/link`.
- PROHIBIDO usar `style={{}}` en línea y componentes de clase. Define los componentes funcionales con `const`.
- Un componente por archivo en `/components`, con una sola responsabilidad y un máximo aproximado de 80 líneas de JSX y lógica. Si supera ese límite, divídelo.
- Mobile-first: los estilos base deben funcionar a 375px. Usa el breakpoint `md:` (≥768px) solo para adaptar el diseño a escritorio.
- Escribe los textos de la UI en español.
- REGISTRO OBLIGATORIO:
  - Al terminar cada tarea, marca el checkbox correspondiente en `docs/REQUIREMENTS_LOG.md` y registra el archivo o la ruta como evidencia, junto con el estado y la fecha.
  - Si falla un comando, build o lint, o si aparece un error de TypeScript, un error de ejecución o un bug visual, añade una entrada a `docs/ERROR_LOG.md` **antes de seguir**, con el formato definido allí. Anota cómo se solucionó; si todavía está pendiente, actualiza la entrada al resolverlo.
- Antes de dar una tarea por terminada, comprueba que `npm run build` y `npm run lint` se ejecutan sin errores.
