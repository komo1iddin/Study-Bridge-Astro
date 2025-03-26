import * as Lucide from 'lucide-astro';
// Define a generic icon type that works with both lucide-astro and lucide-react
type IconType = any; // This is a simplified approach - ideally you'd define a more specific type

export interface Advantage {
icon: IconType;
  translationKey: {
    title: string;
    description: string;
  };
}

export const advantages: Advantage[] = [
  {
    icon: Lucide.GraduationCap,
    translationKey: {
      title: 'advantages.education.title',
      description: 'advantages.education.description'
    }
  },
  {
    icon: Lucide.Wallet,
    translationKey: {
      title: 'advantages.price.title',
      description: 'advantages.price.description'
    }
  },
  {
    icon: Lucide.TrendingUp,
    translationKey: {
      title: 'advantages.career.title',
      description: 'advantages.career.description'
    }
  }
];
