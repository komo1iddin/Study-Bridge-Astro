import { popupEn } from './en';
import { popupRu } from './ru';
import { popupUz } from './uz';
import type { PopupTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { PopupTranslations };

// Export translations by language
export const popupTranslations: Record<Lang, PopupTranslations> = {
  en: popupEn,
  ru: popupRu,
  uz: popupUz
};

// Getter function
export function getPopupTranslations(lang: Lang): PopupTranslations {
  return popupTranslations[lang] || popupTranslations.uz;
} 