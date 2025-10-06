// ContentSection.tsx
import { Box } from "@mantine/core";
import styles from "../style/contentSection.module.css";
import { ReactNode, useEffect, useRef } from "react";
import clsx from "clsx";

type Orientation = "left" | "right" | "column" | "horizontal-scroll";

type CSSVarProps = React.CSSProperties & {
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
  maxWidth = "2000px",
  minHeight = "300px",
  className,
  style,
  as = "section",
  ariaLabel,
  id,
  border = "",
}: ContentSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHorizontalScroll = orientation === "horizontal-scroll";

  useEffect(() => {
    if (!isHorizontalScroll || !containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) return; // Su mobile non serve hijacking

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;

      // Se stiamo scrollando e non siamo agli estremi, hijack dello scroll
      if (
        (e.deltaY > 0 && currentScrollLeft < maxScrollLeft) ||
        (e.deltaY < 0 && currentScrollLeft > 0)
      ) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 10;

        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isHorizontalScroll]);

  const containerLayoutClass =
    orientation === "left"
      ? styles.row
      : orientation === "right"
      ? styles.rowReverse
      : orientation === "horizontal-scroll"
      ? styles.horizontalScroll
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
        maxWidth,
        width: "100%",
        minHeight: isHorizontalScroll ? "auto" : minHeight,
        display: "flex",
        alignItems: "center",
        border: border,
        ...style,
      }}
    >
      <Box
        ref={isHorizontalScroll ? containerRef : null}
        className={clsx(styles.container, containerLayoutClass)}
        style={cssVars}
      >
        {children}
      </Box>
    </Box>
  );
}
