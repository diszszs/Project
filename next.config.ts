import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  reactStrictMode: true,
  // This will add the metadata at the config level
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "title",
            value: "Manchester United Fan Page",
          },
          {
            key: "description",
            value: "Welcome to the ultimate Manchester United fan page!",
          },
        ],
      },
    ];
  },
};

