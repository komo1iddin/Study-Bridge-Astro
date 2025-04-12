import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../chunks/vendor_BAzprikM.mjs";
import { t } from "../../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_DMdNbTih.mjs";
import { l as languages, i as getTranslation } from "../../chunks/ui_DFpIJiEG.mjs";
import { c as getCollection } from "../../chunks/university-features_sJEkhT2g.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_B0JlxQ9v.mjs";
/* empty css                                     */
import { d as $$ChevronRight, y as $$School, g as $$CheckCircle, b as $$ArrowRight, z as $$Calendar, B as $$Search, o as $$FileText, D as $$Upload, E as $$Clock, F as $$BookOpen, h as $$Award, G as $$User } from "../../chunks/icons_GFS7fkbb.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Grants = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grants;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const grants = await getCollection("grants");
  const grantsData = grants.map((entry) => ({
    type: entry.data.type,
    slug: entry.id.replace(".yaml", ""),
    title: entry.data.title.uz,
    coverage: entry.data.coverage?.uz || [],
    requirements: entry.data.requirements?.uz || [],
    deadline: entry.data.deadline,
    color: entry.data.color || "blue"
    // Default color if not specified
  }));
  const steps = [
    {
      step: 1,
      title: "Выбор программы",
      description: "Определитесь с университетом и программой обучения",
      icon: "search"
    },
    {
      step: 2,
      title: "Подготовка документов",
      description: "Соберите все необходимые документы и переводы",
      icon: "file-text"
    },
    {
      step: 3,
      title: "Подача заявки",
      description: "Заполните онлайн-форму и загрузите документы",
      icon: "upload"
    },
    {
      step: 4,
      title: "Ожидание результатов",
      description: "Дождитесь решения отборочной комиссии",
      icon: "clock"
    }
  ];
  const benefits = [
    {
      title: "Качественное образование",
      description: "Китайские университеты входят в топ-100 мировых рейтингов",
      icon: "book-open"
    },
    {
      title: "Доступная стоимость",
      description: "Обучение в Китае дешевле, чем в Европе и США",
      icon: "award"
    },
    {
      title: "Карьерные перспективы",
      description: "Выпускники востребованы в международных компаниях",
      icon: "user"
    }
  ];
  const t2 = (key) => getTranslation(lang, key);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Гранты и стипендии | Study in China", "data-astro-cid-ydfzhtbi": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-b from-blue-50 to-white" data-astro-cid-ydfzhtbi> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-astro-cid-ydfzhtbi> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: t2("nav.grants"), href: `/${lang}/grants` }
  ], "data-astro-cid-ydfzhtbi": true })} </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-ydfzhtbi> <!-- Hero Section --> <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <h1 class="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight" data-astro-cid-ydfzhtbi>Гранты и стипендии</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ydfzhtbi>Откройте для себя возможности финансирования вашего образования в лучших университетах Китая</p> <div class="mt-8" data-astro-cid-ydfzhtbi> <a href="#grants" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-ydfzhtbi>
