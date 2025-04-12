import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../../chunks/vendor_BkHgkSTi.mjs";
import { q } from "../../../chunks/vendor_BkHgkSTi.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../../chunks/Layout_CkcAm6nx.mjs";
import { l as languages, i as getTranslation, j as getProgramsTranslations } from "../../../chunks/ui_CkL6hZGM.mjs";
import { c as getCollection } from "../../../chunks/university-features_BIdx7f0O.mjs";
import { $ as $$Breadcrumbs } from "../../../chunks/Breadcrumbs_D2yKI7Sd.mjs";
import { $ as $$ContactModal } from "../../../chunks/ContactModal_CgMr4Khz.mjs";
/* empty css                                       */
import { b as $$ArrowRight, j as $$GraduationCap, E as $$Clock, g as $$CheckCircle } from "../../../chunks/icons_DMAatXJH.mjs";
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
  const programsT = getProgramsTranslations(lang);
  const programs = (await getCollection("programs")).filter((p) => p.data.type === "bachelor").map((program) => ({
    ...program.data,
    id: program.id,
    title: program.data.title[lang],
    description: program.data.description[lang],
    features: program.data.features[lang]
  }));
  const breadcrumbItems = [
    { label: t("common.home"), href: `/${lang}` },
    { label: t("common.programs"), href: `/${lang}/programs` },
    { label: programsT.categories.bachelor.title, href: `/${lang}/programs/bachelor` }
  ];
  const meta = {
    title: `${programsT.categories.bachelor.title} | Study in China`,
    description: programsT.categories.bachelor.description,
    keywords: ["bachelor", "undergraduate", "programs", "education", "study in China"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "data-astro-cid-uq7rugrh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-primary-50/50 to-white" data-astro-cid-uq7rugrh> <!-- Hero Section --> <section class="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 overflow-hidden" data-astro-cid-uq7rugrh> <div class="absolute inset-0 overflow-hidden" data-astro-cid-uq7rugrh> <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full" data-astro-cid-uq7rugrh></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full" data-astro-cid-uq7rugrh></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-astro-cid-uq7rugrh> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-8 text-primary-100", "data-astro-cid-uq7rugrh": true })} <div class="max-w-3xl" data-astro-cid-uq7rugrh> <h1 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-uq7rugrh>${programsT.categories.bachelor.title}</h1> <p class="text-xl text-primary-100 mb-8" data-astro-cid-uq7rugrh> ${programsT.categories.bachelor.description} </p> <div class="flex flex-wrap gap-4" data-astro-cid-uq7rugrh> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300" data-astro-cid-uq7rugrh> ${t("common.freeConsultation")} ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-uq7rugrh": true })} </button> </div> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-uq7rugrh> <!-- Programs List --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-uq7rugrh> ${programs.map((program) => renderTemplate`<div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-astro-cid-uq7rugrh> <div class="p-6" data-astro-cid-uq7rugrh> <div class="flex items-center gap-4 mb-4" data-astro-cid-uq7rugrh> <div class="p-3 bg-primary-100 rounded-lg" data-astro-cid-uq7rugrh> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-uq7rugrh": true })} </div> <div data-astro-cid-uq7rugrh> <h3 class="text-lg font-bold text-gray-900" data-astro-cid-uq7rugrh>${program.title}</h3> <p class="text-sm text-gray-600" data-astro-cid-uq7rugrh>${program.duration}</p> </div> </div> <p class="text-gray-600 mb-4" data-astro-cid-uq7rugrh>${program.description}</p> <div class="flex items-center gap-2 text-sm text-gray-600 mb-4" data-astro-cid-uq7rugrh> ${renderComponent($$result2, "Clock", $$Clock, { "class": "w-4 h-4 text-primary-500", "data-astro-cid-uq7rugrh": true })} <span data-astro-cid-uq7rugrh>${programsT.labels.duration}: ${program.duration}</span> </div> <div class="space-y-2 mb-6" data-astro-cid-uq7rugrh> ${program.features.slice(0, 3).map((feature) => renderTemplate`<div class="flex items-start gap-2" data-astro-cid-uq7rugrh> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-4 h-4 text-primary-600 mt-1", "data-astro-cid-uq7rugrh": true })} <span class="text-sm text-gray-700" data-astro-cid-uq7rugrh>${feature}</span> </div>`)} </div> <a${addAttribute(`/${lang}/programs/bachelor/${program.id}`, "href")} class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium" data-astro-cid-uq7rugrh> ${programsT.labels.learnMore} ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-1 h-4 w-4", "data-astro-cid-uq7rugrh": true })} </a> </div> </div>`)} </div> </div> </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-uq7rugrh": true })} ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/bachelor/index.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/bachelor/index.astro";
const $$url = "/[lang]/programs/bachelor";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Index, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
