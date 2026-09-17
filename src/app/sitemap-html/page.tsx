import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/metadata";
import { sitemapSections } from "@/lib/navigation";

export const metadata = createMetadata({
  title: "Plan du site Kode.ma | Navigation complète 2026",
  description:
    "Plan du site HTML Kode.ma : pages principales, fonctionnalités IPTV, guide d'installation, FAQ, blog, contact et pages légales pour un maillage interne SEO optimal.",
  path: "/sitemap-html",
});

export default function SitemapHtmlPage() {
  return (
    <SiteShell showFab={false}>
      <PageHero
        label="Navigation"
        title="Plan du site Kode.ma"
        description="Toutes les pages publiques pour explorer Kode et renforcer le maillage SEO."
      />

      <section className="container-site pb-8">
        <div className="rounded-2xl border border-[#002395]/20 bg-[#e8eefc] px-5 py-4 text-sm text-[#002395]">
          Sitemap XML pour les moteurs de recherche :{" "}
          <Link href="/sitemap.xml" className="font-semibold text-[#ed2939] hover:underline">
            /sitemap.xml
          </Link>
        </div>
      </section>

      <section className="container-site grid gap-8 pb-20 md:grid-cols-3">
        {sitemapSections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-lg font-bold text-[var(--heading)]">{section.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={`${section.title}-${link.href}-${link.label}`}>
                  <Link href={link.href} className="muted hover:text-[#ed2939]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
