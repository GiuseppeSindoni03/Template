import { Card, Text, Title, Stack } from "@mantine/core";
import Image from "next/image";
import styles from "../style/cardSpecialty.module.css";

type CardProps = {
  title: string;
  src: string;
  content: string;
  backgroundColor?: string;
  titleFont?: string;
  contentFont?: string;
  titleColor?: string;
  contentColor?: string;
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

      <Stack
        gap="xl"
        mt="md"
        style={{ backgroundColor: props.backgroundColor }}
        className={styles.contentContainer}
      >
        <Title
          order={6}
          style={{
            color: props.titleColor,
          }}
          className={`${styles.title} ${props.titleFont}`}
        >
          {props.title}
        </Title>

        <Text
          size="md"
          fw={"bold"}
          style={{
            color: props.contentColor,
          }}
          className={`${styles.content} ${props.contentFont}`}
        >
          {props.content}
        </Text>
      </Stack>
    </Card>
  );
}
