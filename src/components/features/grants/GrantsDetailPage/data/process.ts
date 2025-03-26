import type { IconName } from "@/types/icon-types"

export interface ProcessStep {
  id: string
  title: string
  description: string
  stepNumber: number
}

export interface ProcessData {
  id: string
  title: string
  description: string
  steps: ProcessStep[]
  importantDateInfo: {
    title: string
    description: string
    highlightedDate: string
    icon: IconName
  }
}

export const konfutsiyProcessData: ProcessData = {
  id: "konfutsiy-process",
  title: "Ariza topshirish jarayoni",
  description: "Konfutsiy instituti grantiga ariza topshirish bosqichlari",
  steps: [
    {
      id: "step1",
      title: "Ariza formasini to'ldirish",
      description: "Rasmiy veb-saytdan ariza formasini yuklab oling va barcha ma'lumotlarni to'g'ri to'ldiring.",
      stepNumber: 1,
    },
    {
      id: "step2",
      title: "Kerakli hujjatlarni tayyorlash",
      description: "Barcha talab qilinadigan hujjatlarni to'plang va ularning nusxalarini tayyorlang.",
      stepNumber: 2,
    },
    {
      id: "step3",
      title: "Hujjatlarni topshirish",
      description:
        "To'ldirilgan ariza va hujjatlarni belgilangan muddatgacha Konfutsiy institutiga yoki elchixonaga topshiring.",
      stepNumber: 3,
    },
    {
      id: "step4",
      title: "Intervyu bosqichi",
      description:
        "Dastlabki saralashdan o'tgan nomzodlar intervyuga taklif qilinadi. Bu bosqichda motivatsiya va til bilimi tekshiriladi.",
      stepNumber: 4,
    },
    {
      id: "step5",
      title: "Natijalarni kutish",
      description:
        "Barcha bosqichlardan o'tgan nomzodlar natijalarni kutadilar. Natijalar e-mail orqali yoki rasmiy veb-saytda e'lon qilinadi.",
      stepNumber: 5,
    },
  ],
  importantDateInfo: {
    title: "Muhim sana",
    description: "Ariza topshirish oxirgi muddati: 2024-yil 30-mart. Kechiktirilgan arizalar qabul qilinmaydi.",
    highlightedDate: "2024-yil 30-mart",
    icon: "Clock",
  },
}

// Example of another scholarship process data
export const erasmusProcessData: ProcessData = {
  id: "erasmus-process",
  title: "Ariza topshirish jarayoni",
  description: "Erasmus+ dasturiga ariza topshirish bosqichlari",
  steps: [
    {
      id: "step1",
      title: "Online platformaga ro'yxatdan o'tish",
      description: "Erasmus+ rasmiy veb-saytida shaxsiy kabinet yarating va ro'yxatdan o'ting.",
      stepNumber: 1,
    },
    {
      id: "step2",
      title: "Universitet tanlash",
      description:
        "Dasturda ishtirok etuvchi universitetlar ro'yxatidan o'zingizga mos variantlarni tanlang (3 tagacha).",
      stepNumber: 2,
    },
    {
      id: "step3",
      title: "Hujjatlarni yuklash",
      description:
        "Barcha talab qilingan hujjatlarni (CV, motivatsion xat, diplom, til sertifikati) platformaga yuklang.",
      stepNumber: 3,
    },
    {
      id: "step4",
      title: "Arizani tasdiqlash",
      description: "Barcha ma'lumotlarni tekshirib, arizani yakuniy tasdiqlang.",
      stepNumber: 4,
    },
    {
      id: "step5",
      title: "Natijalarni kutish",
      description: "Ariza ko'rib chiqilgandan so'ng, natijalar e-mail orqali yuboriladi.",
      stepNumber: 5,
    },
  ],
  importantDateInfo: {
    title: "Muhim sana",
    description: "Ariza topshirish oxirgi muddati: 2024-yil 15-fevral. Kechiktirilgan arizalar qabul qilinmaydi.",
    highlightedDate: "2024-yil 15-fevral",
    icon: "Calendar",
  },
}

// Map to store all process data by scholarship ID
export const processDataMap: Record<string, ProcessData> = {
  "konfutsiy-2024": konfutsiyProcessData,
  "erasmus-2024": erasmusProcessData,
}

