import { c as createComponent, a as createAstro, e as renderComponent, n as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from "../../chunks/vendor_BAzprikM.mjs";
import { t } from "../../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_DMdNbTih.mjs";
import { l as languages, i as getTranslation } from "../../chunks/ui_DFpIJiEG.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_B0JlxQ9v.mjs";
import { $ as $$Contact } from "../../chunks/Contact_CezTUkJc.mjs";
import { $ as $$ContactModal } from "../../chunks/ContactModal_DJdGLMdF.mjs";
import { c as getCollection } from "../../chunks/university-features_sJEkhT2g.mjs";
import { y as $$School, o as $$FileText, F as $$BookOpen, c as $$Home, Q as $$DollarSign, h as $$Award, j as $$GraduationCap, m as $$Languages, B as $$Search, I as $$Star, e as $$ChevronDown, E as $$Clock, b as $$ArrowRight } from "../../chunks/icons_GFS7fkbb.mjs";
/* empty css                                  */
const faqCategories = [
  {
    id: "admission",
    icon: $$School,
    translationKey: "faq.categories.admission",
    featured: true
  },
  {
    id: "documents",
    icon: $$FileText,
    translationKey: "faq.categories.documents",
    featured: true
  },
  {
    id: "study",
    icon: $$BookOpen,
    translationKey: "faq.categories.study"
  },
  {
    id: "life",
    icon: $$Home,
    translationKey: "faq.categories.life"
  },
  {
    id: "finance",
    icon: $$DollarSign,
    translationKey: "faq.categories.finance"
  },
  {
    id: "scholarships",
    icon: $$Award,
    translationKey: "faq.categories.scholarships",
    featured: true
  },
  {
    id: "transfer",
    icon: $$GraduationCap,
    translationKey: "faq.categories.transfer"
  },
  {
    id: "language",
    icon: $$Languages,
    translationKey: "faq.categories.language",
    featured: true
  }
];
const $$Astro = createAstro();
const prerender = false;
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t2 = (key) => getTranslation(lang, key);
  const breadcrumbItems = [
    { label: t2("nav.home"), href: `/${lang}` },
    { label: t2("nav.faq"), href: `/${lang}/faq` }
  ];
  const faqItems = await getCollection("faq");
  const popularQuestions = faqItems.filter((item) => item.data.order && item.data.order < 3).sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  const faqByCategory = faqItems.reduce((acc, item) => {
    if (item.data.order && item.data.order < 3) return acc;
    const categoryId = item.data.categoryId || "other";
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(item);
    return acc;
  }, {});
  const guides = faqItems.filter(
    (item) => item.data.categoryId === "admission" || item.data.categoryId === "documents" || item.data.categoryId === "visa"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": { title: t2("faq.meta.title"), description: t2("faq.meta.description") }, "data-astro-cid-n3zwx4bt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-primary-50 to-white" data-astro-cid-n3zwx4bt> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-n3zwx4bt": true })} </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-n3zwx4bt> <!-- Hero Section --> <div class="text-center mb-12" data-aos="fade-up" data-astro-cid-n3zwx4bt> <h1 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-n3zwx4bt> ${t2("faq.title")} </h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-n3zwx4bt> ${t2("faq.subtitle")} </p> </div> <!-- Search Section --> <div class="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100" data-astro-cid-n3zwx4bt> <div class="relative search-container" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Search", $$Search, { "class": "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400", "data-astro-cid-n3zwx4bt": true })} <input type="text" id="faqSearch"${addAttribute(t2("faq.search.placeholder"), "placeholder")} class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all" aria-label="Search FAQs" autocomplete="off" data-astro-cid-n3zwx4bt> <button id="clearSearch" class="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600 hidden" aria-label="Clear search" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-n3zwx4bt></path> </svg> </button> <!-- Search Results Count --> <div id="searchResults" class="text-sm text-gray-500 mt-2 hidden" data-astro-cid-n3zwx4bt> <span id="resultsCount" data-astro-cid-n3zwx4bt>0</span> results found
