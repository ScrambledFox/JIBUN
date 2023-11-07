import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "Joris Lodewijks",
  description: "Joris Lodewijks' portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
