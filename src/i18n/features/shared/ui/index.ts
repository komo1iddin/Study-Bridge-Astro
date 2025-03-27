import { uiEn } from './en';
import { uiRu } from './ru';
import { uiUz } from './uz';
import type { Lang } from '@/i18n/langUtils';
import type { UITranslations } from './types';

const translations = {
  en: uiEn,
  ru: uiRu,
  uz: uiUz
};

export function getUITranslations(lang: Lang): UITranslations {
  return translations[lang] || translations.uz;
}

export type { UITranslations }; 