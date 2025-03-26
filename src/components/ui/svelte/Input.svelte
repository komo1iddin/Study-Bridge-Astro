<script lang="ts">
  import { cn } from '@/lib/utils';
  import { inputTheme } from '@/lib/theme-utils';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Variant = 'default' | 'destructive' | 'outlined' | 'ghost';
  type Size = 'default' | 'sm' | 'lg';

  interface $$Props {
    type?: HTMLInputAttributes['type'];
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
    class?: string;
  }

  export let type: $$Props['type'] = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;
  export let variant: Variant = 'default';
  export let size: Size = 'default';
  
  let className = "";
  export { className as class };
</script>

<input
  {type}
  class={cn(
    inputTheme.base,
    inputTheme.variant[variant],
    inputTheme.size[size],
    className
  )}
  bind:value
  {placeholder}
  {disabled}
  {...$$restProps}
/> 