import type { Room } from "@/types/listing";
import { AmenityItem } from "./AmenityItem";

/** Spec visión: agrupa las comodidades del alojamiento en una cuadrícula. */
export const AmenitiesGrid = ({ amenities }: { amenities: Room["amenities"] }) => (
  <section className="space-y-4 border-t border-neutral-200 pt-6">
    <h2 className="text-xl font-semibold">Comodidades</h2>
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {amenities.map(({ icon, label }) => <AmenityItem key={label} icon={icon} label={label} />)}
    </ul>
  </section>
);
