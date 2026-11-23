import Link from "next/link";

/** Spec visión: sitúa la ficha en el recorrido Inicio → Catálogo → alojamiento. */
export const BackToCatalog = ({ title }: { title: string }) => (
  <nav aria-label="Ruta de navegación" className="mb-4 text-sm">
    <ol className="flex flex-wrap items-center gap-2 text-neutral-600">
      <li><Link href="/" className="underline underline-offset-4">Inicio</Link></li>
      <li aria-hidden="true">/</li>
      <li><Link href="/catalog" className="underline underline-offset-4">Catálogo</Link></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page">{title}</li>
    </ol>
    <Link href="/catalog" className="inline-flex min-h-11 items-center font-semibold hover:underline">
      ← Volver al catálogo
    </Link>
  </nav>
);
