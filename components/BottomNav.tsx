/** Spec visión: barra inferior móvil con Explorar y accesos aún no disponibles. */
import Link from "next/link";

export const BottomNav = () => (
  <nav
    aria-label="Navegación móvil"
    className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-3 border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] text-xs md:hidden"
  >
    <Link href="/" aria-current="page" className="flex h-16 flex-col items-center justify-center gap-1 font-semibold text-rose-700 focus-visible:outline-2 focus-visible:-outline-offset-2">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
      Explorar
    </Link>
    <span aria-disabled="true" className="flex h-16 flex-col items-center justify-center gap-1 text-neutral-600">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
        <path d="M12 20.5 4.6 13a4.8 4.8 0 0 1 6.8-6.8l.6.6.6-.6a4.8 4.8 0 0 1 6.8 6.8L12 20.5Z" />
      </svg>
      Favoritos<span className="sr-only"> (no disponible)</span>
    </span>
    <span aria-disabled="true" className="flex h-16 flex-col items-center justify-center gap-1 text-neutral-600">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.5 18.5a6 6 0 0 1 11 0" />
      </svg>
      Iniciar sesión<span className="sr-only"> (no disponible)</span>
    </span>
  </nav>
);
