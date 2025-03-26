import type { IconName } from "@/types/icon-types"

export interface ScholarshipBenefit {
  id: string
  title: string
  description: string
  icon: IconName
}

export interface BenefitsData {
  id: string
  title: string
  description: string
  benefits: ScholarshipBenefit[]
  noteInfo: {
    title: string
    description: string
    icon: IconName
  }
}

export const konfutsiyBenefitsData: BenefitsData = {
  id: "konfutsiy-benefits",
  title: "Grant qamrovi",
  description: "Konfutsiy instituti granti quyidagi xarajatlarni qoplaydi",
  benefits: [
    {
      id: "tuition",
      title: "Til kursi to'lovi",
      description: "Barcha o'quv materiallari va darslar to'lovi to'liq qoplanadi",
      icon: "CheckCircle",
    },
    {
      id: "accommodation",
      title: "Yotoqxona to'lovi",
      description: "Universitet kampusidagi yotoqxonada bepul yashash imkoniyati",
      icon: "CheckCircle",
    },
    {
      id: "stipend",
      title: "Oylik stipendiya",
      description: "Kundalik xarajatlar uchun har oylik stipendiya (2000-3000 yuan)",
      icon: "CheckCircle",
    },
    {
      id: "cultural",
      title: "Madaniy tadbirlar",
      description: "Xitoy madaniyati bilan tanishish uchun turli tadbirlar va sayohatlar",
      icon: "CheckCircle",
    },
    {
      id: "insurance",
      title: "Tibbiy sug'urta",
      description: "Asosiy tibbiy xizmatlarni qamrab oluvchi sug'urta",
      icon: "CheckCircle",
    },
    {
      id: "materials",
      title: "O'quv materiallari",
      description: "Barcha darsliklar va o'quv qo'llanmalari bepul taqdim etiladi",
      icon: "CheckCircle",
    },
  ],
  noteInfo: {
    title: "Yo'l xarajatlari haqida",
    description:
      "Eslatma: Xalqaro yo'l xarajatlari (aviabilet) grant tomonidan qoplanmaydi. Talaba o'z hisobidan to'lashi kerak.",
    icon: "PlaneTakeoff",
  },
}

export const erasmusBenefitsData: BenefitsData = {
  id: "erasmus-benefits",
  title: "Dastur imtiyozlari",
  description: "Erasmus+ dasturi quyidagi xarajatlarni qoplaydi",
  benefits: [
    {
      id: "tuition",
      title: "O'quv to'lovi",
      description: "Barcha o'quv kurslari va dasturlar to'lovi to'liq qoplanadi",
      icon: "GraduationCap",
    },
    {
      id: "accommodation",
      title: "Yashash xarajatlari",
      description: "Oylik stipendiya yashash, ovqatlanish va transport xarajatlarini qoplaydi",
      icon: "Home",
    },
    {
      id: "travel",
      title: "Yo'l xarajatlari",
      description: "Xalqaro yo'l xarajatlari (aviabilet) qisman yoki to'liq qoplanadi",
      icon: "Plane",
    },
    {
      id: "insurance",
      title: "Tibbiy sug'urta",
      description: "Evropa Ittifoqi davlatlarida amal qiluvchi tibbiy sug'urta",
      icon: "Heart",
    },
    {
      id: "language",
      title: "Til kurslari",
      description: "Qo'shimcha til kurslarida bepul qatnashish imkoniyati",
      icon: "Languages",
    },
    {
      id: "network",
      title: "Xalqaro aloqalar",
      description: "Xalqaro hamkorlik va karyera imkoniyatlarini kengaytirish",
      icon: "Globe",
    },
  ],
  noteInfo: {
    title: "Stipendiya haqida",
    description: "Stipendiya miqdori davlatga qarab farqlanadi. O'rtacha oylik to'lov 800-1000 EUR atrofida.",
    icon: "Wallet",
  },
}

// Map to store all benefits data by scholarship ID
export const benefitsDataMap: Record<string, BenefitsData> = {
  "konfutsiy-2024": konfutsiyBenefitsData,
  "erasmus-2024": erasmusBenefitsData,
}

