import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "shein.com"]
  },
  async rewrites() {
    return [
      { 
        source: "/api/products",
        destination: "http://localhost:8000/products" 
      }
    ];
  }
};

export default nextConfig;
