import { Box } from "@mantine/core";
import styles from "../style/googleMap.module.css";
import { useState } from "react";

type GoogleMapProps = {
  src: string;
};
export default function GoogleMap(props: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box className={styles.container}>
      <iframe
        className={styles.map}
        src={props.src}
        allowFullScreen={false}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      ></iframe>
    </Box>
  );
}
