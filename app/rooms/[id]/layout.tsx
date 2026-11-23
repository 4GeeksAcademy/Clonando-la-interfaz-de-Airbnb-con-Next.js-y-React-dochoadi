import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

/** Spec visión: mantiene visible la navegación en la ficha y en el estado no encontrado. */
const RoomLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar catalogQuery="" />
    <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">{children}</main>
  </>
);

export default RoomLayout;
