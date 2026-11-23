/** Spec visión: muestra un servicio mediante un icono y una etiqueta. */
export const AmenityItem = ({ icon, label }: { icon: string; label: string }) => (
  <li className="flex items-center gap-2 text-sm">
    <span aria-hidden="true" className="text-lg">{icon}</span>
    {label}
  </li>
);
