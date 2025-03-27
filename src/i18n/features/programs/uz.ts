import type { ProgramsTranslations } from './types';

export const uz: ProgramsTranslations = {
  main: {
    title: "Bizning dasturlar",
    subtitle: "Karyera maqsadlaringizga erishishga yordam beradigan ta'lim imkoniyatlarini kashf eting",
  },
  categories: {
    bachelor: {
      title: "Bakalavr dasturlari",
      description: "Xalqaro standartlarga mos keladigan professional ta'lim dasturlari",
      duration: "4 yil",
      benefits: [
        "Kafolatlangan ish bilan ta'minlash",
        "Stipendiya imkoniyati",
        "Xalqaro sertifikatlar"
      ]
    },
    master: {
      title: "Magistratura dasturlari",
      description: "Yuqori malakali mutaxassislar tayyorlash dasturi",
      duration: "2 yil",
      benefits: [
        "Ilmiy tadqiqot imkoniyatlari",
        "Xalqaro konferensiyalarda ishtirok",
        "Yuqori malakali o'qituvchilar"
      ]
    },
    language: {
      title: "Til kurslari",
      description: "HSK darajasini oshirish va Xitoy tilini professional darajada o'rganish",
      duration: "6 oy",
      benefits: [
        "Kafolatlangan natija",
        "Kichik guruhlar",
        "Ona tili sifatida so'zlashuvchi o'qituvchilar"
      ]
    }
  },
  filter: {
    title: "Dasturlarni filtrlash",
    language: "Til",
    duration: "Davomiyligi",
    priceRange: "Narx diapazoni",
    clearFilters: "Filtrlarni tozalash"
  },
  labels: {
    duration: "Davomiyligi",
    benefits: "Dastur afzalliklari",
    price: "Dastur narxi",
    originalPrice: "Asl narxi",
    discountedPrice: "Chegirmali narx",
    deadline: "Ariza topshirish muddati",
    programs: "Dasturlar",
    viewAll: "Barcha dasturlarni ko'rish",
    applyNow: "Hozir ariza topshirish",
    learnMore: "Batafsil ma'lumot",
    noResults: "Sizning mezonlaringizga mos keladigan dasturlar topilmadi"
  },
  common: {
    discount: "Chegirma",
    discountedUntil: "Chegirma muddati"
  }
}; 