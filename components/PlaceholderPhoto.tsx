import type { Listing } from "@/types/listing";

type PlaceholderPhotoProps = {
  gradient: string;
  variant?: Listing["propertyType"];
  className?: string;
};

const icons = {
  house: (
    <path d="M8 29 32 10l24 19M14 25v29h36V25M27 54V39h10v15M19 32h5v7h-5zM40 32h5v7h-5z" />
  ),
  cabin: (
    <path d="M6 54 32 10l26 44H6Zm20 0V42l6-8 6 8v12M17 44h5m20 0h5" />
  ),
  villa: (
    <path d="M5 53h54M8 53V34h29v19M5 34l17-12 18 12M19 53V42h8v11M46 53c3-9 5-18 4-28m0 0c-2-8-8-11-14-8m14 8c4-8 9-9 13-6m-13 6c-6-3-10-1-13 4m13-4c5-1 9 2 11 6" />
  ),
  apartment: (
    <path d="M17 55V9h30v46H17Zm10 0V44h10v11M23 16h6v6h-6zM35 16h6v6h-6zM23 29h6v6h-6zM35 29h6v6h-6z" />
  ),
  loft: (
    <path d="M10 54V20l44-8v42H10Zm7-6V27h30v21H17Zm10-21v21m10-21v21M17 37h30" />
  ),
};

/** Ilustra el tipo de alojamiento sobre un gradiente, sin cargar una foto. */
export const PlaceholderPhoto = ({
  gradient,
  variant = "house",
  className = "",
}: PlaceholderPhotoProps) => (
  <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute top-1/2 left-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 stroke-white/80"
    >
      {icons[variant]}
    </svg>
  </div>
);
