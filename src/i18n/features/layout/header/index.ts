import { headerEn } from './en';
import { headerRu } from './ru';
import { headerUz } from './uz';
import type { HeaderTranslations } from './types';
import type { Lang } from '../../../../i18n/langUtils';

export type { HeaderTranslations };

export const headerTranslations: Record<Lang, HeaderTranslations> = {
  en: headerEn,
  ru: headerRu,
  uz: headerUz
};

export function getHeaderTranslations(lang: Lang): HeaderTranslations {
  return headerTranslations[lang] || headerUz;
} 