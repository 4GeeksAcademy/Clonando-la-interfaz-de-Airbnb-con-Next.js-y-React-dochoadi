/** Spec visión: muestra el total y permite ordenar por precio. */
type PriceOrder = "asc" | "desc";

type ResultsHeaderProps = {
  count: number;
  order: PriceOrder;
  onOrderChange: (order: PriceOrder) => void;
};

export const ResultsHeader = ({ count, order, onOrderChange }: ResultsHeaderProps) => (
  <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
    <h1 className="text-xl font-semibold">
      {count.toLocaleString("es-ES")} {count === 1 ? "alojamiento" : "alojamientos"}
    </h1>
    <label className="text-sm font-medium">
      <span className="sr-only">Ordenar por precio</span>
      <select
        className="min-h-11 rounded-full border border-neutral-300 bg-white px-3 focus-visible:outline-2 focus-visible:outline-rose-600"
        value={order}
        disabled={count === 0}
        onChange={(event) => {
          const value = event.currentTarget.value;
          if (value === "asc" || value === "desc") onOrderChange(value);
        }}
      >
        <option value="asc">Precio: ascendente</option>
        <option value="desc">Precio: descendente</option>
      </select>
    </label>
  </header>
);
