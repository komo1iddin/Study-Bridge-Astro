<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { sectionHeaderTheme } from '@/lib/theme-utils';
  
  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let maxWidth: string = "800px";
  export let className: string = '';
</script>

<div 
  class={cn(sectionHeaderTheme.container, className)}
  style="max-width: {maxWidth}"
>
  <h2 class={sectionHeaderTheme.title}>
    {title}
  </h2>
  
  {#if subtitle}
    <p class={sectionHeaderTheme.subtitle}>
      {subtitle}
    </p>
  {/if}
  
  <div class={sectionHeaderTheme.divider} />
</div> 