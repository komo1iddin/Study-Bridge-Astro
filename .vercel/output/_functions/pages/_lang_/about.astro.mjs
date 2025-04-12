import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from "../../chunks/vendor_BkHgkSTi.mjs";
import { q } from "../../chunks/vendor_BkHgkSTi.mjs";
import "kleur/colors";
import { l as languages, $ as $$SectionHeader } from "../../chunks/ui_CkL6hZGM.mjs";
import { $ as $$Layout } from "../../chunks/Layout_CkcAm6nx.mjs";
import "clsx";
/* empty css                                    */
import { j as $$GraduationCap, M as $$Briefcase, V as $$Linkedin, w as $$Twitter, p as $$Mail, E as $$Clock, y as $$School, i as $$Users, h as $$Award, Y as $$Heart, Z as $$Target, b as $$ArrowRight } from "../../chunks/icons_DMAatXJH.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_D2yKI7Sd.mjs";
const $$Astro$3 = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-6"> ${items.map((item, index) => renderTemplate`<div class="border-l-4 border-primary-500 pl-4" data-aos="fade-up"${addAttribute(100 * index, "data-aos-delay")}> <p class="text-primary-600 font-bold">${item.year}</p> <h3 class="text-xl font-semibold text-gray-900 mb-2">${item.title}</h3> <p class="text-gray-600">${item.description}</p> </div>`)} </div>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/about/Timeline.astro", void 0);
const $$Astro$2 = createAstro();
const $$TeamMember = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TeamMember;
  const { name, role, image, bio, education, social } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group h-full flex flex-col relative overflow-hidden rounded-2xl bg-white p-10 transition-all hover:shadow-xl border border-gray-200" data-aos="fade-up" data-astro-cid-mkmdwvpl> <div class="relative z-10 flex flex-col items-center flex-1" data-astro-cid-mkmdwvpl> <!-- Avatar --> <div class="relative h-64 w-64 mb-6 overflow-hidden rounded-full" data-astro-cid-mkmdwvpl> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110" data-astro-cid-mkmdwvpl> </div> <!-- Content --> <div class="flex flex-col items-center flex-1 w-full" data-astro-cid-mkmdwvpl> <h3 class="text-xl font-bold text-gray-800 mb-2" data-astro-cid-mkmdwvpl>${name}</h3> <p class="text-primary-600 font-medium mb-6" data-astro-cid-mkmdwvpl>${role}</p> <!-- Info container --> <div class="w-full space-y-4 mb-6" data-astro-cid-mkmdwvpl> <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100" data-astro-cid-mkmdwvpl> <div class="w-8 flex justify-center" data-astro-cid-mkmdwvpl> ${renderComponent($$result, "GraduationCap", $$GraduationCap, { "className": "h-5 w-5 text-gray-600", "data-astro-cid-mkmdwvpl": true })} </div> <p class="text-sm text-gray-600 flex-1" data-astro-cid-mkmdwvpl>${education}</p> </div> <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100" data-astro-cid-mkmdwvpl> <div class="w-8 flex justify-center" data-astro-cid-mkmdwvpl> ${renderComponent($$result, "Briefcase", $$Briefcase, { "className": "h-5 w-5 text-gray-600", "data-astro-cid-mkmdwvpl": true })} </div> <p class="text-sm text-gray-600 flex-1" data-astro-cid-mkmdwvpl>${bio}</p> </div> </div> <!-- Social Links --> <div class="flex gap-4 mb-6" data-astro-cid-mkmdwvpl> ${social.map(({ name: socialName, url }) => renderTemplate`<a${addAttribute(url, "href")} class="text-gray-400 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer" data-astro-cid-mkmdwvpl> ${socialName === "linkedin" ? renderTemplate`${renderComponent($$result, "Linkedin", $$Linkedin, { "className": "h-5 w-5", "data-astro-cid-mkmdwvpl": true })}` : socialName === "twitter" ? renderTemplate`${renderComponent($$result, "Twitter", $$Twitter, { "className": "h-5 w-5", "data-astro-cid-mkmdwvpl": true })}` : null} </a>`)} </div> <!-- Contact Button --> <div class="w-full mt-auto" data-astro-cid-mkmdwvpl> <button onclick="window.uiStore.toggleContactModal(true)" class="w-full flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm text-white transition-all hover:bg-primary-700 hover:shadow-md border border-primary-500" data-astro-cid-mkmdwvpl> ${renderComponent($$result, "Mail", $$Mail, { "className": "h-4 w-4", "data-astro-cid-mkmdwvpl": true })} <span data-astro-cid-mkmdwvpl>Bog'lanish</span> </button> </div> </div> </div> </div> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/about/TeamMember.astro", void 0);
