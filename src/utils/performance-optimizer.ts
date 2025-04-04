---
import { ViewTransitions } from 'astro:transitions';
// Эти импорты можно удалить, если они не используются в серверной части
// import { measurePerformance, optimizeImages, optimizeFonts, disableUnnecessaryAnimations } from '@/utils/performance-optimizer';
import Header from '../components/shared/navigation/Header/index.astro';
import Footer from '../components/layout/Footer.astro';
import type { Meta } from '../types/common';
import type { Lang } from '@/i18n/langUtils';
import { getLangFromUrl, languages } from '@/i18n/langUtils';
import { createTranslationFunction } from '@/i18n/translationUtils';
import OfferPopup from '@/components/shared/popup/OfferPopup.astro';

const lang = getLangFromUrl(Astro.url);
const t = createTranslationFunction(lang);

export interface Props {
  meta?: Meta;
  canonicalUrl?: string;
}

const { meta, canonicalUrl = Astro.url.pathname } = Astro.props;

// Default meta ma'lumotlarini til bo'yicha ajratamiz
const defaultMeta: Record<Lang, Meta> = {
  uz: {
    title: "Xitoyda o'qish - Ta'lim olish imkoniyatlari",
    description: "Xitoyning eng yaxshi universitetlariga o'qishga kirishda yordam beramiz. Til kurslari, bakalavr, magistratura.",
    keywords: ['xitoyda oqish', 'xitoy universitetlari', 'xitoyda talim']
  },
  ru: {
    title: 'Study in China - Образование в Китае',
    description: 'Помогаем поступить в лучшие университеты Китая. Языковые курсы, бакалавриат, магистратура.',
    keywords: ['образование в китае', 'учеба в китае', 'университеты китая']
  },
  en: {
    title: 'Study in China - Education Opportunities',
    description: 'We help you enroll in top Chinese universities. Language courses, bachelor, master degrees.',
    keywords: ['study in china', 'chinese universities', 'education in china']
  }
};

const pageMeta = { ...defaultMeta[lang], ...meta };

// Canonical URL va alternate linklar uchun to'liq URL
const siteUrl = 'https://yoursite.com'; // O'z domeningizni kiriting
const fullCanonicalUrl = `${siteUrl}/${lang}${canonicalUrl}`;
---

<!DOCTYPE html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description} />
    {pageMeta.keywords && (
      <meta name="keywords" content={pageMeta.keywords.join(', ')} />
    )}

    <!-- Canonical URL -->
    <link rel="canonical" href={fullCanonicalUrl} />

    <!-- Alternate language versions -->
    {Object.keys(languages).map((langCode) => (
      <link
        rel="alternate"
        hreflang={langCode}
        href={`${siteUrl}/${langCode}${canonicalUrl}`}
      />
    ))}

    <!-- x-default for search engines -->
    <link 
      rel="alternate" 
      href={`${siteUrl}/uz${canonicalUrl}`} 
      hreflang="x-default"
    />

    <!-- Preload critical assets -->
    <link 
      rel="preload" 
      href="/vendor/aos/aos.css" 
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <link 
      rel="preload" 
      href="/vendor/aos/aos.js" 
      as="script"
    />

    <!-- Preconnect to important domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Inline critical CSS -->
    <style is:inline>
      /* Add critical CSS here */
      .critical-hidden { opacity: 0; }
      .critical-visible { opacity: 1; transition: opacity .3s; }
    </style>

    <ViewTransitions />
  </head>
  <body class="min-h-screen flex flex-col">
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1 pt-16">
        <slot />
      </main>
      <Footer />
    </div>

    <OfferPopup lang={lang} autoShow={false} />

    <script>
      // Import transitions script
      import '../components/scripts/transitions';

      // Import icon optimizer
      import '../components/scripts/icon-optimizer';

      // Import AOS initializer
      import '../components/scripts/aos-init';

      // Правильный импорт функций оптимизации производительности
      import { measurePerformance, optimizeImages, optimizeFonts, disableUnnecessaryAnimations } from '@/utils/performance-optimizer';
      
      // Performance measurement
      document.addEventListener('astro:page-load', () => {
        // Send performance metrics to console
        if (window.performance) {
          const navigationTiming = performance.getEntriesByType('navigation')[0];
          if (navigationTiming) {
            console.log(`Page load time: ${navigationTiming.duration.toFixed(0)}ms`);
          }
        }
      });

      // Lazy load images
      document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        if ('loading' in HTMLImageElement.prototype) {
          lazyImages.forEach(img => {
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
          });
        } else {
          // Fallback for browsers that don't support lazy loading
          const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                }
                lazyImageObserver.unobserve(img);
              }
            });
          });

          lazyImages.forEach(img => lazyImageObserver.observe(img));
        }
      });

      // Optimize animations
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      // Initialize performance optimizations
      document.addEventListener('DOMContentLoaded', () => {
        measurePerformance();
        optimizeImages();
        optimizeFonts();
        disableUnnecessaryAnimations();
      });

      // Report metrics on page transitions
      document.addEventListener('astro:page-load', () => {
        measurePerformance();
      });
    </script>
  </body>
</html>
