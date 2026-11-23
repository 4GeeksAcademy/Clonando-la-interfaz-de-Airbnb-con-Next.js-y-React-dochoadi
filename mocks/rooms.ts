import type { Room } from "@/types/listing";
import { listings } from "./listings";

export const getRoomById = (id: string): Room | undefined => {
  const listingId = id === "1" ? "balcon-cabanyal" : id;
  const listing = listings.find((item) => item.id === listingId);
  if (!listing) return undefined;

  return {
    ...listing,
    description: `${listing.title}. Una base tranquila para recorrer ${listing.location} a tu ritmo, con espacio para preparar un desayuno y descansar al volver.`,
    photos: [
      listing.imageColor,
      "from-amber-200 to-orange-100",
      "from-stone-300 to-zinc-100",
      "from-lime-200 to-emerald-100",
      "from-cyan-200 to-blue-100",
    ],
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
