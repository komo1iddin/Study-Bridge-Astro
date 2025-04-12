<script>
  import { onMount } from 'svelte';
  
  // Simple props
  export let lang = 'uz';
  export let translations = {};
  
  // Simple state
  let mounted = false;
  
  onMount(() => {
    console.log('SimplifiedHero component mounted');
    mounted = true;
  });
</script>

<div class="simplified-hero bg-blue-100 p-8 rounded-lg mb-8">
  <h1 class="text-3xl font-bold text-center mb-4">Simplified Hero Component</h1>
  <p class="text-center">This is a simplified version of the hero component for debugging.</p>
  <p class="text-center mt-4">
    Current language: <span class="font-bold">{lang}</span>
  </p>
  <div class="mt-4 text-center">
    {#if mounted}
      <p class="text-green-600">✅ Component is hydrated</p>
    {:else}
      <p class="text-red-600">❌ Component is not yet hydrated</p>
    {/if}
  </div>
</div>

<style>
  .simplified-hero {
    max-width: 800px;
    margin: 0 auto;
  }
</style> 