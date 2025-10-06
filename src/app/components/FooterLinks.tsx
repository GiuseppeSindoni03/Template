"use client";

import { Box, Stack, Image, Text, Group, Title } from "@mantine/core";
import styles from "../style/footer.module.css";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export type FooterProps = {
  logo: string;
  address: string;
  phone: string;
  email: string;
  social: { instagram?: string; facebook?: string; tiktok: string };
  workSchedule: string[];
  links: { label: string; link: string; scrollTo: string }[];
};

const week = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

export default function FooterLinks(props: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { label: string; link: string; scrollTo: string }
  ) => {
    if (link.scrollTo) {
      e.preventDefault();

      if (pathname === link.link) {
        document.getElementById(link.scrollTo)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        router.push(`${link.link}#${link.scrollTo}`);
      }
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      id="footer"
      className={styles.container}
      style={{ backgroundColor: "#293132" }}
    >
      <Stack>
        <Image className={styles.logo} src="logoIpsumBlack.svg" />

        <Group>
          <Text c={"white"}>{props.address}</Text>
        </Group>
        <Group>
          <Text c={"#FCBA04"}>Telefono</Text>{" "}
          <Text className={styles.text} c={"white"}>
            {props.phone}
          </Text>
        </Group>

        <Group>
          <Text c={"#FCBA04"}>Email</Text>{" "}
          <Text className={styles.text} c={"white"}>
            {props.email}
          </Text>
        </Group>
        <Group wrap="nowrap">
          {props.social.instagram && (
            <IconBrandInstagram
              onClick={() => handleSocialClick(props.social.instagram!)}
              className={styles.social}
              size={40}
              stroke={1.5}
              style={{ filter: "invert(1)", cursor: "pointer" }}
            />
          )}

          {props.social.facebook && (
            <IconBrandFacebook
              onClick={() => handleSocialClick(props.social.facebook!)}
              className={styles.social}
              size={40}
              stroke={1.5}
              style={{ filter: "invert(1)", cursor: "pointer" }}
            />
          )}

          <IconBrandTiktok
            onClick={() => handleSocialClick(props.social.tiktok)}
            className={styles.social}
            size={40}
            stroke={1.5}
            style={{ filter: "invert(1)", cursor: "pointer" }}
          />
        </Group>
      </Stack>

      <Stack className={styles.workSchedule}>
        <Title
          className={styles.workScheduleTitle}
          c="white"
        >{`ORARI DI APERTURA`}</Title>
        {props.workSchedule.map((shift, index) => (
          <div key={index} className={styles.workScheduleDays}>
            <Text c={"#FCBA04"}> {week[index]} </Text>
            <Text className={styles.text} c={"white"}>
              {shift}
            </Text>
          </div>
        ))}
      </Stack>

      <Stack className={styles.linkContainer}>
        {props.links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className={styles.link}
            onClick={(e) => {
              handleLinkClick(e, link);
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
