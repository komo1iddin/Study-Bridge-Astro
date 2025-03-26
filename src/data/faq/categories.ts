import { School, FileText, BookOpen, Home, DollarSign, Award, GraduationCap, Languages } from 'lucide-astro';
import type { FAQCategory } from '@/types/faq';

export const faqCategories: FAQCategory[] = [
  {
    id: 'admission',
    icon: School,
    translationKey: 'faq.categories.admission',
    featured: true
  },
  {
    id: 'documents',
    icon: FileText,
    translationKey: 'faq.categories.documents',
    featured: true
  },
  {
    id: 'study',
    icon: BookOpen,
    translationKey: 'faq.categories.study'
  },
  {
    id: 'life',
    icon: Home,
    translationKey: 'faq.categories.life'
  },
  {
    id: 'finance',
    icon: DollarSign,
    translationKey: 'faq.categories.finance'
  },
  {
    id: 'scholarships',
    icon: Award,
    translationKey: 'faq.categories.scholarships',
    featured: true
  },
  {
    id: 'transfer',
    icon: GraduationCap,
    translationKey: 'faq.categories.transfer'
  },
  {
    id: 'language',
    icon: Languages,
    translationKey: 'faq.categories.language',
    featured: true
  }
];
