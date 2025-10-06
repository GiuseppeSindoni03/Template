"use client";

import { Box } from "@mantine/core";
import HeroSection from "../components/Herosection";
import { services, servicesSlide } from "@/mock/mock";
import ContentSection from "../components/ContentSection";
import ImageContainer from "../components/ImageContainer";
import { gradients } from "@/theme/colors";
import TextContent from "../components/TextContent";

export default function Page() {
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
      <HeroSection id={"services"} slides={servicesSlide} />

      {services.map((service, index) => (
        <ContentSection
          key={index}
          as="section"
          id={index.toString()}
          ariaLabel=""
          orientation={service.orientation}
          maxWidth={1200}
          padding="3rem"
          gap="2rem"
          minHeight="60vh"
          backgroundColor={gradients.elegant}
        >
          <ImageContainer
            src={service.image}
            imageAlt={service.imageAlt}
            size="lg"
            style={{ maxWidth: 520, width: "100%" }}
          />

          <TextContent
            title={service.title}
            content={service.content}
            titleSize="clamp(2rem, 6vw, 4rem)"
            contentSize="clamp(1rem, 2.2vw, 1.2rem)"
            titleWeight={700}
            contentWeight={400}
          />
        </ContentSection>
      ))}
    </Box>
  );
}
