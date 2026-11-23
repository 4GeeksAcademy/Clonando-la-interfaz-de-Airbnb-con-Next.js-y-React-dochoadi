/** Spec visión: indicador centrado y accesible durante la carga inicial. */
export const LoadingSpinner = () => (
  <div role="status" className="flex flex-col items-center gap-3 py-16 text-sm text-neutral-700">
    <span aria-hidden="true" className="size-9 animate-spin rounded-full border-4 border-rose-100 border-t-rose-600 motion-reduce:animate-none" />
    Cargando alojamientos…
  </div>
);
