<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { tabsTheme } from '@/lib/theme-utils';
  
  export let value: string;
  export let currentValue: string = '';
  export let className: string = '';
  
  $: active = currentValue === value;
</script>

{#if active}
  <div
    class={cn(
      tabsTheme.content,
      className
    )}
    data-state={active ? "active" : "inactive"}
    role="tabpanel"
    {...$$restProps}
  >
    <slot />
  </div>
{/if} 