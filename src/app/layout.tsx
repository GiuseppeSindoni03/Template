import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./components/Header";
import Providers from "./components/Provider";
import { Metadata } from "next";
import { footerInfo, colorConfig } from "@/mock/mock";
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
        <Providers colorConfig={colorConfig}>
          <Header logo="logoIpsumBlack.svg" />
          {children}

          <footer id="footer">
            <FooterLinks {...footerInfo}></FooterLinks>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
