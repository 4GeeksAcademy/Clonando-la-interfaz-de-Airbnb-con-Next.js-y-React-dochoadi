/** Spec visión: tarjeta enlazada al detalle con portada, ubicación, precio y valoración. */
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { StarRating } from "./StarRating";

type ListingCardProps = { listing: Listing };

const priceFormat = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export const ListingCard = ({ listing }: ListingCardProps) => (
  <Link
    href={`/rooms/${listing.id}`}
    className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
  >
    <div aria-hidden="true" className={`aspect-4/3 rounded-2xl ${listing.imageColor}`} />
    <h2 className="mt-3 font-semibold group-hover:underline">{listing.title}</h2>
    <p className="text-sm text-neutral-600">{listing.location}</p>
    <div className="mt-1 flex items-center justify-between gap-2">
      <p className="text-sm">
        <span className="font-semibold">{priceFormat.format(listing.pricePerNight)}</span>{" "}
        por noche
      </p>
      <StarRating rating={listing.rating} />
    </div>
  </Link>
);
