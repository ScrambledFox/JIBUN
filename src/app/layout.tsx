import Navbar from "@/components/portfolio/navbar";

import "@/styling/globals.css";
import "@/styling/App.module.css";

import Script from "next/script";

import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/portfolio/footer";
import PageAnimatePresence from "@/components/portfolio/HOC/PageAnimatePresence";

export const metadata = {
  title: "Joris Lodewijks' Portfolio",
  description:
    "Joris Lodewijks' Portfolio describing his skills and projects and his masters in Industrial Design at TU/e.",
};

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}
        </Script>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1a1a1a" />.
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* <title>{metadata.title}</title> */}
          <meta name="description" content={metadata.description} />
          <meta
            name="keywords"
            content="Joris Lodewijks, Portfolio, Industrial Design, TU/e, Eindhoven, Design, Designer, Developer, Programmer, Engineer, Industrial Designer, Industrial Design Engineer, Industrial Design Engineering, Design Engineer, Design Engineering, Industrial Design Engineering, Industrial Design Engineer, Industrial Design Engineering"
          />
        </Head>
        <main
          className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
        >
          <Navbar />
          <PageAnimatePresence>{children}</PageAnimatePresence>
          <Footer />
        </main>
      </body>
    </html>
  );
}
