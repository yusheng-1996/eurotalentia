import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the EuroTalentia website and recruitment matching service, including our service scope and important disclaimers.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        <section className="bg-white py-14 sm:py-20">
          <div className="container-page max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 font-serif text-[2rem] font-semibold leading-tight text-ink sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: 15 June 2026</p>

            <div className="prose-legal mt-10">
              <p>
                These Terms of Service govern your use of the EuroTalentia
                website and our recruitment matching service. By using our site
                or submitting an application, you agree to these terms.
              </p>

              <h2>Our service</h2>
              <p>
                EuroTalentia is a recruitment matching service. We help connect
                candidates with potential employers across Europe based on the
                information you provide. Using our service is free for
                candidates.
              </p>

              <h2>Important — what we do not provide</h2>
              <p>
                <strong>
                  EuroTalentia is a recruitment matching service only. We are
                  not a visa, immigration, work-permit, legal, or relocation
                  agency. We do not provide visa services, immigration advice,
                  work-permit processing, relocation approval, or job-placement
                  guarantees. Candidates are responsible for confirming their
                  own legal right to work before accepting any role.
                </strong>
              </p>
              <p>
                We do not guarantee employment, interviews, visas, relocation
                approval, or job placement. Hiring decisions are made solely by
                the employers we work with.
              </p>

              <h2>Your responsibilities</h2>
              <ul>
                <li>
                  Provide accurate, truthful and up-to-date information in your
                  application.
                </li>
                <li>
                  Confirm your own eligibility and legal right to work in your
                  preferred country.
                </li>
                <li>
                  Use the site lawfully and not submit information on behalf of
                  another person without their consent.
                </li>
              </ul>

              <h2>Third-party form and links</h2>
              <p>
                Our application form is provided by a third-party form provider
                (FormCraft). Our site may link to or embed third-party services
                that have their own terms and privacy practices, for which we
                are not responsible.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, EuroTalentia is not
                liable for any loss arising from your use of our service, from
                employer decisions, or from your reliance on information
                provided through the site.
              </p>

              <h2>Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use of
                the site after changes constitutes acceptance of the updated
                terms.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Email us at{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
