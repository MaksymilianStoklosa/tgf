import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { resources } from "config/locales/resources";

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
