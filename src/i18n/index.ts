import { useLanguageStore } from "./store";
import * as es from "./es";
import * as en from "./en";

const translations = { es, en } as const;

export const useLanguage = () => {
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const t = translations[language];
  return { language, setLanguage, t };
};

export { useLanguageStore } from "./store";
export type { Language } from "./store";
