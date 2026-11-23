import type { Host } from "@/types/listing";

/** Spec visión: presenta al anfitrión y sus años de experiencia. */
export const HostInfo = ({ host }: { host: Host }) => (
  <section aria-label="Anfitrión" className="flex items-center gap-4 border-y border-neutral-200 py-5">
    <span aria-hidden="true" className={`grid size-12 shrink-0 place-items-center rounded-full font-semibold ${host.avatarColor}`}>
      {host.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
    </span>
    <div>
      <h2 className="font-semibold">Anfitrión: {host.name}</h2>
      <p className="text-sm text-neutral-600">{host.yearsHosting} {host.yearsHosting === 1 ? "año" : "años"} de experiencia</p>
    </div>
  </section>
);
