"use client";

import dynamic from "next/dynamic";
import type { Listing } from "@/types/listing";
import { MapPlaceholder } from "./MapPlaceholder";

const ListingsMap = dynamic(() => import("./ListingsMap"), {
  ssr: false,
  loading: () => <MapPlaceholder />,
});

/** Spec visión: carga Leaflet solo en el navegador y conserva el mapa gris mientras tanto. */
export const MapSection = ({ listings }: { listings: readonly Listing[] }) => (
  <ListingsMap listings={listings} />
);
