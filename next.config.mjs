/** @type {import('next').NextConfig} */

// Content Security Policy: allow our own assets, Unsplash images, and the
// FormCraft form iframe only. No advertising/analytics origins are permitted.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: https://images.unsplash.com",
  // Next.js injects inline styles/scripts (hydration); 'unsafe-inline' is
  // required without a nonce setup. No third-party script origins are allowed.
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://formcraft.app",
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
