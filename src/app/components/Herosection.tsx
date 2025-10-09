"use client";

import { Box } from "@mantine/core";
import ImageCarousel from "./ImageCarousel";
import { SlideData } from "@/types/slideData";
import styles from "../style/herosection.module.css";

type HeroParameter = {
  slides: SlideData[];
  id?: string;
  scrollable?: boolean;
};

export default function HeroSection(heroParameter: HeroParameter) {
  return (
    <Box className={styles.container} id={heroParameter.id} component="section">
      <ImageCarousel scrollable slides={heroParameter.slides} />
    </Box>
  );
}
