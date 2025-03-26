<script lang="ts">
  import { onMount } from 'svelte';
  
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