export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "mentions-legales",
    title: "Mentions légales",
    description: "Informations légales relatives au site Kode.ma",
    sections: [
      {
        heading: "Éditeur du site",
        paragraphs: [
          "Le site kode.ma est édité sous la marque Kode, service d'abonnement IPTV Premium destiné principalement au marché marocain.",
          "Contact : support@kode.ma — WhatsApp indiqué sur le site.",
        ],
      },
      {
        heading: "Hébergement",
        paragraphs: [
          "Le site est hébergé chez un prestataire cloud compatible avec un déploiement Vercel / CDN mondial pour garantir des temps de chargement rapides au Maroc et à l'international.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          "L'ensemble des éléments du site (textes, design, logos, structure) est protégé. Toute reproduction non autorisée est interdite.",
        ],
      },
      {
        heading: "Responsabilité",
        paragraphs: [
          "Kode s'efforce d'assurer l'exactitude des informations publiées. L'éditeur ne saurait être tenu responsable d'une mauvaise utilisation du service ou d'une interruption liée au réseau de l'utilisateur.",
        ],
      },
    ],
  },
  {
    slug: "conditions-utilisation",
    title: "Conditions d'utilisation",
    description: "Conditions générales d'utilisation du service Kode.ma",
    sections: [
      {
        heading: "Objet",
        paragraphs: [
          "Les présentes conditions régissent l'accès et l'utilisation du site kode.ma et des services d'abonnement IPTV proposés par Kode.",
        ],
      },
      {
        heading: "Services proposés",
        paragraphs: [
          "Kode propose des abonnements annuels (Pack Pro, Expérience Ultra, Exclusif Suprême VIP) avec activation et support via WhatsApp.",
        ],
      },
      {
        heading: "Obligations de l'utilisateur",
        paragraphs: [
          "L'utilisateur s'engage à utiliser le service conformément à la loi, à ne pas partager ses identifiants de façon abusive, et à respecter la politique d'appareils (non simultanés selon le pack).",
        ],
      },
      {
        heading: "Durée et résiliation",
        paragraphs: [
          "L'abonnement est souscrit pour la durée indiquée lors de la commande. Les conditions de remboursement sont détaillées dans la page Remboursement et retour.",
        ],
      },
    ],
  },
  {
    slug: "politique-utilisation-acceptable",
    title: "Politique d'utilisation acceptable",
    description: "Règles d'usage acceptable du service IPTV Kode",
    sections: [
      {
        heading: "Usage autorisé",
        paragraphs: [
          "Usage personnel et familial dans la limite du nombre d'appareils du pack souscrit, en lecture non simultanée lorsque précisé.",
        ],
      },
      {
        heading: "Usages interdits",
        paragraphs: [
          "Reselling non autorisé, partage public des accès, attaques sur l'infrastructure, scraping massif, ou toute activité illégale.",
        ],
      },
      {
        heading: "Sanctions",
        paragraphs: [
          "Tout manquement peut entraîner la suspension ou la résiliation de l'abonnement sans remboursement.",
        ],
      },
    ],
  },
  {
    slug: "conformite-rgpd",
    title: "Conformité RGPD",
    description:
      "Politique de conformité au Règlement Général sur la Protection des Données",
    sections: [
      {
        heading: "Responsable du traitement",
        paragraphs: [
          "Kode traite les données nécessaires à la fourniture du service et au support client (WhatsApp / e-mail).",
        ],
      },
      {
        heading: "Données collectées",
        paragraphs: [
          "Identité de contact, numéro WhatsApp, e-mail, informations de commande et données techniques nécessaires au support.",
        ],
      },
      {
        heading: "Base légale et finalités",
        paragraphs: [
          "Exécution du contrat d'abonnement, support, prévention de la fraude et obligations légales le cas échéant.",
        ],
      },
      {
        heading: "Droits des personnes",
        paragraphs: [
          "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en contactant support@kode.ma.",
        ],
      },
    ],
  },
  {
    slug: "politique-dmca",
    title: "Politique DMCA",
    description: "Procédure de notification et retrait de contenu",
    sections: [
      {
        heading: "Engagement Kode",
        paragraphs: [
          "Kode prend au sérieux les notifications relatives aux droits d'auteur et examine les demandes reçues de bonne foi.",
        ],
      },
      {
        heading: "Procédure de notification",
        paragraphs: [
          "Adressez une notification précisant l'œuvre concernée, l'URL ou le détail du contenu, vos coordonnées et une déclaration de bonne foi à support@kode.ma.",
        ],
      },
      {
        heading: "Contre-notification",
        paragraphs: [
          "Une contre-notification motivée peut être adressée si vous estimez qu'un retrait est injustifié. Kode évaluera la situation conformément à la procédure applicable.",
        ],
      },
    ],
  },
  {
    slug: "politique-confidentialite",
    title: "Politique de confidentialité",
    description: "Protection et traitement de vos données personnelles",
    sections: [
      {
        heading: "Collecte des informations",
        paragraphs: [
          "Nous collectons les informations que vous fournissez lors d'une demande WhatsApp, d'un formulaire de commande ou d'un échange support.",
        ],
      },
      {
        heading: "Conservation",
        paragraphs: [
          "Les données sont conservées pendant la durée nécessaire à la gestion de l'abonnement et aux obligations légales.",
        ],
      },
      {
        heading: "Sécurité",
        paragraphs: [
          "Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger vos données.",
        ],
      },
      {
        heading: "Transferts internationaux",
        paragraphs: [
          "Certains outils d'hébergement ou de messagerie peuvent impliquer des transferts hors Maroc ; Kode privilégie des prestataires présentant des garanties appropriées.",
        ],
      },
    ],
  },
  {
    slug: "remboursement-et-retour",
    title: "Remboursement et retour",
    description: "Politique de garantie satisfait et remboursement Kode",
    sections: [
      {
        heading: "Garantie 45 jours",
        paragraphs: [
          "Kode offre une garantie satisfait ou remboursé sous 45 jours à compter de l'activation, sous réserve des conditions ci-dessous.",
        ],
      },
      {
        heading: "Conditions d'éligibilité",
        paragraphs: [
          "La demande doit être formulée dans le délai de 45 jours. Les abus (partage d'identifiants, revente, violation des CGU) excluent le remboursement.",
        ],
      },
      {
        heading: "Procédure et délais",
        paragraphs: [
          "Contactez le support WhatsApp ou support@kode.ma en indiquant votre numéro de commande. Après validation, le remboursement est traité dans un délai raisonnable selon le moyen de paiement.",
        ],
      },
      {
        heading: "Garantie de continuité de service",
        paragraphs: [
          "Les serveurs sont garantis durant toute la période de l'abonnement. En cas d'incident, le support intervient pour rétablir l'accès dans les meilleurs délais.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
