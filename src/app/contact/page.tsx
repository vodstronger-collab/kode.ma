import { TrialFormSection } from "@/components/TrialFormSection";
import { TrustBadge } from "@/components/TrustBadge";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  SUPPORT_EMAIL,
  whatsappUrl,
} from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "Contact Kode | Support WhatsApp 24/7 & Garantie 45 jours",
  description:
    "Contact WhatsApp/email Kode, support 24/7, garantie 45 jours, activation guidée de votre abonnement IPTV Maroc.",
  path: "/contact",
  keywords: ["contact Kode", "support WhatsApp IPTV", "garantie 45 jours"],
});

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        label="Support"
        title="Support & contact Kode"
        description={seoContent.contactIntro}
      />

      <section className="container-site grid gap-4 pb-8 md:grid-cols-3">
        <a
          href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-6 transition hover:border-[var(--france-red-text)]/40"
        >
          <h2 className="font-display text-lg font-bold text-[var(--heading)]">WhatsApp 24/7</h2>
          <p className="muted mt-2 text-sm">Activation et assistance en direct.</p>
        </a>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="glass rounded-2xl p-6 transition hover:border-[var(--france-red-text)]/40"
        >
          <h2 className="font-display text-lg font-bold text-[var(--heading)]">E-mail</h2>
          <p className="muted mt-2 text-sm">{SUPPORT_EMAIL}</p>
        </a>
        <div className="glass flex items-center rounded-2xl p-6">
          <TrustBadge />
        </div>
      </section>

      <TrialFormSection />
    </SiteShell>
  );
}
