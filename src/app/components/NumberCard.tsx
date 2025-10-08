import { Box, Card, Title } from "@mantine/core";
import CountUp from "./CountUp";
import styles from "../style/numberCard.module.css";
import { inter } from "@/theme/fonts";

type NumberCardProps = {
  symbol?: string;
  from: number;
  to: number;
  label: string;
  padding?: string | number;
  gap?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  numberColor?: string;
  labelColor?: string;
  backgroundColor?: string;
};

export default function NumberCard(props: NumberCardProps) {
  return (
    <Card
      shadow="xl"
      padding="xl"
      radius="lg"
      withBorder
      className={styles.card}
    >
      <Box className={styles.container}>
        <Card.Section>
          <Box className={styles.section}>
            <Title
              className={styles.symbol}
              c={props.numberColor}
              order={6}
              // size="clamp(0.875rem, 2.5vw, 2rem)"
              size="clamp(2em, 3vw, 2rem)"
              fw={900}
            >
              {props.symbol}
            </Title>

            <Title
              className={styles.label}
              c={props.numberColor}
              order={6}
              size="clamp(4em, 5vw, 4rem)"
              fw={900}
            >
              <CountUp from={props.from} to={props.to} />
            </Title>
          </Box>
        </Card.Section>

        <Box className={styles.labelContainer}>
          <Title
            order={6}
            c={props.labelColor}
            className={`${styles.labelText} ${inter.className}`}
            size="clamp(1.5em, 1.5vw, 1rem)"
            fw={300}
            ta="center"
          >
            {props.label.toUpperCase()}
          </Title>
        </Box>
      </Box>
    </Card>
  );
}
