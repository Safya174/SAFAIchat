import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "./Locales/ar/translation.json";
import translationEN from "./Locales/en/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // اللغة الافتراضية
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
