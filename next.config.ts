import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["frontend-take-home.fetch.com", "images.unsplash.com"],
  },
  transpilePackages: ["rc-util"],
};

export default nextConfig;
