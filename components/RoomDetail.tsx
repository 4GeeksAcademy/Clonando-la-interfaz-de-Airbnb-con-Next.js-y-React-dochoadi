"use client";

import { useEffect, useState } from "react";
import { getRoomById } from "@/mocks/rooms";
import type { Room } from "@/types/listing";
import { AmenitiesGrid } from "./AmenitiesGrid";
import { BackToCatalog } from "./BackToCatalog";
import { BookingCard } from "./BookingCard";
import { HostInfo } from "./HostInfo";
import { LoadingSpinner } from "./LoadingSpinner";
import { PhotoGallery } from "./PhotoGallery";
import { RoomHeader } from "./RoomHeader";
import { RoomNotFound } from "./RoomNotFound";

/** Spec visión: carga el alojamiento por identificador y compone la ficha. */
export const RoomDetail = ({ id }: { id: string }) => {
  const [room, setRoom] = useState<Room | null | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => setRoom(getRoomById(id) ?? null), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (room === undefined) return <LoadingSpinner />;
  if (room === null) return <RoomNotFound />;

  return (
    <>
      <BackToCatalog title={room.title} />
      <PhotoGallery photos={room.photos} title={room.title} gradient={room.imageColor} variant={room.propertyType} />
      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <div className="space-y-6">
          <RoomHeader
            title={room.title}
            location={room.location}
            rating={room.rating}
            reviewCount={room.reviewCount}
          />
          <HostInfo host={room.host} />
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Información sobre este alojamiento</h2>
            <p className="text-neutral-700">{room.description}</p>
          </section>
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard
          pricePerNight={room.pricePerNight}
          minGuests={room.minGuests}
          maxGuests={room.maxGuests}
        />
      </div>
    </>
  );
};
