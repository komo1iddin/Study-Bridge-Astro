<script>
  import OzbekTypingBadge from './OzbekTypingBadge.svelte';
  import TestimonialCards from './TestimonialCards.svelte';
  import HeroButtons from './HeroButtons.svelte';
  import StatsSection from './StatsSection.svelte';

  function handleOpenForm() {
    // Since we're not using ApplicationForm, we'll just show an alert instead
    alert("Ariza yuborish uchun: +998 XX XXX XX XX");
  }
</script>

<div class="hero-container min-h-screen w-full overflow-hidden relative pt-[66px]">
  <!-- Static background elements -->
  <div class="hero-bg absolute inset-0 -z-20 overflow-hidden">
    <!-- Main gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50"></div>
    
    <!-- Blurred gradient background elements -->
    <div class="absolute -top-[10%] -right-[15%] w-[60%] h-[60%] bg-primary-300/10 rounded-full blur-3xl" style="animation: pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse;"></div>
    <div class="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl" style="animation: pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
    <div class="absolute top-[30%] right-[10%] w-[35%] h-[35%] bg-primary-200/15 rounded-full blur-3xl" style="animation: floatSlow 10s ease-in-out infinite;"></div>
    <div class="absolute bottom-[15%] right-[5%] w-[30%] h-[30%] bg-blue-300/10 rounded-full blur-3xl"></div>
    
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 bg-grid opacity-[0.06]"></div>
  </div>
  
  <!-- Floating decorative elements -->
  <div class="absolute top-[15%] right-[8%] w-8 h-8 bg-primary-500/20 rounded-full" style="animation: float 6s ease-in-out infinite;"></div>
  <div class="absolute bottom-[25%] left-[7%] w-5 h-5 bg-secondary/40 rounded-full" style="animation: float 6s ease-in-out 1s infinite;"></div>
  <div class="absolute top-[40%] left-[18%] w-6 h-6 bg-primary-400/15 rounded-full" style="animation: float 6s ease-in-out 2s infinite;"></div>
  <div class="absolute bottom-[35%] right-[10%] w-10 h-10 bg-blue-400/15 rounded-full" style="animation: float 6s ease-in-out 0.5s infinite;"></div>
  
  <!-- Hero Section -->
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 lg:py-20">
      <!-- Left Content -->
      <div class="lg:col-span-7 z-10">
        <div class="fade-in" style="--delay: 0.15s">
          <OzbekTypingBadge />
        </div>
        
        <h1 class="fancy-heading text-4xl md:text-5xl lg:text-6xl mt-6 leading-tight fade-in" style="--delay: 0.3s">
          <span class="text-[#2463EB]">O'zbekiston</span> va <br />
          <span class="relative inline-block">
            Xitoy
            <span class="absolute bottom-2 left-0 w-full h-2 bg-secondary/40 -z-10"></span>
          </span> orasidagi <br />
          <span class="relative inline-block">
            ishonchli ko'prik
            <span class="absolute bottom-2 left-0 w-full h-2 bg-secondary/40 -z-10"></span>
          </span>
        </h1>
        
        <p class="mt-6 text-gray-700 text-lg leading-relaxed max-w-lg fade-in" style="--delay: 0.45s">
          O'zbek talabalar uchun Xitoyning eng yaxshi universitetlarida ta'lim. 
          Hujjatlarni topshirishdan to diplom olishgacha to'liq yo'l-yo'riq ko'rsatish.
        </p>
        
        <div class="fade-in mt-8" style="--delay: 0.6s">
          <HeroButtons onOpenForm={handleOpenForm} />
        </div>
        
        <div class="fade-in mt-12" style="--delay: 0.75s">
          <StatsSection />
        </div>
      </div>
      
      <!-- Right Side - Scrolling Testimonials -->
      <div class="lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] mt-8 lg:mt-16">
        <TestimonialCards />
        
        <!-- Glowing accent behind testimonials -->
        <div class="absolute top-[5%] right-[5%] w-full h-full -z-10">
          <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-300/10 rounded-full blur-[70px]" style="animation: pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .hero-container {
    position: relative;
    isolation: isolate;
  }
  
  /* Grid pattern */
  .bg-grid {
    background-image: 
      linear-gradient(to right, rgba(36, 99, 235, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 99, 235, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  
  /* Entrance animations */
  .fade-in {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.3s ease-out forwards;
    animation-delay: var(--delay, 0s);
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Animation keyframes */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  @keyframes pulseSlow {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.2;
    }
  }
  
  @keyframes floatSlow {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-10px, 10px);
    }
    50% {
      transform: translate(0, 15px);
    }
    75% {
      transform: translate(10px, 5px);
    }
  }
  
  .fancy-heading {
    @apply font-black;
  }
</style> 