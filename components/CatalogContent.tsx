"use client";

import Link from "next/link";
import { useState } from "react";
import type { Listing } from "@/types/listing";
import { ListingGrid } from "./ListingGrid";
import { MapPlaceholder } from "./MapPlaceholder";
import { ResultsHeader } from "./ResultsHeader";

/** Spec visión: ordena el catálogo y distribuye la lista y el mapa. */
export const CatalogContent = ({ listings }: { listings: readonly Listing[] }) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const sortedListings = [...listings].sort((a, b) =>
    order === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
  );

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <section className="min-w-0 md:flex-1">
          <ResultsHeader count={listings.length} order={order} onOrderChange={setOrder} />
          {sortedListings.length ? (
            <ListingGrid listings={sortedListings} layout="catalog" />
          ) : (
            <p role="status" className="rounded-2xl bg-neutral-50 px-4 py-10 text-center text-neutral-700">
              No hay alojamientos que coincidan con tu búsqueda.
            </p>
          )}
        </section>
        <aside id="mapa" aria-label="Mapa de alojamientos" tabIndex={-1} className="scroll-mt-24 md:sticky md:top-24 md:h-[calc(100vh-7rem)] md:w-1/2">
          <MapPlaceholder />
        </aside>
      </div>
      <Link
        href="#mapa"
        className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-1/2 z-10 flex min-h-11 -translate-x-1/2 items-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white shadow-md md:hidden"
      >
        Mapa
      </Link>
    </>
  );
};
