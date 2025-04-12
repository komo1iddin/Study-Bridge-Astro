import { c as createComponent, a as createAstro } from "../chunks/vendor_fPK89n42.mjs";
import { q } from "../chunks/vendor_fPK89n42.mjs";
import "kleur/colors";
import "clsx";
import { e as defaultLang } from "../chunks/ui_BAsHSPwd.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect(`/${defaultLang}/`, 301);
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/index.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Index, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
