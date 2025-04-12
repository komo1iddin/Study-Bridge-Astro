import { q as renderers, k as createExports } from "./chunks/vendor_fPK89n42.mjs";
import { a as actions } from "./chunks/_noop-actions_Ch05GQ0B.mjs";
import { manifest } from "./manifest_E_-R_rkM.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/admin/readme.astro.mjs");
const _page2 = () => import("./pages/admin/translations.astro.mjs");
const _page3 = () => import("./pages/admin.astro.mjs");
const _page4 = () => import("./pages/_lang_/about.astro.mjs");
const _page5 = () => import("./pages/_lang_/blog/_id_.astro.mjs");
const _page6 = () => import("./pages/_lang_/blog.astro.mjs");
const _page7 = () => import("./pages/_lang_/contacts.astro.mjs");
const _page8 = () => import("./pages/_lang_/faq.astro.mjs");
const _page9 = () => import("./pages/_lang_/grants/_id_.astro.mjs");
const _page10 = () => import("./pages/_lang_/grants.astro.mjs");
const _page11 = () => import("./pages/_lang_/programs/bachelor.astro.mjs");
const _page12 = () => import("./pages/_lang_/programs/language.astro.mjs");
const _page13 = () => import("./pages/_lang_/programs/master.astro.mjs");
const _page14 = () => import("./pages/_lang_/programs/_type_/_id_.astro.mjs");
const _page15 = () => import("./pages/_lang_/programs.astro.mjs");
const _page16 = () => import("./pages/_lang_/student-path.astro.mjs");
const _page17 = () => import("./pages/_lang_/testimonials.astro.mjs");
const _page18 = () => import("./pages/_lang_/universities/_id_.astro.mjs");
const _page19 = () => import("./pages/_lang_/universities.astro.mjs");
const _page20 = () => import("./pages/_lang_.astro.mjs");
const _page21 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/admin/README.md", _page1],
  ["src/pages/admin/translations.astro", _page2],
  ["src/pages/admin/index.astro", _page3],
  ["src/pages/[lang]/about.astro", _page4],
  ["src/pages/[lang]/blog/[id].astro", _page5],
  ["src/pages/[lang]/blog/index.astro", _page6],
  ["src/pages/[lang]/contacts.astro", _page7],
  ["src/pages/[lang]/faq.astro", _page8],
  ["src/pages/[lang]/grants/[id].astro", _page9],
  ["src/pages/[lang]/grants.astro", _page10],
  ["src/pages/[lang]/programs/bachelor/index.astro", _page11],
  ["src/pages/[lang]/programs/language/index.astro", _page12],
  ["src/pages/[lang]/programs/master/index.astro", _page13],
  ["src/pages/[lang]/programs/[type]/[id].astro", _page14],
  ["src/pages/[lang]/programs/index.astro", _page15],
  ["src/pages/[lang]/student-path.astro", _page16],
  ["src/pages/[lang]/testimonials.astro", _page17],
  ["src/pages/[lang]/universities/[id].astro", _page18],
  ["src/pages/[lang]/universities/index.astro", _page19],
  ["src/pages/[lang]/index.astro", _page20],
  ["src/pages/index.astro", _page21]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions,
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "430f9f31-e7cd-4ef4-a79d-b6744e8d7a80",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
