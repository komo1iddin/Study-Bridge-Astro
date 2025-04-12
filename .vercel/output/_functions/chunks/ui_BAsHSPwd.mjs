import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, e as renderComponent, F as Fragment, d as renderTemplate, u as unescapeHTML, f as defineScriptVars } from "./vendor_fPK89n42.mjs";
import "kleur/colors";
import { clsx } from "clsx";
import { s as sanitize_props, r as rest_props, p as push, f as fallback, c as spread_attributes, d as clsx$1, h as slot, b as bind_props, a as pop, j as attr_class, k as attr_style, l as escape_html, m as stringify } from "./svelte-vendor_tqOFL8AJ.mjs";
import { A as Arrow_right, $ as $$MessageCircleQuestion, a as $$Phone, b as $$ArrowRight } from "./icons_gbmVFOaE.mjs";
import { twMerge } from "tailwind-merge";
import { g as getUniversityPageTranslations, a as getUniversityDetailTranslations } from "./university-features_DGFRsfZW.mjs";
const defaultLang = "uz";
const languages = ["uz", "ru", "en"];
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  return lang && languages.includes(lang) ? lang : defaultLang;
}
const navigationEn = {
  home: "Home",
  about: {
    _value: "About",
    us: "About Us",
    reviews: "Student Reviews",
    studentPath: "Student Journey",
    contacts: "Contacts",
    faq: "FAQ"
  },
  programs: "Programs",
  universities: "Universities",
  grants: "Grants",
  blog: "Blog",
  menu: "Menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  selectLanguage: "Select language",
  submitApplication: "Submit application",
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  }
};
const navigationRu = {
  home: "Главная",
  about: {
    _value: "О компании",
    us: "О нас",
    reviews: "Отзывы студентов",
    studentPath: "Путь студента",
    contacts: "Контакты",
    faq: "Вопросы и ответы"
  },
  programs: "Программы",
  universities: "Университеты",
  grants: "Гранты",
  blog: "Блог",
  menu: "Меню",
  openMenu: "Открыть меню",
  closeMenu: "Закрыть меню",
  selectLanguage: "Выбрать язык",
  submitApplication: "Подать заявку",
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  }
};
const navigationUz = {
  home: "Bosh sahifa",
  about: {
    _value: "Kompaniya haqida",
    us: "Biz haqimizda",
    reviews: "Talabalar sharhlari",
    studentPath: "Talaba yo'li",
    contacts: "Kontaktlar",
    faq: "Savol-javoblar"
  },
  programs: "Dasturlar",
  universities: "Universitetlar",
  grants: "Grantlar",
  blog: "Blog",
  menu: "Menu",
  openMenu: "Menuni ochish",
  closeMenu: "Menuni yopish",
  selectLanguage: "Tilni tanlash",
  submitApplication: "Ariza topshirish",
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  }
};
const navigationTranslations = {
  en: navigationEn,
  ru: navigationRu,
  uz: navigationUz
};
function getNavigationTranslations(lang) {
  return navigationTranslations[lang] || navigationUz;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const uzTranslations = {
  faq: {
    pageTitle: "Ko'p so'raladigan savollar | Study in China",
    title: "Ko'p beriladigan savollar",
    subtitle: "Asosiy savol va javoblar",
    notFoundQuestion: "Javob topa olmadingizmi? Bizga yozing!",
    askQuestion: "Savolingizni yuboring",
    search: {
      placeholder: "Savollar bo'yicha qidirish...",
      noResults: "Hech qanday natija topilmadi"
    },
    categories: {
      admission: "Qabul jarayoni",
      documents: "Hujjatlar",
      study: "O'qish",
      life: "Xitoyda hayot",
      finance: "Moliyaviy masalalar",
      scholarships: "Stipendiyalar",
      transfer: "O'qishni ko'chirish",
      language: "Til kurslari"
    },
    common: {
      readMore: "Batafsil",
      showAll: "Hammasini ko'rsatish",
      hideAll: "Yashirish",
      relatedQuestions: "Aloqador savollar"
    },
    guides: {
      title: "Bosqichma-bosqich yo'riqnomalar"
    },
    popularQuestions: "Eng ko'p so'raladigan savollar",
    contactUs: "Bizga savolingizni yuboring",
    meta: {
      title: "Ko'p so'raladigan savollar | Study in China",
      description: "Xitoyda o'qish bo'yicha barcha savollarga javoblar"
    },
    wizard: {
      title: "Sizga yordam kerakmi?",
      description: "Sizga mos savol-javobni topishda yordam beramiz",
      step1: "Kategoriyani tanlang",
      step2: "Savolni tanlang",
      step3: "Javobni ko'ring",
      categoriesGroup: "FAQ kategoriyalari",
      backButton: "Orqaga",
      nextButton: "Keyingi",
      restartButton: "Boshidan boshlash"
    }
  },
  howWeWork: {
    title: "O'qishga kirish jarayoni",
    subtitle: "Xitoyda o'qish uchun qabul jarayonini osonlashtiramiz"
  },
  hero: {
    description: "Orzularingizni amalga oshirishga yordam beramiz yoki pulingizni qaytarib beramiz!",
    stats: {
      universities: "Universitetlar",
      students: "Talabalar",
      success: "Muvaffaqiyat",
      experience: "Yillik tajriba"
    },
    badge: {
      enrollment: "2025-yil qabuli boshlandi!"
    },
    title: {
      first: "Xitoyda o'qish orzusi endi",
      highlight: "reallik"
    },
    buttons: {
      apply: "Hoziroq ariza topshiring",
      programs: "Dasturlarni ko'rish"
    },
    image: {
      alt: "Modern university campus"
    },
    tooltip: {
      label: "Ko'proq bilmoqchimisiz?",
      content: "Xitoyda o'qish haqida barcha ma'lumotlar shu yerda! Eng yaxshi universitetlar, grant dasturlari va boshqa imkoniyatlar haqida bilib oling"
    },
    cards: {
      scholarship: {
        title: "Grant asosida o'qish",
        desc: "100% grant asosida o'qish imkoniyati"
      },
      admission: {
        title: "Kafolatlangan qabul",
        desc: "100% kafolatlangan universitet qabuli"
      }
    }
  },
  common: {
    home: "Bosh sahifa",
    about: "Kompaniya haqida",
    contact: "Biz bilan bog'lanish",
    universities: "Universitetlar",
    programs: "O'quv dasturlari",
    blog: "Blog"
  },
  nav: {
    home: "Bosh sahifa",
    about: {
      _value: "Kompaniya haqida",
      us: "Biz haqimizda",
      reviews: "Mijozlarimiz fikrlari",
      studentPath: "Xitoyda o'qish yo'lingiz",
      contacts: "Bog'lanish ma'lumotlari",
      faq: "Savollar va javoblar"
    },
    programs: "Ta'lim dasturlari",
    universities: "Universitetlar",
    grants: "Stipendiyalar va imkoniyatlar",
    blog: "Yangiliklar",
    menu: "Menu",
    openMenu: "Menuni ochish",
    closeMenu: "Menuni yopish",
    selectLanguage: "Tilni tanlang",
    submitApplication: "Ariza topshirish"
  },
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  },
  header: {
    cta: "Ariza topshirish"
  },
  universities: {
    featured: {
      title: "Yetakchi universitetlar",
      subtitle: "Xitoyning yuqori reytingli va sifatli ta'lim muassasalarini kashf eting",
      view_all: "Barcha universitetlarni ko'rish",
      swipeToSlide: "Slayd uchun suring",
      students: "talaba",
      faculties: "Fakultetlar",
      moreInfo: "Batafsil ma'lumot"
    },
    title: "Universitetlar",
    filters: "Filterlar",
    reset: "Qayta tiklash",
    location: "Joylashuv",
    top: "Top universitet",
    students: "Talabalar",
    tuition: "O'qish narxi",
    rating: "Reyting",
    programs: "O'quv dasturlari",
    fields: "Yo'nalishlar",
    count_found: "Universitetlar topildi: {0}",
    campus: "Kampus",
    annual_fee: "Yillik to'lov",
    details: "Batafsil",
    no_results: "Sizning mezonlaringizga mos universitetlar topilmadi.",
    no_fields: "Yo'nalishlar ko'rsatilmagan",
    no_programs: "Dasturlar ko'rsatilmagan",
    cta: {
      title: "{university} da oʻqimoqchimisiz?",
      description: "Bepul konsultatsiya uchun ariza qoldiring",
      button: "Ariza qoldirish"
    }
  },
  programs: {
    main: {
      title: "Istalgan ta'lim dasturlari",
      subtitle: "Grant imkoniyatilari mavjud"
    }
  },
  contacts: {
    badge: "Aloqa",
    title: "Biz bilan bog'laning",
    subtitle: "Qulay usulni tanlang yoki ariza qoldiring",
    methods: {
      phone: "Telefon",
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp"
    },
    offices: {
      title: "Bizning ofislar",
      hours: "Ish vaqti",
      address: "Toshkent sh., Shayxontohur tumani, Namunaviy ko'chasi, 123"
    },
    form: {
      title: "Ariza qoldirish",
      description: "Formani to'ldiring va biz siz bilan tez orada bog'lanamiz",
      name: "Ismingiz",
      email: "Email",
      phone: "Telefon raqamingiz",
      message: "Xabar",
      message_placeholder: "Xabaringizni yozing...",
      submit: "Yuborish",
      privacy: {
        text: "Men ",
        link: "shaxsiy ma'lumotlarni qayta ishlash shartlariga roziman"
      }
    },
    social: {
      title: "Bizni ijtimoiy tarmoqlarda kuzating"
    }
  },
  comparison: {
    title: "Ta'lim imkoniyatlarini solishtiring",
    subtitle: "Xitoy va O'zbekiston farqi",
    category: "Kategoriya",
    china: "Xitoy",
    uzbekistan: "O'zbekiston",
    cta: {
      _value: "Xitoyda o'qish haqida ko'proq ma'lumot olishni xohlaysizmi?",
      button: "Bepul konsultatsiya olish"
    },
    stories: {
      title: "Bitiruvchilarimizning muvaffaqiyat tarixi",
      story1: {
        name: "Aziza Karimova",
        university: "Pekin universiteti",
        year: "2021",
        position: "Xalqaro kompaniyada marketing menejeri",
        quote: "Xitoyda o'qish menga xalqaro darajadagi bilim va tajriba berdi. Bu muvaffaqiyatimning asosiy kaliti bo'ldi."
      },
      story2: {
        name: "Bobur Aliyev",
        university: "Shanxay Jiao Tong universiteti",
        year: "2020",
        position: "IT kompaniya asoschisi",
        quote: "Xitoyda olgan bilimlarim va tajribam o'z biznesimni boshlashda katta yordam berdi. Men o'rgangan innovatsion yondashuvlar biznesimni rivojlantirishda muhim ahamiyatga ega."
      },
      story3: {
        name: "Nilufar Rahimova",
        university: "Fudan universiteti",
        year: "2019",
        position: "Xalqaro munosabatlar bo'yicha mutaxassis",
        quote: "Xitoyda o'qish davomida men nafaqat o'z sohamda chuqur bilim oldim, balki turli madaniyatlar bilan muloqot qilish ko'nikmalarini ham rivojlantirdim. Bu xalqaro karyeramda juda muhim."
      }
    },
    education: {
      category: "Ta'lim sifati",
      china: "Jahon reytingidagi universitetlar, xalqaro diplomlar",
      uzbekistan: "Mahalliy darajadagi universitetlar, cheklangan xalqaro e'tirof"
    },
    tuition: {
      category: "Yillik xarajat",
      china: "$2,000 - $8,000 (grantlar bilan arzonroq)",
      uzbekistan: "$1,000 - $5,000 (grantlar juda kam)"
    },
    opportunities: {
      category: "Karyera imkoniyatlari",
      china: "Global kompaniyalarda ish, yuqori ish haqi",
      uzbekistan: "Mahalliy bozor, cheklangan xalqaro aloqalar"
    },
    technology: {
      category: "Amaliyot va texnologiyalar",
      china: "Zamonaviy laboratoriyalar, real loyihalar",
      uzbekistan: "Nazariy bilim, eskirgan uskunalar (ba'zan)"
    }
  },
  guarantees: {
    badge: "Bizning kafolatlarimiz",
    title: "Muvaffaqiyatga kafolat beramiz!",
    subtitle: "Sizning Xitoyda o'qishingizni qulay va ishonchli qilamiz",
    ourGuarantees: "Bizning kafolatlarimiz",
    ourAchievements: "Bizning yutuqlarimiz",
    servicesDescription: "Biz sizning muvaffaqiyatli qabulingiz va qulay ta'lim olishingiz uchun to'liq xizmatlar kompleksini taqdim etamiz.",
    achievementsDescription: "Yillar davomida biz yuzlab talabalarga eng yaxshi universitetlarga kirish va o'z ta'lim maqsadlariga erishishda yordam berdik. Bizning statistikamiz o'z-o'zidan gapiradi.",
    getConsultation: "Konsultatsiya olish",
    list: {
      enrollment: '"Tanlagan universitetingizga 100% qabul kafolati."',
      visa: "Vizani olish va barcha hujjatlarni rasmiylashtirishda yordam",
      adaptation: "O'qish joyida moslashishga to'liq qo'llab-quvvatlash",
      living: "Yashash va maishiy masalalarni hal qilishda yordam",
      program: "Sizga mos o'quv dasturini tanlash bo'yicha maslahatlar",
      finance: "Moliyaviy masalalar bo'yicha to'liq ko'mak"
    },
    stats: {
      studentsEnrolled: "Talabalar qabul qilindi",
      successfulEnrollments: "Muvaffaqiyatli qabullar",
      partnerUniversities: "Hamkor universitetlar",
      satisfiedClients: "Mamnun mijozlar"
    }
  },
  blog: {
    latest: {
      title: "So'nggi maqolalar",
      subtitle: "Blogdan foydali ma'lumotlar oling"
    }
  },
  partners: {
    title: "Bizning hamkor universitetlar",
    description: "Faqat ishonchli va tanlangan universitetlar",
    swipeToSlide: "Surish orqali ko'ring",
    viewAllPartners: "Barcha hamkorlar"
  },
  whyChina: {
    badge: "Nima uchun aynan Xitoy?",
    title: {
      main: "Xitoyda o'qishning",
      highlight: "6 ta asosiy afzalligi"
    },
    subtitle: "Bu nafaqat diplom, balki butun dunyo tan oladigan tajriba"
  },
  success: {
    badge: "Kelajak sari",
    title: "Sizning muvaffaqiyatingiz, bizning maqsadimiz",
    subtitle: "Bizning maqsadimiz – sizning orzularingizni ro'yobga chiqarish.",
    team: {
      title: "Bizning jamoa",
      description: "Tajribali mutaxassislar jamoasi sizning muvaffaqiyatingiz uchun ishlaydi",
      position1: "Ta'lim maslahatchisi",
      position2: "Dastur koordinatori",
      position3: "Xalqaro aloqalar bo'yicha mutaxassis",
      position4: "Talabalar bilan ishlash bo'yicha mutaxassis"
    },
    values: {
      mainTitle: "Bizning qadriyatlarimiz",
      title1: "Maqsadga yo'naltirilganlik",
      desc1: "Har bir talabaning shaxsiy maqsadlariga erishishiga yordam berish",
      title2: "G'amxo'rlik",
      desc2: "Talabalarimiz farovonligi va muvaffaqiyati uchun qayg'urish",
      title3: "Sifat",
      desc3: "Ta'lim va xizmatlarning yuqori sifatini ta'minlash"
    }
  },
  contact: {
    modal: {
      title: "Maslahat olish",
      description: "Kontaktlaringizni qoldiring, biz siz bilan tez orada bog'lanamiz"
    },
    form: {
      name: {
        _value: "Ismingiz",
        placeholder: "Ismingizni kiriting"
      },
      phone: {
        _value: "Telefon",
        placeholder: "+998 90 123 45 67"
      },
      email: {
        _value: "Email",
        placeholder: "example@mail.com"
      },
      submit: "Arizani yuborish",
      success: "Rahmat! Sizning arizangiz muvaffaqiyatli yuborildi.",
      privacy: {
        text: "Tugmani bosish orqali, siz bizning",
        link: "maxfiylik siyosatimizga rozilik bildirasiz"
      }
    }
  },
  education: {
    mission: {
      badge: "Bizning maqsadimiz",
      title: "Nega aynan biz ?",
      subtitle: "Xitoyda sifatli va hamyonbop ta'lim olish imkoniyatini taqdim etamiz"
    }
  },
  stats: {
    students: {
      label: "Yuborilgan talabalar",
      description: "Xitoyning yetakchi universitetlarida muvaffaqiyatli tahsil olmoqda"
    },
    universities: {
      label: "Hamkor universitetlar",
      description: "Top universitetlar bilan to'g'ridan-to'g'ri shartnomalar"
    },
    success: {
      label: "Muvaffaqiyatli qabul",
      description: "Tanlangan universitetga kafolatlangan qabul"
    },
    experience: {
      label: "Yillik tajriba",
      description: "Professional ekspertlar jamoasi"
    }
  },
  special: {
    offer: {
      badge: "Maxsus taklif",
      title: "Cheklangan imkoniyat!",
      subtitle: "Xitoyda o'qishni boshlash uchun maxsus chegirmalar va bonuslar",
      companyName: "Study Bridge",
      companySlogan: "Xitoyda ta'lim olish uchun ko'prigingiz",
      mainHeading: {
        first: "Kafolatli qabul",
        highlight: "2025-yil uchun"
      },
      description: {
        first: "Bakalavr yoki magistratura dasturlariga qabul qilinganingizda til kurslari uchun",
        discount: "20% chegirma",
        second: "oling. Taklif 2025 yil 1 martgacha amal qiladi."
      },
      price: {
        label: "O'qish narxi",
        amount: "$3,000 dan",
        period: "/semestr",
        discountBadge: "20% CHEGIRMA"
      },
      included: {
        title: "Narxga quyidagilar kiradi"
      },
      features: {
        campus: "Kampusda yashash",
        insurance: "Tibbiy sug'urta",
        materials: "O'quv materiallari"
      },
      buttons: {
        getOffer: "Taklifni olish",
        moreInfo: "Ko'proq ma'lumot"
      },
      image: {
        alt: "Universitet kampusi",
        caption: "Universitet kampusi"
      },
      importantDates: {
        title: "Muhim sanalar"
      },
      deadlines: {
        spring: {
          date: "1 mart 2025",
          text: "Bahorgi semestr uchun ariza topshirish muddati"
        },
        summer: {
          date: "15 aprel 2025",
          text: "Yozgi til kurslarining boshlanishi"
        }
      },
      contact: {
        label: "Biz bilan bog'laning",
        phone: "+998 90 123 45 67"
      },
      badges: {
        accredited: "Akkreditatsiyadan o'tgan agentlik",
        partners: "30+ hamkor universitetlar"
      }
    }
  },
  testimonials: {
    main: {
      title: "Mijozlarimiz fikrlari",
      subtitle: "Ko'proq taassurot oling"
    }
  },
  advantages: {
    education: {
      title: "Sifatli ta'lim",
      description: "Xitoy universitetlari jahon reytingida top-100 ga kiradi"
    },
    price: {
      title: "Hamyonbop narxlar",
      description: "O'qish narxi yiliga $2000 dan + stipendiyalar"
    },
    career: {
      title: "Karyera istiqbollari",
      description: "Talab yuqori mutaxassisliklar va xalqaro diplom"
    },
    study: {
      title: "Zamonaviy o'qitish",
      description: "Innovatsion o'qitish metodlari va amaliy tajriba"
    },
    life: {
      title: "Qulay turmush sharoiti",
      description: "Zamonaviy kampuslar va arzon turmush xarajatlari"
    },
    work: {
      title: "Ish imkoniyatlari",
      description: "O'qish davrida ishlash va amaliyot o'tash imkoniyatlari"
    }
  },
  studentPath: {
    pageTitle: "Xitoyda o'qish yo'lingiz | Study in China",
    hero: {
      title: "Xitoyda o'qish yo'lingiz",
      subtitle: "Orzudan diplomgacha — har bir bosqichda siz bilan birgamiz",
      buttons: {
        consultation: "Konsultatsiya olish",
        learnProcess: "Jarayonni o'rganish"
      }
    },
    journey: {
      title: "Xitoyda ta'lim olish yo'lingiz",
      subtitle: "Biz sizni orzudan haqiqatga o'tish jarayonida har bir bosqichda qo'llab-quvvatlaymiz",
      exploration: {
        title: "Tadqiqot",
        description: "Xitoyda o'qish imkoniyatlarini o'rganish",
        services: {
          consultation: "Mutaxassislar bilan bepul konsultatsiya",
          selection: "Mos universitetlarni tanlash",
          costAnalysis: "O'qish va yashash xarajatlarini tahlil qilish",
          scholarships: "Stipendiyalar va grantlar haqida ma'lumot"
        }
      },
      preparation: {
        title: "Tayyorgarlik",
        description: "Qabul va til imtihonlariga tayyorgarlik",
        services: {
          hskCourses: "HSK imtihoniga tayyorgarlik kurslari",
          motivationLetter: "Motivatsion xat tuzishda yordam",
          interview: "Suhbatga tayyorgarlik",
          requirements: "Dastur talablari bo'yicha maslahatlar"
        }
      },
      application: {
        title: "Qabul",
        description: "Universitetlarga hujjatlarni rasmiylashtirish va topshirish",
        services: {
          documents: "Zarur hujjatlarni to'plash",
          translation: "Tarjima va notarial tasdiqlash",
          submission: "Universitetlarga arizalarni topshirish",
          tracking: "Ariza holatini kuzatish"
        }
      },
      documentation: {
        title: "Hujjatlar",
        description: "Viza olish va jo'nashga tayyorgarlik",
        services: {
          visaDocuments: "Viza uchun hujjatlarni tayyorlash",
          visaInterview: "Viza suhbatidan o'tish bo'yicha maslahat",
          tickets: "Chipta bron qilishda yordam",
          insurance: "Sug'urta rasmiylashtirish"
        }
      },
      arrival: {
        title: "Kelish",
        description: "Kutib olish va joyida moslashishga yordam",
        services: {
          airportPickup: "Aeroportda kutib olish",
          accommodation: "Joylashtirish bilan yordam",
          registration: "Universitetda ro'yxatdan o'tish",
          simCard: "Mahalliy SIM-karta rasmiylashtirish"
        }
      },
      study: {
        title: "O'qish",
        description: "O'quv jarayonida qo'llab-quvvatlash",
        services: {
          academicSupport: "Akademik maslahat",
          adaptation: "O'quv jarayoniga moslashishda yordam",
          extraClasses: "Qo'shimcha mashg'ulotlarni tashkil etish",
          events: "Talabalar tadbirlarida ishtirok etish"
        }
      },
      career: {
        title: "Karyera",
        description: "O'qishdan keyin karyera qurishda yordam",
        services: {
          employment: "Ishga joylashish bo'yicha maslahatlar",
          resume: "Rezyume tuzishda yordam",
          interviews: "Suhbatlarga tayyorgarlik",
          internships: "Xitoyda amaliyot topishda yordam"
        }
      },
      network: {
        title: "Jamiyat",
        description: "Xalqaro bitiruvchilar jamiyatiga qo'shilish",
        services: {
          alumni: "Bitiruvchilar bilan aloqa",
          projects: "Xalqaro loyihalarda ishtirok etish",
          contacts: "Kontaktlar bazasiga kirish",
          events: "Kasbiy tadbirlarga takliflar"
        }
      }
    }
  },
  about: {
    title: "Bizning kompaniya haqida",
    subtitle: "Biz talabalarga Xitoyning eng yaxshi universitetlarida o'qish orzusini amalga oshirishga yordam beramiz",
    callToAction: "Biz bilan bog'laning",
    stats: {
      students: {
        count: "Mamnun talabalar",
        description: "Muvaffaqiyatli bitiruvchilar"
      },
      universities: {
        count: "Hamkor universitetlar",
        description: "Ishonchli hamkorlar"
      },
      success: {
        rate: "Muvaffaqiyatli qabullar",
        description: "Yuqori natijalar"
      },
      experience: {
        years: "Yillik tajriba",
        description: "Professional xizmat"
      }
    },
    achievements: {
      experience: {
        title: "Ish tajribasi",
        description: "Talabalarga Xitoyning eng yaxshi universitetlariga kirish imkoniyatini yaratamiz"
      },
      network: {
        title: "Hamkorlik tarmog'i",
        description: "Xitoyning yetakchi universitetlari bilan to'g'ridan-to'g'ri shartnomalar"
      },
      success: {
        title: "Muvaffaqiyatli holatlar",
        description: "Talabalarga Xitoyda o'qish orzusini amalga oshirishda yordam berdik"
      }
    },
    values: {
      title: "Bizning qadriyatlarimiz",
      subtitle: "Har bir talaba uchun eng yaxshi natijalar",
      quality: {
        title: "Sifat",
        description: "Har bir talaba uchun eng yaxshi ta'lim imkoniyatlarini ta'minlash"
      },
      trust: {
        title: "Ishonch",
        description: "Har bir talaba bilan shaffof va halol munosabatlar o'rnatish"
      },
      results: {
        title: "Natijalar",
        description: "Talabalarning muvaffaqiyati bizning asosiy maqsadimiz"
      }
    },
    timeline: {
      title: "Bizning tarix",
      subtitle: "2013-yildan buyon Xitoyda ta'lim olishni istagan talabalarga yordam berib kelmoqdamiz",
      foundation: {
        title: "Kompaniya tashkil etildi",
        description: "Xitoy universitetlariga o'qishga kirishda yordam berish maqsadida tashkil etilgan"
      },
      partnership: {
        title: "Birinchi hamkorlik shartnomasi",
        description: "Pekin universiteti bilan birinchi rasmiy hamkorlik shartnomasi imzolandi"
      },
      students: {
        title: "500+ talaba",
        description: "500 dan ortiq talaba bizning yordamimiz bilan Xitoyda o'qishga kirdi"
      },
      universities: {
        title: "50+ hamkor universitetlar",
        description: "Xitoyning eng nufuzli universitetlari bilan hamkorlik aloqalari o'rnatildi"
      }
    },
    team: {
      title: "Bizning jamoa",
      subtitle: "Sizga muvaffaqiyatga erishish yo'lida yordam beradigan professionallar"
    },
    cta: {
      title: "Xitoyga o'z yo'lingizni boshlashga tayyormisiz?",
      subtitle: "Bepul maslahat olish va o'qish imkoniyatlari haqida ko'proq bilish uchun biz bilan bog'laning",
      button: "Biz bilan bog'laning"
    }
  },
  popup: {
    offer_badge: "Maxsus taklif",
    title: "Xitoyda ta'lim olishni xohlaysizmi?",
    description: "Bepul maslahat olish uchun bugun ariza qoldiring"
  },
  cta: {
    title: "KELAJAGINGIZNI KUTIB O'TIRMANG - UNI YARATING!",
    description: "Xitoyda o'qish orqali kelajagingizni bugundan boshlab o'zgartiring. Biz sizga yordam berishga tayyormiz!",
    button: "Formani to'ldiring",
    phone: "+998 90 123-45-67"
  }
};
const ruTranslations = {
  faq: {
    title: "Часто задаваемые вопросы",
    subtitle: "Ответы на наиболее популярные вопросы об обучении в Китае",
    notFoundQuestion: "Не нашли ответ на свой вопрос?",
    askQuestion: "Задать вопрос",
    search: {
      placeholder: "Поиск по вопросам...",
      noResults: "Ничего не найдено"
    },
    categories: {
      admission: "Процесс поступления",
      documents: "Документы",
      study: "Обучение",
      life: "Жизнь в Китае",
      finance: "Финансовые вопросы",
      scholarships: "Стипендии",
      transfer: "Перевод",
      language: "Языковые курсы"
    },
    common: {
      readMore: "Подробнее",
      showAll: "Показать все",
      hideAll: "Скрыть",
      relatedQuestions: "Похожие вопросы"
    },
    guides: {
      title: "Пошаговые руководства"
    },
    popularQuestions: "Самые популярные вопросы",
    contactUs: "Отправьте нам свой вопрос",
    meta: {
      title: "Часто задаваемые вопросы | Study in China",
      description: "Ответы на все вопросы об обучении в Китае"
    },
    wizard: {
      title: "Нужна помощь?",
      description: "Поможем найти ответ на ваш вопрос",
      step1: "Выберите категорию",
      step2: "Выберите вопрос",
      step3: "Просмотрите ответ",
      categoriesGroup: "Категории FAQ",
      backButton: "Назад",
      nextButton: "Далее",
      restartButton: "Начать сначала"
    },
    pageTitle: "Часто задаваемые вопросы | Study in China"
  },
  howWeWork: {
    badge: "Bizning jarayon",
    title: "Qanday ishlaymiz",
    subtitle: "Oddiy va samarali qabul jarayoni"
  },
  hero: {
    description: "Qabul qilinishingizga kafolat beramiz yoki pulingizni qaytarib beramiz!",
    stats: {
      universities: "Universitetlar",
      students: "Talabalar",
      success: "Muvaffaqiyat",
      experience: "Yillik tajriba"
    },
    badge: {
      enrollment: "2025-yil qabuli boshlandi"
    },
    title: {
      first: "Xitoyda o'qish orzusi endi",
      highlight: "reallik"
    },
    buttons: {
      apply: "Ariza topshirish",
      programs: "Dasturlar"
    },
    image: {
      alt: "Modern university campus"
    },
    tooltip: {
      label: "Qo'shimcha ma'lumot",
      content: "Xitoyda o'qish bo'yicha to'liq ma'lumot. Bu yerda siz Xitoyning eng yaxshi universitetlarida o'qish imkoniyatlari, grant dasturlari va boshqa ko'plab qiziqarli ma'lumotlarni topishingiz mumkin. Bizning mutaxassislarimiz sizga to'g'ri yo'nalishni tanlashda yordam berishadi."
    },
    cards: {
      scholarship: {
        title: "Grant asosida o'qish",
        desc: "100% grant asosida o'qish imkoniyati"
      },
      admission: {
        title: "Kafolatlangan qabul",
        desc: "100% kafolatlangan universitet qabuli"
      }
    }
  },
  common: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    contact: "Aloqa",
    universities: "Universitetlar",
    programs: "O'quv dasturlari",
    blog: "Blog"
  },
  nav: {
    home: "Bosh sahifa",
    about: {
      _value: "Kompaniya haqida",
      us: "Biz haqimizda",
      reviews: "Talabalar sharhlari",
      studentPath: "Talaba yo'li",
      contacts: "Kontaktlar",
      faq: "Savol-javoblar"
    },
    programs: "Dasturlar",
    universities: "Universitetlar",
    grants: "Grantlar",
    blog: "Blog",
    menu: "Меню",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    selectLanguage: "Выбрать язык",
    submitApplication: "Подать заявку"
  },
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  },
  header: {
    cta: "Ariza topshirish"
  },
  universities: {
    title: "Universitetlar",
    filters: "Filterlar",
    reset: "Qayta tiklash",
    location: "Joylashuv",
    top: "Top universitet",
    students: "Talabalar",
    tuition: "O'qish narxi",
    rating: "Reyting",
    programs: "O'quv dasturlari",
    fields: "Yo'nalishlar",
    count_found: "Universitetlar topildi: {0}",
    campus: "Kampus",
    annual_fee: "Yillik to'lov",
    details: "Batafsil",
    no_results: "Sizning mezonlaringizga mos universitetlar topilmadi.",
    no_fields: "Yo'nalishlar ko'rsatilmagan",
    no_programs: "Dasturlar ko'rsatilmagan",
    cta: {
      title: "{university} da oʻqimoqchimisiz?",
      description: "Bepul konsultatsiya uchun ariza qoldiring",
      button: "Ariza qoldirish"
    },
    featured: {
      badge: "Tavsiya etilgan",
      title: "Yetakchi universitetlar",
      subtitle: "Xitoyning yuqori reytingli va sifatli ta'lim muassasalarini kashf eting",
      view_all: "Barcha universitetlarni ko'rish"
    }
  },
  contacts: {
    badge: "Aloqa",
    title: "Biz bilan bog'laning",
    subtitle: "Qulay usulni tanlang yoki ariza qoldiring",
    methods: {
      phone: "Telefon",
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp"
    },
    offices: {
      title: "Bizning ofislar",
      hours: "Ish vaqti",
      address: "Toshkent sh., Shayxontohur tumani, Namunaviy ko'chasi, 123"
    },
    form: {
      title: "Ariza qoldirish",
      description: "Formani to'ldiring va biz siz bilan tez orada bog'lanamiz",
      name: "Ismingiz",
      email: "Email",
      phone: "Telefon raqamingiz",
      message: "Xabar",
      message_placeholder: "Xabaringizni yozing...",
      submit: "Yuborish",
      privacy: {
        text: "Men ",
        link: "shaxsiy ma'lumotlarni qayta ishlash shartlariga roziman"
      }
    },
    social: {
      title: "Bizni ijtimoiy tarmoqlarda kuzating"
    }
  },
  comparison: {
    badge: "Xitoy va O'zbekistonni taqqoslasak",
    title: "Xitoyda o'qishning asosiy afzalliklari va imkoniyatlari",
    subtitle: "Quyidagi jadvalni ko'ring",
    category: "Kategoriya",
    china: "Xitoy",
    uzbekistan: "O'zbekiston",
    cta: {
      _value: "Xitoyda o'qish haqida ko'proq ma'lumot olishni xohlaysizmi?",
      button: "Bepul konsultatsiya olish"
    },
    stories: {
      title: "Bitiruvchilarimizning muvaffaqiyat tarixi",
      story1: {
        name: "Aziza Karimova",
        university: "Pekin universiteti",
        year: "2021",
        position: "Xalqaro kompaniyada marketing menejeri",
        quote: "Xitoyda o'qish menga nafaqat sifatli ta'lim, balki butun dunyoda ishlash imkoniyatini berdi. Men o'rgangan tillar va aloqalar hozirgi karyeramda juda muhim rol o'ynaydi."
      },
      story2: {
        name: "Bobur Aliyev",
        university: "Shanxay Jiao Tong universiteti",
        year: "2020",
        position: "IT kompaniya asoschisi",
        quote: "Xitoyda olgan bilimlarim va tajribam o'z biznesimni boshlashda katta yordam berdi. Men o'rgangan innovatsion yondashuvlar biznesimni rivojlantirishda muhim ahamiyatga ega."
      },
      story3: {
        name: "Nilufar Rahimova",
        university: "Fudan universiteti",
        year: "2019",
        position: "Xalqaro munosabatlar bo'yicha mutaxassis",
        quote: "Xitoyda o'qish davomida men nafaqat o'z sohamda chuqur bilim oldim, balki turli madaniyatlar bilan muloqot qilish ko'nikmalarini ham rivojlantirdim. Bu xalqaro karyeramda juda muhim."
      }
    },
    education: {
      category: "Ta'lim sifati",
      china: "Xalqaro tan olingan universitetlar, jahon reytinglarida yuqori o'rinlar",
      uzbekistan: "Mahalliy tan olingan universitetlar, xalqaro reytinglarda past ko'rsatkichlar"
    },
    tuition: {
      category: "O'qish narxi",
      china: "Yiliga $2,000-$8,000, ko'plab grant imkoniyatlari",
      uzbekistan: "Yiliga $1,000-$5,000, cheklangan grant imkoniyatlari"
    },
    opportunities: {
      category: "Xalqaro imkoniyatlar",
      china: "Global karyera imkoniyatlari, xalqaro aloqalar, amaliyot dasturlari",
      uzbekistan: "Asosan mahalliy karyera imkoniyatlari, cheklangan xalqaro aloqalar"
    },
    technology: {
      category: "Texnologik imkoniyatlar",
      china: "Zamonaviy laboratoriyalar, ilg'or texnologiyalar, innovatsion loyihalar",
      uzbekistan: "Cheklangan laboratoriya imkoniyatlari, eskirgan uskunalar"
    }
  },
  guarantees: {
    badge: "Bizning yondashuv",
    title: "Kafolatli qabul",
    subtitle: "Biz kafolatli qabul va to'liq qo'llab-quvvatlashni ta'minlaymiz",
    ourGuarantees: "Bizning kafolatlarimiz",
    ourAchievements: "Bizning yutuqlarimiz",
    servicesDescription: "Biz sizning muvaffaqiyatli qabulingiz va qulay ta'lim olishingiz uchun to'liq xizmatlar kompleksini taqdim etamiz.",
    achievementsDescription: "Yillar davomida biz yuzlab talabalarga eng yaxshi universitetlarga kirish va o'z ta'lim maqsadlariga erishishda yordam berdik. Bizning statistikamiz o'z-o'zidan gapiradi.",
    getConsultation: "Konsultatsiya olish",
    list: {
      enrollment: "Tanlangan universitetga kafolatli qabul",
      visa: "Viza olish va hujjatlarni rasmiylashtirish bo'yicha yordam",
      adaptation: "O'qish joyida moslashishda qo'llab-quvvatlash",
      living: "Maishiy masalalarni hal qilishda ko'maklashish",
      program: "O'quv dasturini tanlashda yordam",
      finance: "Moliyaviy masalalar bo'yicha maslahatlar"
    },
    stats: {
      studentsEnrolled: "Talabalar qabul qilindi",
      successfulEnrollments: "Muvaffaqiyatli qabullar",
      partnerUniversities: "Hamkor universitetlar",
      satisfiedClients: "Mamnun mijozlar"
    }
  },
  whyChina: {
    badge: "Nima uchun Xitoy?",
    title: {
      main: "Xitoyda o'qishning",
      highlight: "6 ta asosiy afzalligi"
    },
    subtitle: "Xitoyda o'qish - bu nafaqat sifatli ta'lim, balki kelajagingiz uchun keng imkoniyatlar eshigini ochish demakdir"
  },
  cta: {
    title: "НЕ ЖДИТЕ СВОЕГО БУДУЩЕГО - СОЗДАЙТЕ ЕГО СЕЙЧАС!",
    description: "Измените свое будущее сегодня, обучаясь в Китае. Мы готовы вам помочь!",
    button: "Заполнить форму",
    phone: "+998 90 123-45-67"
  },
  success: {
    badge: "Kelajak sari",
    title: "Sizning muvaffaqiyatingiz, bizning maqsadimiz",
    subtitle: "Bizning maqsadimiz – sizning orzularingizni ro'yobga chiqarish.",
    team: {
      title: "Bizning jamoa",
      description: "Tajribali mutaxassislar jamoasi sizning muvaffaqiyatingiz uchun ishlaydi",
      position1: "Ta'lim maslahatchisi",
      position2: "Dastur koordinatori",
      position3: "Xalqaro aloqalar bo'yicha mutaxassis",
      position4: "Talabalar bilan ishlash bo'yicha mutaxassis"
    },
    values: {
      mainTitle: "Bizning qadriyatlarimiz",
      title1: "Maqsadga yo'naltirilganlik",
      desc1: "Har bir talabaning shaxsiy maqsadlariga erishishiga yordam berish",
      title2: "G'amxo'rlik",
      desc2: "Talabalarimiz farovonligi va muvaffaqiyati uchun qayg'urish",
      title3: "Sifat",
      desc3: "Ta'lim va xizmatlarning yuqori sifatini ta'minlash"
    }
  },
  contact: {
    modal: {
      title: "Maslahat olish",
      description: "Kontaktlaringizni qoldiring, biz siz bilan tez orada bog'lanamiz"
    },
    form: {
      name: {
        _value: "Ismingiz",
        placeholder: "Ismingizni kiriting"
      },
      phone: {
        _value: "Telefon",
        placeholder: "+998 90 123 45 67"
      },
      email: {
        _value: "Email",
        placeholder: "example@mail.com"
      },
      submit: "Arizani yuborish",
      success: "Rahmat! Sizning arizangiz muvaffaqiyatli yuborildi.",
      privacy: {
        text: "Tugmani bosish orqali, siz bizning",
        link: "maxfiylik siyosatimizga rozilik bildirasiz"
      }
    }
  },
  education: {
    mission: {
      badge: "Bizning maqsadimiz",
      title: "Nega aynan biz ?",
      subtitle: "Xitoyda sifatli va hamyonbop ta'lim olish imkoniyatini taqdim etamiz"
    }
  },
  stats: {
    students: {
      label: "Yuborilgan talabalar",
      description: "Xitoyning yetakchi universitetlarida muvaffaqiyatli tahsil olmoqda"
    },
    universities: {
      label: "Hamkor universitetlar",
      description: "Top universitetlar bilan to'g'ridan-to'g'ri shartnomalar"
    },
    success: {
      label: "Muvaffaqiyatli qabul",
      description: "Tanlangan universitetga kafolatlangan qabul"
    },
    experience: {
      label: "Yillik tajriba",
      description: "Professional ekspertlar jamoasi"
    }
  },
  special: {
    offer: {
      badge: "Bizning yondashuv",
      title: "Bahorgi semestr uchun maxsus taklif",
      subtitle: "Biz sizning tanlagan universitetingizga kafolatli qabul qilinishingizni ta'minlaymiz va barcha bosqichlarda to'liq qo'llab-quvvatlaymiz",
      companyName: "Study Bridge",
      companySlogan: "Xitoyda ta'lim olish uchun ko'prigingiz",
      mainHeading: {
        first: "Kafolatli qabul",
        highlight: "2025 yil uchun"
      },
      description: {
        first: "Bakalavr yoki magistratura dasturlariga qabul qilinganingizda til kurslari uchun",
        discount: "20% chegirma",
        second: "oling. Taklif 2025 yil 1 martgacha amal qiladi."
      },
      price: {
        label: "O'qish narxi",
        amount: "$3,000 dan",
        period: "/semestr",
        discountBadge: "20% CHEGIRMA"
      },
      included: {
        title: "Narxga quyidagilar kiradi"
      },
      features: {
        campus: "Kampusda yashash",
        insurance: "Tibbiy sug'urta",
        materials: "O'quv materiallari"
      },
      buttons: {
        getOffer: "Taklifni olish",
        moreInfo: "Ko'proq ma'lumot"
      },
      image: {
        alt: "Universitet kampusi",
        caption: "Universitet kampusi"
      },
      importantDates: {
        title: "Muhim sanalar"
      },
      deadlines: {
        spring: {
          date: "1 mart 2025",
          text: "Bahorgi semestr uchun ariza topshirish muddati"
        },
        summer: {
          date: "15 aprel 2025",
          text: "Yozgi til kurslarining boshlanishi"
        }
      },
      contact: {
        label: "Biz bilan bog'laning",
        phone: "+998 90 123 45 67"
      },
      badges: {
        accredited: "Akkreditatsiyadan o'tgan agentlik",
        partners: "30+ hamkor universitetlar"
      }
    }
  },
  advantages: {
    education: {
      title: "Sifatli ta'lim",
      description: "Xitoy universitetlari jahon reytingida top-100 ga kiradi"
    },
    price: {
      title: "Hamyonbop narxlar",
      description: "O'qish narxi yiliga $2000 dan + stipendiyalar"
    },
    career: {
      title: "Karyera istiqbollari",
      description: "Talab yuqori mutaxassisliklar va xalqaro diplom"
    },
    study: {
      title: "Zamonaviy o'qitish",
      description: "Innovatsion o'qitish metodlari va amaliy tajriba"
    },
    life: {
      title: "Qulay turmush sharoiti",
      description: "Zamonaviy kampuslar va arzon turmush xarajatlari"
    },
    work: {
      title: "Ish imkoniyatlari",
      description: "O'qish davrida ishlash va amaliyot o'tash imkoniyatlari"
    }
  },
  studentPath: {
    pageTitle: "Xitoyda o'qish yo'lingiz | Study in China",
    hero: {
      title: "Xitoyda o'qish yo'lingiz",
      subtitle: "Orzudan diplomgacha — har bir bosqichda siz bilan birgamiz",
      buttons: {
        consultation: "Konsultatsiya olish",
        learnProcess: "Jarayonni o'rganish"
      }
    },
    journey: {
      title: "Xitoyda ta'lim olish yo'lingiz",
      subtitle: "Biz sizni orzudan haqiqatga o'tish jarayonida har bir bosqichda qo'llab-quvvatlaymiz",
      exploration: {
        title: "Tadqiqot",
        description: "Xitoyda o'qish imkoniyatlarini o'rganish",
        services: {
          consultation: "Mutaxassislar bilan bepul konsultatsiya",
          selection: "Mos universitetlarni tanlash",
          costAnalysis: "O'qish va yashash xarajatlarini tahlil qilish",
          scholarships: "Stipendiyalar va grantlar haqida ma'lumot"
        }
      },
      preparation: {
        title: "Tayyorgarlik",
        description: "Qabul va til imtihonlariga tayyorgarlik",
        services: {
          hskCourses: "HSK imtihoniga tayyorgarlik kurslari",
          motivationLetter: "Motivatsion xat tuzishda yordam",
          interview: "Suhbatga tayyorgarlik",
          requirements: "Dastur talablari bo'yicha maslahatlar"
        }
      },
      application: {
        title: "Qabul",
        description: "Universitetlarga hujjatlarni rasmiylashtirish va topshirish",
        services: {
          documents: "Zarur hujjatlarni to'plash",
          translation: "Tarjima va notarial tasdiqlash",
          submission: "Universitetlarga arizalarni topshirish",
          tracking: "Ariza holatini kuzatish"
        }
      },
      documentation: {
        title: "Hujjatlar",
        description: "Viza olish va jo'nashga tayyorgarlik",
        services: {
          visaDocuments: "Viza uchun hujjatlarni tayyorlash",
          visaInterview: "Viza suhbatidan o'tish bo'yicha maslahat",
          tickets: "Chipta bron qilishda yordam",
          insurance: "Sug'urta rasmiylashtirish"
        }
      },
      arrival: {
        title: "Kelish",
        description: "Kutib olish va joyida moslashishga yordam",
        services: {
          airportPickup: "Aeroportda kutib olish",
          accommodation: "Joylashtirish bilan yordam",
          registration: "Universitetda ro'yxatdan o'tish",
          simCard: "Mahalliy SIM-karta rasmiylashtirish"
        }
      },
      study: {
        title: "O'qish",
        description: "O'quv jarayonida qo'llab-quvvatlash",
        services: {
          academicSupport: "Akademik maslahat",
          adaptation: "O'quv jarayoniga moslashishda yordam",
          extraClasses: "Qo'shimcha mashg'ulotlarni tashkil etish",
          events: "Talabalar tadbirlarida ishtirok etish"
        }
      },
      career: {
        title: "Karyera",
        description: "O'qishdan keyin karyera qurishda yordam",
        services: {
          employment: "Ishga joylashish bo'yicha maslahatlar",
          resume: "Rezyume tuzishda yordam",
          interviews: "Suhbatlarga tayyorgarlik",
          internships: "Xitoyda amaliyot topishda yordam"
        }
      },
      network: {
        title: "Jamiyat",
        description: "Xalqaro bitiruvchilar jamiyatiga qo'shilish",
        services: {
          alumni: "Bitiruvchilar bilan aloqa",
          projects: "Xalqaro loyihalarda ishtirok etish",
          contacts: "Kontaktlar bazasiga kirish",
          events: "Kasbiy tadbirlarga takliflar"
        }
      }
    }
  },
  popup: {
    offer_badge: "Специальное предложение",
    title: "Хотите учиться в Китае?",
    description: "Оставьте заявку сегодня, чтобы получить бесплатную консультацию"
  }
};
const enTranslations = {
  faq: {
    title: "Tez-tez so'raladigan savollar",
    subtitle: "Xitoyda o'qish haqida eng ko'p so'raladigan savollarga javoblar",
    notFoundQuestion: "Savolingizga javob topmadingizmi?",
    askQuestion: "Savol berish",
    search: {
      placeholder: "Savollar bo'yicha qidirish...",
      noResults: "Hech qanday natija topilmadi"
    },
    categories: {
      admission: "Qabul jarayoni",
      documents: "Hujjatlar",
      study: "O'qish",
      life: "Xitoyda hayot",
      finance: "Moliyaviy masalalar",
      scholarships: "Stipendiyalar",
      transfer: "O'qishni ko'chirish",
      language: "Til kurslari"
    },
    common: {
      readMore: "Batafsil",
      showAll: "Hammasini ko'rsatish",
      hideAll: "Yashirish",
      relatedQuestions: "Aloqador savollar"
    },
    guides: {
      title: "Bosqichma-bosqich yo'riqnomalar"
    },
    popularQuestions: "Eng ko'p so'raladigan savollar",
    contactUs: "Bizga savolingizni yuboring",
    meta: {
      title: "Ko'p so'raladigan savollar | Study in China",
      description: "Xitoyda o'qish bo'yicha barcha savollarga javoblar"
    },
    wizard: {
      title: "Sizga yordam kerakmi?",
      description: "Sizga mos savol-javobni topishda yordam beramiz",
      step1: "Kategoriyani tanlang",
      step2: "Savolni tanlang",
      step3: "Javobni ko'ring",
      categoriesGroup: "FAQ kategoriyalari",
      backButton: "Orqaga",
      nextButton: "Keyingi",
      restartButton: "Boshidan boshlash"
    },
    pageTitle: "Ko'p so'raladigan savollar | Study in China"
  },
  howWeWork: {
    badge: "Bizning jarayon",
    title: "Qanday ishlaymiz",
    subtitle: "Oddiy va samarali qabul jarayoni"
  },
  hero: {
    description: "Qabul qilinishingizga kafolat beramiz yoki pulingizni qaytarib beramiz!",
    stats: {
      universities: "Universitetlar",
      students: "Talabalar",
      success: "Muvaffaqiyat",
      experience: "Yillik tajriba"
    },
    badge: {
      enrollment: "2025-yil qabuli boshlandi"
    },
    title: {
      first: "Xitoyda o'qish orzusi endi",
      highlight: "reallik"
    },
    buttons: {
      apply: "Ariza topshirish",
      programs: "Dasturlar"
    },
    image: {
      alt: "Modern university campus"
    },
    tooltip: {
      label: "Qo'shimcha ma'lumot",
      content: "Xitoyda o'qish bo'yicha to'liq ma'lumot. Bu yerda siz Xitoyning eng yaxshi universitetlarida o'qish imkoniyatlari, grant dasturlari va boshqa ko'plab qiziqarli ma'lumotlarni topishingiz mumkin. Bizning mutaxassislarimiz sizga to'g'ri yo'nalishni tanlashda yordam berishadi."
    },
    cards: {
      scholarship: {
        title: "Grant asosida o'qish",
        desc: "100% grant asosida o'qish imkoniyati"
      },
      admission: {
        title: "Kafolatlangan qabul",
        desc: "100% kafolatlangan universitet qabuli"
      }
    }
  },
  common: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    contact: "Aloqa",
    universities: "Universitetlar",
    programs: "O'quv dasturlari",
    blog: "Blog"
  },
  nav: {
    home: "Bosh sahifa",
    about: {
      _value: "Kompaniya haqida",
      us: "Biz haqimizda",
      reviews: "Talabalar sharhlari",
      studentPath: "Talaba yo'li",
      contacts: "Kontaktlar",
      faq: "Savol-javoblar"
    },
    programs: "Dasturlar",
    universities: "Universitetlar",
    grants: "Grantlar",
    blog: "Blog",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
    submitApplication: "Submit application"
  },
  languages: {
    ru: "Русский",
    uz: "O'zbekcha",
    en: "English"
  },
  header: {
    cta: "Ariza topshirish"
  },
  universities: {
    title: "Universitetlar",
    filters: "Filterlar",
    reset: "Qayta tiklash",
    location: "Joylashuv",
    top: "Top universitet",
    students: "Talabalar",
    tuition: "O'qish narxi",
    rating: "Reyting",
    programs: "O'quv dasturlari",
    fields: "Yo'nalishlar",
    count_found: "Universitetlar topildi: {0}",
    campus: "Kampus",
    annual_fee: "Yillik to'lov",
    details: "Batafsil",
    no_results: "Sizning mezonlaringizga mos universitetlar topilmadi.",
    no_fields: "Yo'nalishlar ko'rsatilmagan",
    no_programs: "Dasturlar ko'rsatilmagan",
    cta: {
      title: "{university} da oʻqimoqchimisiz?",
      description: "Bepul konsultatsiya uchun ariza qoldiring",
      button: "Ariza qoldirish"
    },
    featured: {
      badge: "Tavsiya etilgan",
      title: "Yetakchi universitetlar",
      subtitle: "Xitoyning yuqori reytingli va sifatli ta'lim muassasalarini kashf eting",
      view_all: "Barcha universitetlarni ko'rish"
    }
  },
  contacts: {
    badge: "Aloqa",
    title: "Biz bilan bog'laning",
    subtitle: "Qulay usulni tanlang yoki ariza qoldiring",
    methods: {
      phone: "Telefon",
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp"
    },
    offices: {
      title: "Bizning ofislar",
      hours: "Ish vaqti",
      address: "Toshkent sh., Shayxontohur tumani, Namunaviy ko'chasi, 123"
    },
    form: {
      title: "Ariza qoldirish",
      description: "Formani to'ldiring va biz siz bilan tez orada bog'lanamiz",
      name: "Ismingiz",
      email: "Email",
      phone: "Telefon raqamingiz",
      message: "Xabar",
      message_placeholder: "Xabaringizni yozing...",
      submit: "Yuborish",
      privacy: {
        text: "Men ",
        link: "shaxsiy ma'lumotlarni qayta ishlash shartlariga roziman"
      }
    },
    social: {
      title: "Bizni ijtimoiy tarmoqlarda kuzating"
    }
  },
  comparison: {
    badge: "Xitoy va O'zbekistonni taqqoslasak",
    title: "Xitoyda o'qishning asosiy afzalliklari va imkoniyatlari",
    subtitle: "Quyidagi jadvalni ko'ring",
    category: "Kategoriya",
    china: "Xitoy",
    uzbekistan: "O'zbekiston",
    cta: {
      _value: "Xitoyda o'qish haqida ko'proq ma'lumot olishni xohlaysizmi?",
      button: "Bepul konsultatsiya olish"
    },
    stories: {
      title: "Bitiruvchilarimizning muvaffaqiyat tarixi",
      story1: {
        name: "Aziza Karimova",
        university: "Pekin universiteti",
        year: "2021",
        position: "Xalqaro kompaniyada marketing menejeri",
        quote: "Xitoyda o'qish menga nafaqat sifatli ta'lim, balki butun dunyoda ishlash imkoniyatini berdi. Men o'rgangan tillar va aloqalar hozirgi karyeramda juda muhim rol o'ynaydi."
      },
      story2: {
        name: "Bobur Aliyev",
        university: "Shanxay Jiao Tong universiteti",
        year: "2020",
        position: "IT kompaniya asoschisi",
        quote: "Xitoyda olgan bilimlarim va tajribam o'z biznesimni boshlashda katta yordam berdi. Men o'rgangan innovatsion yondashuvlar biznesimni rivojlantirishda muhim ahamiyatga ega."
      },
      story3: {
        name: "Nilufar Rahimova",
        university: "Fudan universiteti",
        year: "2019",
        position: "Xalqaro munosabatlar bo'yicha mutaxassis",
        quote: "Xitoyda o'qish davomida men nafaqat o'z sohamda chuqur bilim oldim, balki turli madaniyatlar bilan muloqot qilish ko'nikmalarini ham rivojlantirdim. Bu xalqaro karyeramda juda muhim."
      }
    },
    education: {
      category: "Ta'lim sifati",
      china: "Xalqaro tan olingan universitetlar, jahon reytinglarida yuqori o'rinlar",
      uzbekistan: "Mahalliy tan olingan universitetlar, xalqaro reytinglarda past ko'rsatkichlar"
    },
    tuition: {
      category: "O'qish narxi",
      china: "Yiliga $2,000-$8,000, ko'plab grant imkoniyatlari",
      uzbekistan: "Yiliga $1,000-$5,000, cheklangan grant imkoniyatlari"
    },
    opportunities: {
      category: "Xalqaro imkoniyatlar",
      china: "Global karyera imkoniyatlari, xalqaro aloqalar, amaliyot dasturlari",
      uzbekistan: "Asosan mahalliy karyera imkoniyatlari, cheklangan xalqaro aloqalar"
    },
    technology: {
      category: "Texnologik imkoniyatlar",
      china: "Zamonaviy laboratoriyalar, ilg'or texnologiyalar, innovatsion loyihalar",
      uzbekistan: "Cheklangan laboratoriya imkoniyatlari, eskirgan uskunalar"
    }
  },
  guarantees: {
    badge: "Bizning yondashuv",
    title: "Kafolatli qabul",
    subtitle: "Biz kafolatli qabul va to'liq qo'llab-quvvatlashni ta'minlaymiz",
    ourGuarantees: "Bizning kafolatlarimiz",
    ourAchievements: "Bizning yutuqlarimiz",
    servicesDescription: "Biz sizning muvaffaqiyatli qabulingiz va qulay ta'lim olishingiz uchun to'liq xizmatlar kompleksini taqdim etamiz.",
    achievementsDescription: "Yillar davomida biz yuzlab talabalarga eng yaxshi universitetlarga kirish va o'z ta'lim maqsadlariga erishishda yordam berdik. Bizning statistikamiz o'z-o'zidan gapiradi.",
    getConsultation: "Konsultatsiya olish",
    list: {
      enrollment: "Tanlangan universitetga kafolatli qabul",
      visa: "Viza olish va hujjatlarni rasmiylashtirish bo'yicha yordam",
      adaptation: "O'qish joyida moslashishda qo'llab-quvvatlash",
      living: "Maishiy masalalarni hal qilishda ko'maklashish",
      program: "O'quv dasturini tanlashda yordam",
      finance: "Moliyaviy masalalar bo'yicha maslahatlar"
    },
    stats: {
      studentsEnrolled: "Talabalar qabul qilindi",
      successfulEnrollments: "Muvaffaqiyatli qabullar",
      partnerUniversities: "Hamkor universitetlar",
      satisfiedClients: "Mamnun mijozlar"
    }
  },
  whyChina: {
    badge: "Nima uchun Xitoy?",
    title: {
      main: "Xitoyda o'qishning",
      highlight: "6 ta asosiy afzalligi"
    },
    subtitle: "Xitoyda o'qish - bu nafaqat sifatli ta'lim, balki kelajagingiz uchun keng imkoniyatlar eshigini ochish demakdir"
  },
  cta: {
    title: "DON'T WAIT FOR YOUR FUTURE - CREATE IT!",
    description: "Transform your future today by studying in China. We're ready to help you!",
    button: "Fill out the form",
    phone: "+998 90 123-45-67"
  },
  success: {
    badge: "Kelajak sari",
    title: "Sizning muvaffaqiyatingiz, bizning maqsadimiz",
    subtitle: "Bizning maqsadimiz – sizning orzularingizni ro'yobga chiqarish.",
    team: {
      title: "Bizning jamoa",
      description: "Tajribali mutaxassislar jamoasi sizning muvaffaqiyatingiz uchun ishlaydi",
      position1: "Ta'lim maslahatchisi",
      position2: "Dastur koordinatori",
      position3: "Xalqaro aloqalar bo'yicha mutaxassis",
      position4: "Talabalar bilan ishlash bo'yicha mutaxassis"
    },
    values: {
      mainTitle: "Bizning qadriyatlarimiz",
      title1: "Maqsadga yo'naltirilganlik",
      desc1: "Har bir talabaning shaxsiy maqsadlariga erishishiga yordam berish",
      title2: "G'amxo'rlik",
      desc2: "Talabalarimiz farovonligi va muvaffaqiyati uchun qayg'urish",
      title3: "Sifat",
      desc3: "Ta'lim va xizmatlarning yuqori sifatini ta'minlash"
    }
  },
  contact: {
    modal: {
      title: "Maslahat olish",
      description: "Kontaktlaringizni qoldiring, biz siz bilan tez orada bog'lanamiz"
    },
    form: {
      name: {
        _value: "Ismingiz",
        placeholder: "Ismingizni kiriting"
      },
      phone: {
        _value: "Telefon",
        placeholder: "+998 90 123 45 67"
      },
      email: {
        _value: "Email",
        placeholder: "example@mail.com"
      },
      submit: "Arizani yuborish",
      success: "Rahmat! Sizning arizangiz muvaffaqiyatli yuborildi.",
      privacy: {
        text: "Tugmani bosish orqali, siz bizning",
        link: "maxfiylik siyosatimizga rozilik bildirasiz"
      }
    }
  },
  education: {
    mission: {
      badge: "Bizning maqsadimiz",
      title: "Nega aynan biz ?",
      subtitle: "Xitoyda sifatli va hamyonbop ta'lim olish imkoniyatini taqdim etamiz"
    }
  },
  stats: {
    students: {
      label: "Yuborilgan talabalar",
      description: "Xitoyning yetakchi universitetlarida muvaffaqiyatli tahsil olmoqda"
    },
    universities: {
      label: "Hamkor universitetlar",
      description: "Top universitetlar bilan to'g'ridan-to'g'ri shartnomalar"
    },
    success: {
      label: "Muvaffaqiyatli qabul",
      description: "Tanlangan universitetga kafolatlangan qabul"
    },
    experience: {
      label: "Yillik tajriba",
      description: "Professional ekspertlar jamoasi"
    }
  },
  special: {
    offer: {
      badge: "Bizning yondashuv",
      title: "Bahorgi semestr uchun maxsus taklif",
      subtitle: "Biz sizning tanlagan universitetingizga kafolatli qabul qilinishingizni ta'minlaymiz va barcha bosqichlarda to'liq qo'llab-quvvatlaymiz",
      companyName: "Study Bridge",
      companySlogan: "Xitoyda ta'lim olish uchun ko'prigingiz",
      mainHeading: {
        first: "Kafolatli qabul",
        highlight: "2025 yil uchun"
      },
      description: {
        first: "Bakalavr yoki magistratura dasturlariga qabul qilinganingizda til kurslari uchun",
        discount: "20% chegirma",
        second: "oling. Taklif 2025 yil 1 martgacha amal qiladi."
      },
      price: {
        label: "O'qish narxi",
        amount: "$3,000 dan",
        period: "/semestr",
        discountBadge: "20% CHEGIRMA"
      },
      included: {
        title: "Narxga quyidagilar kiradi"
      },
      features: {
        campus: "Kampusda yashash",
        insurance: "Tibbiy sug'urta",
        materials: "O'quv materiallari"
      },
      buttons: {
        getOffer: "Taklifni olish",
        moreInfo: "Ko'proq ma'lumot"
      },
      image: {
        alt: "Universitet kampusi",
        caption: "Universitet kampusi"
      },
      importantDates: {
        title: "Muhim sanalar"
      },
      deadlines: {
        spring: {
          date: "1 mart 2025",
          text: "Bahorgi semestr uchun ariza topshirish muddati"
        },
        summer: {
          date: "15 aprel 2025",
          text: "Yozgi til kurslarining boshlanishi"
        }
      },
      contact: {
        label: "Biz bilan bog'laning",
        phone: "+998 90 123 45 67"
      },
      badges: {
        accredited: "Akkreditatsiyadan o'tgan agentlik",
        partners: "30+ hamkor universitetlar"
      }
    }
  },
  advantages: {
    education: {
      title: "Sifatli ta'lim",
      description: "Xitoy universitetlari jahon reytingida top-100 ga kiradi"
    },
    price: {
      title: "Hamyonbop narxlar",
      description: "O'qish narxi yiliga $2000 dan + stipendiyalar"
    },
    career: {
      title: "Karyera istiqbollari",
      description: "Talab yuqori mutaxassisliklar va xalqaro diplom"
    },
    study: {
      title: "Zamonaviy o'qitish",
      description: "Innovatsion o'qitish metodlari va amaliy tajriba"
    },
    life: {
      title: "Qulay turmush sharoiti",
      description: "Zamonaviy kampuslar va arzon turmush xarajatlari"
    },
    work: {
      title: "Ish imkoniyatlari",
      description: "O'qish davrida ishlash va amaliyot o'tash imkoniyatlari"
    }
  },
  studentPath: {
    pageTitle: "Xitoyda o'qish yo'lingiz | Study in China",
    hero: {
      title: "Xitoyda o'qish yo'lingiz",
      subtitle: "Orzudan diplomgacha — har bir bosqichda siz bilan birgamiz",
      buttons: {
        consultation: "Konsultatsiya olish",
        learnProcess: "Jarayonni o'rganish"
      }
    },
    journey: {
      title: "Xitoyda ta'lim olish yo'lingiz",
      subtitle: "Biz sizni orzudan haqiqatga o'tish jarayonida har bir bosqichda qo'llab-quvvatlaymiz",
      exploration: {
        title: "Tadqiqot",
        description: "Xitoyda o'qish imkoniyatlarini o'rganish",
        services: {
          consultation: "Mutaxassislar bilan bepul konsultatsiya",
          selection: "Mos universitetlarni tanlash",
          costAnalysis: "O'qish va yashash xarajatlarini tahlil qilish",
          scholarships: "Stipendiyalar va grantlar haqida ma'lumot"
        }
      },
      preparation: {
        title: "Tayyorgarlik",
        description: "Qabul va til imtihonlariga tayyorgarlik",
        services: {
          hskCourses: "HSK imtihoniga tayyorgarlik kurslari",
          motivationLetter: "Motivatsion xat tuzishda yordam",
          interview: "Suhbatga tayyorgarlik",
          requirements: "Dastur talablari bo'yicha maslahatlar"
        }
      },
      application: {
        title: "Qabul",
        description: "Universitetlarga hujjatlarni rasmiylashtirish va topshirish",
        services: {
          documents: "Zarur hujjatlarni to'plash",
          translation: "Tarjima va notarial tasdiqlash",
          submission: "Universitetlarga arizalarni topshirish",
          tracking: "Ariza holatini kuzatish"
        }
      },
      documentation: {
        title: "Hujjatlar",
        description: "Viza olish va jo'nashga tayyorgarlik",
        services: {
          visaDocuments: "Viza uchun hujjatlarni tayyorlash",
          visaInterview: "Viza suhbatidan o'tish bo'yicha maslahat",
          tickets: "Chipta bron qilishda yordam",
          insurance: "Sug'urta rasmiylashtirish"
        }
      },
      arrival: {
        title: "Kelish",
        description: "Kutib olish va joyida moslashishga yordam",
        services: {
          airportPickup: "Aeroportda kutib olish",
          accommodation: "Joylashtirish bilan yordam",
          registration: "Universitetda ro'yxatdan o'tish",
          simCard: "Mahalliy SIM-karta rasmiylashtirish"
        }
      },
      study: {
        title: "O'qish",
        description: "O'quv jarayonida qo'llab-quvvatlash",
        services: {
          academicSupport: "Akademik maslahat",
          adaptation: "O'quv jarayoniga moslashishda yordam",
          extraClasses: "Qo'shimcha mashg'ulotlarni tashkil etish",
          events: "Talabalar tadbirlarida ishtirok etish"
        }
      },
      career: {
        title: "Karyera",
        description: "O'qishdan keyin karyera qurishda yordam",
        services: {
          employment: "Ishga joylashish bo'yicha maslahatlar",
          resume: "Rezyume tuzishda yordam",
          interviews: "Suhbatlarga tayyorgarlik",
          internships: "Xitoyda amaliyot topishda yordam"
        }
      },
      network: {
        title: "Jamiyat",
        description: "Xalqaro bitiruvchilar jamiyatiga qo'shilish",
        services: {
          alumni: "Bitiruvchilar bilan aloqa",
          projects: "Xalqaro loyihalarda ishtirok etish",
          contacts: "Kontaktlar bazasiga kirish",
          events: "Kasbiy tadbirlarga takliflar"
        }
      }
    }
  },
  popup: {
    offer_badge: "Special Offer",
    title: "Want to study in China?",
    description: "Apply today to get your free consultation"
  }
};
const translations$3 = {
  uz: uzTranslations,
  ru: ruTranslations,
  en: enTranslations
};
const isDevelopment = process.env.NODE_ENV !== "production";
function getNestedValue(obj, path, fallback2) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === void 0 || current === null) {
      return fallback2 || path;
    }
    current = current[key];
  }
  return current !== void 0 && current !== null ? current : fallback2 || path;
}
function getTranslation(lang, path, ...args) {
  let translation = getNestedValue(translations$3[lang], path);
  if (translation === path && lang !== "uz") {
    translation = getNestedValue(translations$3["uz"], path);
    if (translation === path && isDevelopment) {
      console.warn(`Missing translation: ${path} (${lang})`);
    }
  }
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      translation = translation.replace(`{${i}}`, args[i]);
    }
  }
  return translation;
}
function createTranslationFunction(lang) {
  return function t(path, ...args) {
    return getTranslation(lang, path, ...args);
  };
}
function useTranslations(lang) {
  return createTranslationFunction(lang);
}
const sectionEn = {
  // Default values if needed
};
const sectionRu = {
  // Default values if needed
};
const sectionUz = {
  // Default values if needed
};
const sectionTranslations = {
  en: sectionEn,
  ru: sectionRu,
  uz: sectionUz
};
function getSectionTranslations(lang) {
  return sectionTranslations[lang] || sectionUz;
}
const $$Astro$3 = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    lang = "uz",
    title,
    subtitle,
    centered = true,
    animation = "fade-up",
    animationDuration = "800",
    animationDelay = "0",
    maxWidth = "800px"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-[${maxWidth}] text-center mb-8 md:mb-12`, "class")}${addAttribute(animation, "data-aos")}${addAttribute(animationDuration, "data-aos-duration")}${addAttribute(animationDelay, "data-aos-delay")} data-astro-cid-smbb6lpu> <h2 class="text-3xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-5 animate-title" data-astro-cid-smbb6lpu> ${renderSlot($$result, $$slots["title"], renderTemplate` ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} `)} </h2> ${subtitle && renderTemplate`<p class="text-muted-foreground md:text-lg max-w-[600px] mx-auto animate-text" data-astro-cid-smbb6lpu> ${renderSlot($$result, $$slots["subtitle"], renderTemplate`${subtitle}`)} </p>`} <div class="h-1 w-20 bg-blue-600 mx-auto mt-4 animate-line" data-astro-cid-smbb6lpu></div> </div> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/ui/SectionHeader.astro", void 0);
const blogCommonEn = {
  header: {
    title: "Study Blog",
    subtitle: "Insights and strategies for academic excellence"
  },
  search: {
    placeholder: "Search articles...",
    resultsCount: "Found {0} results",
    noResults: "No results found",
    clearSearch: "Clear search"
  },
  categories: {
    title: "Filter by category",
    all: "All",
    academic: "Academic",
    studyTips: "Study Tips",
    career: "Career",
    studentLife: "Student Life",
    technology: "Technology"
  },
  card: {
    readMore: "Read more",
    minuteRead: "min read"
  },
  list: {
    loadMore: "Load more articles",
    noPostsFound: "No articles found matching your criteria",
    recentPosts: "Recent Posts",
    featuredPosts: "Featured Posts"
  },
  article: {
    tableOfContents: "Table of Contents",
    relatedPosts: "Related Posts",
    publishedOn: "Published on",
    updatedOn: "Updated on",
    shareArticle: "Share this article",
    authorInfo: "About the author",
    content: {
      inDevelopment: {
        title: "Content in Development",
        description: "The full article will be available soon. Please check back later!"
      },
      share: {
        twitter: "Share on Twitter",
        facebook: "Share on Facebook",
        linkedin: "Share on LinkedIn",
        copyLink: "Copy link",
        linkCopied: "Link copied!"
      }
    }
  },
  breadcrumb: {
    home: "Home",
    blog: "Blog"
  },
  pagination: {
    page: "Page",
    of: "of",
    noResults: {
      title: "No articles found",
      description: "Try changing your search query or selecting a different category"
    }
  },
  sidebar: {
    title: "Article Contents",
    subtitle: "Select a section to navigate",
    shareTitle: "Enjoyed the article?",
    shareDescription: "Share with friends or save for later reading.",
    shareButton: "Share",
    copyButton: "Copy",
    mobileTocButton: "Show contents",
    mobileTocTitle: "Article Contents"
  },
  featuredPosts: {
    title: "Featured Articles",
    subtitle: "Selected articles for your academic journey"
  },
  latestPosts: {
    title: "Latest Articles",
    subtitle: "Fresh content to keep you informed",
    readMore: "Read article about China"
  }
};
const blogCommonRu = {
  header: {
    title: "Блог об учебе",
    subtitle: "Инсайты и стратегии для академического превосходства"
  },
  search: {
    placeholder: "Поиск статей...",
    resultsCount: "Найдено результатов: {0}",
    noResults: "Результаты не найдены",
    clearSearch: "Очистить поиск"
  },
  categories: {
    title: "Фильтр по категориям",
    all: "Все",
    academic: "Академические",
    studyTips: "Советы по учебе",
    career: "Карьера",
    studentLife: "Студенческая жизнь",
    technology: "Технологии"
  },
  card: {
    readMore: "Читать далее",
    minuteRead: "мин. чтения"
  },
  list: {
    loadMore: "Загрузить больше статей",
    noPostsFound: "Статьи не найдены по вашим критериям",
    recentPosts: "Недавние статьи",
    featuredPosts: "Рекомендуемые статьи"
  },
  article: {
    tableOfContents: "Содержание",
    relatedPosts: "Похожие статьи",
    publishedOn: "Опубликовано",
    updatedOn: "Обновлено",
    shareArticle: "Поделиться статьей",
    authorInfo: "Об авторе",
    content: {
      inDevelopment: {
        title: "Контент в разработке",
        description: "Полная статья скоро будет доступна. Возвращайтесь позже!"
      },
      share: {
        twitter: "Поделиться в Twitter",
        facebook: "Поделиться в Facebook",
        linkedin: "Поделиться в LinkedIn",
        copyLink: "Копировать ссылку",
        linkCopied: "Ссылка скопирована!"
      }
    }
  },
  breadcrumb: {
    home: "Главная",
    blog: "Блог"
  },
  pagination: {
    page: "Страница",
    of: "из",
    noResults: {
      title: "Статьи не найдены",
      description: "Попробуйте изменить поисковый запрос или выбрать другую категорию"
    }
  },
  sidebar: {
    title: "Содержание статьи",
    subtitle: "Выберите раздел для навигации",
    shareTitle: "Понравилась статья?",
    shareDescription: "Поделитесь с друзьями или сохраните для чтения позже.",
    shareButton: "Поделиться",
    copyButton: "Копировать",
    mobileTocButton: "Показать содержание",
    mobileTocTitle: "Содержание статьи"
  },
  featuredPosts: {
    title: "Избранные статьи",
    subtitle: "Отобранные статьи для вашего академического пути"
  },
  latestPosts: {
    title: "Последние статьи",
    subtitle: "Свежий контент, чтобы вы были в курсе",
    readMore: "Читать статью о Китае"
  }
};
const blogCommonUz = {
  header: {
    title: "O'quv Blogi",
    subtitle: "Akademik muvaffaqiyat uchun strategiyalar va maslahatlar"
  },
  search: {
    placeholder: "Maqolalarni qidirish...",
    resultsCount: "Topildi: {0} natija",
    noResults: "Natijalar topilmadi",
    clearSearch: "Qidiruvni tozalash"
  },
  categories: {
    title: "Kategoriya bo'yicha filtrlash",
    all: "Barchasi",
    academic: "Akademik",
    studyTips: "O'quv maslahatlari",
    career: "Kasbiy faoliyat",
    studentLife: "Talaba hayoti",
    technology: "Texnologiya"
  },
  card: {
    readMore: "Batafsil",
    minuteRead: "daqiqa o'qish"
  },
  list: {
    loadMore: "Ko'proq maqolalar",
    noPostsFound: "Sizning qidiruv mezonlaringizga mos maqolalar topilmadi",
    recentPosts: "So'nggi maqolalar",
    featuredPosts: "Tavsiya etilgan maqolalar"
  },
  article: {
    tableOfContents: "Mundarija",
    relatedPosts: "Tegishli maqolalar",
    publishedOn: "Chop etilgan sana",
    updatedOn: "Yangilangan sana",
    shareArticle: "Maqolani ulashish",
    authorInfo: "Muallif haqida",
    content: {
      inDevelopment: {
        title: "Kontent ishlab chiqilmoqda",
        description: "To'liq maqola tez orada mavjud bo'ladi. Keyinroq qaytib keling!"
      },
      share: {
        twitter: "Twitter'da ulashish",
        facebook: "Facebook'da ulashish",
        linkedin: "LinkedIn'da ulashish",
        copyLink: "Havolani nusxalash",
        linkCopied: "Havola nusxalandi!"
      }
    }
  },
  breadcrumb: {
    home: "Bosh sahifa",
    blog: "Blog"
  },
  pagination: {
    page: "Sahifa",
    of: "dan",
    noResults: {
      title: "Maqolalar topilmadi",
      description: "Qidiruv so'rovini o'zgartirish yoki boshqa kategoriyani tanlashni urinib ko'ring"
    }
  },
  sidebar: {
    title: "Maqola mazmuni",
    subtitle: "Navigatsiya uchun bo'limni tanlang",
    shareTitle: "Maqola yoqdimi?",
    shareDescription: "Do'stlaringiz bilan ulashing yoki keyinroq o'qish uchun saqlang.",
    shareButton: "Ulashish",
    copyButton: "Nusxalash",
    mobileTocButton: "Mazmunni ko'rsatish",
    mobileTocTitle: "Maqola mazmuni"
  },
  featuredPosts: {
    title: "Tanlangan maqolalar",
    subtitle: "Akademik yo'lingiz uchun tanlangan maqolalar"
  },
  latestPosts: {
    title: "So'nggi maqolalar",
    subtitle: "Yangiliklardan xabardor bo'lish uchun yangi kontent",
    readMore: "Xitoy haqidagi maqolani o'qish"
  }
};
const blogCommonTranslations = {
  en: blogCommonEn,
  ru: blogCommonRu,
  uz: blogCommonUz
};
function getBlogCommonTranslations(lang) {
  return blogCommonTranslations[lang] || blogCommonUz;
}
const contactEn = {
  title: "Contact Us",
  subtitle: "We're here to help with your education abroad journey",
  cta: {
    contactUs: "Contact Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    whatsApp: "WhatsApp",
    getConsultation: "Get Free Consultation"
  },
  form: {
    title: "Send Us a Message",
    description: "Fill out the form and we'll get back to you as soon as possible",
    name: {
      label: "Name",
      placeholder: "Enter your full name"
    },
    phone: {
      label: "Phone",
      placeholder: "Enter your phone number"
    },
    email: {
      label: "Email",
      placeholder: "Enter your email address"
    },
    message: {
      label: "Message",
      placeholder: "How can we help you?"
    },
    privacy: {
      text: "By submitting this form, you agree to our",
      link: "privacy policy"
    },
    submit: "Send Message"
  },
  modal: {
    title: "Get a Free Consultation",
    description: "Leave your contact details and we'll help you find the perfect educational opportunity abroad"
  },
  contactInfo: {
    address: "123 Education Street, City, Country",
    phone: "+1 (234) 567-8901",
    email: "info@example.com",
    workHours: "Monday to Friday, 9:00 AM to 6:00 PM"
  }
};
const contactRu = {
  title: "Связаться с нами",
  subtitle: "Мы здесь, чтобы помочь вам с образованием за рубежом",
  cta: {
    contactUs: "Связаться с нами",
    callUs: "Позвоните нам",
    emailUs: "Напишите нам",
    whatsApp: "WhatsApp",
    getConsultation: "Получить бесплатную консультацию"
  },
  form: {
    title: "Отправьте нам сообщение",
    description: "Заполните форму, и мы свяжемся с вами как можно скорее",
    name: {
      label: "Имя",
      placeholder: "Введите ваше полное имя"
    },
    phone: {
      label: "Телефон",
      placeholder: "Введите ваш номер телефона"
    },
    email: {
      label: "Электронная почта",
      placeholder: "Введите ваш email адрес"
    },
    message: {
      label: "Сообщение",
      placeholder: "Чем мы можем вам помочь?"
    },
    privacy: {
      text: "Отправляя эту форму, вы соглашаетесь с нашей",
      link: "политикой конфиденциальности"
    },
    submit: "Отправить сообщение"
  },
  modal: {
    title: "Получите бесплатную консультацию",
    description: "Оставьте свои контактные данные, и мы поможем вам найти идеальную возможность получить образование за рубежом"
  },
  contactInfo: {
    address: "ул. Образования 123, Город, Страна",
    phone: "+1 (234) 567-8901",
    email: "info@example.com",
    workHours: "Понедельник-пятница, с 9:00 до 18:00"
  }
};
const contactUz = {
  title: "Biz bilan bog'laning",
  subtitle: "Chet elda ta'lim olish yo'lingizda yordam berishga tayyormiz",
  cta: {
    contactUs: "Biz bilan bog'laning",
    callUs: "Qo'ng'iroq qiling",
    emailUs: "Email yuboring",
    whatsApp: "WhatsApp",
    getConsultation: "Bepul konsultatsiya olish"
  },
  form: {
    title: "Bizga xabar yuboring",
    description: "Formani to'ldiring va biz siz bilan tez orada bog'lanamiz",
    name: {
      label: "Ism",
      placeholder: "To'liq ismingizni kiriting"
    },
    phone: {
      label: "Telefon",
      placeholder: "Telefon raqamingizni kiriting"
    },
    email: {
      label: "Email",
      placeholder: "Email manzilingizni kiriting"
    },
    message: {
      label: "Xabar",
      placeholder: "Qanday yordam bera olamiz?"
    },
    privacy: {
      text: "Ushbu shaklni yuborish orqali siz bizning",
      link: "maxfiylik siyosatimizga rozilik bildirasiz"
    },
    submit: "Xabar yuborish"
  },
  modal: {
    title: "Bepul konsultatsiya oling",
    description: "Kontakt ma'lumotlaringizni qoldiring va biz sizga chet elda ta'lim olish uchun eng yaxshi imkoniyatni topishda yordam beramiz"
  },
  contactInfo: {
    address: "Ta'lim ko'chasi 123, Shahar, Mamlakat",
    phone: "+1 (234) 567-8901",
    email: "info@example.com",
    workHours: "Dushanba-Juma, 9:00 dan 18:00 gacha"
  }
};
const translations$2 = {
  en: contactEn,
  ru: contactRu,
  uz: contactUz
};
function getContactTranslations(lang) {
  return translations$2[lang] || translations$2.uz;
}
const cardTheme = {
  base: "rounded-lg border bg-card text-card-foreground shadow-sm"
};
const skeletonTheme = {
  base: "animate-pulse rounded-md bg-muted"
};
const sectionHeaderTheme = {
  container: "mx-auto text-center mb-8 md:mb-12",
  title: "text-3xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-5 animate-fade-in",
  subtitle: "text-muted-foreground md:text-lg max-w-[600px] mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]",
  divider: "h-1 bg-primary-600 mx-auto mt-4 w-20 opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]"
};
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], "");
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx$1(cn(cardTheme.base, className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function SectionHeader($$payload, $$props) {
  push();
  let title = $$props["title"];
  let subtitle = fallback($$props["subtitle"], void 0);
  let maxWidth = fallback($$props["maxWidth"], "800px");
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${attr_class(clsx$1(cn(sectionHeaderTheme.container, className)))}${attr_style(`max-width: ${stringify(maxWidth)}`)}><h2${attr_class(clsx$1(sectionHeaderTheme.title))}>${escape_html(title)}</h2> `;
  if (subtitle) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p${attr_class(clsx$1(sectionHeaderTheme.subtitle))}>${escape_html(subtitle)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class(clsx$1(sectionHeaderTheme.divider))}></div></div>`;
  bind_props($$props, { title, subtitle, maxWidth, className });
  pop();
}
function ButtonView($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "href",
    "text",
    "variant",
    "showOnMobile",
    "showOnDesktop",
    "className"
  ]);
  let finalClasses, iconClass;
  let href = $$props["href"];
  let text = $$props["text"];
  let variant = fallback($$props["variant"], "desktop");
  let showOnMobile = fallback($$props["showOnMobile"], true);
  let showOnDesktop = fallback($$props["showOnDesktop"], true);
  let className = fallback($$props["className"], "");
  const baseClasses = "inline-flex items-center font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm";
  const variantClasses = {
    mobile: "px-6 py-3 text-sm",
    desktop: "px-8 py-4 text-lg hover:scale-105 shadow-md"
  };
  let visibilityClasses = "";
  if (!showOnMobile) visibilityClasses += "hidden md:inline-flex ";
  if (!showOnDesktop) visibilityClasses += "md:hidden ";
  const iconClasses = {
    mobile: "ml-1.5 h-4 w-4",
    desktop: "ml-2.5 h-6 w-6"
  };
  finalClasses = `${baseClasses} ${variantClasses[variant]} ${visibilityClasses} ${className}`;
  iconClass = iconClasses[variant];
  $$payload.out += `<a${spread_attributes(
    {
      href,
      class: clsx$1(finalClasses),
      ...$$restProps
    }
  )}>${escape_html(text)} `;
  Arrow_right($$payload, { class: iconClass });
  $$payload.out += `<!----></a>`;
  bind_props($$props, {
    href,
    text,
    variant,
    showOnMobile,
    showOnDesktop,
    className
  });
}
function Skeleton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["className"]);
  push();
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx$1(cn(skeletonTheme.base, className)),
      ...$$restProps
    }
  )}></div>`;
  bind_props($$props, { className });
  pop();
}
const en = {
  main: {
    title: "Our Programs",
    subtitle: "Discover educational opportunities that will help you achieve your career goals"
  },
  categories: {
    bachelor: {
      title: "Bachelor's Programs",
      description: "Professional education programs that meet international standards",
      duration: "4 years",
      benefits: [
        "Guaranteed employment assistance",
        "Scholarship opportunities",
        "International certificates"
      ]
    },
    master: {
      title: "Master's Programs",
      description: "Advanced program for training highly qualified specialists",
      duration: "2 years",
      benefits: [
        "Research opportunities",
        "Participation in international conferences",
        "Highly qualified faculty"
      ]
    },
    language: {
      title: "Language Courses",
      description: "Intensive courses to improve your HSK level and learn Chinese at a professional level",
      duration: "6 months",
      benefits: [
        "Guaranteed results",
        "Small groups",
        "Native-speaking teachers"
      ]
    }
  },
  filter: {
    title: "Filter Programs",
    language: "Language",
    duration: "Duration",
    priceRange: "Price Range",
    clearFilters: "Clear Filters"
  },
  labels: {
    duration: "Duration",
    benefits: "Program Benefits",
    price: "Program Price",
    originalPrice: "Original Price",
    discountedPrice: "Discounted Price",
    deadline: "Application Deadline",
    programs: "Programs",
    viewAll: "View All Programs",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    noResults: "No programs found matching your criteria",
    studyLevels: "Study Levels",
    fields: "Fields"
  },
  common: {
    discount: "Discount",
    discountedUntil: "Discounted until"
  }
};
const ru = {
  main: {
    title: "Наши программы",
    subtitle: "Откройте для себя образовательные возможности, которые помогут вам достичь ваших карьерных целей"
  },
  categories: {
    bachelor: {
      title: "Программы бакалавриата",
      description: "Профессиональные образовательные программы, соответствующие международным стандартам",
      duration: "4 года",
      benefits: [
        "Гарантированная помощь в трудоустройстве",
        "Возможности получения стипендии",
        "Международные сертификаты"
      ]
    },
    master: {
      title: "Программы магистратуры",
      description: "Продвинутая программа для подготовки высококвалифицированных специалистов",
      duration: "2 года",
      benefits: [
        "Возможности для исследований",
        "Участие в международных конференциях",
        "Высококвалифицированный преподавательский состав"
      ]
    },
    language: {
      title: "Языковые курсы",
      description: "Интенсивные курсы для повышения уровня HSK и изучения китайского языка на профессиональном уровне",
      duration: "6 месяцев",
      benefits: [
        "Гарантированные результаты",
        "Малые группы",
        "Преподаватели-носители языка"
      ]
    }
  },
  filter: {
    title: "Фильтр программ",
    language: "Язык",
    duration: "Продолжительность",
    priceRange: "Ценовой диапазон",
    clearFilters: "Очистить фильтры"
  },
  labels: {
    duration: "Продолжительность",
    benefits: "Преимущества программы",
    price: "Стоимость программы",
    originalPrice: "Исходная цена",
    discountedPrice: "Цена со скидкой",
    deadline: "Крайний срок подачи заявки",
    programs: "Программы",
    viewAll: "Посмотреть все программы",
    applyNow: "Подать заявку",
    learnMore: "Узнать больше",
    noResults: "Не найдено программ, соответствующих вашим критериям",
    studyLevels: "Уровни обучения",
    fields: "Направления"
  },
  common: {
    discount: "Скидка",
    discountedUntil: "Скидка действует до"
  }
};
const uz = {
  main: {
    title: "Bizning dasturlar",
    subtitle: "Karyera maqsadlaringizga erishishga yordam beradigan ta'lim imkoniyatlarini kashf eting"
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
    noResults: "Sizning mezonlaringizga mos keladigan dasturlar topilmadi",
    studyLevels: "O'qish darajalari",
    fields: "Yo'nalishlar"
  },
  common: {
    discount: "Chegirma",
    discountedUntil: "Chegirma muddati"
  }
};
const translations$1 = {
  en,
  ru,
  uz
};
function getProgramsTranslations(lang) {
  return translations$1[lang] || translations$1.uz;
}
const partnersEn = {
  title: "Our Partners",
  description: "We cooperate with the leading universities in China",
  swipeToSlide: "Swipe to slide",
  viewAllPartners: "View All Partners"
};
const partnersRu = {
  title: "Наши Партнеры",
  description: "Мы сотрудничаем с ведущими университетами Китая",
  swipeToSlide: "Проведите для просмотра",
  viewAllPartners: "Посмотреть всех партнеров"
};
const partnersUz = {
  title: "Bizning hamkorlar",
  description: "Biz Xitoyning yetakchi universitetlari bilan hamkorlik qilamiz",
  swipeToSlide: "Surish uchun suring",
  viewAllPartners: "Barcha hamkorlarni ko'rish"
};
const partnersTranslations = {
  en: partnersEn,
  ru: partnersRu,
  uz: partnersUz
};
function getPartnersTranslations(lang) {
  return partnersTranslations[lang] || partnersUz;
}
const successPathEn = {
  title: "Six steps to study in China",
  subtitle: "The most reliable and effective way to study in China from Uzbekistan",
  detailsButtonText: "More details",
  steps: [
    {
      id: 1,
      title: "Choosing a university",
      description: "Select a university and program that matches your goals and requirements",
      benefits: [
        "Choose the best universities",
        "Identify quotas and scholarships",
        "Create a document preparation plan",
        "Calculate expected costs"
      ]
    },
    {
      id: 2,
      title: "Document preparation",
      description: "Prepare and translate all necessary documents",
      benefits: [
        "Passport and personal documents",
        "Diploma and transcripts",
        "Certificates and achievements",
        "Preparing a motivation letter"
      ]
    },
    {
      id: 3,
      title: "University application",
      description: "Apply to selected universities and establish communication",
      benefits: [
        "Fill out application forms",
        "Check and submit documents",
        "Track application status",
        "Communicate with universities"
      ]
    },
    {
      id: 4,
      title: "Obtaining a visa",
      description: "Prepare necessary documents for a Chinese visa",
      benefits: [
        "Complete the visa application",
        "Insurance and financial guarantees",
        "Preparation for medical examination",
        "Preparation for interview"
      ]
    },
    {
      id: 5,
      title: "Preparation for departure to China",
      description: "Final preparations and advice for traveling to China",
      benefits: [
        "Flights and routes",
        "Selecting accommodation",
        "Bank account and payments",
        "List of necessary items"
      ]
    },
    {
      id: 6,
      title: "Support after arrival in China",
      description: "Support for adaptation and study in China",
      benefits: [
        "Airport pickup",
        "Registration process",
        "Accommodation setup",
        "Adaptation to the educational process"
      ]
    }
  ]
};
const successPathRu = {
  title: "Шесть шагов к обучению в Китае",
  subtitle: "Самый надежный и эффективный путь к обучению в Китае из Узбекистана",
  detailsButtonText: "Подробнее",
  steps: [
    {
      id: 1,
      title: "Выбор университета",
      description: "Выбор университета и программы, соответствующих вашим целям и требованиям",
      benefits: [
        "Выбор лучших университетов",
        "Определение квот и стипендий",
        "Составление плана подготовки документов",
        "Расчет ожидаемых расходов"
      ]
    },
    {
      id: 2,
      title: "Подготовка документов",
      description: "Подготовка и перевод всех необходимых документов",
      benefits: [
        "Паспорт и личные документы",
        "Диплом и транскрипты",
        "Сертификаты и достижения",
        "Подготовка мотивационного письма"
      ]
    },
    {
      id: 3,
      title: "Подача заявки в университет",
      description: "Подача заявок в выбранные университеты и установление коммуникации",
      benefits: [
        "Заполнение форм заявок",
        "Проверка и отправка документов",
        "Отслеживание статуса заявки",
        "Коммуникация с университетами"
      ]
    },
    {
      id: 4,
      title: "Получение визы",
      description: "Подготовка необходимых документов для китайской визы",
      benefits: [
        "Заполнение заявления на визу",
        "Страховка и финансовые гарантии",
        "Подготовка к медицинскому осмотру",
        "Подготовка к интервью"
      ]
    },
    {
      id: 5,
      title: "Подготовка к отъезду в Китай",
      description: "Финальные приготовления и советы для поездки в Китай",
      benefits: [
        "Авиабилеты и маршруты",
        "Выбор жилья",
        "Банковский счет и платежи",
        "Список необходимых вещей"
      ]
    },
    {
      id: 6,
      title: "Поддержка после прибытия в Китай",
      description: "Поддержка в адаптации и обучении в Китае",
      benefits: [
        "Встреча в аэропорту",
        "Процесс регистрации",
        "Размещение в жилье",
        "Адаптация к учебному процессу"
      ]
    }
  ]
};
const successPathUz = {
  title: "Xitoyda o'qishga olti bosqichli yo'l",
  subtitle: "O'zbekistondan Xitoyga o'qishga ketish uchun eng ishonchli va samarali yo'l",
  detailsButtonText: "Batafsil ma'lumot",
  steps: [
    {
      id: 1,
      title: "Universitet tanlash",
      description: "Sizning maqsadlaringiz va talablaringizga mos keluvchi universitet va dasturni tanlash",
      benefits: [
        "Eng yaxshi universitetlarni tanlash",
        "Kvota va stipendiyalarni aniqlash",
        "Hujjatlarni tayyorlash rejasini tuzish",
        "Kutilayotgan xarajatlarni hisoblash"
      ]
    },
    {
      id: 2,
      title: "Hujjatlarni tayyorlash",
      description: "Barcha kerakli hujjatlarni tayyorlash va tarjima qilish",
      benefits: [
        "Pasport va shaxsiy hujjatlar",
        "Diplom va transkriptlar",
        "Sertifikatlar va yutuqlar",
        "Motivatsion xat tayyorlash"
      ]
    },
    {
      id: 3,
      title: "Universitetga ariza topshirish",
      description: "Tanlangan universitetlarga ariza topshirish va muloqotni yo'lga qo'yish",
      benefits: [
        "Ariza formalarini to'ldirish",
        "Hujjatlarni tekshirish va yuborish",
        "Ariza holatini kuzatib borish",
        "Universitetlar bilan muloqot"
      ]
    },
    {
      id: 4,
      title: "Viza olish",
      description: "Xitoy vizasini olish uchun kerakli hujjatlarni tayyorlash",
      benefits: [
        "Viza arizasini to'ldirish",
        "Sug'urta va moliyaviy kafolatlar",
        "Tibbiy ko'rik uchun tayyorgarlik",
        "Intervyu uchun tayyorgarlik"
      ]
    },
    {
      id: 5,
      title: "Xitoyga ketishga tayyorgarlik",
      description: "Xitoyga ketish uchun oxirgi tayyorgarliklar va maslahatlar",
      benefits: [
        "Aviachiptalar va yo'nalishlar",
        "Yashash joyini tanlash",
        "Bank hisobi va to'lovlar",
        "Kerakli narsalar ro'yxati"
      ]
    },
    {
      id: 6,
      title: "Xitoyga kelgandan keyingi qo'llab-quvvatlash",
      description: "Xitoyda moslashish va o'qish davomida qo'llab-quvvatlash",
      benefits: [
        "Aeroportdan kutib olish",
        "Ro'yxatdan o'tkazish jarayoni",
        "Yashash joyiga joylashish",
        "O'quv jarayoniga moslashish"
      ]
    }
  ]
};
const successPathTranslations = {
  en: successPathEn,
  ru: successPathRu,
  uz: successPathUz
};
function getSuccessPathTranslations(lang) {
  return successPathTranslations[lang] || successPathUz;
}
const heroEn = {
  description: "We guarantee your admission or your money back!",
  stats: {
    universities: "Universities",
    students: "Students",
    success: "Success",
    experience: "Years Experience"
  },
  badge: {
    enrollment: "2025 Enrollment Started"
  },
  title: {
    first: "Uzbekistan",
    highlight: "reliable bridge",
    connector: "and China"
  },
  buttons: {
    apply: "Apply Now",
    programs: "Programs"
  },
  image: {
    alt: "Modern university campus"
  },
  tooltip: {
    label: "Additional Information",
    content: "Complete information about studying in China. Here you can find opportunities to study at the best universities in China, grant programs, and many other interesting facts. Our specialists will help you choose the right direction."
  },
  cards: {
    scholarship: {
      title: "Study with Scholarship",
      desc: "Opportunity to study with 100% scholarship"
    },
    admission: {
      title: "Guaranteed Admission",
      desc: "100% guaranteed university admission"
    }
  },
  testimonials: [
    {
      name: "John Smith",
      role: "Medical student, Tianjin University",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Study Bridge helped me get into one of China's best medical universities. They assisted with all paperwork and visa processes."
    },
    {
      name: "Emily Chen",
      role: "Computer Engineering, Tsinghua University",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Studying in China was my dream. With Study Bridge, this dream became a reality. They were instrumental in helping me get a scholarship!"
    },
    {
      name: "David Wong",
      role: "Economics student, Peking University",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "The Study Bridge staff are professional and caring. They supported me at every step from choosing a university to arriving in China."
    }
  ]
};
const heroRu = {
  description: "Гарантируем ваше зачисление или возвращаем деньги!",
  stats: {
    universities: "Университеты",
    students: "Студенты",
    success: "Успех",
    experience: "Лет опыта"
  },
  badge: {
    enrollment: "Прием на 2025 год открыт"
  },
  title: {
    first: "Узбекистан",
    highlight: "надежный мост",
    connector: "и Китай"
  },
  buttons: {
    apply: "Подать заявку",
    programs: "Программы"
  },
  image: {
    alt: "Современный университетский кампус"
  },
  tooltip: {
    label: "Дополнительная информация",
    content: "Полная информация об обучении в Китае. Здесь вы найдете возможности обучения в лучших университетах Китая, грантовые программы и множество других интересных фактов. Наши специалисты помогут вам выбрать правильное направление."
  },
  cards: {
    scholarship: {
      title: "Обучение по гранту",
      desc: "Возможность учиться со 100% грантом"
    },
    admission: {
      title: "Гарантированное зачисление",
      desc: "100% гарантия зачисления в университет"
    }
  },
  testimonials: [
    {
      name: "Иван Смирнов",
      role: "Студент медицины, Тяньцзиньский Университет",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Study Bridge помог мне поступить в один из лучших медицинских университетов Китая. Они содействовали во всех бумажных процессах и оформлении визы."
    },
    {
      name: "Екатерина Иванова",
      role: "Компьютерная инженерия, Университет Цинхуа",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Учеба в Китае была моей мечтой. С помощью Study Bridge эта мечта стала реальностью. Они очень помогли мне получить стипендию!"
    },
    {
      name: "Алексей Петров",
      role: "Студент экономики, Пекинский Университет",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Сотрудники Study Bridge профессиональны и заботливы. Они поддерживали меня на каждом этапе от выбора университета до прибытия в Китай."
    }
  ]
};
const heroUz = {
  description: "Qabul qilinishingizga kafolat beramiz yoki pulingizni qaytarib beramiz!",
  stats: {
    universities: "Universitetlar",
    students: "Talabalar",
    success: "Muvaffaqiyat",
    experience: "Yillik tajriba"
  },
  badge: {
    enrollment: "2025-yil qabuli boshlandi"
  },
  title: {
    first: "O'zbekiston",
    highlight: "ishonchli ko'prik",
    connector: "va Xitoy orasidagi"
  },
  buttons: {
    apply: "Ariza topshirish",
    programs: "Dasturlar"
  },
  image: {
    alt: "Zamonaviy universitet kampusi"
  },
  tooltip: {
    label: "Qo'shimcha ma'lumot",
    content: "Xitoyda o'qish bo'yicha to'liq ma'lumot. Bu yerda siz Xitoyning eng yaxshi universitetlarida o'qish imkoniyatlari, grant dasturlari va boshqa ko'plab qiziqarli ma'lumotlarni topishingiz mumkin. Bizning mutaxassislarimiz sizga to'g'ri yo'nalishni tanlashda yordam berishadi."
  },
  cards: {
    scholarship: {
      title: "Grant asosida o'qish",
      desc: "100% grant asosida o'qish imkoniyati"
    },
    admission: {
      title: "Kafolatlangan qabul",
      desc: "100% kafolatlangan universitet qabuli"
    }
  },
  testimonials: [
    {
      name: "Sardor Turaev",
      role: "Tibbiyot fakulteti talabasi, Tianjin Universiteti",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Study Bridge menga Xitoyning eng zo'r tibbiyot universitetiga kirish imkonini berdi. Ular barcha hujjat ishlari va vizani rasmiylashtirish jarayonlarida yordam berishdi."
    },
    {
      name: "Diyora Karimova",
      role: "Kompyuter muhandisligi, Tsinghua Universiteti",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Xitoyda o'qish orzuyim edi. Study Bridge bilan bu orzu haqiqatga aylandi. Stipendiya olishimda katta yordam ko'rsatishdi!"
    },
    {
      name: "Jahongir Vohidov",
      role: "Iqtisodiyot talabasi, Peking Universiteti",
      image: "/images/testimonials/placeholder.jpeg",
      quote: "Study Bridge xodimlari professional va g'amxo'r. Universiteti tanlashdan tortib, Xitoyga borishgacha bo'lgan jarayonning har bir bosqichida qo'llab-quvvatladilar."
    }
  ]
};
const heroTranslations = {
  en: heroEn,
  ru: heroRu,
  uz: heroUz
};
function getHeroTranslations(lang) {
  return heroTranslations[lang] || heroUz;
}
const whyEn = {
  badge: "Why China?",
  title: {
    main: "Six key advantages",
    highlight: "of studying in China"
  },
  subtitle: "Studying in China is not just quality education, but opening the door to wide opportunities for your future",
  reasons: [
    {
      title: "High-quality education",
      description: "Chinese universities are ranked in the TOP-100 worldwide and have the most modern scientific and technical base"
    },
    {
      title: "Innovation center",
      description: "The world's most advanced country in artificial intelligence, IT, robotics, and business"
    },
    {
      title: "Affordable study costs",
      description: "2-3 times cheaper than Europe and the USA. Starting from $2000-4000 per year + scholarships"
    },
    {
      title: "Cultural diversity",
      description: "5000 years of history, modern technology, and rich culture - this is not only education but also a school of life"
    },
    {
      title: "Wide opportunities",
      description: "Chinese language, international experience, and high salary in the future - jobs starting from $2000-5000"
    },
    {
      title: "Modern infrastructure",
      description: "Campus, laboratories, and sports complexes equipped with the latest technologies"
    }
  ]
};
const whyRu = {
  badge: "Почему Китай?",
  title: {
    main: "Шесть основных преимуществ",
    highlight: "обучения в Китае"
  },
  subtitle: "Обучение в Китае - это не только качественное образование, но и открытие двери к широким возможностям для вашего будущего",
  reasons: [
    {
      title: "Высококачественное образование",
      description: "Китайские университеты входят в ТОП-100 мировых рейтингов и имеют самую современную научно-техническую базу"
    },
    {
      title: "Центр инноваций",
      description: "Самая передовая страна в мире в области искусственного интеллекта, IT, робототехники и бизнеса"
    },
    {
      title: "Доступная стоимость обучения",
      description: "В 2-3 раза дешевле, чем в Европе и США. От $2000-4000 в год + стипендии"
    },
    {
      title: "Культурное разнообразие",
      description: "5000 лет истории, современные технологии и богатая культура - это не только образование, но и школа жизни"
    },
    {
      title: "Широкие возможности",
      description: "Китайский язык, международный опыт и высокая зарплата в будущем - рабочие места от $2000-5000"
    },
    {
      title: "Современная инфраструктура",
      description: "Кампус, лаборатории и спортивные комплексы, оснащенные новейшими технологиями"
    }
  ]
};
const whyUz = {
  badge: "Nima uchun aynan Xitoy?",
  title: {
    main: "Xitoyda o'qishning",
    highlight: "6 ta asosiy afzalligi"
  },
  subtitle: "Bu nafaqat diplom, balki butun dunyo tan oladigan tajriba",
  reasons: [
    {
      title: "Yuqori sifatli ta'lim",
      description: "Xitoy universitetlari jahon reytinglarida TOP-100 ga kiradi va eng zamonaviy ilmiy-texnik bazaga ega"
    },
    {
      title: "Innovatsiya markazi",
      description: "Sun'iy intellekt, IT, robototexnika va biznes sohasida dunyoning eng ilg'or davlati"
    },
    {
      title: "Arzon o'qish xarajatlari",
      description: "Yevropa va AQShga nisbatan 2-3 barobar arzon. Yiliga $2000-4000 dan boshlanadi + grantlar"
    },
    {
      title: "Madaniy rang-baranglik",
      description: "5000 yillik tarix, zamonaviy texnologiyalar va boy madaniyat – bu nafaqat ta'lim, balki hayot maktabi"
    },
    {
      title: "Keng imkoniyatlar",
      description: "Xitoy tili, xalqaro tajriba va kelajakda yuqori maosh - $2000-5000 dan boshlangan ish o'rinlari"
    },
    {
      title: "Zamonaviy infratuzilma",
      description: "Eng so'nggi texnologiyalar bilan jihozlangan kampus, laboratoriyalar va sport majmualar"
    }
  ]
};
const whyTranslations = {
  en: whyEn,
  ru: whyRu,
  uz: whyUz
};
function getWhyTranslations(lang) {
  return whyTranslations[lang] || whyUz;
}
const missionStatsEn = {
  badge: "Our Mission",
  title: "Why Choose Us?",
  subtitle: "We provide quality and affordable education opportunities in China",
  stats: {
    students: {
      label: "Students Enrolled",
      description: "Successfully studying at leading Chinese universities"
    },
    universities: {
      label: "Partner Universities",
      description: "Direct agreements with top universities"
    },
    success: {
      label: "Successful Admissions",
      description: "Guaranteed admission to your chosen university"
    },
    experience: {
      label: "Years of Experience",
      description: "Team of professional experts"
    }
  },
  advantages: {
    education: {
      title: "Quality Education",
      description: "Chinese universities rank in the top 100 worldwide"
    },
    price: {
      title: "Affordable Prices",
      description: "Tuition starting from $2000 per year + scholarships"
    },
    career: {
      title: "Career Prospects",
      description: "High-demand specialties and international diploma"
    }
  }
};
const missionStatsRu = {
  badge: "Наша миссия",
  title: "Почему именно мы?",
  subtitle: "Предоставляем возможность получить качественное и доступное образование в Китае",
  stats: {
    students: {
      label: "Направленных студентов",
      description: "Успешно учатся в ведущих университетах Китая"
    },
    universities: {
      label: "Партнерских университетов",
      description: "Прямые договоры с топовыми университетами"
    },
    success: {
      label: "Успешное зачисление",
      description: "Гарантированное зачисление в выбранный университет"
    },
    experience: {
      label: "Лет опыта",
      description: "Команда профессиональных экспертов"
    }
  },
  advantages: {
    education: {
      title: "Качественное образование",
      description: "Китайские университеты входят в топ-100 мирового рейтинга"
    },
    price: {
      title: "Доступные цены",
      description: "Стоимость обучения от $2000 в год + стипендии"
    },
    career: {
      title: "Карьерные перспективы",
      description: "Востребованные специальности и международный диплом"
    }
  }
};
const missionStatsUz = {
  badge: "Bizning maqsadimiz",
  title: "Nega aynan biz ?",
  subtitle: "Xitoyda sifatli va hamyonbop ta'lim olish imkoniyatini taqdim etamiz",
  stats: {
    students: {
      label: "Yuborilgan talabalar",
      description: "Xitoyning yetakchi universitetlarida muvaffaqiyatli tahsil olmoqda"
    },
    universities: {
      label: "Hamkor universitetlar",
      description: "Top universitetlar bilan to'g'ridan-to'g'ri shartnomalar"
    },
    success: {
      label: "Muvaffaqiyatli qabul",
      description: "Tanlangan universitetga kafolatlangan qabul"
    },
    experience: {
      label: "Yillik tajriba",
      description: "Professional ekspertlar jamoasi"
    }
  },
  advantages: {
    education: {
      title: "Sifatli ta'lim",
      description: "Xitoy universitetlari jahon reytingida top-100 ga kiradi"
    },
    price: {
      title: "Hamyonbop narxlar",
      description: "O'qish narxi yiliga $2000 dan + stipendiyalar"
    },
    career: {
      title: "Karyera istiqbollari",
      description: "Talab yuqori mutaxassisliklar va xalqaro diplom"
    }
  }
};
const missionStatsTranslations = {
  en: missionStatsEn,
  ru: missionStatsRu,
  uz: missionStatsUz
};
function getMissionStatsTranslations(lang) {
  return missionStatsTranslations[lang] || missionStatsUz;
}
const ourTeamEn = {
  badge: "Towards the Future",
  team: {
    title: "Our Team",
    description: "Experienced professionals working for your success",
    positions: {
      position1: "Education Consultant",
      position2: "Program Coordinator",
      position3: "International Relations Specialist",
      position4: "Student Affairs Specialist"
    }
  },
  values: {
    mainTitle: "Our Values",
    description: "Our mission is to make your dreams come true",
    value1: {
      title: "Goal-oriented Approach",
      description: "Helping each student achieve their personal goals"
    },
    value2: {
      title: "Care",
      description: "Ensuring the well-being and success of our students"
    },
    value3: {
      title: "Quality",
      description: "Maintaining high standards in education and services"
    }
  }
};
const ourTeamRu = {
  badge: "К будущему",
  team: {
    title: "Наша команда",
    description: "Опытные специалисты работают для вашего успеха",
    positions: {
      position1: "Консультант по образованию",
      position2: "Координатор программы",
      position3: "Специалист по международным отношениям",
      position4: "Специалист по работе со студентами"
    }
  },
  values: {
    mainTitle: "Наши ценности",
    description: "Наша цель – воплотить ваши мечты в реальность",
    value1: {
      title: "Целеустремленность",
      description: "Помощь каждому студенту в достижении личных целей"
    },
    value2: {
      title: "Забота",
      description: "Обеспечение благополучия и успеха наших студентов"
    },
    value3: {
      title: "Качество",
      description: "Поддержание высоких стандартов в образовании и услугах"
    }
  }
};
const ourTeamUz = {
  badge: "Kelajak sari",
  team: {
    title: "Bizning jamoa",
    description: "Tajribali mutaxassislar jamoasi sizning muvaffaqiyatingiz uchun ishlaydi",
    positions: {
      position1: "Ta'lim maslahatchisi",
      position2: "Dastur koordinatori",
      position3: "Xalqaro aloqalar bo'yicha mutaxassis",
      position4: "Talabalar bilan ishlash bo'yicha mutaxassis"
    }
  },
  values: {
    mainTitle: "Bizning qadriyatlarimiz",
    description: "Bizning maqsadimiz – sizning orzularingizni ro'yobga chiqarish",
    value1: {
      title: "Maqsadga yo'naltirilganlik",
      description: "Har bir talabaning shaxsiy maqsadlariga erishishiga yordam berish"
    },
    value2: {
      title: "G'amxo'rlik",
      description: "Talabalarimiz farovonligi va muvaffaqiyati uchun qayg'urish"
    },
    value3: {
      title: "Sifat",
      description: "Ta'lim va xizmatlarning yuqori sifatini ta'minlash"
    }
  }
};
const ourTeamTranslations = {
  en: ourTeamEn,
  ru: ourTeamRu,
  uz: ourTeamUz
};
function getOurTeamTranslations(lang) {
  return ourTeamTranslations[lang] || ourTeamUz;
}
const howWeWorkEn = {
  title: "How We Work",
  subtitle: "Our proven process to help you study in China",
  steps: {
    step1: {
      title: "Consultation",
      description: "We learn about your academic goals, preferences, and budget to find the best options for you."
    },
    step2: {
      title: "Documentation",
      description: "We help you prepare and collect all necessary documents for your university application."
    },
    step3: {
      title: "Application",
      description: "We translate your documents and submit applications to your chosen universities."
    },
    step4: {
      title: "Visa Support",
      description: "Once accepted, we guide you through the visa application process and pre-departure preparation."
    }
  }
};
const howWeWorkRu = {
  title: "Как мы работаем",
  subtitle: "Наш проверенный процесс, который поможет вам учиться в Китае",
  steps: {
    step1: {
      title: "Консультация",
      description: "Мы узнаем о ваших академических целях, предпочтениях и бюджете, чтобы найти для вас лучшие варианты."
    },
    step2: {
      title: "Документация",
      description: "Мы помогаем вам подготовить и собрать все необходимые документы для поступления в университет."
    },
    step3: {
      title: "Подача заявки",
      description: "Мы переводим ваши документы и подаем заявки в выбранные вами университеты."
    },
    step4: {
      title: "Визовая поддержка",
      description: "После принятия мы проводим вас через процесс подачи заявления на визу и подготовку к отъезду."
    }
  }
};
const howWeWorkUz = {
  title: "Biz qanday ishlaymiz",
  subtitle: "Xitoyda o'qishingizga yordam beradigan sinovdan o'tgan jarayonimiz",
  steps: {
    step1: {
      title: "Konsultatsiya",
      description: "Siz uchun eng yaxshi variantlarni topish uchun akademik maqsadlaringiz, afzalliklaringiz va byudjetingiz haqida ma'lumot olamiz."
    },
    step2: {
      title: "Hujjatlashtirish",
      description: "Universitetga ariza topshirish uchun barcha kerakli hujjatlarni tayyorlash va to'plashga yordam beramiz."
    },
    step3: {
      title: "Ariza topshirish",
      description: "Hujjatlaringizni tarjima qilamiz va siz tanlagan universitetlarga arizalar topshiramiz."
    },
    step4: {
      title: "Viza bo'yicha yordam",
      description: "Qabul qilingandan so'ng, viza olish jarayoni va jo'nashdan oldingi tayyorgarlik bo'yicha yo'l-yo'riq ko'rsatamiz."
    }
  }
};
const howWeWorkTranslations = {
  en: howWeWorkEn,
  ru: howWeWorkRu,
  uz: howWeWorkUz
};
function getHowWeWorkTranslations(lang) {
  return howWeWorkTranslations[lang] || howWeWorkUz;
}
const ctaEn$1 = {
  contactUs: "Contact Us",
  callUs: "Call Us",
  emailUs: "Email Us",
  whatsApp: "WhatsApp"
};
const ctaRu$1 = {
  contactUs: "Связаться с нами",
  callUs: "Позвоните нам",
  emailUs: "Напишите нам",
  whatsApp: "WhatsApp"
};
const ctaUz$1 = {
  contactUs: "Bog'lanish",
  callUs: "Qo'ng'iroq qilish",
  emailUs: "Email yuborish",
  whatsApp: "WhatsApp"
};
const ctaTranslations$1 = {
  en: ctaEn$1,
  ru: ctaRu$1,
  uz: ctaUz$1
};
function getCTATranslations$1(lang) {
  return ctaTranslations$1[lang] || ctaUz$1;
}
const comparisonEn = {
  title: "China vs Uzbekistan: Education Comparison",
  subtitle: "See how the educational systems of the two countries compare",
  selectCategory: "Select category",
  compareAnalysis: "Comparative analysis",
  readArticle: "Read the article",
  dataFrom: "Data provided as of 2023",
  categories: {
    education: {
      title: "Higher Education",
      china: [
        "50+ universities in the Top 500",
        "Internationally recognized diplomas",
        "Multilingual educational environment"
      ],
      uzb: [
        "Local accreditation",
        "National diplomas",
        "Education in Uzbek and Russian"
      ]
    },
    programs: {
      title: "Study Programs",
      china: [
        "Aligned with international standards",
        "Modern study materials",
        "Online education platforms"
      ],
      uzb: [
        "Based on national standards",
        "Traditional study materials",
        "Limited online resources"
      ]
    },
    infrastructure: {
      title: "Infrastructure",
      china: [
        "Modern campuses",
        "Fully equipped laboratories",
        "High-speed internet"
      ],
      uzb: [
        "Developing campuses",
        "Basic laboratories",
        "Medium-speed internet"
      ]
    },
    teachers: {
      title: "Teachers",
      china: [
        "International experts",
        "Highly qualified faculty",
        "Regular professional development"
      ],
      uzb: [
        "Local specialists",
        "Medium-qualified faculty",
        "Periodic professional development"
      ]
    }
  },
  countries: {
    china: "China",
    uzbekistan: "Uzbekistan"
  }
};
const comparisonRu = {
  title: "Китай vs Узбекистан: Сравнение образования",
  subtitle: "Посмотрите, как сравниваются образовательные системы двух стран",
  selectCategory: "Выберите категорию",
  compareAnalysis: "Сравнительный анализ",
  readArticle: "Читать статью",
  dataFrom: "Данные представлены по состоянию на 2023 год",
  categories: {
    education: {
      title: "Высшее образование",
      china: [
        "Более 50 университетов в Топ 500",
        "Международно признанные дипломы",
        "Многоязычная образовательная среда"
      ],
      uzb: [
        "Местная аккредитация",
        "Национальные дипломы",
        "Образование на узбекском и русском языках"
      ]
    },
    programs: {
      title: "Учебные программы",
      china: [
        "Соответствуют международным стандартам",
        "Современные учебные материалы",
        "Онлайн образовательные платформы"
      ],
      uzb: [
        "На основе национальных стандартов",
        "Традиционные учебные материалы",
        "Ограниченные онлайн ресурсы"
      ]
    },
    infrastructure: {
      title: "Инфраструктура",
      china: [
        "Современные кампусы",
        "Полностью оборудованные лаборатории",
        "Высокоскоростной интернет"
      ],
      uzb: [
        "Развивающиеся кампусы",
        "Базовые лаборатории",
        "Интернет средней скорости"
      ]
    },
    teachers: {
      title: "Преподаватели",
      china: [
        "Международные эксперты",
        "Высококвалифицированные кадры",
        "Регулярное повышение квалификации"
      ],
      uzb: [
        "Местные специалисты",
        "Кадры средней квалификации",
        "Периодическое повышение квалификации"
      ]
    }
  },
  countries: {
    china: "Китай",
    uzbekistan: "Узбекистан"
  }
};
const comparisonUz = {
  title: "Xitoy vs O'zbekiston: Ta'lim solishtirmasi",
  subtitle: "Ikki davlat ta'lim tizimining solishtirmasini ko'ring",
  selectCategory: "Kategoriyani tanlang",
  compareAnalysis: "Qiyosiy tahlil",
  readArticle: "Maqolani o'qing",
  dataFrom: "Ma'lumotlar 2023-yil holatiga ko'ra taqdim etilgan",
  categories: {
    education: {
      title: "Oliy ta'lim",
      china: [
        "Top 500 ga kiruvchi 50+ universitet",
        "Xalqaro tan olingan diplomlar",
        "Ko'p tilli ta'lim muhiti"
      ],
      uzb: [
        "Mahalliy akkreditatsiya",
        "Milliy diplomlar",
        "O'zbek va rus tillarida ta'lim"
      ]
    },
    programs: {
      title: "O'quv dasturlari",
      china: [
        "Xalqaro standartlarga mos",
        "Zamonaviy o'quv materiallari",
        "Online ta'lim platformalari"
      ],
      uzb: [
        "Milliy standartlar asosida",
        "An'anaviy o'quv materiallari",
        "Cheklangan online resurslar"
      ]
    },
    infrastructure: {
      title: "Infratuzilma",
      china: [
        "Zamonaviy kampuslar",
        "To'liq jihozlangan laboratoriyalar",
        "Yuqori tezlikdagi internet"
      ],
      uzb: [
        "Rivojlanayotgan kampuslar",
        "Bazaviy laboratoriyalar",
        "O'rta tezlikdagi internet"
      ]
    },
    teachers: {
      title: "O'qituvchilar",
      china: [
        "Xalqaro ekspertlar",
        "Yuqori malakali kadrlar",
        "Doimiy malaka oshirish"
      ],
      uzb: [
        "Mahalliy mutaxassislar",
        "O'rta malakali kadrlar",
        "Davriy malaka oshirish"
      ]
    }
  },
  countries: {
    china: "Xitoy",
    uzbekistan: "O'zbekiston"
  }
};
const comparisonTranslations = {
  en: comparisonEn,
  ru: comparisonRu,
  uz: comparisonUz
};
function getComparisonTranslations(lang) {
  return comparisonTranslations[lang] || comparisonUz;
}
const uiEn = {
  errorMessage: {
    retry: "Retry"
  },
  alert: {
    close: "Close",
    dismiss: "Dismiss",
    info: "Information",
    success: "Success",
    warning: "Warning",
    error: "Error"
  },
  pagination: {
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of"
  },
  form: {
    required: "Required",
    optional: "Optional",
    submit: "Submit",
    cancel: "Cancel",
    loading: "Loading..."
  }
};
const uiRu = {
  errorMessage: {
    retry: "Повторить"
  },
  alert: {
    close: "Закрыть",
    dismiss: "Скрыть",
    info: "Информация",
    success: "Успех",
    warning: "Предупреждение",
    error: "Ошибка"
  },
  pagination: {
    previous: "Предыдущая",
    next: "Следующая",
    page: "Страница",
    of: "из"
  },
  form: {
    required: "Обязательно",
    optional: "Опционально",
    submit: "Отправить",
    cancel: "Отмена",
    loading: "Загрузка..."
  }
};
const uiUz = {
  errorMessage: {
    retry: "Qayta urinish"
  },
  alert: {
    close: "Yopish",
    dismiss: "Yashirish",
    info: "Ma'lumot",
    success: "Muvaffaqiyat",
    warning: "Ogohlantirish",
    error: "Xatolik"
  },
  pagination: {
    previous: "Oldingi",
    next: "Keyingi",
    page: "Sahifa",
    of: "dan"
  },
  form: {
    required: "Majburiy",
    optional: "Ixtiyoriy",
    submit: "Yuborish",
    cancel: "Bekor qilish",
    loading: "Yuklanmoqda..."
  }
};
const translations = {
  en: uiEn,
  ru: uiRu,
  uz: uiUz
};
function getUITranslations(lang) {
  return translations[lang] || translations.uz;
}
const testimonialsEn = {
  page: {
    title: "Our Students Testimonials",
    subtitle: "Learn what our students who are already studying in China say about us",
    cta: {
      title: "Ready to start your journey?",
      button: "Contact us"
    }
  },
  main: {
    title: "What Our Students Say",
    subtitle: "Real experiences from our students studying in China"
  },
  stats: {
    satisfiedClients: {
      value: "98%",
      label: "Satisfied Clients"
    },
    successfulEnrollments: {
      value: "500+",
      label: "Successful Enrollments"
    },
    partnerUniversities: {
      value: "50+",
      label: "Partner Universities"
    }
  }
};
const testimonialsRu = {
  page: {
    title: "Отзывы наших студентов",
    subtitle: "Узнайте, что говорят о нас студенты, которые уже учатся в Китае",
    cta: {
      title: "Готовы начать свой путь?",
      button: "Свяжитесь с нами"
    }
  },
  main: {
    title: "Что говорят наши студенты",
    subtitle: "Реальный опыт наших студентов, обучающихся в Китае"
  },
  stats: {
    satisfiedClients: {
      value: "98%",
      label: "Довольных клиентов"
    },
    successfulEnrollments: {
      value: "500+",
      label: "Успешных зачислений"
    },
    partnerUniversities: {
      value: "50+",
      label: "Партнерских университетов"
    }
  }
};
const testimonialsUz = {
  page: {
    title: "Talabalarimizning fikrlari",
    subtitle: "Xitoyda allaqachon o'qiyotgan talabalarimiz biz haqimizda nima deyishlarini bilib oling",
    cta: {
      title: "Sayohatingizni boshlashga tayyormisiz?",
      button: "Biz bilan bog'laning"
    }
  },
  main: {
    title: "Talabalarimiz nima deyishadi",
    subtitle: "Xitoyda tahsil olayotgan talabalarimizning haqiqiy tajribalari"
  },
  stats: {
    satisfiedClients: {
      value: "98%",
      label: "Mamnun mijozlar"
    },
    successfulEnrollments: {
      value: "500+",
      label: "Muvaffaqiyatli qabullar"
    },
    partnerUniversities: {
      value: "50+",
      label: "Hamkor universitetlar"
    }
  }
};
const testimonialsTranslations = {
  en: testimonialsEn,
  ru: testimonialsRu,
  uz: testimonialsUz
};
function getTestimonialsTranslations(lang) {
  return testimonialsTranslations[lang] || testimonialsTranslations.uz;
}
const faqEn = {
  title: "Frequently Asked Questions",
  subtitle: "Find answers to the most common questions about studying in China",
  notFoundQuestion: "Didn't find what you're looking for?",
  askQuestion: "Ask us a question",
  search: {
    placeholder: "Search for a question",
    noResults: "No results found"
  },
  categories: {
    admission: "Admission",
    documents: "Documents",
    study: "Studies",
    life: "Student Life",
    finance: "Finances",
    scholarships: "Scholarships",
    transfer: "Transfer",
    language: "Language"
  },
  common: {
    readMore: "Read more",
    showAll: "Show all",
    hideAll: "Hide all",
    relatedQuestions: "Related questions"
  },
  guides: {
    title: "Useful guides"
  },
  popularQuestions: "Popular questions",
  contactUs: "Contact us",
  meta: {
    title: "FAQ - Frequently Asked Questions About Studying in China",
    description: "Find answers to commonly asked questions about admission, scholarships, visa process, and student life in China."
  },
  wizard: {
    title: "FAQ Wizard",
    description: "Answer a few questions to find the information you need",
    step1: "Select a category",
    step2: "Select subcategory",
    step3: "Results",
    categoriesGroup: "Categories",
    backButton: "Back",
    nextButton: "Next",
    restartButton: "Start over"
  },
  pageTitle: "FAQ"
};
const faqRu = {
  title: "Часто задаваемые вопросы",
  subtitle: "Найдите ответы на самые распространенные вопросы об обучении в Китае",
  notFoundQuestion: "Не нашли то, что искали?",
  askQuestion: "Задайте нам вопрос",
  search: {
    placeholder: "Поиск вопроса",
    noResults: "Результатов не найдено"
  },
  categories: {
    admission: "Поступление",
    documents: "Документы",
    study: "Обучение",
    life: "Студенческая жизнь",
    finance: "Финансы",
    scholarships: "Стипендии",
    transfer: "Перевод",
    language: "Язык"
  },
  common: {
    readMore: "Читать далее",
    showAll: "Показать все",
    hideAll: "Скрыть все",
    relatedQuestions: "Связанные вопросы"
  },
  guides: {
    title: "Полезные руководства"
  },
  popularQuestions: "Популярные вопросы",
  contactUs: "Свяжитесь с нами",
  meta: {
    title: "FAQ - Часто задаваемые вопросы об обучении в Китае",
    description: "Найдите ответы на часто задаваемые вопросы о поступлении, стипендиях, визовом процессе и студенческой жизни в Китае."
  },
  wizard: {
    title: "Мастер FAQ",
    description: "Ответьте на несколько вопросов, чтобы найти нужную информацию",
    step1: "Выберите категорию",
    step2: "Выберите подкатегорию",
    step3: "Результаты",
    categoriesGroup: "Категории",
    backButton: "Назад",
    nextButton: "Дальше",
    restartButton: "Начать заново"
  },
  pageTitle: "ЧЗВ"
};
const faqUz = {
  title: "Ko'p so'raladigan savollar",
  subtitle: "Xitoyda o'qish haqidagi eng ko'p so'raladigan savollarga javoblar",
  notFoundQuestion: "Qidirayotganingizni topa olmadingizmi?",
  askQuestion: "Bizga savol bering",
  search: {
    placeholder: "Savol qidirish",
    noResults: "Natija topilmadi"
  },
  categories: {
    admission: "Qabul",
    documents: "Hujjatlar",
    study: "O'qish",
    life: "Talaba hayoti",
    finance: "Moliya",
    scholarships: "Stipendiyalar",
    transfer: "O'tkazish",
    language: "Til"
  },
  common: {
    readMore: "Batafsil",
    showAll: "Hammasini ko'rsatish",
    hideAll: "Hammasini yashirish",
    relatedQuestions: "Tegishli savollar"
  },
  guides: {
    title: "Foydali ko'rsatmalar"
  },
  popularQuestions: "Mashhur savollar",
  contactUs: "Biz bilan bog'laning",
  meta: {
    title: "Ko'p so'raladigan savollar - Xitoyda o'qish",
    description: "Qabul, stipendiyalar, viza jarayoni va Xitoydagi talaba hayoti haqidagi ko'p so'raladigan savollarga javoblar toping."
  },
  wizard: {
    title: "FAQ ustasi",
    description: "Kerakli ma'lumotni topish uchun bir nechta savollarga javob bering",
    step1: "Kategoriyani tanlang",
    step2: "Subkategoriyani tanlang",
    step3: "Natijalar",
    categoriesGroup: "Kategoriyalar",
    backButton: "Orqaga",
    nextButton: "Keyingi",
    restartButton: "Qayta boshlash"
  },
  pageTitle: "KSS"
};
const faqTranslations = {
  en: faqEn,
  ru: faqRu,
  uz: faqUz
};
function getFAQTranslations(lang) {
  return faqTranslations[lang] || faqUz;
}
const featuredBlogEn = {
  title: "Educational Blog",
  subtitle: "Useful materials for students",
  featuredBadge: "Featured",
  viewAll: "All articles",
  readMore: "Read",
  categories: {
    academic: "Academic",
    studyTips: "Study Tips",
    career: "Career",
    studentLife: "Student Life",
    technology: "Technology"
  }
};
const featuredBlogRu = {
  title: "Образовательный блог",
  subtitle: "Полезные материалы для студентов",
  featuredBadge: "Рекомендуемое",
  viewAll: "Все статьи",
  readMore: "Читать",
  categories: {
    academic: "Академические",
    studyTips: "Советы по учебе",
    career: "Карьера",
    studentLife: "Студенческая жизнь",
    technology: "Технологии"
  }
};
const featuredBlogUz = {
  title: "Ta'lim blogi",
  subtitle: "Talabalar uchun foydali materiallar",
  featuredBadge: "Tavsiya etilgan",
  viewAll: "Barcha maqolalar",
  readMore: "O'qish",
  categories: {
    academic: "Akademik",
    studyTips: "O'qish maslahatlari",
    career: "Karyera",
    studentLife: "Talaba hayoti",
    technology: "Texnologiyalar"
  }
};
const featuredBlogTranslations = {
  en: featuredBlogEn,
  ru: featuredBlogRu,
  uz: featuredBlogUz
};
function getFeaturedBlogTranslations(lang) {
  return featuredBlogTranslations[lang] || featuredBlogUz;
}
const ctaEn = {
  title: "Call now for a free consultation",
  description: "Start transforming your future today by studying in China. We are ready to help you!",
  button: "Contact us",
  phone: "+998 90 123 45 67"
};
const ctaRu = {
  title: "Позвоните сейчас и получите бесплатную консультацию",
  description: "Начните менять свое будущее уже сегодня, обучаясь в Китае. Мы готовы вам помочь!",
  button: "Связаться с нами",
  phone: "+998 90 123 45 67"
};
const ctaUz = {
  title: "Hoziroq qo'ng'iroq qiling va bepul maslahat oling",
  description: "Xitoyda o'qish orqali kelajagingizni bugundan boshlab o'zgartiring. Biz sizga yordam berishga tayyormiz!",
  button: "Biz bilan bog'laning",
  phone: "+998 90 123 45 67"
};
const ctaTranslations = {
  en: ctaEn,
  ru: ctaRu,
  uz: ctaUz
};
function getCTATranslations(lang) {
  return ctaTranslations[lang] || ctaUz;
}
const breadcrumbsEn = {
  home: "Home",
  ariaLabel: "Breadcrumb Navigation",
  common: {
    universities: "Universities",
    programs: "Programs",
    about: "About Us",
    contact: "Contact",
    blog: "Blog",
    faq: "FAQ"
  }
};
const breadcrumbsRu = {
  home: "Главная",
  ariaLabel: "Навигация",
  common: {
    universities: "Университеты",
    programs: "Программы обучения",
    about: "О нас",
    contact: "Контакты",
    blog: "Блог",
    faq: "Вопросы и ответы"
  }
};
const breadcrumbsUz = {
  home: "Bosh sahifa",
  ariaLabel: "Navigatsiya",
  common: {
    universities: "Universitetlar",
    programs: "O'quv dasturlari",
    about: "Biz haqimizda",
    contact: "Aloqa",
    blog: "Blog",
    faq: "Savol-javoblar"
  }
};
const breadcrumbsTranslations = {
  en: breadcrumbsEn,
  ru: breadcrumbsRu,
  uz: breadcrumbsUz
};
function getBreadcrumbsTranslations(lang) {
  return breadcrumbsTranslations[lang] || breadcrumbsUz;
}
const languageSelectorEn = {
  selectLanguage: "Select language",
  languageNames: {
    uz: "O'zbekcha",
    ru: "Русский",
    en: "English"
  },
  shortcuts: {
    uz: "Alt+U",
    ru: "Alt+R",
    en: "Alt+E"
  },
  aria: {
    languageMenu: "Language selection menu",
    current: "Current language"
  }
};
const languageSelectorRu = {
  selectLanguage: "Выбрать язык",
  languageNames: {
    uz: "O'zbekcha",
    ru: "Русский",
    en: "English"
  },
  shortcuts: {
    uz: "Alt+U",
    ru: "Alt+R",
    en: "Alt+E"
  },
  aria: {
    languageMenu: "Меню выбора языка",
    current: "Текущий язык"
  }
};
const languageSelectorUz = {
  selectLanguage: "Tilni tanlash",
  languageNames: {
    uz: "O'zbekcha",
    ru: "Русский",
    en: "English"
  },
  shortcuts: {
    uz: "Alt+U",
    ru: "Alt+R",
    en: "Alt+E"
  },
  aria: {
    languageMenu: "Til tanlash menyusi",
    current: "Joriy til"
  }
};
const languageSelectorTranslations = {
  en: languageSelectorEn,
  ru: languageSelectorRu,
  uz: languageSelectorUz
};
function getLanguageSelectorTranslations(lang) {
  return languageSelectorTranslations[lang] || languageSelectorUz;
}
const getTranslations = {
  partners: getPartnersTranslations,
  successPath: getSuccessPathTranslations,
  hero: getHeroTranslations,
  why: getWhyTranslations,
  missionStats: getMissionStatsTranslations,
  ourTeam: getOurTeamTranslations,
  howWeWork: getHowWeWorkTranslations,
  cta: getCTATranslations$1,
  comparison: getComparisonTranslations,
  universityDetail: getUniversityDetailTranslations,
  universityPage: getUniversityPageTranslations,
  contact: getContactTranslations,
  ui: getUITranslations,
  testimonials: getTestimonialsTranslations,
  faq: getFAQTranslations,
  featuredBlog: getFeaturedBlogTranslations,
  blogCommon: getBlogCommonTranslations,
  programs: getProgramsTranslations,
  uiCta: getCTATranslations,
  section: getSectionTranslations,
  breadcrumbs: getBreadcrumbsTranslations,
  language: getLanguageSelectorTranslations,
  navigation: getNavigationTranslations
};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ContactButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactButton;
  const {
    text,
    variant = "desktop",
    showOnMobile = true,
    showOnDesktop = true,
    className = "",
    lang
  } = Astro2.props;
  const currentLang = getLangFromUrl(Astro2.url);
  const t = getTranslations.contact(currentLang || lang || "uz");
  const buttonText = text || t.cta.getConsultation;
  const baseClasses = "inline-flex items-center font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm";
  const variantClasses = {
    mobile: "px-6 py-3 text-sm",
    desktop: "px-8 py-4 text-lg hover:scale-105 shadow-md"
  };
  const visibilityClasses = [];
  if (!showOnMobile) visibilityClasses.push("hidden md:inline-flex");
  if (!showOnDesktop) visibilityClasses.push("md:hidden");
  if (showOnMobile && showOnDesktop) visibilityClasses.push("");
  const iconClasses = {
    mobile: "mr-1.5 h-4 w-4",
    desktop: "mr-2.5 h-6 w-6"
  };
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${visibilityClasses.join(" ")} ${className}`;
  const buttonId = `contact-button-${Math.random().toString(36).substring(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", "<button", "", "> ", " ", " </button> <script>(function(){", "\n  document.getElementById(buttonId).addEventListener('click', function() {\n    window.openContactModal();\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(buttonId, "id"), addAttribute(finalClasses, "class"), renderComponent($$result, "MessageCircleQuestion", $$MessageCircleQuestion, { "class": iconClasses[variant] }), buttonText, defineScriptVars({ buttonId }));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/ui/astro/ContactButton.astro", void 0);
const $$Astro$1 = createAstro();
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CTA;
  const { lang = "uz" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 sm:px-6 lg:px-8 mt-20 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 shadow-xl transform hover:scale-[1.02] transition-all duration-300" data-astro-cid-ctop6wru> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-astro-cid-ctop6wru>
KELAJAGINGIZNI KUTIB O'TIRMANG - UNI YARATING!
</h2> <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto" data-astro-cid-ctop6wru>
Xitoyda o'qish orqali kelajagingizni bugundan boshlab o'zgartiring. Biz sizga yordam berishga tayyormiz!
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ctop6wru> <a href="tel:+998901234567" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl" data-astro-cid-ctop6wru> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-5 h-5 mr-2", "data-astro-cid-ctop6wru": true })}
+998 90 123-45-67
</a> <button onclick="window.openContactModal()" class="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-400 transition-all duration-300 border-2 border-white/20 shadow-lg hover:shadow-xl" data-astro-cid-ctop6wru>
Formani to'ldiring
${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "ml-2 w-5 h-5 group-hover:translate-x-1", "data-astro-cid-ctop6wru": true })} </button> </div> </div> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/ui/CTA.astro", void 0);
const $$Astro = createAstro();
const $$ButtonView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonView;
  const {
    href,
    text,
    variant = "desktop",
    className = "",
    showOnMobile = true,
    showOnDesktop = true,
    onclick,
    icon: Icon = $$ArrowRight
  } = Astro2.props;
  const baseClasses = "inline-flex items-center font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm";
  const variantClasses = {
    mobile: "px-6 py-3 text-sm",
    desktop: "px-8 py-4 text-lg hover:scale-105 shadow-md"
  };
  const visibilityClasses = [];
  if (!showOnMobile) visibilityClasses.push("hidden md:inline-flex");
  if (!showOnDesktop) visibilityClasses.push("md:hidden");
  if (showOnMobile && showOnDesktop) visibilityClasses.push("");
  const iconClasses = {
    mobile: "ml-1.5 h-4 w-4",
    desktop: "ml-2.5 h-6 w-6"
  };
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${visibilityClasses.join(" ")} ${className}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(finalClasses, "class")}>${text}${renderComponent($$result, "Icon", Icon, { "class": iconClasses[variant] })}</a>` : renderTemplate`<button${addAttribute(onclick, "onclick")}${addAttribute(finalClasses, "class")}>${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "class": iconClasses[variant] })}`}${text}</button>`}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/ui/astro/ButtonView.astro", void 0);
export {
  $$SectionHeader as $,
  ButtonView as B,
  Card as C,
  Skeleton as S,
  SectionHeader as a,
  getFAQTranslations as b,
  $$ContactButton as c,
  getContactTranslations as d,
  defaultLang as e,
  cn as f,
  getLangFromUrl as g,
  getBlogCommonTranslations as h,
  getTranslation as i,
  getProgramsTranslations as j,
  $$CTA as k,
  languages as l,
  getTranslations as m,
  getNavigationTranslations as n,
  getHeroTranslations as o,
  getMissionStatsTranslations as p,
  getSuccessPathTranslations as q,
  $$ButtonView as r,
  getPartnersTranslations as s,
  getOurTeamTranslations as t,
  useTranslations as u,
  getTestimonialsTranslations as v,
  getFeaturedBlogTranslations as w,
  getComparisonTranslations as x,
  getWhyTranslations as y
};
