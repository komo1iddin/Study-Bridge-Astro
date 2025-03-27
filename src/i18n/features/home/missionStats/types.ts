// src/i18n/features/home/missionStats/types.ts

export interface StatItem {
  label: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface MissionStatsTranslations {
  badge: string;
  title: string;
  subtitle: string;
  stats: {
    students: StatItem;
    universities: StatItem;
    success: StatItem;
    experience: StatItem;
  };
  advantages: {
    education: AdvantageItem;
    price: AdvantageItem;
    career: AdvantageItem;
  };
} 