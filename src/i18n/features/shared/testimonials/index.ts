import { testimonialsEn } from './en';
import { testimonialsRu } from './ru';
import { testimonialsUz } from './uz';
import type { Lang } from '@/i18n/langUtils';
import type { TestimonialsTranslations } from './types';

export const testimonialsTranslations = {
  en: testimonialsEn,
  ru: testimonialsRu,
  uz: testimonialsUz
};

export function getTestimonialsTranslations(lang: Lang): TestimonialsTranslations {
  return testimonialsTranslations[lang] || testimonialsTranslations.uz;
}

export type { TestimonialsTranslations }; 