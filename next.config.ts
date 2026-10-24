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
        source: "/termes-et-conditions",
        destination: "/legal/conditions-utilisation",
        permanent: true,
      },
      {
        source: "/termes-et-conditions/",
        destination: "/legal/conditions-utilisation",
        permanent: true,
      },
      {
        source: "/mentions-legales",
        destination: "/legal/mentions-legales",
        permanent: true,
      },
      {
        source: "/politique-de-confidentialite",
        destination: "/legal/politique-confidentialite",
        permanent: true,
      },
      {
        source: "/cgv",
        destination: "/legal/conditions-utilisation",
        permanent: true,
      },
      {
        source: "/cgu",
        destination: "/legal/conditions-utilisation",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kode.ma" }],
        destination: "https://kode.ma/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kode-ma.vercel.app" }],
        destination: "https://kode.ma/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
