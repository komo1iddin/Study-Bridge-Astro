// Faqat interfeys va filter ma'lumotlarini qoldiramiz
export const educationTypes = [
  { value: "bachelor", label: "Bachelor" },
  { value: "master", label: "Master's" },
  { value: "1+2", label: "1+2 Program" },
  { value: "language", label: "Language Course" },
]

// Shaharlar endi content papkasidagi ma'lumotlardan olinadi
export const cities = [] // Bu qiymat fileSystemReader orqali to'ldiriladi

export const rankingRanges = [
  { value: "1-5", label: "Top 5" },
  { value: "6-10", label: "6-10" },
  { value: "11-20", label: "11-20" },
  { value: "21+", label: "21+" },
]

export interface University {
  id: string | number;
  name: string;
  logo?: string;
  image?: string;
  city: string;
  description: string;
  educationType?: string[];
  hasGrants?: boolean;
  featured?: boolean;
  ranking?: number;
  foundedYear?: number;
  studentsCount?: number;
  internationalStudents?: number;
}

export type Filters = {
  educationType: string
  city: string
  hasGrants: string
  ranking: string
  featured: string
}



