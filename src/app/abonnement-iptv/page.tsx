import Link from "next/link";
import { LocalSeo } from "@/components/LocalSeo";
import { Pricing } from "@/components/Pricing";
import { TarifsSeoArticle } from "@/components/TarifsSeoArticle";
import { SiteShell } from "@/components/layout/SiteShell";
import { SeoContentBlock } from "@/components/seo/SeoContentBlock";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "Abonnement IPTV Maroc Premium | Tarifs & Formules 2026 - Kode",
  description:
    "Tarifs IPTV Maroc 2026 : Pack Pro 300 dhs, Expérience Ultra 450 dhs, VIP 600 dhs/an. Acheter IPTV Maroc à Casablanca, Rabat, Marrakech et partout au Maroc — garantie 45 jours, WhatsApp 24/7.",
  path: "/abonnement-iptv",
  keywords: [
    "abonnement IPTV Maroc",
    "tarifs IPTV Maroc",
    "acheter IPTV Maroc",
    "prix IPTV",
    "IPTV 4K Maroc",
    "IPTV Casablanca",
    "IPTV Rabat",
    "IPTV Marrakech",
    "IPTV Tanger",
    "IPTV Agadir",
  ],
});

export default function AbonnementPage() {
  return (
    <SiteShell>
      <section className="section-pad !pb-8 !pt-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Produit</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--heading)] sm:text-4xl md:text-5xl">
            Abonnement IPTV Maroc Premium : Nos Tarifs & Formules 2026
          </h1>
        </div>
      </section>

      <SeoContentBlock className="container-site pb-8">
        <p>{seoContent.abonnementIntro}</p>
      </SeoContentBlock>

      <Pricing showHeader={false} />

      <SeoContentBlock className="container-site py-10">
        {seoContent.abonnementSeo.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </SeoContentBlock>

      <section className="container-site pb-8">
        <div className="glass flex flex-col items-start gap-4 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-[var(--heading)]">
              Acheter IPTV Maroc via WhatsApp
            </h2>
            <p className="muted mt-1 text-sm">Activation rapide · Garantie 45 jours</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
            <Link href="/#commander" className="btn-secondary">
              Formulaire #commander
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/guide" className="text-[var(--france-red-text)] hover:underline">
            Guide d&apos;installation
          </Link>
          <Link href="/fonctionnalites" className="text-[var(--france-red-text)] hover:underline">
            Fonctionnalités techniques
          </Link>
          <Link href="/" className="text-[var(--france-red-text)] hover:underline">
            Accueil
          </Link>
        </div>
      </section>

      <div className="below-fold">
        <TarifsSeoArticle />
        <LocalSeo />
      </div>
    </SiteShell>
  );
}
