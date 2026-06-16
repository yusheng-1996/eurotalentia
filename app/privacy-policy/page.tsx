import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How EuroTalentia collects, uses and protects your personal data. We use no advertising or analytics cookies and process your details only to match you with suitable job opportunities.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        <section className="bg-white py-14 sm:py-20">
          <div className="container-page max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 font-serif text-[2rem] font-semibold leading-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: 15 June 2026</p>

            <div className="prose-legal mt-10">
              <p>
                This Privacy Policy explains how EuroTalentia (&quot;we&quot;,
                &quot;us&quot;) collects, uses and protects your personal data
                when you use our website and apply through our application form.
                We are committed to handling your data responsibly and in line
                with the EU General Data Protection Regulation (GDPR).
              </p>

              <h2>Cookies and conversion tracking</h2>
              <p>
                We use <strong>Google Ads conversion tracking</strong> to
                measure the effectiveness of our advertising — specifically, to
                understand when a visit that originated from one of our ads
                results in a completed application. For this purpose Google may
                set cookies on your device (such as <code>_gcl_*</code>) and
                process related data as described in Google&apos;s own privacy
                policy. We use this strictly for conversion measurement.
              </p>
              <p>
                Beyond Google Ads conversion measurement, we do{" "}
                <strong>not</strong> use general analytics suites (such as Google
                Analytics), social pixels (such as Meta Pixel), or other
                remarketing technologies, and we do not build cross-site
                advertising profiles or sell your data to advertising networks.
              </p>
              <p>
                Third-party services embedded on our site (see &quot;The
                application form&quot; below) may also set strictly necessary
                cookies required for their own security and core functionality.
              </p>
              <p>
                Depending on your location, you may have the right to consent to
                or decline non-essential cookies. You can also control cookies
                through your browser settings.
              </p>

              <h2>What we collect</h2>
              <p>
                We collect only the information you choose to provide in our
                application form, which may include your name, contact details
                (such as email, phone or WhatsApp number), preferred country,
                languages, availability and details about your experience and
                the type of role you are seeking.
              </p>

              <h2>How we use your data</h2>
              <ul>
                <li>To review your application and assess suitable roles.</li>
                <li>
                  To contact you about job opportunities that may match your
                  profile.
                </li>
                <li>
                  To share relevant details with prospective employers where
                  appropriate to progress an opportunity.
                </li>
              </ul>
              <p>
                The legal basis for processing is your consent and our
                legitimate interest in providing recruitment matching services.
              </p>

              <h2>The application form</h2>
              <p>
                EuroTalentia uses FormCraft, a third-party form provider, to
                process application form submissions. The form is embedded on our
                site, and information you submit through it is processed to
                deliver your application to us. Please review FormCraft&apos;s own
                privacy terms for details of their processing and any strictly
                necessary cookies they may set.
              </p>

              <h2>Data sharing</h2>
              <p>
                We share your data only with prospective employers and trusted
                service providers necessary to deliver our recruitment service.
                We do not sell your personal data, and we do not share it with
                advertising or data-broker networks.
              </p>

              <h2>Data retention</h2>
              <p>
                We keep your data only for as long as necessary to provide our
                recruitment service or as required by law. You may ask us to
                delete your data at any time.
              </p>

              <h2>Your rights</h2>
              <p>
                Under the GDPR you have the right to access, correct, delete or
                restrict the processing of your personal data, and to withdraw
                consent at any time. To exercise these rights, contact us at{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>.
              </p>

              <h2>Important — service scope</h2>
              <p>
                EuroTalentia is a recruitment matching service only. We are not
                a visa, immigration, work-permit, legal, or relocation agency,
                and we do not provide visa services, immigration advice,
                work-permit processing, relocation approval, or job-placement
                guarantees. Candidates are responsible for confirming their own
                legal right to work before accepting any role.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy or your data? Email us at{" "}
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
