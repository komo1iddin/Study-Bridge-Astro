import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderComponent, b as addAttribute, d as renderTemplate, n as renderScript, r as renderSlot } from "./vendor_BkHgkSTi.mjs";
import "kleur/colors";
import { n as getNavigationTranslations, t as translations, g as getLangFromUrl } from "./ui_CkL6hZGM.mjs";
/* empty css                        */
import { e as $$ChevronDown, _ as $$MoreHorizontal, a0 as Menu, m as $$Languages, N as $$Globe, a as $$Phone, u as $$Instagram, x as $$MessageCircle, p as $$Mail, s as $$MapPin, r as $$Send } from "./icons_DMAatXJH.mjs";
import { p as push, f as fallback, o as onDestroy, b as bind_props, a as pop } from "./svelte-vendor_tqOFL8AJ.mjs";
import "clsx";
import { z } from "zod";
function getModularNavigation(lang) {
  const t = getNavigationTranslations(lang);
  return [
    { name: t.home, href: `/${lang}` },
    {
      name: t.about._value,
      items: [
        { name: t.about.us, href: `/${lang}/about` },
        { name: t.about.reviews, href: `/${lang}/testimonials` },
        { name: t.about.studentPath, href: `/${lang}/student-path` },
        { name: t.about.contacts, href: `/${lang}/contacts` },
        { name: t.about.faq, href: `/${lang}/faq` }
      ]
    },
    {
      name: t.programs,
      href: `/${lang}/programs`
    },
    {
      name: t.universities,
      href: `/${lang}/universities`
    },
    { name: t.grants, href: `/${lang}/grants` },
    { name: t.blog, href: `/${lang}/blog` }
  ];
}
const $$Astro$4 = createAstro();
const $$DesktopNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DesktopNav;
  const currentPath = Astro2.url.pathname;
  const currentLang = currentPath.split("/")[1] || "uz";
  const navigation = getModularNavigation(currentLang);
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center" data-astro-cid-bsvyhnd5> <div class="flex items-center gap-0 xs:gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2.5" data-astro-cid-bsvyhnd5>  ${navigation.slice(0, 1).map((item) => {
    if (item.items) {
      return renderTemplate`<div class="relative group" data-astro-cid-bsvyhnd5> <button class="flex items-center text-gray-600 hover:text-blue-600 text-xs xxs:text-sm font-medium gap-0.5 py-1 px-1 xxs:py-1.5 xxs:px-1.5 sm:py-2 sm:px-2 md:px-2.5 lg:px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200" data-astro-cid-bsvyhnd5> ${item.name} ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "h-3 w-3 xxs:h-3.5 xxs:w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:rotate-180 ml-0.5", "data-astro-cid-bsvyhnd5": true })} </button> <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20" data-astro-cid-bsvyhnd5> <div class="bg-white rounded-lg shadow-md py-1.5 min-w-[160px] xxs:min-w-[180px] sm:min-w-[200px] border border-gray-100" data-astro-cid-bsvyhnd5> ${item.items.map((subItem) => renderTemplate`<a${addAttribute(subItem.href, "href")} class="flex items-center px-2.5 py-1.5 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" data-astro-cid-bsvyhnd5> ${subItem.name} </a>`)} </div> </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")} class="px-1 xxs:px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200" data-astro-cid-bsvyhnd5> ${item.name} </a>`;
  })}  ${navigation.slice(1, 3).map((item, index) => {
    const visibilityClass = index === 0 ? "hidden sm:block" : "hidden md:block";
    if (item.items) {
      return renderTemplate`<div${addAttribute(`relative group ${visibilityClass}`, "class")} data-astro-cid-bsvyhnd5> <button class="flex items-center text-gray-600 hover:text-blue-600 text-xs xxs:text-sm font-medium gap-0.5 py-1 px-1 xxs:py-1.5 xxs:px-1.5 sm:py-2 sm:px-2 md:px-2.5 lg:px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap" data-astro-cid-bsvyhnd5> ${item.name} ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "h-3 w-3 xxs:h-3.5 xxs:w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:rotate-180 ml-0.5", "data-astro-cid-bsvyhnd5": true })} </button> <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20" data-astro-cid-bsvyhnd5> <div class="bg-white rounded-lg shadow-md py-1.5 min-w-[160px] xxs:min-w-[180px] sm:min-w-[200px] border border-gray-100" data-astro-cid-bsvyhnd5> ${item.items.map((subItem) => renderTemplate`<a${addAttribute(subItem.href, "href")} class="flex items-center px-2.5 py-1.5 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" data-astro-cid-bsvyhnd5> ${subItem.name} </a>`)} </div> </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-1 xxs:px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap ${visibilityClass}`, "class")} data-astro-cid-bsvyhnd5> ${item.name} </a>`;
  })}  ${navigation.slice(3).map((item, index) => {
    let visibilityClass;
    if (index === 0) visibilityClass = "hidden lg:block";
    else if (index === 1) visibilityClass = "hidden xl:block";
    else visibilityClass = "hidden 2xl:block";
    if (item.items) {
      return renderTemplate`<div${addAttribute(`relative group ${visibilityClass}`, "class")} data-astro-cid-bsvyhnd5> <button class="flex items-center text-gray-600 hover:text-blue-600 text-xs xxs:text-sm font-medium gap-0.5 py-1 px-1 xxs:py-1.5 xxs:px-1.5 sm:py-2 sm:px-2 md:px-2.5 lg:px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap" data-astro-cid-bsvyhnd5> ${item.name} ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "h-3 w-3 xxs:h-3.5 xxs:w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:rotate-180 ml-0.5", "data-astro-cid-bsvyhnd5": true })} </button> <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20" data-astro-cid-bsvyhnd5> <div class="bg-white rounded-lg shadow-md py-1.5 min-w-[160px] xxs:min-w-[180px] sm:min-w-[200px] border border-gray-100" data-astro-cid-bsvyhnd5> ${item.items.map((subItem) => renderTemplate`<a${addAttribute(subItem.href, "href")} class="flex items-center px-2.5 py-1.5 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" data-astro-cid-bsvyhnd5> ${subItem.name} </a>`)} </div> </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-1 xxs:px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap ${visibilityClass}`, "class")} data-astro-cid-bsvyhnd5> ${item.name} </a>`;
  })}  <div class="relative group 2xl:hidden" data-astro-cid-bsvyhnd5> <button class="flex items-center justify-center text-gray-600 hover:text-blue-600 text-xs xxs:text-sm font-medium ml-auto py-1 px-1 xxs:py-1.5 xxs:px-1.5 sm:py-2 sm:px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200" aria-label="More menu options" data-astro-cid-bsvyhnd5> ${renderComponent($$result, "MoreHorizontal", $$MoreHorizontal, { "class": "h-4 w-4 xxs:h-4.5 xxs:w-4.5 sm:h-5 sm:w-5", "data-astro-cid-bsvyhnd5": true })} </button> <div class="absolute right-0 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20" data-astro-cid-bsvyhnd5> <div class="bg-white rounded-lg shadow-md py-1.5 min-w-[160px] xxs:min-w-[180px] sm:min-w-[200px] border border-gray-100" data-astro-cid-bsvyhnd5>  ${navigation.slice(1, 3).map((item, index) => {
    const conditionalClass = index === 0 ? "sm:hidden" : "md:hidden";
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center px-2.5 py-1.5 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 ${conditionalClass}`, "class")} data-astro-cid-bsvyhnd5> ${item.name} </a>`;
  })}  ${navigation.slice(3).map((item, index) => {
    let conditionalClass;
    if (index === 0) conditionalClass = "lg:hidden";
    else if (index === 1) conditionalClass = "xl:hidden";
    else conditionalClass = "2xl:hidden";
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center px-2.5 py-1.5 xxs:py-1.5 sm:py-2 text-xs xxs:text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 ${conditionalClass}`, "class")} data-astro-cid-bsvyhnd5> ${item.name} </a>`;
  })} </div> </div> </div> </div> </nav> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Header/DesktopNav.astro", void 0);