const $$Astro$1 = createAstro();
const $$Values = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Values;
  const { values: values2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-10"> ${values2.map((value, index) => renderTemplate`<div class="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up"${addAttribute(100 * index, "data-aos-delay")}> <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-100 text-primary-600 mb-6"> ${renderComponent($$result, "value.icon", value.icon, { "size": 32 })} </div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">${value.title}</h3> <p class="text-gray-600 text-lg">${value.description}</p> </div>`)} </div>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/about/Values.astro", void 0);
const stats = [
  { value: "1000+", label: "students.count" },
  { value: "50+", label: "universities.count" },
  { value: "95%", label: "success.rate" },
  { value: "10+", label: "experience.years" }
];
const achievements = [
  {
    title: "achievements.experience.title",
    value: "10+ yil",
    description: "achievements.experience.description",
    icon: $$Clock
  },
  {
    title: "achievements.network.title",
    value: "50+ universitet",
    description: "achievements.network.description",
    icon: $$School
  },
  {
    title: "achievements.success.title",
    value: "1000+ talaba",
    description: "achievements.success.description",
    icon: $$Users
  }
];
const values = [
  {
    title: "values.quality.title",
    description: "values.quality.description",
    icon: $$Award
  },
  {
    title: "values.trust.title",
    description: "values.trust.description",
    icon: $$Heart
  },
  {
    title: "values.results.title",
    description: "values.results.description",
    icon: $$Target
  }
];
const timeline = [
  {
    year: "2013",
    title: "timeline.foundation.title",
    description: "timeline.foundation.description"
  },
  {
    year: "2015",
    title: "timeline.partnership.title",
    description: "timeline.partnership.description"
  },
  {
    year: "2018",
    title: "timeline.students.title",
    description: "timeline.students.description"
  },
  {
    year: "2023",
    title: "timeline.universities.title",
    description: "timeline.universities.description"
  }
];
const teamMembers = [
  {
    name: "Avaz Nishonboyev",
    role: "Direktor",
    image: "/images/team/Avaz_Nishonboyev.jpg",
    bio: "Xalqaro ta'lim sohasida 2+ yillik tajriba",
    education: "Pekin universiteti, Xalqaro ta'lim magistri",
    social: [
      { name: "linkedin", url: "#" },
      { name: "twitter", url: "#" }
    ]
  },
  {
    name: "Maxmud Maxmudov",
    role: "Xitoydagi ta'lim agenti",
    image: "/images/team/Maxmud_Maxmudov.jpg",
    bio: "Xitoydagi ta'lim dasturlari bo'yicha mutaxassis",
    education: "Shanghai universiteti, Ta'lim boshqaruvi magistri",
    social: [
      { name: "linkedin", url: "#" },
      { name: "twitter", url: "#" }
    ]
  },
  {
    name: "Shuxrat Usmonov",
    role: "Konsultant",
    image: "/images/team/Shuxrat_Usmonov.jpg",
    bio: "Grantlar va stipendiyalar bo'yicha mutaxassis",
    education: "Tsinghua universiteti, Xalqaro munosabatlar magistri",
    social: [
      { name: "linkedin", url: "#" },
      { name: "twitter", url: "#" }
    ]
  }
];
const $$Astro = createAstro();
const prerender = false;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/about");
  }
  const meta = {
    title: "About Us - EduChina",
    description: "Learn about our mission to help students study in China"
  };
  const breadcrumbItems = [
    { label: "Home", href: `/${lang}` },
    { label: "About Us", href: `/${lang}/about` }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "data-astro-cid-xxsk6khd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white" data-astro-cid-xxsk6khd> <!-- Page Header Section --> <section class="relative bg-gradient-to-br from-blue-50 to-white py-16 overflow-hidden" data-astro-cid-xxsk6khd> <div class="absolute inset-0 overflow-hidden" data-astro-cid-xxsk6khd> <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl" data-astro-cid-xxsk6khd></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl" data-astro-cid-xxsk6khd></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-astro-cid-xxsk6khd> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "class": "mb-8", "data-astro-cid-xxsk6khd": true })} <div class="max-w-3xl" data-astro-cid-xxsk6khd> <h1 class="text-4xl font-bold text-gray-900 mb-6" data-astro-cid-xxsk6khd>${meta.title}</h1> <p class="text-xl text-gray-600 leading-relaxed mb-8" data-astro-cid-xxsk6khd>
