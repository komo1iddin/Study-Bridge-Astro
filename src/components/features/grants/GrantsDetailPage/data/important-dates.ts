import type { IconName } from "@/types/icon-types"

export interface ImportantDate {
  id: string
  title: string
  date: string
  isHighlighted?: boolean
  icon?: IconName
}

export interface ImportantDatesData {
  id: string
  title: string
  dates: ImportantDate[]
}

export const konfutsiyImportantDatesData: ImportantDatesData = {
  id: "konfutsiy-dates",
  title: "Muhim sanalar",
  dates: [
    {
      id: "date1",
      title: "Ariza qabuli boshlanishi",
      date: "2024-yil dekabr",
      icon: "Calendar",
    },
    {
      id: "date2",
      title: "Ariza topshirish muddati",
      date: "2024-03-30",
      isHighlighted: true,
      icon: "Calendar",
    },
    {
      id: "date3",
      title: "Natijalar e'lon qilinishi",
      date: "2025-yil iyul",
      icon: "Calendar",
    },
    {
      id: "date4",
      title: "O'qish boshlanishi",
      date: "2025-yil sentabr",
      icon: "Calendar",
    },
  ],
}

export const erasmusImportantDatesData: ImportantDatesData = {
  id: "erasmus-dates",
  title: "Muhim sanalar",
  dates: [
    {
      id: "date1",
      title: "Ariza qabuli boshlanishi",
      date: "2025-yil noyabr",
      icon: "Calendar",
    },
    {
      id: "date2",
      title: "Ariza topshirish muddati",
      date: "2026-02-15",
      isHighlighted: true,
      icon: "Calendar",
    },
    {
      id: "date3",
      title: "Natijalar e'lon qilinishi",
      date: "2026-yil may",
      icon: "Calendar",
    },
    {
      id: "date4",
      title: "O'qish boshlanishi",
      date: "2026-yil sentabr",
      icon: "Calendar",
    },
  ],
}

// Map to store all important dates data by scholarship ID
export const importantDatesDataMap: Record<string, ImportantDatesData> = {
  "konfutsiy-2024": konfutsiyImportantDatesData,
  "erasmus-2024": erasmusImportantDatesData,
}

