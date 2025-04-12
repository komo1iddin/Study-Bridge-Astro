import "kleur/colors";
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent } from "./vendor_fPK89n42.mjs";
import "clsx";
import { s as sanitize_props, r as rest_props, p as push, f as fallback, e as ensure_array_like, c as spread_attributes, d as clsx, g as element, h as slot, b as bind_props, a as pop, i as spread_props } from "./svelte-vendor_tqOFL8AJ.mjs";
const $$Astro$U = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/.Layout.astro", void 0);
const $$Astro$T = createAstro();
const $$AlertCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$AlertCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-alert", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <line x1="12" x2="12" y1="8" y2="12"></line> <line x1="12" x2="12.01" y1="16" y2="16"></line> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/AlertCircle.astro", void 0);
const $$Astro$S = createAstro();
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);
const $$Astro$R = createAstro();
const $$Award = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$Award;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "award", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path> <circle cx="12" cy="8" r="6"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Award.astro", void 0);
const $$Astro$Q = createAstro();
const $$Book = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Book;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Book.astro", void 0);
const $$Astro$P = createAstro();
const $$BookOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$BookOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 7v14"></path> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/BookOpen.astro", void 0);
const $$Astro$O = createAstro();
const $$Brain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$Brain;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "brain", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path> <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path> <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path> <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path> <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path> <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path> <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path> <path d="M6 18a4 4 0 0 1-1.967-.516"></path> <path d="M19.967 17.484A4 4 0 0 1 18 18"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Brain.astro", void 0);
const $$Astro$N = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "briefcase", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> <rect width="20" height="14" x="2" y="6" rx="2"></rect> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Briefcase.astro", void 0);
const $$Astro$M = createAstro();
const $$Building = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Building;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "building", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect> <path d="M9 22v-4h6v4"></path> <path d="M8 6h.01"></path> <path d="M16 6h.01"></path> <path d="M12 6h.01"></path> <path d="M12 10h.01"></path> <path d="M12 14h.01"></path> <path d="M16 10h.01"></path> <path d="M16 14h.01"></path> <path d="M8 10h.01"></path> <path d="M8 14h.01"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Building.astro", void 0);
const $$Astro$L = createAstro();
const $$Building2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Building2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "building-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path> <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path> <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path> <path d="M10 6h4"></path> <path d="M10 10h4"></path> <path d="M10 14h4"></path> <path d="M10 18h4"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Building2.astro", void 0);
const $$Astro$K = createAstro();
const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <rect width="18" height="18" x="3" y="4" rx="2"></rect> <path d="M3 10h18"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Calendar.astro", void 0);
const $$Astro$J = createAstro();
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 6 9 17l-5-5"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Check.astro", void 0);
const $$Astro$I = createAstro();
const $$CheckCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$CheckCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-check-big", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21.801 10A10 10 0 1 1 17 3.335"></path> <path d="m9 11 3 3L22 4"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/CheckCircle.astro", void 0);
const $$Astro$H = createAstro();
const $$CheckCircle2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$CheckCircle2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/CheckCircle2.astro", void 0);
const $$Astro$G = createAstro();
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);
const $$Astro$F = createAstro();
const $$ChevronLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$ChevronLeft;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-left", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15 18-6-6 6-6"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/ChevronLeft.astro", void 0);
const $$Astro$E = createAstro();
const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);
const $$Astro$D = createAstro();
const $$Clock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Clock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "clock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <polyline points="12 6 12 12 16 14"></polyline> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Clock.astro", void 0);
const $$Astro$C = createAstro();
const $$Compass = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Compass;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "compass", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path> <circle cx="12" cy="12" r="10"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Compass.astro", void 0);
const $$Astro$B = createAstro();
const $$Copy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Copy;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "copy", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Copy.astro", void 0);
const $$Astro$A = createAstro();
const $$DollarSign = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$DollarSign;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "dollar-sign", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="12" x2="12" y1="2" y2="22"></line> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/DollarSign.astro", void 0);
const $$Astro$z = createAstro();
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "facebook", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Facebook.astro", void 0);
const $$Astro$y = createAstro();
const $$FileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$FileCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="m9 15 2 2 4-4"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/FileCheck.astro", void 0);
const $$Astro$x = createAstro();
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/FileText.astro", void 0);
const $$Astro$w = createAstro();
const $$Globe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Globe;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "globe", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Globe.astro", void 0);
const $$Astro$v = createAstro();
const $$GraduationCap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$GraduationCap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "graduation-cap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/GraduationCap.astro", void 0);
const $$Astro$u = createAstro();
const $$Heart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Heart;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "heart", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Heart.astro", void 0);
const $$Astro$t = createAstro();
const $$HelpCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$HelpCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-help", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path> <path d="M12 17h.01"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/HelpCircle.astro", void 0);
const $$Astro$s = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "house", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path> <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Home.astro", void 0);
const $$Astro$r = createAstro();
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "instagram", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Instagram.astro", void 0);
const $$Astro$q = createAstro();
const $$Languages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Languages;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "languages", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m5 8 6 6"></path> <path d="m4 14 6-6 2-3"></path> <path d="M2 5h12"></path> <path d="M7 2h1"></path> <path d="m22 22-5-10-5 10"></path> <path d="M14 18h6"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Languages.astro", void 0);
const $$Astro$p = createAstro();
const $$Link2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Link2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "link-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9 17H7A5 5 0 0 1 7 7h2"></path> <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path> <line x1="8" x2="16" y1="12" y2="12"></line> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Link2.astro", void 0);
const $$Astro$o = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Linkedin.astro", void 0);
const $$Astro$n = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Mail.astro", void 0);
const $$Astro$m = createAstro();
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/MapPin.astro", void 0);
const $$Astro$l = createAstro();
const $$MessageCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MessageCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/MessageCircle.astro", void 0);
const $$Astro$k = createAstro();
const $$MessageCircleQuestion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MessageCircleQuestion;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle-question", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path> <path d="M12 17h.01"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/MessageCircleQuestion.astro", void 0);
const $$Astro$j = createAstro();
const $$MessageSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MessageSquare;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-square", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/MessageSquare.astro", void 0);
const $$Astro$i = createAstro();
const $$MoreHorizontal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MoreHorizontal;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "ellipsis", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="1"></circle> <circle cx="19" cy="12" r="1"></circle> <circle cx="5" cy="12" r="1"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/MoreHorizontal.astro", void 0);
const $$Astro$h = createAstro();
const $$PenTool = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$PenTool;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "pen-tool", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path> <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path> <path d="m2.3 2.3 7.286 7.286"></path> <circle cx="11" cy="11" r="2"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/PenTool.astro", void 0);
const $$Astro$g = createAstro();
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Phone.astro", void 0);
const $$Astro$f = createAstro();
const $$Rocket = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Rocket;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "rocket", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path> <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path> <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Rocket.astro", void 0);
const $$Astro$e = createAstro();
const $$School = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$School;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "school", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14 22v-4a2 2 0 1 0-4 0v4"></path> <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"></path> <path d="M18 5v17"></path> <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"></path> <path d="M6 5v17"></path> <circle cx="12" cy="9" r="2"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/School.astro", void 0);
const $$Astro$d = createAstro();
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "search", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Search.astro", void 0);
const $$Astro$c = createAstro();
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Send.astro", void 0);
const $$Astro$b = createAstro();
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Share;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "share", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path> <polyline points="16 6 12 2 8 6"></polyline> <line x1="12" x2="12" y1="2" y2="15"></line> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Share.astro", void 0);
const $$Astro$a = createAstro();
const $$Stamp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Stamp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "stamp", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 22h14"></path> <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"></path> <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Stamp.astro", void 0);
const $$Astro$9 = createAstro();
const $$Star = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Star;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "star", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Star.astro", void 0);
const $$Astro$8 = createAstro();
const $$Target = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Target;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "target", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Target.astro", void 0);
const $$Astro$7 = createAstro();
const $$TrendingUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TrendingUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trending-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline> <polyline points="16 7 22 7 22 13"></polyline> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/TrendingUp.astro", void 0);
const $$Astro$6 = createAstro();
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "twitter", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Twitter.astro", void 0);
const $$Astro$5 = createAstro();
const $$Upload = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Upload;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "upload", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <polyline points="17 8 12 3 7 8"></polyline> <line x1="12" x2="12" y1="3" y2="15"></line> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Upload.astro", void 0);
const $$Astro$4 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "user", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/User.astro", void 0);
const $$Astro$3 = createAstro();
const $$Users = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "users", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Users.astro", void 0);
const $$Astro$2 = createAstro();
const $$Wallet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wallet;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "wallet", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path> <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Wallet.astro", void 0);
const $$Astro$1 = createAstro();
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/X.astro", void 0);
const $$Astro = createAstro();
const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youtube;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "youtube", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path> <path d="m10 15 5-3-5-3z"></path> ` })}`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/node_modules/lucide-astro/dist/Youtube.astro", void 0);
/**
* @license lucide-svelte v0.483.0 - ISC
*
* ISC License
* 
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
* 
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
* 
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* 
*/
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Arrow_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Building_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
      }
    ],
    [
      "path",
      { "d": "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }
    ],
    [
      "path",
      {
        "d": "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
      }
    ],
    ["path", { "d": "M10 6h4" }],
    ["path", { "d": "M10 10h4" }],
    ["path", { "d": "M10 14h4" }],
    ["path", { "d": "M10 18h4" }]
  ];
  Icon($$payload, spread_props([
    { name: "building-2" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Circle_check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$payload, spread_props([
    { name: "circle-check" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Clock($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  Icon($$payload, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Hand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }
    ],
    [
      "path",
      { "d": "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }
    ],
    [
      "path",
      {
        "d": "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"
      }
    ],
    [
      "path",
      {
        "d": "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "hand" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Send($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { "d": "m21.854 2.147-10.94 10.939" }]
  ];
  Icon($$payload, spread_props([
    { name: "send" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function User($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
export {
  $$MessageCircleQuestion as $,
  Arrow_right as A,
  $$Search as B,
  Chevron_right as C,
  $$Upload as D,
  $$Clock as E,
  $$BookOpen as F,
  $$User as G,
  Hand as H,
  $$Star as I,
  $$Compass as J,
  $$FileCheck as K,
  $$PenTool as L,
  $$Briefcase as M,
  $$Globe as N,
  $$Check as O,
  $$X as P,
  $$DollarSign as Q,
  $$Share as R,
  $$Copy as S,
  $$Book as T,
  $$Link2 as U,
  $$Linkedin as V,
  $$AlertCircle as W,
  $$ChevronLeft as X,
  $$Heart as Y,
  $$Target as Z,
  $$MoreHorizontal as _,
  $$Phone as a,
  Send as a0,
  User as a1,
  Users as a2,
  Building_2 as a3,
  Clock as a4,
  $$Building2 as a5,
  $$TrendingUp as a6,
  Circle_check as a7,
  $$CheckCircle2 as a8,
  $$Brain as a9,
  $$Rocket as aa,
  $$ArrowRight as b,
  $$Home as c,
  $$ChevronRight as d,
  $$ChevronDown as e,
  $$HelpCircle as f,
  $$CheckCircle as g,
  $$Award as h,
  $$Users as i,
  $$GraduationCap as j,
  $$Building as k,
  $$Stamp as l,
  $$Languages as m,
  $$Wallet as n,
  $$FileText as o,
  $$Mail as p,
  $$MessageSquare as q,
  $$Send as r,
  $$MapPin as s,
  $$Facebook as t,
  $$Instagram as u,
  $$Youtube as v,
  $$Twitter as w,
  $$MessageCircle as x,
  $$School as y,
  $$Calendar as z
};
