import type { LucideIcon } from 'lucide-astro';

export interface FAQCategory {
  id: string;
  icon: LucideIcon;
  translationKey: string;
  featured?: boolean;
}

export interface FAQ {
  id: string;
  categoryId: string;
  question: Record<string, string>;
  answer: Record<string, string>;
  order?: number;
  lastUpdated?: string;
  image?: string;
  sources?: Array<{
    title: string;
    url: string;
  }>;
}
