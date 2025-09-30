import { Inter, Roboto_Serif, DM_Serif_Text } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const roboto = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});
export const dm_serif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});
