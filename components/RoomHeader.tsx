import type { Listing } from "@/types/listing";
import { StarRating } from "./StarRating";

type RoomHeaderProps = Pick<Listing, "title" | "rating" | "reviewCount" | "location">;

/** Spec visión: resume el título, la ubicación y las valoraciones de la ficha. */
export const RoomHeader = ({ title, rating, reviewCount, location }: RoomHeaderProps) => (
  <header className="space-y-2 text-center md:text-left">
    <h1 className="text-3xl font-semibold">{title}</h1>
    <p className="text-neutral-600">{location}</p>
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:justify-start">
      <StarRating rating={rating} />
      <span aria-hidden="true">·</span>
      <span>{reviewCount.toLocaleString("es-ES")} {reviewCount === 1 ? "reseña" : "reseñas"}</span>
    </div>
  </header>
);
