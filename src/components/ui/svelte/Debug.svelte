<script lang="ts">
  import { onMount } from 'svelte';
  
  interface DebugData {
    isMobile: boolean;
    viewport: string;
    performanceFlags: {
      enableReducedMotion: boolean;
      enableLowPowerMode: boolean;
      forceReducedAnimations: boolean;
    };
    lang: string;
  }

  export let data: DebugData;
  
  onMount(() => {
    console.log('Debug component mounted');
    console.log('Checking for Accordion elements:', document.querySelectorAll('button[aria-expanded]').length);
    
    // Add click event listener to document to debug accordion clicks
    document.addEventListener('click', (e) => {
      if (e.target && (e.target as HTMLElement).closest('button[aria-expanded]')) {
        console.log('Accordion button clicked:', e.target);
        console.log('Current aria-expanded:', (e.target as HTMLElement).closest('button[aria-expanded]')?.getAttribute('aria-expanded'));
      }
    });
  });
</script>

<div class="hidden">Debug component loaded</div>

<div class="bg-black/80 text-white p-4 rounded-lg font-mono text-xs space-y-1">
  <p>Mobile: {data.isMobile}</p>
  <p>Viewport: {data.viewport}</p>
  <p>Lang: {data.lang}</p>
  <div class="pt-2 mt-2 border-t border-white/20">
    <p>Reduced Motion: {data.performanceFlags.enableReducedMotion}</p>
    <p>Low Power: {data.performanceFlags.enableLowPowerMode}</p>
    <p>Reduced Anims: {data.performanceFlags.forceReducedAnimations}</p>
  </div>
</div> 