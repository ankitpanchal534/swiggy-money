import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // {{ edit_1 }} Allow any hostname
        port: '', // Optional: specify if needed
        pathname: '/**', // Optional: specify if needed
      },
    ],
  },
};

export default nextConfig;
