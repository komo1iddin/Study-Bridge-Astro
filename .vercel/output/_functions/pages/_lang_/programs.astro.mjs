import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../chunks/vendor_fPK89n42.mjs";
import { q } from "../../chunks/vendor_fPK89n42.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_BFuhr0c3.mjs";
import { l as languages, i as getTranslation, $ as $$SectionHeader } from "../../chunks/ui_BAsHSPwd.mjs";
import { c as getCollection } from "../../chunks/university-features_DGFRsfZW.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_CDkISIuC.mjs";
import { $ as $$ContactModal } from "../../chunks/ContactModal_COoptbVG.mjs";
import { $ as $$Contact } from "../../chunks/Contact_DqyF8bW5.mjs";
import { $ as $$FAQ } from "../../chunks/FAQ_rLLlU600.mjs";
/* empty css                                    */
import { F as $$BookOpen, j as $$GraduationCap, b as $$ArrowRight, E as $$Clock, g as $$CheckCircle } from "../../chunks/icons_gbmVFOaE.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t = (key) => getTranslation(lang, key);
  const programsEntries = await getCollection("programs");
  const programsByType = {
    language: programsEntries.filter((p) => p.data.type === "language"),
    bachelor: programsEntries.filter((p) => p.data.type === "bachelor"),
    master: programsEntries.filter((p) => p.data.type === "master")
  };
  const breadcrumbItems = [
    { label: t("common.home"), href: `/${lang}` },
    { label: t("common.programs"), href: `/${lang}/programs` }
  ];
  const programTypes = [
    {
      id: "language",
      title: "Til kurslari",
      description: "HSK darajasini oshirish va Xitoy tilini o'rganish",
      icon: $$BookOpen,
      duration: "6-12 oy",
      features: [
        "Malakali o'qituvchilar",
        "Zamonaviy o'quv materiallari",
        "Amaliy mashg'ulotlar",
        "HSK imtihoniga tayyorgarlik"
      ]
    },
    {
      id: "bachelor",
      title: "Bakalavr",
      description: "To'liq 4 yillik bakalavr dasturi",
      icon: $$GraduationCap,
      duration: "4 yil",
      features: [
        "Top universitetlarda ta'lim",
        "Grant imkoniyatlari",
        "Amaliyot dasturlari",
        "Xalqaro diplom"
      ]
    },
    {
      id: "master",
      title: "Magistratura",
      description: "Magistratura va doktorantura dasturlari",
      icon: $$GraduationCap,
      duration: "2-3 yil",
      features: [
        "Ilmiy tadqiqot imkoniyatlari",
        "Grant va stipendiyalar",
        "Laboratoriya bazasi",
        "Xalqaro aloqalar"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ta'lim dasturlari | Study in China", "data-astro-cid-22xrnnmk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-primary-50/50 to-white" data-astro-cid-22xrnnmk> <!-- Hero Section --> <section class="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 overflow-hidden" data-astro-cid-22xrnnmk> <div class="absolute inset-0 overflow-hidden" data-astro-cid-22xrnnmk> <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full" data-astro-cid-22xrnnmk></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full" data-astro-cid-22xrnnmk></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-8 text-primary-100", "data-astro-cid-22xrnnmk": true })} <div class="max-w-3xl" data-astro-cid-22xrnnmk> <h1 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-22xrnnmk>Xitoyda ta'lim dasturlari</h1> <p class="text-xl text-primary-100 mb-8" data-astro-cid-22xrnnmk>
Xitoyning eng yaxshi universitetlarida sifatli ta'lim olish imkoniyati. Til kurslari, bakalavr va magistratura dasturlari.
</p> <div class="flex flex-wrap gap-4" data-astro-cid-22xrnnmk> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300" data-astro-cid-22xrnnmk>
Bepul konsultatsiya
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-22xrnnmk": true })} </button> </div> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-22xrnnmk> <!-- Program Types --> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Ta'lim dasturlari turlari", "subtitle": "Sizning maqsad va imkoniyatlaringizga mos dasturni tanlang", "data-astro-cid-22xrnnmk": true })} <div class="grid md:grid-cols-3 gap-8 mb-16" data-astro-cid-22xrnnmk> ${programTypes.map((type) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300" data-astro-cid-22xrnnmk> <div class="flex items-center gap-4 mb-6" data-astro-cid-22xrnnmk> <div class="p-3 bg-primary-100 rounded-lg" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "type.icon", type.icon, { "class": "w-8 h-8 text-primary-600", "data-astro-cid-22xrnnmk": true })} </div> <div data-astro-cid-22xrnnmk> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-22xrnnmk>${type.title}</h3> <p class="text-gray-600" data-astro-cid-22xrnnmk>${type.description}</p> </div> </div> <div class="flex items-center gap-2 text-sm text-gray-600 mb-4" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "Clock", $$Clock, { "class": "w-5 h-5 text-primary-500", "data-astro-cid-22xrnnmk": true })} <span data-astro-cid-22xrnnmk>Davomiyligi: ${type.duration}</span> </div> <div class="space-y-3 mb-6" data-astro-cid-22xrnnmk> ${type.features.map((feature) => renderTemplate`<div class="flex items-start gap-3" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-primary-600 mt-0.5", "data-astro-cid-22xrnnmk": true })} <span class="text-gray-700" data-astro-cid-22xrnnmk>${feature}</span> </div>`)} </div> <a${addAttribute(`/${lang}/programs/${type.id}`, "href")} class="inline-flex items-center justify-center w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors" data-astro-cid-22xrnnmk>
Batafsil ma'lumot
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-22xrnnmk": true })} </a> </div>`)} </div> <!-- Programs List --> ${Object.entries(programsByType).map(([type, programs]) => renderTemplate`<div class="mb-16" data-astro-cid-22xrnnmk> <h2 class="text-2xl font-bold text-gray-900 mb-8" data-astro-cid-22xrnnmk> ${type === "language" ? "Til kurslari" : type === "bachelor" ? "Bakalavr dasturlari" : "Magistratura dasturlari"} </h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-22xrnnmk> ${programs.map((program) => renderTemplate`<div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-astro-cid-22xrnnmk> <div class="p-6" data-astro-cid-22xrnnmk> <div class="flex items-center gap-4 mb-4" data-astro-cid-22xrnnmk> <div class="p-3 bg-primary-100 rounded-lg" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-22xrnnmk": true })} </div> <div data-astro-cid-22xrnnmk> <h3 class="text-lg font-bold text-gray-900" data-astro-cid-22xrnnmk>${program.data.title[lang]}</h3> <p class="text-sm text-gray-600" data-astro-cid-22xrnnmk>${program.data.duration}</p> </div> </div> <p class="text-gray-600 mb-4" data-astro-cid-22xrnnmk>${program.data.description[lang]}</p> <div class="space-y-2 mb-6" data-astro-cid-22xrnnmk> ${program.data.features[lang].slice(0, 3).map((feature) => renderTemplate`<div class="flex items-start gap-2" data-astro-cid-22xrnnmk> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-4 h-4 text-primary-600 mt-1", "data-astro-cid-22xrnnmk": true })} <span class="text-sm text-gray-700" data-astro-cid-22xrnnmk>${feature}</span> </div>`)} </div> <a${addAttribute(`/${lang}/programs/${type}/${program.id}`, "href")} class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium" data-astro-cid-22xrnnmk>
Batafsil
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-1 h-4 w-4", "data-astro-cid-22xrnnmk": true })} </a> </div> </div>`)} </div> </div>`)} <!-- FAQ Section --> ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-22xrnnmk": true })} <!-- Contact Section --> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-22xrnnmk": true })} </div> </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-22xrnnmk": true })} ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/index.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/index.astro";
const $$url = "/[lang]/programs";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Index, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
