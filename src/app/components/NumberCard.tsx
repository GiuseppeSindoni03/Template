import { Box, Card, Space, Text, Title } from "@mantine/core";
import CountUp from "./CountUp";

type NumberCardProps = {
  symbol?: string;
  from: number;
  to: number;
  label: string;
};

export default function NumberCard(props: NumberCardProps) {
  return (
    <Card
      shadow="xl"
      padding="xl"
      radius="lg"
      withBorder
      w={300}
      h={200}
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)", // più grande e più scura
      }}
    >
      <Card.Section h={300}>
        <Box
          style={{
            // border: "1px solid red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text size="3em" fw={900}>
            {props.symbol}
          </Text>
          <Title order={6} size={"4em"} fw={900}>
            <CountUp from={props.from} to={props.to} />
          </Title>
        </Box>
      </Card.Section>

      <Box
        style={{
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text size="1.5em" fw={900}>
          {props.label}
        </Text>
      </Box>
    </Card>
  );
}
