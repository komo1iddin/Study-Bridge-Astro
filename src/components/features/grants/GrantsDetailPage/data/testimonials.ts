export interface Testimonial {
  id: string
  name: string
  graduationYear: string
  avatarUrl: string
  testimonial: string
  initials: string
}

export interface TestimonialsData {
  id: string
  title: string
  testimonials: Testimonial[]
}

export const konfutsiyTestimonialsData: TestimonialsData = {
  id: "konfutsiy-testimonials",
  title: "Bitiruvchilar fikrlari",
  testimonials: [
    {
      id: "testimonial1",
      name: "Aziza Karimova",
      graduationYear: "2022-yil bitiruvchisi",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      testimonial:
        "\"Konfutsiy instituti granti orqali Pekin universitetida o'qish imkoniyatiga ega bo'ldim. Bu tajriba hayotimni butunlay o'zgartirib yubordi. Xitoy tilini o'rgandim va ko'plab yangi do'stlar ortirdim.\"",
      initials: "AK",
    },
    {
      id: "testimonial2",
      name: "Bobur Toshmatov",
      graduationYear: "2021-yil bitiruvchisi",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      testimonial:
        '"Xitoyda o\'qish davomida nafaqat til, balki biznes aloqalarini ham rivojlantirdim. Hozirda Xitoy kompaniyasi bilan hamkorlik qilmoqdaman. Bu grant menga katta imkoniyatlar eshigini ochdi."',
      initials: "BT",
    },
  ],
}

export const erasmusTestimonialsData: TestimonialsData = {
  id: "erasmus-testimonials",
  title: "Dastur ishtirokchilari fikrlari",
  testimonials: [
    {
      id: "testimonial1",
      name: "Dilshod Rahimov",
      graduationYear: "2023-yil bitiruvchisi",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      testimonial:
        "\"Erasmus+ dasturi orqali Germaniyada o'qish imkoniyatiga ega bo'ldim. Bu tajriba menga nafaqat akademik bilimlarni, balki yangi madaniyat va dunyoqarashni ham berdi. Dastur tufayli karyeramda katta yutuqlarga erishdim.\"",
      initials: "DR",
    },
    {
      id: "testimonial2",
      name: "Nilufar Sobirova",
      graduationYear: "2022-yil bitiruvchisi",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      testimonial:
        "\"Erasmus+ dasturi hayotimni o'zgartirib yubordi. Ispaniyada o'qish davomida nafaqat tilni, balki madaniyatni ham o'rgandim. Endi xalqaro kompaniyada ishlayapman va bu imkoniyat uchun Erasmus dasturiga minnatdorman.\"",
      initials: "NS",
    },
  ],
}

// Map to store all testimonials data by scholarship ID
export const testimonialsDataMap: Record<string, TestimonialsData> = {
  "konfutsiy-2024": konfutsiyTestimonialsData,
  "erasmus-2024": erasmusTestimonialsData,
}

