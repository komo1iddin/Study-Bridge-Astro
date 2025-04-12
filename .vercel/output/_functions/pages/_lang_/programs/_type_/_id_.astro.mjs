import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../../../chunks/vendor_BAzprikM.mjs";
import { t } from "../../../../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../../../chunks/Layout_DMdNbTih.mjs";
import { l as languages, i as getTranslation } from "../../../../chunks/ui_DFpIJiEG.mjs";
import { c as getCollection } from "../../../../chunks/university-features_sJEkhT2g.mjs";
import { $ as $$Breadcrumbs } from "../../../../chunks/Breadcrumbs_B0JlxQ9v.mjs";
import { $ as $$ContactModal } from "../../../../chunks/ContactModal_DJdGLMdF.mjs";
/* empty css                                         */
import { E as $$Clock, i as $$Users, j as $$GraduationCap, F as $$BookOpen, g as $$CheckCircle, z as $$Calendar, I as $$Star, b as $$ArrowRight, a as $$Phone, q as $$MessageSquare } from "../../../../chunks/icons_GFS7fkbb.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { lang, type, id } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t2 = (key) => getTranslation(lang, key);
  let programData;
  let slug = id || "";
  try {
    console.log(`Fetching program data: type=${type}, id=${id}`);
    const allPrograms = await getCollection("programs");
    console.log(`Found ${allPrograms.length} total programs`);
    const matchedProgram = allPrograms.find((program) => {
      const cleanId = program.id.replace(/\.(yaml|md)$/, "");
      console.log(`Checking program: ${cleanId} vs ${id}, type: ${program.data.type} vs ${type}`);
      return cleanId === id && program.data.type === type;
    });
    if (!matchedProgram) {
      console.error(`No matching program found for type=${type}, id=${id}`);
      console.log("Available programs:", allPrograms.map((p) => ({ id: p.id, type: p.data.type })));
      return Astro2.redirect(`/${lang}/404`);
    }
    programData = matchedProgram.data;
    console.log(`Successfully found program: ${matchedProgram.id}`);
  } catch (error) {
    console.error("Error fetching program data:", error);
    return Astro2.redirect(`/${lang}/404`);
  }
  const getLocalizedText = (obj, lang2, fallbackLang = "uz") => {
    if (!obj) return "";
    return obj[lang2] || obj[fallbackLang] || "";
  };
  const title = getLocalizedText(programData.title, lang);
  const description = getLocalizedText(programData.description, lang);
  const breadcrumbItems = [
    { label: t2("nav.home"), href: `/${lang}` },
    { label: t2("nav.programs"), href: `/${lang}/programs` },
    { label: title || "Program", href: `/${lang}/programs/${type}/${slug}` }
  ];
  const programDetails = [
    {
      icon: $$Clock,
      label: "Davomiyligi",
      value: programData.duration
    },
    {
      icon: $$Users,
      label: "Guruh hajmi",
      value: "15-20 talaba"
    },
    {
      icon: $$GraduationCap,
      label: "O'qitish tili",
      value: programData.language
    },
    {
      icon: $$BookOpen,
      label: "Darslar formati",
      value: "Offline + Online"
    }
  ];
  programData.features ? getLocalizedText(programData.features, lang) : [];
  const defaultRequirements = [
    "O'rta ma'lumot haqidagi hujjat",
    "Xorijiy pasport",
    "Sog'liq haqida ma'lumotnoma",
    "4 dona rasm 3x4",
    "Ingliz yoki xitoy tilini bilish"
  ];
  const requirements = programData.requirements ? getLocalizedText(programData.requirements, lang) : defaultRequirements;
  const documents = [
    "Pasport nusxasi",
    "Diplom va ilovasi",
    "Tarjimai hol",
    "Motivatsion xat",
    "Til sertifikati (agar mavjud bo'lsa)"
  ];
  const stages = [
    {
      title: "Ariza topshirish",
      description: "Online ariza to'ldirish va hujjatlarni yuborish",
      deadline: "2024-yil 30-mart"
    },
    {
      title: "Hujjatlarni ko'rib chiqish",
      description: "Universitetda hujjatlarni ko'rib chiqish (2-3 hafta)",
      deadline: "2024-yil 15-aprel"
    },
    {
      title: "Qabul xati",
      description: "Universitetdan qabul xatini olish",
      deadline: "2024-yil 30-aprel"
    },
    {
      title: "Viza olish",
      description: "Xitoy vizasini rasmiylashtirish (2-3 hafta)",
      deadline: "2024-yil 15-may"
    }
  ];
  const studyProcess = [
    {
      title: "Nazariy darslar",
      description: "Professional o'qituvchilar tomonidan o'tiladigan nazariy mashg'ulotlar",
      hours: "Haftasiga 20 soat"
    },
    {
      title: "Amaliy mashg'ulotlar",
      description: "Laboratoriya va amaliy mashg'ulotlar",
      hours: "Haftasiga 10 soat"
    },
    {
      title: "Mustaqil ta'lim",
      description: "Individual loyihalar va tadqiqotlar",
      hours: "Haftasiga 15 soat"
    }
  ];
  const careerOpportunities = [
    {
      position: "Xalqaro kompaniyalarda mutaxassis",
      salary: "$2,000 - $4,000",
      companies: ["Huawei", "Alibaba", "Tencent"]
    },
    {
      position: "O'qituvchi va tarjimon",
      salary: "$1,500 - $3,000",
      companies: ["Ta'lim markazlari", "Universitetlar"]
    },
    {
      position: "Tadbirkor",
      salary: "Cheklanmagan",
      companies: ["Start-uplar", "Xalqaro savdo"]
    }
  ];
  const testimonials = [
    {
      name: "Aziza Karimova",
      program: "Bakalavr - 2022",
      quote: "Bu dastur menga nafaqat bilim, balki ajoyib karyera imkoniyatlarini ham berdi.",
      image: "/images/testimonials/placeholder.jpeg"
    },
    {
      name: "Bobur Aliyev",
      program: "Magistratura - 2023",
      quote: "Professional o'qituvchilar va zamonaviy o'quv dasturi tufayli yuqori natijalarga erishdim.",
      image: "/images/testimonials/placeholder.jpeg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": {
    title: title || "Program",
    description: description || ""
  }, "data-astro-cid-ospmkonm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-primary-50/50 to-white" data-astro-cid-ospmkonm> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-8", "data-astro-cid-ospmkonm": true })} <div class="grid lg:grid-cols-3 gap-8" data-astro-cid-ospmkonm> <!-- Main Content --> <div class="lg:col-span-2 space-y-8" data-astro-cid-ospmkonm> <!-- Program Header --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <div class="flex items-center gap-4 mb-6" data-astro-cid-ospmkonm> <div${addAttribute(`p-3 rounded-lg ${programData.bgColor || "bg-primary-100"}`, "class")} data-astro-cid-ospmkonm> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-8 h-8 text-primary-600", "data-astro-cid-ospmkonm": true })} </div> <div data-astro-cid-ospmkonm> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-ospmkonm>${title || "Program"}</h1> <p class="text-gray-600" data-astro-cid-ospmkonm>${description || ""}</p> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-astro-cid-ospmkonm> ${programDetails.map((detail) => renderTemplate`<div class="bg-gray-50 p-4 rounded-lg" data-astro-cid-ospmkonm> <div class="flex items-center gap-2 text-gray-600 mb-2" data-astro-cid-ospmkonm> ${renderComponent($$result2, "detail.icon", detail.icon, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <span class="text-sm" data-astro-cid-ospmkonm>${detail.label}</span> </div> <div class="font-semibold text-gray-900" data-astro-cid-ospmkonm>${detail.value}</div> </div>`)} </div> </div> <!-- Study Process --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>O'quv jarayoni</h2> <div class="space-y-6" data-astro-cid-ospmkonm> ${studyProcess.map((process, index) => renderTemplate`<div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center" data-astro-cid-ospmkonm> <span class="text-primary-600 font-bold" data-astro-cid-ospmkonm>${index + 1}</span> </div> <div data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900" data-astro-cid-ospmkonm>${process.title}</h3> <p class="text-gray-600 mt-1" data-astro-cid-ospmkonm>${process.description}</p> <p class="text-sm text-primary-600 mt-2" data-astro-cid-ospmkonm>${process.hours}</p> </div> </div>`)} </div> </div> <!-- Requirements --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>Qabul talablari</h2> <div class="grid gap-4" data-astro-cid-ospmkonm> ${requirements.map((req) => renderTemplate`<div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-primary-600 mt-0.5", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>${req}</span> </div>`)} </div> </div> <!-- Required Documents --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>Kerakli hujjatlar</h2> <div class="grid gap-4" data-astro-cid-ospmkonm> ${documents.map((doc) => renderTemplate`<div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-primary-600 mt-0.5", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>${doc}</span> </div>`)} </div> </div> <!-- Application Process --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>Qabul jarayoni</h2> <div class="space-y-8" data-astro-cid-ospmkonm> ${stages.map((stage, index) => renderTemplate`<div class="relative flex gap-6" data-astro-cid-ospmkonm> <div class="flex flex-col items-center" data-astro-cid-ospmkonm> <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold" data-astro-cid-ospmkonm> ${index + 1} </div> ${index < stages.length - 1 && renderTemplate`<div class="flex-1 w-px bg-primary-200 my-2" data-astro-cid-ospmkonm></div>`} </div> <div data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900" data-astro-cid-ospmkonm>${stage.title}</h3> <p class="text-gray-600 mt-1" data-astro-cid-ospmkonm>${stage.description}</p> <div class="flex items-center gap-2 mt-2 text-sm text-primary-600" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Calendar", $$Calendar, { "class": "w-4 h-4", "data-astro-cid-ospmkonm": true })} <span data-astro-cid-ospmkonm>Muddat: ${stage.deadline}</span> </div> </div> </div>`)} </div> </div> <!-- Career Opportunities --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>Karyera imkoniyatlari</h2> <div class="grid gap-6" data-astro-cid-ospmkonm> ${careerOpportunities.map((career) => renderTemplate`<div class="p-4 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900 mb-2" data-astro-cid-ospmkonm>${career.position}</h3> <div class="flex items-center gap-2 text-sm text-gray-600 mb-2" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Star", $$Star, { "class": "w-4 h-4 text-yellow-500", "data-astro-cid-ospmkonm": true })} <span data-astro-cid-ospmkonm>O'rtacha oylik maosh: ${career.salary}</span> </div> <div class="flex flex-wrap gap-2" data-astro-cid-ospmkonm> ${career.companies.map((company) => renderTemplate`<span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm" data-astro-cid-ospmkonm> ${company} </span>`)} </div> </div>`)} </div> </div> <!-- Student Testimonials --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h2 class="text-xl font-bold text-gray-900 mb-6" data-astro-cid-ospmkonm>Bitiruvchilar fikrlari</h2> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-ospmkonm> ${testimonials.map((testimonial) => renderTemplate`<div class="p-4 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> <div class="flex items-center gap-4 mb-4" data-astro-cid-ospmkonm> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-12 h-12 rounded-full object-cover" data-astro-cid-ospmkonm> <div data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900" data-astro-cid-ospmkonm>${testimonial.name}</h3> <p class="text-sm text-primary-600" data-astro-cid-ospmkonm>${testimonial.program}</p> </div> </div> <p class="text-gray-600 italic" data-astro-cid-ospmkonm>"${testimonial.quote}"</p> </div>`)} </div> </div> </div> <!-- Sidebar --> <div class="lg:col-span-1" data-astro-cid-ospmkonm> <div class="sticky top-8 space-y-6" data-astro-cid-ospmkonm> <!-- Price Card --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <div class="text-center mb-6" data-astro-cid-ospmkonm> <div class="text-sm text-gray-600 mb-1" data-astro-cid-ospmkonm>O'qish narxi</div> <div class="text-3xl font-bold text-primary-600" data-astro-cid-ospmkonm>$3,000</div> <div class="text-sm text-gray-600" data-astro-cid-ospmkonm>bir semestr uchun</div> </div> <button onclick="window.uiStore.toggleContactModal(true)" class="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 mb-4" data-astro-cid-ospmkonm>
