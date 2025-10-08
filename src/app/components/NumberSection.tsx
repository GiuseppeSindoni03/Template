import { Box, Space, Title } from "@mantine/core";
import NumberCard from "./NumberCard";
import styles from "../style/numberSection.module.css";

type NumberSectionProps = {
  numbers: NumberCardType[];
};

export default function NumberSection(props: NumberSectionProps) {
  return (
    <Box className={styles.container}>
      <div className={styles.titleContainer}>
        <Title
          className={styles.title}
          order={6}
          size={"clamp(4em, 3vh, 5em) "}
          ta={"center"}
        >
          Il nostro percorso in <br /> numeri fino ad oggi
        </Title>
      </div>

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
