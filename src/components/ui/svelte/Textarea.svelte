<script lang="ts">
  import { cn } from '@/lib/utils';
  import type { HTMLTextareaAttributes } from 'svelte/elements';
  import './svelte-components.css';
  import { textareaTheme } from '@/lib/theme-utils';
  
  interface $$Props extends HTMLTextareaAttributes {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
    className?: string;
  }
  
  export let value: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;
  export let rows: number = 3;
  export let className: string = '';
</script>

<textarea
  bind:value
  {rows}
  {placeholder}
  {disabled}
  class={cn(
    textareaTheme.base,
    className
  )}
  {...$$restProps}
></textarea> 