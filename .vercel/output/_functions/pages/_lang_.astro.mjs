import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, b as addAttribute, m as maybeRenderHead, n as renderScript } from "../chunks/vendor_BAzprikM.mjs";
import { t } from "../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout, a as $$OfferPopup } from "../chunks/Layout_DMdNbTih.mjs";
/* empty css                                 */
import { o as getHeroTranslations, p as getMissionStatsTranslations, $ as $$SectionHeader, a as SectionHeader, B as ButtonView, q as getSuccessPathTranslations, j as getProgramsTranslations, r as $$ButtonView, C as Card, s as getPartnersTranslations, t as getOurTeamTranslations, g as getLangFromUrl, v as getTestimonialsTranslations, w as getFeaturedBlogTranslations, x as getComparisonTranslations, k as $$CTA, y as getWhyTranslations, l as languages } from "../chunks/ui_DFpIJiEG.mjs";
import { p as push, f as fallback, o as onDestroy, l as escape_html, b as bind_props, a as pop, e as ensure_array_like, k as attr_style, m as stringify, j as attr_class, d as clsx, n as attr } from "../chunks/svelte-vendor_tqOFL8AJ.mjs";
import { a0 as Send, a1 as User, a2 as Users, a3 as Building_2, a4 as Clock, i as $$Users, a5 as $$Building2, g as $$CheckCircle, h as $$Award, j as $$GraduationCap, n as $$Wallet, a6 as $$TrendingUp, a7 as Circle_check, E as $$Clock, H as Hand, C as Chevron_right, Z as $$Target, Y as $$Heart, I as $$Star, z as $$Calendar, b as $$ArrowRight, F as $$BookOpen, k as $$Building, a8 as $$CheckCircle2, e as $$ChevronDown, a9 as $$Brain, Q as $$DollarSign, N as $$Globe, aa as $$Rocket } from "../chunks/icons_GFS7fkbb.mjs";
import { e as getAllTestimonials, f as $$UniversityFeature } from "../chunks/university-features_sJEkhT2g.mjs";
import "clsx";
import { $ as $$ContactModal } from "../chunks/ContactModal_DJdGLMdF.mjs";
import { $ as $$Contact } from "../chunks/Contact_CezTUkJc.mjs";
import { a as getFeaturedPosts, d as getLatestPosts, f as formatDate } from "../chunks/index_CAXKlz0U.mjs";
import { $ as $$FAQ } from "../chunks/FAQ_3WqR22Qx.mjs";
function OzbekTypingBadge($$payload, $$props) {
  push();
  let badgeText = fallback($$props["badgeText"], "");
  let displayText = "";
  let timeout;
  onDestroy(() => {
    clearTimeout(timeout);
  });
  $$payload.out += `<div class="inline-flex items-center px-5 py-2.5 rounded-full badge-container svelte-12z5me3"><div class="pulse-dot svelte-12z5me3"><span class="absolute inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 opacity-75 animate-ping svelte-12z5me3"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 svelte-12z5me3"></span></div> <span class="text-slate-800 font-medium typing-text svelte-12z5me3">${escape_html(displayText)} <span class="ml-[1px] animate-blink svelte-12z5me3">|</span></span></div>`;
  bind_props($$props, { badgeText });
  pop();
}
function HeroButtons($$payload, $$props) {
  push();
  let onOpenForm = $$props["onOpenForm"];
  let translations = fallback(
    $$props["translations"],
    () => ({
      apply: "Arizani qoldirish",
      programs: "Universitetlar"
    }),
    true
  );
  $$payload.out += `<div class="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 items-center sm:items-start mx-auto sm:mx-0"><div class="flex-none"><button class="btn-primary group svelte-182pkbz"><span class="relative z-10">${escape_html(translations.apply)}</span> <span class="ml-2 inline-flex transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-12">`;
  Send($$payload, { size: 20, class: "h-5 w-5" });
  $$payload.out += `<!----></span></button></div> <div class="flex-none"><button class="btn-secondary group svelte-182pkbz"><span class="relative z-10">${escape_html(translations.programs)}</span> <span class="ml-2 inline-flex transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">`;
  User($$payload, { size: 20, class: "h-5 w-5" });
  $$payload.out += `<!----></span></button></div></div>`;
  bind_props($$props, { onOpenForm, translations });
  pop();
}
function StatsSection($$payload, $$props) {
  push();
  let translations = fallback(
    $$props["translations"],
    () => ({
      universities: "Universitetlar",
      students: "Talabalar",
      experience: "Yillik tajriba"
    }),
    true
  );
  const stats2 = [
    {
      icon: Users,
      value: 5e3,
      label: translations.students,
      animationDelay: "0ms"
    },
    {
      icon: Building_2,
      value: 50,
      label: translations.universities,
      animationDelay: "150ms"
    },
    {
      icon: Clock,
      value: 10,
      label: translations.experience,
      animationDelay: "300ms"
    }
  ];
  const each_array = ensure_array_like(stats2);
  $$payload.out += `<div class="mt-16"><div class="flex flex-row justify-center sm:justify-start gap-8 sm:gap-10 md:gap-14"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let stat = each_array[i];
    $$payload.out += `<div class="stat-item svelte-1tjsc9h"${attr_style(`--delay: ${stringify(stat.animationDelay)};`)}><div class="stat-card svelte-1tjsc9h"><div class="stat-icon svelte-1tjsc9h"><!---->`;
    stat.icon?.($$payload, { size: 24, strokeWidth: 1.5 });
    $$payload.out += `<!----></div> <div class="stat-number svelte-1tjsc9h"><span class="stat-value counter svelte-1tjsc9h">${escape_html(stat.value)}</span> <span class="stat-plus svelte-1tjsc9h">+</span></div> <div class="stat-label svelte-1tjsc9h">${escape_html(stat.label)}</div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { translations });
  pop();
}
function Index($$payload, $$props) {
  push();
  let translations = fallback(
    $$props["translations"],
    () => ({
      title: {
        first: "O'zbekiston",
        highlight: "ishonchli ko'prik",
        connector: "va Xitoy"
      },
      description: "O'zbek talabalar uchun Xitoyning eng yaxshi universitetlarida ta'lim.",
      badge: { enrollment: "2025-yil uchun qabul" },
      buttons: {
        apply: "Arizani qoldirish",
        programs: "Universitetlar"
      },
      stats: {
        universities: "Universitetlar",
        students: "Talabalar",
        experience: "Yillik tajriba",
        success: "Muvaffaqiyat"
      },
      testimonials: []
    }),
    true
  );
  let lang = fallback($$props["lang"], "uz");
  function handleOpenForm() {
    alert("Ariza yuborish uchun: +998 XX XXX XX XX");
  }
  $$payload.out += `<div class="hero-container min-h-screen w-full overflow-hidden relative pt-[22px] svelte-utjspe"><div class="hero-bg absolute inset-0 -z-20 overflow-hidden svelte-utjspe"><div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50 svelte-utjspe"></div> <div class="absolute -top-[10%] -right-[15%] w-[60%] h-[60%] bg-primary-300/10 rounded-full blur-3xl svelte-utjspe"></div> <div class="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl svelte-utjspe"></div> <div class="absolute top-[30%] right-[10%] w-[35%] h-[35%] bg-primary-200/15 rounded-full blur-3xl svelte-utjspe"></div> <div class="absolute bottom-[15%] right-[5%] w-[30%] h-[30%] bg-blue-300/10 rounded-full blur-3xl svelte-utjspe"></div> <div class="absolute inset-0 bg-grid opacity-[0.06] svelte-utjspe"></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 svelte-utjspe"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 lg:py-20 svelte-utjspe"><div class="lg:col-span-7 z-10 svelte-utjspe"><div${attr_class(clsx("visible-immediately"), "svelte-utjspe")} style="--delay: 0.15s">`;
  OzbekTypingBadge($$payload, { badgeText: translations.badge.enrollment });
  $$payload.out += `<!----></div> <h1 class="fancy-heading text-4xl md:text-5xl lg:text-6xl mt-6 leading-tight visible-immediately svelte-utjspe"><span class="text-[#2463EB] svelte-utjspe">${escape_html(translations.title.first)}</span> <br class="svelte-utjspe"> <span class="relative inline-block svelte-utjspe">${escape_html(translations.title.connector)} <span class="absolute bottom-2 left-0 w-full h-2 bg-secondary/40 -z-10 svelte-utjspe"></span></span> <br class="svelte-utjspe"> <span class="relative inline-block svelte-utjspe">${escape_html(translations.title.highlight)} <span class="absolute bottom-2 left-0 w-full h-2 bg-secondary/40 -z-10 svelte-utjspe"></span></span></h1> <p class="mt-6 text-gray-700 text-lg leading-relaxed max-w-lg visible-immediately svelte-utjspe">${escape_html(translations.description)}</p> <div class="visible-immediately mt-8 svelte-utjspe">`;
  HeroButtons($$payload, {
    onOpenForm: handleOpenForm,
    translations: translations.buttons
  });
  $$payload.out += `<!----></div> <div${attr_class(clsx("visible-immediately mt-12"), "svelte-utjspe")} style="--delay: 0.75s">`;
  StatsSection($$payload, { translations: translations.stats });
  $$payload.out += `<!----></div></div> <div class="lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] mt-8 lg:mt-16 svelte-utjspe">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  bind_props($$props, { translations, lang });
  pop();
}
const $$Astro$a = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang = "uz" } = Astro2.props;
  const translations = getHeroTranslations(lang);
  if (!translations.testimonials || translations.testimonials.length === 0) {
    console.warn(`No testimonials found in translations for language: ${lang}`);
    const placeholderImage = "/images/testimonials/placeholder.jpeg";
    translations.testimonials = [
      {
        name: "Student 1",
        role: "University Role",
        image: placeholderImage,
        quote: "Testimonial quote 1"
      },
      {
        name: "Student 2",
        role: "University Role",
        image: placeholderImage,
        quote: "Testimonial quote 2"
      },
      {
        name: "Student 3",
        role: "University Role",
        image: placeholderImage,
        quote: "Testimonial quote 3"
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "HeroComponent", Index, { "lang": lang, "translations": translations, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/Hero/Index.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/Hero/Hero.astro", void 0);
const stats = [
  {
    value: "1000+",
    icon: $$Users,
    translationKey: {
      label: "stats.students.label",
      description: "stats.students.description"
    }
  },
  {
    value: "50+",
    icon: $$Building2,
    translationKey: {
      label: "stats.universities.label",
      description: "stats.universities.description"
    }
  },
  {
    value: "98%",
    icon: $$CheckCircle,
    translationKey: {
      label: "stats.success.label",
      description: "stats.success.description"
    }
  },
  {
    value: "10+",
    icon: $$Award,
    translationKey: {
      label: "stats.experience.label",
      description: "stats.experience.description"
    }
  }
];
const advantages = [
  {
    icon: $$GraduationCap,
    translationKey: {
      title: "advantages.education.title",
      description: "advantages.education.description"
    }
  },
  {
    icon: $$Wallet,
    translationKey: {
      title: "advantages.price.title",
      description: "advantages.price.description"
    }
  },
  {
    icon: $$TrendingUp,
    translationKey: {
      title: "advantages.career.title",
      description: "advantages.career.description"
    }
  }
];
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro();
const $$MissionStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MissionStats;
  const { lang = "uz" } = Astro2.props;
  const t2 = getMissionStatsTranslations(lang);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="section-container" data-astro-cid-shtbuzkg> <!-- Section Title --> ', ' <!-- Stats Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 stats-grid" data-astro-cid-shtbuzkg> ', ' </div> <!-- Advantages --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-shtbuzkg> ', " </div> </section> <script>\n  // Используем requestIdleCallback для запуска анимации в свободное время\n  function initCounters() {\n    // Оптимизированная функция анимации счетчиков\n    function animateCounter(element) {\n      const target = parseInt(element.dataset.target?.replace(/\\D/g, '') || '0');\n      // Уменьшаем длительность анимации для повышения производительности\n      const duration = 1000;\n      const step = target / (duration / 16);\n      let current = 0;\n  \n      const updateCounter = () => {\n        current += step;\n        if (current < target) {\n          element.textContent = Math.ceil(current).toLocaleString() + '+';\n          requestAnimationFrame(updateCounter);\n        } else {\n          element.textContent = target.toLocaleString() + '+';\n        }\n      };\n  \n      updateCounter();\n    }\n  \n    // Intersection Observer для запуска анимации только когда элемент виден\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          const counterElements = entry.target.querySelectorAll('.counter-value');\n          counterElements.forEach(element => {\n            if (element instanceof HTMLElement) {\n              animateCounter(element);\n            }\n          });\n          observer.unobserve(entry.target);\n        }\n      });\n    }, {\n      // Уменьшаем порог для более раннего запуска анимации\n      threshold: 0.1,\n      // Добавляем отступ для предварительной загрузки\n      rootMargin: '50px'\n    });\n  \n    // Наблюдаем за контейнером счетчиков вместо отдельных элементов\n    const counterContainer = document.querySelector('.stats-grid');\n    if (counterContainer) {\n      observer.observe(counterContainer);\n    }\n  }\n  \n  // Запускаем инициализацию после загрузки DOM\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => {\n      if ('requestIdleCallback' in window) {\n        window.requestIdleCallback(initCounters, { timeout: 2000 });\n      } else {\n        setTimeout(initCounters, 1000);\n      }\n    });\n  } else {\n    if ('requestIdleCallback' in window) {\n      window.requestIdleCallback(initCounters, { timeout: 2000 });\n    } else {\n      setTimeout(initCounters, 1000);\n    }\n  }\n<\/script> "], ["", '<section class="section-container" data-astro-cid-shtbuzkg> <!-- Section Title --> ', ' <!-- Stats Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 stats-grid" data-astro-cid-shtbuzkg> ', ' </div> <!-- Advantages --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-shtbuzkg> ', " </div> </section> <script>\n  // Используем requestIdleCallback для запуска анимации в свободное время\n  function initCounters() {\n    // Оптимизированная функция анимации счетчиков\n    function animateCounter(element) {\n      const target = parseInt(element.dataset.target?.replace(/\\\\D/g, '') || '0');\n      // Уменьшаем длительность анимации для повышения производительности\n      const duration = 1000;\n      const step = target / (duration / 16);\n      let current = 0;\n  \n      const updateCounter = () => {\n        current += step;\n        if (current < target) {\n          element.textContent = Math.ceil(current).toLocaleString() + '+';\n          requestAnimationFrame(updateCounter);\n        } else {\n          element.textContent = target.toLocaleString() + '+';\n        }\n      };\n  \n      updateCounter();\n    }\n  \n    // Intersection Observer для запуска анимации только когда элемент виден\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          const counterElements = entry.target.querySelectorAll('.counter-value');\n          counterElements.forEach(element => {\n            if (element instanceof HTMLElement) {\n              animateCounter(element);\n            }\n          });\n          observer.unobserve(entry.target);\n        }\n      });\n    }, {\n      // Уменьшаем порог для более раннего запуска анимации\n      threshold: 0.1,\n      // Добавляем отступ для предварительной загрузки\n      rootMargin: '50px'\n    });\n  \n    // Наблюдаем за контейнером счетчиков вместо отдельных элементов\n    const counterContainer = document.querySelector('.stats-grid');\n    if (counterContainer) {\n      observer.observe(counterContainer);\n    }\n  }\n  \n  // Запускаем инициализацию после загрузки DOM\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => {\n      if ('requestIdleCallback' in window) {\n        window.requestIdleCallback(initCounters, { timeout: 2000 });\n      } else {\n        setTimeout(initCounters, 1000);\n      }\n    });\n  } else {\n    if ('requestIdleCallback' in window) {\n      window.requestIdleCallback(initCounters, { timeout: 2000 });\n    } else {\n      setTimeout(initCounters, 1000);\n    }\n  }\n<\/script> "])), maybeRenderHead(), renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.title, "subtitle": t2.subtitle, "data-astro-cid-shtbuzkg": true }), stats.map((stat, index) => {
    const statKey = stat.translationKey.label.split(".")[1];
    const statTranslation = t2.stats[statKey];
    return renderTemplate`<div class="bg-white rounded-2xl p-6 shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col h-full" data-aos="fade-up"${addAttribute(100 * index, "data-aos-delay")} data-astro-cid-shtbuzkg> <div class="flex items-start gap-4 mb-4" data-astro-cid-shtbuzkg> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white" data-astro-cid-shtbuzkg> ${renderComponent($$result, "stat.icon", stat.icon, { "class": "w-6 h-6", "data-astro-cid-shtbuzkg": true })} </div> <div class="flex-grow min-h-[60px] flex flex-col" data-astro-cid-shtbuzkg> <div class="text-3xl font-bold text-gray-900 counter-value"${addAttribute(stat.value, "data-target")} data-astro-cid-shtbuzkg> ${stat.value} </div> <div class="text-sm font-medium text-gray-500 whitespace-pre-line" data-astro-cid-shtbuzkg>${statTranslation.label}</div> </div> </div> <p class="text-gray-600 text-sm mt-auto" data-astro-cid-shtbuzkg>${statTranslation.description}</p> </div>`;
  }), advantages.map((advantage, index) => {
    const advantageKey = advantage.translationKey.title.split(".")[1];
    const advantageTranslation = t2.advantages[advantageKey];
    return renderTemplate`<div class="relative group h-full" data-aos="fade-up"${addAttribute(150 * index, "data-aos-delay")} data-astro-cid-shtbuzkg> <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" data-astro-cid-shtbuzkg></div> <div class="relative bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-200 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-xl h-full flex flex-col" data-astro-cid-shtbuzkg> <div class="text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" data-astro-cid-shtbuzkg> ${renderComponent($$result, "advantage.icon", advantage.icon, { "class": "w-8 h-8", "data-astro-cid-shtbuzkg": true })} </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-shtbuzkg>${advantageTranslation.title}</h3> <p class="text-gray-600 flex-grow mt-auto" data-astro-cid-shtbuzkg>${advantageTranslation.description}</p> </div> </div>`;
  }));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/MissionStats.astro", void 0);