const getNavigation = (lang) => {
  const t = translations[lang] || translations.uz;
  return [
    { name: t.nav.home, href: `/${lang}` },
    {
      name: t.nav.about._value,
      // Use _value for the parent menu item
      items: [
        { name: t.nav.about.us, href: `/${lang}/about` },
        { name: t.nav.about.reviews, href: `/${lang}/testimonials` },
        { name: t.nav.about.studentPath, href: `/${lang}/student-path` },
        { name: t.nav.about.contacts, href: `/${lang}/contacts` },
        { name: t.nav.about.faq, href: `/${lang}/faq` }
      ]
    },
    {
      name: t.nav.programs,
      href: `/${lang}/programs`
    },
    {
      name: t.nav.universities,
      href: `/${lang}/universities`
    },
    { name: t.nav.grants, href: `/${lang}/grants` },
    { name: t.nav.blog, href: `/${lang}/blog` }
  ];
};
const getLocalizedLanguages = (lang) => {
  const t = translations[lang] || translations.uz;
  return [
    { code: "ru", name: t.languages.ru || "Русский" },
    { code: "uz", name: t.languages.uz || "O'zbekcha" },
    { code: "en", name: t.languages.en || "English" }
  ];
};
const headerEn = {
  navigation: {
    about: "About Us",
    programs: "Programs",
    universities: "Universities",
    blog: "Blog",
    contact: "Contact"
  },
  cta: {
    applyButton: "Apply Now"
  },
  mobileMenu: {
    menu: "Menu",
    close: "Close"
  }
};
const headerRu = {
  navigation: {
    about: "О нас",
    programs: "Программы",
    universities: "Университеты",
    blog: "Блог",
    contact: "Контакты"
  },
  cta: {
    applyButton: "Подать заявку"
  },
  mobileMenu: {
    menu: "Меню",
    close: "Закрыть"
  }
};
const headerUz = {
  navigation: {
    about: "Biz haqimizda",
    programs: "Dasturlar",
    universities: "Universitetlar",
    blog: "Blog",
    contact: "Aloqa"
  },
  cta: {
    applyButton: "Ariza topshirish"
  },
  mobileMenu: {
    menu: "Menyu",
    close: "Yopish"
  }
};
const headerTranslations = {
  en: headerEn,
  ru: headerRu,
  uz: headerUz
};
function getHeaderTranslations(lang) {
  return headerTranslations[lang] || headerUz;
}
const languageSelectorEn = {
  selectLanguage: "Select language",
  languageNames: {
    en: "English",
    ru: "Russian",
    uz: "Uzbek"
  },
  shortcuts: {
    title: "Keyboard Shortcut"
  }
};
const languageSelectorRu = {
  selectLanguage: "Выбрать язык",
  languageNames: {
    en: "Английский",
    ru: "Русский",
    uz: "Узбекский"
  },
  shortcuts: {
    title: "Сочетание клавиш"
  }
};
const languageSelectorUz = {
  selectLanguage: "Tilni tanlang",
  languageNames: {
    en: "Inglizcha",
    ru: "Ruscha",
    uz: "O'zbekcha"
  },
  shortcuts: {
    title: "Klaviatura tugmalari"
  }
};
const languageSelectorTranslations = {
  en: languageSelectorEn,
  ru: languageSelectorRu,
  uz: languageSelectorUz
};
function getLanguageSelectorTranslations(lang) {
  return languageSelectorTranslations[lang] || languageSelectorUz;
}
function MobileNav($$payload, $$props) {
  push();
  let currentPath = $$props["currentPath"];
  let currentLang = fallback($$props["currentLang"], "en");
  let pathname = fallback($$props["pathname"], "");
  let originalBodyStyles = { overflow: "", paddingRight: "" };
  const lang = currentPath.split("/")[1] || "uz";
  onDestroy(() => {
    resetBodyStyles();
  });
  function resetBodyStyles() {
    if (typeof document === "undefined") return;
    document.body.style.overflow = originalBodyStyles.overflow;
    document.body.style.paddingRight = originalBodyStyles.paddingRight;
    document.body.classList.remove("mobile-menu-open");
  }
  getNavigation(lang);
  getLocalizedLanguages(lang);
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="menu-trigger p-2 text-gray-700" aria-label="Open Menu">`;
    Menu($$payload, { class: "h-6 w-6" });
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { currentPath, currentLang, pathname });
  pop();
}
const $$Astro$3 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const { isMobile = false } = Astro2.props;
  const currentLang = Astro2.locals.lang || getLangFromUrl(Astro2.url);
  const currentPath = Astro2.url.pathname;
  const t = getLanguageSelectorTranslations(currentLang);
  const languageOptions = [
    {
      code: "ru",
      name: "RU",
      fullName: t.languageNames.ru,
      shortcut: "Alt+R"
    },
    {
      code: "uz",
      name: "UZ",
      fullName: t.languageNames.uz,
      shortcut: "Alt+U"
    },
    {
      code: "en",
      name: "EN",
      fullName: t.languageNames.en,
      shortcut: "Alt+E"
    }
  ];
  const currentLanguage = languageOptions.find((lang) => lang.code === currentLang) || languageOptions[0];
  function getPathForLang(lang) {
    if (currentPath === `/${currentLang}` || currentPath === `/${currentLang}/`) {
      return `/${lang}/`;
    }
    return currentPath.replace(new RegExp(`^/${currentLang}`), `/${lang}`);
  }
  return renderTemplate`${!isMobile && renderTemplate`${maybeRenderHead()}<div class="relative language-selector-container"><button type="button" class="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 language-selector-button" aria-expanded="false" aria-haspopup="true"${addAttribute(t.selectLanguage, "aria-label")}>${renderComponent($$result, "Languages", $$Languages, { "class": "w-5 h-5" })}<span class="text-sm font-medium">${currentLanguage.name}</span>${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-4 h-4 ml-0.5 chevron-icon" })}</button><div class="absolute right-0 z-50 mt-1 w-40 origin-top-right rounded-lg shadow-md hidden bg-white border border-gray-100 language-selector-menu" role="menu" aria-orientation="vertical" tabindex="-1"><div class="py-1.5" role="none">${languageOptions.map((language) => renderTemplate`<a${addAttribute(getPathForLang(language.code), "href")}${addAttribute([
    "flex items-center px-3 py-2 text-sm transition-colors duration-200 justify-between",
    currentLang === language.code ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
  ], "class:list")} role="menuitem" tabindex="-1" data-astro-reload${addAttribute(language.code, "hreflang")}${addAttribute(language.code, "lang")} rel="alternate"${addAttribute(`${language.fullName} - ${language.shortcut}`, "title")}><span>${language.name}</span>${currentLang === language.code && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-auto"><polyline points="20 6 9 17 4 12"></polyline></svg>`}<span class="text-xs text-gray-400 ml-auto hidden md:inline">${language.shortcut}</span></a>`)}</div></div></div>`}${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/LanguageSelector/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/LanguageSelector/LanguageSelector.astro", void 0);
const $$Astro$2 = createAstro();
const $$MainHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainHeader;
  const currentPath = Astro2.url.pathname;
  const currentLang = getLangFromUrl(Astro2.url);
  const t = getHeaderTranslations(currentLang);
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 bg-white z-[40] border-b border-gray-200/70"> <div class="max-w-[1440px] mx-auto px-4 sm:px-6"> <div class="flex items-center justify-between h-16">  <div class="flex items-center gap-8"> <a${addAttribute(`/${currentLang}`, "href")} class="flex items-center gap-2"> <span class="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-bold text-xl tracking-tight">
Study Bridge
</span> </a>  <div class="hidden lg:block"> ${renderComponent($$result, "DesktopNav", $$DesktopNav, {})} </div> </div>  <div class="hidden lg:flex items-center gap-4">  ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})}  <button onclick="window.showOfferPopup()" class="bg-[#2463EB] hover:bg-[#1d4fd1] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_6px_20px_rgba(36,99,235,0.35)] hover:-translate-y-0.5 active:translate-y-0"> <span>${t.cta.applyButton}</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </button> </div>  <div class="flex lg:hidden items-center gap-2"> <button onclick="window.showLanguageSelector?.()" class="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"> ${renderComponent($$result, "Globe", $$Globe, { "class": "h-5 w-5" })} </button> <a href="tel:+998901234567" class="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"> ${renderComponent($$result, "Phone", $$Phone, { "class": "h-5 w-5" })} </a> ${renderComponent($$result, "MobileNav", MobileNav, { "client:idle": true, "currentPath": currentPath, "client:component-hydration": "idle", "client:component-path": "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Header/MobileNav.svelte", "client:component-export": "default" })} </div> </div> </div> </header> ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Header/MainHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Header/MainHeader.astro", void 0);
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result, "MainHeader", $$MainHeader, {})} </div>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Header/index.astro", void 0);
const $$Astro$1 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const {
    size = "lg",
    class: className
  } = Astro2.props;
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[96rem]"
  };
  const classes = [
    "mx-auto px-4 sm:px-6 lg:px-8",
    sizes[size],
    className
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/core/Card/Container.astro", void 0);
const navigationItemSchema = z.object({
  name: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  items: z.array(z.lazy(() => navigationItemSchema)).optional()
});
const navigationSchema = z.object({
  main: z.array(navigationItemSchema),
  resources: z.array(navigationItemSchema),
  social: z.array(navigationItemSchema)
});
const footerEn = {
  company: {
    description: "Your trusted guide to Chinese education. Since 2022, we have been helping students gain admission to the best universities in China."
  },
  navigation: {
    title: "Navigation"
  },
  resources: {
    title: "Resources"
  },
  contact: {
    title: "Contact Us",
    address: "Hangzhou, Zhejiang, China"
  },
  newsletter: {
    title: "Subscribe to our newsletter",
    placeholder: "Your email address",
    subscribe: "Subscribe",
    description: "Get important news and special offers"
  },
  copyright: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    sitemap: "Sitemap"
  }
};
const footerRu = {
  company: {
    description: "Ваш надежный проводник в мир китайского образования. С 2022 года мы помогаем студентам поступать в лучшие университеты Китая."
  },
  navigation: {
    title: "Навигация"
  },
  resources: {
    title: "Ресурсы"
  },
  contact: {
    title: "Свяжитесь с нами",
    address: "Ханчжоу, Чжэцзян, Китай"
  },
  newsletter: {
    title: "Подпишитесь на нашу рассылку",
    placeholder: "Ваш email адрес",
    subscribe: "Подписаться",
    description: "Получайте важные новости и специальные предложения"
  },
  copyright: {
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    sitemap: "Карта сайта"
  }
};
const footerUz = {
  company: {
    description: "Xitoy ta'limi dunyosiga ishonchli yo'lboshchingiz. 2022 yildan beri talabalarga Xitoyning eng yaxshi universitetlariga kirish uchun yordam beramiz."
  },
  navigation: {
    title: "Navigatsiya"
  },
  resources: {
    title: "Resurslar"
  },
  contact: {
    title: "Biz bilan bog'lanish",
    address: "Hangzhou, Zhejiang, Xitoy"
  },
  newsletter: {
    title: "Yangiliklarimizga obuna bo'ling",
    placeholder: "Email manzilingiz",
    subscribe: "Obuna bo'lish",
    description: "Dolzarb yangiliklar va takliflarni oling"
  },
  copyright: {
    rights: "Barcha huquqlar himoyalangan.",
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    sitemap: "Sayt xaritasi"
  }
};
const footerTranslations = {
  en: footerEn,
  ru: footerRu,
  uz: footerUz
};
function getFooterTranslations(lang) {
  return footerTranslations[lang] || footerUz;
}
const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = getFooterTranslations(lang);
  const navigation = {
    main: [
      { name: "Biz haqimizda", href: "/about", icon: "users" },
      { name: "Dasturlar", href: "/programs", icon: "book-open" },
      { name: "Universitetlar", href: "/universities", icon: "landmark" },
      { name: "Blog", href: "/blog", icon: "file-text" },
      { name: "Aloqa", href: "/contacts", icon: "phone" }
    ],
    resources: [
      { name: "Stipendiyalar", href: "/scholarships" },
      { name: "Viza yordami", href: "/visa-support" },
      { name: "Til kurslari", href: "/language-courses" },
      { name: "Ko'p so'raladigan savollar", href: "/faq" }
    ],
    social: [
      {
        name: "Instagram",
        href: "#",
        icon: "instagram"
      },
      {
        name: "Telegram",
        href: "#",
        icon: "message-circle"
      }
    ]
  };
  const validatedNavigation = navigationSchema.parse(navigation);
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-12 md:py-16"> <div class="grid grid-cols-1 md:grid-cols-12 gap-8"> <!-- Brand Column (4 cols) --> <div class="md:col-span-4 space-y-6"> <div class="flex items-center space-x-3"> <h2 class="text-2xl font-bold text-blue-600">Study Bridge</h2> </div> <p class="text-gray-600 leading-relaxed"> ${t.company.description} </p> <div class="pt-2"> <div class="flex items-center space-x-4"> ${navigation.social.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-sm hover:shadow-md text-gray-600 hover:text-primary-600 transform hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer"${addAttribute(item.name, "aria-label")}> ${item.icon === "instagram" ? renderTemplate`${renderComponent($$result2, "Instagram", $$Instagram, { "class": "h-5 w-5" })}` : renderTemplate`${renderComponent($$result2, "MessageCircle", $$MessageCircle, { "class": "h-5 w-5" })}`} </a>`)} </div> </div> </div> <!-- Navigation Columns (8 cols total) --> <div class="md:col-span-2"> <h3 class="text-base font-semibold text-gray-900 pb-2 mb-4 border-b border-gray-200">${t.navigation.title}</h3> <ul class="space-y-3"> ${validatedNavigation.main.map((item) => renderTemplate`<li> <a${addAttribute(`/${lang}${item.href}`, "href")} class="text-gray-600 hover:text-primary-600 transition-colors duration-300 flex items-center group"> <span class="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all duration-300"></span> ${item.name} </a> </li>`)} </ul> </div> <div class="md:col-span-2"> <h3 class="text-base font-semibold text-gray-900 pb-2 mb-4 border-b border-gray-200">${t.resources.title}</h3> <ul class="space-y-3"> ${validatedNavigation.resources.map((item) => renderTemplate`<li> <a${addAttribute(`/${lang}${item.href}`, "href")} class="text-gray-600 hover:text-primary-600 transition-colors duration-300 flex items-center group"> <span class="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all duration-300"></span> ${item.name} </a> </li>`)} </ul> </div> <!-- Contact Column --> <div class="md:col-span-4"> <h3 class="text-base font-semibold text-gray-900 pb-2 mb-4 border-b border-gray-200">${t.contact.title}</h3> <ul class="space-y-4"> <li class="text-gray-600 flex items-start"> ${renderComponent($$result2, "Phone", $$Phone, { "class": "h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" })} <a href="tel:+86XXXXXXXXXX" class="hover:text-primary-600 transition-colors duration-300">+86 XXX XXX XXXX</a> </li> <li class="text-gray-600 flex items-start"> ${renderComponent($$result2, "Mail", $$Mail, { "class": "h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" })} <a href="mailto:info@studybridge.com" class="hover:text-primary-600 transition-colors duration-300">info@studybridge.com</a> </li> <li class="text-gray-600 flex items-start"> ${renderComponent($$result2, "MapPin", $$MapPin, { "class": "h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" })} <span>${t.contact.address}</span> </li> </ul> <!-- Newsletter --> <div class="mt-6 pt-6 border-t border-gray-200"> <h4 class="text-sm font-semibold text-gray-800 mb-3">${t.newsletter.title}</h4> <form class="relative"> <input type="email" required${addAttribute(t.newsletter.placeholder, "placeholder")} class="block w-full rounded-full border border-gray-300 bg-white px-4 py-3 pr-12 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 text-sm transition-all duration-300"> <button type="submit" class="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-primary-600 p-2.5 text-white hover:bg-primary-700 transition-all duration-300 shadow-sm hover:shadow-md"${addAttribute(t.newsletter.subscribe, "aria-label")}> ${renderComponent($$result2, "Send", $$Send, { "class": "h-4 w-4" })} </button> </form> <p class="mt-2 text-xs text-gray-500">${t.newsletter.description}</p> </div> </div> </div> <!-- Copyright --> <div class="mt-12 pt-8 border-t border-gray-200"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-sm text-gray-500 mb-4 md:mb-0">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Study Bridge. ${t.copyright.rights} </p> <div class="flex space-x-6 text-xs text-gray-500"> <a${addAttribute(`/${lang}/privacy`, "href")} class="hover:text-primary-600 transition-colors duration-300">${t.copyright.privacy}</a> <a${addAttribute(`/${lang}/terms`, "href")} class="hover:text-primary-600 transition-colors duration-300">${t.copyright.terms}</a> <a${addAttribute(`/${lang}/sitemap`, "href")} class="hover:text-primary-600 transition-colors duration-300">${t.copyright.sitemap}</a> </div> </div> </div> </div> ` })} </footer>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/layout/Footer.astro", void 0);
export {
  $$Footer as $,
  $$Index as a
};
