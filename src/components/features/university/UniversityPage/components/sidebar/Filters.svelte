<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Accordion } from '../../../../../../components/ui/svelte';
  import { Switch } from '../../../../../../components/ui/svelte';
  import { Label } from '../../../../../../components/ui/svelte';
  import { Button } from '../../../../../../components/ui/svelte';
  import { RotateCcw } from 'lucide-svelte';
  import type { Filters } from '../../lib/data';
  import { educationTypes, rankingRanges } from '../../lib/data';
  import type { Lang } from '../../../../../../i18n/langUtils';
  import type { UniversityPageTranslations } from '../../../../../../i18n/features/university/universityPage';
  
  export let filters: Filters;
  export let cities: string[] = [];
  export let onReset: () => void;
  export let t: UniversityPageTranslations;
  export let lang: Lang;
  
  // Set default sections before any translations are available
  let expandedSections = ['education', 'location', 'ranking', 'grants'];
  let isMounted = false;
  
  onMount(() => {
    isMounted = true;
  });
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
  }>();
  
  function handleChange(key: keyof Filters, value: string) {
    dispatch('change', { key, value });
  }

  // Filter sections configuration - uses translations
  $: if (t && t.filters) {
    // Only update filter sections when translations are available
    const FILTER_SECTIONS = [
      {
        id: "education",
        title: t.filters.educationType.title,
        placeholder: t.filters.educationType.placeholder,
        options: [
          { value: "all", label: t.filters.educationType.all },
          { value: "bachelor", label: t.filters.educationType.bachelor },
          { value: "master", label: t.filters.educationType.master },
          { value: "language", label: t.filters.educationType.language },
          { value: "1+2", label: t.filters.educationType.program }
        ],
        filterKey: "educationType" as keyof Filters
      },
      {
        id: "location",
        title: t.filters.location.title,
        placeholder: t.filters.location.placeholder,
        options: [
          { value: "all", label: t.filters.location.all },
          ...(Array.isArray(cities) ? cities.map(city => ({ value: city, label: city })) : [])
        ],
        filterKey: "city" as keyof Filters
      },
      {
        id: "ranking",
        title: t.filters.ranking.title,
        placeholder: t.filters.ranking.placeholder,
        options: [
          { value: "all", label: t.filters.ranking.all },
          { value: "1-5", label: t.filters.ranking.top5 },
          { value: "6-10", label: t.filters.ranking.top10 },
          { value: "11-20", label: t.filters.ranking.top20 },
          { value: "21+", label: t.filters.ranking.other }
        ],
        filterKey: "ranking" as keyof Filters
      },
      {
        id: "grants",
        title: t.filters.grants.title,
        placeholder: t.filters.grants.placeholder,
        options: [
          { value: "all", label: t.filters.grants.all },
          { value: "true", label: t.filters.grants.available },
          { value: "false", label: t.filters.grants.notAvailable }
        ],
        filterKey: "hasGrants" as keyof Filters
      }
    ];
    
    // Update expanded sections only when mounted
    if (isMounted && !expandedSections.length) {
      expandedSections = FILTER_SECTIONS.map(section => section.id);
    }
  }
  
  // Handle filter select change
  function handleFilterChange(filterKey: keyof Filters, event: Event) {
    const select = event.target as HTMLSelectElement;
    handleChange(filterKey, select.value);
  }
  
  // Safe access to translations
  function getFilterTitle() {
    return t && t.filters ? t.filters.title : 'Filters';
  }
  
  function getFilterReset() {
    return t && t.filters ? t.filters.reset : 'Reset';
  }
  
  function getQuickFilters() {
    return t && t.filters ? t.filters.quickFilters : 'Quick Filters';
  }
  
  function getFeatured() {
    return t && t.filters ? t.filters.featured : 'Featured universities only';
  }
  
  // Default filter sections for initial render
  const DEFAULT_SECTIONS = [
    {
      id: "education",
      title: "Education Type",
      options: [{ value: "all", label: "All types" }],
      filterKey: "educationType" as keyof Filters
    },
    {
      id: "location",
      title: "Location",
      options: [{ value: "all", label: "All cities" }],
      filterKey: "city" as keyof Filters
    },
    {
      id: "ranking",
      title: "University Ranking",
      options: [{ value: "all", label: "All rankings" }],
      filterKey: "ranking" as keyof Filters
    },
    {
      id: "grants",
      title: "Grant Opportunities",
      options: [{ value: "all", label: "All" }],
      filterKey: "hasGrants" as keyof Filters
    }
  ];
  
  // Use default sections when translations aren't available
  $: FILTER_SECTIONS = t && t.filters ? getFilterSections() : DEFAULT_SECTIONS;
  
  function getFilterSections() {
    if (!t || !t.filters) return DEFAULT_SECTIONS;
    
    return [
      {
        id: "education",
        title: t.filters.educationType.title,
        placeholder: t.filters.educationType.placeholder,
        options: [
          { value: "all", label: t.filters.educationType.all },
          { value: "bachelor", label: t.filters.educationType.bachelor },
          { value: "master", label: t.filters.educationType.master },
          { value: "language", label: t.filters.educationType.language },
          { value: "1+2", label: t.filters.educationType.program }
        ],
        filterKey: "educationType" as keyof Filters
      },
      {
        id: "location",
        title: t.filters.location.title,
        placeholder: t.filters.location.placeholder,
        options: [
          { value: "all", label: t.filters.location.all },
          ...(Array.isArray(cities) ? cities.map(city => ({ value: city, label: city })) : [])
        ],
        filterKey: "city" as keyof Filters
      },
      {
        id: "ranking",
        title: t.filters.ranking.title,
        placeholder: t.filters.ranking.placeholder,
        options: [
          { value: "all", label: t.filters.ranking.all },
          { value: "1-5", label: t.filters.ranking.top5 },
          { value: "6-10", label: t.filters.ranking.top10 },
          { value: "11-20", label: t.filters.ranking.top20 },
          { value: "21+", label: t.filters.ranking.other }
        ],
        filterKey: "ranking" as keyof Filters
      },
      {
        id: "grants",
        title: t.filters.grants.title,
        placeholder: t.filters.grants.placeholder,
        options: [
          { value: "all", label: t.filters.grants.all },
          { value: "true", label: t.filters.grants.available },
          { value: "false", label: t.filters.grants.notAvailable }
        ],
        filterKey: "hasGrants" as keyof Filters
      }
    ];
  }
