// src/i18n/features/home/ourTeam/index.ts
import { ourTeamEn } from './en';
import { ourTeamRu } from './ru';
import { ourTeamUz } from './uz';
import type { OurTeamTranslations, TeamPosition, TeamValue } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { OurTeamTranslations, TeamPosition, TeamValue };

// Export translations by language
export const ourTeamTranslations: Record<Lang, OurTeamTranslations> = {
  en: ourTeamEn,
  ru: ourTeamRu,
  uz: ourTeamUz
};

// Helper function to get translations for a specific language
export function getOurTeamTranslations(lang: Lang): OurTeamTranslations {
  return ourTeamTranslations[lang] || ourTeamUz; // Default to Uzbek if language not found
} 