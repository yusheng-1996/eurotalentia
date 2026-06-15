import { ClipboardEdit, MapPin, PhoneCall, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardEdit,
    title: "Fill in the form",
    body: "Share a few quick details about yourself. It only takes a couple of minutes.",
  },
  {
    icon: MapPin,
    title: "Tell us your preferences",
    body: "Let us know your preferred country, role type, languages and availability.",
  },
  {
    icon: PhoneCall,
    title: "Speak with a recruiter",
    body: "If there's a match, a dedicated recruiter reaches out to discuss the details.",
  },
  {
    icon: BadgeCheck,
    title: "Get matched",
    body: "We connect you with suitable opportunities and support you to interview.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Simple process</span>
          <h2 className="section-title mt-4">How it works</h2>
          <p className="mt-3 text-muted">
            Four straightforward steps from application to opportunity.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="relative rounded-2xl border border-haze bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-serif text-4xl font-semibold text-haze">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a href="#apply" className="btn-primary">
            Start your application
          </a>
        </div>
      </div>
    </section>
  );
}
