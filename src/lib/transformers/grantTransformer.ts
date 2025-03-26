import type { Lang } from '@/i18n/langUtils';
import { calculateDaysRemaining } from '@/lib/utils/dateUtils';

export interface GrantData {
  id: string;
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

export interface TransformedGrantData {
  id: string;
  title: string;
  description: string;
  type: string;
  deadline: string;
  daysRemaining: number;
  documentsCount: number;
  documents: string;
  badges: Array<{ text: string; variant?: "default" | "outline" }>;
  benefits: string[];
  requirements: string[];
  coverage: string[];
  image: string;
  progressPercentage: number;
  features: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  universities: Array<{
    id: number;
    name: string;
    location: string;
    rating: number;
  }>;
  testimonials: Array<{
    id: number;
    name: string;
    avatarUrl: string;
    graduationYear: string;
    testimonial: string;
    initials: string;
  }>;
  keyInfo: Array<{
    id: number;
    icon: string;
    title: string;
    value: string;
  }>;
  tabs: {
    overview: {
      title: string;
      content: string;
    };
    benefits: {
      title: string;
      items: Array<{
        id: number;
        title: string;
        description: string;
        icon: string;
      }>;
    };
    requirements: {
      title: string;
      items: Array<{
        id: number;
        title: string;
        description: string;
        icon: string;
      }>;
    };
    process: {
      title: string;
      steps: Array<{
        id: number;
        title: string;
        description: string;
        icon: string;
      }>;
    };
  };
  faq: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export function transformGrantData(grant: GrantData, lang: Lang): TransformedGrantData {
  // Handle potential missing data with default values
  const daysRemaining = calculateDaysRemaining(grant.deadline || new Date().toISOString());
  const progressPercentage = Math.max(0, Math.min(100, 100 - (daysRemaining / 90) * 100));
  
  // Ensure all required properties exist with fallbacks
  const safeGrant = {
    id: grant.id || '',
    title: grant.title || { [lang]: '' },
    description: grant.description || { [lang]: '' },
    type: grant.type || '',
    deadline: grant.deadline || new Date().toISOString(),
    coverage: grant.coverage || { [lang]: [] },
    documents: grant.documents || { [lang]: [] },
    benefits: grant.benefits || { [lang]: [] },
    requirements: grant.requirements || { [lang]: [] },
    image: grant.image || '/images/grants/default.jpg',
    color: grant.color || 'blue'
  };
  
  // Safely access array elements with fallbacks
  const getCoverageItem = (index: number) => {
    const coverageArray = safeGrant.coverage[lang] || [];
    return coverageArray[index] || `Coverage item ${index + 1}`;
  };
  
  return {
    id: safeGrant.id,
    title: safeGrant.title[lang] || '',
    description: safeGrant.description[lang] || '',
    type: safeGrant.type,
    deadline: safeGrant.deadline,
    daysRemaining: daysRemaining,
    progressPercentage: progressPercentage,
    documentsCount: (safeGrant.documents[lang] || []).length,
    documents: (safeGrant.documents[lang] || []).join(', '),
    badges: [
      { text: safeGrant.type },
      { text: `${daysRemaining} kun qoldi` },
      { text: `${(safeGrant.documents[lang] || []).length} ta hujjat` }
    ],
    benefits: safeGrant.benefits[lang] || [],
    requirements: safeGrant.requirements[lang] || [],
    coverage: safeGrant.coverage[lang] || [],
    image: safeGrant.image,
    features: [
      {
        id: 1,
        title: getCoverageItem(0),
        description: "O'qish va yashash xarajatlari qoplanadi"
      },
      {
        id: 2,
        title: getCoverageItem(1),
        description: "Yotoqxona bilan ta'minlanadi"
      },
      {
        id: 3,
        title: getCoverageItem(2),
        description: "Oylik stipendiya beriladi"
      }
    ],
    universities: [
      {
        id: 1,
        name: "Peking University",
        location: "Beijing, China",
        rating: 5
      },
      {
        id: 2,
        name: "Tsinghua University",
        location: "Beijing, China",
        rating: 5
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Aziz Rahimov",
        avatarUrl: "/images/testimonials/student1.jpg",
        graduationYear: "2023",
        testimonial: "Bu grant menga Xitoyda o'qish imkoniyatini berdi",
        initials: "AR"
      },
      {
        id: 2,
        name: "Malika Karimova",
        avatarUrl: "/images/testimonials/student2.jpg",
        graduationYear: "2022",
        testimonial: "Ajoyib tajriba va imkoniyatlar",
        initials: "MK"
      }
    ],
    keyInfo: [
      {
        id: 1,
        icon: "Calendar",
        title: "Ariza muddati",
        value: safeGrant.deadline
      },
      {
        id: 2,
        icon: "GraduationCap",
        title: "Grant turi",
        value: safeGrant.type
      },
      {
        id: 3,
        icon: "FileText",
        title: "Kerakli hujjatlar",
        value: `${(safeGrant.documents[lang] || []).length} ta`
      }
    ],
    tabs: {
      overview: {
        title: lang === 'uz' ? "Umumiy ma'lumot" : "Overview",
        content: safeGrant.description[lang] || ''
      },
      benefits: {
        title: lang === 'uz' ? "Imtiyozlar" : "Benefits",
        items: (safeGrant.benefits[lang] || []).map((benefit, index) => ({
          id: index + 1,
          title: benefit,
          description: benefit,
          icon: "Check"
        }))
      },
      requirements: {
        title: lang === 'uz' ? "Talablar" : "Requirements",
        items: (safeGrant.requirements[lang] || []).map((req, index) => ({
          id: index + 1,
          title: req,
          description: req,
          icon: "CheckSquare"
        }))
      },
      process: {
        title: lang === 'uz' ? "Jarayon" : "Process",
        steps: [
          {
            id: 1,
            title: lang === 'uz' ? "Ariza topshirish" : "Submit Application",
            description: lang === 'uz' ? "Online ariza formani to'ldiring" : "Fill out the online application form",
            icon: "FileText"
          },
          {
            id: 2,
            title: lang === 'uz' ? "Hujjatlarni yuborish" : "Submit Documents",
            description: lang === 'uz' ? "Kerakli hujjatlarni tayyorlang va yuboring" : "Prepare and submit required documents",
            icon: "Upload"
          },
          {
            id: 3,
            title: lang === 'uz' ? "Intervyu" : "Interview",
            description: lang === 'uz' ? "Online suhbatdan o'ting" : "Complete the online interview",
            icon: "Video"
          }
        ]
      }
    },
    faq: [
      {
        id: "faq-1",
        question: "Grant dasturiga kimlar ariza topshira oladi?",
        answer: "18 yoshdan 35 yoshgacha bo'lgan O'zbekiston fuqarolari ariza topshirishlari mumkin."
      },
      {
        id: "faq-2",
        question: "Qancha muddat kutish kerak?",
        answer: "Ariza topshirganingizdan so'ng 2-3 hafta ichida javob olasiz."
      },
      {
        id: "faq-3",
        question: "Grant to'liq qoplaydimi?",
        answer: "Ha, grant dasturi o'qish va yashash xarajatlarini to'liq qoplaydi."
      }
    ]
  };
}