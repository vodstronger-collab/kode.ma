import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ninoplayer.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/guide-installation",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/iptv-maroc",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kode.ma" }],
        destination: "https://kode.ma/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