Ariza topshirish
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "w-5 h-5", "data-astro-cid-ospmkonm": true })} </button> <a href="tel:+998901234567" class="w-full border border-primary-600 text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Phone", $$Phone, { "class": "w-5 h-5", "data-astro-cid-ospmkonm": true })}
Qo'ng'iroq qilish
</a> </div> <!-- Important Dates --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900 mb-4" data-astro-cid-ospmkonm>Muhim sanalar</h3> <div class="space-y-4" data-astro-cid-ospmkonm> ${stages.map((stage) => renderTemplate`<div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Calendar", $$Calendar, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <div data-astro-cid-ospmkonm> <p class="text-sm font-medium text-gray-900" data-astro-cid-ospmkonm>${stage.title}</p> <p class="text-xs text-gray-600" data-astro-cid-ospmkonm>${stage.deadline}</p> </div> </div>`)} </div> </div> <!-- Quick Contact --> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900 mb-4" data-astro-cid-ospmkonm>Tez aloqa</h3> <div class="space-y-4" data-astro-cid-ospmkonm> <a href="https://t.me/studybridge" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" data-astro-cid-ospmkonm> ${renderComponent($$result2, "MessageSquare", $$MessageSquare, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>Telegram orqali yozish</span> </a> <a href="tel:+998901234567" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" data-astro-cid-ospmkonm> ${renderComponent($$result2, "Phone", $$Phone, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>+998 90 123 45 67</span> </a> </div> </div> <!-- Program Levels --> ${programData.levels && Array.isArray(programData.levels) && programData.levels.length > 0 && renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900 mb-4" data-astro-cid-ospmkonm>O'qish darajalari</h3> <div class="space-y-2" data-astro-cid-ospmkonm> ${programData.levels.map((level) => renderTemplate`<div class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>${level}</span> </div>`)} </div> </div>`} <!-- Fields of Study --> ${programData.fields && Array.isArray(programData.fields) && programData.fields.length > 0 && renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-ospmkonm> <h3 class="font-semibold text-gray-900 mb-4" data-astro-cid-ospmkonm>Mutaxassisliklar</h3> <div class="space-y-2" data-astro-cid-ospmkonm> ${programData.fields.map((field) => renderTemplate`<div class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg" data-astro-cid-ospmkonm> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-primary-600", "data-astro-cid-ospmkonm": true })} <span class="text-gray-700" data-astro-cid-ospmkonm>${field}</span> </div>`)} </div> </div>`} </div> </div> </div> </div> </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-ospmkonm": true })} ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/[type]/[id].astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/[type]/[id].astro";
const $$url = "/[lang]/programs/[type]/[id]";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$id, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
