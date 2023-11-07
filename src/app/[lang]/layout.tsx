import "./globals.css";

import { Inter } from "next/font/google";
import { Locale } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "Joris Lodewijks",
  description: "Joris Lodewijks' portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
