import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from "./vendor_BAzprikM.mjs";
import "kleur/colors";
import { g as getLangFromUrl, u as useTranslations } from "./ui_DFpIJiEG.mjs";
/* empty css                         */
import { c as $$Home, d as $$ChevronRight } from "./icons_GFS7fkbb.mjs";
const $$Astro = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items, class: className = "", showHome = true } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`breadcrumbs ${className}`, "class")} aria-label="Breadcrumbs" data-astro-cid-4njbzevx> <ol class="breadcrumbs-list" data-astro-cid-4njbzevx> ${showHome && renderTemplate`<li class="breadcrumbs-item" data-astro-cid-4njbzevx> <a${addAttribute(`/${lang}`, "href")} class="breadcrumbs-link" data-astro-cid-4njbzevx> ${renderComponent($$result, "Home", $$Home, { "class": "icon", "data-astro-cid-4njbzevx": true })} <span data-astro-cid-4njbzevx>${t("nav.home")}</span> </a> </li>`} ${items.map((item) => renderTemplate`<li class="breadcrumbs-item" data-astro-cid-4njbzevx> ${renderComponent($$result, "ChevronRight", $$ChevronRight, { "class": "icon separator", "data-astro-cid-4njbzevx": true })} ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="breadcrumbs-link" data-astro-cid-4njbzevx> ${item.label} </a>` : renderTemplate`<span class="breadcrumbs-text" data-astro-cid-4njbzevx>${item.label}</span>`} </li>`)} </ol> </nav> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/navigation/Breadcrumbs.astro", void 0);
export {
  $$Breadcrumbs as $
};
