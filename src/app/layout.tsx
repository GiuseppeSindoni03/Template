import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./components/Header";
import Providers from "./components/Provider";
import { Metadata } from "next";
import { footerInfo, colorConfig, header } from "@/mock/mock";
import FooterLinks from "./components/FooterLinks";

export const metadata: Metadata = {
  title: {
    default: "Nome Ristorante - Cucina Italiana a Napoli",
    template: "%s | Nome Ristorante",
  },
  description:
    "Scopri Nome Ristorante in Via Porricelli 83, Napoli. Cucina italiana autentica, specialità napoletane e piatti della tradizione. Prenota ora!",
  keywords: [
    "ristorante napoli",
    "cucina italiana",
    "ristorante via porricelli",
    "specialità napoletane",
  ],
  authors: [{ name: "Nome Ristorante" }],
  creator: "Nome Ristorante",
  publisher: "Nome Ristorante",

  // Open Graph per social media
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://tuodominio.com",
    siteName: "Nome Ristorante",
    title: "Nome Ristorante - Cucina Italiana a Napoli",
    description: "Scopri le nostre specialità della tradizione napoletana",
    images: [
      {
        url: "/logoIpsum.jpg",
        width: 1200,
        height: 630,
        alt: "Nome Ristorante - Interno",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Nome Ristorante - Cucina Italiana a Napoli",
    description: "Scopri le nostre specialità della tradizione napoletana",
    images: ["/og-image.jpg"],
  },

  // Geo tags per local SEO
  other: {
    "geo.region": "IT-NA",
    "geo.placename": "Napoli",
    "geo.position": "40.8518;14.2681", // Coordinate esatte
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (da aggiungere dopo)
  verification: {
    google: "your-google-verification-code",
  },
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
          <Header {...header} />
          {children}

          <footer id="footer">
            <FooterLinks {...footerInfo}></FooterLinks>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
