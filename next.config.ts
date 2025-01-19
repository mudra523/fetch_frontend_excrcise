import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ["rc-util"],
};

export default nextConfig;
