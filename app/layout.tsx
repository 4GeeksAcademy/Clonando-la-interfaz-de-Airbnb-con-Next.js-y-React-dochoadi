import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Explora alojamientos vacacionales y compara estancias.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="es">
    <body className="min-h-screen bg-white text-neutral-900 antialiased">
      {children}
    </body>
  </html>
);

export default RootLayout;
