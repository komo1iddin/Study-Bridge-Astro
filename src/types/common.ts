// src/types/common.ts
export interface Meta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}