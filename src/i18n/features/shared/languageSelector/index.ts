import { languageSelectorEn } from './en';
import { languageSelectorRu } from './ru';
import { languageSelectorUz } from './uz';
import type { LanguageSelectorTranslations } from './types';
import type { Lang } from '../../../../i18n/langUtils';

export type { LanguageSelectorTranslations };

export const languageSelectorTranslations: Record<Lang, LanguageSelectorTranslations> = {
  en: languageSelectorEn,
  ru: languageSelectorRu,
  uz: languageSelectorUz
};

export function getLanguageSelectorTranslations(lang: Lang): LanguageSelectorTranslations {
  return languageSelectorTranslations[lang] || languageSelectorUz;
} 