"use client";

import { SlideData } from "@/types/slideData";
import { Carousel } from "@mantine/carousel";
import { Image, Box, Text, Stack } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type ImageCarouselProps = {
  images?: string[];
  slides?: SlideData[];
};

export default function ImageCarousel({ images, slides }: ImageCarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  // Se vengono passate solo le immagini, convertile nel formato SlideData
  const slideData: SlideData[] =
    slides || images?.map((img) => ({ image: img })) || [];

  return (
    <Carousel
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={() => autoplay.current.play()}
      withIndicators
      height={400}
      slideGap="md"
      emblaOptions={{ loop: true }}
    >
      {slideData.map((slide, index) => (
        <Carousel.Slide key={index}>
          <Box pos="relative" h={400} w={""}>
            {/* Immagine di sfondo */}
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              fit="cover"
              h={400}
              radius="md"
            />

            {/* Overlay con logo e testo */}
            {(slide.logo || slide.text) && (
              <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.4) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "20px",
                }}
              >
                {/* Logo in alto */}
                {slide.logo && (
                  <Box ta="center">
                    <Image
                      src={slide.logo}
                      alt="logo"
                      fit="contain"
                      h={100}
                      w="auto"
                      mx="auto"
                    />
                  </Box>
                )}

                {/* Testo in basso */}
                {slide.text && (
                  <Box ta="center">
                    <Text
                      c="white"
                      size="xl"
                      fw={600}
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.7)",
                        lineHeight: 1.3,
                      }}
                    >
                      {slide.text.toUpperCase()}
                    </Text>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
