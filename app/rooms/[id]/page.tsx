import { notFound } from "next/navigation";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { getRoomById } from "@/mocks/rooms";

const RoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const room = getRoomById(id);
  if (!room) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-2xl font-semibold">{room.title}</h1>
      <p className="mt-1 text-sm text-neutral-600">{room.location}</p>
      <div className="mt-4 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl md:grid-cols-4">
        {room.photos.map((gradient, index) => (
          <PlaceholderPhoto
            key={gradient}
            gradient={gradient}
            variant={room.propertyType}
            className={
              index === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
            }
          />
        ))}
      </div>
    </main>
  );
};

export default RoomPage;
