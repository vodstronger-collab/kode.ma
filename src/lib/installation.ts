export type InstallStep = {
  title: string;
  steps: string[];
};

export const deviceGuides: InstallStep[] = [
  {
    title: "Smart TV (Samsung / LG)",
    steps: [
      "Ouvrez le store de votre Smart TV et installez NetIPTV ou SetIPTV.",
      "Lancez l'application et choisissez l'ajout par code / URL Xtream.",
      "Saisissez les identifiants reçus par WhatsApp après activation Kode.",
      "Actualisez la liste des chaînes et testez un flux HD/4K.",
    ],
  },
  {
    title: "Android / Android TV",
    steps: [
      "Installez Nino Player ou IPTV Smarters depuis le Play Store.",
      "Ajoutez un nouveau playlist / compte Xtream Codes.",
      "Entrez serveur, username et password fournis par Kode.",
      "Chargez les chaînes et configurez l'EPG si proposé.",
    ],
  },
  {
    title: "Firestick / Fire TV",
    steps: [
      "Activez les sources inconnues dans les paramètres Firestick.",
      "Installez Downloader puis l'APK recommandé (Nino / Smarters).",
      "Ajoutez vos identifiants Kode et chargez le bouquet.",
      "Réglez la qualité selon votre débit (FHD ou 4K).",
    ],
  },
  {
    title: "IPTV Smarters",
    steps: [
      "Téléchargez IPTV Smarters Pro sur votre appareil.",
      "Choisissez « Login with Xtream Codes API ».",
      "Renseignez les infos reçues après commande WhatsApp.",
      "Profitez du live, du catch-up et de la VOD.",
    ],
  },
  {
    title: "MAG / boîtiers STB",
    steps: [
      "Accédez au portail MAG via les paramètres système.",
      "Entrez l'URL portail communiquée par le support Kode.",
      "Redémarrez le boîtier pour charger les chaînes.",
      "Contactez WhatsApp si le MAC doit être autorisé.",
    ],
  },
];

export const universalSteps: InstallStep = {
  title: "Étapes universelles Kode",
  steps: [
    "Commandez votre pack via WhatsApp et validez le paiement.",
    "Recevez vos identifiants et le lien d'apps recommandées.",
    "Installez l'application adaptée à votre appareil.",
    "Connectez-vous, actualisez les listes, et regardez.",
  ],
};
