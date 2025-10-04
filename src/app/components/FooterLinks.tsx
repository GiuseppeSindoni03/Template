import { Box, Stack, Image, Text, Group, Title } from "@mantine/core";
import styles from "../style/footer.module.css";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react";

export type FooterProps = {
  logo: string;
  address: string;
  phone: string;
  email: string;
  social: { instagram?: string; facebook?: string; tiktok: string };
  workSchedule: string[];
  links: { label: string; link: string }[];
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
  return (
    <Box className={styles.container} style={{ backgroundColor: "#293132" }}>
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
          <IconBrandInstagram
            className={styles.social}
            size={40}
            stroke={1.5}
            style={{ filter: "invert(1)" }}
          />

          <IconBrandFacebook
            className={styles.social}
            size={40}
            stroke={1.5}
            style={{ filter: "invert(1)" }}
          />

          <IconBrandTiktok
            className={styles.social}
            size={40}
            stroke={1.5}
            style={{ filter: "invert(1)" }}
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
          <Text key={index} c={"white"} className="link">
            {link.label}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
