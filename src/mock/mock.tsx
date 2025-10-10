import { CardProps } from "@/app/components/CardSpecialty";
import { FooterProps } from "@/app/components/FooterLinks";
import { HeaderProps } from "@/app/components/Header";
import { InterludeProps } from "@/app/components/Interlude";
import { NumberCardProps } from "@/app/components/NumberCard";
import { NumberSectionProps } from "@/app/components/NumberSection";
import { ColorConfig, gradients, shadows } from "@/theme/colors";
import { anton, monteSerrat } from "@/theme/fonts";
import { SlideData } from "@/types/slideData";

const green = "var(--green-title)";
const cream = "var(--cream-color)";
const black = "var(--black-color)";
const footer = "var(--footer-back)";

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
  logo: "/logoGrrinta.png",
  logoWidth: 60,
  logoHeight: 60,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  // borderRadius: "30px",
  hoverColor: "white",
  linkColor: green,
  linkFont: anton.className,
  linkWeight: 100,
};

export const menu: {
  menuLink: string;
  linkColor: string;
  backgroundColor: string;
  font: string;
} = {
  menuLink:
    "https://drive.google.com/file/d/11nklflHGNQIcNhz7RXeu88poWe5A00PR/view",
  linkColor: green,
  backgroundColor: cream,
  font: anton.className,
};
// SLIDE CAROSELLO
export const slides: SlideData[] = [
  {
    id: "hero-1",
    src: "/foto1.jpg",
    title: " Un F*CKING GRRREAT BURGER",

    alt: "",
    textColor: green,
    textFont: anton.className,
    textWeight: 200,
    titleColor: "white",
    titleFont: anton.className,
    titleWeight: 200,
  },
  {
    id: "hero-2",
    src: "/foto2.jpg",
    title: " Un F*CKING GRRREAT BURGER",
    text: " made in Volla!",
    alt: "",
    textColor: green,
    textFont: anton.className,
    textWeight: 200,
    titleColor: "white",
    titleFont: anton.className,
    titleWeight: 200,
  },
  {
    id: "hero-3",
    src: "/foto3.jpg",
    title: " Un F*CKING GRRREAT BURGER",
    text: " made in Volla!",
    alt: "",
    textColor: green,
    textFont: anton.className,
    textWeight: 200,
    titleColor: "white",
    titleFont: anton.className,
    titleWeight: 10,
  },
];

// CHI SIAMO

export const chiSiamo = {
  image: "/chisiamo.jpg",
  title: "Chi siamo",
  content:
    "Da tre generazioni portiamo in tavola il gusto autentico della cucina napoletana. Ogni piatto racconta una storia di famiglia, di ingredienti freschi e di passione per la tradizione. Il nostro ristorante è un luogo dove ci si sente a casa, tra profumi familiari e sorrisi sinceri.",
  orientation: "left" as const,
  backgroundColor: cream,
  imageAlt: "Chi siamo",
  titleShadow: shadows.subtle,

  titleWeight: 100,
  titleColor: green,
  titleFont: anton.className,
  contentColor: footer,
  contentFont: monteSerrat.className,
  contentWeight: 600,
};

// INTERLUDE
export const interlude: InterludeProps = {
  title: "Le nostre specialità",
  // imageSrc: "servizi.jpg",
  backgroundColor: black,
  titleColor: green,
  titleWeight: 100,
  titleFont: anton.className,
  titleShadow: shadows.subtleWhite,
};

// CARD SPECIALTY

export const specialtySection = {
  // backgroundColor: gradients.green,
  background: gradients.green,
};

