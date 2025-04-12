<script>
  import { onMount } from 'svelte';
  import { Users, Building2, Clock } from 'lucide-svelte';
  
  // Accept translations from parent
  export let translations = {
    universities: "Universitetlar",
    students: "Talabalar",
    experience: "Yillik tajriba",
    success: "Muvaffaqiyat"
  };
  
  // Ensure we have valid translation texts
  $: safeTranslations = translations || {};
  $: universitiesLabel = safeTranslations.universities || "Universitetlar";
  $: studentsLabel = safeTranslations.students || "Talabalar";
  $: experienceLabel = safeTranslations.experience || "Yillik tajriba";
  
  let mounted = false;
  
  // Stats data with animation information
  $: stats = [
    { 
      icon: Users, 
      value: 5000, 
      label: studentsLabel,
      animationDelay: "0ms"
    },
    { 
      icon: Building2, 
      value: 50, 
      label: universitiesLabel,
      animationDelay: "150ms"
    },
    { 
      icon: Clock, 
      value: 10, 
      label: experienceLabel,
      animationDelay: "300ms"
    }
  ];
  
  // Set up animation after mounting
  onMount(() => {
    mounted = true;
  });
</script>

<div class="mt-16">
  <div class="flex flex-row justify-center sm:justify-start gap-8 sm:gap-10 md:gap-14">
    {#each stats as stat, i}
      <div class="stat-item" style="--delay: {stat.animationDelay};">
        <div class="stat-card">
          <div class="stat-icon">
            <svelte:component this={stat.icon} size={24} strokeWidth={1.5} />
          </div>
          <div class="stat-number">
            <span class="stat-value counter">{stat.value}</span>
            <span class="stat-plus">+</span>
          </div>
          <div class="stat-label">{stat.label}</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .stat-item {
    @apply flex flex-col items-center;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeUpStats 0.6s ease-out forwards;
    animation-delay: var(--delay, 0ms);
    width: calc(33.333% - 1rem);
    max-width: 160px;
  }
  
  .stat-card {
    @apply flex flex-col items-center justify-center px-4 py-3 rounded-xl w-full;
    @apply transition-all duration-300 text-center;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.5));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .stat-item:hover .stat-card {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  }

  .stat-icon {
    @apply text-blue-700/60 mb-2 transition-all duration-300;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stat-item:hover .stat-icon {
    @apply text-blue-700 transform scale-110;
  }

  .stat-number {
    @apply flex items-baseline justify-center;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stat-value {
    @apply text-3xl sm:text-4xl font-extrabold text-slate-800 transition-all duration-300;
    font-family: 'Raleway', sans-serif;
    line-height: 1;
  }

  .stat-plus {
    @apply text-lg sm:text-xl font-bold text-blue-700 ml-1 transition-all duration-300;
  }
  
  .stat-item:hover .stat-value {
    @apply text-blue-800;
  }
  
  .stat-item:hover .stat-plus {
    @apply text-blue-600;
  }

  .stat-label {
    @apply text-sm font-medium text-slate-600 mt-1 transition-all duration-300;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stat-item:hover .stat-label {
    @apply text-blue-700;
  }
  
  @keyframes fadeUpStats {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Animation for the counter effect */
  .counter {
    position: relative;
    overflow: hidden;
  }
  
  @media (max-width: 640px) {
    .stat-item {
      width: calc(33.333% - 0.5rem);
    }
    
    .stat-card {
      padding: 0.5rem 0.25rem;
      height: 110px;
    }
    
    .stat-value {
      @apply text-2xl;
    }
    
    .stat-plus {
      @apply text-base;
    }
    
    .stat-label {
      @apply text-xs;
    }
  }
</style> 