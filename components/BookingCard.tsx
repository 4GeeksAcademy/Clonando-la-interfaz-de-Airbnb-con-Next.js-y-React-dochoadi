import { useState } from "react";
import type { Room } from "@/types/listing";
import { GuestCounter } from "./GuestCounter";

type BookingCardProps = Pick<Room, "pricePerNight" | "minGuests" | "maxGuests">;
const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

/** Spec visión: reúne el precio por noche, el contador y la acción de reserva. */
export const BookingCard = ({ pricePerNight, minGuests, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(minGuests);
  const [showNotice, setShowNotice] = useState(false);

  return (
    <aside aria-labelledby="booking-title" className="space-y-5 rounded-2xl border border-neutral-200 p-5 shadow-sm md:sticky md:top-24 md:self-start">
      <h2 id="booking-title" className="text-xl font-semibold">Reserva tu estancia</h2>
      <p><strong className="text-xl">{euros.format(pricePerNight)}</strong> por noche</p>
      <GuestCounter value={guests} min={minGuests} max={maxGuests} onChange={setGuests} />
      <button type="button" onClick={() => setShowNotice(true)} className="min-h-12 w-full rounded-xl bg-rose-700 px-4 font-semibold text-white hover:bg-rose-800 disabled:opacity-50">
        Reservar
      </button>
      {showNotice && <p role="status" className="text-sm text-neutral-700">Las reservas no están disponibles en esta demostración.</p>}
    </aside>
  );
};
