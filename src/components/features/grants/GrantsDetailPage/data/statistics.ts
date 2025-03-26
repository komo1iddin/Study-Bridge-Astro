export interface Statistic {
  id: string
  value: string
  label: string
}

export interface StatisticsData {
  id: string
  title: string
  statistics: Statistic[]
}

export const konfutsiyStatisticsData: StatisticsData = {
  id: "konfutsiy-stats",
  title: "Statistika",
  statistics: [
    {
      id: "stat1",
      value: "500+",
      label: "Grant olganlar",
    },
    {
      id: "stat2",
      value: "15+",
      label: "Universitetlar",
    },
    {
      id: "stat3",
      value: "90%",
      label: "Bitiruvchilar",
    },
    {
      id: "stat4",
      value: "100%",
      label: "Ish bilan ta'minlash",
    },
  ],
}

export const erasmusStatisticsData: StatisticsData = {
  id: "erasmus-stats",
  title: "Statistika",
  statistics: [
    {
      id: "stat1",
      value: "10M+",
      label: "Dastur ishtirokchilari",
    },
    {
      id: "stat2",
      value: "33+",
      label: "Ishtirokchi davlatlar",
    },
    {
      id: "stat3",
      value: "95%",
      label: "Mamnuniyat darajasi",
    },
    {
      id: "stat4",
      value: "85%",
      label: "Ish topish ko'rsatkichi",
    },
  ],
}

// Map to store all statistics data by scholarship ID
export const statisticsDataMap: Record<string, StatisticsData> = {
  "konfutsiy-2024": konfutsiyStatisticsData,
  "erasmus-2024": erasmusStatisticsData,
}

