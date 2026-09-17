import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const DEFAULT_TITLE =
  "IPTV Maroc Premium 2026 | +45 000 Chaînes HD/4K - Kode";
export const DEFAULT_DESCRIPTION =
  "Découvrez Kode, le leader de l'abonnement IPTV Maroc Premium. Profitez d'un accès 4K ultra-stable, anti-freeze et d'un support 24/7 sur tous vos écrans.";
export const DEFAULT_KEYWORDS = [
  "IPTV Maroc",
  "abonnement IPTV Maroc",
  "meilleur IPTV Maroc",
  "fournisseur IPTV Maroc",
  "acheter IPTV Maroc",
  "recharge IPTV Maroc",
  "IPTV 4K Maroc",
  "IPTV HD Maroc",
  "IPTV Casablanca",
  "IPTV Rabat",
  "IPTV Marrakech",
  "IPTV Tanger",
  "IPTV Fès",
  "IPTV Agadir",
];

export const OG_IMAGE = "/kode.png";

export function absoluteUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_MA",
      type: "website",
      images: [
        {
          url: absoluteUrl(OG_IMAGE),
          width: 1672,
          height: 941,
          alt: `${SITE_NAME} — IPTV Maroc Premium`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(OG_IMAGE)],
    },
  };
}
