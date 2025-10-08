"use client";

import { Box } from "@mantine/core";
import ImageCarousel from "./ImageCarousel";
import { SlideData } from "@/types/slideData";

type HeroParameter = {
  slides: SlideData[];
  id?: string;
  scrollable?: boolean;
};

export default function HeroSection(heroParameter: HeroParameter) {
  return (
    <Box
      id={heroParameter.id}
      component="section"
      style={{
        width: "100%",
        position: "relative",
        // border: "1px solid black",
      }}
    >
      <ImageCarousel scrollable slides={heroParameter.slides} />
    </Box>
  );
}
