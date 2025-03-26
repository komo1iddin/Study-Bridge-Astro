<script lang="ts">
  import { Card, CardContent } from "@/components/ui/svelte";
  import { MapPin, Users, ChevronDown } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import { onMount, onDestroy } from 'svelte';

  export let university: University;
  export let activeTab: string;
  export let onTabChange: (value: string) => void;
  export let lang: Lang;

  // Extract localized content
  $: description = typeof university.description === 'object' 
    ? university.description[lang] || university.description.en 
    : university.description;

  $: students = typeof university.students === 'object'
    ? university.students[lang] || university.students.en
    : university.students;

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "programs", label: "Programs" },
    { value: "admission", label: "Admission" },
    { value: "facilities", label: "Facilities" },
    { value: "images", label: "Images" },
    { value: "dorms", label: "Dorms" },
    { value: "faq", label: "FAQ" }
  ];

  // Get active tab label
  $: activeTabLabel = tabs.find(tab => tab.value === activeTab)?.label || 'Select section';
</script>

<Card class="overflow-hidden border-none shadow-lg">
  <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 md:p-8 text-white relative">
    <div class="absolute top-0 right-0 w-32 h-32 opacity-10">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="1" fill="none" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="1" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1" fill="none" />
      </svg>
    </div>
    
    <div class="space-y-4">
      <div class="flex flex-wrap gap-2">
        {#if university.featured}
          <span class="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            Featured
          </span>
        {/if}
        {#if university.hasGrants}
          <span class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            Grants Available
          </span>
        {/if}
        <span class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          Rank #{university.ranking || 'N/A'}
        </span>
      </div>

      <div>
        <h1 class="text-2xl sm:text-2xl md:text-3xl font-bold">{university.name}</h1>
        <p class="text-white/80 mt-2 text-base">
          {description}
        </p>
        
        <div class="flex flex-wrap items-center gap-2 sm:gap-4 mt-3">
          {#if university.educationType && university.educationType.length > 0}
            <div class="flex flex-wrap gap-1.5">
              {#each university.educationType as type}
                <span 
                  class="inline-flex items-center rounded-full bg-indigo-50/10 border border-white/20 px-2.5 py-0.5 text-xs font-medium text-white"
                >
                  {type}
                </span>
              {/each}
            </div>
          {/if}
        </div>

        <div class="flex flex-wrap items-center gap-3 mt-4 text-base">
          <div class="flex items-center gap-1">
            <Users class="h-5 w-5" />
            <span>{students}</span>
          </div>
          <div class="flex items-center gap-1">
            <MapPin class="h-5 w-5" />
            <span>{university.city}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CardContent class="p-0">
    <!-- Mobile Dropdown with Custom Styling -->
    <div class="md:hidden">
      <div class="p-2 bg-slate-100">
        <div class="relative">
          <!-- Custom Styled Select with Icon -->
          <select 
            class="w-full appearance-none bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none text-slate-800 font-medium p-2.5 pr-10"
            value={activeTab}
            on:change={(e) => onTabChange((e.target as HTMLSelectElement).value)}
            aria-label="Select section"
          >
            {#each tabs as tab}
              <option value={tab.value}>{tab.label}</option>
            {/each}
          </select>
          <!-- Positioned Icon -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
            <ChevronDown class="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Tabs -->
    <div class="hidden md:block">
      <div class="w-full overflow-hidden">
        <div class="flex bg-slate-100 rounded-none h-auto">
          {#each tabs as tab}
            <div
              role="button"
              tabindex="0"
              class="px-5 py-3 whitespace-nowrap focus:outline-none cursor-pointer transition-colors duration-200 hover:bg-slate-50 border-b-2"
              style="border-color: {activeTab === tab.value ? 'var(--color-blue-600)' : 'transparent'}; 
                     background-color: {activeTab === tab.value ? 'white' : 'transparent'};"
              class:text-blue-600={activeTab === tab.value}
              class:font-medium={activeTab === tab.value}
              class:text-slate-600={activeTab !== tab.value}
              on:click={() => onTabChange(tab.value)}
              on:keydown={(e) => e.key === 'Enter' && onTabChange(tab.value)}
            >
              {tab.label}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </CardContent>
</Card> 