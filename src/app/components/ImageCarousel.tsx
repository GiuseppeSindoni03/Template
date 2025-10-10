"use client";

import { SlideData } from "@/types/slideData";
import { Carousel } from "@mantine/carousel";
import { Box, Title, Space, Image, Button } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { dm_serif } from "../../theme/fonts";
import styles from "../style/imageCarousel.module.css";
import { m } from "motion/react";

type ImageCarouselProps = {
  slides?: SlideData[];
  scrollable?: boolean;
  menu?: {
    menuLink: string;
    linkColor: string;
    backgroundColor: string;
    font: string;
  };
};

export default function ImageCarousel({
  slides,
  scrollable,
  menu,
}: ImageCarouselProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const handleClickMenu = () => {
    console.log("Ciao bello");

    window.open(menu?.menuLink, "_blank", "noopener,noreferrer");
  };

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
      className={styles.carousel}
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
                sizes="100vw"
                className={styles.slideImage}
              />
            </div>

            {/* Overlay con testo - mostra solo se c'è title o text */}
            {(slide.title || slide.text) && (
              <Box className={styles.overlay}>
                {slide.title && (
                  <Title
                    fw={slide.titleWeight}
                    order={1}
                    c={slide.titleColor || "white"}
                    className={`${styles.mainTitle} ${slide.titleFont}`}
                  >
                    {slide.title}
                  </Title>
                )}

                {menu && (
                  <>
                    {slide.title && <Space h="xl" />}
                    <Button
                      onClick={handleClickMenu}
                      className={styles.menuButton}
                      style={{
                        backgroundColor: menu.backgroundColor,
                      }}
                      size={isMobile ? "md" : "lg"}
                    >
                      <Title
                        fw={slide.textWeight}
                        order={2}
                        c={menu.linkColor || slide.textColor || "white"}
                        className={`${styles.buttonText} ${
                          menu.font || slide.textFont
                        }`}
                      >
                        SCOPRI IL MENÙ
                      </Title>
                    </Button>
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
