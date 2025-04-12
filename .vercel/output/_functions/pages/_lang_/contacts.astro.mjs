import { c as createComponent, a as createAstro, e as renderComponent, n as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from "../../chunks/vendor_BAzprikM.mjs";
import { t } from "../../chunks/vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../../chunks/Layout_DMdNbTih.mjs";
import { l as languages, i as getTranslation } from "../../chunks/ui_DFpIJiEG.mjs";
import { $ as $$Breadcrumbs } from "../../chunks/Breadcrumbs_B0JlxQ9v.mjs";
/* empty css                                       */
import { a as $$Phone, p as $$Mail, x as $$MessageCircle, q as $$MessageSquare } from "../../chunks/icons_GFS7fkbb.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacts;
  const { lang } = Astro2.params;
  if (!lang || !languages.includes(lang)) {
    return Astro2.redirect("/uz/");
  }
  const t2 = (key) => getTranslation(lang, key);
  const contactMethods = [
    {
      name: t2("contacts.methods.phone"),
      value: "+1234567890",
      icon: "phone",
      href: "tel:+1234567890"
    },
    {
      name: t2("contacts.methods.email"),
      value: "info@studychina.com",
      icon: "mail",
      href: "mailto:info@studychina.com"
    },
    {
      name: t2("contacts.methods.telegram"),
      value: "@studychina",
      icon: "message-circle",
      href: "https://t.me/studychina"
    },
    {
      name: t2("contacts.methods.whatsapp"),
      value: "+1234567890",
      icon: "message-square",
      href: "https://wa.me/1234567890"
    }
  ];
  const officeLocations = [
    {
      city: "Пекин",
      address: "123 Example Street, Beijing, China",
      hours: "9:00 - 18:00"
    },
    {
      city: "Москва",
      address: "ул. Примерная, 123, Москва, Россия",
      hours: "9:00 - 18:00"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": { title: "Page Title", description: "Page Description" }, "data-astro-cid-xrrqy6bb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-br from-blue-50 to-white" data-astro-cid-xrrqy6bb> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-astro-cid-xrrqy6bb> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: t2("nav.contacts"), href: `/${lang}/contacts` }
  ], "data-astro-cid-xrrqy6bb": true })} </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-astro-cid-xrrqy6bb> <div class="lg:grid lg:grid-cols-2 lg:gap-12" data-astro-cid-xrrqy6bb> <!-- Contact Information --> <div data-aos="fade-up" data-aos-duration="800" data-astro-cid-xrrqy6bb> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8" data-astro-cid-xrrqy6bb>${t2("contacts.title")}</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-astro-cid-xrrqy6bb> ${contactMethods.map((method) => renderTemplate`<a${addAttribute(method.href, "href")} class="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer" data-astro-cid-xrrqy6bb> <div class="flex-shrink-0" data-astro-cid-xrrqy6bb> <div class="p-3 bg-primary-50 rounded-full group-hover:bg-primary-500 transition-colors duration-300" data-astro-cid-xrrqy6bb> ${method.icon === "phone" && renderTemplate`${renderComponent($$result2, "Phone", $$Phone, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-xrrqy6bb": true })}`} ${method.icon === "mail" && renderTemplate`${renderComponent($$result2, "Mail", $$Mail, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-xrrqy6bb": true })}`} ${method.icon === "message-circle" && renderTemplate`${renderComponent($$result2, "MessageCircle", $$MessageCircle, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-xrrqy6bb": true })}`} ${method.icon === "message-square" && renderTemplate`${renderComponent($$result2, "MessageSquare", $$MessageSquare, { "class": "w-6 h-6 text-primary-600", "data-astro-cid-xrrqy6bb": true })}`} </div> </div> <div class="ml-4" data-astro-cid-xrrqy6bb> <h3 class="text-lg font-semibold text-gray-900" data-astro-cid-xrrqy6bb>${method.name}</h3> <p class="mt-1 text-base text-gray-600" data-astro-cid-xrrqy6bb>${method.value}</p> </div> </a>`)} </div> <div class="space-y-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-astro-cid-xrrqy6bb> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6" data-astro-cid-xrrqy6bb>${t2("contacts.offices.title")}</h2> <div class="w-24 h-1 bg-primary-600 mb-6" data-astro-cid-xrrqy6bb></div> ${officeLocations.map((office) => renderTemplate`<div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-astro-cid-xrrqy6bb> <h3 class="text-xl font-semibold text-gray-900" data-astro-cid-xrrqy6bb>${office.city}</h3> <p class="mt-2 text-base text-gray-600" data-astro-cid-xrrqy6bb>${office.address}</p> <p class="mt-1 text-sm text-gray-500" data-astro-cid-xrrqy6bb>${t2("contacts.offices.hours")} ${office.hours}</p> </div>`)} </div> </div> <!-- Contact Form --> <div class="mt-12 lg:mt-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-astro-cid-xrrqy6bb> <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100" data-astro-cid-xrrqy6bb> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6" data-astro-cid-xrrqy6bb>${t2("contacts.form.title")}</h2> <div class="w-24 h-1 bg-primary-600 mb-8" data-astro-cid-xrrqy6bb></div> <form class="space-y-6" onsubmit="event.preventDefault();" data-astro-cid-xrrqy6bb> <div data-astro-cid-xrrqy6bb> <label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-xrrqy6bb>${t2("contacts.form.name")}</label> <input type="text" id="name" name="name" placeholder="Ismingiz" class="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300 bg-white" required data-astro-cid-xrrqy6bb> </div> <div data-astro-cid-xrrqy6bb> <label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-xrrqy6bb>${t2("contacts.form.email")}</label> <input type="email" id="email" name="email" placeholder="Email" class="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300 bg-white" required data-astro-cid-xrrqy6bb> </div> <div data-astro-cid-xrrqy6bb> <label for="phone" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-xrrqy6bb>${t2("contacts.form.phone")}</label> <input type="tel" id="phone" name="phone" placeholder="Telefon" class="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300 bg-white" data-astro-cid-xrrqy6bb> </div> <div data-astro-cid-xrrqy6bb> <label for="message" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-xrrqy6bb>${t2("contacts.form.message")}</label> <textarea id="message" name="message" rows="4" placeholder="Xabar" class="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-all duration-300 bg-white" required data-astro-cid-xrrqy6bb></textarea> </div> <div data-astro-cid-xrrqy6bb> <button type="submit" class="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-astro-cid-xrrqy6bb> ${t2("contacts.form.submit")} </button> </div> </form> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/contacts.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/contacts.astro", void 0);
const $$file = "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/pages/[lang]/contacts.astro";
const $$url = "/[lang]/contacts";
const _page = /* @__PURE__ */ Object.freeze({ __proto__: null, default: $$Contacts, file: $$file, prerender, url: $$url });
const page = () => _page;
export {
  page,
  t as renderers
};
