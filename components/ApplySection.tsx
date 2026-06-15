import { ShieldCheck, Clock3, Lock } from "lucide-react";
import FormCraftEmbed from "./FormCraftEmbed";

const reassurances = [
  { icon: ShieldCheck, label: "Free for candidates" },
  { icon: Clock3, label: "Response within 24 hours" },
  { icon: Lock, label: "Your details are kept confidential" },
];

export default function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Application</span>
            <h2 className="section-title mt-4">Apply for jobs across Europe</h2>
            <p className="mt-4 text-muted">
              Complete the form below. It only takes a few minutes. If your
              profile matches available opportunities, our team will contact
              you.
            </p>

            <ul className="mt-8 space-y-4">
              {reassurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-haze bg-white p-4 shadow-card sm:p-6">
            <FormCraftEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
