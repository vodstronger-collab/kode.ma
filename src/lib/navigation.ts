export type NavItem = {
  href: string;
  label: string;
  seoLabel?: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Accueil", seoLabel: "Meilleur IPTV Maroc — Accueil" },
  { href: "/abonnement-iptv", label: "Tarifs", seoLabel: "Abonnement IPTV Maroc — Tarifs" },
  { href: "/fonctionnalites", label: "Fonctionnalités", seoLabel: "Fonctionnalités IPTV Premium" },
  { href: "/guide", label: "Guide", seoLabel: "IPTV Smart TV Maroc — Guide" },
  { href: "/faq", label: "FAQ", seoLabel: "FAQ IPTV Maroc" },
  { href: "/blog", label: "Blog", seoLabel: "Guides & actualités IPTV" },
  { href: "/contact", label: "Contact", seoLabel: "Contact Kode — Support WhatsApp" },
];

export const legalNav: NavItem[] = [
  { href: "/legal/mentions-legales", label: "Mentions légales" },
  { href: "/legal/conditions-utilisation", label: "Conditions d'utilisation" },
  { href: "/legal/politique-utilisation-acceptable", label: "Utilisation acceptable" },
  { href: "/legal/conformite-rgpd", label: "Conformité RGPD" },
  { href: "/legal/politique-dmca", label: "Politique DMCA" },
  { href: "/legal/politique-confidentialite", label: "Confidentialité" },
  { href: "/legal/remboursement-et-retour", label: "Remboursement" },
];

export const sitemapSections = [
  {
    title: "Pages principales",
    links: mainNav.map((item) => ({
      href: item.href,
      label: item.seoLabel ?? item.label,
    })),
  },
  {
    title: "Ressources SEO & support",
    links: [
      { href: "/sitemap-html", label: "Plan du site HTML" },
      { href: "/guide", label: "Guide d'installation IPTV" },
      { href: "/faq", label: "Foire aux questions" },
      { href: "/blog", label: "Blog IPTV Maroc" },
      { href: "/contact", label: "Support & contact" },
    ],
  },
  {
    title: "Informations légales",
    links: legalNav.map((item) => ({
      href: item.href,
      label: item.label,
    })),
  },
];
