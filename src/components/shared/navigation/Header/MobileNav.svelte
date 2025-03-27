<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Menu, X, ChevronDown, Globe, Phone, Mail, Languages, Check } from "lucide-svelte";
  import { slide, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  // Import from @/ paths
  import { cn } from "@/lib/utils";
  import { getNavigation, getLocalizedLanguages } from "@/data/constants/navigation";
  import { getLangFromUrl, type Lang } from "@/i18n/langUtils";
  import { getHeaderTranslations } from "@/i18n/features/layout/header";
  import { getLanguageSelectorTranslations } from '@/i18n/features/shared/languageSelector';
  import type { HeaderTranslations } from "@/i18n/features/layout/header/types";

  // Types
  type NavigationItem = {
    name: string;
    href?: string;
    items?: NavigationItem[];
  };

  // Props
  export let currentPath: string;
  export let currentLang: Lang = 'en';
  export let pathname: string = '';

  // State
  let isClient = false;
  let isOpen = false;
  let expandedItem: string | null = null;
  let showLanguages = false;
  let browser = false;
  
  // Store original body styles to restore them later
  let originalBodyStyles = {
    overflow: '',
    paddingRight: ''
  };
  
  // Extract language from path
  const lang = currentPath.split("/")[1] as Lang || 'uz';
  let currentLanguage = lang;
  
  // Translations and menu data
  let t: HeaderTranslations;
  let languageT = getLanguageSelectorTranslations(currentLang);
  $: menuItems = getNavigation(lang);
  $: languagesList = getLocalizedLanguages(lang);

  // Client-side rendering check
  onMount(() => {
    isClient = true;
    browser = typeof window !== 'undefined';
    
    // Get translations
    t = getHeaderTranslations(lang);
    
    // Store original body styles
    if (typeof document !== 'undefined') {
      originalBodyStyles = {
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight
      };
    }

    // Add keyboard event handler for language switching
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        const key = e.key.toLowerCase();
        if (key === 'u') { // Uzbek
          window.location.href = getPathForLang('uz');
        } else if (key === 'r') { // Russian
          window.location.href = getPathForLang('ru');
        } else if (key === 'e') { // English
          window.location.href = getPathForLang('en');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  // Clean up when component is destroyed
  onDestroy(() => {
    // Reset body styles when component is destroyed
    resetBodyStyles();
  });

  // Handle menu state changes
  function openMenu() {
    if (!isClient) return;
    
    isOpen = true;
    
    // Calculate scrollbar width to prevent content shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Save original styles if not already saved
    originalBodyStyles = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight
    };
    
    // Apply styles to prevent scrolling
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add("mobile-menu-open");
  }
  
  function closeMenu() {
    if (!isClient) return;
    
    isOpen = false;
    resetBodyStyles();
  }
  
  function resetBodyStyles() {
    if (typeof document === 'undefined') return;
    
    // Restore original body styles
    document.body.style.overflow = originalBodyStyles.overflow;
    document.body.style.paddingRight = originalBodyStyles.paddingRight;
    document.body.classList.remove("mobile-menu-open");
  }

  // Event handlers
  function toggleSubmenu(name: string) {
    expandedItem = expandedItem === name ? null : name;
  }
  
  function handleLanguageSelect(code: string) {
    // Update language and properly redirect
    currentLanguage = code as Lang;
    
    // If there's a currentPath, use it to construct the new URL with the new language
    if (currentPath) {
      // If path has language prefix, replace it; otherwise, add it
      const newPath = currentPath.substring(3) || '/';
      window.location.href = `/${code}${newPath}`;
    } else {
      window.location.href = `/${code}`;
    }
    
    showLanguages = false;
    closeMenu();
  }

  // Make showOfferPopup available safely
  function showApplicationForm() {
    // Close menu first to prevent any issues
    closeMenu();
    
    // Small timeout to ensure menu is closed properly before showing popup
    setTimeout(() => {
      // @ts-ignore
      if (window.showOfferPopup) {
        // @ts-ignore
        window.showOfferPopup();
      }
    }, 10);
  }

  function getPathForLang(lang: Lang) {
    // If we're at the root path of a language, go to the new language root
    if (pathname === `/${currentLang}` || pathname === `/${currentLang}/`) {
      return `/${lang}/`;
    }
    
    // Otherwise, replace the language prefix in the path
    return pathname.replace(new RegExp(`^/${currentLang}`), `/${lang}`);
  }
</script>

{#if isClient}
  <button
    on:click={openMenu}
    class="menu-trigger p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-150"
    aria-label={t?.mobileMenu.menu || "Menu"}
  >
    <Menu class="h-6 w-6" />
  </button>

  {#if isOpen}
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51]"
      on:click={closeMenu}
      transition:fly|local={{ duration: 180, opacity: 0, easing: quintOut }}
    ></div>
    
    <!-- Menu container with optimized transitions -->
    <div
      class="mobile-menu-container fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[52] flex flex-col shadow-xl h-[100dvh]"
      transition:fly|local={{ duration: 200, x: 300, opacity: 1, easing: quintOut }}
    >
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-medium">{t?.mobileMenu.menu || "Menu"}</h2>
        <button
          on:click={closeMenu}
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
          aria-label={t?.mobileMenu.close || "Close"}
        >
          <X class="h-5 w-5" />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto">
        <nav class="py-2">
          <ul class="space-y-1">
            {#each menuItems as item (item.name)}
              <li>
                {#if item.items}
                  <div class="px-2">
                    <button
                      on:click={() => toggleSubmenu(item.name)}
                      class="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                    >
                      <span class="font-medium">{item.name}</span>
                      <ChevronDown
                        class={cn(
                          "h-5 w-5 text-gray-500 transition-transform duration-200",
                          expandedItem === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    
                    {#if expandedItem === item.name}
                      <ul class="pl-4 space-y-1 py-2" transition:slide|local={{ duration: 200, easing: quintOut }}>
                        {#each item.items as subItem (subItem.name)}
                          <li>
                            <a
                              href={subItem.href}
                              class="block p-3 rounded-lg text-gray-600 hover:bg-gray-50 active:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                              on:click={closeMenu}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </div>
                {:else}
                  <a
                    href={item.href}
                    class="block mx-2 p-3 rounded-lg font-medium hover:bg-gray-50 active:bg-gray-100 hover:text-blue-600 transition-colors duration-150"
                    on:click={closeMenu}
                  >
                    {item.name}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      </div>

      <!-- Footer section -->
      <div class="mt-auto border-t">
        <!-- Contact info -->
        <div class="p-4 space-y-3">
          <a
            href="tel:+998901234567"
            class="flex items-center gap-3 hover:text-blue-600 active:text-blue-700 transition-colors duration-150"
          >
            <Phone class="h-5 w-5 text-gray-500" />
            <span class="text-gray-600">+998 90 123-45-67</span>
          </a>
          <a
            href="mailto:info@company.uz"
            class="flex items-center gap-3 hover:text-blue-600 active:text-blue-700 transition-colors duration-150"
          >
            <Mail class="h-5 w-5 text-gray-500" />
            <span class="text-gray-600">info@company.uz</span>
          </a>
        </div>
        
        <!-- Language selector -->
        <div class="px-4 py-3 border-t">
          <button
            on:click={() => showLanguages = !showLanguages}
            class="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
          >
            <Globe class="h-5 w-5 text-gray-500" />
            <span class="font-medium">Select Language</span>
            <ChevronDown class={cn(
              "ml-auto h-5 w-5 text-gray-500 transition-transform duration-200",
              showLanguages && "rotate-180"
            )} />
          </button>
          
          {#if showLanguages}
            <div class="mt-2 space-y-1 px-3" transition:slide|local={{ duration: 200, easing: quintOut }}>
              {#each languagesList as language (language.code)}
                <a
                  href={getPathForLang(language.code)}
                  class={cn(
                    "flex items-center px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150",
                    currentLanguage === language.code ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
                  )}
                  on:click={(e) => {
                    e.preventDefault();
                    handleLanguageSelect(language.code);
                  }}
                >
                  {language.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>

        <!-- CTA button -->
        <div class="p-4">
          <button
            class="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition-all duration-150 hover:shadow-md"
            on:click={showApplicationForm}
          >
            {t?.cta.applyButton || "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  {/if}
{:else}
  <!-- SSR fallback -->
  <button class="menu-trigger p-2 text-gray-700" aria-label="Open Menu">
    <Menu class="h-6 w-6" />
  </button>
{/if} 