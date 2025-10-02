import { gradients } from "@/theme/colors";
import { SlideData } from "@/types/slideData";

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

  // {
  //   label: "Caffe bevuti",
  //   from: 0,
  //   to: 92,
  //   symbol: "+",
  // },

  // {
  //   label: "Caffe bevuti",
  //   from: 0,
  //   to: 92,
  //   symbol: "+",
  // },
];

export const contentSections = [
  {
    image: "/foto1.jpg",
    title: "Raffele succhiami il cazzo",
    content:
      "Scopri la nostra selezione di cocktail artigianali, preparati con ingredienti di prima qualità. Ogni drink è una combinazione perfetta di sapori unici e presentazione elegante.",
    orientation: "right" as const,
    backgroundColor: gradients.orange,
    imageAlt: "Cocktail bar elegante con atmosfera raffinata",
  },
  // {
  //   image: "/foto2.jpg",
  //   title: "Cucina Gourmet",
  //   content:
  //     "La nostra cucina propone piatti innovativi che uniscono tradizione e creatività. Ingredienti freschi e tecniche moderne per un'esperienza gastronomica indimenticabile.",
  //   orientation: "left" as const,
  //   backgroundColor: gradients.minimal,
  //   imageAlt: "Piatti gourmet della nostra cucina",
  // },
  // {
  //   image: "/foto3.jpg",
  //   title: "Ambiente Esclusivo",
  //   content:
  //     "Un'atmosfera unica e sofisticata dove ogni dettaglio è curato per offrirti un'esperienza di classe. Il luogo ideale per occasioni speciali e momenti indimenticabili.",
  //   orientation: "right" as const,
  //   backgroundColor: gradients.orange,
  //   imageAlt: "Ambiente interno elegante e raffinato",
  // },
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
  backgroundColor: gradients.orange,
  imageAlt: "Chi siamo",
};

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
