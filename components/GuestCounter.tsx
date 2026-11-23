type GuestCounterProps = { value: number; min: number; max: number; onChange: (n: number) => void };
const buttonClass = "grid size-11 place-items-center rounded-full border border-neutral-300 text-xl disabled:opacity-40";

/** Spec visión: ajusta los huéspedes dentro del rango del alojamiento. */
export const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => (
  <div className="flex items-center justify-between gap-3">
    <span className="font-medium">Huéspedes</span>
    <div className="flex items-center gap-3">
      <button type="button" aria-label="Quitar huésped" disabled={value <= min} onClick={() => onChange(value - 1)} className={buttonClass}>−</button>
      <output aria-label="Número de huéspedes" className="min-w-4 text-center">{value}</output>
      <button type="button" aria-label="Añadir huésped" disabled={value >= max} onClick={() => onChange(value + 1)} className={buttonClass}>+</button>
    </div>
  </div>
);
