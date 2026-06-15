import { Globe2, Layers, Clock3, MessagesSquare } from "lucide-react";

const items = [
  { icon: Globe2, label: "25+ European countries" },
  { icon: Layers, label: "Entry-level to professional roles" },
  { icon: Clock3, label: "Flexible, part-time & full-time options" },
  { icon: MessagesSquare, label: "Response within 24 hours" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-haze bg-white">
      <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-haze">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 py-5 sm:px-4 lg:px-6"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-dark">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-ink">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
