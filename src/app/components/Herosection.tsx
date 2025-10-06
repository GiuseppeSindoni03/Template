"use client";

import { Box } from "@mantine/core";
import ImageCarousel from "./ImageCarousel";
import { SlideData } from "@/types/slideData";

type HeroParameter = {
  slides: SlideData[];
  id?: string;
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
      <ImageCarousel slides={heroParameter.slides} />
    </Box>
  );
}
