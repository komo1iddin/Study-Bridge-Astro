import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, n as renderScript, d as renderTemplate } from "./vendor_fPK89n42.mjs";
import "kleur/colors";
import "clsx";
import { u as useTranslations } from "./ui_BAsHSPwd.mjs";
/* empty css                       */
const $$Astro = createAstro();
const $$ContactModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactModal;
  const { lang = "uz" } = Astro2.props;
  const t = useTranslations(lang);
  const successMessage = t("contact.form.success") || "Your message has been sent successfully!";
  return renderTemplate`${maybeRenderHead()}<div id="contactModal" class="modal" data-modal data-astro-cid-3k6bnkob> <div class="modal-backdrop" data-astro-cid-3k6bnkob></div> <div class="modal-content" data-astro-cid-3k6bnkob> <div class="modal-header" data-astro-cid-3k6bnkob> <div class="modal-title" data-astro-cid-3k6bnkob>${t("contact.modal.title")}</div> <button class="modal-close" onclick="window.uiStore.toggleContactModal(false)" data-astro-cid-3k6bnkob>&times;</button> </div> <div class="modal-body" data-astro-cid-3k6bnkob> <p class="modal-description" data-astro-cid-3k6bnkob>${t("contact.modal.description")}</p> <form id="contactForm"${addAttribute(successMessage, "data-success-message")} data-astro-cid-3k6bnkob> <div class="form-group" data-astro-cid-3k6bnkob> <label for="name" data-astro-cid-3k6bnkob>${t("contact.form.name")}</label> <input type="text" class="form-control" id="name"${addAttribute(t("contact.form.name.placeholder"), "placeholder")} required data-astro-cid-3k6bnkob> </div> <div class="form-group" data-astro-cid-3k6bnkob> <label for="phone" data-astro-cid-3k6bnkob>${t("contact.form.phone")}</label> <input type="tel" class="form-control" id="phone"${addAttribute(t("contact.form.phone.placeholder"), "placeholder")} required data-astro-cid-3k6bnkob> </div> <div class="form-group" data-astro-cid-3k6bnkob> <label for="email" data-astro-cid-3k6bnkob>${t("contact.form.email")}</label> <input type="email" class="form-control" id="email"${addAttribute(t("contact.form.email.placeholder"), "placeholder")} data-astro-cid-3k6bnkob> </div> <button type="submit" class="btn submit-btn" data-astro-cid-3k6bnkob>${t("contact.form.submit")}</button> <div class="form-text privacy-notice" data-astro-cid-3k6bnkob> ${t("contact.form.privacy.text")} <a href="#" data-astro-cid-3k6bnkob>${t("contact.form.privacy.link")}</a> </div> </form> </div> </div> </div> ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/contact/ContactModal.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/features/contact/ContactModal.astro", void 0);
export {
  $$ContactModal as $
};
