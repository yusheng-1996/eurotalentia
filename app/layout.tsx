import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

// Configurable so the canonical/OG base can be set per environment until the
// final domain is connected. Set NEXT_PUBLIC_SITE_URL in Netlify env vars.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eurotalentia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EuroTalentia — Flexible Job Opportunities Across Europe",
    template: "%s | EuroTalentia",
  },
  description:
    "EuroTalentia connects candidates with entry-level, professional, flexible and relocation-friendly roles across 25+ European countries. Free for candidates, with recruiter support from application to interview.",
  keywords: [
    "jobs in Europe",
    "European recruitment",
    "flexible jobs",
    "part-time jobs Europe",
    "entry level jobs",
    "relocation jobs Europe",
    "recruitment agency Europe",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "EuroTalentia",
    title: "Find Flexible Job Opportunities Across Europe — EuroTalentia",
    description:
      "Tell us your skills, preferred country, language and availability. Our recruitment team matches you with suitable opportunities across Europe. Free for candidates.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "EuroTalentia — recruitment across Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Flexible Job Opportunities Across Europe — EuroTalentia",
    description:
      "Entry-level to professional roles across 25+ European countries. Free for candidates, recruiter support included.",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
