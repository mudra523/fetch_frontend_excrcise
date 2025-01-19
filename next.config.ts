import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    esmExternals: "loose", 
  },
};

export default nextConfig;
