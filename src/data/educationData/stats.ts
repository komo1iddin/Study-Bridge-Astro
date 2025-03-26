import * as Lucide from 'lucide-astro';
// Define a generic icon type that works with both lucide-astro and lucide-react
type IconType = any; // This is a simplified approach - ideally you'd define a more specific type

export interface Stat {
  value: string;
icon: IconType;
  translationKey: {
    label: string;
    description: string;
  };
}

export const stats: Stat[] = [
  {
    value: '1000+',
    icon: Lucide.Users,
    translationKey: {
      label: 'stats.students.label',
      description: 'stats.students.description'
    }
  },
  {
    value: '50+',
    icon: Lucide.Building2,
    translationKey: {
      label: 'stats.universities.label',
      description: 'stats.universities.description'
    }
  },
  {
    value: '98%',
    icon: Lucide.CheckCircle,
    translationKey: {
      label: 'stats.success.label',
      description: 'stats.success.description'
    }
  },
  {
    value: '10+',
    icon: Lucide.Award,
    translationKey: {
      label: 'stats.experience.label',
      description: 'stats.experience.description'
    }
  }
];
