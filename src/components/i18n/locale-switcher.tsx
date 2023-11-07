"use client";

import { i18n } from "@/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LocaleSwitcher = () => {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex flex-row gap-4">
      {i18n.locales.map((locale) => (
        <li
          key={locale}
          className="hover:scale-105 transition-all duration-250 ease-in-out"
        >
          <Link
            className="bg-black rounded-xl py-2 px-4 "
            href={redirectedPathname(locale)}
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;
