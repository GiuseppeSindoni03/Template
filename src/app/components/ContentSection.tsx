// ContentSection.tsx
import { Box, Container, Image } from "@mantine/core";
import TextContent from "./TextContent";
import styles from "../style/contentSection.module.css";
import { ReactNode } from "react";
import clsx from "clsx";

type ContentSectionProps = {
  children: ReactNode;
  orientation?: "left" | "right" | "multi";
  backgroundColor?: string;
  padding?: string | number;
  gap?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ContentSection({
  children,
  orientation = "left",
  backgroundColor,
  padding = "2rem",
  gap = "2rem",
  maxWidth,
  height = "70vh",
  className,
  style,
}: ContentSectionProps) {
  const containerLayoutClass =
    orientation === "left"
      ? styles.row
      : orientation === "right"
      ? styles.rowReverse
      : styles.column;

  return (
    <Box
      className={clsx(className, styles.smoothTransition)}
      style={{
        // border: "10px solid magenta",
        background: backgroundColor,
        width: "100%",
        height,
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      <Box
        className={clsx(styles.container, containerLayoutClass)}
        style={{
          minHeight: "300px",
          padding,
          gap,

          // maxWidth,
          width: "80%",
          margin: "0 auto",
          // border: "10px solid blue",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
