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
import {
  chiSiamo,
  contentSections,
  interlude,
  numberCards,
  slides,
  specialty,
} from "@/mock/mock";
import { CardSpecialty } from "./components/CardSpecialty";

export default function LandingPage() {
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
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
            lineHeight: "1.2",
          }}
        >
          {interlude.title}
        </Title>
      </Interlude>

      <ContentSection
        as="section"
        // backgroundColor={specialty.backgroundColor}
        maxWidth={1200}
        gap="1.5rem"
        padding="2rem"
        orientation="horizontal-scroll"
      >
        {specialty.map((spec, index) => (
          <CardSpecialty
            key={index}
            src={spec.src}
            title={spec.title}
            content={spec.content}
          />
        ))}
      </ContentSection>

      <ContentSection
        as="section"
        orientation="column"
        backgroundColor={gradients.minimal}
      >
        <NumberSection numbers={numberCards} />
      </ContentSection>
    </Box>
  );
}
