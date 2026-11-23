/** Spec visión: buscador en forma de pastilla con lupa y texto controlado. */
type SearchBarProps = { defaultValue: string } | {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = (props: SearchBarProps) => (
  <label className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full border border-neutral-200 px-3 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600 md:max-w-lg md:px-4">
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-4 shrink-0"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
    <span className="sr-only">Buscar alojamientos</span>
    <input
      type="search"
      placeholder="Empieza a buscar"
      {...("defaultValue" in props
        ? { name: "q", defaultValue: props.defaultValue }
        : { value: props.value, onChange: (event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.currentTarget.value) })}
      className="w-full min-w-0 bg-transparent text-base outline-none placeholder:text-neutral-600"
    />
  </label>
);
