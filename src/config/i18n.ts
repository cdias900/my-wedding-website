import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locales } from 'locales';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: locales,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
