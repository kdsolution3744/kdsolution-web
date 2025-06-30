import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/introduction",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products/main",
        permanent: true,
      },
      {
        source: "/facilities",
        destination: "/facilities/machinery",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact/location",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
