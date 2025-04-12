import { c as createComponent, a as createAstro, d as renderTemplate, f as defineScriptVars, b as addAttribute, e as renderComponent, m as maybeRenderHead, n as renderScript, v as renderHead, r as renderSlot, $ as $$ClientRouter } from "./vendor_BAzprikM.mjs";
import "kleur/colors";
import { $ as $$Index, a as $$Footer } from "./Footer_X8TV5Nnn.mjs";
import { i as getTranslation, g as getLangFromUrl, l as languages } from "./ui_DFpIJiEG.mjs";
/* empty css                         */
import { P as $$X } from "./icons_GFS7fkbb.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$OfferPopup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OfferPopup;
  const { lang, autoShow = true } = Astro2.props;
  const t = (key) => getTranslation(lang, key);
  const formFields = [
    { id: "name", type: "text", required: true, defaultPlaceholder: "Your full name" },
    { id: "phone", type: "tel", required: true, defaultPlaceholder: "Your phone number" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div id="offerPopup" class="popup-overlay" data-astro-cid-gyw34cxs> <div class="popup-content" data-astro-cid-gyw34cxs> <button id="closePopup" class="popup-close" aria-label="Close popup" data-astro-cid-gyw34cxs> ', ' </button> <div class="popup-body" data-astro-cid-gyw34cxs> <div class="popup-header" data-astro-cid-gyw34cxs> <h3 class="text-2xl font-extrabold mb-3 text-gray-800" data-astro-cid-gyw34cxs>', '</h3> <p class="text-gray-600 text-base leading-relaxed" data-astro-cid-gyw34cxs>', '</p> </div> <form id="popupForm" data-astro-cid-gyw34cxs> ', ' <button type="submit" class="submit-btn" data-astro-cid-gyw34cxs>', '</button> </form> <p class="privacy-text" data-astro-cid-gyw34cxs> ', "", ' <a href="/privacy-policy" data-astro-cid-gyw34cxs>', "</a> </p> </div> </div> </div>  <script>(function(){", `
  // Initialize popup on load
  function initPopup() {
    // Storage keys
    const SESSION_KEY = 'offer_popup_session';
    const INTERACTION_KEY = 'user_has_interacted';
    
    // Check if popup was shown in this session
    const wasShownInSession = () => {
      try {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
      } catch (e) {
        return false;
      }
    };
    
    // Mark popup as shown in this session
    const markShownInSession = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch (e) {
        // Ignore storage errors
      }
    };
    
    // Check if user has interacted with the page
    const hasUserInteracted = () => {
      try {
        return sessionStorage.getItem(INTERACTION_KEY) === 'true';
      } catch (e) {
        return false;
      }
    };
    
    // Mark that user has interacted with the page
    const markUserInteracted = () => {
      try {
        sessionStorage.setItem(INTERACTION_KEY, 'true');
      } catch (e) {
        // Ignore storage errors
      }
    };
    
    // Setup interaction tracking
    const setupInteractionTracking = () => {
      const interactionEvents = ['click', 'touchstart', 'keydown', 'mousemove'];
      const trackInteraction = () => {
        markUserInteracted();
        // Remove event listeners once interaction is detected
        interactionEvents.forEach(event => {
          document.removeEventListener(event, trackInteraction);
        });
      };
      
      interactionEvents.forEach(event => {
        document.addEventListener(event, trackInteraction);
      });
    };
    
    const popup = {
      el: document.getElementById('offerPopup'),
      form: document.getElementById('popupForm'),
      closeBtn: document.getElementById('closePopup'),
      shown: false,
      
      init() {
        if (!this.el) return;
        
        this.setupEventListeners();
        
        // Only setup automatic triggers if autoShow is true and popup wasn't already shown
        if (autoShow && !wasShownInSession()) {
          setupInteractionTracking();
          this.setupAutoTriggers();
        }
      },
      
      show() {
        if (!this.shown && this.el) {
          this.el.classList.add('active');
          document.body.style.overflow = 'hidden';
          this.shown = true;
          markShownInSession();
        }
      },
      
      hide() {
        if (this.el) {
          this.el.classList.remove('active');
          document.body.style.overflow = '';
          this.shown = false;
        }
      },
      
      setupEventListeners() {
        // Close button and overlay click
        if (this.closeBtn) {
          this.closeBtn.addEventListener('click', () => this.hide());
        }
        
        this.el.addEventListener('click', (e) => {
          if (e.target === this.el) this.hide();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.shown) {
            this.hide();
          }
        });
        
        // Form submission
        if (this.form) {
          this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
      },
      
      setupAutoTriggers() {
        // Only show popup if user scrolls to the middle of the page
        const handleScroll = () => {
          // Show popup when user scrolls to 50% of the page height
          const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
          if (!this.shown && scrollPercentage > 40) {
            this.show();
            window.removeEventListener('scroll', handleScroll);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Show popup after a delay if user hasn't interacted
        const isMobile = window.innerWidth < 768;
        const delayTime = isMobile ? 45000 : 60000; // 45 seconds on mobile, 60 seconds on desktop
        
        setTimeout(() => {
          if (!this.shown && !hasUserInteracted()) {
            this.show();
          }
        }, delayTime);
      },
      
      async handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        
        try {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          alert('Thank you! Our China education specialist will call you shortly.');
          form.reset();
          this.hide();
        } catch (error) {
          alert('An error occurred. Please try again.');
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = t('contact.form.submit') || 'Get My Free Consultation';
        }
      }
    };
    
    // Initialize the popup
    popup.init();
    
    // Expose to global scope
    window.showOfferPopup = () => popup.show();
  }
  
  // Handle initialization timing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPopup);
  } else {
    initPopup();
  }
})();<\/script>`])), maybeRenderHead(), renderComponent($$result, "X", $$X, { "class": "h-5 w-5", "data-astro-cid-gyw34cxs": true }), t("popup.title") || "Get a Free Consultation", t("popup.description") || "Just leave your contact details and we'll help you find the perfect educational opportunity abroad", formFields.map((field) => renderTemplate`<div class="form-group" data-astro-cid-gyw34cxs> <label${addAttribute(field.id, "for")} class="form-label" data-astro-cid-gyw34cxs>${t(`contact.form.${field.id}._value`) || field.id.charAt(0).toUpperCase() + field.id.slice(1)}</label> <input${addAttribute(field.type, "type")}${addAttribute(field.id, "id")}${addAttribute(field.id, "name")}${addAttribute(t(`contact.form.${field.id}.placeholder`) || field.defaultPlaceholder, "placeholder")}${addAttribute(field.required, "required")} class="form-input" data-astro-cid-gyw34cxs> </div>`), t("contact.form.submit") || "Get My Free Consultation", t("contact.form.privacy.text") || "By submitting this form, you agree to our", " ", t("contact.form.privacy.link") || "privacy policy", defineScriptVars({ autoShow }));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/components/shared/popup/OfferPopup.astro", void 0);
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { meta, canonicalUrl = Astro2.url.pathname } = Astro2.props;
  const defaultMeta = {
    uz: {
      title: "Xitoyda o'qish - Ta'lim olish imkoniyatlari",
      description: "Xitoyning eng yaxshi universitetlariga o'qishga kirishda yordam beramiz. Til kurslari, bakalavr, magistratura.",
      keywords: ["xitoyda oqish", "xitoy universitetlari", "xitoyda talim"]
    },
    ru: {
      title: "Study in China - Образование в Китае",
      description: "Помогаем поступить в лучшие университеты Китая. Языковые курсы, бакалавриат, магистратура.",
      keywords: ["образование в китае", "учеба в китае", "университеты китая"]
    },
    en: {
      title: "Study in China - Education Opportunities",
      description: "We help you enroll in top Chinese universities. Language courses, bachelor, master degrees.",
      keywords: ["study in china", "chinese universities", "education in china"]
    }
  };
  const pageMeta = { ...defaultMeta[lang], ...meta };
  const siteUrl = "https://yoursite.com";
  const fullCanonicalUrl = `${siteUrl}/${lang}${canonicalUrl}`;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageMeta.title}</title><meta name="description"${addAttribute(pageMeta.description, "content")}>${pageMeta.keywords && renderTemplate`<meta name="keywords"${addAttribute(pageMeta.keywords.join(", "), "content")}>`}<!-- Canonical URL --><link rel="canonical"${addAttribute(fullCanonicalUrl, "href")}><!-- Alternate language versions -->${Object.keys(languages).map((langCode) => renderTemplate`<link rel="alternate"${addAttribute(langCode, "hreflang")}${addAttribute(`${siteUrl}/${langCode}${canonicalUrl}`, "href")}>`)}<!-- x-default for search engines --><link rel="alternate"${addAttribute(`${siteUrl}/uz${canonicalUrl}`, "href")} hreflang="x-default"><!-- Optimized: Remove preload for AOS assets since they're loaded dynamically when needed --><!-- Preconnect to important domains --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Inline critical CSS --><style>
      /* Critical styles for immediately visible elements */
      .critical-hidden { opacity: 0; }
      .critical-visible { opacity: 1; transition: opacity .3s; }
      
      /* Navbar styles */
      .header-fixed { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
      
      /* Button styles */
      .btn-primary { 
        background-color: #2463EB; 
        color: white; 
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-weight: 500;
      }
      
      /* Content fade-in */
      .visible-immediately {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Reduce content layout shift */
      img, svg { max-width: 100%; height: auto; }
      
      /* Reduce motion if user prefers */
      @media (prefers-reduced-motion: reduce) {
        *, ::before, ::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    </style><!-- Load non-critical CSS with JS -->${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen flex flex-col"> <div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Index, {})} <main class="flex-1 pt-16"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderComponent($$result, "OfferPopup", $$OfferPopup, { "lang": lang, "autoShow": false })} ${renderScript($$result, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $,
  $$OfferPopup as a
};
