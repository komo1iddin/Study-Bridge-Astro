<script>
  export let onOpenForm;
</script>

<div class="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 items-center sm:items-start mx-auto sm:mx-0">
  <!-- Primary Button - Blue background with paper plane icon -->
  <div class="flex-none">
    <button 
      on:click={onOpenForm}
      class="btn-primary group"
    >
      <span class="relative z-10">Arizani qoldirish</span>
      <span class="ml-2 inline-flex transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
          <path d="m22 2-7 20-4-9-9-4Z"/>
          <path d="M22 2 11 13"/>
        </svg>
      </span>
    </button>
  </div>
  
  <!-- Secondary Button - White background with university icon -->
  <div class="flex-none">
    <button 
      class="btn-secondary group"
    >
      <span class="relative z-10">Universitetlar</span>
      <span class="ml-2 inline-flex transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <rect x="9" y="2" width="6" height="10" rx="3"/>
        </svg>
      </span>
    </button>
  </div>
</div>

<style>
  .btn-primary {
    @apply relative bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-md;
    @apply flex items-center justify-center;
    @apply min-w-[250px] sm:min-w-[220px];
    @apply transition-all duration-300;
    @apply hover:shadow-lg hover:shadow-blue-500/25 hover:bg-blue-800 active:shadow-sm;
    @apply before:absolute before:inset-0 before:rounded-full before:bg-blue-800 before:opacity-0 before:transition-opacity hover:before:opacity-100;
  }

  .btn-secondary {
    @apply relative border border-gray-200 bg-white text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-sm;
    @apply flex items-center justify-center;
    @apply min-w-[250px] sm:min-w-[220px];
    @apply transition-all duration-300;
    @apply hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-100/50 active:shadow-sm;
    @apply before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-50 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100;
  }
</style> 