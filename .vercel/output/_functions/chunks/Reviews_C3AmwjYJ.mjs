import { c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from "./vendor_BkHgkSTi.mjs";
import "kleur/colors";
import "clsx";
import { u as useTranslations } from "./ui_CkL6hZGM.mjs";
/* empty css                                */
const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const lang = "uz";
  const t = useTranslations(lang);
  const successStories = [
    {
      name: t("comparison.stories.story1.name"),
      university: t("comparison.stories.story1.university"),
      year: t("comparison.stories.story1.year"),
      position: t("comparison.stories.story1.position"),
      quote: t("comparison.stories.story1.quote"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: t("comparison.stories.story2.name"),
      university: t("comparison.stories.story2.university"),
      year: t("comparison.stories.story2.year"),
      position: t("comparison.stories.story2.position"),
      quote: t("comparison.stories.story2.quote"),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: t("comparison.stories.story3.name"),
      university: t("comparison.stories.story3.university"),
      year: t("comparison.stories.story3.year"),
      position: t("comparison.stories.story3.position"),
      quote: t("comparison.stories.story3.quote"),
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-aaau2rrs> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-aaau2rrs> <div class="text-center mb-16" data-aos="fade-up" data-astro-cid-aaau2rrs> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative inline-block group" data-astro-cid-aaau2rrs> ${t("comparison.stories.title")} <span class="absolute bottom-0 left-0 w-full h-1 bg-primary-600 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" data-astro-cid-aaau2rrs></span> </h2> <div class="w-24 h-1 bg-primary-600 mx-auto mt-6" data-astro-cid-aaau2rrs></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-aaau2rrs> ${successStories.map((story, index) => renderTemplate`<div${addAttribute(`story-${index}`, "key")} class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group" data-aos="fade-up"${addAttribute(200 + index * 150, "data-aos-delay")} data-astro-cid-aaau2rrs> <div class="flex items-center mb-4" data-astro-cid-aaau2rrs> <div class="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-primary-100" data-astro-cid-aaau2rrs> <img${addAttribute(story.image, "src")}${addAttribute(story.name, "alt")} class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" data-astro-cid-aaau2rrs> </div> <div class="ml-4" data-astro-cid-aaau2rrs> <h4 class="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary-600" data-astro-cid-aaau2rrs>${story.name}</h4> <p class="text-primary-600" data-astro-cid-aaau2rrs>${story.university}, ${story.year}</p> <p class="text-sm text-gray-500" data-astro-cid-aaau2rrs>${story.position}</p> </div> </div> <blockquote class="italic text-gray-600 border-l-4 border-primary-600 pl-4 py-2 bg-primary-50 rounded-r-lg shadow-sm transition-all duration-300 group-hover:bg-primary-100 group-hover:shadow-md" data-astro-cid-aaau2rrs>
"${story.quote}"
</blockquote> </div>`)} </div> </div> </section> `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/review/Reviews.astro", void 0);
export {
  $$Reviews as $
};
