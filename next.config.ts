// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config: { module: { rules: { test: RegExp; include: RegExp; use: { loader: any; options: { presets: string[][]; }; }; }[]; }; }, { }: any) => {
    // Add a rule to transpile rc-util package
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/rc-util/,
      use: {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["next/babel"]],
        },
      },
    });
    return config;
  },
};

export default nextConfig;
