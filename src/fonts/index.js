import { Righteous, Montserrat } from "next/font/google";

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", '500', '700'],
  variable: "--font-montserrat",
});

export const fontRighteous = Righteous({
  subsets: ["latin"],
  weight: ["400",],
  variable: "--font-righteous",
});
