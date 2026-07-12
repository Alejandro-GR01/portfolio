import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Language = "es" | "en";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const getDefaultLanguage = (): Language => {
  if (typeof window === "undefined") return "es";
  return navigator.language.startsWith("es") ? "es" : "en";
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getDefaultLanguage(),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "portfolio-language",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ language: state.language }),
    },
  ),
);
