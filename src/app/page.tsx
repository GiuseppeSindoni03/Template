"use client";

import { Box, Container, Space } from "@mantine/core";
import HeroSection from "./components/Herosection";
import { SlideData } from "@/types/slideData";
import ContentSection from "./components/ContentSection";
import { customColors, gradients } from "@/theme/colors";
import { fontFamilies } from "@/theme/fonts";
import NumberSection from "./components/NumberSection";
import TextContent from "./components/TextContent";
import { ImageContainer } from "./components/ImageContainer";
import ContentWrapper from "./components/ContentWrapper";
import { dm_serif, inter, roboto } from "./layout";

export default function LandingPage() {
  const chiSiamo = {
    image: "/chef.jpg",
    title: "Chi siamo",
    content:
      "Da tre generazioni portiamo in tavola il gusto autentico della cucina napoletana. Ogni piatto racconta una storia di famiglia, di ingredienti freschi e di passione per la tradizione. Il nostro ristorante è un luogo dove ci si sente a casa, tra profumi familiari e sorrisi sinceri.",
    orientation: "left" as const,
    backgroundColor: gradients.orange,
    imageAlt: "Chi siamo",
  };
  const slides: SlideData[] = [
    {
      image: "/foto1.jpg",
      title: "Il gusto di stare insieme",
      text: "Dal 1999 al vostro servizio",
    },
    {
      image: "/foto2.jpg",
      title: "Tradizione e sapori",
      text: "Dal 1999 al vostro servizio",
    },
    {
      image: "/foto3.jpg",
      title: "Tutto quello che cerchi",
      text: "Dal 1999 al vostro servizio",
    },
  ];

  const contentSections = [
    {
      image: "/foto1.jpg",
      title: "Raffele succhiami il cazzo",
      content:
        "Scopri la nostra selezione di cocktail artigianali, preparati con ingredienti di prima qualità. Ogni drink è una combinazione perfetta di sapori unici e presentazione elegante.",
      orientation: "right" as const,
      backgroundColor: gradients.orange,
      imageAlt: "Cocktail bar elegante con atmosfera raffinata",
    },
    {
      image: "/foto2.jpg",
      title: "Cucina Gourmet",
      content:
        "La nostra cucina propone piatti innovativi che uniscono tradizione e creatività. Ingredienti freschi e tecniche moderne per un'esperienza gastronomica indimenticabile.",
      orientation: "left" as const,
      backgroundColor: gradients.minimal,
      imageAlt: "Piatti gourmet della nostra cucina",
    },
    {
      image: "/foto3.jpg",
      title: "Ambiente Esclusivo",
      content:
        "Un'atmosfera unica e sofisticata dove ogni dettaglio è curato per offrirti un'esperienza di classe. Il luogo ideale per occasioni speciali e momenti indimenticabili.",
      orientation: "right" as const,
      backgroundColor: gradients.orange,
      imageAlt: "Ambiente interno elegante e raffinato",
    },
  ];

  const numberCards: NumberCardType[] = [
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

  return (
    <Box
      style={{
        background: "var(--ciao)",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "normal",
        // border: "1px solid red",
      }}
    >
      <HeroSection slides={slides} />

      <ContentSection backgroundColor={gradients.minimal}>
        <ImageContainer
          src={chiSiamo.image}
          imageAlt={chiSiamo.imageAlt}
          size="lg"
        />

        <Space w={"sm"} />

        <TextContent
          title={chiSiamo.title}
          content={chiSiamo.content}
          contentSize="1.5em"
          titleSize="5em"
          titleWeight={700}
          contentWeight={400}
        />
        {/* </ContentWrapper> */}
      </ContentSection>

      {contentSections.map((section, index) => (
        <ContentSection
          key={index}
          orientation={section.orientation}
          backgroundColor={section.backgroundColor}
          gap="3rem"
          padding="4rem 2rem"
        >
          <ImageContainer
            src={section.image}
            imageAlt={section.imageAlt}
            size="lg"
            className=""
          />

          <TextContent
            title={section.title.toUpperCase()}
            content={section.content}
            contentSize="lg"
            titleSize="h1"
            titleWeight={700}
            contentWeight={400}
          />
        </ContentSection>
      ))}

      <ContentSection
        height={"50vh"}
        orientation="multi"
        backgroundColor={gradients.minimal}
      >
        <NumberSection numbers={numberCards} />
      </ContentSection>
    </Box>
  );
}
