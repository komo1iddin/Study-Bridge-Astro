<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher } from 'svelte';
  import './svelte-components.css';
  import { avatarTheme } from '@/lib/theme-utils';
  
  export let src: string;
  export let alt: string = '';
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function handleError() {
    dispatch('error');
  }
</script>

<img 
  {src} 
  {alt}
  on:error={handleError}
  class={cn(avatarTheme.image, className)}
  {...$$restProps}
/> 