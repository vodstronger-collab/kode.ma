import { faqItems, type FaqItem } from "@/lib/faq";
import {
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { moroccoCityBlocks } from "@/lib/local-seo";

/** Activation / commande — étapes stables pour Schema.org HowTo */
export const activationHowToSteps = [
  {
    name: "Choisir le pack",
    text: "Sélectionnez Pack Pro (1 appareil), Expérience Ultra (2 appareils) ou Exclusif Suprême VIP (3 appareils) sur https://kode.ma/abonnement-iptv selon votre besoin HD/4K.",
  },
  {
    name: "Paiement via WhatsApp",
    text: "Contactez le support Kode sur WhatsApp, confirmez le pack choisi et validez le paiement. Aucun essai gratuit ; garantie satisfait ou remboursé sous 45 jours.",
  },
  {
    name: "Réception des identifiants et activation",
    text: "Recevez vos identifiants (serveur, username, password) et les consignes d'apps recommandées. Activez sur Smart TV, Android, Firestick, MAG ou PC en suivant le guide https://kode.ma/guide.",
  },
  {
    name: "Installation et visionnage",
    text: "Installez Nino Player, IPTV Smarters, NetIPTV ou SetIPTV, connectez-vous avec vos identifiants Kode, actualisez les listes et profitez du live HD/4K et de la VOD.",
  },
] as const;

export function buildFaqPageSchema(items: FaqItem[] = faqItems) {
  return {
    "@type": "FAQPage" as const,
    "@id": `${SITE_URL}/faq#faqpage`,
    url: `${SITE_URL}/faq`,
    name: `FAQ IPTV Maroc — ${SITE_NAME}`,
    description:
      "FAQ exhaustive IPTV Maroc Kode : appareils (Samsung, LG, Android TV, Firestick, Apple TV, PC, mobile), apps (Nino Player, IPTV Smarters, IBO Player, XCIPTV), débits Mbps, VPN, prix MAD/EUR, paiement, activation Xtream/M3U et support WhatsApp 24/7.",
    inLanguage: "fr-MA",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}

export function buildHowToSchema() {
  return {
    "@type": "HowTo" as const,
    "@id": `${SITE_URL}/guide#howto-activation`,
    name: `Comment activer un abonnement IPTV Maroc ${SITE_NAME}`,
    description:
      "Étapes pour commander, payer et activer votre abonnement IPTV Kode au Maroc : choix du pack, paiement WhatsApp, réception des identifiants et installation sur vos appareils.",
    url: `${SITE_URL}/guide`,
    inLanguage: "fr-MA",
    totalTime: "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount" as const,
      currency: "MAD",
      value: "300",
    },
    tool: [
      {
        "@type": "HowToTool" as const,
        name: "WhatsApp",
      },
      {
        "@type": "HowToTool" as const,
        name: "Application IPTV (Nino Player, IPTV Smarters, NetIPTV ou SetIPTV)",
      },
    ],
    supply: [
      {
        "@type": "HowToSupply" as const,
        name: "Connexion internet stable (fibre ou ADSL recommandée)",
      },
      {
        "@type": "HowToSupply" as const,
        name: "Appareil compatible (Smart TV, Android, Firestick, MAG, PC/Mac)",
      },
    ],
    step: activationHowToSteps.map((step, index) => ({
      "@type": "HowToStep" as const,
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${SITE_URL}/guide#etape-${index + 1}`,
    })),
  };
}

export function buildOrganizationGraph() {
  const areaServed = [
    { "@type": "Country" as const, name: "Morocco" },
    ...moroccoCityBlocks.map((block) => ({
      "@type": "City" as const,
      name: block.city,
      containedInPlace: { "@type": "Country" as const, name: "Morocco" },
    })),
  ];

  return {
    organization: {
      "@type": "Organization" as const,
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: SUPPORT_EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
      areaServed,
      sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
      contactPoint: [
        {
          "@type": "ContactPoint" as const,
          contactType: "customer support",
          telephone: `+${WHATSAPP_NUMBER}`,
          email: SUPPORT_EMAIL,
          availableLanguage: ["French", "Arabic"],
          areaServed: "MA",
        },
      ],
    },
    website: {
      "@type": "WebSite" as const,
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-MA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    service: {
      "@type": "Service" as const,
      "@id": `${SITE_URL}/#iptv-service`,
      name: "Abonnement IPTV Maroc Premium Kode",
      serviceType: "IPTV Subscription",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed,
      url: `${SITE_URL}/abonnement-iptv`,
      description:
        "Abonnement IPTV Maroc Premium : packs HD/4K, Anti-freeze, activation WhatsApp 24/7 et garantie 45 jours. Disponible à Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir et dans tout le Maroc.",
      offers: [
        {
          "@type": "Offer" as const,
          name: "Pack Pro",
          price: "300",
          priceCurrency: "MAD",
          url: `${SITE_URL}/abonnement-iptv`,
        },
        {
          "@type": "Offer" as const,
          name: "Expérience Ultra",
          price: "450",
          priceCurrency: "MAD",
          url: `${SITE_URL}/abonnement-iptv`,
        },
        {
          "@type": "Offer" as const,
          name: "Exclusif Suprême VIP",
          price: "600",
          priceCurrency: "MAD",
          url: `${SITE_URL}/abonnement-iptv`,
        },
      ],
    },
    areaServed,
  };
}
