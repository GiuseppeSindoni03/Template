import "./globals.css";
import { Inter, Roboto_Serif } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./components/Header";
import { DM_Serif_Text } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto_Serif({ subsets: ["latin"] });

export const dm_serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const metadata = {
  title: "Template",
  description: "Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <MantineProvider
          defaultColorScheme="light"
          theme={{
            primaryColor: "blue",
            fontFamily: inter.style.fontFamily,
          }}
        >
          <Notifications />
          <Header logo="logoIpsumBlack.svg" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
