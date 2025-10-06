"use client";

import { Box, Space, Title } from "@mantine/core";
import HeroSection from "./components/Herosection";
import ContentSection from "./components/ContentSection";
import { gradients } from "@/theme/colors";
import { colorConfig } from "../mock/mock";

import TextContent from "./components/TextContent";
import ImageContainer from "./components/ImageContainer";
import NumberSection from "./components/NumberSection";
import Interlude from "./components/Interlude";
import { dm_serif, inter } from "@/theme/fonts";
import styles from "./page.module.css";
import {
  chiSiamo,
  interlude,
  numberCards,
  slides,
  specialty,
} from "@/mock/mock";
import { CardSpecialty } from "./components/CardSpecialty";
import GoogleMap from "./components/GoogleMap";

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
        maxWidth={"80%"}
        as="section"
        id="chi-siamo"
        ariaLabel="Sezione Chi siamo"
        orientation={chiSiamo.orientation} // 'left'
        // background={chiSiamo.backgroundColor} // se è un gradiente, usa 'background'
        padding="3rem"
        gap="2rem"
        minHeight="60vh"
        backgroundColor={gradients.elegant}
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
          titleWeight={700}
          contentWeight={400}
        />
      </ContentSection>

      <Interlude
        id="specialties"
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
          c={colorConfig.palette}
          style={{
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
            lineHeight: "1.2",
          }}
        >
          {interlude.title}
        </Title>
      </Interlude>

      <ContentSection
        // border="1px solid red"
        as="section"
        // backgroundColor={specialty.backgroundColor}
        maxWidth={"80%"}
        gap={"1em"}
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
        minHeight={"80vh"}
        maxWidth={"80%"}
        as="section"
        orientation="column"
        padding={0}
        gap={0}
        // backgroundColor={gradients.elegant}
        // border="1px solid red"
      >
        <NumberSection numbers={numberCards} />
      </ContentSection>

      <Space h={"xl"} />

      <Interlude
        id="place"
        maxWidth={"80%"}
        backgroundColor="#FCBA04"
        size="lg"
        minHeight="150px"
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5%",
            // border: "1px solid red",
            maxLines: 1,
          }}
        >
          <Title
            order={6}
            fw={700}
            ff={dm_serif.className}
            size="clamp(2em, 4vw, 4rem)"
            c={"#293132"}
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              lineHeight: "1.2",
            }}
          >
            Dove trovarci
          </Title>
          <Title
            order={2}
            fw={400}
            className={`${inter.className} ${styles.address}`}
            size="clamp(1rem, 2vw, 2rem)"
            c={"white"}
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Via Porricelli 83, Napoli 80048
          </Title>
        </Box>
      </Interlude>

      <GoogleMap />
    </Box>
  );
}
