import { Metadata } from "next";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Libre_Franklin } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br" className={libreFranklin.className}>
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-MB02LDKJ1V" />
    </html>
  );
}

export const metadata: Metadata = {
  title: "teacher amanda seimetz - professora particular de inglês",
  description: "teacher amanda seimetz - professora particular de inglês",
};
