import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SeoContentBlock } from "@/components/seo/SeoContentBlock";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";
import { featurePillars } from "@/lib/fonctionnalites";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "Fonctionnalités IPTV | Meilleur IPTV Maroc, Serveur Stable & 4K - Kode",
  description:
    "Infrastructure Kode : serveurs VPS dédiés, codec H.265 4K, Anti-freeze 2.2, EPG dynamique et routage Smart-OTT pour un IPTV Maroc premium ultra-stable.",
  path: "/fonctionnalites",
  keywords: [
    "Meilleur IPTV Maroc",
    "Serveur IPTV stable",
    "IPTV 4K Maroc",
    "Anti-freeze 2.2",
    "abonnement IPTV Maroc",
  ],
});

export default function FonctionnalitesPage() {
  return (
    <SiteShell>
      <PageHero
        label="Technologie"
        title="Fonctionnalités Kode — Technologie IPTV Premium"
        description="VPS, H.265, Anti-freeze, EPG et Smart-OTT au service d'un streaming stable."
      />

      <SeoContentBlock className="container-site pb-10">
        <p>{seoContent.fonctionnalitesIntro}</p>
      </SeoContentBlock>

      <section className="container-site pb-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featurePillars.map((pillar) => (
            <article key={pillar.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-[var(--heading)]">{pillar.title}</h3>
              <p className="muted mt-3 text-sm leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site pb-20">
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            WhatsApp
          </a>
          <Link href="/abonnement-iptv" className="btn-secondary">
            Voir les forfaits
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