export const specialty: CardProps[] = [
  {
    // backgroundColor: cream,
    src: "/specialty1.jpg",
    title: "Monaciello",
    content:
      "Doppio hamburger smash, chips di zucchine, mousse di provolone del monaco e pancetta croccante",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: green,
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },

  {
    backgroundColor: "",
    src: "/specialty2.jpg",
    title: "River Burger",
    content:
      "Bun artigianale, peperonicini verdi, cremoso di pecorino, provola affumicata, guanciale croccante",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },
  {
    backgroundColor: "",
    src: "/specialty3.jpg",
    title: "Nonna Burger",
    content:
      "Bun artigianale, salsa al ragù, polpette della nonna, parmigiana croccante con prosciutto e provola",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },

  {
    backgroundColor: "",
    src: "/specialty3.jpg",
    title: "Nonna Burger",
    content:
      "Bun artigianale, salsa al ragù, polpette della nonna, parmigiana croccante con prosciutto e provola",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },

  {
    backgroundColor: "",
    src: "/specialty3.jpg",
    title: "Nonna Burger",
    content:
      "Bun artigianale, salsa al ragù, polpette della nonna, parmigiana croccante con prosciutto e provola",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },
  {
    backgroundColor: "",
    src: "/specialty3.jpg",
    title: "Nonna Burger",
    content:
      "Bun artigianale, salsa al ragù, polpette della nonna, parmigiana croccante con prosciutto e provola",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },
  {
    backgroundColor: "",
    src: "/specialty3.jpg",
    title: "Nonna Burger",
    content:
      "Bun artigianale, salsa al ragù, polpette della nonna, parmigiana croccante con prosciutto e provola",
    titleFont: anton.className,
    contentFont: monteSerrat.className,
    titleColor: "var(--green-title)",
    contentColor: footer,
    contentWeight: 500,
    titleWeight: 500,
  },
];

// SEZIONE NUMERI
export const numberCards: NumberCardProps[] = [
  {
    label: "Anni d'esperienza",
    from: 0,
    to: 9,
    symbol: "+",
    numberColor: green,
    labelColor: green,
    numberFont: monteSerrat.className,
    labelFont: monteSerrat.className,
    numberWeight: 900,
    labelWeight: 500,
    backgroundColor: cream,
  },
  {
    label: "Dipendenti",
    from: 0,
    to: 33,
    symbol: "+",
    numberColor: green,
    labelColor: green,
    numberFont: monteSerrat.className,
    labelFont: monteSerrat.className,
    numberWeight: 900,
    labelWeight: 500,
    backgroundColor: "",
  },
  {
    label: "Valutazione",
    from: 0,
    to: 92,
    symbol: "%",
    numberColor: green,
    labelColor: green,
    numberFont: monteSerrat.className,
    labelFont: monteSerrat.className,
    numberWeight: 900,
    labelWeight: 500,
    backgroundColor: "",
  },
];

export const numberSection: NumberSectionProps = {
  numbers: numberCards,
  titleColor: cream,
  titleFont: anton.className,
  titleWeight: 100,
  backgroundColor: green,
  titleShadow: shadows.subtle,
};

export const doveTrovarci: InterludeProps = {
  title: "Dove trovarci",
  // imageSrc: "servizi.jpg",
  backgroundColor: cream,
  titleColor: green,
  titleWeight: 500,
  titleFont: anton.className,
  // titleShadow: shadows.subtle,
  labelColor: green,
  label: "Via Aldo Moro, 3/A, 80040 Volla NA",
  labelFont: monteSerrat.className,
  // labelShadow: shadows.subtle,PPi
  labelWeight: 900,
};

