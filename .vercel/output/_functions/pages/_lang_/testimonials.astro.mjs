import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../chunks/vendor_BAzprikM.mjs";
import { t } from "../../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_DMdNbTih.mjs";
import { l as languages, m as getTranslations } from "../../chunks/ui_DFpIJiEG.mjs";
import { $ as $$Reviews } from "../../chunks/Reviews_wAgcKa-0.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t2 = getTranslations.testimonials(lang);
  const meta = {
    title: `${t2.page.title} | Study in China`,
    description: t2.page.subtitle,
    keywords: ["testimonials", "reviews", "student experiences", "study in China"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <!-- Hero Section --> <div class="relative bg-primary-700 text-white py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-4xl font-bold mb-4">${t2.page.title}</h1> <p class="text-lg text-primary-100 max-w-3xl mx-auto"> ${t2.page.subtitle} </p> </div> <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"> <p class="text-3xl font-bold">${t2.stats.satisfiedClients.value}</p> <p class="mt-2">${t2.stats.satisfiedClients.label}</p> </div> <div class="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"> <p class="text-3xl font-bold">${t2.stats.successfulEnrollments.value}</p> <p class="mt-2">${t2.stats.successfulEnrollments.label}</p> </div> <div class="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"> <p class="text-3xl font-bold">${t2.stats.partnerUniversities.value}</p> <p class="mt-2">${t2.stats.partnerUniversities.label}</p> </div> </div> </div> </div> <!-- Testimonials Grid --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> ${renderComponent($$result2, "Reviews", $$Reviews, {})} </div> <!-- CTA Section --> <div class="bg-gray-50 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-8">${t2.page.cta.title}</h2> <a${addAttribute(`/${lang}/contacts`, "href")} class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"> ${t2.page.cta.button} </a> </div> </div> </div> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/testimonials.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/testimonials.astro";
const $$url = "/[lang]/testimonials";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Testimonials, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
