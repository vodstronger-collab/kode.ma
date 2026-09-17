export type Review = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Youssef B.",
    city: "Casablanca",
    rating: 5,
    text: "Activation en quelques minutes sur WhatsApp. Zapping fluide en 4K, même le soir. Je recommande Kode.",
  },
  {
    name: "Sara M.",
    city: "Rabat",
    rating: 5,
    text: "Pack Ultra parfait pour la maison. Support réactif et installation guidée sur Smart TV Samsung.",
  },
  {
    name: "Karim L.",
    city: "Marrakech",
    rating: 5,
    text: "Fini les freezes. Le VIP tient ses promesses : VOD énorme et image nette.",
  },
  {
    name: "Imane T.",
    city: "Tanger",
    rating: 5,
    text: "Meilleur rapport qualité-prix que j'ai testé au Maroc. Garantie 45 jours rassurante.",
  },
  {
    name: "Hamza R.",
    city: "Fès",
    rating: 5,
    text: "Nino Player + Kode = combo gagnant. Chaînes sport et cinéma au top.",
  },
  {
    name: "Nadia K.",
    city: "Agadir",
    rating: 5,
    text: "Service premium, explications claires, et abonnement annuel vraiment rentable.",
  },
];
