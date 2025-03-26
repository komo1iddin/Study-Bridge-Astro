import { Users, School, FileText, Building2, Plane, Home } from "lucide-react"

// Colors configuration
export const colors = {
  blue: {
    600: "#2563eb",
    700: "#1d4ed8",
  },
  red: "#C82220",
  green: {
    500: "#22c55e",
    600: "#16a34a",
  },
  slate: {
    500: "#64748b",
    600: "#475569",
    800: "#1e293b",
  },
  primary: {
    50: "#f0f7ff",
    100: "#e0eeff", 
    200: "#b9ddff",
    300: "#7cc2ff",
    400: "#36a5ff",
    500: "#0088ff",
    600: "#2463EB",
    700: "#0051df",
    800: "#0042b5",
    900: "#003c91",
  },
}

export interface StepType {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  benefits: string[];
}

export const steps: StepType[] = [
  {
    id: 1,
    title: "Bepul konsultatsiya",
    shortDesc: "Mutaxassislar bilan suhbat",
    description: "Xitoyda o'qish imkoniyatlari bo'yicha mutaxassislarimiz bilan bepul konsultatsiya",
    icon: Users,
    color: colors.primary[600],
    bgColor: colors.primary[100],
    benefits: [
      "Xitoy universitetlari reytingi va narxlar tahlili",
      "Xitoyda o'qish afzalliklari haqida ma'lumot",
      "Sizga mos yo'nalish va universitet tanlash",
    ],
  },
  {
    id: 2,
    title: "Universitet tanlash",
    shortDesc: "Eng mos variant",
    description: "Sizning qobiliyat va imkoniyatlaringizga mos Xitoy universitetini tanlash",
    icon: School,
    color: colors.red,
    bgColor: "#FADCDC",
    benefits: [
      "Top-100 Xitoy universitetlari bilan hamkorlik",
      "Sizning budget va akademik ko'rsatkichlaringizga mos tanlov",
      "Xitoyning turli hududlaridagi universitetlar tahlili",
    ],
  },
  {
    id: 3,
    title: "Hujjatlar tayyorlash",
    shortDesc: "Barcha zarur hujjatlar",
    description: "Xitoy universitetlari uchun kerakli barcha hujjatlarni professional darajada tayyorlash",
    icon: FileText,
    color: colors.green[600],
    bgColor: "#DCFCE7",
    benefits: [
      "Pasport va diplom tarjimalari (Xitoy tiliga)",
      "Motivatsion xat yozishda yordam",
      "Xitoy universitetlari talablariga mos rezyume tayyorlash",
    ],
  },
  {
    id: 4,
    title: "Universitetga topshirish",
    shortDesc: "Qabul jarayoni",
    description: "Tanlangan Xitoy universitetlariga hujjatlarni topshirish va monitoring",
    icon: Building2,
    color: colors.primary[900],
    bgColor: colors.primary[50],
    benefits: [
      "Xitoy universitetlari bilan to'g'ridan-to'g'ri aloqa",
      "Hujjatlar to'g'riligini tekshirish",
      "Qabul jarayonini kuzatib borish",
    ],
  },
  {
    id: 5,
    title: "Viza va sayohat",
    shortDesc: "Xitoyga jo'nash",
    description: "Xitoy vizasini olish va sayohatni rejalashtirish bo'yicha to'liq yordam",
    icon: Plane,
    color: colors.slate[800],
    bgColor: "#E2E8F0",
    benefits: [
      "Xitoy talaba vizasi olishda 100% yordam",
      "Aviachiptalar bron qilish xizmati",
      "Xitoyga sayohat rejasi va yo'riqnoma",
    ],
  },
  {
    id: 6,
    title: "Xitoyda qo'llab-quvvatlash",
    shortDesc: "Muvaffaqiyatli natija",
    description: "Xitoyga yetib borgandan so'ng ham doimiy qo'llab-quvvatlash xizmatlari",
    icon: Home,
    color: colors.primary[700],
    bgColor: colors.primary[200],
    benefits: [
      "Xitoyda yashash joyi topishda ko'mak",
      "Mahalliy madaniyatga moslashishda yordam",
      "O'quv davri mobaynida doimiy aloqa va maslahatlar",
    ],
  },
]
