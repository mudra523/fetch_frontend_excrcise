import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["frontend-take-home.fetch.com", "images.unsplash.com"],
  },
  transpilePackages: ["rc-util", "rc-picker"],
};

export default nextConfig;
