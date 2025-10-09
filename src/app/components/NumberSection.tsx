import { Box, Space, Title } from "@mantine/core";
import NumberCard, { NumberCardProps } from "./NumberCard";
import styles from "../style/numberSection.module.css";

export type NumberSectionProps = {
  numbers: NumberCardProps[];
  titleColor?: string;
  titleFont?: string;
  titleWeight?: number;
  titleShadow?: string;
  backgroundColor?: string;
};

export default function NumberSection(props: NumberSectionProps) {
  return (
    <Box
      style={{
        backgroundColor: props.backgroundColor,
      }}
      className={styles.container}
    >
      <div className={styles.titleContainer}>
        <Title
          className={`${styles.title}  ${props.titleFont}`}
          order={6}
          size={"clamp(4em, 3vh, 5em) "}
          ta={"center"}
          c={props.titleColor}
          fw={100}
          style={{
            textShadow: props.titleShadow,
          }}
        >
          Il nostro percorso in <br /> numeri fino ad oggi
        </Title>
      </div>

      <Space h={"xl"} />

      <Box className={styles.cardsContainer}>
        {props.numbers.map(
          (number, index) => (
            <NumberCard key={index} {...number} />
          ),
          []
        )}
      </Box>
    </Box>
  );
}
