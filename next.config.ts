import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // ESLint-Warnungen ignorieren, um den Build nicht zu blockieren
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
