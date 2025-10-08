import { Card, Skeleton, Stack } from "@mantine/core";
import styles from "../style/cardSpecialty.module.css";

export function CardSpecialtySkeleton() {
  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="lg"
      withBorder
      className={styles.card}
    >
      <Card.Section className={styles.imageSection}>
        <Skeleton height="100%" width="100%" />
      </Card.Section>

      <Stack gap="xl" mt="md" className={styles.contentContainer}>
        <Skeleton height={28} width="80%" mx="auto" radius="md" />

        <Stack gap="xs">
          <Skeleton height={14} width="100%" radius="sm" />
          <Skeleton height={14} width="100%" radius="sm" />
          <Skeleton height={14} width="90%" radius="sm" />
          <Skeleton height={14} width="95%" radius="sm" />
        </Stack>
      </Stack>
    </Card>
  );
}
