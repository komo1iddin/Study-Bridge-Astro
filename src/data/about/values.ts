import { Award, Heart, Target } from 'lucide-astro';
import type { Value } from '@/types/about';

export const values: Value[] = [
  {
    title: 'values.quality.title',
    description: 'values.quality.description',
    icon: Award
  },
  {
    title: 'values.trust.title',
    description: 'values.trust.description',
    icon: Heart
  },
  {
    title: 'values.results.title',
    description: 'values.results.description',
    icon: Target
  }
];