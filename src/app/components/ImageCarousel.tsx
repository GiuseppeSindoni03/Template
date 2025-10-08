"use client";

import { SlideData } from "@/types/slideData";
import { Carousel } from "@mantine/carousel";
import { Box, Title, Space } from "@mantine/core";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { dm_serif } from "../../theme/fonts";
import styles from "../style/imageCarousel.module.css";

type ImageCarouselProps = {
  slides?: SlideData[];
  scrollable?: boolean;
};

export default function ImageCarousel({
  slides,
  scrollable,
}: ImageCarouselProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const autoplay = useRef(
    Autoplay({
      delay: isMobile ? 3500 : 2500,
      stopOnInteraction: true,
    })
  );

  const shouldShowControls =
    isMobile === null
      ? true
      : !isMobile && !!slides?.length && slides.length > 1;

  // Se non ci sono slide, non renderizzare nulla
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <Carousel
      plugins={[autoplay.current]}
      w="100%"
      slideGap="md"
      emblaOptions={{ loop: true }}
      className={styles.carousel} //gold
      withControls={shouldShowControls && scrollable}
      withIndicators={scrollable}
      classNames={{ control: styles.control, indicator: styles.indicator }}
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={slide.id || `slide-${index}`}>
          <Box className={styles.slideContainer}>
            <div className={styles.imageContainer}>
              {" "}
              <Image
                src={slide.src}
                alt={slide.alt || slide.title || `Slide ${index + 1}`}
                fill
                sizes="100vw"
                className={styles.slideImage}
              />
            </div>

            {/* Overlay con testo - mostra solo se c'è title o text */}
            {(slide.title || slide.text) && (
              <Box className={styles.overlay}>
                {slide.title && (
                  <Title
                    order={1}
                    c="white"
                    className={`${styles.mainTitle} ${dm_serif.className}`}
                  >
                    {slide.title}
                  </Title>
                )}

                {slide.text && (
                  <>
                    {slide.title && <Space h="xl" />}
                    <Title
                      order={2}
                      c="white"
                      className={`${styles.subTitle} ${dm_serif.className}`}
                    >
                      {slide.text}
                    </Title>
                  </>
                )}
              </Box>
            )}
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
