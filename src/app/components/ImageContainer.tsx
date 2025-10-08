import { Box } from "@mantine/core";
import Image from "next/image";
import styles from "../style/imageContainer.module.css";

export default function ImageContainer({
  className,
  style,
  src,
  imageAlt,
  size,
  rateo = 1.5,
}: {
  src: string;
  imageAlt: string;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  rateo?: number;
  radius?: string;
}) {
  return (
    <Box
      className={`${styles.imageContainer} ${className || ""}`}
      style={style}
    >
      <Image
        src={src}
        alt={imageAlt}
        className={styles.image}
        width={size && getImageWidth(size)}
        height={size && rateo * getImageWidth(size)}
        style={{ borderRadius: "var(--mantine-radius-md)" }}
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