</div> <!-- Advanced Search Options --> <div class="mt-3 flex flex-wrap gap-2" data-astro-cid-n3zwx4bt> <div class="flex items-center" data-astro-cid-n3zwx4bt> <input type="checkbox" id="searchInAnswers" class="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4" checked data-astro-cid-n3zwx4bt> <label for="searchInAnswers" class="ml-2 text-sm text-gray-600" data-astro-cid-n3zwx4bt> ${t2("faq.search.includeAnswers")} </label> </div> <div class="flex items-center ml-4" data-astro-cid-n3zwx4bt> <input type="checkbox" id="fuzzySearch" class="rounded border-gray-300 text-primary-500 focus:ring-primary-500 h-4 w-4" checked data-astro-cid-n3zwx4bt> <label for="fuzzySearch" class="ml-2 text-sm text-gray-600" data-astro-cid-n3zwx4bt> ${t2("faq.search.fuzzyMatch")} </label> </div> </div> <!-- Search Suggestions --> <div id="searchSuggestions" class="absolute w-full bg-white rounded-lg shadow-lg border border-gray-200 mt-1 z-10 hidden" data-astro-cid-n3zwx4bt> <!-- Suggestions will be populated via JavaScript --> </div> </div> </div> <!-- Popular Questions Section --> <div class="mb-16" data-aos="fade-up" data-aos-delay="200" data-astro-cid-n3zwx4bt> <div class="flex items-center gap-2 mb-6" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Star", $$Star, { "class": "h-6 w-6 text-amber-400", "data-astro-cid-n3zwx4bt": true })} <h2 class="text-2xl font-bold text-gray-900" data-astro-cid-n3zwx4bt> ${t2("faq.popularQuestions")} </h2> </div> <div class="grid gap-4" data-astro-cid-n3zwx4bt> ${popularQuestions.map((item) => renderTemplate`<div class="bg-white rounded-xl shadow-sm border-2 border-primary-100 overflow-hidden transition-all hover:shadow-md" data-astro-cid-n3zwx4bt> <details class="group" data-astro-cid-n3zwx4bt> <summary class="flex items-center justify-between p-6 cursor-pointer bg-primary-50/50" data-astro-cid-n3zwx4bt> <div class="flex items-center gap-4" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Star", $$Star, { "class": "h-5 w-5 text-amber-400", "data-astro-cid-n3zwx4bt": true })} <h3 class="text-lg font-medium text-gray-900" data-astro-cid-n3zwx4bt> ${item.data.question[lang]} </h3> </div> ${renderComponent($$result2, "ChevronDown", $$ChevronDown, { "class": "w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180", "data-astro-cid-n3zwx4bt": true })} </summary> <div class="px-6 pb-6" data-astro-cid-n3zwx4bt> <div class="prose prose-sm max-w-none text-gray-600" data-astro-cid-n3zwx4bt> ${item.data.answer[lang]} </div> ${item.data.lastUpdated && renderTemplate`<div class="flex items-center gap-2 mt-4 text-sm text-gray-500" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Clock", $$Clock, { "class": "h-4 w-4", "data-astro-cid-n3zwx4bt": true })} <span data-astro-cid-n3zwx4bt>Last updated: ${new Date(item.data.lastUpdated).toLocaleDateString()}</span> </div>`} </div> </details> </div>`)} </div> </div> <!-- Step-by-Step Guides --> <div class="mb-16" data-aos="fade-up" data-astro-cid-n3zwx4bt> <h2 class="text-2xl font-bold text-gray-900 mb-6" data-astro-cid-n3zwx4bt> ${t2("faq.guides.title")} </h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-n3zwx4bt> ${guides.map((guide, index) => renderTemplate`<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all" data-astro-cid-n3zwx4bt> <div class="p-6" data-astro-cid-n3zwx4bt> <div class="flex items-center gap-3 mb-4" data-astro-cid-n3zwx4bt> <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold" data-astro-cid-n3zwx4bt> ${index + 1} </div> <h3 class="font-medium text-gray-900" data-astro-cid-n3zwx4bt>${guide.data.question[lang]}</h3> </div> <div class="prose prose-sm" data-astro-cid-n3zwx4bt> ${guide.data.answer[lang]} </div> </div> </div>`)} </div> </div> <!-- Categories Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-aos="fade-up" data-aos-delay="200" role="navigation" aria-label="FAQ Categories" data-astro-cid-n3zwx4bt> ${faqCategories.map((category, index) => renderTemplate`<button class="category-button flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all"${addAttribute(category.id, "data-category")} data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")}${addAttribute(`faq-category-${category.id}`, "aria-controls")} aria-expanded="false" data-astro-cid-n3zwx4bt> <div class="p-3 bg-primary-100 rounded-full mb-3" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "category.icon", category.icon, { "class": "w-6 h-6 text-primary-600", "aria-hidden": "true", "data-astro-cid-n3zwx4bt": true })} </div> <span class="text-sm font-medium text-gray-900 text-center" data-astro-cid-n3zwx4bt> ${t2(category.translationKey)} </span> </button>`)} </div> <!-- FAQ Wizard --> <div class="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-6 shadow-sm" data-aos="fade-up" data-astro-cid-n3zwx4bt> <div class="text-center mb-6" data-astro-cid-n3zwx4bt> <h2 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-n3zwx4bt> ${t2("faq.wizard.title")} </h2> <p class="text-gray-600" data-astro-cid-n3zwx4bt> ${t2("faq.wizard.subtitle")} </p> </div> <!-- Hidden translation elements for JavaScript --> <div class="hidden" data-astro-cid-n3zwx4bt> <span data-translation-key="faq.wizard.noQuestions"${addAttribute(t2("faq.wizard.noQuestions"), "data-translation-value")} data-astro-cid-n3zwx4bt></span> <span data-translation-key="faq.wizard.noRelatedQuestions"${addAttribute(t2("faq.wizard.noRelatedQuestions"), "data-translation-value")} data-astro-cid-n3zwx4bt></span> <span data-translation-key="faq.common.showAll"${addAttribute(t2("faq.common.showAll"), "data-translation-value")} data-astro-cid-n3zwx4bt></span> <span data-translation-key="faq.common.hideAll"${addAttribute(t2("faq.common.hideAll"), "data-translation-value")} data-astro-cid-n3zwx4bt></span> </div> <div class="wizard-container" data-astro-cid-n3zwx4bt> <!-- Wizard Step 1 - Select a category --> <div id="wizardStep1" class="wizard-step active" role="tabpanel" aria-labelledby="step1-heading" data-astro-cid-n3zwx4bt> <div class="text-center mb-4" data-astro-cid-n3zwx4bt> <p id="step1-heading" class="text-base font-medium text-gray-800" data-astro-cid-n3zwx4bt> ${t2("faq.wizard.step1")} </p> </div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3" role="group"${addAttribute(t2("faq.wizard.categoriesGroup"), "aria-label")} data-astro-cid-n3zwx4bt> ${faqCategories.map((category) => renderTemplate`<button class="wizard-category flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:bg-primary-50 transition-all"${addAttribute(category.id, "data-category")}${addAttribute(t2(category.translationKey), "aria-label")} tabindex="0" data-astro-cid-n3zwx4bt> <div class="p-2 bg-primary-100 rounded-full mb-2" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "category.icon", category.icon, { "class": "w-5 h-5 text-primary-600", "aria-hidden": "true", "data-astro-cid-n3zwx4bt": true })} </div> <span class="text-sm font-medium text-gray-900 text-center" data-astro-cid-n3zwx4bt> ${t2(category.translationKey)} </span> </button>`)} </div> </div> <!-- Wizard Step 2 - Common questions in category --> <div id="wizardStep2" class="wizard-step hidden" data-astro-cid-n3zwx4bt> <div class="flex items-center mb-6" data-astro-cid-n3zwx4bt> <button id="wizardBackBtn" class="text-gray-500 hover:text-gray-700 mr-3" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-n3zwx4bt></path> </svg> </button> <h3 id="wizardCategoryTitle" class="text-lg font-medium text-gray-900" data-astro-cid-n3zwx4bt></h3> </div> <div id="wizardQuestions" class="space-y-3" data-astro-cid-n3zwx4bt> <!-- Questions will be populated via JavaScript --> </div> </div> <!-- Wizard Step 3 - Answer view --> <div id="wizardStep3" class="wizard-step hidden" data-astro-cid-n3zwx4bt> <div class="flex items-center mb-6" data-astro-cid-n3zwx4bt> <button id="wizardBackToQuestionsBtn" class="text-gray-500 hover:text-gray-700 mr-3" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-n3zwx4bt></path> </svg> </button> <h3 id="wizardQuestionTitle" class="text-lg font-medium text-gray-900" data-astro-cid-n3zwx4bt></h3> </div> <div id="wizardAnswer" class="bg-white rounded-lg p-4 shadow-sm" data-astro-cid-n3zwx4bt> <!-- Answer will be populated via JavaScript --> </div> <div class="mt-6" data-astro-cid-n3zwx4bt> <h4 class="text-base font-medium text-gray-800 mb-3" data-astro-cid-n3zwx4bt>${t2("faq.wizard.relatedQuestions")}</h4> <div id="wizardRelatedQuestions" class="space-y-2" data-astro-cid-n3zwx4bt> <!-- Related questions will be populated via JavaScript --> </div> </div> </div> </div> </div> <!-- FAQ Content --> <div class="max-w-3xl mx-auto" data-astro-cid-n3zwx4bt> ${Object.entries(faqByCategory).map(([categoryId, items]) => renderTemplate`<div class="faq-category mb-8"${addAttribute(categoryId, "data-category")} data-aos="fade-up"${addAttribute(`faq-category-${categoryId}`, "id")} role="region"${addAttribute(`category-heading-${categoryId}`, "aria-labelledby")} data-astro-cid-n3zwx4bt> <h2${addAttribute(`category-heading-${categoryId}`, "id")} class="text-2xl font-bold text-gray-900 mb-6" data-astro-cid-n3zwx4bt> ${t2(`faq.categories.${categoryId}`)} </h2> <div class="space-y-4" data-astro-cid-n3zwx4bt> ${items.map((item) => renderTemplate`<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md" data-astro-cid-n3zwx4bt> <details class="group"${addAttribute(item.data.id, "id")} data-astro-cid-n3zwx4bt> <summary class="flex items-center justify-between p-6 cursor-pointer" data-astro-cid-n3zwx4bt> <h3 class="text-lg font-medium text-gray-900 pr-8" data-astro-cid-n3zwx4bt> ${item.data.question[lang]} </h3> ${renderComponent($$result2, "ChevronDown", $$ChevronDown, { "class": "w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180", "aria-hidden": "true", "data-astro-cid-n3zwx4bt": true })} </summary> <div class="px-6 pb-6" data-astro-cid-n3zwx4bt> <div class="prose prose-sm max-w-none text-gray-600 faq-content-wrapper" data-astro-cid-n3zwx4bt> ${// Check if the answer contains line breaks for formatting
  item.data.answer[lang].includes("\n") ? renderTemplate`<div data-astro-cid-n3zwx4bt>${unescapeHTML(
    item.data.answer[lang].split("\n").map((line) => {
      if (/^\d+[\.:].+:$/.test(line.trim())) {
        return `<h4 class="text-gray-800 font-medium mt-4 mb-2">${line}</h4>`;
      } else if (/^\s*[\-\•]\s+/.test(line)) {
        return `<div class="flex items-start gap-2 my-1">
                                      <div class="w-2 h-2 rounded-full bg-primary-500 mt-1.5 flex-shrink-0"></div>
                                      <div>${line.replace(/^\s*[\-\•]\s+/, "")}</div>
                                    </div>`;
      } else if (line.includes(":")) {
        const [key, value] = line.split(":");
        if (value && key.length < 30) {
          return `<div class="my-1.5">
                                        <span class="font-medium text-gray-800">${key}:</span>
                                        <span>${value}</span>
                                      </div>`;
        }
      }
      if (line.trim().length > 0) {
        return `<p class="my-1">${line}</p>`;
      }
      return "";
    }).join("")
  )}</div>` : renderTemplate`<p data-astro-cid-n3zwx4bt>${item.data.answer[lang]}</p>`} </div> ${item.data.image && renderTemplate`<div class="mt-4" data-astro-cid-n3zwx4bt> <img${addAttribute(item.data.image, "src")} alt="" class="rounded-lg w-full max-h-[300px] object-cover" loading="lazy" decoding="async" fetchpriority="low" data-astro-cid-n3zwx4bt> </div>`} <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center" data-astro-cid-n3zwx4bt> ${item.data.lastUpdated && renderTemplate`<div class="flex items-center gap-2 text-sm text-gray-500" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Clock", $$Clock, { "class": "h-4 w-4", "data-astro-cid-n3zwx4bt": true })} <span data-astro-cid-n3zwx4bt>Last updated: ${new Date(item.data.lastUpdated).toLocaleDateString()}</span> </div>`} <div class="flex items-center gap-3" data-astro-cid-n3zwx4bt> <button class="text-sm text-gray-500 hover:text-primary-600 flex items-center gap-1 transition-colors"${addAttribute(`copy-faq-${item.data.id}`, "id")} title="Copy link" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-n3zwx4bt></path> </svg> <span class="hidden sm:inline" data-astro-cid-n3zwx4bt>Copy link</span> </button> <button class="feedback-btn"${addAttribute(item.data.id, "data-faq-id")} data-helpful="true" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" data-astro-cid-n3zwx4bt></path> </svg> </button> <button class="feedback-btn"${addAttribute(item.data.id, "data-faq-id")} data-helpful="false" data-astro-cid-n3zwx4bt> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-n3zwx4bt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2" data-astro-cid-n3zwx4bt></path> </svg> </button> </div> </div> </div> </details> </div>`)} </div> </div>`)} </div> <!-- Contact Section --> <div class="mt-16 text-center" data-aos="fade-up" data-astro-cid-n3zwx4bt> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-n3zwx4bt> ${t2("faq.notFoundQuestion")} </h2> <p class="text-gray-600 mb-8" data-astro-cid-n3zwx4bt> ${t2("faq.contactUs")} </p> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300" data-astro-cid-n3zwx4bt> ${t2("faq.askQuestion")} ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-n3zwx4bt": true })} </button> </div> <!-- Contact Section --> <div class="mt-20" data-astro-cid-n3zwx4bt> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-n3zwx4bt": true })} </div> </div> </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-n3zwx4bt": true })} ` })}  ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/faq.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/faq.astro";
const $$url = "/[lang]/faq";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Faq, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
