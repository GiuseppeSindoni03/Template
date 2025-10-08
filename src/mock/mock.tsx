import { FooterProps } from "@/app/components/FooterLinks";
import { ColorConfig } from "@/theme/colors";
import { SlideData } from "@/types/slideData";

export const colorConfig: ColorConfig = {
  palette: "rustic",
  gradient: "rustic",
};

export const numberCards: NumberCardType[] = [
  {
    label: "Anni d'esperienza",
    from: 0,
    to: 9,
    symbol: "+",
  },
  {
    label: "Dipendenti",
    from: 0,
    to: 33,
    symbol: "+",
  },
  {
    label: "Valutazione",
    from: 0,
    to: 92,
    symbol: "%",
  },
];

export const services = [
  {
    image: "/party.jpg",
    title: "Festeggia con noi",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "left" as const,
    backgroundColor: "",
    imageAlt: "party",
  },
  {
    image: "/delivery.jpg",
    title: "Gustaci anche a casa",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "right" as const,
    backgroundColor: "",
    imageAlt: "delivery",
  },
  {
    image: "/kidArea.jpg",
    title: "Ai bambini ci pensiamo noi",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "left" as const,
    backgroundColor: "",
    imageAlt: "party",
  },
];

export const specialty = [
  {
    backgroundColor: "",
    imageAlt: "Cocktail bar elegante con atmosfera raffinata",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
  },

  {
    backgroundColor: "",
    imageAlt: "Cocktail bar elegante con atmosfera raffinata",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
  },
  {
    backgroundColor: "",
    imageAlt: "Cocktail bar elegante con atmosfera raffinata",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
  },
];
export const contentSections = [
  {
    image: "/foto1.jpg",
    title: "Raffele succhiami il cazzo",
    content:
      "Scopri la nostra selezione di cocktail artigianali, preparati con ingredienti di prima qualità. Ogni drink è una combinazione perfetta di sapori unici e presentazione elegante.",
    orientation: "right" as const,
    backgroundColor: "",
    imageAlt: "Cocktail bar elegante con atmosfera raffinata",
  },
];

export const interlude = {
  title: "Le nostre specialità",
  src: "servizi.jpg",
};

export const chiSiamo = {
  image: "/chef.jpg",
  title: "Chi siamo",
  content:
    "Da tre generazioni portiamo in tavola il gusto autentico della cucina napoletana. Ogni piatto racconta una storia di famiglia, di ingredienti freschi e di passione per la tradizione. Il nostro ristorante è un luogo dove ci si sente a casa, tra profumi familiari e sorrisi sinceri.",
  orientation: "left" as const,
  backgroundColor: "",
  imageAlt: "Chi siamo",
};

export const servicesSlide: SlideData[] = [
  {
    id: "hero-1",
    src: "/servizi1.jpg",
    title: "I nostri servizi",
  },
];

export const slides: SlideData[] = [
  {
    id: "hero-1",
    src: "/foto1.jpg",
    title: "Il gusto di stare insieme",
    text: "Dal 1999 al vostro servizio",
  },
  {
    id: "hero-2",
    src: "/foto2.jpg",
    title: "Tradizione e sapori",
    text: "Dal 1999 al vostro servizio",
  },
  {
    id: "hero-3",
    src: "/foto3.jpg",
    title: "Tutto quello che cerchi",
    text: "Dal 1999 al vostro servizio",
  },
];

export const footerInfo: FooterProps = {
  logo: "",
  address: "",
  email: "",
  phone: "",
  social: {
    tiktok: "",
    facebook: "",
    instagram: "",
  },
  workSchedule: [
    "Giorno di chiusura",
    "7:00 - 01:00",
    "7:00 - 01:00",
    "7:00 - 01:00",
    "7:00 - 01:00",
    "7:00 - 01:00",
    "7:00 - 01:00",
  ],
  links: [
    { link: "/", label: "Chi siamo", scrollTo: "chi-siamo" },
    { link: "/", label: "Specialità", scrollTo: "specialties" },
    { link: "/", label: "Dove trovarci", scrollTo: "place" },
    { link: "/servizi", label: "Servizi", scrollTo: "services" },
  ],
};
