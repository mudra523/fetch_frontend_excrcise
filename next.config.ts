import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["frontend-take-home.fetch.com", "images.unsplash.com", "fetch-frontend-excrcise.vercel.app", "fetch-frontend-excrcise-git-main-mudra523s-projects.vercel.app", "fetch-frontend-excrcise-qg1y5kxkf-mudra523s-projects.vercel.app"],
  },
  transpilePackages: ["rc-util", "rc-picker"],
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
};

export default nextConfig;
