export interface ScholarshipInfo {
  id: string
  title: string
  description: string
  deadline: string
  type: string
  documents: string
  documentsCount: number
  duration: string
  location: string
  educationLevel: string
  daysRemaining: number
  badges: {
    text: string
    variant?: "default" | "outline"
  }[]
}

export const scholarships: ScholarshipInfo[] = [
  {
    id: "konfutsiy-2024",
    title: "Konfutsiy instituti granti",
    description: "Xitoy tilini o'rganish uchun maxsus grant dasturi",
    deadline: "2024-03-30",
    type: "Language Scholarship",
    documents: "3 ta asosiy hujjat",
    documentsCount: 3,
    duration: "1-2 yil, dastur turiga qarab",
    location: "Xitoyning turli shaharlari",
    educationLevel: "Bakalavr, magistr, doktorantura",
    daysRemaining: 15,
    badges: [{ text: "Xalqaro" }, { text: "1-2 yil" }, { text: "100+ o'rin" }],
  },
  {
    id: "erasmus-2024",
    title: "Erasmus+ dasturi",
    description: "Evropa universitetlarida o'qish uchun almashinuv dasturi",
    deadline: "2024-02-15",
    type: "Exchange Program",
    documents: "7 ta asosiy hujjat",
    documentsCount: 7,
    duration: "3-12 oy, dastur turiga qarab",
    location: "Evropa Ittifoqi davlatlari",
    educationLevel: "Bakalavr, magistr, doktorantura",
    daysRemaining: 30,
    badges: [{ text: "Xalqaro" }, { text: "3-12 oy" }, { text: "1000+ o'rin" }],
  },
]

// Function to get scholarship by ID
export function getScholarshipById(id: string): ScholarshipInfo | undefined {
  return scholarships.find((scholarship) => scholarship.id === id)
}

