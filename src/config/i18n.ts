import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { defaultLanguage } from './system';

i18n

  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    load: 'languageOnly',
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
