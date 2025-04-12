import "clsx";
import { g as getLangFromUrl, C as Card, S as Skeleton, a as SectionHeader, B as ButtonView } from "./ui_BAsHSPwd.mjs";
import { g as createCollectionToGlobResultMap, h as createReference, i as createGetCollection, c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, j as renderEntry } from "./vendor_fPK89n42.mjs";
import "kleur/colors";
import { p as push, f as fallback, b as bind_props, a as pop, e as ensure_array_like, j as attr_class, l as escape_html } from "./svelte-vendor_tqOFL8AJ.mjs";
import { H as Hand, C as Chevron_right } from "./icons_gbmVFOaE.mjs";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { LRUCache } from "lru-cache";
import { c as convertYamlToUniversity } from "./utils_Dhoof_eT.mjs";
const contentDir$1 = "/src/content/";
const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: contentEntryGlob,
  contentDir: contentDir$1
});
const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: dataEntryGlob,
  contentDir: contentDir$1
});
createCollectionToGlobResultMap({
  globResult: { ...contentEntryGlob, ...dataEntryGlob },
  contentDir: contentDir$1
});
let lookupMap = {};
lookupMap = {};
new Set(Object.keys(lookupMap));
function createGlobLookup(glob) {
  return async (collection, lookupId) => {
    const filePath = lookupMap[collection]?.entries[lookupId];
    if (!filePath) return void 0;
    return glob[collection][filePath];
  };
}
const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
  globResult: renderEntryGlob,
  contentDir: contentDir$1
});
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
const getCollection = createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
  cacheEntriesByCollection
});
createReference({ lookupMap });
const _astro_content = /* @__PURE__ */ Object.freeze({ __proto__: null, getCollection, render: renderEntry });
const DEV_MODE$1 = process.env.NODE_ENV !== "production";
const DEFAULT_TTL = DEV_MODE$1 ? 1e3 * 60 * 60 : 1e3 * 60 * 60 * 2;
const cache = new LRUCache({
  max: 1e3,
  // Increased from 500 to 1000 for more items
  ttl: DEFAULT_TTL,
  updateAgeOnGet: true
  // Reset TTL when item is accessed
});
async function getCachedData(key, fetchFn, ttl = DEFAULT_TTL) {
  const cachedData = cache.get(key);
  if (cachedData !== void 0) {
    return cachedData;
  }
  const data = await fetchFn();
  cache.set(key, data);
  return data;
}
const contentDir = path.join(process.cwd(), "src", "content");
const DEV_MODE = process.env.NODE_ENV !== "production";
const fileExistsCache = /* @__PURE__ */ new Map();
const directoryCache = /* @__PURE__ */ new Map();
const CACHE_TTL = DEV_MODE ? 1e3 * 60 * 10 : 1e3 * 60 * 60;
async function readYamlFile(filePath) {
  try {
    if (!await fileExists(filePath)) {
      return null;
    }
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const content = yaml.load(fileContent);
    return content;
  } catch (error) {
    if (DEV_MODE) {
      console.error(`Error reading file ${filePath}:`, error);
    }
    return null;
  }
}
async function fileExists(filePath) {
  if (fileExistsCache.has(filePath)) {
    return fileExistsCache.get(filePath) || false;
  }
  try {
    await fs.promises.access(filePath);
    fileExistsCache.set(filePath, true);
    return true;
  } catch (e) {
    fileExistsCache.set(filePath, false);
    return false;
  }
}
async function readMdFile(filePath) {
  try {
    if (!await fileExists(filePath)) {
      return null;
    }
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch && frontmatterMatch[1]) {
      const frontmatter = yaml.load(frontmatterMatch[1]);
      return frontmatter;
    }
    return null;
  } catch (error) {
    if (DEV_MODE) {
      console.error(`Error reading file ${filePath}:`, error);
    }
    return null;
  }
}
async function getFilesInDirectory(dirPath, extension) {
  const cacheKey = `${dirPath}-${extension}`;
  if (directoryCache.has(cacheKey)) {
    return directoryCache.get(cacheKey) || [];
  }
  try {
    try {
      await fs.promises.access(dirPath);
    } catch (e) {
      directoryCache.set(cacheKey, []);
      return [];
    }
    const files = await fs.promises.readdir(dirPath);
    const matchingFiles = files.filter((file) => file.endsWith(extension));
    directoryCache.set(cacheKey, matchingFiles);
    return matchingFiles;
  } catch (error) {
    if (DEV_MODE) {
      console.error(`Error reading directory ${dirPath}:`, error);
    }
    directoryCache.set(cacheKey, []);
    return [];
  }
}
async function directoryExists(dirPath) {
  const cacheKey = `dir-exists-${dirPath}`;
  if (fileExistsCache.has(cacheKey)) {
    return fileExistsCache.get(cacheKey) || false;
  }
  try {
    await fs.promises.access(dirPath);
    fileExistsCache.set(cacheKey, true);
    return true;
  } catch (e) {
    fileExistsCache.set(cacheKey, false);
    return false;
  }
}
async function getAllUniversities(lang) {
  if (DEV_MODE) {
    console.log(`Getting all universities for language: ${lang}`);
  }
  return getCachedData(`universities-all-${lang}`, async () => {
    const universitiesDir = path.join(contentDir, "universities");
    const yamlFiles = await getFilesInDirectory(universitiesDir, ".yaml");
    const universities = [];
    for (const file of yamlFiles) {
      const filePath = path.join(universitiesDir, file);
      const universityData = await readYamlFile(filePath);
      if (universityData) {
        const id = file.replace(".yaml", "");
        const university = convertYamlToUniversity(universityData, id, lang);
        universities.push(university);
      }
    }
    return universities;
  }, CACHE_TTL);
}
async function getAllTestimonials(lang) {
  return getCachedData(`testimonials-all-${lang}`, async () => {
    const mdDirPath = path.join(contentDir, "testimonials-md");
    const yamlDirPath = path.join(contentDir, "testimonials");
    const [mdDirExists, yamlDirExists] = await Promise.all([
      directoryExists(mdDirPath),
      directoryExists(yamlDirPath)
    ]);
    if (mdDirExists) {
      const mdFiles = await getFilesInDirectory(mdDirPath, ".md");
      if (mdFiles.length > 0) {
        const testimonials = await Promise.all(
          mdFiles.map(async (file) => {
            const filePath = path.join(mdDirPath, file);
            const data = await readMdFile(filePath);
            return {
              slug: file.replace(".md", ""),
              data
            };
          })
        );
        return testimonials.filter((t) => t.data !== null);
      }
    }
    if (yamlDirExists) {
      const yamlFiles = await getFilesInDirectory(yamlDirPath, ".yaml");
      if (yamlFiles.length > 0) {
        const testimonials = await Promise.all(
          yamlFiles.map(async (file) => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath);
            return {
              slug: file.replace(".yaml", ""),
              // Fix extension removal
              data
            };
          })
        );
        return testimonials.filter((t) => t.data !== null);
      }
    }
    return [];
  }, CACHE_TTL);
}
async function getAllFAQ(lang) {
  return getCachedData(`faq-all-${lang}`, async () => {
    const yamlDirPath = path.join(contentDir, "faq");
    if (await directoryExists(yamlDirPath)) {
      const yamlFiles = await getFilesInDirectory(yamlDirPath, ".yaml");
      if (yamlFiles.length > 0) {
        const faqItems = await Promise.all(
          yamlFiles.map(async (file) => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath);
            return {
              slug: file.replace(".yaml", ""),
              data
            };
          })
        );
        return faqItems.filter((item) => item.data !== null);
      }
    }
    return [];
  }, CACHE_TTL);
}
async function getAllCities(lang) {
  console.log(`Getting all cities for language: ${lang}`);
  return getCachedData(`cities-all-${lang}`, async () => {
    const universities = await getAllUniversities(lang);
    const cities = [...new Set(universities.map((uni) => uni.city))];
    return cities;
  });
}
async function getFeaturedUniversities(lang, limit = 8) {
  return getCachedData(`universities-featured-${lang}-${limit}`, async () => {
    try {
      const universitiesCollection = await getCollection("universities");
      const universities = universitiesCollection.map((entry) => {
        const city = entry.data.location?.split(",")[0]?.trim() || "Unknown City";
        let studentsString = "";
        const studentsData = entry.data.students;
        if (typeof studentsData === "string") {
          studentsString = studentsData;
        } else if (typeof studentsData === "object" && studentsData !== null) {
          studentsString = studentsData[lang] || studentsData.en || "";
        }
        let numericId = parseInt(entry.id, 10);
        if (isNaN(numericId)) {
          numericId = Math.abs(entry.id.split("").reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
          }, 0));
        }
        return {
          id: numericId,
          // Use numeric ID
          name: typeof entry.data.name === "object" ? entry.data.name[lang] || entry.data.name.en : entry.data.name,
          location: entry.data.location,
          rating: entry.data.rating || 0,
          students: studentsString,
          faculties: Array.isArray(entry.data.faculties) ? entry.data.faculties : entry.data.faculties?.[lang] || entry.data.faculties?.en || [],
          image: entry.data.image || "/placeholder.jpg",
          logo: entry.data.logo || "/placeholder.jpg",
          established: Number(entry.data.established || entry.data.foundedYear || 0)
        };
      });
      return universities.sort((a, b) => {
        return (b.rating || 0) - (a.rating || 0);
      }).slice(0, limit);
    } catch (error) {
      if (DEV_MODE) {
        console.error("Error fetching universities:", error);
      }
      return [];
    }
  }, 1e3 * 60 * 60);
}
const universityDetailEn = {
  breadcrumb: {
    home: "Home",
    universities: "Universities"
  },
  viewGallery: "View Gallery",
  tabs: {
    overview: "Overview",
    programs: "Programs",
    admission: "Admission",
    facilities: "Facilities",
    images: "Images",
    dorms: "Dorms",
    faq: "FAQ"
  },
  statistics: {
    title: "University Statistics",
    internationalStudents: "International Students",
    acceptanceRate: "Acceptance Rate",
    graduationRate: "Graduation Rate",
    facultyStudentRatio: "Faculty-Student Ratio"
  },
  application: {
    title: "Apply Now",
    subtitle: "Start your application to {university}",
    deadline: "Application Deadline",
    processingTime: "Processing Time",
    applicationFee: "Application Fee:",
    applyButton: "Apply Online",
    moreInfo: "For more information about the application process, please visit the university's official website."
  },
  contact: {
    title: "Contact Information",
    address: "Address",
    phone: "Phone",
    email: "Email",
    website: "Website",
    visitWebsite: "Visit Website"
  },
  badges: {
    featured: "Featured",
    grantsAvailable: "Grants Available",
    rank: "Rank #{rank}"
  },
  loadingText: "Loading...",
  selectSection: "Select section"
};
const universityDetailRu = {
  breadcrumb: {
    home: "Главная",
    universities: "Университеты"
  },
  viewGallery: "Посмотреть галерею",
  tabs: {
    overview: "Обзор",
    programs: "Программы",
    admission: "Поступление",
    facilities: "Инфраструктура",
    images: "Фотографии",
    dorms: "Общежития",
    faq: "Вопросы и ответы"
  },
  statistics: {
    title: "Статистика университета",
    internationalStudents: "Иностранные студенты",
    acceptanceRate: "Процент зачисления",
    graduationRate: "Процент выпускников",
    facultyStudentRatio: "Соотношение преподавателей и студентов"
  },
  application: {
    title: "Подать заявку",
    subtitle: "Начните процесс поступления в {university}",
    deadline: "Крайний срок подачи",
    processingTime: "Время обработки",
    applicationFee: "Стоимость подачи:",
    applyButton: "Подать онлайн",
    moreInfo: "Для получения дополнительной информации о процессе подачи заявки, пожалуйста, посетите официальный сайт университета."
  },
  contact: {
    title: "Контактная информация",
    address: "Адрес",
    phone: "Телефон",
    email: "Эл. почта",
    website: "Веб-сайт",
    visitWebsite: "Посетить сайт"
  },
  badges: {
    featured: "Рекомендуемый",
    grantsAvailable: "Доступны гранты",
    rank: "Рейтинг №{rank}"
  },
  loadingText: "Загрузка...",
  selectSection: "Выберите раздел"
};
const universityDetailUz = {
  breadcrumb: {
    home: "Bosh sahifa",
    universities: "Universitetlar"
  },
  viewGallery: "Galereyani ko'rish",
  tabs: {
    overview: "Umumiy ma'lumot",
    programs: "Dasturlar",
    admission: "Qabul",
    facilities: "Jihozlar",
    images: "Rasmlar",
    dorms: "Yotoqxonalar",
    faq: "Savol-javoblar"
  },
  statistics: {
    title: "Universitet statistikasi",
    internationalStudents: "Xalqaro talabalar",
    acceptanceRate: "Qabul darajasi",
    graduationRate: "Bitirish darajasi",
    facultyStudentRatio: "O'qituvchi-talaba nisbati"
  },
  application: {
    title: "Hozir ariza topshiring",
    subtitle: "{university} universitetiga arizangizni boshlang",
    deadline: "Ariza topshirish muddati",
    processingTime: "Ko'rib chiqish muddati",
    applicationFee: "Ariza to'lovi:",
    applyButton: "Onlayn ariza topshirish",
    moreInfo: "Ariza topshirish jarayoni haqida qo'shimcha ma'lumot olish uchun universitetning rasmiy veb-saytiga tashrif buyuring."
  },
  contact: {
    title: "Bog'lanish ma'lumotlari",
    address: "Manzil",
    phone: "Telefon",
    email: "Email",
    website: "Veb-sayt",
    visitWebsite: "Veb-saytga tashrif buyurish"
  },
  badges: {
    featured: "Tavsiya etilgan",
    grantsAvailable: "Grantlar mavjud",
    rank: "Reyting #{rank}"
  },
  loadingText: "Yuklanmoqda...",
  selectSection: "Bo'limni tanlang"
};
const universityDetailTranslations = {
  en: universityDetailEn,
  ru: universityDetailRu,
  uz: universityDetailUz
};
function getUniversityDetailTranslations(lang) {
  return universityDetailTranslations[lang] || universityDetailUz;
}
const universityPageEn = {
  breadcrumb: {
    home: "Home",
    universities: "Universities"
  },
  loading: "Loading...",
  filters: {
    title: "Filters",
    reset: "Reset",
    quickFilters: "Quick Filters",
    featured: "Featured universities only",
    educationType: {
      title: "Education Type",
      placeholder: "Select education type",
      all: "All types",
      bachelor: "Bachelor",
      master: "Master's",
      language: "Language Course",
      program: "1+2 Program"
    },
    location: {
      title: "Location",
      placeholder: "Select city",
      all: "All cities"
    },
    ranking: {
      title: "University Ranking",
      placeholder: "Select ranking range",
      all: "All rankings",
      top5: "Top 5",
      top10: "6-10",
      top20: "11-20",
      other: "21+"
    },
    grants: {
      title: "Grant Opportunities",
      placeholder: "Select grant status",
      all: "All",
      available: "Available",
      notAvailable: "Not Available"
    }
  },
  card: {
    viewDetails: "View Details",
    founded: "Founded",
    students: "Students",
    featured: "Featured",
    grantsAvailable: "Grants Available",
    rank: "Rank #{rank}"
  },
  list: {
    title: "Universities",
    featuredUniversities: "Featured Universities",
    showing: "Showing {current} of {total} universities",
    noResults: "No universities found matching your filters",
    pagination: {
      prev: "Previous",
      next: "Next"
    }
  },
  infoCard: {
    title: "Education in China",
    description: "China has become one of the most popular educational destinations for international students, offering world-class education at affordable prices.",
    stats: {
      universities: {
        value: "2,900+ Universities",
        description: "Across all provinces"
      },
      programs: {
        value: "500,000+ Programs",
        description: "From Bachelor's to Doctoral degrees"
      },
      students: {
        value: "500,000+ International students",
        description: "From 200+ countries"
      },
      scholarships: {
        value: "30,000+ Scholarships",
        description: "Government and university-funded"
      }
    }
  },
  mobileFilters: {
    title: "Filters",
    close: "Close",
    open: "Filter"
  }
};
const universityPageRu = {
  breadcrumb: {
    home: "Главная",
    universities: "Университеты"
  },
  loading: "Загрузка...",
  filters: {
    title: "Фильтры",
    reset: "Сбросить",
    quickFilters: "Быстрые фильтры",
    featured: "Только рекомендуемые университеты",
    educationType: {
      title: "Тип образования",
      placeholder: "Выберите тип образования",
      all: "Все типы",
      bachelor: "Бакалавриат",
      master: "Магистратура",
      language: "Языковые курсы",
      program: "Программа 1+2"
    },
    location: {
      title: "Расположение",
      placeholder: "Выберите город",
      all: "Все города"
    },
    ranking: {
      title: "Рейтинг университета",
      placeholder: "Выберите диапазон рейтинга",
      all: "Все рейтинги",
      top5: "Топ 5",
      top10: "6-10",
      top20: "11-20",
      other: "21+"
    },
    grants: {
      title: "Грантовые возможности",
      placeholder: "Выберите статус грантов",
      all: "Все",
      available: "Доступны",
      notAvailable: "Не доступны"
    }
  },
  card: {
    viewDetails: "Подробнее",
    founded: "Основан",
    students: "Студенты",
    featured: "Рекомендуемый",
    grantsAvailable: "Доступны гранты",
    rank: "Рейтинг №{rank}"
  },
  list: {
    title: "Университеты",
    featuredUniversities: "Рекомендуемые университеты",
    showing: "Показано {current} из {total} университетов",
    noResults: "Не найдено университетов, соответствующих вашим фильтрам",
    pagination: {
      prev: "Предыдущая",
      next: "Следующая"
    }
  },
  infoCard: {
    title: "Образование в Китае",
    description: "Китай стал одним из самых популярных образовательных направлений для иностранных студентов, предлагая образование мирового класса по доступным ценам.",
    stats: {
      universities: {
        value: "2,900+ Университетов",
        description: "По всем провинциям"
      },
      programs: {
        value: "500,000+ Программ",
        description: "От бакалавриата до докторантуры"
      },
      students: {
        value: "500,000+ Иностранных студентов",
        description: "Из более чем 200 стран"
      },
      scholarships: {
        value: "30,000+ Стипендий",
        description: "Финансируемых государством и университетами"
      }
    }
  },
  mobileFilters: {
    title: "Фильтры",
    close: "Закрыть",
    open: "Фильтр"
  }
};
const universityPageUz = {
  breadcrumb: {
    home: "Bosh sahifa",
    universities: "Universitetlar"
  },
  loading: "Yuklanmoqda...",
  filters: {
    title: "Filterlar",
    reset: "Qayta o'rnatish",
    quickFilters: "Tezkor filterlar",
    featured: "Faqat tavsiya etilgan universitetlar",
    educationType: {
      title: "Ta'lim turi",
      placeholder: "Ta'lim turini tanlang",
      all: "Barcha turlar",
      bachelor: "Bakalavr",
      master: "Magistratura",
      language: "Til kursi",
      program: "1+2 Dasturi"
    },
    location: {
      title: "Joylashuv",
      placeholder: "Shaharni tanlang",
      all: "Barcha shaharlar"
    },
    ranking: {
      title: "Universitet reytingi",
      placeholder: "Reyting oralig'ini tanlang",
      all: "Barcha reytinglar",
      top5: "Top 5",
      top10: "6-10",
      top20: "11-20",
      other: "21+"
    },
    grants: {
      title: "Grant imkoniyatlari",
      placeholder: "Grant holatini tanlang",
      all: "Barchasi",
      available: "Mavjud",
      notAvailable: "Mavjud emas"
    }
  },
  card: {
    viewDetails: "Batafsil ma'lumot",
    founded: "Tashkil topgan",
    students: "Talabalar",
    featured: "Tavsiya etilgan",
    grantsAvailable: "Grantlar mavjud",
    rank: "Reyting #{rank}"
  },
  list: {
    title: "Universitetlar",
    featuredUniversities: "Tavsiya etilgan universitetlar",
    showing: "Ko'rsatilmoqda {current} / {total} universitet",
    noResults: "Sizning filterlaringizga mos universitetlar topilmadi",
    pagination: {
      prev: "Oldingi",
      next: "Keyingi"
    }
  },
  infoCard: {
    title: "Xitoyda ta'lim",
    description: "Xitoy xalqaro talabalar uchun eng mashhur ta'lim yo'nalishlaridan biriga aylandi va arzon narxlarda jahon darajasidagi ta'lim taklif etmoqda.",
    stats: {
      universities: {
        value: "2,900+ Universitet",
        description: "Barcha viloyatlar bo'ylab"
      },
      programs: {
        value: "500,000+ Dasturlar",
        description: "Bakalavr darajasidan doktoranturagacha"
      },
      students: {
        value: "500,000+ Xalqaro talabalar",
        description: "200+ mamlakatdan"
      },
      scholarships: {
        value: "30,000+ Stipendiyalar",
        description: "Davlat va universitet tomonidan moliyalashtirilgan"
      }
    }
  },
  mobileFilters: {
    title: "Filterlar",
    close: "Yopish",
    open: "Filter"
  }
};
const universityPageTranslations = {
  en: universityPageEn,
  ru: universityPageRu,
  uz: universityPageUz
};
function getUniversityPageTranslations(lang) {
  return universityPageTranslations[lang] || universityPageUz;
}
function UniversityDetailPage($$payload, $$props) {
  push();
  let university = $$props["university"];
  let lang = fallback($$props["lang"], "en");
  console.log("University object in main component:", university);
  console.log("Gallery categories:", university?.galleryCategories);
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative"><div class="container mx-auto py-8 px-4 md:px-6 relative z-10"><div class="flex items-center justify-center h-64"><div class="animate-pulse flex flex-col items-center gap-4"><div class="h-12 w-12 rounded-full bg-blue-200"></div> <div class="h-4 w-48 bg-blue-200 rounded"></div> <div class="h-3 w-32 bg-blue-100 rounded"></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { university, lang });
  pop();
}
const $$Astro$2 = createAstro();
const $$UniversityDetailPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UniversityDetailPage;
  const { university } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "UniversityDetailPageComponent", UniversityDetailPage, { "university": university, "lang": lang, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityDetailPage/UniversityDetailPage.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityDetailPage/UniversityDetailPage.astro", void 0);
const $$Astro$1 = createAstro();
const $$UniversityPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UniversityPage;
  const lang = getLangFromUrl(Astro2.url);
  const universities = await getAllUniversities(lang);
  const cities = await getAllCities(lang) || [];
  return renderTemplate`${renderComponent($$result, "UniversityPageComponent", null, { "universities": universities, "cities": cities, "lang": lang, "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityPage/UniversityPage.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityPage/UniversityPage.astro", void 0);
function UniversityCardSkeleton($$payload, $$props) {
  let className = fallback($$props["className"], "");
  Card($$payload, {
    class: `overflow-hidden rounded-xl max-w-[300px] w-full shadow-sm ${className}`,
    children: ($$payload2) => {
      const each_array = ensure_array_like(Array(4));
      $$payload2.out += `<div class="relative w-full aspect-[16/9] overflow-hidden">`;
      Skeleton($$payload2, { class: "w-full h-full" });
      $$payload2.out += `<!----></div> <div class="p-4 sm:p-5 flex flex-col relative min-h-[280px]"><div class="absolute -top-8 left-4 sm:left-5 bg-white/90 p-1.5 rounded-full shadow-lg">`;
      Skeleton($$payload2, {
        class: "w-12 h-12 sm:w-14 sm:h-14 rounded-full"
      });
      $$payload2.out += `<!----></div> <div class="pl-14 sm:pl-16 pt-3 h-[50px] sm:h-[60px]">`;
      Skeleton($$payload2, { class: "h-4 sm:h-5 w-3/4 mb-2" });
      $$payload2.out += `<!----> `;
      Skeleton($$payload2, { class: "h-4 sm:h-5 w-1/2" });
      $$payload2.out += `<!----></div> <div class="h-px bg-gray-200 my-2 sm:my-3"></div> <div class="h-[28px] sm:h-[32px] mb-2"><div class="flex items-center gap-2">`;
      Skeleton($$payload2, { class: "w-5 h-5 sm:w-6 sm:h-6 rounded-full" });
      $$payload2.out += `<!----> `;
      Skeleton($$payload2, { class: "h-4 w-24" });
      $$payload2.out += `<!----></div></div> <div class="h-[80px] sm:h-[90px] mb-3"><div class="flex items-center gap-2 mb-2">`;
      Skeleton($$payload2, { class: "w-5 h-5 sm:w-6 sm:h-6 rounded-full" });
      $$payload2.out += `<!----> `;
      Skeleton($$payload2, { class: "h-4 w-20" });
      $$payload2.out += `<!----></div> <div class="flex flex-wrap gap-1.5"><!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        Skeleton($$payload2, { class: "h-5 sm:h-6 w-16 sm:w-20 rounded-full" });
      }
      $$payload2.out += `<!--]--></div></div> `;
      Skeleton($$payload2, { class: "w-full h-8 sm:h-10 rounded-xl" });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { className });
}
function BackgroundDecoration($$payload) {
  $$payload.out += `<div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl"></div> <div class="absolute top-1/3 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div> <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md opacity-10"><svg viewBox="0 0 100 100" class="w-full h-auto"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="0.5" fill="none" class="text-red-900"></circle><circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="0.5" fill="none" class="text-red-900"></circle><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="0.5" fill="none" class="text-red-900"></circle></svg></div></div>`;
}
function UniversityFeature($$payload, $$props) {
  push();
  let lang = $$props["lang"];
  let t = $$props["t"];
  let universities = fallback($$props["universities"], () => [], true);
  let visibleUniversities = universities || [];
  $$payload.out += `<div class="w-full bg-[#F5F9FB] py-12 relative">`;
  BackgroundDecoration($$payload);
  $$payload.out += `<!----> <div class="w-full max-w-[1920px] mx-auto px-4 relative z-10">`;
  SectionHeader($$payload, {
    title: t.leadingUniversities,
    subtitle: t.discoverText
  });
  $$payload.out += `<!----> <div class="flex justify-end mb-4"><div${attr_class(`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${"translate-x-2"}`)}>`;
  Hand($$payload, { class: "w-5 h-5 text-primary" });
  $$payload.out += `<!----> <span class="text-sm font-semibold">${escape_html(t.swipeToSlide)}</span></div></div> <div class="relative mb-8 pb-6"><div class="overflow-hidden cursor-grab active:cursor-grabbing"><div class="flex">`;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Array(4));
    $$payload.out += `<!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      each_array[index];
      $$payload.out += `<div class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4">`;
      UniversityCardSkeleton($$payload, {});
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div> `;
  if (visibleUniversities.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute -bottom-2 left-4 flex items-center gap-2 z-10"><button class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110">`;
    Chevron_right($$payload, { class: "w-5 h-5 rotate-180" });
    $$payload.out += `<!----></button> <button class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110">`;
    Chevron_right($$payload, { class: "w-5 h-5" });
    $$payload.out += `<!----></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-12">`;
  ButtonView($$payload, {
    href: `/${lang}/universities`,
    text: t.viewAll,
    variant: "desktop",
    showOnMobile: false
  });
  $$payload.out += `<!----> `;
  ButtonView($$payload, {
    href: `/${lang}/universities`,
    text: t.viewAll,
    variant: "mobile",
    showOnDesktop: false
  });
  $$payload.out += `<!----></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { lang, t, universities });
  pop();
}
const universityFeatureEn = {
  leadingUniversities: "Leading Universities",
  discoverText: "Discover top universities and find your perfect educational path",
  students: "Students",
  faculties: "Faculties",
  moreInfo: "More Information",
  swipeToSlide: "Swipe to see more",
  viewAll: "View All Universities",
  error: "Failed to load university data"
};
const universityFeatureRu = {
  leadingUniversities: "Ведущие университеты",
  discoverText: "Откройте для себя ведущие университеты и найдите свой идеальный образовательный путь",
  students: "Студенты",
  faculties: "Факультеты",
  moreInfo: "Подробнее",
  swipeToSlide: "Проведите для просмотра",
  viewAll: "Показать все университеты",
  error: "Не удалось загрузить данные"
};
const universityFeatureUz = {
  leadingUniversities: "Yetakchi universitetlar",
  discoverText: "Eng yaxshi universitetlarni kashf eting va o'zingizga mos ta'lim yo'lingizni toping",
  students: "Talabalar",
  faculties: "Fakultetlar",
  moreInfo: "Batafsil ma'lumot",
  swipeToSlide: "Ko'proq ko'rish uchun suring",
  viewAll: "Barcha universitetlarni ko'rish",
  error: "Ma'lumotlarni yuklashda xatolik yuz berdi"
};
const universityFeatureTranslations = {
  en: universityFeatureEn,
  ru: universityFeatureRu,
  uz: universityFeatureUz
};
const $$Astro = createAstro();
const $$UniversityFeature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UniversityFeature;
  const { lang = "uz" } = Astro2.props;
  const universityFeatureT = universityFeatureTranslations[lang];
  let universities = [];
  try {
    const DEV_MODE2 = process.env.NODE_ENV !== "production";
    if (DEV_MODE2) console.log("Fetching universities in UniversityFeature.astro");
    universities = await getFeaturedUniversities(lang, 8);
    if (DEV_MODE2) console.log(`Found ${universities.length} universities`);
  } catch (err) {
    console.error("Error fetching universities:", err);
  }
  return renderTemplate`${renderComponent($$result, "UniversityCard", UniversityFeature, { "lang": lang, "universities": universities, "t": universityFeatureT, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityFeature/UniversityFeature.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/university/UniversityFeature/UniversityFeature.astro", void 0);
export {
  $$UniversityDetailPage as $,
  _astro_content as _,
  getUniversityDetailTranslations as a,
  getAllFAQ as b,
  getCollection as c,
  $$UniversityPage as d,
  getAllTestimonials as e,
  $$UniversityFeature as f,
  getUniversityPageTranslations as g
};
