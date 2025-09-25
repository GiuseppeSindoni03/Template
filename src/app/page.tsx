"use client";

import { Box } from "@mantine/core";

import HeroSection from "./components/Herosection";
import { SlideData } from "@/types/slideData";

export default function LandingPage() {
  const slides: SlideData[] = [
    {
      image: "/foto1.jpg",
      logo: "/logoIpsum.svg",
      text: "I migliori sul mercato",
    },
    {
      image: "/foto2.jpg",
      logo: "/logoIpsum.svg",
      text: "I migliori sul mercato",
    },
    {
      image: "/foto3.jpg",
      logo: "/logoIpsum.svg",
      text: "I migliori sul mercato",
    },
  ];

  return (
    <>
      <Box
        style={{
          background: "var(--backgorund-color)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HeroSection slides={slides} />
      </Box>
    </>
  );
}
