import type { IconName } from "@/types/icon-types"

export interface ScholarshipRequirement {
  id: string
  title: string
  description: string
  icon?: IconName
}

export interface RequirementsData {
  id: string
  title: string
  description: string
  requirements: ScholarshipRequirement[]
  noteInfo: {
    title: string
    description: string
    icon: IconName
  }
  documentsList: {
    title: string
    documents: {
      id: string
      name: string
    }[]
  }
}

export const konfutsiyRequirementsData: RequirementsData = {
  id: "konfutsiy-requirements",
  title: "Talablar",
  description: "Konfutsiy instituti grantiga topshirish uchun quyidagi talablarga javob berish kerak",
  requirements: [
    {
      id: "age",
      title: "18 yoshdan katta bo'lish",
      description: "Ariza topshirish vaqtida 18 yoshdan katta bo'lish kerak",
      icon: "User",
    },
    {
      id: "hsk",
      title: "HSK imtihonidan o'tish",
      description: "Xitoy tili bilimini tasdiqlovchi HSK sertifikatiga ega bo'lish (kamida HSK 3 daraja)",
      icon: "FileText",
    },
    {
      id: "health",
      title: "Sog'liq haqida ma'lumotnoma",
      description: "Sog'liq holati yaxshi ekanligini tasdiqlovchi tibbiy ma'lumotnoma",
      icon: "Heart",
    },
    {
      id: "motivation",
      title: "Motivatsion xat",
      description: "Xitoyda o'qish sabablari va maqsadlarini tushuntiruvchi xat",
      icon: "FileText",
    },
  ],
  noteInfo: {
    title: "Muhim eslatma",
    description:
      "Barcha hujjatlar ingliz yoki xitoy tilida taqdim etilishi kerak. Boshqa tillardagi hujjatlar notarial tasdiqlangan tarjima bilan birga topshirilishi shart.",
    icon: "HelpCircle",
  },
  documentsList: {
    title: "Talab qilinadigan hujjatlar ro'yxati",
    documents: [
      { id: "doc1", name: "To'ldirilgan ariza formasi" },
      { id: "doc2", name: "Pasport nusxasi (kamida 1 yil amal qilish muddati bilan)" },
      { id: "doc3", name: "Diplom yoki o'qish joyidan ma'lumotnoma" },
      { id: "doc4", name: "HSK sertifikati (agar mavjud bo'lsa)" },
      { id: "doc5", name: "Tibbiy ko'rikdan o'tganlik haqida ma'lumotnoma" },
      { id: "doc6", name: "2 dona 3x4 rasm" },
    ],
  },
}

export const erasmusRequirementsData: RequirementsData = {
  id: "erasmus-requirements",
  title: "Dastur talablari",
  description: "Erasmus+ dasturiga ariza topshirish uchun quyidagi talablarga javob berish kerak",
  requirements: [
    {
      id: "student",
      title: "Talaba maqomi",
      description: "Ariza topshirish vaqtida oliy ta'lim muassasasida ro'yxatda bo'lish kerak",
      icon: "GraduationCap",
    },
    {
      id: "language",
      title: "Til bilimi",
      description: "Ingliz tili yoki o'qish rejalashtirilgan davlat tilini bilish (kamida B2 daraja)",
      icon: "Languages",
    },
    {
      id: "academic",
      title: "Akademik ko'rsatkichlar",
      description: "O'rtacha ball 3.0/4.0 yoki 70/100 dan yuqori bo'lishi kerak",
      icon: "Award",
    },
    {
      id: "motivation",
      title: "Motivatsion xat",
      description: "Dasturda ishtirok etish sabablari va maqsadlarini tushuntiruvchi xat",
      icon: "FileText",
    },
  ],
  noteInfo: {
    title: "Muhim eslatma",
    description:
      "Barcha hujjatlar ingliz tilida taqdim etilishi kerak. Boshqa tillardagi hujjatlar rasmiy tarjima bilan birga topshirilishi shart.",
    icon: "AlertCircle",
  },
  documentsList: {
    title: "Talab qilinadigan hujjatlar ro'yxati",
    documents: [
      { id: "doc1", name: "To'ldirilgan online ariza" },
      { id: "doc2", name: "CV (Europass formatida)" },
      { id: "doc3", name: "Motivatsion xat" },
      { id: "doc4", name: "Til sertifikati (IELTS, TOEFL, va boshqalar)" },
      { id: "doc5", name: "Transkript (o'qish joyidan)" },
      { id: "doc6", name: "Pasport nusxasi" },
      { id: "doc7", name: "Tavsiya xati (kamida 1 ta)" },
    ],
  },
}

// Map to store all requirements data by scholarship ID
export const requirementsDataMap: Record<string, RequirementsData> = {
  "konfutsiy-2024": konfutsiyRequirementsData,
  "erasmus-2024": erasmusRequirementsData,
}

