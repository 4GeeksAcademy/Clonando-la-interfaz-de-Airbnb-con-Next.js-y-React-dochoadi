import type { Listing, Room } from "@/types/listing";
import { listings } from "./listings";

const photosByType: Record<NonNullable<Listing["propertyType"]>, string[]> = {
  house: ["house-1", "house-2", "house-3"],
  cabin: ["cabin-1", "cabin-2", "cabin-3", "cabin-4"],
  villa: ["villa-1", "villa-2", "villa-3", "villa-4"],
  apartment: ["apartment-1", "apartment-2", "apartment-3"],
  loft: ["loft-1", "loft-2", "loft-3"],
};
const interiors = ["interior-living-1", "interior-bedroom-1", "interior-kitchen-1"];

/** Cinco fotos: la portada, otras del mismo tipo y, si faltan, interiores. */
const galleryFor = ({ photo, propertyType = "house" }: Listing): string[] => {
  const extra = [...photosByType[propertyType], ...interiors].map((name) => `/photos/${name}.jpg`);
  return [...new Set([...(photo ? [photo] : []), ...extra])].slice(0, 5);
};

export const getRoomById = (id: string): Room | undefined => {
  const listingId = id === "1" ? "balcon-cabanyal" : id;
  const listing = listings.find((item) => item.id === listingId);
  if (!listing) return undefined;

  return {
    ...listing,
    description: `${listing.title}. Una base tranquila para recorrer ${listing.location} a tu ritmo, con espacio para preparar un desayuno y descansar al volver.`,
    photos: galleryFor(listing),
    host: { name: "Elena Martín", yearsHosting: 4, avatarColor: "bg-amber-200" },
    amenities: [
      { icon: "📶", label: "Wi-Fi" },
      { icon: "🍳", label: "Cocina equipada" },
      { icon: "☕", label: "Cafetera" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "🚿", label: "Agua caliente" },
      { icon: "💻", label: "Espacio para trabajar" },
      { icon: "🛏️", label: "Ropa de cama" },
      { icon: "🧯", label: "Extintor" },
    ],
    minGuests: 1,
    maxGuests: 6,
  };
};