</script>

<div class="space-y-6 bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm p-4">
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-medium">{getFilterTitle()}</h3>
    <Button variant="ghost" size="sm" on:click={onReset} class="h-8 px-2 text-xs">
      <RotateCcw class="mr-1 h-3 w-3" />
      {getFilterReset()}
    </Button>
  </div>

  <div class="w-full">
    <!-- Using a more direct approach with Svelte -->
    {#each FILTER_SECTIONS as section (section.id)}
      <div class="border-b">
        <h3 class="flex">
          <button
            type="button"
            on:click={() => {
              if (expandedSections.includes(section.id)) {
                expandedSections = expandedSections.filter(id => id !== section.id);
              } else {
                expandedSections = [...expandedSections, section.id];
              }
            }}
            aria-expanded={expandedSections.includes(section.id)}
            class="flex flex-1 items-center justify-between py-3 text-sm font-medium transition-all pr-1"
          >
            {section.title}
            <div class="transition-transform duration-200 ml-2" class:rotate-180={expandedSections.includes(section.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </h3>
        
        {#if expandedSections.includes(section.id)}
          <div class="pt-1 pb-3 overflow-hidden text-sm transition-all" 
               transition:slide={{ duration: 150, easing: x => x }}>
            <div class="relative">
              <select 
                value={filters[section.filterKey]} 
                class="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                id={section.id}
                on:change={(e) => handleFilterChange(section.filterKey, e)}
              >
                {#each section.options as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="space-y-4 rounded-lg border bg-card p-4">
    <h3 class="text-sm font-medium">{getQuickFilters()}</h3>
    <div class="flex items-center justify-between">
      <Label for="featured" class="text-sm">
        {getFeatured()}
      </Label>
      <Switch
        id="featured"
        checked={filters.featured === "true"}
        on:change={(e) => handleChange("featured", e.detail.checked ? "true" : "all")}
      />
    </div>
  </div>
</div> 