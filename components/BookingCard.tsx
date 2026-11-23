import { useState } from "react";
import { differenceInCalendarDays, format } from "date-fns";
import { es } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import type { Room } from "@/types/listing";
import { DateRangePicker } from "./DateRangePicker";
import { GuestCounter } from "./GuestCounter";

type BookingCardProps = Pick<Room, "pricePerNight" | "minGuests" | "maxGuests">;
const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const formatDate = (date: Date | undefined) => date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: es }) : "—";

/** Spec visión: reúne huéspedes, fechas, precio por noche y total de la estancia. */
export const BookingCard = ({ pricePerNight, minGuests, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(minGuests);
  const [range, setRange] = useState<DateRange>();
  const [showNotice, setShowNotice] = useState(false);
  const nights = range?.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;

  return (
    <aside aria-labelledby="booking-title" className="space-y-5 rounded-2xl border border-neutral-200 p-5 shadow-sm md:sticky md:top-24 md:self-start">
      <h2 id="booking-title" className="text-xl font-semibold">Reserva tu estancia</h2>
      <p><strong className="text-xl">{euros.format(pricePerNight)}</strong> por noche</p>
      <GuestCounter value={guests} min={minGuests} max={maxGuests} onChange={setGuests} />
      <section aria-labelledby="booking-dates" className="space-y-3 border-y border-neutral-200 py-4">
        <h3 id="booking-dates" className="font-semibold">Fechas de estancia</h3>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div><dt className="font-medium">Entrada</dt><dd>{formatDate(range?.from)}</dd></div>
          <div><dt className="font-medium">Salida</dt><dd>{formatDate(range?.to)}</dd></div>
        </dl>
        <DateRangePicker range={range} onChange={(nextRange) => {
          setRange(nextRange);
          setShowNotice(false);
        }} />
      </section>
      <div role="status" className="flex flex-wrap justify-between gap-2 text-sm">
        {nights > 0 ? (
          <>
            <span>{nights} {nights === 1 ? "noche" : "noches"} × {euros.format(pricePerNight)}</span>
            <strong>Total: {euros.format(nights * pricePerNight)}</strong>
          </>
        ) : <span>Selecciona fechas</span>}
      </div>
      <button type="button" disabled={nights <= 0} onClick={() => setShowNotice(true)} className="min-h-12 w-full rounded-xl bg-rose-700 px-4 font-semibold text-white hover:bg-rose-800 disabled:opacity-50">
        Reservar
      </button>
      {showNotice && <p role="status" className="text-sm text-neutral-700">Las reservas no están disponibles en esta demostración.</p>}
    </aside>
  );
};
