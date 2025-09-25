import "./globals.css";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
            fontFamily: "Inter, sans-serif",
            headings: { fontFamily: "Inter, sans-serif" },
          }}
        >
          <Notifications />
          <Header logo="logoIpsum.svg" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
