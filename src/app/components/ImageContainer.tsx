import { Box, Image } from "@mantine/core";
import styles from "../style/imageContainer.module.css";

export default function ImageContainer({
  className,
  style,
  src,
  imageAlt,
  size,
  radius = "xl",
}: {
  src: string;
  imageAlt: string;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: string;
}) {
  return (
    <Box
      className={`${styles.imageContainer} ${className || ""}`}
      style={style}
    >
      <Image
        radius={radius}
        src={src}
        alt={imageAlt}
        className={styles.image}
        w={size && getImageWidth(size)}
        h={size && 1.5 * getImageWidth(size)}
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
