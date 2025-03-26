<script lang="ts">
  import { cn } from '@/lib/utils';
  import { buttonTheme } from '@/lib/theme-utils';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  type Size = 'default' | 'sm' | 'lg' | 'icon';

  interface $$Props extends HTMLButtonAttributes {
    variant?: Variant;
    size?: Size;
    class?: string;
    asChild?: boolean;
  }

  export let variant: Variant = 'default';
  export let size: Size = 'default';
  export let type: $$Props['type'] = 'button';
  export let disabled: $$Props['disabled'] = false;
  export let asChild: $$Props['asChild'] = false;

  let className = "";
  export { className as class };
  
  $: classes = cn(
    buttonTheme.base,
    buttonTheme.variant[variant],
    buttonTheme.size[size],
    className
  );
</script>

{#if asChild}
  <slot {className} {disabled} {type} {...$$restProps} />
{:else}
  <button
    {type}
    {disabled}
    class={classes}
    on:click
    {...$$restProps}
  >
    <slot />
  </button>
{/if} 