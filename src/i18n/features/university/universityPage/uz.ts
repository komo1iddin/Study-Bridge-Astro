import type { UniversityPageTranslations } from './types';

export const universityPageUz: UniversityPageTranslations = {
  breadcrumb: {
    home: 'Bosh sahifa',
    universities: 'Universitetlar'
  },
  loading: 'Yuklanmoqda...',
  filters: {
    title: 'Filterlar',
    reset: 'Qayta o\'rnatish',
    quickFilters: 'Tezkor filterlar',
    featured: 'Faqat tavsiya etilgan universitetlar',
    educationType: {
      title: 'Ta\'lim turi',
      placeholder: 'Ta\'lim turini tanlang',
      all: 'Barcha turlar',
      bachelor: 'Bakalavr',
      master: 'Magistratura',
      language: 'Til kursi',
      program: '1+2 Dasturi'
    },
    location: {
      title: 'Joylashuv',
      placeholder: 'Shaharni tanlang',
      all: 'Barcha shaharlar'
    },
    ranking: {
      title: 'Universitet reytingi',
      placeholder: 'Reyting oralig\'ini tanlang',
      all: 'Barcha reytinglar',
      top5: 'Top 5',
      top10: '6-10',
      top20: '11-20',
      other: '21+'
    },
    grants: {
      title: 'Grant imkoniyatlari',
      placeholder: 'Grant holatini tanlang',
      all: 'Barchasi',
      available: 'Mavjud',
      notAvailable: 'Mavjud emas'
    }
  },
  card: {
    viewDetails: 'Batafsil ma\'lumot',
    founded: 'Tashkil topgan',
    students: 'Talabalar',
    featured: 'Tavsiya etilgan',
    grantsAvailable: 'Grantlar mavjud',
    rank: 'Reyting #{rank}'
  },
  list: {
    title: 'Universitetlar',
    featuredUniversities: 'Tavsiya etilgan universitetlar',
    showing: 'Ko\'rsatilmoqda {current} / {total} universitet',
    noResults: 'Sizning filterlaringizga mos universitetlar topilmadi',
    pagination: {
      prev: 'Oldingi',
      next: 'Keyingi'
    }
  },
  infoCard: {
    title: 'Xitoyda ta\'lim',
    description: 'Xitoy xalqaro talabalar uchun eng mashhur ta\'lim yo\'nalishlaridan biriga aylandi va arzon narxlarda jahon darajasidagi ta\'lim taklif etmoqda.',
    stats: {
      universities: {
        value: '2,900+ Universitet',
        description: 'Barcha viloyatlar bo\'ylab'
      },
      programs: {
        value: '500,000+ Dasturlar',
        description: 'Bakalavr darajasidan doktoranturagacha'
      },
      students: {
        value: '500,000+ Xalqaro talabalar',
        description: '200+ mamlakatdan'
      },
      scholarships: {
        value: '30,000+ Stipendiyalar',
        description: 'Davlat va universitet tomonidan moliyalashtirilgan'
      }
    }
  },
  mobileFilters: {
    title: 'Filterlar',
    close: 'Yopish',
    open: 'Filter'
  }
}; 