"use client";

import { Container, Group } from "@mantine/core";
import Link from "next/link";
import styles from "../style/header.module.css";
import Image from "next/image";
import { Text } from "@mantine/core";

type HeaderProps = {
  logo: string;
  roots?: Root[];
};

type Root = {
  label: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container size="xxl" h={50} className={styles.inner}>
        <Link href="/home" className={styles.logo}>
          <Image
            src={props.logo}
            alt="Logo"
            width={80}
            height={80}
            priority
            className={styles.logo}
          ></Image>
        </Link>

        <Group gap="xl" className={styles.nav}>
          <Link href="/home" className={styles.link}>
            <Text size="md" fw={800}>
              Home
            </Text>
          </Link>
          <Link href="/contatti" className={styles.link}>
            <Text size="md" fw={800}>
              Contatti
            </Text>
          </Link>
          <Link href="/chi-siamo" className={styles.link}>
            <Text size="md" fw={800}>
              Chi siamo
            </Text>
          </Link>
        </Group>
      </Container>
    </header>
  );
}
