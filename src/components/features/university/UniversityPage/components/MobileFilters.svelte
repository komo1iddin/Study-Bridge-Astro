<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from "../../../../../components/ui/svelte";
  import { Filter, X } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import type { Filters } from '../lib/data';
  import Sidebar from './sidebar/Sidebar.svelte';
  import type { Lang } from '../../../../../i18n/langUtils';
  import type { UniversityPageTranslations } from '../../../../../i18n/features/university/universityPage';

  export let filters: Filters;
  export let cities: string[] = [];
  export let isOpen = false;
  export let t: UniversityPageTranslations;
  export let lang: Lang;
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
    reset: void;
    openStateChange: boolean;
  }>();
  
  function handleChange(event: CustomEvent<{ key: keyof Filters; value: string }>) {
    dispatch('change', event.detail);
  }
  
  function handleReset() {
    dispatch('reset');
  }
  
  function toggleSheet() {
    isOpen = !isOpen;
    dispatch('openStateChange', isOpen);
  }
</script>

<div class="flex items-center justify-between md:hidden">
  <h1 class="text-2xl font-bold">{t.list.title}</h1>
  <Button variant="outline" size="icon" on:click={toggleSheet}>
    <Filter class="h-4 w-4" />
    <span class="sr-only">{t.mobileFilters.open}</span>
  </Button>
</div>

{#if isOpen}
  <!-- Backdrop -->
  <div 
    class="fixed inset-0 z-50 bg-black/50" 
    on:click={toggleSheet}
    transition:fade|local={{ duration: 200, easing: cubicOut }}
  ></div>
  
  <!-- Sidebar -->
  <div 
    class="fixed left-0 top-0 z-50 h-full w-[300px] sm:w-[350px] bg-white shadow-lg"
    transition:fly|local={{ x: -350, duration: 300, opacity: 1, easing: cubicOut }}
  >
    <div class="flex items-center justify-between p-4 border-b">
      <h2 class="font-semibold">{t.mobileFilters.title}</h2>
      <Button variant="ghost" size="icon" on:click={toggleSheet} class="opacity-70 hover:opacity-100">
        <X class="h-4 w-4" />
      </Button>
    </div>
    <div class="p-4 overflow-y-auto h-[calc(100vh-60px)]">
      <Sidebar 
        {filters} 
        {cities} 
        {t}
        {lang}
        on:change={handleChange} 
        on:reset={handleReset} 
      />
    </div>
  </div>
{/if} 