function SuccessPath($$payload, $$props) {
  push();
  let lang = $$props["lang"];
  let translations = $$props["translations"];
  let visibleSteps = [];
  const stepColors = [
    "#2563eb",
    // Blue
    "#C82220",
    // Red
    "#16a34a",
    // Green
    "#003c91",
    // Dark Blue
    "#1e293b",
    // Slate
    "#0051df"
    // Primary Blue
  ];
  const each_array = ensure_array_like(translations.steps);
  $$payload.out += `<section class="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-20 overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div> <div class="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl"></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">`;
  SectionHeader($$payload, {
    title: translations.title,
    subtitle: translations.subtitle
  });
  $$payload.out += `<!----> <div class="max-w-4xl mx-auto mt-16"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let step = each_array[index];
    $$payload.out += `<div class="relative step-item"${attr("data-step-id", step.id)}>`;
    if (visibleSteps.includes(step.id)) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(step.benefits);
      $$payload.out += `<div class="flex items-start gap-8 mb-12"><div class="hidden md:flex flex-col items-center"><div class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"${attr_style(`background-color: ${stringify(stepColors[index % stepColors.length])}`)}>${escape_html(step.id)}</div> `;
      if (index < translations.steps.length - 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="w-0.5 h-32 bg-gray-200"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div> <div class="flex-1"><div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"${attr_style(`border-left-color: ${stringify(stepColors[index % stepColors.length])}; border-left-width: 4px;`)}><div class="flex items-center gap-4 mb-4"><div class="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"${attr_style(`background-color: ${stringify(stepColors[index % stepColors.length])}`)}>${escape_html(step.id)}</div> <div><h3 class="text-xl font-bold text-gray-900">${escape_html(step.title)}</h3> <p class="text-gray-600 mt-1">${escape_html(step.description)}</p></div></div> <div class="grid md:grid-cols-2 gap-4 mt-6"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let benefit = each_array_1[$$index];
        $$payload.out += `<div class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">`;
        Circle_check($$payload, {
          class: "w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
        });
        $$payload.out += `<!----> <span class="text-gray-700">${escape_html(benefit)}</span></div>`;
      }
      $$payload.out += `<!--]--></div></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="flex items-start gap-8 mb-12 opacity-0"><div class="hidden md:flex flex-col items-center"><div class="w-12 h-12 rounded-full"></div> `;
      if (index < translations.steps.length - 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="w-0.5 h-32"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div> <div class="flex-1"><div class="p-6"><div style="height: 100px;"></div></div></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-16">`;
  ButtonView($$payload, {
    href: `/${lang}/student-path`,
    text: translations.detailsButtonText,
    variant: "desktop",
    showOnMobile: false
  });
  $$payload.out += `<!----> `;
  ButtonView($$payload, {
    href: `/${lang}/student-path`,
    text: translations.detailsButtonText,
    variant: "mobile",
    showOnDesktop: false
  });
  $$payload.out += `<!----></div></div></section>`;
  bind_props($$props, { lang, translations });
  pop();
}
const $$Astro$8 = createAstro();
const $$SuccessPath = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SuccessPath;
  const { lang = "uz" } = Astro2.props;
  const translations = getSuccessPathTranslations(lang);
  return renderTemplate`${renderComponent($$result, "SuccessPathComponent", SuccessPath, { "lang": lang, "translations": translations, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/SuccessPath/SuccessPath.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/SuccessPath/SuccessPath.astro", void 0);
const $$Astro$7 = createAstro();
const $$ProgramFeature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProgramFeature;
  const { lang = "uz" } = Astro2.props;
  const t2 = getProgramsTranslations(lang);
  const programs = [
    {
      id: "bachelor",
      title: t2.categories.bachelor.title,
      description: t2.categories.bachelor.description,
      price: {
        original: "$8,900",
        discounted: "$7,200"
      },
      duration: t2.categories.bachelor.duration,
      benefits: t2.categories.bachelor.benefits,
      deadline: "2025-yil 1-may",
      discount: "20%"
    },
    {
      id: "master",
      title: t2.categories.master.title,
      description: t2.categories.master.description,
      price: {
        original: "$12,500",
        discounted: "$10,800"
      },
      duration: t2.categories.master.duration,
      benefits: t2.categories.master.benefits,
      deadline: "2025-yil 1-may",
      discount: "20%"
    },
    {
      id: "language",
      title: t2.categories.language.title,
      description: t2.categories.language.description,
      price: {
        original: "$2,400",
        discounted: "$1,920"
      },
      duration: t2.categories.language.duration,
      benefits: t2.categories.language.benefits,
      deadline: "2025-yil 1-may",
      discount: "20%"
    }
  ];
  const activeCategory = Astro2.url.searchParams.get("program") || "bachelor";
  const activeProgram = programs.find((p) => p.id === activeCategory) || programs[0];
  return renderTemplate`${maybeRenderHead()}<section class="container max-w-7xl bg-background mx-auto py-12 md:py-16 lg:py-20"> <div class="container px-4 md:px-6"> <!-- Header --> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.main.title, "subtitle": t2.main.subtitle })} <!-- Category Selector - Mobile --> <div class="md:hidden mb-8"> <div class="max-w-[640px] mx-auto flex flex-col items-center justify-between gap-4 p-4 bg-muted/10 border rounded-lg"> <div class="text-base font-medium">${t2.labels.programs}</div> <div class="relative w-full"> <select id="program-select-mobile" class="w-full appearance-none bg-background border rounded-md px-4 py-2 pr-8"${addAttribute(activeCategory, "value")}> ${programs.map((program) => renderTemplate`<option${addAttribute(program.id, "value")}> ${program.title} </option>`)} </select> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"> <path d="m6 9 6 6 6-6"></path> </svg> </div> </div> </div> <!-- Category Pills - Desktop --> <div class="hidden md:flex justify-center mb-8"> <div class="inline-flex p-1 bg-gray-50 border rounded-lg shadow-sm"> ${programs.map((program) => renderTemplate`<button type="button"${addAttribute(program.id, "data-program")}${addAttribute([
    "flex items-center gap-2 px-6 py-3 rounded-md transition-all",
    activeCategory === program.id ? "bg-white shadow-sm border text-primary font-medium" : "hover:bg-gray-100 text-gray-600"
  ], "class:list")}> <span>${program.title}</span> </button>`)} </div> </div> <!-- Program Content --> <div class="md:max-w-6xl mx-auto"> <div id="program-content"> <div class="border-2 rounded-xl shadow-sm overflow-hidden"> <div class="bg-muted/10 border-b pb-3 p-6"> <div class="flex items-center justify-between"> <h3 class="font-medium text-xl">${activeProgram.title}</h3> <div class="text-sm text-muted-foreground">Ta'lim dasturi</div> </div> </div> <div class="p-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <p class="text-slate-600 mb-6"> ${activeProgram.description} </p> <div class="flex items-end gap-3 mb-6"> <div class="text-3xl font-bold text-blue-600">${activeProgram.price.discounted}</div> <div class="text-lg text-slate-500 line-through">${activeProgram.price.original}</div> <div class="text-sm text-blue-600 font-medium">/yil</div> </div> <div class="flex items-center mb-6 text-slate-600"> ${renderComponent($$result, "Clock", $$Clock, { "class": "h-5 w-5 mr-2 text-blue-600" })} <span>Davomiyligi: ${activeProgram.duration}</span> </div> <h4 class="font-semibold text-slate-800 mb-3">Dastur imkoniyatlari:</h4> <ul class="space-y-4 mb-6"> ${activeProgram.benefits.map((benefit) => renderTemplate`<li class="flex items-start gap-3"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "class": "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" })} <span class="text-slate-600">${benefit}</span> </li>`)} </ul> <div class="flex flex-col sm:flex-row gap-3"> <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors">
Ariza topshirish
</button> <button class="border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2 transition-colors">
Dastur haqida batafsil
</button> </div> </div> <div class="relative rounded-xl overflow-hidden h-[300px] md:h-auto"> <img src="https://insight.study.csu.edu.au/wp-content/uploads/2018/03/5-Reasons-to-go-to-uni-besides-boosting-your-career-prospects.jpg?height=500&width=500"${addAttribute(activeProgram.title, "alt")} class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-white"> <div class="flex items-center space-x-2"> <span class="bg-blue-600 text-white py-1 px-3 rounded-full text-sm"> ${activeCategory === "bachelor" ? "Top dastur" : activeCategory === "master" ? "Eng mashhur" : "Tezkor"} </span> <span class="bg-green-600 text-white py-1 px-3 rounded-full text-sm"> ${activeProgram.discount} chegirma
</span> </div> <p class="text-white text-sm mt-2">Ro'yxatdan o'tish oxirgi muddati: ${activeProgram.deadline}</p> </div> </div> </div> </div> <div class="bg-muted/10 border-t p-4 text-sm text-muted-foreground">
Ma'lumotlar 2023-yil holatiga ko'ra taqdim etilgan
</div> </div> </div> </div> <div class="container"> <!-- Mobile button (hidden on desktop) --> <div class="text-center mt-12"> ${renderComponent($$result, "ButtonView", $$ButtonView, { "href": `/${lang}/programs`, "text": t2.labels.viewAll, "variant": "mobile", "showOnDesktop": false })} </div> <!-- Desktop button (hidden on mobile) --> <div class="text-center mt-12"> ${renderComponent($$result, "ButtonView", $$ButtonView, { "href": `/${lang}/programs`, "text": t2.labels.viewAll, "variant": "desktop", "showOnMobile": false })} </div> </div> </div> </section> ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/programs/ProgramFeature.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/programs/ProgramFeature.astro", void 0);
function PartnerCardItem($$payload, $$props) {
  push();
  let partner = $$props["partner"];
  let className = fallback($$props["className"], "");
  Card($$payload, {
    class: `min-h-[200px] overflow-hidden group transition-all duration-300 rounded-xl w-full
  border border-gray-200
  bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.9),rgba(255,255,255,0.8))]
  backdrop-blur-[10px]
  shadow-[0_1px_3px_0px_rgba(0,0,0,0.06)]
  hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
  hover:border-[rgba(59,130,246,0.2)] ${className}`,
    children: ($$payload2) => {
      $$payload2.out += `<div class="p-4 flex flex-col items-center justify-center h-full gap-4"><div class="flex items-center justify-center w-full h-[120px]"><img${attr("src", partner.logo)}${attr("alt", partner.name)} class="max-w-[80%] max-h-full object-contain transition-transform duration-300"></div> <h3 class="text-sm font-bold text-gray-700 text-center line-clamp-2">${escape_html(partner.name)}</h3></div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { partner, className });
  pop();
}
function BackgroundDecoration($$payload) {
  $$payload.out += `<div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div> <div class="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div> <div class="absolute -bottom-12 right-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl"></div> <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div></div>`;
}
const partners = [
  {
    id: 1,
    name: "Chonqing University",
    logo: "/images/partners/Chonqing-University-of-Technology.png"
  },
  {
    id: 2,
    name: "Guizhou University",
    logo: "/images/partners/Guizhou-University.png"
  },
  {
    id: 3,
    name: "Hangzhou Normal University",
    logo: "/images/partners/Hangzhou-Normal-University.png"
  },
  {
    id: 4,
    name: "Liaoning University",
    logo: "/images/partners/Liaoning-University.png"
  },
  {
    id: 5,
    name: "Nanjing University of Technology",
    logo: "/images/partners/Nanjing-University-of-Technology.png"
  },
  {
    id: 6,
    name: "Zhejiang University",
    logo: "/images/partners/Zhejiang-university.svg"
  }
];
function OurPartners($$payload, $$props) {
  push();
  let lang = $$props["lang"];
  let translations = $$props["translations"];
  const each_array = ensure_array_like(partners);
  $$payload.out += `<div class="w-full bg-[#F5F9FB] py-12 relative">`;
  BackgroundDecoration($$payload);
  $$payload.out += `<!----> <div class="w-full max-w-[1920px] mx-auto px-4 relative z-10">`;
  SectionHeader($$payload, {
    title: translations.title,
    subtitle: translations.description
  });
  $$payload.out += `<!----> <div class="flex justify-end mb-4"><div${attr_class(`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${"translate-x-2"}`)}>`;
  Hand($$payload, { class: "w-5 h-5 text-primary" });
  $$payload.out += `<!----> <span class="text-sm font-semibold">${escape_html(translations.swipeToSlide)}</span></div></div> <div class="relative mb-8 pb-6"><div class="overflow-hidden cursor-grab active:cursor-grabbing"><div class="flex"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let partner = each_array[$$index];
    $$payload.out += `<div class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4">`;
    PartnerCardItem($$payload, { partner });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute -bottom-2 left-4 hidden md:flex items-center gap-2 z-10"><button class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110">`;
    Chevron_right($$payload, { class: "w-5 h-5 rotate-180" });
    $$payload.out += `<!----></button> <button class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110">`;
    Chevron_right($$payload, { class: "w-5 h-5" });
    $$payload.out += `<!----></button></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-12">`;
  ButtonView($$payload, {
    href: `/${lang}/partners`,
    text: translations.viewAllPartners,
    variant: "desktop",
    showOnMobile: false
  });
  $$payload.out += `<!----> `;
  ButtonView($$payload, {
    href: `/${lang}/partners`,
    text: translations.viewAllPartners,
    variant: "mobile",
    showOnDesktop: false
  });
  $$payload.out += `<!----></div></div></div>`;
  bind_props($$props, { lang, translations });
  pop();
}
const $$Astro$6 = createAstro();
const $$OurPartners = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OurPartners;
  const { lang = "uz" } = Astro2.props;
  const translations = getPartnersTranslations(lang);
  return renderTemplate`${renderComponent($$result, "OurPartnersComponent", OurPartners, { "lang": lang, "translations": translations, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/OurPartners/OurPartners.svelte", "client:component-export": "default" })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/OurPartners/OurPartners.astro", void 0);
const $$Astro$5 = createAstro();
const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OurTeam;
  const { lang = "uz" } = Astro2.props;
  const t2 = getOurTeamTranslations(lang);
  const teamMembers = [
    {
      name: "Avaz Nishonboyev",
      position: t2.team.positions.position1,
      image: "/images/team/Avaz_Nishonboyev.jpg"
    },
    {
      name: "Maxmud Maxmudov",
      position: t2.team.positions.position2,
      image: "/images/team/Maxmud_Maxmudov.jpg"
    },
    {
      name: "Shuxrat Usmonov",
      position: t2.team.positions.position3,
      image: "/images/team/Shuxrat_Usmonov.jpg"
    },
    {
      name: "Dilnoza Gulyamova",
      position: t2.team.positions.position4,
      image: "/images/team/Dilnoza_Gulyamova.jpg"
    }
  ];
  const values = [
    {
      icon: $$Target,
      title: t2.values.value1.title,
      description: t2.values.value1.description
    },
    {
      icon: $$Heart,
      title: t2.values.value2.title,
      description: t2.values.value2.description
    },
    {
      icon: $$Star,
      title: t2.values.value3.title,
      description: t2.values.value3.description
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20" data-astro-cid-knmnvvsa> <!-- Главный заголовок секции с синей линией --> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.team.title, "subtitle": t2.team.description, "data-astro-cid-knmnvvsa": true })} <!-- Сетка с фотографиями команды --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-astro-cid-knmnvvsa> ${teamMembers.map((member, index) => renderTemplate`<div class="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up"${addAttribute(100 * index, "data-aos-delay")} data-astro-cid-knmnvvsa> <div class="aspect-square overflow-hidden" data-astro-cid-knmnvvsa> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-astro-cid-knmnvvsa> </div> <div class="p-4 text-center" data-astro-cid-knmnvvsa> <h3 class="font-semibold text-gray-900" data-astro-cid-knmnvvsa>${member.name}</h3> <p class="text-sm text-primary-600" data-astro-cid-knmnvvsa>${member.position}</p> </div> </div>`)} </div> <!-- Наши ценности --> <div class="mt-12 mb-12" data-astro-cid-knmnvvsa> <div class="text-center mb-10" data-aos="fade-up" data-astro-cid-knmnvvsa> <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-astro-cid-knmnvvsa> ${t2.values.mainTitle} </h3> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-knmnvvsa> ${t2.values.description} </p> </div> <div class="grid md:grid-cols-3 gap-6" data-astro-cid-knmnvvsa> ${values.map((value, index) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center" data-aos="fade-up"${addAttribute(150 * index, "data-aos-delay")} data-astro-cid-knmnvvsa> <div class="p-3 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-500 transition-colors duration-300" data-astro-cid-knmnvvsa> ${renderComponent($$result, "value.icon", value.icon, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-knmnvvsa": true })} </div> <h4 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-knmnvvsa>${value.title}</h4> <p class="text-gray-600" data-astro-cid-knmnvvsa>${value.description}</p> </div>`)} </div> </div> </div> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/OurTeam.astro", void 0);
const $$Astro$4 = createAstro();
const $$TestimonialsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const lang = getLangFromUrl(Astro2.url);
  const t2 = getTestimonialsTranslations(lang);
  const testimonials = await getAllTestimonials(lang);
  console.log("Loaded testimonials:", testimonials);
  const featuredTestimonials = testimonials.filter((testimonial) => testimonial.data.featured);
  console.log("Featured testimonials:", featuredTestimonials);
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white" data-astro-cid-3ikxrls2> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3ikxrls2> <!-- Header --> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.main.title, "subtitle": t2.main.subtitle, "data-astro-cid-3ikxrls2": true })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-3ikxrls2> ${featuredTestimonials.map((testimonial, index) => renderTemplate`<div class="testimonial-card"${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-3ikxrls2> <div class="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100 h-full flex flex-col" data-astro-cid-3ikxrls2> <div class="flex items-center mb-4" data-astro-cid-3ikxrls2> <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md" data-astro-cid-3ikxrls2> <img${addAttribute(testimonial.data.image, "src")}${addAttribute(testimonial.data.name, "alt")} class="w-full h-full object-cover" data-astro-cid-3ikxrls2> </div> <div class="ml-3" data-astro-cid-3ikxrls2> <h3 class="font-semibold text-slate-800" data-astro-cid-3ikxrls2>${testimonial.data.name}</h3> <p class="text-sm text-slate-600" data-astro-cid-3ikxrls2>${testimonial.data.university}</p> </div> </div> <p class="text-slate-700 mb-4 flex-grow" data-astro-cid-3ikxrls2>"${testimonial.data.quote[lang]}"</p> <div class="flex" data-astro-cid-3ikxrls2> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`${renderComponent($$result, "Star", $$Star, { "class": `w-4 h-4 ${i < testimonial.data.rating ? "text-amber-400 fill-current" : "text-gray-200"}`, "data-astro-cid-3ikxrls2": true })}`)} </div> </div> </div>`)} </div> </div> </section> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/TestimonialsSection.astro", void 0);
const $$Astro$3 = createAstro();
const $$FeaturedBlogSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturedBlogSection;
  const { lang, featuredCount = 1, latestCount = 4 } = Astro2.props;
  const t2 = getFeaturedBlogTranslations(lang);
  const featuredPosts = getFeaturedPosts().slice(0, featuredCount);
  const latestPosts = getLatestPosts(latestCount + featuredCount).filter((post) => !featuredPosts.some((fp) => fp.id === post.id)).slice(0, latestCount);
  function getCategoryLabel(category) {
    switch (category) {
      case "academic":
        return t2.categories.academic;
      case "study-tips":
        return t2.categories.studyTips;
      case "career":
        return t2.categories.career;
      case "student-life":
        return t2.categories.studentLife;
      case "technology":
        return t2.categories.technology;
      default:
        return category;
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden" data-astro-cid-7svhkujd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-7svhkujd> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.title, "subtitle": t2.subtitle, "centered": true, "data-astro-cid-7svhkujd": true })} <div class="mt-12 grid gap-8 md:grid-cols-12" data-astro-cid-7svhkujd> <!-- Featured Post (larger) - Takes 7 columns on desktop --> ${featuredPosts.length > 0 && renderTemplate`<div class="md:col-span-7" data-aos="fade-right" data-aos-duration="1000" data-astro-cid-7svhkujd> <article class="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col" data-astro-cid-7svhkujd> <div class="relative aspect-video overflow-hidden" data-astro-cid-7svhkujd> <img${addAttribute(featuredPosts[0].coverImage, "src")}${addAttribute(featuredPosts[0].title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-astro-cid-7svhkujd> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-7svhkujd></div> <div class="absolute top-4 left-4 flex gap-2" data-astro-cid-7svhkujd> ${featuredPosts[0].categories.slice(0, 2).map((category) => renderTemplate`<span class="px-3 py-1 text-xs font-medium bg-white/90 text-blue-700 rounded-full backdrop-blur-sm" data-astro-cid-7svhkujd> ${getCategoryLabel(category)} </span>`)} </div> <div class="absolute top-4 right-4" data-astro-cid-7svhkujd> <span class="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full" data-astro-cid-7svhkujd> ${t2.featuredBadge} </span> </div> </div> <div class="flex flex-col p-6 flex-grow" data-astro-cid-7svhkujd> <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3" data-astro-cid-7svhkujd> <a${addAttribute(`/${lang}/study-blog/${featuredPosts[0].id}`, "href")} class="block" data-astro-cid-7svhkujd> ${featuredPosts[0].title} </a> </h3> <p class="text-gray-600 mb-4 line-clamp-3" data-astro-cid-7svhkujd> ${featuredPosts[0].excerpt} </p> <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between" data-astro-cid-7svhkujd> <div class="flex items-center gap-3" data-astro-cid-7svhkujd> <img${addAttribute(featuredPosts[0].author.avatar, "src")}${addAttribute(featuredPosts[0].author.name, "alt")} class="w-8 h-8 rounded-full object-cover border-2 border-blue-100" data-astro-cid-7svhkujd> <div data-astro-cid-7svhkujd> <p class="text-sm font-medium text-gray-900" data-astro-cid-7svhkujd>${featuredPosts[0].author.name}</p> <div class="flex items-center text-xs text-gray-500" data-astro-cid-7svhkujd> ${renderComponent($$result, "Calendar", $$Calendar, { "class": "w-3 h-3 mr-1", "data-astro-cid-7svhkujd": true })} <span data-astro-cid-7svhkujd>${formatDate(featuredPosts[0].publishedDate)}</span> <span class="mx-2" data-astro-cid-7svhkujd>•</span> ${renderComponent($$result, "Clock", $$Clock, { "class": "w-3 h-3 mr-1", "data-astro-cid-7svhkujd": true })} <span data-astro-cid-7svhkujd>${featuredPosts[0].readTime}</span> </div> </div> </div> <a${addAttribute(`/${lang}/study-blog/${featuredPosts[0].id}`, "href")} class="inline-flex items-center justify-center rounded-full w-8 h-8 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" data-astro-cid-7svhkujd> ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4", "data-astro-cid-7svhkujd": true })} </a> </div> </div> </article> </div>`} <!-- Latest Posts (smaller cards) - Takes 5 columns on desktop --> <div class="md:col-span-5" data-astro-cid-7svhkujd> <div class="grid gap-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" data-astro-cid-7svhkujd> ${latestPosts.map((post) => renderTemplate`<article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex" data-astro-cid-7svhkujd> <div class="relative w-1/3 aspect-square overflow-hidden" data-astro-cid-7svhkujd> <img${addAttribute(post.coverImage, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-astro-cid-7svhkujd> <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-7svhkujd></div> </div> <div class="flex-1 p-4 flex flex-col" data-astro-cid-7svhkujd> <div class="mb-1" data-astro-cid-7svhkujd> ${post.categories.slice(0, 1).map((category) => renderTemplate`<span class="inline-block px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full" data-astro-cid-7svhkujd> ${getCategoryLabel(category)} </span>`)} </div> <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1 line-clamp-2" data-astro-cid-7svhkujd> <a${addAttribute(`/${lang}/study-blog/${post.id}`, "href")} class="block" data-astro-cid-7svhkujd> ${post.title} </a> </h3> <p class="text-sm text-gray-600 line-clamp-2 mb-2" data-astro-cid-7svhkujd> ${post.excerpt} </p> <div class="mt-auto flex items-center justify-between text-xs" data-astro-cid-7svhkujd> <div class="flex items-center text-gray-500" data-astro-cid-7svhkujd> ${renderComponent($$result, "Calendar", $$Calendar, { "class": "w-3 h-3 mr-1", "data-astro-cid-7svhkujd": true })} <span data-astro-cid-7svhkujd>${formatDate(post.publishedDate)}</span> </div> <a${addAttribute(`/${lang}/study-blog/${post.id}`, "href")} class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center" data-astro-cid-7svhkujd> ${t2.readMore} ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-3 h-3 ml-1", "data-astro-cid-7svhkujd": true })} </a> </div> </div> </article>`)} </div> </div> </div> <div class="mt-12 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-astro-cid-7svhkujd> <a${addAttribute(`/${lang}/study-blog`, "href")} class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md" data-astro-cid-7svhkujd> ${t2.viewAll} ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4 ml-2", "data-astro-cid-7svhkujd": true })} </a> </div> </div> </section> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/blog/FeaturedBlogSection.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ChinaVsUzbekistan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ChinaVsUzbekistan;
  const { lang = "uz" } = Astro2.props;
  const currentLang = getLangFromUrl(Astro2.url);
  const t2 = getComparisonTranslations(currentLang || lang);
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const categories = [
    {
      id: "education",
      title: t2.categories.education.title,
      icon: $$GraduationCap,
      china: t2.categories.education.china,
      uzb: t2.categories.education.uzb
    },
    {
      id: "programs",
      title: t2.categories.programs.title,
      icon: $$BookOpen,
      china: t2.categories.programs.china,
      uzb: t2.categories.programs.uzb
    },
    {
      id: "infrastructure",
      title: t2.categories.infrastructure.title,
      icon: $$Building,
      china: t2.categories.infrastructure.china,
      uzb: t2.categories.infrastructure.uzb
    },
    {
      id: "teachers",
      title: t2.categories.teachers.title,
      icon: $$Users,
      china: t2.categories.teachers.china,
      uzb: t2.categories.teachers.uzb
    }
  ];
  const activeCategory = Astro2.url.searchParams.get("category") || "education";
  const activeItem = categories.find((c) => c.id === activeCategory) || categories[0];
  return renderTemplate(_a || (_a = __template(["", '<section class="container max-w-7xl bg-background mx-auto py-12 md:py-16 lg:py-20"> <div class="container px-4 md:px-6"> <!-- Header --> ', ' <!-- Category Selector - Mobile --> <div class="md:hidden mb-8"> <div class="max-w-[640px] mx-auto flex flex-col items-center justify-between gap-4 p-4 bg-muted/10 border rounded-lg"> <div class="text-base font-medium">', '</div> <div class="relative w-full"> <select id="category-select-mobile" class="w-full appearance-none bg-background border rounded-md px-4 py-2 pr-8"', "> ", " </select> ", ' </div> </div> </div> <!-- Category Pills - Desktop --> <div class="hidden md:flex justify-center mb-8"> <div class="inline-flex p-1 bg-gray-50 border rounded-lg shadow-sm"> ', ' </div> </div> <!-- Comparison Content --> <div class="md:max-w-6xl mx-auto"> <div id="comparison-content"> <div class="border-2 rounded-xl shadow-sm overflow-hidden"> <div class="bg-muted/10 border-b pb-3 p-6"> <div class="flex items-center justify-between"> <h3 class="font-medium text-xl">', '</h3> <div class="text-sm text-muted-foreground">', '</div> </div> </div> <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x"> <!-- China Column --> <div class="p-6"> <div class="flex items-center gap-2 mb-4"> <div class="h-6 w-6 rounded-full bg-[#DE2910] flex items-center justify-center text-white text-xs font-bold">\nCN\n</div> <h4 class="font-medium text-lg">', '</h4> </div> <hr class="mb-4"> <ul class="space-y-4"> ', ' </ul> </div> <!-- Uzbekistan Column --> <div class="p-6"> <div class="flex items-center gap-2 mb-4"> <div class="h-6 w-6 rounded-full bg-[#1A5BE1] flex items-center justify-center text-white text-xs font-bold">\nUZ\n</div> <h4 class="font-medium text-lg">', '</h4> </div> <hr class="mb-4"> <ul class="space-y-4"> ', ' </ul> </div> </div> <div class="bg-muted/10 border-t p-4 text-sm text-muted-foreground"> ', ' </div> </div> </div> </div> <div class="container"> <!-- Мобильная кнопка (скрыта на десктопе) --> <div class="text-center mt-12"> ', ' </div> <!-- Десктопная кнопка (скрыта на мобильных) --> <div class="text-center mt-12"> ', ' </div> </div> <div class="px-4 sm:px-6 lg:px-8"> ', " </div> </div> </section> ", ' <!-- Embed translations for client-side use --> <script id="comparison-translations" type="application/json">\n  {JSON.stringify(t)}\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t2.title, "subtitle": t2.subtitle }), t2.selectCategory, addAttribute(activeCategory, "value"), categories.map((category) => renderTemplate`<option${addAttribute(category.id, "value")}>${category.title}</option>`), renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" }), categories.map((category) => renderTemplate`<button type="button"${addAttribute(category.id, "data-category")}${addAttribute(cn(
    "flex items-center gap-2 px-6 py-3 rounded-md transition-all",
    activeCategory === category.id ? "bg-white shadow-sm border text-primary font-medium" : "hover:bg-gray-100 text-gray-600"
  ), "class")}> ${renderComponent($$result, "category.icon", category.icon, { "class": "h-4 w-4" })} <span>${category.title}</span> </button>`), activeItem.title, t2.compareAnalysis, t2.countries.china, activeItem.china.map((item) => renderTemplate`<li class="flex items-start gap-3"> ${renderComponent($$result, "CheckCircle2", $$CheckCircle2, { "class": "h-5 w-5 text-[#DE2910] mt-0.5 flex-shrink-0" })} <span>${item}</span> </li>`), t2.countries.uzbekistan, activeItem.uzb.map((item) => renderTemplate`<li class="flex items-start gap-3"> ${renderComponent($$result, "CheckCircle2", $$CheckCircle2, { "class": "h-5 w-5 text-[#1A5BE1] mt-0.5 flex-shrink-0" })} <span>${item}</span> </li>`), t2.dataFrom, renderComponent($$result, "ButtonView", $$ButtonView, { "href": `/${lang}/blog`, "text": t2.readArticle, "variant": "mobile", "showOnDesktop": false }), renderComponent($$result, "ButtonView", $$ButtonView, { "href": `/${lang}/blog`, "text": t2.readArticle, "variant": "desktop", "showOnMobile": false }), renderComponent($$result, "CTA", $$CTA, {}), renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/ChinaVsUzbekistan.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/ChinaVsUzbekistan.astro", void 0);
const $$Astro$1 = createAstro();
const $$WhyChina = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyChina;
  const { lang = "uz" } = Astro2.props;
  const translations = getWhyTranslations(lang);
  const icons = [
    $$GraduationCap,
    $$Brain,
    $$DollarSign,
    $$Globe,
    $$Rocket,
    $$BookOpen
  ];
  const colors = [
    "blue",
    "purple",
    "green",
    "orange",
    "red",
    "indigo"
  ];
  const reasons = translations.reasons.map((reason, index) => ({
    ...reason,
    icon: icons[index % icons.length],
    color: colors[index % colors.length]
  }));
  return renderTemplate`${maybeRenderHead()}<section class="section-container" data-astro-cid-bfeodeao> <!-- Background Elements --> <div class="hero-bg" data-astro-cid-bfeodeao> <div class="blob blob-1" data-astro-cid-bfeodeao></div> <div class="blob blob-2" data-astro-cid-bfeodeao></div> <div class="blob blob-3" data-astro-cid-bfeodeao></div> <div class="blob blob-4" data-astro-cid-bfeodeao></div> <div class="shape shape-1" data-astro-cid-bfeodeao></div> <div class="shape shape-2" data-astro-cid-bfeodeao></div> <div class="shape shape-3" data-astro-cid-bfeodeao></div> </div> <!-- Rest of the WhyChina content --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-astro-cid-bfeodeao> <!-- Section Title --> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": `${translations.title.main} <span class="text-blue-600">${translations.title.highlight}</span>`, "subtitle": translations.subtitle, "data-astro-cid-bfeodeao": true })} <!-- Reasons Flex Container --> <div class="flex flex-wrap gap-8 mb-12" data-astro-cid-bfeodeao> ${reasons.map((reason, index) => renderTemplate`<div class="card flex-1 min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.75rem)]" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-bfeodeao> <div${addAttribute(`w-14 h-14 rounded-lg bg-${reason.color}-100 flex items-center justify-center mb-6`, "class")} data-astro-cid-bfeodeao> ${renderComponent($$result, "reason.icon", reason.icon, { "class": `w-7 h-7 text-${reason.color}-600`, "data-astro-cid-bfeodeao": true })} </div> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-bfeodeao> ${reason.title} </h3> <p class="text-gray-600" data-astro-cid-bfeodeao> ${reason.description} </p> </div>`)} </div> <!-- CTA Section --> ${renderComponent($$result, "CTA", $$CTA, { "data-astro-cid-bfeodeao": true })} </div> </section> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/home/WhyChina.astro", void 0);
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const meta = {
    title: "EduChina - Xitoyda ta'lim olish",
    description: "Xitoy universitetlariga kirish uchun yordam"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "lang": lang })} <div class="section section-gradient-1"> ${renderComponent($$result2, "WhyChina", $$WhyChina, { "lang": lang })} </div> <div class="section section-gradient-2"> ${renderComponent($$result2, "MissionStats", $$MissionStats, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "UniversityFeature", $$UniversityFeature, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "ChinaVsUzbekistan", $$ChinaVsUzbekistan, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "OurPartners", $$OurPartners, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "ProgramFeature", $$ProgramFeature, { "lang": lang })} </div> <section class="bg-gradient-to-br from-white via-gray-50 to-white"> ${renderComponent($$result2, "OurTeam", $$OurTeam, { "lang": lang })} </section> <div class="section-divider-new"> ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "SuccessPath", $$SuccessPath, { "lang": lang })} </div> <div class="section-divider-new"> ${renderComponent($$result2, "FeaturedBlogSection", $$FeaturedBlogSection, { "lang": lang })} </div> <div class="section section-gradient-1"> ${renderComponent($$result2, "FAQ", $$FAQ, { "lang": lang })} </div> ${renderComponent($$result2, "Contact", $$Contact, { "lang": lang })} ${renderComponent($$result2, "ContactModal", $$ContactModal, { "lang": lang })} ${renderComponent($$result2, "OfferPopup", $$OfferPopup, { "lang": lang })} </main> ${renderScript($$result2, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/index.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/index.astro";
const $$url = "/[lang]";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Index, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
