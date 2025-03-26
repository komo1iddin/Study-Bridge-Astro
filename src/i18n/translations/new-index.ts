// src/i18n/translations/new-index.ts
import { uzTranslations } from './uz';
import { ruTranslations } from './ru';
import { enTranslations } from './en';
import type { Translations } from '../types';
import type { Lang } from '../langUtils';
import { getNestedValue } from '../translationUtils';

// Structured translations
export const translations: Translations = {
  uz: uzTranslations,
  ru: ruTranslations,
  en: enTranslations,
};
