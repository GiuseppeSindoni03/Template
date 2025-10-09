"use client";

import { Box, Space, Title } from "@mantine/core";
import HeroSection from "./components/Herosection";
import ContentSection from "./components/ContentSection";
import { gradients } from "@/theme/colors";

import TextContent from "./components/TextContent";
import ImageContainer from "./components/ImageContainer";
import NumberSection from "./components/NumberSection";
import Interlude from "./components/Interlude";
import { dm_serif, inter } from "@/theme/fonts";
import styles from "./page.module.css";
import {
  chiSiamo,
  doveTrovarci,
  interlude,
  map,
  numberCards,
  numberSection,
  slides,
  specialty,
  specialtySection,
} from "@/mock/mock";
import { CardSpecialty } from "./components/CardSpecialty";
import GoogleMap from "./components/GoogleMap";
import { spec } from "node:test/reporters";

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
        // maxWidth={"80%"}
        as="section"
        id="chi-siamo"
        ariaLabel="Sezione Chi siamo"
        orientation={chiSiamo.orientation} // 'left'
        // background={chiSiamo.backgroundColor} // se è un gradiente, usa 'background'
        padding="3rem"
        gap="2rem"
        minHeight="60vh"
        backgroundColor={chiSiamo.backgroundColor}
        // border="1px solid blue"
      >
        <ImageContainer
          src={chiSiamo.image}
          imageAlt={chiSiamo.imageAlt}
          size="lg"
          style={{ width: "auto" }}
        />

        <TextContent
          title={chiSiamo.title}
          content={chiSiamo.content}
          titleSize="clamp(2rem, 6vw, 4rem)"
          contentSize="clamp(1rem, 2.2vw, 1.2rem)"
          titleWeight={chiSiamo.titleWeight}
          contentColor={chiSiamo.contentColor}
          contentFont={chiSiamo.contentFont}
          titleColor={chiSiamo.titleColor}
          titleFont={chiSiamo.titleFont}
          contentWeight={chiSiamo.contentWeight}
        />
      </ContentSection>

      <Interlude
        id="specialties"
        imageSrc={interlude.imageSrc}
        imageAlt={interlude.imageAlt || "Descrizione immagine"}
        size="lg"
      >
        <Title
          order={6}
          fw={interlude.titleWeight || 700}
          className={interlude.titleFont}
          c={interlude.titleColor}
          size="clamp(2rem, 6vw, 4rem)"
          style={{
            textShadow: interlude.titleShadow,
            lineHeight: "1.2",
          }}
        >
          {interlude.title}
        </Title>
      </Interlude>

      <ContentSection
        // border="1px solid red"
        as="section"
        backgroundColor={specialtySection.backgroundColor}
        // maxWidth={"80%"}
        gap={"1em"}
        orientation="horizontal-scroll"
      >
        {specialty.map((spec, index) => (
          <CardSpecialty key={index} {...spec} />
        ))}
      </ContentSection>

      <ContentSection
        backgroundColor={numberSection.backgroundColor}
        minHeight={"80vh"}
        // maxWidth={"80%"}
        as="section"
        orientation="column"
        padding={0}
        gap={0}
        // backgroundColor={gradients.elegant}
        // border="1px solid red"
      >
        <NumberSection {...numberSection} />
      </ContentSection>

      <Interlude
        id="place"
        backgroundColor={doveTrovarci.backgroundColor}
        size="lg"
      >
        <Box className={styles.placeInterlude}>
          <Title
            order={6}
            fw={doveTrovarci.titleWeight}
            className={doveTrovarci.titleFont}
            size="clamp(2.5em, 4vw, 4rem)"
            c={doveTrovarci.titleColor}
            style={{
              textShadow: doveTrovarci.titleShadow,
              lineHeight: "1.2",
            }}
          >
            {doveTrovarci.title}
          </Title>
          <Space h={"sm"} />
          <Title
            order={2}
            fw={doveTrovarci.labelWeight}
            className={`${doveTrovarci.labelFont} ${styles.address}`}
            size="clamp(1.2rem, 2vw, 2rem)"
            c={doveTrovarci.labelColor}
            style={{
              textShadow: doveTrovarci.labelShadow,
            }}
          >
            {doveTrovarci.label}
          </Title>
        </Box>
      </Interlude>

      <GoogleMap src={map.src} />
    </Box>
  );
}
