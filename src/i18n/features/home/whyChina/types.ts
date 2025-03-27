// src/i18n/features/home/whyChina/types.ts
export interface ReasonItem {
  title: string;
  description: string;
}

export interface WhyTranslations {
  badge: string;
  title: {
    main: string;
    highlight: string;
  };
  subtitle: string;
  reasons: ReasonItem[];
} 