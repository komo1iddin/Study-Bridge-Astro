import { contactEn } from './en';
import { contactRu } from './ru';
import { contactUz } from './uz';
import type { Lang } from '@/i18n/langUtils';
import type { ContactTranslations } from './types';

const translations = {
  en: contactEn,
  ru: contactRu,
  uz: contactUz
};

export function getContactTranslations(lang: Lang): ContactTranslations {
  return translations[lang] || translations.uz;
}

export type { ContactTranslations }; 