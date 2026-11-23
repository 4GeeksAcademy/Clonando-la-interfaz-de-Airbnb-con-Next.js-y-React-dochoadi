export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  category: string;
  coordinates: { lat: number; lng: number };
  imageColor: string;
  /** Ruta pública de la portada (p. ej. "/photos/villa-1.jpg"); sin ella se usa el placeholder. */
  photo?: string;
  propertyType?: "house" | "cabin" | "villa" | "apartment" | "loft";
}

export interface Host {
  name: string;
  yearsHosting: number;
  avatarColor: string;
}

export interface Room extends Listing {
  description: string;
  /** Rutas públicas de la galería; la primera es la portada del alojamiento. */
  photos: string[];
  host: Host;
  amenities: { icon: string; label: string }[];
  minGuests: number;
  maxGuests: number;
}
