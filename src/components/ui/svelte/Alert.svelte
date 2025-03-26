<script>
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { alertTheme } from '@/lib/theme-utils';
  
  export let variant = 'default';
  let className = '';
  export { className as class };
</script>

<div
  role="alert"
  class={cn(
    alertTheme.base,
    alertTheme.variant[variant],
    className
  )}
>
  <div class="flex items-start gap-4">
    {#if $$slots.default}
      <slot />
    {/if}
  </div>
</div> 