import type { Locale } from "@/i18n.config";

const projects = {
  en: () => import("@/data/projects/en.json").then((m) => m.default),
  jp: () => import("@/data/projects/jp.json").then((m) => m.default),
};

export const getProjects = async (locale: Locale) => projects[locale]();

export const getLocaleData = async (data: string, locale: Locale) => {
  const dataTranslations = {
    en: () => import(`@/data/${data}/en.json`).then((m) => m.default),
    jp: () => import(`@/data/${data}/jp.json`).then((m) => m.default),
  };

  return dataTranslations[locale]();
};
