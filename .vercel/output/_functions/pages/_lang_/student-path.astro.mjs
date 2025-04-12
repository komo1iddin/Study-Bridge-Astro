import { c as createComponent, a as createAstro, d as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from "../../chunks/vendor_BkHgkSTi.mjs";
import { q } from "../../chunks/vendor_BkHgkSTi.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_CkcAm6nx.mjs";
import { l as languages, i as getTranslation, k as $$CTA } from "../../chunks/ui_CkL6hZGM.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_D2yKI7Sd.mjs";
import { $ as $$ContactModal } from "../../chunks/ContactModal_CgMr4Khz.mjs";
import { $ as $$Reviews } from "../../chunks/Reviews_C3AmwjYJ.mjs";
import { $ as $$Contact } from "../../chunks/Contact_D20ezkbg.mjs";
import { $ as $$FAQ } from "../../chunks/FAQ_BX_0zKxm.mjs";
/* empty css                                           */
import { J as $$Compass, F as $$BookOpen, j as $$GraduationCap, K as $$FileCheck, L as $$PenTool, h as $$Award, M as $$Briefcase, N as $$Globe, O as $$Check } from "../../chunks/icons_DMAatXJH.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$StudentPath = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StudentPath;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t = (key) => getTranslation(lang, key);
  const breadcrumbItems = [
    { label: t("nav.home"), href: `/${lang}` },
    { label: t("nav.about.studentPath"), href: `/${lang}/student-path` }
  ];
  const journeySteps = [
    {
      id: "exploration",
      title: t("studentPath.journey.exploration.title"),
      description: t("studentPath.journey.exploration.description"),
      icon: "compass",
      services: [
        t("studentPath.journey.exploration.services.consultation"),
        t("studentPath.journey.exploration.services.selection"),
        t("studentPath.journey.exploration.services.costAnalysis"),
        t("studentPath.journey.exploration.services.scholarships")
      ]
    },
    {
      id: "preparation",
      title: t("studentPath.journey.preparation.title"),
      description: t("studentPath.journey.preparation.description"),
      icon: "book-open",
      services: [
        t("studentPath.journey.preparation.services.hskCourses"),
        t("studentPath.journey.preparation.services.motivationLetter"),
        t("studentPath.journey.preparation.services.interview"),
        t("studentPath.journey.preparation.services.requirements")
      ]
    },
    {
      id: "application",
      title: t("studentPath.journey.application.title"),
      description: t("studentPath.journey.application.description"),
      icon: "graduation-cap",
      services: [
        t("studentPath.journey.application.services.documents"),
        t("studentPath.journey.application.services.translation"),
        t("studentPath.journey.application.services.submission"),
        t("studentPath.journey.application.services.tracking")
      ]
    },
    {
      id: "documentation",
      title: t("studentPath.journey.documentation.title"),
      description: t("studentPath.journey.documentation.description"),
      icon: "file-check",
      services: [
        t("studentPath.journey.documentation.services.visaDocuments"),
        t("studentPath.journey.documentation.services.visaInterview"),
        t("studentPath.journey.documentation.services.tickets"),
        t("studentPath.journey.documentation.services.insurance")
      ]
    },
    {
      id: "arrival",
      title: t("studentPath.journey.arrival.title"),
      description: t("studentPath.journey.arrival.description"),
      icon: "pen-tool",
      services: [
        t("studentPath.journey.arrival.services.airportPickup"),
        t("studentPath.journey.arrival.services.accommodation"),
        t("studentPath.journey.arrival.services.registration"),
        t("studentPath.journey.arrival.services.simCard")
      ]
    },
    {
      id: "study",
      title: t("studentPath.journey.study.title"),
      description: t("studentPath.journey.study.description"),
      icon: "award",
      services: [
        t("studentPath.journey.study.services.academicSupport"),
        t("studentPath.journey.study.services.adaptation"),
        t("studentPath.journey.study.services.extraClasses"),
        t("studentPath.journey.study.services.events")
      ]
    },
    {
      id: "career",
      title: t("studentPath.journey.career.title"),
      description: t("studentPath.journey.career.description"),
      icon: "briefcase",
      services: [
        t("studentPath.journey.career.services.employment"),
        t("studentPath.journey.career.services.resume"),
        t("studentPath.journey.career.services.interviews"),
        t("studentPath.journey.career.services.internships")
      ]
    },
    {
      id: "network",
      title: t("studentPath.journey.network.title"),
      description: t("studentPath.journey.network.description"),
      icon: "globe",
      services: [
        t("studentPath.journey.network.services.alumni"),
        t("studentPath.journey.network.services.projects"),
        t("studentPath.journey.network.services.contacts"),
        t("studentPath.journey.network.services.events")
      ]
    }
  ];
  return renderTemplate(_a || (_a = __template(["", "  <script>\n// Animation for elements appearing on scroll\ndocument.addEventListener('DOMContentLoaded', function() {\n  // Add unique ID to our section\n  const heroSection = document.querySelector('section');\n  if (heroSection) {\n    heroSection.id = 'china-education-hero';\n    heroSection.classList.add('fade-in');\n  }\n  \n  // Small parallax effect on mouse movement\n  document.addEventListener('mousemove', function(e) {\n    const moveX = (e.clientX - window.innerWidth / 2) / 50;\n    const moveY = (e.clientY - window.innerHeight / 2) / 50;\n    \n    // Select circular elements\n    const circles = document.querySelectorAll('#china-education-hero .rounded-full');\n    circles.forEach(function(circle, index) {\n      const factor = index % 2 === 0 ? 1 : -1;\n      if (circle instanceof HTMLElement) {\n        circle.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;\n      }\n    });\n  });\n\n  // Intersection Observer for timeline animation\n  const observer = new IntersectionObserver(function(entries) {\n    entries.forEach(function(entry) {\n      if (entry.isIntersecting && entry.target instanceof HTMLElement) {\n        entry.target.classList.add('visible');\n      }\n    });\n  }, {\n    threshold: 0.1,\n    rootMargin: '0px 0px -50px 0px'\n  });\n\n  const timelineItems = document.querySelectorAll('.timeline-item');\n  timelineItems.forEach(function(item) {\n    observer.observe(item);\n  });\n});\n<\/script>"], ["", "  <script>\n// Animation for elements appearing on scroll\ndocument.addEventListener('DOMContentLoaded', function() {\n  // Add unique ID to our section\n  const heroSection = document.querySelector('section');\n  if (heroSection) {\n    heroSection.id = 'china-education-hero';\n    heroSection.classList.add('fade-in');\n  }\n  \n  // Small parallax effect on mouse movement\n  document.addEventListener('mousemove', function(e) {\n    const moveX = (e.clientX - window.innerWidth / 2) / 50;\n    const moveY = (e.clientY - window.innerHeight / 2) / 50;\n    \n    // Select circular elements\n    const circles = document.querySelectorAll('#china-education-hero .rounded-full');\n    circles.forEach(function(circle, index) {\n      const factor = index % 2 === 0 ? 1 : -1;\n      if (circle instanceof HTMLElement) {\n        circle.style.transform = \\`translate(\\${moveX * factor}px, \\${moveY * factor}px)\\`;\n      }\n    });\n  });\n\n  // Intersection Observer for timeline animation\n  const observer = new IntersectionObserver(function(entries) {\n    entries.forEach(function(entry) {\n      if (entry.isIntersecting && entry.target instanceof HTMLElement) {\n        entry.target.classList.add('visible');\n      }\n    });\n  }, {\n    threshold: 0.1,\n    rootMargin: '0px 0px -50px 0px'\n  });\n\n  const timelineItems = document.querySelectorAll('.timeline-item');\n  timelineItems.forEach(function(item) {\n    observer.observe(item);\n  });\n});\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "meta": { title: t("studentPath.meta.title"), description: t("studentPath.meta.description") }, "data-astro-cid-mqkhzpzk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white" data-astro-cid-mqkhzpzk> <!-- Hero Section --> <section id="china-education-hero" class="relative bg-gradient-to-r from-blue-400 to-blue-500 text-white overflow-hidden py-20" data-astro-cid-mqkhzpzk> <!-- Background elements --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-mqkhzpzk> <!-- Large circles in background --> <div class="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-300/30" data-astro-cid-mqkhzpzk></div> <div class="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-blue-300/20" data-astro-cid-mqkhzpzk></div> <!-- Additional design elements --> <div class="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10" data-astro-cid-mqkhzpzk></div> <div class="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-white/15" data-astro-cid-mqkhzpzk></div> <!-- Thin lines --> <div class="absolute inset-0" style="background-image: linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); 
                    background-size: 50px 50px;" data-astro-cid-mqkhzpzk></div> </div> <!-- Icons (thinner and less intrusive) --> <div class="absolute right-10 top-1/3 text-white/20 text-5xl" data-astro-cid-mqkhzpzk>🎓</div> <div class="absolute left-10 bottom-1/3 text-white/20 text-5xl" data-astro-cid-mqkhzpzk>📚</div> <!-- Main content --> <div class="container mx-auto px-4 relative z-10" data-astro-cid-mqkhzpzk> <div class="max-w-3xl mx-auto text-center" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-6 text-sm text-white/80", "data-astro-cid-mqkhzpzk": true })} <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-sm" data-astro-cid-mqkhzpzk> ${t("studentPath.hero.title")} </h1> <p class="text-xl text-white/90 mb-10" data-astro-cid-mqkhzpzk> ${t("studentPath.hero.subtitle")} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-mqkhzpzk> <button class="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors shadow-md" data-astro-cid-mqkhzpzk> ${t("studentPath.hero.buttons.consultation")} </button> <a href="#journey" class="px-8 py-3 bg-blue-600/20 backdrop-blur-sm border border-white/60 text-white font-medium rounded-md hover:bg-blue-600/30 transition-colors" data-astro-cid-mqkhzpzk> ${t("studentPath.hero.buttons.learnProcess")} </a> </div> </div> </div> </section> <!-- Journey Map Section --> <section id="journey" class="py-20" data-astro-cid-mqkhzpzk> <div class="container mx-auto px-4" data-astro-cid-mqkhzpzk> <div class="text-center mb-16" data-astro-cid-mqkhzpzk> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-mqkhzpzk>${t("studentPath.journey.title")}</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-mqkhzpzk> ${t("studentPath.journey.subtitle")} </p> </div> <!-- Journey Timeline --> <div class="max-w-4xl mx-auto" data-astro-cid-mqkhzpzk> ${journeySteps.map((step, index) => renderTemplate`<div class="relative timeline-item"${addAttribute(step.id, "id")} data-astro-cid-mqkhzpzk> <div class="flex items-start gap-8" data-astro-cid-mqkhzpzk> <!-- Icon Column --> <div class="hidden md:flex flex-col items-center" data-astro-cid-mqkhzpzk> <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center" data-astro-cid-mqkhzpzk> ${step.icon === "compass" && renderTemplate`${renderComponent($$result2, "Compass", $$Compass, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "book-open" && renderTemplate`${renderComponent($$result2, "BookOpen", $$BookOpen, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "graduation-cap" && renderTemplate`${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "file-check" && renderTemplate`${renderComponent($$result2, "FileCheck", $$FileCheck, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "pen-tool" && renderTemplate`${renderComponent($$result2, "PenTool", $$PenTool, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "award" && renderTemplate`${renderComponent($$result2, "Award", $$Award, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "briefcase" && renderTemplate`${renderComponent($$result2, "Briefcase", $$Briefcase, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "globe" && renderTemplate`${renderComponent($$result2, "Globe", $$Globe, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} </div> ${index < journeySteps.length - 1 && renderTemplate`<div class="w-0.5 h-24 bg-primary-100" data-astro-cid-mqkhzpzk></div>`} </div> <!-- Content --> <div class="flex-1" data-astro-cid-mqkhzpzk> <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 mb-8" data-astro-cid-mqkhzpzk> <div class="flex items-center gap-4 mb-4" data-astro-cid-mqkhzpzk> <div class="md:hidden w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center" data-astro-cid-mqkhzpzk> ${step.icon === "compass" && renderTemplate`${renderComponent($$result2, "Compass", $$Compass, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "book-open" && renderTemplate`${renderComponent($$result2, "BookOpen", $$BookOpen, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "graduation-cap" && renderTemplate`${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "file-check" && renderTemplate`${renderComponent($$result2, "FileCheck", $$FileCheck, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "pen-tool" && renderTemplate`${renderComponent($$result2, "PenTool", $$PenTool, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "award" && renderTemplate`${renderComponent($$result2, "Award", $$Award, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "briefcase" && renderTemplate`${renderComponent($$result2, "Briefcase", $$Briefcase, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} ${step.icon === "globe" && renderTemplate`${renderComponent($$result2, "Globe", $$Globe, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-mqkhzpzk": true })}`} </div> <div data-astro-cid-mqkhzpzk> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-mqkhzpzk>${step.title}</h3> <p class="text-gray-600" data-astro-cid-mqkhzpzk>${step.description}</p> </div> </div> <div class="space-y-3" data-astro-cid-mqkhzpzk> ${step.services.map((service) => renderTemplate`<div class="flex items-start gap-3" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "Check", $$Check, { "class": "w-5 h-5 text-primary-600 mt-0.5", "data-astro-cid-mqkhzpzk": true })} <span class="text-gray-700" data-astro-cid-mqkhzpzk>${service}</span> </div>`)} </div> </div> </div> </div> </div>`)} </div> </div> </section> <!-- Testimonials Section --> <div class="container mx-auto px-4 py-16" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "Reviews", $$Reviews, { "data-astro-cid-mqkhzpzk": true })} </div> <!-- CTA Section --> <div class="container mx-auto px-4 py-16" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-mqkhzpzk": true })} </div> <!-- FAQ Section --> <div class="container mx-auto px-4 py-16" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-mqkhzpzk": true })} </div> <!-- Contact Section --> <div class="container mx-auto px-4 py-16" data-astro-cid-mqkhzpzk> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-mqkhzpzk": true })} </div> ${renderComponent($$result2, "ContactModal", $$ContactModal, { "data-astro-cid-mqkhzpzk": true })} </main> ` }));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/student-path.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/student-path.astro";
const $$url = "/[lang]/student-path";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$StudentPath, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
