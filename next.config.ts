import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.co/300x200?text=Placeholder")],
  },
};

export default nextConfig;