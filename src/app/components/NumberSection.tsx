import { Box, Title } from "@mantine/core";
import NumberCard from "./NumberCard";
import { inter } from "../../theme/fonts";

type NumberSectionProps = {
  numbers: NumberCardType[];
};

export default function NumberSection(props: NumberSectionProps) {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "1px solid red",
        minWidth: "1500px",
        minHeight: "400px",
      }}
    >
      <Title order={6} size={"5em"} ff={inter.className}>
        Il nostro percorso in numeri fino ad oggi
      </Title>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {props.numbers.map(
          (number, index) => (
            <NumberCard
              label={number.label}
              from={number.from}
              to={number.to}
              key={index}
              symbol={number.symbol}
            />
          ),
          []
        )}
      </Box>
    </Box>
  );
}
