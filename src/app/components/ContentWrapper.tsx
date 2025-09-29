import { Box } from "@mantine/core";
import { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {props.children}
    </Box>
  );
}
