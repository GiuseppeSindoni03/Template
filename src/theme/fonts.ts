import {
  Inter,
  Roboto_Serif,
  DM_Serif_Text,
  Erica_One,
  Montserrat,
  Anton,
} from "next/font/google";

export const ericaOne = Erica_One({
  subsets: ["latin"],
  variable: "--font-erica",
  weight: "400",
});
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

export const anton = Anton({ subsets: ["latin"], weight: "400" });
export const monteSerrat = Montserrat({ subsets: ["latin"] });
