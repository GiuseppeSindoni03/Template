import { Box, Space, Title } from "@mantine/core";
import NumberCard from "./NumberCard";
import styles from "../style/numberSection.module.css";

type NumberSectionProps = {
  numbers: NumberCardType[];
  titleColor?: string;
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
          c={props.titleColor}
        >
          Il nostro percorso in <br /> numeri fino ad oggi
        </Title>
      </div>

      <Space h={"xl"} />

      <Box className={styles.cardsContainer}>
        {props.numbers.map(
          (number, index) => (
            <NumberCard
              labelColor={number.cardLabelColor}
              numberColor={number.cardNumberColor}
              backgroundColor={number.backgroundColor}
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
