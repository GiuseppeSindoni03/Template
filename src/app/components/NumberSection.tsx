import { Box, Space, Title } from "@mantine/core";
import NumberCard from "./NumberCard";
import { inter } from "../../theme/fonts";
import styles from "../style/numberSection.module.css";

type NumberSectionProps = {
  numbers: NumberCardType[];
};

export default function NumberSection(props: NumberSectionProps) {
  return (
    <Box className={styles.container}>
      <Title
        className={styles.title}
        order={6}
        size={"clamp(4em, 3vh, 5em) "}
        ff={inter.className}
      >
        Il nostro percorso in numeri fino ad oggi
      </Title>

      <Space h={"xl"} />

      <Box className={styles.cardsContainer}>
        {props.numbers.map(
          (number, index) => (
            <NumberCard
              label={number.label}
              from={number.from}
              to={number.to}
              key={index}
              symbol={number.symbol}
            />
          ),
          []
        )}
      </Box>
    </Box>
  );
}