// SERVIZI
export const services = [
  {
    titleShadow: shadows.subtle,

    image: "/foto3.jpg",
    title: "Consumaci al tavolo",
    content:
      "Nel nostro fast food, puoi gustare i tuoi piatti preferiti comodamente seduto al tavolo. Dimentica la fretta, prenditi il tempo di assaporare ogni morso in un ambiente accogliente. Perfetto per una pausa pranzo o una cena veloce, senza rinunciare al comfort. Vieni a mangiare al tavolo e goditi un'ottima esperienza gastronomica!",
    orientation: "left" as const,
    backgroundColor: cream,
    imageAlt: "party",
    titleWeight: 100,
    titleColor: green,
    titleFont: anton.className,
    contentColor: footer,
    contentFont: monteSerrat.className,
    contentWeight: 500,
  },
  {
    titleShadow: shadows.subtle,

    image: "/foto5.jpg",
    title: "Gustaci comodamente a casa",

    content:
      "Non vuoi uscire? Nessun problema! Abbiamo anche il servizio delivery tramite le migliori piattaforme. Ordina comodamente da casa e ricevi il tuo pasto direttamente a domicilio!",
    orientation: "right" as const,
    backgroundColor: cream,
    imageAlt: "delivery",
    titleWeight: 100,
    titleColor: green,
    titleFont: anton.className,
    contentColor: footer,
    contentFont: monteSerrat.className,
    contentWeight: 500,
  },
  {
    titleShadow: shadows.subtle,

    image: "/asporto.jpg",
    title: "Gustaci d'asporto",
    content:
      "Se preferisci mangiare a casa, il nostro fast food offre il servizio d'asporto! Ordina i tuoi piatti preferiti e portali via in pochi minuti, pronti da gustare dove vuoi",
    orientation: "left" as const,
    backgroundColor: cream,
    imageAlt: "party",
    titleWeight: 100,
    titleColor: green,
    titleFont: anton.className,
    contentColor: footer,
    contentFont: monteSerrat.className,
    contentWeight: 500,
  },
];

// PAGINA SERVIZI

//CAROUSEL SERVIZI
export const servicesSlide: SlideData[] = [
  {
    src: "/foto8.jpg",
    title: "I nostri servizi",
    alt: "",
    textColor: "",
    textFont: "",
    // textWeight: "",
    titleColor: green,
    titleFont: anton.className,

    // titleWeight: "",
  },
  {
    src: "/foto10.jpg",
    title: "I nostri servizi",
    alt: "",
    // textColor: green,
    // textFont: anton.className,
    // textWeight: "",
    titleColor: green,
    titleFont: anton.className,
    // titleWeight: "",
  },
  {
    src: "/foto6.jpg",
    title: "I nostri servizi",
    alt: "",
    textColor: "",
    textFont: "",
    // textWeight: "",
    titleColor: green,
    titleFont: anton.className,
    // titleWeight: "",
  },
];

// FOOTER
export const footerInfo: FooterProps = {
  logo: "/logoGrrinta.png",
  logoWidth: 150,
  logoHeight: 150,
  contentColor: cream,
  contentFont: monteSerrat.className,
  contentWeight: 0,
  labelColor: green,
  labelFont: monteSerrat.className,
  labelWeight: 700,
  linkColor: cream,
  linkFont: monteSerrat.className,
  linkWeight: 900,
  titleColor: green,
  titleFont: monteSerrat.className,
  titleWeight: 900,

  backgroundColor: black,
  address: "Via Aldo Moro, 3/A, 80040 Volla NA",
  email: "example.gmail.com",
  phone: "0812787077",
  social: {
    tiktok: "https://www.tiktok.com/@grrinta.burger",
    facebook:
      "https://www.facebook.com/profile.php?id=61551046258921&locale=it_IT",
    instagram: "https://www.instagram.com/grrinta_burger/",
  },
  workSchedule: [
    "18:00 - 00:00",
    "18:00 - 00:00",
    "18:00 - 00:00",
    "18:00 - 00:00",
    "18:00 - 00:00",
    "18:00 - 01:00",
    "18:00 - 00:00",
  ],
  links: [
    { link: "/", label: "Chi siamo", scrollTo: "chi-siamo" },
    { link: "/", label: "Specialità", scrollTo: "specialties" },
    { link: "/", label: "Dove trovarci", scrollTo: "place" },
    { link: "/servizi", label: "Servizi", scrollTo: "services" },
  ],
};

export const map = {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.6741916679894!2d14.341936276570292!3d40.87902372737307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba994c378bee9%3A0x1982a342fb762142!2sGrrinta!5e0!3m2!1sit!2sit!4v1760025275931!5m2!1sit!2sit",
};
