// src/i18n/features/home/missionStats/index.ts
import { missionStatsEn } from './en';
import { missionStatsRu } from './ru';
import { missionStatsUz } from './uz';
import type { MissionStatsTranslations, StatItem, AdvantageItem } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { MissionStatsTranslations, StatItem, AdvantageItem };

// Export translations by language
export const missionStatsTranslations: Record<Lang, MissionStatsTranslations> = {
  en: missionStatsEn,
  ru: missionStatsRu,
  uz: missionStatsUz
};

// Helper function to get translations for a specific language
export function getMissionStatsTranslations(lang: Lang): MissionStatsTranslations {
  return missionStatsTranslations[lang] || missionStatsUz; // Default to Uzbek if language not found
} 