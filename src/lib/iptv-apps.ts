export type RecommendedApp = {
  name: string;
  description: string;
  url?: string;
};

export const recommendedApps: RecommendedApp[] = [
  {
    name: "Nino Player",
    description: "Lecteur fluide recommandé pour Android et Smart TV.",
    url: "https://ninoplayer.com",
  },
  {
    name: "IPTV Smarters",
    description: "Interface complète live + VOD + EPG.",
  },
  {
    name: "NetIPTV / SetIPTV",
    description: "Solutions populaires sur Smart TV Samsung et LG.",
  },
  {
    name: "TiviMate",
    description: "Expérience TV avancée pour utilisateurs Android.",
  },
];

export const NINO_PLAYER_WEBSITE = "https://ninoplayer.com";

export const NINO_PLAYER_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.nino.player";

export const iptvAppsNote =
  "Kode fonctionne avec les principales applications IPTV du marché. Après activation, notre équipe WhatsApp vous indique la meilleure option pour votre appareil.";
