<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  
  export let href: string;
  export let text: string;
  export let variant: 'mobile' | 'desktop' = 'desktop';
  export let showOnMobile: boolean = true;
  export let showOnDesktop: boolean = true;
  export let className: string = '';
  
  const baseClasses = "inline-flex items-center font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm";
  
  const variantClasses = {
    mobile: "px-6 py-3 text-sm",
    desktop: "px-8 py-4 text-lg hover:scale-105 shadow-md"
  };

  let visibilityClasses = '';
  if (!showOnMobile) visibilityClasses += "hidden md:inline-flex ";
  if (!showOnDesktop) visibilityClasses += "md:hidden ";
  
  const iconClasses = {
    mobile: "ml-1.5 h-4 w-4",
    desktop: "ml-2.5 h-6 w-6"
  };
  
  $: finalClasses = `${baseClasses} ${variantClasses[variant]} ${visibilityClasses} ${className}`;
  $: iconClass = iconClasses[variant];
</script>

<a {href} class={finalClasses} {...$$restProps}>
  {text}
  <ArrowRight class={iconClass} />
</a> 