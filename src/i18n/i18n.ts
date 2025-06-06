import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en-Us/translations.json";
import translationES from "./locales/es-CO/translations.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        es: { translation: translationES },
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
