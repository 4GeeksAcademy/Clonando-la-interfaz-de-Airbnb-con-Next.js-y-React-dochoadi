/** Spec visión: cuadrícula responsive de alojamientos en lugar de carruseles. */
import type { Listing } from "@/types/listing";
import { ListingCard } from "./ListingCard";

type ListingGridProps = { listings: readonly Listing[] };

export const ListingGrid = ({ listings }: ListingGridProps) => (
  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {listings.map((listing) => (
      <li key={listing.id} className="min-w-0">
        <ListingCard listing={listing} />
      </li>
    ))}
  </ul>
);
