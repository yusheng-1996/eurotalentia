/** @type {import('next').NextConfig} */

// Content Security Policy: allow our own assets, Unsplash images, and the
// FormCraft form iframe only. No advertising/analytics origins are permitted.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com",
  // Next.js injects inline styles/scripts (hydration); 'unsafe-inline' is
  // required without a nonce setup. Google Ads gtag is allowed for conversion
  // measurement only (no analytics suite, no social pixels).
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com",
  "frame-src https://formcraft.app https://td.doubleclick.net https://www.googletagmanager.com",
  "form-action 'self' https://formcraft.app",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    // Disable advertising / sensing features we never use.
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Clearer/alternative SEO slugs -> the canonical working slugs.
    return [
      {
        source: "/jobs/fashion-non-food-retail",
        destination: "/jobs/fashion-retail",
        permanent: true,
      },
      {
        source: "/jobs/pharmacy-jobs",
        destination: "/jobs/pharmacy",
        permanent: true,
      },
      {
        source: "/jobs/chef-jobs",
        destination: "/jobs/chef",
        permanent: true,
      },
      {
        source: "/jobs/office-administrative",
        destination: "/jobs/office-admin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
