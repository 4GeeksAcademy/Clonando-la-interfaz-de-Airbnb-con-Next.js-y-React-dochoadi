import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type { Listing } from "@/types/listing";

/** Spec visión: encuadra los pines al cambiar los resultados, no al reordenarlos. */
export const FitListingBounds = ({ listings }: { listings: readonly Listing[] }) => {
  const map = useMap();

  useEffect(() => {
    if (listings.length === 0) {
      map.setView([15, 0], 2);
      return;
    }
    map.fitBounds(
      listings.map(({ coordinates: { lat, lng } }) => [lat, lng]),
      { padding: [45, 30], maxZoom: 13, animate: false },
    );
  }, [listings, map]);

  return null;
};
