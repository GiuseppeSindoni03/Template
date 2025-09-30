"use client";

import { Box, Title } from "@mantine/core";
import HeroSection from "./components/Herosection";
import { SlideData } from "@/types/slideData";
import ContentSection from "./components/ContentSection";
import { customColors, gradients } from "@/theme/colors";

import TextContent from "./components/TextContent";
import ImageContainer from "./components/ImageContainer";
import NumberSection from "./components/NumberSection";
import Interlude from "./components/Interlude";
import { dm_serif } from "@/theme/fonts";
import { color } from "motion/react";
import { title } from "process";

export default function LandingPage() {
  const interlude = {
    title: "Le nostre specialità",
    src: "servizi.jpg",
  };
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
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyItems: "center",
        // border: "4px solid black",
      }}
    >
      <HeroSection slides={slides} />

      <ContentSection
        as="section"
        id="chi-siamo"
        ariaLabel="Sezione Chi siamo"
        orientation={chiSiamo.orientation} // 'left'
        // background={chiSiamo.backgroundColor} // se è un gradiente, usa 'background'
        maxWidth={1200}
        padding="3rem"
        gap="2rem"
        minHeight="60vh"
        backgroundColor={gradients.minimal}
        // border="1px solid blue"
      >
        <ImageContainer
          src={chiSiamo.image}
          imageAlt={chiSiamo.imageAlt}
          size="lg"
          style={{ maxWidth: 520, width: "100%" }}
        />

        <TextContent
          title={chiSiamo.title}
          content={chiSiamo.content}
          titleSize="clamp(2rem, 6vw, 4rem)"
          contentSize="clamp(1rem, 2.2vw, 1.2rem)"
          titleWeight={700}
          contentWeight={400}
        />
      </ContentSection>

      <Interlude
        imageSrc={interlude.src}
        imageAlt="Descrizione immagine"
        size="lg"
        minHeight="500px"
      >
        <Title
          order={6}
          fw={700}
          ff={dm_serif.className}
          size="clamp(2rem, 6vw, 4rem)"
          c={customColors.template[0]}
          style={{
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.7);",
            lineHeight: "1.2",
          }}
        >
          {interlude.title}
        </Title>
      </Interlude>

      {contentSections.map((section, index) => (
        <ContentSection
          as="section"
          id={section.title}
          ariaLabel={section.title}
          key={index}
          orientation={section.orientation}
          backgroundColor={section.backgroundColor}
          maxWidth={1200}
          padding="3rem"
          gap="2rem"
          minHeight="60vh"
        >
          <ImageContainer
            src={section.image}
            imageAlt={section.imageAlt}
            size="lg"
            style={{ maxWidth: 520, width: "100%" }}
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

      {/* <ContentSection
        as="section"
        orientation="column"
        backgroundColor={gradients.minimal}
      >
        <NumberSection numbers={numberCards} />
      </ContentSection> */}
    </Box>
  );
}
