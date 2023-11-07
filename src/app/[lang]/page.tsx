import Landing from "@/components/landing/intro";
import Bubbles from "@/components/landing/bubbles";
import Projects from "@/components/landing/projects";

import { Locale } from "@/i18n.config";
import Footer from "@/components/landing/footer";
import Socials from "@/components/socials";
import LocaleSwitcher from "@/components/i18n/locale-switcher";

const Sections = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="relative bg-gradient-to-br from-red-700 to-blue-600 overflow-hidden">
      <Bubbles />

      <div className="relative z-20 flex flex-col px-32 mb-16">
        <Landing lang={lang} />
        <Projects lang={lang} />
        <Footer lang={lang} />
      </div>

      <div className="absolute z-50 left-10 top-10">
        <Socials lang={lang} />
      </div>

      <div className="absolute z-50 right-10 top-10">
        <LocaleSwitcher />
      </div>
    </main>
  );
}
