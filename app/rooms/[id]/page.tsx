import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/RoomDetail";
import { getRoomById } from "@/mocks/rooms";

const RoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  if (!getRoomById(id)) notFound();
  return <RoomDetail key={id} id={id} />;
};

export default RoomPage;
