<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { avatarTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
  export let src: string | undefined = undefined;
  export let alt: string = '';
  export let fallback: string = '';
  
  let imageError = false;
  
  function handleError() {
    imageError = true;
  }
</script>

<div
  class={cn(
    avatarTheme.base,
    className
  )}
>
  {#if src && !imageError}
    <img 
      {src} 
      {alt}
      on:error={handleError}
      class={avatarTheme.image}
    />
  {:else if fallback}
    <div class={avatarTheme.fallback}>
      {fallback}
    </div>
  {/if}
  
  <slot />
</div> 