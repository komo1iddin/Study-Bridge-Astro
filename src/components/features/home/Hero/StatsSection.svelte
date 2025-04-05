<script>
  import { onMount } from 'svelte';
  
  // Refined icon style with consistent weight
  const usersSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
  
  const buildingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M6 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path><path d="M10 9h4"></path><path d="M10 13h4"></path><path d="M10 17h4"></path></svg>`;
  
  const clockSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

  let mounted = false;
  
  // Stats data with animation information
  const stats = [
    { 
      icon: usersSvg, 
      value: 5000, 
      label: "Talabalar",
      animationDelay: "0ms"
    },
    { 
      icon: buildingSvg, 
      value: 50, 
      label: "Universitetlar",
      animationDelay: "150ms"
    },
    { 
      icon: clockSvg, 
      value: 10, 
      label: "Yillik tajriba",
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
            {@html stat.icon}
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