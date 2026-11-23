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
  propertyType?: "house" | "cabin" | "villa" | "apartment" | "loft";
}

export interface Host {
  name: string;
  yearsHosting: number;
  avatarColor: string;
}

export interface Room extends Listing {
  description: string;
  photos: string[];
  host: Host;
  amenities: { icon: string; label: string }[];
  minGuests: number;
  maxGuests: number;
}
