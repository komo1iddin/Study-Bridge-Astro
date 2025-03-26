import type { Lang } from '../../i18n/langUtils';

export interface GrantData {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  type: string;
  coverage: Record<Lang, string[]>;
  deadline: string;
  requirements: Record<Lang, string[]>;
  documents: Record<Lang, string[]>;
  benefits: Record<Lang, string[]>;
  image: string;
  color: string;
}

export interface Grant extends GrantData {
  id: string;
}