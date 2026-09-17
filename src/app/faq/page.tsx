import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SeoContentBlock } from "@/components/seo/SeoContentBlock";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "FAQ IPTV Maroc | Appareils, Prix MAD/EUR, Activation Xtream - Kode",
  description:
    "FAQ complète Kode : Smart TV Samsung/LG, Firestick, Apple TV, apps IPTV Smarters & Nino Player, débit 4K, VPN, prix 300–600 DH / 45–79 €, activation WhatsApp et garantie 45 jours.",
  path: "/faq",
  keywords: [
    "FAQ IPTV Maroc",
    "IPTV Smart TV Maroc",
    "IPTV Smarters Maroc",
    "abonnement IPTV prix",
    "activation IPTV WhatsApp",
    "Xtream Codes M3U",
  ],
});

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero title="Foire aux questions" label="FAQ" />
      <SeoContentBlock className="container-site pb-4">
        <p>{seoContent.faqIntro}</p>
      </SeoContentBlock>
      <FAQ compact title="Réponses Kode" />
      <section className="container-site flex flex-wrap gap-4 pb-20 text-sm">
        <Link href="/contact" className="text-[var(--france-red-text)] hover:underline">
          Contact
        </Link>
        <Link href="/blog" className="text-[var(--france-red-text)] hover:underline">
          Blog
        </Link>
      </section>
    </SiteShell>
  );
}
