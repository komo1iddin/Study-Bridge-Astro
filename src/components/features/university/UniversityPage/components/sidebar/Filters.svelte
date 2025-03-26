<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Accordion } from '../../../../../../components/ui/svelte';
  import { Switch } from '../../../../../../components/ui/svelte';
  import { Label } from '../../../../../../components/ui/svelte';
  import { Button } from '../../../../../../components/ui/svelte';
  import { RotateCcw } from 'lucide-svelte';
  import type { Filters } from '../../lib/data';
  import { educationTypes, rankingRanges } from '../../lib/data';
  
  export let filters: Filters;
  export let cities: string[] = [];
  export let onReset: () => void;
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
  }>();
  
  function handleChange(key: keyof Filters, value: string) {
    dispatch('change', { key, value });
  }

  // Filter sections configuration
  const FILTER_SECTIONS = [
    {
      id: "education",
      title: "Ta'lim turi",
      placeholder: "Ta'lim turini tanlang",
      options: [
        { value: "all", label: "Barcha turlar" },
        ...educationTypes
      ],
      filterKey: "educationType" as keyof Filters
    },
    {
      id: "location",
      title: "Joylashuv",
      placeholder: "Shaharni tanlang",
      options: [
        { value: "all", label: "Barcha shaharlar" },
        ...cities.map(city => ({ value: city, label: city }))
      ],
      filterKey: "city" as keyof Filters
    },
    {
      id: "ranking",
      title: "Universitet reytingi",
      placeholder: "Reyting oralig'ini tanlang",
      options: [
        { value: "all", label: "Barcha reytinglar" },
        ...rankingRanges
      ],
      filterKey: "ranking" as keyof Filters
    },
    {
      id: "grants",
      title: "Grant imkoniyatlari",
      placeholder: "Grant holatini tanlang",
      options: [
        { value: "all", label: "Barchasi" },
        { value: "true", label: "Mavjud" },
        { value: "false", label: "Mavjud emas" }
      ],
      filterKey: "hasGrants" as keyof Filters
    }
  ];
  
  // Default to all sections open
  let expandedSections = FILTER_SECTIONS.map(section => section.id);
  
  // Handle filter select change
  function handleFilterChange(filterKey: keyof Filters, event: Event) {
    const select = event.target as HTMLSelectElement;
    handleChange(filterKey, select.value);
  }
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-medium">Filterlar</h3>
    <Button variant="ghost" size="sm" on:click={onReset} class="h-8 px-2 text-xs">
      <RotateCcw class="mr-1 h-3 w-3" />
      Qayta o'rnatish
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
    <h3 class="text-sm font-medium">Tezkor filterlar</h3>
    <div class="flex items-center justify-between">
      <Label for="featured" class="text-sm">
        Faqat tavsiya etilgan universitetlar
      </Label>
      <Switch
        id="featured"
        checked={filters.featured === "true"}
        on:change={(e) => handleChange("featured", e.detail.checked ? "true" : "all")}
      />
    </div>
  </div>
</div> 