"use client";

import Image from "next/image";
import { useState } from "react";
import type { Listing } from "@/types/listing";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

type ListingPhotoProps = {
  src?: string;
  alt: string;
  gradient: string;
  variant?: Listing["propertyType"];
  className?: string;
  sizes?: string;
  /** Carga anticipada para las fotos visibles al entrar (primera fila, portada de la galería). */
  priority?: boolean;
};

const CARD_SIZES = "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw";

/**
 * Foto local del alojamiento con `next/image`. Si no hay `src` o la imagen falla,
 * muestra el `PlaceholderPhoto` de gradiente e icono como respaldo.
 */
export const ListingPhoto = ({
  src,
  alt,
  gradient,
  variant,
  className = "",
  sizes = CARD_SIZES,
  priority = false,
}: ListingPhotoProps) => {
  // Se guarda la ruta que falló: si cambia `src` (galería), se vuelve a intentar.
  const [failedSrc, setFailedSrc] = useState<string>();

  if (!src || failedSrc === src) {
    return <PlaceholderPhoto gradient={gradient} variant={variant} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onError={() => setFailedSrc(src)}
      />
    </div>
  );
};
