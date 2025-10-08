import { Card, Text, Title, Stack } from "@mantine/core";
import Image from "next/image";
import styles from "../style/cardSpecialty.module.css";

type CardProps = {
  title: string;
  src: string;
  content: string;
};

export function CardSpecialty(props: CardProps) {
  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="lg"
      withBorder
      className={styles.card}
    >
      <Card.Section className={styles.imageSection}>
        <Image
          className={styles.image}
          src={props.src}
          fill
          alt={props.title}
        />
      </Card.Section>

      <Stack gap="xl" mt="md" className={styles.contentContainer}>
        <Title order={6} className={styles.title}>
          {props.title}
        </Title>

        <Text size="sm" c="dimmed" className={styles.description}>
          {props.content}
        </Text>
      </Stack>
    </Card>
  );
}
