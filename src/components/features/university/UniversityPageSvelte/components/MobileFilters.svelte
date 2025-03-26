<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from "../../../../../components/ui/svelte";
  import { Sliders, ChevronDown, X } from 'lucide-svelte';
  import type { Filters } from '../lib/data';
  import { educationTypes, rankingRanges } from '../lib/data';

  export let filters: Filters;
  export let cities: string[] = [];
  export let isOpen = false;
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
    reset: void;
  }>();
  
  function handleChange(key: keyof Filters, value: string) {
    dispatch('change', { key, value });
  }
  
  function handleReset() {
    dispatch('reset');
  }
  
  function openModal() {
    isOpen = true;
  }
  
  function closeModal() {
    isOpen = false;
  }
  
  // Accordion state for mobile filters
  let expandedSections = {
    education: true,
    city: true,
    grants: true,
    ranking: true,
    featured: true
  };

  function toggleSection(section: string) {
    expandedSections[section] = !expandedSections[section];
  }
</script>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
    animation: fadeIn 0.2s ease-out;
  }
  
  .drawer {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 50;
    height: 100%;
    width: 100%;
    max-width: 20rem;
    padding: 0;
    outline: none;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    animation: slideIn 0.3s ease-out;
  }
  
  .drawer-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 100%;
    overflow-y: auto;
  }
  
  .accordion-content {
    padding: 0 1rem 1rem 1rem;
    transition: all 0.2s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
</style>

<div class="flex items-center justify-between gap-4 p-4 rounded-lg border bg-white shadow-sm">
  <div class="flex items-center gap-2">
    <Sliders class="h-4 w-4 text-muted-foreground" />
    <span class="text-sm font-medium">Filter</span>
  </div>
  
  <div class="flex items-center gap-2">
    <Button 
      variant="outline" 
      size="sm" 
      on:click={handleReset}
      class="h-8 px-3 text-xs"
    >
      Qayta o'rnatish
    </Button>
    
    <Button 
      variant="default" 
      size="sm" 
      on:click={openModal}
      class="h-8 px-3 text-xs"
    >
      Barcha filterlar
    </Button>
  </div>
</div>

{#if isOpen}
  <div class="backdrop" on:click={closeModal}></div>
  
  <div class="drawer">
    <div class="drawer-content">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">Filterlar</h3>
        <Button 
          variant="ghost" 
          size="icon"
          on:click={closeModal}
          class="h-8 w-8 rounded-full"
        >
          <X class="h-4 w-4" />
          <span class="sr-only">Close</span>
        </Button>
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        on:click={handleReset}
        class="h-8 px-2 text-xs"
      >
        Qayta o'rnatish
      </Button>

      <div class="space-y-4">
        <!-- Education Types -->
        <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
          <button 
            type="button" 
            class="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
            on:click={() => toggleSection('education')}
            aria-expanded={expandedSections.education}
          >
            <span>Ta'lim turi</span>
            <ChevronDown 
              class={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSections.education ? 'rotate-180' : ''}`} 
            />
          </button>

          {#if expandedSections.education}
            <div class="accordion-content">
              <div class="relative w-full">
                <select 
                  class="w-full p-2 pr-8 border border-input rounded-md bg-transparent text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.educationType}
                  on:change={(e) => handleChange("educationType", e.currentTarget.value)}
                >
                  <option value="all">Barcha turlar</option>
                  {#each educationTypes as type}
                    <option value={type.value}>{type.label}</option>
                  {/each}
                </select>
                <ChevronDown class="h-4 w-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          {/if}
        </div>
        
        <!-- Cities -->
        <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
          <button 
            type="button" 
            class="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
            on:click={() => toggleSection('city')}
            aria-expanded={expandedSections.city}
          >
            <span>Joylahuv</span>
            <ChevronDown 
              class={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSections.city ? 'rotate-180' : ''}`} 
            />
          </button>

          {#if expandedSections.city}
            <div class="accordion-content">
              <div class="relative w-full">
                <select 
                  class="w-full p-2 pr-8 border border-input rounded-md bg-transparent text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.city}
                  on:change={(e) => handleChange("city", e.currentTarget.value)}
                >
                  <option value="all">Barcha shaharlar</option>
                  {#each cities as city}
                    <option value={city}>{city}</option>
                  {/each}
                </select>
                <ChevronDown class="h-4 w-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          {/if}
        </div>
        
        <!-- University ranking -->
        <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
          <button 
            type="button" 
            class="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
            on:click={() => toggleSection('ranking')}
            aria-expanded={expandedSections.ranking}
          >
            <span>Universitet reytingi</span>
            <ChevronDown 
              class={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSections.ranking ? 'rotate-180' : ''}`} 
            />
          </button>

          {#if expandedSections.ranking}
            <div class="accordion-content">
              <div class="relative w-full">
                <select 
                  class="w-full p-2 pr-8 border border-input rounded-md bg-transparent text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.ranking}
                  on:change={(e) => handleChange("ranking", e.currentTarget.value)}
                >
                  <option value="all">Barcha reytinglar</option>
                  {#each rankingRanges as range}
                    <option value={range.value}>{range.label}</option>
                  {/each}
                </select>
                <ChevronDown class="h-4 w-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          {/if}
        </div>
        
        <!-- Has Grants -->
        <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
          <button 
            type="button" 
            class="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
            on:click={() => toggleSection('grants')}
            aria-expanded={expandedSections.grants}
          >
            <span>Grant imkoniyatlari</span>
            <ChevronDown 
              class={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSections.grants ? 'rotate-180' : ''}`} 
            />
          </button>

          {#if expandedSections.grants}
            <div class="accordion-content">
              <div class="relative w-full">
                <select 
                  class="w-full p-2 pr-8 border border-input rounded-md bg-transparent text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.hasGrants}
                  on:change={(e) => handleChange("hasGrants", e.currentTarget.value)}
                >
                  <option value="all">Barchasi</option>
                  <option value="true">With Grants</option>
                  <option value="false">Without Grants</option>
                </select>
                <ChevronDown class="h-4 w-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          {/if}
        </div>
        
        <!-- Featured -->
        <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
          <button 
            type="button" 
            class="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
            on:click={() => toggleSection('featured')}
            aria-expanded={expandedSections.featured}
          >
            <span>Tezkor filterlar</span>
            <ChevronDown 
              class={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSections.featured ? 'rotate-180' : ''}`} 
            />
          </button>

          {#if expandedSections.featured}
            <div class="accordion-content">
              <div class="py-2 flex items-center space-x-2">
                <div class="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="featured-checkbox-mobile"
                    class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={filters.featured === "true"}
                    on:change={(e) => handleChange("featured", e.currentTarget.checked ? "true" : "all")}
                  />
                  <label for="featured-checkbox-mobile" class="text-sm text-gray-700">
                    Faqat tavsiya etilgan universitetlar
                  </label>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
      
      <Button class="mt-4" on:click={closeModal}>Qo'llash</Button>
    </div>
  </div>
{/if} 