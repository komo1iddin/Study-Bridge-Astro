import { c as createComponent, a as createAstro, d as renderTemplate, f as defineScriptVars, b as addAttribute, e as renderComponent, m as maybeRenderHead, r as renderSlot, t as renderHead } from "./vendor_BkHgkSTi.mjs";
import "kleur/colors";
import { $ as $$Footer, a as $$Index } from "./Footer_COiunWVn.mjs";
import { i as getTranslation, g as getLangFromUrl, l as languages } from "./ui_CkL6hZGM.mjs";
/* empty css                         */
import { P as $$X } from "./icons_DMAatXJH.mjs";
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
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
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="offerPopup" class="popup-overlay" data-astro-cid-gyw34cxs> <div class="popup-content" data-astro-cid-gyw34cxs> <button id="closePopup" class="popup-close" aria-label="Close popup" data-astro-cid-gyw34cxs> ', ' </button> <div class="popup-body" data-astro-cid-gyw34cxs> <div class="popup-header" data-astro-cid-gyw34cxs> <h3 class="text-2xl font-extrabold mb-3 text-gray-800" data-astro-cid-gyw34cxs>', '</h3> <p class="text-gray-600 text-base leading-relaxed" data-astro-cid-gyw34cxs>', '</p> </div> <form id="popupForm" data-astro-cid-gyw34cxs> ', ' <button type="submit" class="submit-btn" data-astro-cid-gyw34cxs>', '</button> </form> <p class="privacy-text" data-astro-cid-gyw34cxs> ', "", ' <a href="/privacy-policy" data-astro-cid-gyw34cxs>', "</a> </p> </div> </div> </div>  <script>(function(){", `
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
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
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
  const currentPath = Astro2.url.pathname;
  const criticalPaths = [
    `/${lang}`,
    `/${lang}/contacts`,
    `/${lang}/universities`
  ];
  const criticalStyles = [
    "/_astro/global.css"
  ];
  const criticalIcons = [
    "menu",
    "x",
    "chevron-down",
    "chevron-right",
    "phone",
    "mail",
    "map-pin",
    "calendar",
    "clock",
    "users",
    "book-open"
  ];
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta name="description"', ">", '<!-- Canonical URL --><link rel="canonical"', "><!-- Alternate language versions -->", '<!-- x-default for search engines --><link rel="alternate"', ' hreflang="x-default"><!-- Preconnect to important domains --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload critical CSS -->', '<!-- Preload critical fonts --><link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin><!-- DNS prefetch and preconnect for common domains --><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><!-- \n    <ViewTransitions />\n    -->', '</head> <body class="min-h-screen flex flex-col"> <div class="flex flex-col min-h-screen"> ', ' <main class="flex-1 pt-16"> ', " </main> ", " </div> ", " <!-- Store language preference for faster future navigations --> <script>(function(){", "\n      // Store user language preference in localStorage\n      if (typeof localStorage !== 'undefined') {\n        // Save current language for future visits\n        localStorage.setItem('preferred-language', lang);\n\n        // Handle language selector clicks to update stored preference\n        document.addEventListener('DOMContentLoaded', () => {\n          const langSelectors = document.querySelectorAll('[data-lang-select]');\n          \n          langSelectors.forEach(selector => {\n            selector.addEventListener('click', (e) => {\n              const target = e.currentTarget;\n              if (target && target instanceof HTMLElement) {\n                const targetLang = target.getAttribute('data-lang-select');\n                if (targetLang) {\n                  localStorage.setItem('preferred-language', targetLang);\n                }\n              }\n            });\n          });\n        });\n      }\n    })();<\/script> <!-- Preload next pages logic --> <script>(function(){", `
      // Track if preloading has been initiated
      let hasPreloadedPages = false;
      let hasPreloadedIcons = false;
      
      // Preload critical pages when idle
      function preloadCriticalPages() {
        if (hasPreloadedPages) return;
        hasPreloadedPages = true;
        
        console.log(" Предварительная загрузка критических страниц...");
        criticalPaths.forEach(path => {
          // Skip current page
          if (path === currentPath) return;
          
          // Use fetch with low priority and caching
          fetch(path, { 
            priority: 'low',
            cache: 'force-cache'
          }).catch(() => {});
        });
      }
      
      // Preload critical icons
      function preloadCriticalIcons() {
        if (hasPreloadedIcons) return;
        hasPreloadedIcons = true;
        
        console.log(" Предварительная загрузка иконок...");
        criticalIcons.forEach(icon => {
          const iconUrl = \`/_astro/lucide_\${icon}.svg\`;
          
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = iconUrl;
          link.as = 'image';
          document.head.appendChild(link);
        });
      }
      
      // Use requestIdleCallback or setTimeout fallback
      const requestIdleCallback = 
        window.requestIdleCallback || 
        ((cb) => setTimeout(cb, 1000));
      
      // Schedule preloading during idle time
      requestIdleCallback(() => {
        preloadCriticalPages();
      });
      
      // Preload icons after slight delay
      setTimeout(() => {
        requestIdleCallback(() => {
          preloadCriticalIcons();
        });
      }, 2000);
      
      // Optimize icon rendering
      document.addEventListener('DOMContentLoaded', () => {
        // Add loading="lazy" to non-visible SVG icons
        document.querySelectorAll('svg[data-lucide]').forEach(icon => {
          icon.setAttribute('loading', 'lazy');
          icon.style.contain = 'strict';
          icon.style.willChange = 'transform';
          icon.style.transform = 'translateZ(0)';
        });
      });
    })();<\/script>  </body> </html>`], ["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta name="description"', ">", '<!-- Canonical URL --><link rel="canonical"', "><!-- Alternate language versions -->", '<!-- x-default for search engines --><link rel="alternate"', ' hreflang="x-default"><!-- Preconnect to important domains --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload critical CSS -->', '<!-- Preload critical fonts --><link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin><!-- DNS prefetch and preconnect for common domains --><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><!-- \n    <ViewTransitions />\n    -->', '</head> <body class="min-h-screen flex flex-col"> <div class="flex flex-col min-h-screen"> ', ' <main class="flex-1 pt-16"> ', " </main> ", " </div> ", " <!-- Store language preference for faster future navigations --> <script>(function(){", "\n      // Store user language preference in localStorage\n      if (typeof localStorage !== 'undefined') {\n        // Save current language for future visits\n        localStorage.setItem('preferred-language', lang);\n\n        // Handle language selector clicks to update stored preference\n        document.addEventListener('DOMContentLoaded', () => {\n          const langSelectors = document.querySelectorAll('[data-lang-select]');\n          \n          langSelectors.forEach(selector => {\n            selector.addEventListener('click', (e) => {\n              const target = e.currentTarget;\n              if (target && target instanceof HTMLElement) {\n                const targetLang = target.getAttribute('data-lang-select');\n                if (targetLang) {\n                  localStorage.setItem('preferred-language', targetLang);\n                }\n              }\n            });\n          });\n        });\n      }\n    })();<\/script> <!-- Preload next pages logic --> <script>(function(){", `
      // Track if preloading has been initiated
      let hasPreloadedPages = false;
      let hasPreloadedIcons = false;
      
      // Preload critical pages when idle
      function preloadCriticalPages() {
        if (hasPreloadedPages) return;
        hasPreloadedPages = true;
        
        console.log(" Предварительная загрузка критических страниц...");
        criticalPaths.forEach(path => {
          // Skip current page
          if (path === currentPath) return;
          
          // Use fetch with low priority and caching
          fetch(path, { 
            priority: 'low',
            cache: 'force-cache'
          }).catch(() => {});
        });
      }
      
      // Preload critical icons
      function preloadCriticalIcons() {
        if (hasPreloadedIcons) return;
        hasPreloadedIcons = true;
        
        console.log(" Предварительная загрузка иконок...");
        criticalIcons.forEach(icon => {
          const iconUrl = \\\`/_astro/lucide_\\\${icon}.svg\\\`;
          
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = iconUrl;
          link.as = 'image';
          document.head.appendChild(link);
        });
      }
      
      // Use requestIdleCallback or setTimeout fallback
      const requestIdleCallback = 
        window.requestIdleCallback || 
        ((cb) => setTimeout(cb, 1000));
      
      // Schedule preloading during idle time
      requestIdleCallback(() => {
        preloadCriticalPages();
      });
      
      // Preload icons after slight delay
      setTimeout(() => {
        requestIdleCallback(() => {
          preloadCriticalIcons();
        });
      }, 2000);
      
      // Optimize icon rendering
      document.addEventListener('DOMContentLoaded', () => {
        // Add loading="lazy" to non-visible SVG icons
        document.querySelectorAll('svg[data-lucide]').forEach(icon => {
          icon.setAttribute('loading', 'lazy');
          icon.style.contain = 'strict';
          icon.style.willChange = 'transform';
          icon.style.transform = 'translateZ(0)';
        });
      });
    })();<\/script>  </body> </html>`])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), pageMeta.title, addAttribute(pageMeta.description, "content"), pageMeta.keywords && renderTemplate`<meta name="keywords"${addAttribute(pageMeta.keywords.join(", "), "content")}>`, addAttribute(fullCanonicalUrl, "href"), Object.keys(languages).map((langCode) => renderTemplate`<link rel="alternate"${addAttribute(langCode, "hreflang")}${addAttribute(`${siteUrl}/${langCode}${canonicalUrl}`, "href")}>`), addAttribute(`${siteUrl}/uz${canonicalUrl}`, "href"), criticalStyles.map((style) => renderTemplate`<link rel="preload"${addAttribute(style, "href")} as="style">`), renderHead(), renderComponent($$result, "Header", $$Index, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "OfferPopup", $$OfferPopup, { "lang": lang, "autoShow": false }), defineScriptVars({ lang }), defineScriptVars({ criticalPaths, criticalIcons, currentPath, lang }));
}, "/Users/komo1iddin/Desktop/AstroStudyLatest/project/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $,
  $$OfferPopup as a
};
