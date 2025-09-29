"use client";

import { SlideData } from "@/types/slideData";
import { Carousel } from "@mantine/carousel";
import { Image, Box, Text, Title, Space } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { dm_serif, roboto } from "../layout";

type ImageCarouselProps = {
  images?: string[];
  slides?: SlideData[];
};

export default function ImageCarousel({ images, slides }: ImageCarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const slideData: SlideData[] =
    slides || images?.map((img) => ({ image: img })) || [];

  return (
    <Carousel
      plugins={[autoplay.current]}
      withIndicators
      w={"100%"}
      slideGap="md"
      emblaOptions={{ loop: true }}
      style={{
        height: "100%",
      }}
    >
      {slideData.map((slide, index) => (
        <Carousel.Slide key={index}>
          <Box>
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              fit="cover"
              radius="md"
              h={"100vh"}
              style={{
                filter: "brightness(70%)",
              }}
            />

            {slide.text && (
              <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 90%, transparent 70%, rgba(0,0,0,0.4) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // padding: "20px",
                }}
              >
                {/* Logo in alto */}
                {slide.title && (
                  <Box>
                    <Title
                      order={3}
                      size={"8rem"}
                      c={"white"}
                      ff={dm_serif.className}
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      {slide.title}
                    </Title>
                  </Box>
                )}

                {/* Testo in basso */}
                {slide.text && (
                  <Box ta="center">
                    <Space h="xl" />
                    <Title
                      ff={dm_serif.className}
                      c="white"
                      size="3em"
                      order={3}
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      {slide.text}
                    </Title>
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
