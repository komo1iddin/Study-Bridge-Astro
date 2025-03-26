import { Clock, School, Users } from 'lucide-astro';
import type { Achievement } from '@/types/about';

export const achievements: Achievement[] = [
  {
    title: 'achievements.experience.title',
    value: '10+ yil',
    description: 'achievements.experience.description',
    icon: Clock
  },
  {
    title: 'achievements.network.title',
    value: '50+ universitet',
    description: 'achievements.network.description',
    icon: School
  },
  {
    title: 'achievements.success.title',
    value: '1000+ talaba',
    description: 'achievements.success.description',
    icon: Users
  }
];