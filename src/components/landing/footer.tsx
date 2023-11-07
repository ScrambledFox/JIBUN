import { getDictionary } from "@/lib/dictionary";
import Socials from "../socials";
import { Locale } from "@/i18n.config";

const Footer = async ({ lang }: { lang: Locale }) => {
  const { footer } = await getDictionary(lang);

  return (
    <div className="p-8 min-h-[25vh]">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-6xl">{footer.checkOutSocials}</h1>

        <Socials lang={lang} />
      </div>
    </div>
  );
};

export default Footer;
