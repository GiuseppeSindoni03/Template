import { Box, Image } from "@mantine/core";
import styles from "../style/imageContainer.module.css";

export function ImageContainer({
  className,
  style,
  src,
  imageAlt,
  size,
}: {
  src: string;
  imageAlt: string;
  className?: string;
  style?: React.CSSProperties;
  size: "sm" | "md" | "lg" | "xl";
}) {
  return (
    <Box
      className={`${styles.imageContainer} ${className || ""}`}
      style={style}
    >
      <Image
        radius={"xl"}
        src={src}
        alt={imageAlt}
        className={styles.image}
        w={getImageWidth(size)}
        h={1.5 * getImageWidth(size)}
      />
    </Box>
  );
}
function getImageWidth(size: "sm" | "md" | "lg" | "xl"): number {
  const sizes = {
    sm: 250,
    md: 350,
    lg: 450,
    xl: 550,
  };
  return sizes[size];
}
