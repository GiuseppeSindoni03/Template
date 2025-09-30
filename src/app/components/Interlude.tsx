import { Box, Image } from "@mantine/core";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "../style/interlude.module.css";

type CSSVarProps = React.CSSProperties & {
  ["--cs-gap"]?: string | number;
  ["--cs-pad"]?: string | number;
  ["--cs-maxw"]?: string | number;
  ["--cs-gap-tablet"]?: string | number;
  ["--cs-pad-tablet"]?: string | number;
  ["--cs-gap-mobile"]?: string | number;
  ["--cs-pad-mobile"]?: string | number;
  ["--cs-gap-small"]?: string | number;
  ["--cs-pad-small"]?: string | number;
};

type InterludeProps = {
  children: ReactNode;
  padding?: string | number;
  gap?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article" | "main";
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  responsive?: {
    tablet?: { padding?: string | number; gap?: string | number };
    mobile?: { padding?: string | number; gap?: string | number };
    small?: { padding?: string | number; gap?: string | number };
  };
};

export default function Interlude({
  children,
  padding = "2rem",
  gap = "2rem",
  maxWidth = "1200px",
  minHeight = "300px",
  imageSrc,
  imageAlt,
  className,
  style,
  as = "section",
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 0.3)",
  overlayOpacity = 0.3,
  responsive,
}: InterludeProps) {
  const cssVars: CSSVarProps = {
    "--cs-gap": typeof gap === "number" ? `${gap}px` : gap,
    "--cs-pad": typeof padding === "number" ? `${padding}px` : padding,
    "--cs-maxw": typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
  };

  // Aggiungi valori responsive se forniti
  if (responsive?.tablet) {
    if (responsive.tablet.padding) {
      cssVars["--cs-pad-tablet"] =
        typeof responsive.tablet.padding === "number"
          ? `${responsive.tablet.padding}px`
          : responsive.tablet.padding;
    }
    if (responsive.tablet.gap) {
      cssVars["--cs-gap-tablet"] =
        typeof responsive.tablet.gap === "number"
          ? `${responsive.tablet.gap}px`
          : responsive.tablet.gap;
    }
  }

  if (responsive?.mobile) {
    if (responsive.mobile.padding) {
      cssVars["--cs-pad-mobile"] =
        typeof responsive.mobile.padding === "number"
          ? `${responsive.mobile.padding}px`
          : responsive.mobile.padding;
    }
    if (responsive.mobile.gap) {
      cssVars["--cs-gap-mobile"] =
        typeof responsive.mobile.gap === "number"
          ? `${responsive.mobile.gap}px`
          : responsive.mobile.gap;
    }
  }

  if (responsive?.small) {
    if (responsive.small.padding) {
      cssVars["--cs-pad-small"] =
        typeof responsive.small.padding === "number"
          ? `${responsive.small.padding}px`
          : responsive.small.padding;
    }
    if (responsive.small.gap) {
      cssVars["--cs-gap-small"] =
        typeof responsive.small.gap === "number"
          ? `${responsive.small.gap}px`
          : responsive.small.gap;
    }
  }

  return (
    <Box
      component={as}
      className={clsx(styles.container, className)}
      style={{
        minHeight,
        ...cssVars,
        ...style,
      }}
    >
      {/* Immagine di sfondo */}
      <Box className={styles.backgroundImage}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Overlay opzionale */}
      {overlay && (
        <Box
          className={styles.overlay}
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Contenuto centrato */}
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
}
