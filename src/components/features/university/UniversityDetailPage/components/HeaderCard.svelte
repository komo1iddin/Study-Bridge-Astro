<script lang="ts">
  import { Card, CardContent } from "@/components/ui/svelte";
  import { MapPin, Users, ChevronDown } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import type { UniversityDetailTranslations } from "@/i18n/features/university/universityDetail";
  import { onMount, createEventDispatcher } from 'svelte';

  export let university: University;
  export let activeTab: string;
  export let lang: Lang;
  export let t: UniversityDetailTranslations;

  // Create event dispatcher instead of using callback
  const dispatch = createEventDispatcher<{
    change: string;
  }>();

  // Function to handle tab clicks with logging
  function handleTabClick(value: string) {
    console.log("Tab clicked:", value);
    console.log("Before change, activeTab was:", activeTab);
    dispatch('change', value);
  }

  // Extract localized content
  $: description = typeof university.description === 'object' 
    ? university.description[lang] || university.description.en 
    : university.description;

  $: students = typeof university.students === 'object'
    ? university.students[lang] || (university.students as any).en
    : university.students;

  // Define tabs using translations
  $: tabs = [
    { value: "overview", label: t.tabs.overview },
    { value: "programs", label: t.tabs.programs },
    { value: "admission", label: t.tabs.admission },
    { value: "images", label: t.tabs.images },
    { value: "dorms", label: t.tabs.dorms },
    { value: "faq", label: t.tabs.faq }
  ];

  // Get active tab label
  $: activeTabLabel = tabs.find(tab => tab.value === activeTab)?.label || t.selectSection;

  onMount(() => {
    console.log("HeaderCard mounted with activeTab:", activeTab);
  });
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
            {t.badges.featured}
          </span>
        {/if}
        {#if university.hasGrants}
          <span class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            {t.badges.grantsAvailable}
          </span>
        {/if}
        <span class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          {t.badges.rank.replace('{rank}', String(university.ranking || 'N/A'))}
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
            on:change={(e) => handleTabClick((e.target as HTMLSelectElement).value)}
            aria-label={t.selectSection}
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
      <div class="w-full">
        <div class="flex bg-slate-100 rounded-none h-auto p-0">
          {#each tabs as tab}
            <button 
              class="py-3 px-4 rounded-none flex-1 text-center whitespace-nowrap {activeTab === tab.value ? 'bg-white text-slate-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}"
              on:click={() => handleTabClick(tab.value)}
            >
              {tab.label}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </CardContent>
</Card> 