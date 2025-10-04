import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./components/Header";
import Providers from "./components/Provider";
import { Metadata } from "next";
import { footerInfo } from "@/mock/mock";
import FooterLinks from "./components/FooterLinks";

export const metadata: Metadata = {
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
      <body>
        <Providers>
          <Header logo="logoIpsumBlack.svg" />
          {children}

          <footer>
            <FooterLinks {...footerInfo}></FooterLinks>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
