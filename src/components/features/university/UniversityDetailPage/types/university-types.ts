import type { University } from '@/types/university'
import type { Lang } from '@/i18n/langUtils'

export interface SectionProps {
  university: University;
  lang: Lang;
}

export interface SidebarCardProps {
  university: University;
  lang: Lang;
}

export interface HeaderCardProps {
  university: University;
  activeTab: string;
  onTabChange: (value: string) => void;
  lang: Lang;
}

export interface UniversityDetailPageProps {
  university?: University;
  lang?: Lang;
}

export interface FacilityItem {
  name: string;
  description: string;
}

export interface DormitoryItem {
  name: string;
  description: string;
  amenities: string[];
  priceRange: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export interface BackgroundDecorationProps {
  className?: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  percentage: number;
}