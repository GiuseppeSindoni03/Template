import { Box } from "@mantine/core";
import styles from "../style/googleMap.module.css";
import { useState } from "react";
export default function GoogleMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box className={styles.container}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3016.2270081740885!2d14.393904076564997!3d40.888835026770245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUzJzE5LjgiTiAxNMKwMjMnNDcuMyJF!5e0!3m2!1sit!2sit!4v1759525946716!5m2!1sit!2sit"
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
