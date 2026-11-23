/** Spec visión: cuadrícula responsive de alojamientos en lugar de carruseles. */
import type { Listing } from "@/types/listing";
import { ListingCard } from "./ListingCard";

type ListingGridProps = { listings: readonly Listing[]; layout?: "home" | "catalog" };

export const ListingGrid = ({ listings, layout = "home" }: ListingGridProps) => (
  <ul className={`grid grid-cols-1 gap-6 ${layout === "catalog" ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"}`}>
    {listings.map((listing, index) => (
      <li key={listing.id} className="min-w-0">
        <ListingCard listing={listing} priority={index < 4} />
      </li>
    ))}
  </ul>
);
