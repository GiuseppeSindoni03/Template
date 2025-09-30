// TextContent.tsx
import { Box, Title, Text } from "@mantine/core";
import styles from "../style/TextContent.module.css";
import { dm_serif, inter } from "../../theme/fonts";

type TextContentProps = {
  title: string;
  content: string;
  titleFont?: string;
  contentFont?: string;
  titleSize: string;
  titleWeight?: string | number;
  contentWeight?: string | number;
  contentSize: string;
  titleColor?: string;
  contentColor?: string;
};

export default function TextContent({
  titleWeight = 600,
  contentWeight = 400,
  titleFont = dm_serif.className,
  contentFont = inter.className,
  ...props
}: TextContentProps) {
  return (
    <Box className={styles.textContent}>
      <Title
        order={6}
        size={props.titleSize}
        ff={titleFont}
        fw={titleWeight}
        c={props.titleColor}
        className={styles.title}
      >
        {props.title}
      </Title>

      <Text
        size={props.contentSize}
        ff={contentFont}
        fw={contentWeight}
        c={props.contentColor}
        className={styles.content}
      >
        {props.content}
      </Text>
    </Box>
  );
}
