import Link from "next/link";

/** Spec visión: comunica que el alojamiento no existe y enlaza al catálogo. */
export const RoomNotFound = () => (
  <section className="space-y-3 py-10">
    <h1 className="text-2xl font-semibold">Alojamiento no encontrado</h1>
    <Link href="/catalog" className="inline-flex min-h-11 items-center underline underline-offset-4">
      ← Volver al catálogo
    </Link>
  </section>
);
