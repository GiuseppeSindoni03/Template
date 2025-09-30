"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      defaultColorScheme="light"
      theme={{
        primaryColor: "blue",
      }}
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
}
