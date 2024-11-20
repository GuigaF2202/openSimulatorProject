import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEn from './locales/en/translation.json';
import translationsPt from './locales/pt/translation.json';
import translationsEs from './locales/es/translation.json';

// Configuração do i18n
i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Inicializa o react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      pt: { translation: translationsPt },
      es: { translation: translationsEs },
    },
    fallbackLng: 'en', // Idioma padrão (se o idioma detectado não estiver disponível)
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  });

export default i18n;
