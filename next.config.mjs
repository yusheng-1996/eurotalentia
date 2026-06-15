/** @type {import('next').NextConfig} */
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
