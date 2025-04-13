import { contactEn } from './en';
import { contactRu } from './ru';
import { contactUz } from './uz';
import type { Lang } from '@/i18n/langUtils';
import type { ContactTranslations } from './types';

export const contactTranslations = {
  en: contactEn,
  ru: contactRu,
  uz: contactUz
};

export function getContactTranslations(lang: Lang): ContactTranslations {
  return contactTranslations[lang] || contactTranslations.uz;
}

export type { ContactTranslations }; 