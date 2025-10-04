import { Box, Card, Space, Text, Title } from "@mantine/core";
import CountUp from "./CountUp";
import styles from "../style/numberCard.module.css";
import { dm_serif } from "@/theme/fonts";

type NumberCardProps = {
  symbol?: string;
  from: number;
  to: number;
  label: string;
  padding?: string | number;
  gap?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
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
            <Text
              className={styles.symbol}
              size="clamp(0.875rem, 2.5vw, 2rem)"
              fw={900}
            >
              {props.symbol}
            </Text>

            <Title
              className={styles.label}
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
            className={styles.labelText}
            ff={dm_serif.className}
            size="clamp(2em, 3vw, 1.25rem)"
            fw={500}
            ta="center"
          >
            {props.label}
          </Title>
        </Box>
      </Box>
    </Card>
  );
}