Learn about our mission, values, and the team behind EduChina
</p> <div class="flex flex-wrap gap-4" data-astro-cid-xxsk6khd> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300" data-astro-cid-xxsk6khd>
Contact Us
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-xxsk6khd": true })} </button> </div> </div> </div> </section> <!-- Stats Section --> <section class="py-16 bg-white" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxsk6khd> <div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-astro-cid-xxsk6khd> ${stats.map((stat, index) => renderTemplate`<div class="bg-white p-6 rounded-xl border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-xxsk6khd> <div class="text-3xl font-bold text-primary-600 mb-2" data-astro-cid-xxsk6khd>${stat.value}</div> <div class="text-gray-600" data-astro-cid-xxsk6khd>${stat.label}</div> </div>`)} </div> </div> </section> <div class="w-full h-px bg-gray-200" data-astro-cid-xxsk6khd></div> <!-- Our Story Section --> <section class="py-20 bg-gradient-to-br from-gray-50 to-white" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxsk6khd> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Our Story", "subtitle": "The journey of EduChina from the beginning", "data-astro-cid-xxsk6khd": true })} <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center" data-astro-cid-xxsk6khd> <div class="mb-10 lg:mb-0" data-aos="fade-right" data-astro-cid-xxsk6khd> <div class="relative rounded-xl overflow-hidden shadow-xl" data-astro-cid-xxsk6khd> <img src="/images/hero/campus.jpg" alt="Our Campus" class="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105" data-astro-cid-xxsk6khd> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" data-astro-cid-xxsk6khd></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-white" data-astro-cid-xxsk6khd> <p class="text-lg font-medium" data-astro-cid-xxsk6khd>10+ Years of Experience</p> <p class="text-sm opacity-90" data-astro-cid-xxsk6khd>Helping students achieve their dreams</p> </div> </div> </div> <div data-aos="fade-left" data-astro-cid-xxsk6khd> <div class="space-y-6 mb-8" data-astro-cid-xxsk6khd> <p class="text-lg text-gray-600" data-astro-cid-xxsk6khd>
Founded with a vision to bridge educational gaps between China and Uzbekistan, we've been helping students for over a decade.
</p> <p class="text-lg text-gray-600" data-astro-cid-xxsk6khd>
We partner with top universities across China to provide the best opportunities for our students.
</p> </div> ${renderComponent($$result2, "Timeline", $$Timeline, { "items": timeline.map((item) => ({
    ...item,
    title: item.title,
    description: item.description
  })), "data-astro-cid-xxsk6khd": true })} </div> </div> </div> </section> <div class="w-full h-px bg-gray-200" data-astro-cid-xxsk6khd></div> <!-- Mission & Values Section --> <section class="py-20 bg-white" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxsk6khd> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Our Values", "subtitle": "The principles that guide our work", "data-astro-cid-xxsk6khd": true })} ${renderComponent($$result2, "Values", $$Values, { "values": values.map((value) => ({
    ...value,
    title: value.title,
    description: value.description
  })), "data-astro-cid-xxsk6khd": true })} </div> </section> <div class="w-full h-px bg-gray-200" data-astro-cid-xxsk6khd></div> <!-- Achievements Section --> <section class="py-20 bg-gradient-to-br from-gray-50 to-white" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxsk6khd> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-xxsk6khd> ${achievements.map((achievement, index) => renderTemplate`<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-xxsk6khd> <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-6" data-astro-cid-xxsk6khd> ${renderComponent($$result2, "achievement.icon", achievement.icon, { "class": "w-6 h-6", "data-astro-cid-xxsk6khd": true })} </div> <h3 class="text-xl font-bold text-gray-900 mb-4" data-astro-cid-xxsk6khd>${achievement.title}</h3> <p class="text-gray-600 mb-4" data-astro-cid-xxsk6khd>${achievement.description}</p> <div class="text-2xl font-bold text-primary-600" data-astro-cid-xxsk6khd>${achievement.value}</div> </div>`)} </div> </div> </section> <div class="w-full h-px bg-gray-200" data-astro-cid-xxsk6khd></div> <!-- Team Section --> <section class="py-20 bg-white" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxsk6khd> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Our Team", "subtitle": "Meet the professionals behind EduChina", "data-astro-cid-xxsk6khd": true })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-xxsk6khd> ${teamMembers.map((member) => renderTemplate`${renderComponent($$result2, "TeamMember", $$TeamMember, { ...member, "data-astro-cid-xxsk6khd": true })}`)} </div> </div> </section> <div class="w-full h-px bg-gray-200" data-astro-cid-xxsk6khd></div> <!-- CTA Section --> <section class="py-20 bg-primary-600" data-astro-cid-xxsk6khd> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-xxsk6khd> <div class="max-w-3xl mx-auto" data-astro-cid-xxsk6khd> <h2 class="text-3xl font-bold text-white mb-6" data-astro-cid-xxsk6khd>
Ready to Start Your Educational Journey?
</h2> <p class="text-xl text-primary-100 mb-8" data-astro-cid-xxsk6khd>
Contact us today to learn more about studying in China
</p> <button onclick="window.uiStore.toggleContactModal(true)" class="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-xxsk6khd>
Contact Us Now
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-xxsk6khd": true })} </button> </div> </div> </section> </div> ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/about.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$About, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  q as renderers
};
