import { useState } from "react";
import type { Listing } from "@/types/listing";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

type PhotoGalleryProps = { photos: string[]; variant?: Listing["propertyType"] };
const arrowClass = "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-xl shadow focus-visible:outline-2 focus-visible:outline-rose-600";

/** Spec visión: recorre la galería de placeholders de forma cíclica. */
export const PhotoGallery = ({ photos, variant }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  if (!count) return <p>No hay fotos disponibles.</p>;

  return (
    <section aria-label="Galería de fotos" className="relative">
      <PlaceholderPhoto gradient={photos[index]} variant={variant} className="aspect-[4/3] rounded-2xl md:aspect-video" />
      {count > 1 && (
        <>
          <button type="button" aria-label="Anterior" className={`${arrowClass} left-3`} onClick={() => setIndex((i) => (i + count - 1) % count)}>
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" aria-label="Siguiente" className={`${arrowClass} right-3`} onClick={() => setIndex((i) => (i + 1) % count)}>
            <span aria-hidden="true">›</span>
          </button>
        </>
      )}
      <span role="status" className="absolute right-3 bottom-3 rounded-full bg-neutral-900 px-3 py-1 text-sm text-white">
        <span className="sr-only">Foto </span>{index + 1} / {count}
      </span>
    </section>
  );
};
