import { CardProps } from "@/app/components/CardSpecialty";
import { FooterProps } from "@/app/components/FooterLinks";
import { HeaderProps } from "@/app/components/Header";
import { InterludeProps } from "@/app/components/Interlude";
import { NumberCardProps } from "@/app/components/NumberCard";
import { NumberSectionProps } from "@/app/components/NumberSection";
import { ColorConfig } from "@/theme/colors";
import { SlideData } from "@/types/slideData";

export const colorConfig: ColorConfig = {
  palette: "rustic",
  gradient: "rustic",
};

// LINK HEADER
export const links = [
  {
    label: "Chi siamo",
    link: "/",
    scrollTo: "chi-siamo",
  },
  { link: "/", label: "Dove trovarci", scrollTo: "place" },
  {
    label: "Contatti",
    link: null,
    scrollTo: "footer",
  },
  {
    label: "Servizi",
    link: "/servizi",
    scrollTo: null,
  },
  { link: "/", label: "Specialità", scrollTo: "specialties" },
];

export const header: HeaderProps = {
  logo: "logoIpsum.svg",
  logoWidth: 150,
  logoHeight: 150,
  backgroundColor: "",
  borderRadius: "",
  hoverColor: "",
  linkColor: "",
  linkFont: "",
  linkWeight: "",
};

// SLIDE CAROSELLO
export const slides: SlideData[] = [
  {
    id: "hero-1",
    src: "/foto1.jpg",
    title: "Il gusto di stare insieme",
    text: "Dal 1999 al vostro servizio",
    alt: "",
    textColor: "",
    textFont: "",
    textWeight: "",
    titleColor: "",
    titleFont: "",
    titleWeight: "",
  },
  {
    id: "hero-2",
    src: "/foto2.jpg",
    title: "Tradizione e sapori",
    text: "Dal 1999 al vostro servizio",
    alt: "",
    textColor: "",
    textFont: "",
    textWeight: "",
    titleColor: "",
    titleFont: "",
    titleWeight: "",
  },
  {
    id: "hero-3",
    src: "/foto3.jpg",
    title: "Tutto quello che cerchi",
    text: "Dal 1999 al vostro servizio",
    alt: "",
    textColor: "",
    textFont: "",
    textWeight: "",
    titleColor: "",
    titleFont: "",
    titleWeight: "",
  },
];

// CHI SIAMO

export const chiSiamo = {
  image: "/chef.jpg",
  title: "Chi siamo",
  content:
    "Da tre generazioni portiamo in tavola il gusto autentico della cucina napoletana. Ogni piatto racconta una storia di famiglia, di ingredienti freschi e di passione per la tradizione. Il nostro ristorante è un luogo dove ci si sente a casa, tra profumi familiari e sorrisi sinceri.",
  orientation: "left" as const,
  backgroundColor: "",
  imageAlt: "Chi siamo",
  titleWeight: 700,
  titleColor: "",
  titleFont: "",
  contentColor: "",
  contentFont: "",
  contentWeight: 400,
};

// INTERLUDE
export const interlude: InterludeProps = {
  title: "Le nostre specialità",
  imageSrc: "servizi.jpg",
  titleColor: "",
  titleWeight: "",
  titleFont: "",
  titleShadow: "",
};

// CARD SPECIALTY

export const specialty: CardProps[] = [
  {
    backgroundColor: "",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
    titleColor: "",
    contentColor: "",
    contentFont: "",
    contentWeight: "",
    titleFont: "",
    titleWeight: "",
  },

  {
    backgroundColor: "",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
    titleColor: "",
    contentColor: "",
    contentFont: "",
    contentWeight: "",
    titleFont: "",
    titleWeight: "",
  },
  {
    backgroundColor: "",
    src: "/foto4.jpeg",
    title: "Cappuccino caldo",
    content:
      "Il cappucino con latte di vacca caldo, e con cafe di miscela arabica.",
    titleColor: "",
    contentColor: "",
    contentFont: "",
    contentWeight: "",
    titleFont: "",
    titleWeight: "",
  },
];

// SEZIONE NUMERI
export const numberCards: NumberCardProps[] = [
  {
    label: "Anni d'esperienza",
    from: 0,
    to: 9,
    symbol: "+",
    numberColor: "",

    labelColor: "",
    numberFont: "",
    labelFont: "",
    numberWeight: "",
    labelWeight: "",
    backgroundColor: "",
  },
  {
    label: "Dipendenti",
    from: 0,
    to: 33,
    symbol: "+",
    numberColor: "",
    labelColor: "",
    numberFont: "",
    labelFont: "",
    numberWeight: "",
    labelWeight: "",
    backgroundColor: "",
  },
  {
    label: "Valutazione",
    from: 0,
    to: 92,
    symbol: "%",
    numberColor: "",
    labelColor: "",
    numberFont: "",
    labelFont: "",
    numberWeight: "",
    labelWeight: "",
    backgroundColor: "",
  },
];

export const numberSection: NumberSectionProps = {
  numbers: numberCards,
  titleColor: "",
  titleFont: "",
  titleWeight: "",
};

// SERVIZI
export const services = [
  {
    image: "/party.jpg",
    title: "Festeggia con noi",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "left" as const,
    backgroundColor: "",
    imageAlt: "party",
    titleWeight: 700,
    titleColor: "",
    titleFont: "",
    contentColor: "",
    contentFont: "",
    contentWeight: 400,
  },
  {
    image: "/delivery.jpg",
    title: "Gustaci anche a casa",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "right" as const,
    backgroundColor: "",
    imageAlt: "delivery",
    titleWeight: 700,
    titleColor: "",
    titleFont: "",
    contentColor: "",
    contentFont: "",
    contentWeight: 400,
  },
  {
    image: "/kidArea.jpg",
    title: "Ai bambini ci pensiamo noi",
    content:
      "Che sia un compleanno, un anniversario o una serata speciale, da noi trovi l’atmosfera giusta per ogni occasione. Organizziamo eventi su misura con allestimenti, menu personalizzati e tutta la cura per rendere il tuo giorno davvero unico.",
    orientation: "left" as const,
    backgroundColor: "",
    imageAlt: "party",
    titleWeight: 700,
    titleColor: "",
    titleFont: "",
    contentColor: "",
    contentFont: "",
    contentWeight: 400,
  },
];

// PAGINA SERVIZI

//CAROUSEL SERVIZI
export const servicesSlide: SlideData[] = [
  {
    id: "hero-1",
    src: "/servizi1.jpg",
    title: "I nostri servizi",
    alt: "",
    textColor: "",
    textFont: "",
    textWeight: "",
    titleColor: "",
    titleFont: "",
    titleWeight: "",
  },
];

// FOOTER
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
