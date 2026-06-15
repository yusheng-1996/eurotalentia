import {
  DoorOpen,
  Sparkles,
  CalendarClock,
  GraduationCap,
  Headset,
  MapPinned,
  type LucideIcon,
} from "lucide-react";

type Benefit = { icon: LucideIcon; title: string; body: string };

const benefits: Benefit[] = [
  {
    icon: DoorOpen,
    title: "Open to all backgrounds",
    body: "Whatever your education or work history, there's a path for you. We match people, not just CVs.",
  },
  {
    icon: Sparkles,
    title: "No-experience roles available",
    body: "Plenty of our positions are entry-level, so you can start earning and building skills right away.",
  },
  {
    icon: CalendarClock,
    title: "Flexible schedules",
    body: "Part-time, full-time and flexible shifts — tell us your availability and we'll respect it.",
  },
  {
    icon: GraduationCap,
    title: "Training provided",
    body: "Selected roles include training, so you can step into a new sector with confidence.",
  },
  {
    icon: Headset,
    title: "Recruiter support",
    body: "A dedicated recruiter guides you from application through to interview — you're never on your own.",
  },
  {
    icon: MapPinned,
    title: "Opportunities across Europe",
    body: "Work close to home or relocate. We recruit in 25+ countries and help with the move where relevant.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why EuroTalentia</span>
          <h2 className="section-title mt-4">
            Opportunities built around you, at every stage
          </h2>
          <p className="mt-3 text-muted">
            We focus on what matters to candidates: access, flexibility and
            real human support.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-haze bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
