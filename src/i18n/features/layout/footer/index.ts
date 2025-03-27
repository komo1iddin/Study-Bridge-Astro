import { footerEn } from './en';
import { footerRu } from './ru';
import { footerUz } from './uz';
import type { FooterTranslations } from './types';
import type { Lang } from '../../../../i18n/langUtils';

export type { FooterTranslations };

export const footerTranslations: Record<Lang, FooterTranslations> = {
  en: footerEn,
  ru: footerRu,
  uz: footerUz
};

export function getFooterTranslations(lang: Lang): FooterTranslations {
  return footerTranslations[lang] || footerUz;
} 