/** Spec visión: pastilla de categoría con emoji, etiqueta y estado activo. */
import type { Category } from "@/types/listing";

type CategoryItemProps = {
  category: Category;
  active: boolean;
  onSelect: (id: string) => void;
};

export const CategoryItem = ({ category, active, onSelect }: CategoryItemProps) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={() => onSelect(category.id)}
    className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-b-2 px-4 text-sm whitespace-nowrap shadow-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-rose-600 ${
      active
        ? "border-rose-200 border-b-rose-600 bg-rose-50 font-semibold text-rose-700"
        : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
    }`}
  >
    <span aria-hidden="true">{category.icon}</span>
    {category.label}
  </button>
);
