import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files directly
import { enTranslations } from './locales/en';
import { nlTranslations } from './locales/nl';

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true, // Enable debug to see what's happening
    
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'nl-BE'],
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['sessionStorage', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['sessionStorage', 'localStorage'],
      lookupSessionStorage: 'i18nextLng',
      lookupLocalStorage: 'i18nextLng'
    },
    
    resources: {
      'en-US': {
        translation: enTranslations
      },
      'nl-BE': {
        translation: nlTranslations
      }
    }
  });

export default i18n;