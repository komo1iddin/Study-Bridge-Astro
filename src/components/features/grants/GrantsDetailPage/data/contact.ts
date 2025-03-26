import type { IconName } from "@/types/icon-types"

export interface ContactInfo {
  id: string
  text: string
  icon: IconName
}

export interface ContactData {
  id: string
  title: string
  description: string
  buttonText: string
  contactInfo: ContactInfo[]
  icon: IconName
}

export const konfutsiyContactData: ContactData = {
  id: "konfutsiy-contact",
  title: "Yordam kerakmi?",
  description: "Grant bo'yicha savollaringiz bo'lsa, mutaxassislarimiz bepul konsultatsiya berishadi",
  buttonText: "Savol berish",
  icon: "MessageSquare",
  contactInfo: [
    {
      id: "phone",
      text: "+998 71 123 45 67",
      icon: "Phone",
    },
    {
      id: "email",
      text: "info@konfutsiy.uz",
      icon: "MessageSquare",
    },
  ],
}

export const erasmusContactData: ContactData = {
  id: "erasmus-contact",
  title: "Qo'shimcha ma'lumot kerakmi?",
  description: "Dastur bo'yicha savollaringiz bo'lsa, mutaxassislarimiz sizga yordam berishadi",
  buttonText: "Bog'lanish",
  icon: "HelpCircle",
  contactInfo: [
    {
      id: "phone",
      text: "+998 71 234 56 78",
      icon: "Phone",
    },
    {
      id: "email",
      text: "info@erasmusplus.uz",
      icon: "Mail",
    },
    {
      id: "website",
      text: "www.erasmusplus.uz",
      icon: "Globe",
    },
  ],
}

// Map to store all contact data by scholarship ID
export const contactDataMap: Record<string, ContactData> = {
  "konfutsiy-2024": konfutsiyContactData,
  "erasmus-2024": erasmusContactData,
}

