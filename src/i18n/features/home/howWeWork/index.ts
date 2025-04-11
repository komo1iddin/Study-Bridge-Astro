import { howWeWorkEn } from './en';
import { howWeWorkRu } from './ru';
import { howWeWorkUz } from './uz';
import type { HowWeWorkTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { HowWeWorkTranslations };

export const howWeWorkTranslations: Record<Lang, HowWeWorkTranslations> = {
  en: howWeWorkEn,
  ru: howWeWorkRu,
  uz: howWeWorkUz
};

export function getHowWeWorkTranslations(lang: Lang): HowWeWorkTranslations {
  return howWeWorkTranslations[lang] || howWeWorkUz;
}