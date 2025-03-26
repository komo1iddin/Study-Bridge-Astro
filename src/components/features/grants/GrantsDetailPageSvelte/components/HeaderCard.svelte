<script lang="ts">
  import { Card, CardContent } from "@/components/ui/svelte";
  import { Badge } from "@/components/ui/svelte";
  import { Award } from "lucide-svelte";
  import { onMount, createEventDispatcher } from "svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';

  export let grant: TransformedGrantData;
  export let activeTab: string;

  const dispatch = createEventDispatcher<{
    change: string;
  }>();

  // Function to handle tab clicks with logging
  function handleTabClick(value: string) {
    console.log("Tab clicked:", value);
    console.log("Before change, activeTab was:", activeTab);
    dispatch('change', value);
  }

  onMount(() => {
    console.log("HeaderCard mounted with activeTab:", activeTab);
  });
</script>

<style>
  /* Custom badge styles to match React version */
  :global(.custom-badge) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px; /* Full rounded */
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  :global(.custom-badge:hover) {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  .badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>

<Card class="overflow-hidden border-none shadow-lg">
  <div class="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white relative">
    <div class="absolute top-0 right-0 w-32 h-32 opacity-10">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="1" fill="none" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="1" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1" fill="none" />
      </svg>
    </div>
    <span class="custom-badge mb-4">2024-yil dasturi</span>
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
        <Award class="h-10 w-10 text-white" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">{grant.title}</h1>
        <p class="text-white/80 mt-2 text-lg">{grant.description}</p>
        <div class="badge-container mt-4">
          {#each grant.badges as badge, index}
            <span class="custom-badge">
              {badge.text}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <CardContent class="p-0">
    <div class="w-full">
      <div class="grid grid-cols-4 bg-slate-100 rounded-none h-auto p-0">
        <button 
          class="py-3 rounded-none {activeTab === 'overview' ? 'bg-white text-slate-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}"
          on:click={() => handleTabClick('overview')}
        >
          {grant.tabs.overview.title}
        </button>
        <button 
          class="py-3 rounded-none {activeTab === 'benefits' ? 'bg-white text-slate-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}"
          on:click={() => handleTabClick('benefits')}
        >
          {grant.tabs.benefits.title}
        </button>
        <button 
          class="py-3 rounded-none {activeTab === 'requirements' ? 'bg-white text-slate-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}"
          on:click={() => handleTabClick('requirements')}
        >
          {grant.tabs.requirements.title}
        </button>
        <button 
          class="py-3 rounded-none {activeTab === 'process' ? 'bg-white text-slate-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}"
          on:click={() => handleTabClick('process')}
        >
          {grant.tabs.process.title}
        </button>
      </div>
    </div>
  </CardContent>
</Card> 