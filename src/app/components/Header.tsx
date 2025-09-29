"use client";

import { Container, Group } from "@mantine/core";
import Link from "next/link";
import styles from "../style/header.module.css";
import Image from "next/image";
import { Text } from "@mantine/core";
import { roboto } from "../layout";

type HeaderProps = {
  logo: string;
  roots?: Root[];
};

type Root = {
  label: string;
};

const links = [
  {
    label: "Chi siamo",
  },
  {
    label: "Contatti",
  },
  {
    label: "Servizi",
  },
];

export default function Header(props: HeaderProps) {
  return (
    <header className={`${styles.header} `}>
      <Container size="xxl" h={60} className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src={props.logo}
            alt="Logo"
            width={150}
            height={150}
            priority
            className={styles.logo}
          ></Image>
        </Link>

        <div className={styles.nav}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/`}
              className={`${styles.link} ${roboto.className}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
