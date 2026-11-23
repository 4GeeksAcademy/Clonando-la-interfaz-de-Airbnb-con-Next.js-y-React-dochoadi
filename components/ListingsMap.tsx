"use client";

import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Listing } from "@/types/listing";
import { FitListingBounds } from "./FitListingBounds";

const formatPrice = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const priceIcon = (price: string) => {
  const label = document.createElement("span");
  label.textContent = price;
  label.className = "flex size-full items-center justify-center";
  return divIcon({
    html: label,
    className: "rounded-full border border-neutral-200 bg-white text-sm font-bold text-neutral-900 shadow-md",
    iconSize: [72, 32],
    iconAnchor: [36, 16],
    popupAnchor: [0, -16],
  });
};

/** Spec visión: sitúa los alojamientos del catálogo en un mapa con pines de precio. */
const ListingsMap = ({ listings }: { listings: readonly Listing[] }) => (
  <MapContainer
    center={[15, 0]}
    zoom={2}
    scrollWheelZoom={false}
    className="h-[400px] w-full overflow-hidden rounded-2xl md:h-full"
  >
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      maxZoom={19}
      attribution={
        'Tiles &copy; <a href="https://www.esri.com">Esri</a> &mdash; Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), TomTom'
      }
    />
    <FitListingBounds listings={listings} />
    {listings.map(({ id, title, pricePerNight, coordinates: { lat, lng } }) => {
      const price = formatPrice.format(pricePerNight);
      return (
        <Marker key={id} position={[lat, lng]} icon={priceIcon(price)} title={`${title}: ${price} por noche`}>
          <Popup>
            <strong>{title}</strong>
            <br />
            {price} por noche
            <br />
            <Link href={`/rooms/${id}`} className="underline underline-offset-2">
              Ver alojamiento
            </Link>
          </Popup>
        </Marker>
      );
    })}
  </MapContainer>
);

export default ListingsMap;
