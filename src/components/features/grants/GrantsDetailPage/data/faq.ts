export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface FAQData {
  id: string
  title: string
  faqs: FAQ[]
}

export const konfutsiyFAQData: FAQData = {
  id: "konfutsiy-faq",
  title: "Ko'p so'raladigan savollar",
  faqs: [
    {
      id: "faq1",
      question: "Grant uchun qanday talablar mavjud?",
      answer:
        "Asosiy talablar: 18 yoshdan katta bo'lish, HSK imtihonidan o'tish (kamida 3-daraja), sog'liq haqida ma'lumotnoma va motivatsion xat. Barcha hujjatlar ingliz yoki xitoy tilida bo'lishi kerak.",
    },
    {
      id: "faq2",
      question: "Grant qanday xarajatlarni qoplaydi?",
      answer:
        "Grant quyidagi xarajatlarni qoplaydi: o'quv to'lovi, yotoqxona to'lovi, oylik stipendiya, tibbiy sug'urta va o'quv materiallari. Xalqaro yo'l xarajatlari (aviabilet) qoplanmaydi.",
    },
    {
      id: "faq3",
      question: "Ariza topshirish muddati qachon tugaydi?",
      answer:
        "Joriy yil uchun ariza topshirish muddati 2025-yil 30-martgacha. Kechiktirilgan arizalar qabul qilinmaydi.",
    },
    {
      id: "faq4",
      question: "HSK sertifikati bo'lmasa ham ariza topshirsa bo'ladimi?",
      answer:
        "Ha, HSK sertifikati bo'lmasa ham ariza topshirish mumkin, lekin bu holda grant olish imkoniyati kamroq bo'ladi. Sertifikat mavjud bo'lsa, bu sizning imkoniyatlaringizni oshiradi.",
    },
  ],
}

export const erasmusFAQData: FAQData = {
  id: "erasmus-faq",
  title: "Ko'p so'raladigan savollar",
  faqs: [
    {
      id: "faq1",
      question: "Dastur uchun qanday talablar mavjud?",
      answer:
        "Asosiy talablar: oliy ta'lim muassasasida ro'yxatda bo'lish, ingliz tili yoki o'qish rejalashtirilgan davlat tilini bilish (kamida B2 daraja), yaxshi akademik ko'rsatkichlar va motivatsion xat.",
    },
    {
      id: "faq2",
      question: "Dastur qanday xarajatlarni qoplaydi?",
      answer:
        "Dastur quyidagi xarajatlarni qoplaydi: o'quv to'lovi, oylik stipendiya, yo'l xarajatlari (qisman yoki to'liq) va tibbiy sug'urta.",
    },
    {
      id: "faq3",
      question: "Ariza topshirish muddati qachon tugaydi?",
      answer:
        "Joriy yil uchun ariza topshirish muddati 2024-yil 15-fevralgacha. Kechiktirilgan arizalar qabul qilinmaydi.",
    },
    {
      id: "faq4",
      question: "Qaysi davlatlarda o'qish mumkin?",
      answer:
        "Erasmus+ dasturi doirasida Evropa Ittifoqi davlatlari, shuningdek, dasturga a'zo bo'lgan boshqa davlatlardagi universitetlarda o'qish mumkin.",
    },
  ],
}

// Map to store all FAQ data by scholarship ID
export const faqDataMap: Record<string, FAQData> = {
  "konfutsiy-2024": konfutsiyFAQData,
  "erasmus-2024": erasmusFAQData,
}

