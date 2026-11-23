import { useState } from "react";
import type { Listing } from "@/types/listing";
import { ListingPhoto } from "./ListingPhoto";

type PhotoGalleryProps = { photos: string[]; title: string; gradient: string; variant?: Listing["propertyType"] };
const arrowClass = "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-xl shadow focus-visible:outline-2 focus-visible:outline-rose-600";

/** Spec visión: recorre la galería de fotos de forma cíclica (placeholder si una foto falla). */
export const PhotoGallery = ({ photos, title, gradient, variant }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  if (!count) return <p>No hay fotos disponibles.</p>;

  return (
    <section aria-label="Galería de fotos" className="relative">
      <ListingPhoto
        src={photos[index]}
        alt={`${title} — foto ${index + 1}`}
        gradient={gradient}
        variant={variant}
        sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
        priority={index === 0}
        className="aspect-[4/3] rounded-2xl md:aspect-video"
      />
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
