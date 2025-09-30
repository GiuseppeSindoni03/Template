// ContentSection.tsx
import { Box } from "@mantine/core";
import styles from "../style/contentSection.module.css";
import { ReactNode } from "react";
import clsx from "clsx";

type Orientation = "left" | "right" | "column";

type CSSVarProps = React.CSSProperties & {
  // Tipizzazione per le CSS variables che useremo nel CSS module
  ["--cs-gap"]?: string | number;
  ["--cs-pad"]?: string | number;
  ["--cs-maxw"]?: string | number;
};

type ContentSectionProps = {
  children: ReactNode;
  orientation?: Orientation;
  background?: string;
  backgroundColor?: string;
  padding?: string | number;
  gap?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  fluid?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: "section" | "div" | "article" | "main";
  ariaLabel?: string;
  id?: string;
  border?: string;
};

export default function ContentSection({
  children,
  orientation = "left",
  background,
  backgroundColor,
  padding = "2rem",
  gap = "2rem",
  maxWidth = "1200px",
  minHeight = "300px",
  // fluid = false,
  className,
  style,
  as = "section",
  ariaLabel,
  id,
  border = "",
}: ContentSectionProps) {
  const containerLayoutClass =
    orientation === "left"
      ? styles.row
      : orientation === "right"
      ? styles.rowReverse
      : styles.column;

  const cssVars: CSSVarProps = {
    "--cs-gap": typeof gap === "number" ? `${gap}px` : gap,
    "--cs-pad": typeof padding === "number" ? `${padding}px` : padding,
    "--cs-maxw": typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
  };

  return (
    <Box
      component={as}
      id={id}
      aria-label={ariaLabel}
      className={clsx(className, styles.root)}
      style={{
        background,
        backgroundColor,
        width: "100%",
        minHeight,
        display: "flex",
        alignItems: "center",
        border: border,
        ...style,
      }}
    >
      <Box
        className={clsx(styles.container, containerLayoutClass)}
        style={cssVars}
      >
        {children}
      </Box>
    </Box>
  );
}
