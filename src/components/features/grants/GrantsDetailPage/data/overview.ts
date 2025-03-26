import type { IconName } from "@/types/icon-types"

export interface OverviewFeature {
  id: string
  title: string
  description: string
  icon: IconName
}

export interface KeyInfo {
  id: string
  title: string
  value: string
  icon: IconName
}

export interface OverviewData {
  id: string
  title: string
  description: string[]
  features: OverviewFeature[]
  keyInfo: KeyInfo[]
}

export const konfutsiyOverviewData: OverviewData = {
  id: "konfutsiy-overview",
  title: "Grant haqida",
  description: [
    "Konfutsiy instituti granti - bu Xitoy hukumati tomonidan xorijiy talabalar uchun taqdim etiladigan maxsus dastur bo'lib, Xitoy tilini o'rganish, Xitoy madaniyati bilan tanishish va Xitoy universitetlarida ta'lim olish imkoniyatini beradi.",
    "Bu grant dasturi orqali siz nafaqat Xitoy tilini o'rganasiz, balki Xitoy madaniyati, tarixi va an'analari bilan ham yaqindan tanishasiz. Dastur davomida turli madaniy tadbirlar, sayohatlar va amaliy mashg'ulotlar tashkil etiladi. Asosan, Xitoy tili ustozi bo'lmoqchi bo'lganlar uchun beriladi",
  ],
  features: [
    {
      id: "duration",
      title: "Davomiyligi",
      description: "1-2 yil, dastur turiga qarab",
      icon: "Clock",
    },
    {
      id: "location",
      title: "Joylashuv",
      description: "Xitoyning turli shaharlari",
      icon: "MapPin",
    },
    {
      id: "education",
      title: "Ta'lim darajasi",
      description: "Bakalavr, magistr, doktorantura",
      icon: "GraduationCap",
    },
  ],
  keyInfo: [
    {
      id: "type",
      title: "Grant turi",
      value: "Language Scholarship",
      icon: "School",
    },
    {
      id: "deadline",
      title: "Muddat",
      value: "2024-03-30",
      icon: "Clock",
    },
    {
      id: "documents",
      title: "Hujjatlar",
      value: "3 ta asosiy hujjat",
      icon: "FileText",
    },
  ],
}

export const erasmusOverviewData: OverviewData = {
  id: "erasmus-overview",
  title: "Dastur haqida",
  description: [
    "Erasmus+ - bu Evropa Ittifoqi tomonidan moliyalashtiriladigan ta'lim, yoshlar va sport sohasidagi xalqaro almashinuv dasturi. Bu dastur orqali talabalar, o'qituvchilar va tadqiqotchilar Evropa universitetlarida o'qish va tajriba almashish imkoniyatiga ega bo'ladilar.",
    "Dastur ishtirokchilari nafaqat akademik bilimlarni oshirish, balki madaniyatlararo muloqot ko'nikmalarini rivojlantirish, xorijiy tillarni o'rganish va xalqaro aloqalarni kengaytirish imkoniyatiga ega bo'ladilar.",
  ],
  features: [
    {
      id: "duration",
      title: "Davomiyligi",
      description: "3-12 oy, dastur turiga qarab",
      icon: "Clock",
    },
    {
      id: "location",
      title: "Joylashuv",
      description: "Evropa Ittifoqi davlatlari",
      icon: "MapPin",
    },
    {
      id: "education",
      title: "Ta'lim darajasi",
      description: "Bakalavr, magistr, doktorantura",
      icon: "GraduationCap",
    },
  ],
  keyInfo: [
    {
      id: "type",
      title: "Dastur turi",
      value: "Xalqaro almashinuv",
      icon: "Globe",
    },
    {
      id: "deadline",
      title: "Muddat",
      value: "2024-02-15",
      icon: "Calendar",
    },
    {
      id: "documents",
      title: "Hujjatlar",
      value: "7 ta asosiy hujjat",
      icon: "FileText",
    },
  ],
}

// Map to store all overview data by scholarship ID
export const overviewDataMap: Record<string, OverviewData> = {
  "konfutsiy-2024": konfutsiyOverviewData,
  "erasmus-2024": erasmusOverviewData,
}

