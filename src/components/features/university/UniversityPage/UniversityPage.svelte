<script lang="ts">
  import { onMount } from 'svelte';
  import { Home } from 'lucide-svelte';
  import type { University } from './lib/data';
  import type { Lang } from '../../../../i18n/langUtils';
  import { getUniversityPageTranslations } from '../../../../i18n/features/university/universityPage';
  import type { UniversityPageTranslations } from '../../../../i18n/features/university/universityPage';
  import { DEFAULT_FILTERS } from './lib/constants';
  import type { Filters } from './lib/data';
  
  import BackgroundDecoration from './components/BackgroundDecoration.svelte';
  import UniversityList from './components/UniversityList.svelte';
  import MobileFilters from './components/MobileFilters.svelte';
  import Sidebar from './components/sidebar/Sidebar.svelte';
  
  // Import styles
  import './styles/universitiesPage.css';
  
  export let universities: University[] = [];
  export let cities: string[] = [];
  export let lang: Lang = 'uz';
  
  // Get translations
  $: t = getUniversityPageTranslations(lang);
  $: translationsReady = Boolean(t && t.filters && t.list && t.card);
  
  let filters: Filters = DEFAULT_FILTERS;
  let mounted = false;
  let mobileFiltersOpen = false;
  
  // Set mounted flag synchronously if we're in browser environment
  if (typeof window !== 'undefined') {
    mounted = true;
  }
  
  function handleFilterChange(event: CustomEvent<{key: keyof Filters, value: string}>) {
    const { key, value } = event.detail;
    filters = {
      ...filters,
      [key]: value
    };
  }
  
  function resetFilters() {
    filters = DEFAULT_FILTERS;
  }
  
  function handleMobileFiltersOpenChange(event: CustomEvent<boolean>) {
    mobileFiltersOpen = event.detail;
  }
  
  function toggleMobileFilters() {
    mobileFiltersOpen = !mobileFiltersOpen;
  }
</script>

{#if !mounted}
  <!-- Loading State -->
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative">
    <div class="container mx-auto py-8 px-4 md:px-6 relative z-10">
      <div class="flex items-center justify-center h-64">
        <div class="animate-pulse flex flex-col items-center gap-4">
          <div class="h-12 w-12 rounded-full bg-blue-200"></div>
          <div class="h-4 w-48 bg-blue-200 rounded"></div>
          <div class="h-3 w-32 bg-blue-100 rounded"></div>
        </div>
      </div>
    </div>
  </div>
{:else if !translationsReady}
  <!-- Loading Translations -->
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative">
    <div class="container mx-auto py-8 px-4 md:px-6 relative z-10">
      <div class="flex items-center justify-center h-64">
        <div class="animate-pulse flex flex-col items-center gap-4">
          <div class="h-12 w-12 rounded-full bg-blue-200"></div>
          <div class="h-4 w-48 bg-blue-200 rounded"></div>
          <div class="h-3 w-32 bg-blue-100 rounded"></div>
          <p class="text-sm text-blue-700">Loading translations...</p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Main Layout -->
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden">
    <BackgroundDecoration />
    <div class="relative z-10">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Home class="h-3.5 w-3.5" />
          <span>/</span>
          <span class="text-slate-900 font-medium">{t.breadcrumb.universities}</span>
        </div>
        
        <!-- Mobile filters -->
        <div class="lg:hidden mb-6">
          <MobileFilters
            filters={filters}
            cities={cities}
            isOpen={mobileFiltersOpen}
            {t}
            {lang}
            on:change={handleFilterChange}
            on:reset={resetFilters}
            on:openStateChange={handleMobileFiltersOpenChange}
          />
        </div>
        
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Sidebar -->
          <aside class="hidden lg:block sticky top-8 h-fit md:w-64 lg:w-72 xl:w-80">
            <Sidebar
              filters={filters}
              cities={cities}
              {t}
              {lang}
              on:change={handleFilterChange}
              on:reset={resetFilters}
            />
          </aside>
          
          <!-- Main content -->
          <main class="flex-1 max-w-full lg:max-w-[calc(100%-20rem)] xl:max-w-[calc(100%-22rem)]">
            <UniversityList
              universities={universities}
              filters={filters}
              {t}
              {lang}
            />
          </main>
        </div>
      </div>
    </div>
  </div>
{/if} 