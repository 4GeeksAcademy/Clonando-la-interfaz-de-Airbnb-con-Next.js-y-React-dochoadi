/** Spec visión: coordina la carga inicial y combina búsqueda y categoría en vivo. */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/mocks/categories";
import { listings as allListings } from "@/mocks/listings";
import type { Listing } from "@/types/listing";
import { BottomNav } from "./BottomNav";
import { ListingGrid } from "./ListingGrid";
import { LoadingSpinner } from "./LoadingSpinner";
import { Navbar } from "./Navbar";

export const HomeContent = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setListings(allListings);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const search = query.trim().toLocaleLowerCase("es");
  const visibleListings = listings.filter(({ title, location, category }) => {
    const matchesCategory = activeCategory === "all" || activeCategory === category;
    return matchesCategory && (
      title.toLocaleLowerCase("es").includes(search) ||
      location.toLocaleLowerCase("es").includes(search)
    );
  });

  return (
    <>
      <Navbar
        query={query}
        onQueryChange={setQuery}
        categories={categories}
        activeCategoryId={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="mx-auto w-full max-w-7xl px-4 pt-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:px-8 md:pb-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h1 className="text-2xl font-semibold">Explora alojamientos</h1>
          <Link href="/catalog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:underline">
            Ver todos los alojamientos
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-neutral-100">→</span>
          </Link>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : visibleListings.length ? (
          <ListingGrid listings={visibleListings} />
        ) : (
          <p role="status" className="rounded-2xl bg-neutral-50 px-4 py-10 text-center text-neutral-700">
            No hay alojamientos que coincidan con tu búsqueda.
          </p>
        )}
      </main>
      <BottomNav />
    </>
  );
};
