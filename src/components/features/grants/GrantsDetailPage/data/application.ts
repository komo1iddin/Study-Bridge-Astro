import type { IconName } from "@/types/icon-types"

export interface ApplicationButton {
  id: string
  text: string
  icon: IconName
  variant: "default" | "outline"
}

export interface ApplicationData {
  id: string
  title: string
  deadline: string
  daysRemaining: number
  progressPercentage: number
  buttons: ApplicationButton[]
}

export const konfutsiyApplicationData: ApplicationData = {
  id: "konfutsiy-application",
  title: "Ariza topshirish muddati",
  deadline: "2024-03-30",
  daysRemaining: 15,
  progressPercentage: 75,
  buttons: [
    {
      id: "apply",
      text: "Ariza topshirish",
      icon: "ChevronRight",
      variant: "default",
    },
    {
      id: "download",
      text: "Ariza formasini yuklash",
      icon: "Download",
      variant: "outline",
    },
    {
      id: "call",
      text: "Qo'ng'iroq qilish",
      icon: "Phone",
      variant: "outline",
    },
  ],
}

export const erasmusApplicationData: ApplicationData = {
  id: "erasmus-application",
  title: "Ariza topshirish muddati",
  deadline: "2024-02-15",
  daysRemaining: 30,
  progressPercentage: 50,
  buttons: [
    {
      id: "apply",
      text: "Online ariza topshirish",
      icon: "ChevronRight",
      variant: "default",
    },
    {
      id: "guide",
      text: "Ariza to'ldirish qo'llanmasi",
      icon: "FileText",
      variant: "outline",
    },
    {
      id: "contact",
      text: "Maslahat olish",
      icon: "MessageSquare",
      variant: "outline",
    },
  ],
}

// Map to store all application data by scholarship ID
export const applicationDataMap: Record<string, ApplicationData> = {
  "konfutsiy-2024": konfutsiyApplicationData,
  "erasmus-2024": erasmusApplicationData,
}

