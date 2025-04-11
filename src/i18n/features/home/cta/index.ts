import { ctaEn } from './en';
import { ctaRu } from './ru';
import { ctaUz } from './uz';
import type { CTATranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { CTATranslations };

export const ctaTranslations: Record<Lang, CTATranslations> = {
  en: ctaEn,
  ru: ctaRu,
  uz: ctaUz
};

export function getCTATranslations(lang: Lang): CTATranslations {
  return ctaTranslations[lang] || ctaUz;
} 