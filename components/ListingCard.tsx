/** Spec visión: tarjeta enlazada al detalle con portada, ubicación, precio y valoración. */
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { PlaceholderPhoto } from "./PlaceholderPhoto";
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
    <div className="relative">
      <PlaceholderPhoto
        gradient={listing.imageColor}
        variant={listing.propertyType}
        className="aspect-[4/3] rounded-2xl"
      />
      {listing.rating >= 4.9 && (
        <span className="absolute top-3 left-3 max-w-[calc(100%-3.5rem)] rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">
          Recomendación del viajero
        </span>
      )}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinejoin="round"
        className="absolute top-3 right-3 size-6 fill-black/40 stroke-white"
      >
        <path d="M12 21 4 13a5 5 0 0 1 7-7l1 1 1-1a5 5 0 0 1 7 7l-8 8Z" />
      </svg>
    </div>
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
