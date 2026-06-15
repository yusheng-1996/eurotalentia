import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import JobCategories from "@/components/JobCategories";
import WhyUs from "@/components/WhyUs";
import FeaturedRoles from "@/components/FeaturedRoles";
import HowItWorks from "@/components/HowItWorks";
import ApplySection from "@/components/ApplySection";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { faqItems } from "@/components/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <JobCategories />
        <WhyUs />
        <FeaturedRoles />
        <HowItWorks />
        <ApplySection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
