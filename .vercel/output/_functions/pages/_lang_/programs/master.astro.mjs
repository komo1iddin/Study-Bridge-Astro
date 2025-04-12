import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../../chunks/vendor_fPK89n42.mjs";
import { q } from "../../../chunks/vendor_fPK89n42.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../../chunks/Layout_BFuhr0c3.mjs";
import { l as languages, i as getTranslation, j as getProgramsTranslations } from "../../../chunks/ui_BAsHSPwd.mjs";
import { c as getCollection } from "../../../chunks/university-features_DGFRsfZW.mjs";
import { $ as $$Breadcrumbs } from "../../../chunks/Breadcrumbs_CDkISIuC.mjs";
import { $ as $$ContactModal } from "../../../chunks/ContactModal_COoptbVG.mjs";
/* empty css                                       */
import { b as $$ArrowRight, j as $$GraduationCap, E as $$Clock, g as $$CheckCircle } from "../../../chunks/icons_gbmVFOaE.mjs";
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
  const programs = (await getCollection("programs")).filter((p) => p.data.type === "master").map((program) => ({
    id: program.id,
    title: program.data.title[lang],
    description: program.data.description[lang],
    duration: program.data.duration,
    features: program.data.features[lang]
  }));
  const breadcrumbItems = [
    { label: t("common.home"), href: `/${lang}` },
    { label: t("common.programs"), href: `/${lang}/programs` },
    { label: programsT.categories.master.title, href: `/${lang}/programs/master` }
  ];
  const meta = {
    title: `${programsT.categories.master.title} | Study in China`,
    description: programsT.categories.master.description,
    keywords: ["master", "graduate", "programs", "education", "study in China"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "data-astro-cid-xhbhzo7t": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-primary-50/50 to-white" data-astro-cid-xhbhzo7t> <!-- Hero Section --> <section class="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 overflow-hidden" data-astro-cid-xhbhzo7t> <div class="absolute inset-0 overflow-hidden" data-astro-cid-xhbhzo7t> <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full" data-astro-cid-xhbhzo7t></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full" data-astro-cid-xhbhzo7t></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-astro-cid-xhbhzo7t> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-8 text-primary-100", "data-astro-cid-xhbhzo7t": true })} <div class="max-w-3xl" data-astro-cid-xhbhzo7t> <h1 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-xhbhzo7t>${programsT.categories.master.title}</h1> <p class="text-xl text-primary-100 mb-8" data-astro-cid-xhbhzo7t> ${programsT.categories.master.description} </p> <div class="flex flex-wrap gap-4" data-astro-cid-xhbhzo7t> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300" data-astro-cid-xhbhzo7t> ${t("common.freeConsultation")} ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-xhbhzo7t": true })} </button> </div> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-xhbhzo7t> <!-- Programs List --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-xhbhzo7t> ${programs.map((program) => renderTemplate`<div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-astro-cid-xhbhzo7t> <div class="p-6" data-astro-cid-xhbhzo7t> <div class="flex items-center gap-4 mb-4" data-astro-cid-xhbhzo7t> <div class="p-3 bg-primary-100 rounded-lg" data-astro-cid-xhbhzo7t> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-xhbhzo7t": true })} </div> <div data-astro-cid-xhbhzo7t> <h3 class="text-lg font-bold text-gray-900" data-astro-cid-xhbhzo7t>${program.title}</h3> <p class="text-sm text-gray-600" data-astro-cid-xhbhzo7t>${program.duration}</p> </div> </div> <p class="text-gray-600 mb-4" data-astro-cid-xhbhzo7t>${program.description}</p> <div class="flex items-center gap-2 text-sm text-gray-600 mb-4" data-astro-cid-xhbhzo7t> ${renderComponent($$result2, "Clock", $$Clock, { "class": "w-4 h-4 text-primary-500", "data-astro-cid-xhbhzo7t": true })} <span data-astro-cid-xhbhzo7t>${programsT.labels.duration}: ${program.duration}</span> </div> <div class="space-y-2 mb-6" data-astro-cid-xhbhzo7t> ${program.features.slice(0, 3).map((feature) => renderTemplate`<div class="flex items-start gap-2" data-astro-cid-xhbhzo7t> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "w-4 h-4 text-primary-600 mt-1", "data-astro-cid-xhbhzo7t": true })} <span class="text-sm text-gray-700" data-astro-cid-xhbhzo7t>${feature}</span> </div>`)} </div> <a${addAttribute(`/${lang}/programs/master/${program.id}`, "href")} class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium" data-astro-cid-xhbhzo7t> ${programsT.labels.learnMore} ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-1 h-4 w-4", "data-astro-cid-xhbhzo7t": true })} </a> </div> </div>`)} </div> </div> </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-xhbhzo7t": true })} ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/master/index.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/programs/master/index.astro";
const $$url = "/[lang]/programs/master";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Index, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