Узнать больше
${renderComponent($$result2, "ChevronRight", $$ChevronRight, { "class": "ml-2 h-5 w-5", "data-astro-cid-ydfzhtbi": true })} </a> </div> </div> <!-- Available Grants --> <div id="grants" class="mb-20" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-aos="fade-up" data-aos-duration="800" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Доступные стипендии</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Выберите подходящую программу финансирования для вашего обучения в Китае</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ydfzhtbi> ${grantsData.map((grant, index) => renderTemplate`<div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-ydfzhtbi> <div class="bg-primary-500 h-2 w-full" data-astro-cid-ydfzhtbi></div> <div class="p-6 flex flex-col h-full" data-astro-cid-ydfzhtbi> <div class="flex items-start justify-between mb-4" data-astro-cid-ydfzhtbi> <div data-astro-cid-ydfzhtbi> <h2 class="text-xl font-bold text-gray-900 transition-colors duration-300" data-astro-cid-ydfzhtbi>${grant.title}</h2> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mt-2 transition-colors duration-300 hover:bg-primary-200" data-astro-cid-ydfzhtbi> ${grant.type} </span> </div> ${renderComponent($$result2, "School", $$School, { "class": "h-6 w-6 text-primary-600 flex-shrink-0 transition-transform duration-300 hover:scale-110", "data-astro-cid-ydfzhtbi": true })} </div> <div class="flex-grow space-y-4" data-astro-cid-ydfzhtbi> <div data-astro-cid-ydfzhtbi> <h3 class="text-sm font-medium text-gray-700 mb-2" data-astro-cid-ydfzhtbi>Покрытие:</h3> <ul class="space-y-1" data-astro-cid-ydfzhtbi> ${grant.coverage.map((item) => renderTemplate`<li class="flex items-center text-sm text-gray-600 transition-transform duration-200 hover:translate-x-1" data-astro-cid-ydfzhtbi> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "class": "h-4 w-4 text-green-500 mr-2 flex-shrink-0", "data-astro-cid-ydfzhtbi": true })} ${item} </li>`)} </ul> </div> <div data-astro-cid-ydfzhtbi> <h3 class="text-sm font-medium text-gray-700 mb-2" data-astro-cid-ydfzhtbi>Требования:</h3> <ul class="space-y-1" data-astro-cid-ydfzhtbi> ${grant.requirements.map((req) => renderTemplate`<li class="flex items-start text-sm text-gray-600 transition-transform duration-200 hover:translate-x-1" data-astro-cid-ydfzhtbi> ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0", "data-astro-cid-ydfzhtbi": true })} ${req} </li>`)} </ul> </div> </div> <div class="mt-6 pt-4 border-t border-gray-100" data-astro-cid-ydfzhtbi> <div class="flex items-center mb-4 text-sm text-gray-500" data-astro-cid-ydfzhtbi> ${renderComponent($$result2, "Calendar", $$Calendar, { "class": "h-4 w-4 mr-2 text-primary-500", "data-astro-cid-ydfzhtbi": true })} <span class="font-medium" data-astro-cid-ydfzhtbi>Дедлайн:</span> <span class="ml-1" data-astro-cid-ydfzhtbi>${grant.deadline}</span> </div> <a${addAttribute(`/${lang}/grants/${grant.slug}`, "href")} class="inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 transition-all duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-sm hover:shadow-md" data-astro-cid-ydfzhtbi>
Подать заявку
${renderComponent($$result2, "ChevronRight", $$ChevronRight, { "class": "ml-1 h-4 w-4", "data-astro-cid-ydfzhtbi": true })} </a> </div> </div> </div>`)} </div> </div> <!-- Application Process --> <div class="mb-20" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Процесс подачи заявки</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Четыре простых шага для получения стипендии в Китае</p> </div> <div class="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg" data-astro-cid-ydfzhtbi> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-ydfzhtbi> ${steps.map((step, index) => renderTemplate`<div class="text-center transition-all duration-500 hover:transform hover:scale-105" data-aos="fade-up"${addAttribute(index * 150, "data-aos-delay")} data-astro-cid-ydfzhtbi> <div class="relative mb-8" data-astro-cid-ydfzhtbi> <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4 transition-colors duration-300 hover:bg-primary-200 shadow-md" data-astro-cid-ydfzhtbi> ${step.icon === "search" && renderTemplate`${renderComponent($$result2, "Search", $$Search, { "class": "h-8 w-8", "data-astro-cid-ydfzhtbi": true })}`} ${step.icon === "file-text" && renderTemplate`${renderComponent($$result2, "FileText", $$FileText, { "class": "h-8 w-8", "data-astro-cid-ydfzhtbi": true })}`} ${step.icon === "upload" && renderTemplate`${renderComponent($$result2, "Upload", $$Upload, { "class": "h-8 w-8", "data-astro-cid-ydfzhtbi": true })}`} ${step.icon === "clock" && renderTemplate`${renderComponent($$result2, "Clock", $$Clock, { "class": "h-8 w-8", "data-astro-cid-ydfzhtbi": true })}`} </div> <div class="absolute top-0 -left-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm" data-astro-cid-ydfzhtbi> ${step.step} </div> ${index < steps.length - 1 && renderTemplate`<div class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform -translate-x-4" data-astro-cid-ydfzhtbi></div>`} </div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-ydfzhtbi>${step.title}</h3> <p class="text-gray-600" data-astro-cid-ydfzhtbi>${step.description}</p> </div>`)} </div> </div> </div> <!-- Benefits Section --> <div class="mb-16" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Преимущества обучения в Китае</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Почему тысячи студентов выбирают китайские университеты</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-ydfzhtbi> ${benefits.map((benefit, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-ydfzhtbi> <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4" data-astro-cid-ydfzhtbi> ${benefit.icon === "book-open" && renderTemplate`${renderComponent($$result2, "BookOpen", $$BookOpen, { "class": "h-6 w-6", "data-astro-cid-ydfzhtbi": true })}`} ${benefit.icon === "award" && renderTemplate`${renderComponent($$result2, "Award", $$Award, { "class": "h-6 w-6", "data-astro-cid-ydfzhtbi": true })}`} ${benefit.icon === "user" && renderTemplate`${renderComponent($$result2, "User", $$User, { "class": "h-6 w-6", "data-astro-cid-ydfzhtbi": true })}`} </div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-ydfzhtbi>${benefit.title}</h3> <p class="text-gray-600" data-astro-cid-ydfzhtbi>${benefit.description}</p> </div>`)} </div> </div> <!-- CTA Section --> <div class="bg-primary-600 rounded-xl shadow-xl p-8 text-white text-center" data-aos="zoom-in" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold mb-4" data-astro-cid-ydfzhtbi>Готовы начать свой путь в Китай?</h2> <p class="text-lg mb-8 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Наши консультанты помогут вам выбрать подходящую программу и подготовить все необходимые документы</p> <div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-ydfzhtbi> <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl" data-astro-cid-ydfzhtbi>
Связаться с нами
</a> <a href="/universities" class="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl" data-astro-cid-ydfzhtbi>
Просмотреть университеты
</a> </div> </div> <!-- FAQ Section --> <div class="mt-20" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Часто задаваемые вопросы</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Ответы на самые популярные вопросы о грантах и стипендиях</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-ydfzhtbi> ${[
    {
      q: "Когда лучше всего подавать заявку на стипендию?",
      a: "Большинство стипендиальных программ открывают прием заявок в ноябре-декабре и закрывают в марте-апреле. Рекомендуется начать подготовку документов за 3-4 месяца до дедлайна."
    },
    {
      q: "Нужно ли знать китайский язык для получения стипендии?",
      a: "Не обязательно. Многие программы предлагают обучение на английском языке. Однако знание китайского языка (или готовность его изучать) повышает шансы на получение стипендии."
    },
    {
      q: "Какие документы нужны для подачи заявки?",
      a: "Обычно требуются: заполненная анкета, копия паспорта, диплом об образовании с переводом, медицинская справка, рекомендательные письма, мотивационное письмо и план обучения."
    },
    {
      q: "Можно ли работать во время обучения по стипендии?",
      a: "Большинство стипендий не разрешают работать полный рабочий день, но допускают частичную занятость на кампусе. Правила могут различаться в зависимости от типа стипендии."
    }
  ].map((faq, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg flex flex-col h-full" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-ydfzhtbi> <h3 class="text-lg font-bold text-gray-900 mb-3" data-astro-cid-ydfzhtbi>${faq.q}</h3> <p class="text-gray-600" data-astro-cid-ydfzhtbi>${faq.a}</p> </div>`)} </div> </div> <!-- Testimonials --> <div class="mt-20" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Истории успеха</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Отзывы студентов, получивших гранты на обучение в Китае</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-ydfzhtbi> ${[
    {
      name: "Алексей Иванов",
      university: "Пекинский университет",
      quote: "Благодаря правительственной стипендии КНР я смог осуществить свою мечту и учиться в одном из лучших университетов Азии. Процесс подачи был прост, а поддержка консультантов неоценима.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Мария Петрова",
      university: "Шанхайский университет Цзяо Тун",
      quote: "Стипендия провинции Цзянсу полностью покрыла мое обучение и проживание. Это открыло для меня удивительные возможности и позволило сосредоточиться на учебе, не беспокоясь о финансах.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Дмитрий Смирнов",
      university: "Университет Фудань",
      quote: "Я получил стипендию Института Конфуция после годичных курсов китайского языка. Сейчас я учусь на магистратуре и планирую работать в международной компании в Шанхае.",
      image: "/images/testimonial-3.jpg"
    }
  ].map((testimonial, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-ydfzhtbi> <div class="flex-grow" data-astro-cid-ydfzhtbi> <p class="text-gray-600 italic mb-4" data-astro-cid-ydfzhtbi>"${testimonial.quote}"</p> </div> <div class="flex items-center mt-4" data-astro-cid-ydfzhtbi> <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4" data-astro-cid-ydfzhtbi> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-full h-full object-cover" data-astro-cid-ydfzhtbi> </div> <div data-astro-cid-ydfzhtbi> <h4 class="font-bold text-gray-900" data-astro-cid-ydfzhtbi>${testimonial.name}</h4> <p class="text-sm text-gray-500" data-astro-cid-ydfzhtbi>${testimonial.university}</p> </div> </div> </div>`)} </div> </div> <!-- Statistics --> <div class="mt-20 bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-10" data-astro-cid-ydfzhtbi> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-ydfzhtbi>Китай в цифрах</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Статистика образования в Китае</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-astro-cid-ydfzhtbi> ${[
    { value: "3000+", label: "Университетов и колледжей" },
    { value: "500 000+", label: "Иностранных студентов" },
    { value: "60 000+", label: "Стипендий ежегодно" },
    { value: "100+", label: "Стран-партнеров" }
  ].map((stat, index) => renderTemplate`<div class="p-4" data-aos="zoom-in"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-ydfzhtbi> <p class="text-4xl font-bold text-primary-600 mb-2" data-astro-cid-ydfzhtbi>${stat.value}</p> <p class="text-gray-600" data-astro-cid-ydfzhtbi>${stat.label}</p> </div>`)} </div> </div> <!-- Newsletter --> <div class="mt-20 bg-gray-50 p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-ydfzhtbi> <div class="text-center mb-6" data-astro-cid-ydfzhtbi> <h2 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-ydfzhtbi>Будьте в курсе новых стипендий</h2> <p class="text-gray-600 max-w-2xl mx-auto" data-astro-cid-ydfzhtbi>Подпишитесь на нашу рассылку и первыми узнавайте о новых грантах и дедлайнах</p> </div> <form class="max-w-md mx-auto" data-astro-cid-ydfzhtbi> <div class="flex flex-col sm:flex-row gap-2" data-astro-cid-ydfzhtbi> <input type="email" placeholder="Ваш email" class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" required data-astro-cid-ydfzhtbi> <button type="submit" class="px-6 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300" data-astro-cid-ydfzhtbi>
Подписаться
</button> </div> </form> </div> </div> </div> ` })} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/grants.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/grants.astro";
const $$url = "/[lang]/grants";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Grants, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
