/** Spec visión: puntuación numérica con estrella SVG decorativa y etiqueta accesible. */
type StarRatingProps = { rating: number };

const ratingFormat = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

export const StarRating = ({ rating }: StarRatingProps) => {
  const score = ratingFormat.format(rating);

  return (
    <span className="inline-flex shrink-0 items-center gap-1 text-sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="m12 2 2.9 6.1 6.8.9-4.9 4.8 1.2 6.8-6-3.2-6 3.2 1.2-6.8L2.3 9l6.8-.9L12 2Z" />
      </svg>
      <span aria-hidden="true">{score}</span>
      <span className="sr-only">Valoración: {score} de 5</span>
    </span>
  );
};
