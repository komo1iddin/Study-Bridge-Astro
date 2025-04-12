<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Menu } from "lucide-svelte";
  import type { ComponentType } from "svelte";
  
  // Only import additional icons when needed (performance optimization)
  let X: ComponentType;
  let ChevronDown: ComponentType;
  let Globe: ComponentType;
  let Phone: ComponentType;
  let Mail: ComponentType;
  let Languages: ComponentType;
  let Check: ComponentType;
  
  // Import from @/ paths
  import { cn } from "@/lib/utils";
  import { getLangFromUrl, type Lang } from "@/i18n/langUtils";
  import { getHeaderTranslations } from "@/i18n/features/layout/header";
  
  // Will load later for better performance
  let getNavigation: Function;
  let getLocalizedLanguages: Function;
  let getLanguageSelectorTranslations: Function;
  
  // Animation utilities
  import type { TransitionConfig } from "svelte/transition";
  type TransitionFn = (node: Element, options: any) => TransitionConfig;
  type EasingFn = (t: number) => number;
  
  let slide: TransitionFn;
  let fly: TransitionFn;
  let quintOut: EasingFn;
  let cubicOut: EasingFn;
  let quartOut: EasingFn;

  // Types for menu items
  interface NavigationItem {
    name: string;
    href?: string;
    items?: NavigationItem[];
  }

  interface LanguageItem {
    code: string;
    name: string;
  }

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
  let fullyLoaded = false;
  let menuItems: NavigationItem[] = [];
  let languagesList: LanguageItem[] = [];
  
  // Store original body styles to restore them later
  let originalBodyStyles = {
    overflow: '',
    paddingRight: ''
  };
  
  // Extract language from path
  const lang = currentPath.split("/")[1] as Lang || 'uz';
  let currentLanguage = lang;
  
  // Translations and menu data
  let t: any;
  let languageT: any;

  // Dynamically import components and data when needed
  async function loadFullFunctionality() {
    if (fullyLoaded) return;
    
    // Import animation utilities
    const animUtils = await import("svelte/transition");
    slide = animUtils.slide;
    fly = animUtils.fly;
    
    const easingUtils = await import("svelte/easing");
    quintOut = easingUtils.quintOut;
    quartOut = easingUtils.quartOut;
    
    // Import icon components
    const icons = await import("lucide-svelte");
    X = icons.X;
    ChevronDown = icons.ChevronDown;
    Globe = icons.Globe;
    Phone = icons.Phone;
    Mail = icons.Mail;
    Languages = icons.Languages;
    Check = icons.Check;
    
    // Import navigation data
    const navUtils = await import("@/data/constants/navigation");
    getNavigation = navUtils.getNavigation;
    getLocalizedLanguages = navUtils.getLocalizedLanguages;
    
    // Import language selector translations
    const langSelTranslations = await import('@/i18n/features/shared/languageSelector');
    getLanguageSelectorTranslations = langSelTranslations.getLanguageSelectorTranslations;
    
    languageT = getLanguageSelectorTranslations(currentLang);
    menuItems = getNavigation(lang) as NavigationItem[];
    languagesList = getLocalizedLanguages(lang) as LanguageItem[];
    
    fullyLoaded = true;
  }

  // Client-side rendering check - minimal initial functionality
  onMount(async () => {
    isClient = true;
    browser = typeof window !== 'undefined';
    
    // Minimal initial load - just get header translations
    t = getHeaderTranslations(lang);
    
    // Store original body styles
    if (typeof document !== 'undefined') {
      originalBodyStyles = {
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight
      };
    }

    // Pre-load full functionality with a slight delay to prioritize initial render
    setTimeout(() => {
      loadFullFunctionality();
    }, 100);
  });
  
  // Clean up when component is destroyed
  onDestroy(() => {
    // Reset body styles when component is destroyed
    resetBodyStyles();
  });

  // Handle menu state changes
  async function openMenu() {
    if (!isClient) return;
    
    // Make sure all functionality is loaded when menu opens
    if (!fullyLoaded) {
      await loadFullFunctionality();
    }
    
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
    aria-label={t?.mobileMenu?.menu || "Menu"}
  >
    <Menu class="h-6 w-6" />
  </button>

  {#if isOpen && fullyLoaded}
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51]"
      on:click={closeMenu}
      on:keydown={(e) => e.key === 'Enter' && closeMenu()}
      role="button"
      tabindex="0"
      in:fly|local={{ duration: 180, opacity: 0, easing: quintOut }}
      out:fly|local={{ duration: 100, opacity: 0, easing: quartOut }}
    ></div>
    
    <!-- Menu container with optimized transitions -->
    <div
      class="mobile-menu-container fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[52] flex flex-col shadow-xl h-[100dvh]"
      in:fly|local={{ duration: 200, x: 300, opacity: 1, easing: quintOut }}
      out:fly|local={{ duration: 120, x: 300, easing: quartOut }}
    >
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-medium">{t?.mobileMenu?.menu || "Menu"}</h2>
        <button
          on:click={closeMenu}
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
          aria-label={t?.mobileMenu?.close || "Close"}
        >
          <svelte:component this={X} class="h-5 w-5" />
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
                      <svelte:component 
                        this={ChevronDown}
                        class={cn(
                          "h-5 w-5 text-gray-500 transition-transform duration-200",
                          expandedItem === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    
                    {#if expandedItem === item.name}
                      <ul class="pl-4 space-y-1 py-2" 
                        in:slide|local={{ duration: 200, easing: quintOut }}
                        out:slide|local={{ duration: 100, easing: quartOut }}
                      >
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
                  <div class="px-2">
                    <a
                      href={item.href}
                      class="flex items-center w-full p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                      class:text-blue-600={currentPath === item.href}
                      on:click={closeMenu}
                    >
                      <span class="font-medium">{item.name}</span>
                    </a>
                  </div>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      </div>

      <!-- Bottom section with language selector -->
      <div class="mt-auto p-4 border-t">
        <div class="px-2">
          <button
            on:click={() => showLanguages = !showLanguages}
            class="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
          >
            <div class="flex items-center">
              <svelte:component this={Globe} class="h-5 w-5 mr-3 text-gray-500" />
              <span class="font-medium">{t?.language?.title || "Language"}</span>
            </div>
            <svelte:component
              this={ChevronDown}
              class={cn(
                "h-5 w-5 text-gray-500 transition-transform duration-200",
                showLanguages && "rotate-180"
              )}
            />
          </button>
          
          {#if showLanguages}
            <ul class="mt-2 space-y-1" 
              in:slide|local={{ duration: 200, easing: quintOut }}
              out:slide|local={{ duration: 100, easing: quartOut }}
            >
              {#each languagesList as lang (lang.code)}
                <li>
                  <button
                    on:click={() => handleLanguageSelect(lang.code)}
                    class="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                  >
                    <span>{lang.name}</span>
                    {#if currentLanguage === lang.code}
                      <svelte:component this={Check} class="h-5 w-5 text-blue-600" />
                    {/if}
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    </div>
  {:else if isOpen}
    <!-- Simple loading state while waiting for full functionality -->
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51]"></div>
    <div class="fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[52] flex flex-col shadow-xl h-[100dvh]">
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-medium">{t?.mobileMenu?.menu || "Menu"}</h2>
        <button
          on:click={closeMenu}
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
        >
          <div class="h-5 w-5">×</div>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="loading-spinner"></div>
      </div>
    </div>
  {/if}
{/if}

<style>
  /* Mobile menu loading spinner */
  .loading-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #2463EB;
    animation: spin 0.8s ease-in-out infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style> 