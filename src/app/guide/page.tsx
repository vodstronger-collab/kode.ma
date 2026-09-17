import { Accordion } from "@/components/ui/Accordion";
import { NinoPlayerQuickGuide, RecommendedApps } from "@/components/InstallationGuide";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SeoContentBlock } from "@/components/seo/SeoContentBlock";
import { whatsappUrl } from "@/lib/constants";
import { deviceGuides, universalSteps } from "@/lib/installation";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "Guide IPTV Maroc | Smart TV, Android, Firestick & Smarters - Kode",
  description:
    "Tutoriels Smart TV (NetIPTV/SetIPTV), Android, Firestick, Smarters, MAG pour installer votre abonnement IPTV Kode au Maroc.",
  path: "/guide",
  keywords: [
    "IPTV Smart TV Maroc",
    "IPTV Android Maroc",
    "IPTV Firestick Maroc",
    "IPTV Smarters Maroc",
    "guide installation IPTV",
  ],
});

export default function GuidePage() {
  return (
    <SiteShell>
      <PageHero
        label="HowTo"
        title="Guide d'installation IPTV — Tous appareils"
        description="Installez Kode sur Smart TV, Android, Firestick, Smarters et MAG."
      />

      <SeoContentBlock className="container-site pb-8">
        <p>{seoContent.guideIntro}</p>
      </SeoContentBlock>

      <section className="container-site max-w-3xl space-y-6 pb-20">
        <RecommendedApps />
        <NinoPlayerQuickGuide />
        <Accordion
          items={deviceGuides.map((guide) => ({
            title: guide.title,
            content: (
              <ol className="list-decimal space-y-2 pl-5">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ),
          }))}
        />
        <Accordion
          items={[
            {
              title: universalSteps.title,
              content: (
                <ol className="list-decimal space-y-2 pl-5">
                  {universalSteps.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ),
            },
          ]}
        />
        <a
          href={whatsappUrl("Bonjour Kode, j'ai besoin d'aide pour l'installation IPTV.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Assistance WhatsApp
        </a>
      </section>
    </SiteShell>
  );
}
