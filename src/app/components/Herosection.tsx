"use client";

import { Box, Container } from "@mantine/core";
import styles from "../style/herosection.module.css";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { SlideData } from "@/types/slideData";

type HeroParameter = {
  images?: string[];
  slides?: SlideData[];
};

export default function HeroSection(heroParameter: HeroParameter) {
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ImageCarousel
        slides={heroParameter.slides}
        images={heroParameter.images}
      />
    </Box>
  );
}
