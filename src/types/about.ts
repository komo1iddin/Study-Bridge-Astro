import type { LucideIcon } from 'lucide-astro';

export interface Stat {
  value: string;
  label: string;
}

export interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}