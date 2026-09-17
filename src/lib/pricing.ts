export type PricingPack = {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  /** Fixed WhatsApp CTA message — never changes with geo */
  whatsappMessage: string;
};

const PACK_META = [
  {
    id: "pro",
    name: "Pack Pro",
    features: [
      "HD & FHD",
      "+90 000 films",
      "+50 000 séries",
      "1 appareil",
      "App PRO incluse",
      "Support WhatsApp 24/7",
    ],
    whatsappMessage: "Bonjour Kode, je souhaite le Pack Pro à 300 dhs/an.",
  },
  {
    id: "ultra",
    name: "Expérience Ultra",
    badge: "Populaire",
    highlighted: true,
    features: [
      "HD / FHD / 4K",
      "+90 000 films",
      "+50 000 séries",
      "2 appareils (non simultanés)",
      "App PRO incluse",
      "Anti-freeze 2.2",
      "Support WhatsApp prioritaire",
    ],
    whatsappMessage: "Bonjour Kode, je souhaite l'Expérience Ultra à 450 dhs/an.",
  },
  {
    id: "vip",
    name: "Exclusif Suprême VIP",
    badge: "VIP",
    features: [
      "4K UHD",
      "Serveurs VPS dédiés",
      "+180 000 contenus VOD",
      "3 appareils (non simultanés)",
      "App PRO incluse",
      "Anti-freeze 3.0",
      "Rattrapage 7 j",
      "Activation express WhatsApp",
    ],
    whatsappMessage:
      "Bonjour Kode, je souhaite le pack Exclusif Suprême VIP à 600 dhs/an.",
  },
] as const;

const MA_PRICES = { pro: 300, ultra: 450, vip: 600 } as const;
const INTL_PRICES = { pro: 45, ultra: 59, vip: 79 } as const;

export function getPricingPacks(countryCode: string): PricingPack[] {
  const isMA = countryCode.toUpperCase() === "MA";
  const prices = isMA ? MA_PRICES : INTL_PRICES;
  const currency = isMA ? "DH" : "€";

  return PACK_META.map((meta) => ({
    id: meta.id,
    name: meta.name,
    badge: "badge" in meta ? meta.badge : undefined,
    highlighted: "highlighted" in meta ? meta.highlighted : undefined,
    features: [...meta.features],
    whatsappMessage: meta.whatsappMessage,
    price: prices[meta.id],
    currency,
    period: "/an",
  }));
}

/** Static default (Maroc) for non-client usage */
export const pricingPacks = getPricingPacks("MA");

export const compareRows = [
  { label: "Qualité max", pro: "FHD", ultra: "4K", vip: "4K UHD" },
  { label: "Appareils", pro: "1", ultra: "2*", vip: "3*" },
  { label: "Films", pro: "+90k", ultra: "+90k", vip: "+180k" },
  { label: "Séries", pro: "+50k", ultra: "+50k", vip: "+50k" },
  { label: "VPS dédiés", pro: "—", ultra: "—", vip: "Oui" },
  { label: "Anti-freeze", pro: "Standard", ultra: "2.2", vip: "3.0" },
  { label: "Rattrapage", pro: "—", ultra: "—", vip: "7 j" },
  { label: "App PRO", pro: "Incluse", ultra: "Incluse", vip: "Incluse" },
];
