<script lang="ts">
  import { onMount } from 'svelte';
  import { Home } from 'lucide-svelte';
  import type { University } from './lib/data';
  import type { Lang } from '../../../../i18n/langUtils';
  import { getUniversityPageTranslations } from '../../../../i18n/features/university/universityPage';
  import type { UniversityPageTranslations } from '../../../../i18n/features/university/universityPage';
  import { DEFAULT_FILTERS } from './lib/constants';
  import type { Filters } from './lib/data';
  import { useLazyLoad } from '@/utils/componentLazyLoader';
  
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
  $: translationsReady = Boolean(t && t.filters && t.list && t.card && t.breadcrumb);
  
  let filters: Filters = DEFAULT_FILTERS;
  let mobileFiltersOpen = false;
  let isLoading = true;
  
  // Create lazy load action for main content
  const lazyUniversities = useLazyLoad('university-list', {
    rootMargin: '200px',
    threshold: 0.1
  });
  
  onMount(() => {
    console.log("UniversityPage component mounted");
    // Simulate loading time or wait for data to be ready
    setTimeout(() => {
      isLoading = false;
    }, 800);
  });
  
  function handleFilterChange(event: CustomEvent<{key: keyof Filters, value: string}>) {
    const { key, value } = event.detail;
    isLoading = true;
    
    // Simulate filter processing time
    setTimeout(() => {
      filters = {
        ...filters,
        [key]: value
      };
      isLoading = false;
    }, 500);
  }
  
  function resetFilters() {
    isLoading = true;
    setTimeout(() => {
      filters = DEFAULT_FILTERS;
      isLoading = false;
    }, 500);
  }
  
  function handleMobileFiltersOpenChange(event: CustomEvent<boolean>) {
    mobileFiltersOpen = event.detail;
  }
  
  function toggleMobileFilters() {
    mobileFiltersOpen = !mobileFiltersOpen;
  }
</script>

{#if translationsReady}
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
          <main 
            class="flex-1 max-w-full lg:max-w-[calc(100%-20rem)] xl:max-w-[calc(100%-22rem)]"
            use:lazyUniversities
          >
            {#if isLoading}
              <div class="space-y-6 animate-pulse">
                <!-- Skeleton loading for list header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="h-8 bg-slate-200 rounded w-48 hidden sm:block"></div>
                  <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div class="h-4 bg-slate-200 rounded w-40"></div>
                  </div>
                </div>
                
                <!-- Skeleton loading for university cards -->
                <div class="flex flex-col gap-4 sm:gap-6">
                  {#each Array(5) as _, i}
                    <div class="w-full border rounded-lg shadow-sm overflow-hidden bg-white">
                      <div class="flex flex-col md:flex-row md:min-h-[260px]">
                        <!-- Logo skeleton -->
                        <div class="relative md:w-1/3 h-40 md:h-auto bg-slate-200"></div>
                        
                        <!-- Content skeleton -->
                        <div class="p-3 md:p-4 md:w-2/3">
                          <div class="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                          <div class="h-4 bg-slate-200 rounded w-1/3 mb-3"></div>
                          <div class="h-4 bg-slate-200 rounded w-full mb-2"></div>
                          <div class="h-4 bg-slate-200 rounded w-full mb-2"></div>
                          <div class="h-4 bg-slate-200 rounded w-2/3 mb-4"></div>
                          
                          <div class="flex gap-2 mb-4">
                            <div class="h-6 bg-slate-200 rounded-full w-20"></div>
                            <div class="h-6 bg-slate-200 rounded-full w-20"></div>
                          </div>
                          
                          <div class="border-t pt-4 mt-4 flex justify-between">
                            <div class="flex gap-2">
                              <div class="h-10 bg-slate-200 rounded w-16"></div>
                              <div class="h-10 bg-slate-200 rounded w-16"></div>
                            </div>
                            <div class="h-10 bg-slate-200 rounded w-28"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {:else}
              <UniversityList
                universities={universities}
                filters={filters}
                {t}
                {lang}
              />
            {/if}
          </main>
        </div>
      </div>
    </div>
  </div>
{/if} 