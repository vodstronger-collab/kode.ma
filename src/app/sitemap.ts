import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { legalNav, mainNav } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorityFor = (path: string): { priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] } => {
    if (path === "/") return { priority: 1.0, changeFrequency: "daily" };
    if (path === "/abonnement-iptv") return { priority: 0.9, changeFrequency: "weekly" };
    if (path === "/fonctionnalites" || path === "/guide") {
      return { priority: 0.8, changeFrequency: "weekly" };
    }
    if (path.startsWith("/legal/")) return { priority: 0.3, changeFrequency: "yearly" };
    return { priority: 0.7, changeFrequency: "monthly" };
  };

  const paths = [
    ...mainNav.map((item) => item.href),
    "/sitemap-html",
    ...legalNav.map((item) => item.href),
  ];

  const unique = Array.from(new Set(paths));

  return unique.map((path) => {
    const { priority, changeFrequency } = priorityFor(path);
    return {
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}
