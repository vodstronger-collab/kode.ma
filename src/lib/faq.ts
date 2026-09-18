export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

/**
 * FAQ exhaustive — source unique pour l’UI et le JSON-LD FAQPage.
 * Réponses chiffrées et directes (GEO / Answer Engines).
 */
export const faqCategories: FaqCategory[] = [
  {
    id: "technique",
    title: "Technique & compatibilité",
    items: [
      {
        question: "Quels sont les appareils compatibles avec Kode ?",
        answer:
          "Kode fonctionne sur Smart TV Samsung et LG, Android TV / Google TV, Amazon Fire TV Stick / Fire TV, Apple TV (apps IPTV compatibles Xtream/M3U), boîtiers MAG / STB, PC Windows, Mac, smartphones et tablettes Android et iOS. Un seul abonnement couvre tous ces écrans dans la limite du pack (1, 2 ou 3 appareils non simultanés).",
      },
      {
        question: "Kode est-il compatible Smart TV Samsung et LG ?",
        answer:
          "Oui. Sur Samsung et LG, installez NetIPTV ou SetIPTV depuis le store de la TV, puis connectez-vous avec les identifiants Xtream Codes reçus après activation WhatsApp. Le guide détaillé est sur https://kode.ma/guide.",
      },
      {
        question: "Kode fonctionne-t-il sur Android TV et Fire TV Stick ?",
        answer:
          "Oui. Sur Android TV / Google TV et Fire TV Stick, utilisez Nino Player, IPTV Smarters, XCIPTV ou une app équivalente. Ajoutez un compte Xtream Codes (serveur, username, password) fourni par Kode. Firestick : activez les sources inconnues si vous installez via Downloader.",
      },
      {
        question: "Kode est-il compatible Apple TV, iPhone et iPad ?",
        answer:
          "Oui. Sur Apple TV, iPhone et iPad, utilisez une application IPTV compatible Xtream Codes ou playlist M3U (selon l’App Store de votre région). Après paiement, le support WhatsApp vous indique l’app et le format d’identifiants adaptés à iOS / tvOS.",
      },
      {
        question: "Quelles applications IPTV utiliser avec Kode ?",
        answer:
          "Applications recommandées : Nino Player (Android / Smart TV — ninoplayer.com), IPTV Smarters Pro, IBO Player, XCIPTV, NetIPTV, SetIPTV (Samsung / LG), TiviMate (Android). Kode fournit en général une connexion Xtream Codes ; une URL M3U peut être communiquée selon l’appareil. Le support WhatsApp valide l’app optimale pour votre écran.",
      },
      {
        question: "Quelle est la différence entre Xtream Codes et M3U ?",
        answer:
          "Xtream Codes = serveur + username + password (login dans l’app). M3U / M3U8 = URL de playlist à coller dans le lecteur. Kode active le plus souvent Xtream Codes ; le format M3U est fourni sur demande pour certains appareils. Les deux donnent accès au même bouquet live + VOD selon le pack.",
      },
      {
        question: "Quelle connexion Internet minimale est requise ?",
        answer:
          "Débits recommandés (stables, pas en pic théorique) : HD ≈ 8 Mbps, Full HD ≈ 15 Mbps, 4K ≈ 25 Mbps minimum. Fibre optique = meilleur résultat. ADSL stable fonctionne en HD/FHD. 4G/5G mobile : possible si le débit réel reste au-dessus de ces seuils et que la latence est faible ; évitez le partage saturé en heures de pointe.",
      },
      {
        question: "Kode fonctionne-t-il en Fibre, ADSL, 4G et 5G ?",
        answer:
          "Oui. Fibre (Maroc Telecom, Orange, inwi, etc.) est idéale pour le 4K Anti-freeze. ADSL convient au HD/FHD si le débit réel ≥ 8–15 Mbps. 4G/5G convient en mobilité ou en secours si le signal est stable. En cas de freeze, baissez la qualité dans l’app ou passez en Ultra/VIP (infrastructure renforcée).",
      },
      {
        question: "Kode est-il compatible avec un VPN ?",
        answer:
          "Oui. Vous pouvez utiliser un VPN (WireGuard, OpenVPN, etc.) avec Kode. Utile à l’étranger, en diaspora, ou si votre FAI bride certains flux. Choisissez un serveur VPN proche et rapide : un VPN lent peut faire baisser le débit sous 8–25 Mbps et dégrader le 4K. Sur réseau fibre local stable au Maroc, le VPN n’est en général pas obligatoire.",
      },
      {
        question: "Combien d'appareils puis-je utiliser en même temps ?",
        answer:
          "Pack Pro : 1 appareil. Expérience Ultra : 2 appareils. Exclusif Suprême VIP : 3 appareils. Dans tous les cas, la lecture simultanée sur plusieurs écrans n’est pas autorisée (appareils non simultanés). Dépasser la limite peut entraîner une coupure de session.",
      },
      {
        question: "Le service propose-t-il le catch-up, l’EPG et la VOD ?",
        answer:
          "Oui, selon l’application et le pack : live TV (+45 000 chaînes en cible boutique), VOD films/séries (environ +90 000 films / +50 000 séries en Ultra ; jusqu’à +180 000 contenus VOD en VIP), EPG, et rattrapage / catch-up jusqu’à 7 jours sur le pack VIP quand l’app et le bouquet le supportent (ex. IPTV Smarters, Nino Player).",
      },
    ],
  },
  {
    id: "offres",
    title: "Offres, prix & paiement",
    items: [
      {
        question: "Quels sont les prix Kode au Maroc (MAD) ?",
        answer:
          "Tarifs annuels Maroc (MAD) : Pack Pro = 300 DH/an (HD/FHD, 1 appareil). Expérience Ultra = 450 DH/an (jusqu’à 4K, 2 appareils, Anti-freeze 2.2). Exclusif Suprême VIP = 600 DH/an (4K UHD, VPS dédiés, Anti-freeze 3.0, 3 appareils, VOD élargie). Voir https://kode.ma/abonnement-iptv.",
      },
      {
        question: "Quels sont les prix Kode en Europe et à l’international (EUR) ?",
        answer:
          "Pour les visiteurs hors Maroc, les tarifs annuels affichés sont en EUR : Pack Pro = 45 €/an, Expérience Ultra = 59 €/an, Exclusif Suprême VIP = 79 €/an. Les équivalents Maroc restent 300 / 450 / 600 DH. Le site adapte l’affichage selon la localisation ; les messages WhatsApp de commande restent basés sur l’offre Kode.",
      },
      {
        question: "Que comprennent les packs Pro, Ultra et VIP ?",
        answer:
          "Pro (300 DH / 45 €) : HD/FHD, 1 écran, App PRO, support WhatsApp. Ultra (450 DH / 59 €) : jusqu’à 4K, 2 écrans, Anti-freeze 2.2, support prioritaire. VIP (600 DH / 79 €) : 4K UHD, serveurs VPS dédiés, Anti-freeze 3.0, rattrapage 7 j, 3 écrans, VOD étendue, activation express. Tous : abonnement annuel, pas d’essai gratuit, garantie 45 jours.",
      },
      {
        question: "Quels sont les modes de paiement acceptés ?",
        answer:
          "Le paiement se finalise via WhatsApp avec le support Kode. Au Maroc : virement bancaire et solutions de paiement mobile / wallet selon les instructions du conseiller (ex. virement vers la banque indiquée au moment de la commande). À l’international : modes confirmés au cas par cas par le support (virement ou e-wallet disponible). Aucun paiement n’est demandé hors du canal WhatsApp / e-mail officiel Kode (support@kode.ma).",
      },
      {
        question: "Y a-t-il un test gratuit ou une période d’essai ?",
        answer:
          "Non. Kode ne propose pas d’essai gratuit ni de période d’essai. La confiance repose sur une garantie satisfait ou remboursé sous 45 jours après activation, et sur des serveurs garantis pendant toute la durée de l’abonnement annuel.",
      },
      {
        question: "Les abonnements sont-ils mensuels ou annuels ?",
        answer:
          "Les formules affichées sur kode.ma sont annuelles (prix /an) : 300, 450 ou 600 DH au Maroc ; 45, 59 ou 79 € à l’international. Cela évite les reconductions mensuelles opaques. Pour toute autre durée, demandez explicitement au support WhatsApp.",
      },
      {
        question: "Puis-je changer de pack après l’achat ?",
        answer:
          "Oui, via WhatsApp. Un upgrade (Pro → Ultra ou VIP) est possible en réglant la différence selon les conditions du moment. Downgrade et cas particuliers : le support étudie au cas par cas. Conservez votre numéro de commande pour accélérer le traitement.",
      },
      {
        question: "La garantie 45 jours couvre quoi exactement ?",
        answer:
          "Dans les 45 jours suivant l’activation, si le service ne vous convient pas, vous pouvez demander un remboursement selon les conditions de la page Remboursement et retour. Les serveurs sont garantis sur toute la durée de l’abonnement. Contact : WhatsApp ou support@kode.ma avec votre numéro de commande.",
      },
    ],
  },
  {
    id: "activation",
    title: "Activation & support",
    items: [
      {
        question: "En combien de temps l’abonnement est-il activé après le paiement ?",
        answer:
          "Après confirmation du paiement sur WhatsApp, l’activation est en général réalisée en 5 à 30 minutes, 24/7. Dans de rares pics de demande, le délai peut aller jusqu’à quelques heures. Vous recevez alors vos identifiants et le guide d’apps.",
      },
      {
        question: "Comment recevoir les identifiants, codes M3U ou Xtream ?",
        answer:
          "Après activation, Kode envoie sur WhatsApp : URL/hôte du serveur, username, password (Xtream Codes), et si besoin l’URL M3U/M3U8. Ne partagez jamais ces accès. Installez l’app recommandée (Nino Player, Smarters, IBO Player, XCIPTV, NetIPTV, etc.), connectez-vous, actualisez les listes. Tutoriels : https://kode.ma/guide.",
      },
      {
        question: "Comment fonctionne l’activation WhatsApp étape par étape ?",
        answer:
          "1) Choisissez Pro, Ultra ou VIP sur https://kode.ma/abonnement-iptv. 2) Écrivez sur WhatsApp (+212 600-184186) en indiquant le pack. 3) Validez le paiement selon les instructions. 4) Recevez Xtream/M3U sous 5–30 min en moyenne. 5) Installez l’app et regardez. HowTo structuré aussi sur le site pour les moteurs IA.",
      },
      {
        question: "Comment contacter le support client en cas de problème ?",
        answer:
          "Support principal : WhatsApp 24/7 via https://wa.me/212600184186 (ou le bouton Commander sur kode.ma). E-mail : support@kode.ma. Indiquez pack, appareil, app utilisée et une capture d’erreur. Objectif de première réponse : rapide, souvent sous quelques minutes hors saturation.",
      },
      {
        question: "Que faire si les chaînes ne chargent pas ou freeze ?",
        answer:
          "Vérifiez le débit réel (8 / 15 / 25 Mbps selon HD / FHD / 4K), redémarrez box/routeur, changez de DNS ou testez sans VPN puis avec VPN rapide, baissez la qualité dans l’app, actualisez la playlist. Si le problème continue, contactez WhatsApp avec votre username (sans mot de passe en public) pour un check serveur / Anti-freeze.",
      },
      {
        question: "Comment réinstaller Kode sur un nouvel appareil ?",
        answer:
          "Installez une app compatible sur le nouvel écran, reconnectez Xtream ou M3U avec les mêmes identifiants, dans la limite de votre pack (1/2/3). Désactivez l’ancien appareil si vous avez atteint la limite. Besoin d’aide : WhatsApp 24/7 avec le modèle de l’appareil (Samsung, LG, Firestick, etc.).",
      },
      {
        question: "Kode propose-t-il un support en français et en arabe ?",
        answer:
          "Oui. Le site est en français (fr-MA). Le support client WhatsApp et e-mail répond en français et en arabe. Fuseau principal : Maroc ; assistance annoncée 24/7 pour activation et dépannage.",
      },
      {
        question: "Où trouver le guide d’installation et la FAQ complète ?",
        answer:
          "Guide appareils (Smart TV, Android, Firestick, Smarters, MAG) : https://kode.ma/guide. FAQ : https://kode.ma/faq. Tarifs : https://kode.ma/abonnement-iptv. Contact : https://kode.ma/contact. Fichier pour moteurs IA : https://kode.ma/llms.txt.",
      },
    ],
  },
  {
    id: "contenu",
    title: "Contenu & usage",
    items: [
      {
        question: "Quelles chaînes et quels contenus sont inclus ?",
        answer:
          "Bouquet large : chaînes marocaines, arabes, françaises, UK et internationales, sport, cinéma, jeunesse, et VOD films/séries selon le pack. Volume annoncé côté offre : +45 000 chaînes HD/4K en cible marketing ; VOD à partir de +90 000 films / +50 000 séries (Ultra), jusqu’à +180 000 contenus VOD (VIP). Le détail exact dépend du pack actif.",
      },
      {
        question: "Puis-je regarder le sport et les chaînes UK ?",
        answer:
          "Oui. Kode inclut un large volet sport et des chaînes UK / internationales selon disponibilité du bouquet, en plus des chaînes Maroc et arabes. Pour un usage sport intensif en 4K, privilégiez Ultra (450 DH) ou VIP (600 DH) avec débit ≥ 25 Mbps.",
      },
      {
        question: "Nino Player est-il recommandé avec Kode ?",
        answer:
          "Oui. Nino Player est une app recommandée pour Android et Smart TV : https://ninoplayer.com et Google Play (com.nino.player). Après activation, ajoutez vos Xtream Codes Kode. Alternatives : IPTV Smarters, IBO Player, XCIPTV, NetIPTV, SetIPTV.",
      },
      {
        question: "Kode est-il disponible hors Maroc (diaspora Europe / Golfe) ?",
        answer:
          "Oui. Kode sert le Maroc en priorité et accompagne la diaspora (Europe, Golfe, etc.) via WhatsApp. Les prix internationaux s’affichent en EUR (45 / 59 / 79 €/an). Un VPN peut aider selon le pays et le FAI. Voir aussi la section couverture sur l’accueil kode.ma.",
      },
    ],
  },
];

/** Liste plate — UI compacte + JSON-LD FAQPage */
export const faqItems: FaqItem[] = faqCategories.flatMap((category) => category.items);
