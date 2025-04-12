import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderComponent, n as renderScript, d as renderTemplate } from "./vendor_BAzprikM.mjs";
import "kleur/colors";
import { b as getAllFAQ } from "./university-features_sJEkhT2g.mjs";
import { b as getFAQTranslations, $ as $$SectionHeader, c as $$ContactButton } from "./ui_DFpIJiEG.mjs";
/* empty css                         */
import { e as $$ChevronDown, f as $$HelpCircle, g as $$CheckCircle, h as $$Award, i as $$Users, j as $$GraduationCap, k as $$Building, l as $$Stamp, m as $$Languages, n as $$Wallet, o as $$FileText } from "./icons_GFS7fkbb.mjs";
const $$Astro = createAstro();
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { lang = "uz" } = Astro2.props;
  const t = getFAQTranslations(lang);
  const faqItems = await getAllFAQ(lang);
  const sortedFaqItems = faqItems.sort((a, b) => {
    const orderA = a.data.order !== void 0 ? a.data.order : 999;
    const orderB = b.data.order !== void 0 ? b.data.order : 999;
    return orderA - orderB;
  });
  function getIcon(category = "") {
    switch (category.toLowerCase()) {
      case "documents":
      case "admission":
        return $$FileText;
      case "costs":
      case "fees":
        return $$Wallet;
      case "language":
        return $$Languages;
      case "visa":
        return $$Stamp;
      case "accommodation":
        return $$Building;
      case "graduation":
        return $$GraduationCap;
      case "students":
        return $$Users;
      case "achievements":
        return $$Award;
      case "requirements":
        return $$CheckCircle;
      default:
        return $$HelpCircle;
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="section-container" id="faq" data-aos="fade-up" data-astro-cid-ro5xqozj> <div class="max-w-2xl mx-auto" data-astro-cid-ro5xqozj> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": t.title, "subtitle": t.subtitle, "data-astro-cid-ro5xqozj": true })} <div class="space-y-4" data-astro-cid-ro5xqozj> ${sortedFaqItems.map((item) => {
    const Icon = getIcon(item.data.category);
    return renderTemplate`<div class="overflow-hidden group transition-all duration-300 rounded-xl
              border border-gray-200
              bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.9),rgba(255,255,255,0.8))]
              backdrop-blur-[10px]
              shadow-[0_1px_3px_0px_rgba(0,0,0,0.06)]
              hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
              hover:border-[rgba(59,130,246,0.2)]" data-astro-cid-ro5xqozj> <details class="group/details" data-astro-cid-ro5xqozj> <summary class="flex items-center justify-between cursor-pointer list-none p-4" data-astro-cid-ro5xqozj> <div class="flex items-center gap-3" data-astro-cid-ro5xqozj> <div class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" data-astro-cid-ro5xqozj> ${renderComponent($$result, "Icon", Icon, { "class": "w-5 h-5 text-primary", "data-astro-cid-ro5xqozj": true })} </div> <span class="text-base font-medium text-gray-800 group-hover:text-primary transition-colors" data-astro-cid-ro5xqozj> ${item.data.question[lang]} </span> </div> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-5 h-5 text-primary/70 flex-shrink-0 group-open/details:rotate-180 transition-transform", "data-astro-cid-ro5xqozj": true })} </summary> <div class="pl-16 pr-4 pb-4 text-gray-600 faq-content" data-astro-cid-ro5xqozj> ${// Format the answer with proper styling if it contains line breaks
    item.data.answer && item.data.answer[lang] && item.data.answer[lang].includes("\n") ? renderTemplate`<div class="formatted-answer" data-astro-cid-ro5xqozj> ${item.data.answer[lang].split("\n").map((line, _index) => {
      if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
        return renderTemplate`<div class="flex items-start gap-2 my-1.5" data-astro-cid-ro5xqozj> <div class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" data-astro-cid-ro5xqozj></div> <div data-astro-cid-ro5xqozj>${line.replace(/^[\s\-\•]+/, "")}</div> </div>`;
      } else if (/^\d+[\.:].+:$/.test(line.trim())) {
        return renderTemplate`<h4 class="font-medium text-gray-800 mt-3 mb-1" data-astro-cid-ro5xqozj>${line}</h4>`;
      } else if (line.includes(":")) {
        const [key, value] = line.split(":");
        if (value && key.length < 25) {
          return renderTemplate`<div class="my-1.5" data-astro-cid-ro5xqozj> <span class="font-medium text-gray-800" data-astro-cid-ro5xqozj>${key}:</span> <span data-astro-cid-ro5xqozj>${value}</span> </div>`;
        }
      }
      return line.trim() ? renderTemplate`<p class="my-1.5" data-astro-cid-ro5xqozj>${line}</p>` : null;
    })} </div>` : renderTemplate`<p data-astro-cid-ro5xqozj>${item.data.answer[lang]}</p>`} </div> </details> </div>`;
  })} </div> <!-- Help Section --> <div class="mt-10 text-center" data-astro-cid-ro5xqozj> <p class="text-base text-gray-600 mb-3" data-astro-cid-ro5xqozj> ${t.notFoundQuestion} </p> <div class="container" data-astro-cid-ro5xqozj> <!-- Мобильная кнопка (скрыта на десктопе) --> <div class="text-center mt-12" data-astro-cid-ro5xqozj> ${renderComponent($$result, "ContactButton", $$ContactButton, { "text": t.askQuestion, "variant": "mobile", "showOnDesktop": false, "data-astro-cid-ro5xqozj": true })} </div> <!-- Десктопная кнопка (скрыта на мобильных) --> <div class="text-center mt-12" data-astro-cid-ro5xqozj> ${renderComponent($$result, "ContactButton", $$ContactButton, { "text": t.askQuestion, "variant": "desktop", "showOnMobile": false, "data-astro-cid-ro5xqozj": true })} </div> </div> </div> </div> </section>  ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/faq/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/faq/FAQ.astro", void 0);
export {
  $$FAQ as $
};
