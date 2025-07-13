import { Metadata } from "next";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Libre_Franklin } from "next/font/google";

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
    </html>
  );
}

export const metadata: Metadata = {
  title: "teacher amanda seimetz - professora particular de inglês",
  description: "teacher amanda seimetz - professora particular de inglês",
};
