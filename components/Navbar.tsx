/** Spec visión: cabecera fija al hacer scroll con marca, búsqueda, perfil y categorías. */
import Link from "next/link";
import type { Category } from "@/types/listing";
import { CategoryBar } from "./CategoryBar";
import { SearchBar } from "./SearchBar";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  categories: readonly Category[];
  activeCategoryId: string;
  onCategoryChange: (id: string) => void;
};

export const Navbar = ({
  query, onQueryChange, categories, activeCategoryId, onCategoryChange,
}: NavbarProps) => (
  <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 pt-3 md:px-8">
      <nav aria-label="Navegación principal" className="flex items-center justify-between gap-2 md:gap-6">
        <Link href="/" aria-label="Estancias, inicio" className="flex shrink-0 flex-col items-center font-bold text-rose-700 md:flex-row md:gap-2">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="size-6">
            <path d="M3 19h18L11 5 3 19Z" />
            <path d="m8 10 3 3 3-3" />
          </svg>
          <span className="text-xs md:text-lg">Estancias</span>
        </Link>
        <SearchBar value={query} onChange={onQueryChange} />
        <details className="relative shrink-0">
          <summary
            aria-label="Menú de usuario"
            className="flex h-11 cursor-pointer list-none items-center gap-1 rounded-full border border-neutral-200 px-2 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-rose-600 md:gap-2 md:px-3 [&::-webkit-details-marker]:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6.5 18.5a6 6 0 0 1 11 0" />
            </svg>
          </summary>
          <p className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-neutral-200 bg-white p-3 text-sm text-neutral-700 shadow-md">
            El inicio de sesión aún no está disponible.
          </p>
        </details>
      </nav>
      <CategoryBar categories={categories} activeId={activeCategoryId} onSelect={onCategoryChange} />
    </div>
  </header>
);
