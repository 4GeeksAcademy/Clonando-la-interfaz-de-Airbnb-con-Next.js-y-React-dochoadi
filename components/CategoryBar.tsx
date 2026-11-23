/** Spec visión: segunda fila de la cabecera, con filtros en scroll horizontal. */
import type { Category } from "@/types/listing";
import { CategoryItem } from "./CategoryItem";

type CategoryBarProps = {
  categories: readonly Category[];
  activeId: string;
  onSelect: (id: string) => void;
};

export const CategoryBar = ({ categories, activeId, onSelect }: CategoryBarProps) => (
  <div role="group" aria-label="Filtrar por categoría" className="flex gap-2 overflow-x-auto py-2">
    {categories.map((category) => (
      <CategoryItem
        key={category.id}
        category={category}
        active={category.id === activeId}
        onSelect={onSelect}
      />
    ))}
  </div>
);
