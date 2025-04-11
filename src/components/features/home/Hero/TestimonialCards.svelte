<script>
  import { onMount } from 'svelte';
  
  // Define a placeholder image as fallback
  const placeholderImage = "/images/testimonials/placeholder.jpeg";
  
  // Accept testimonials as props with default fallback 
  export let testimonials = [
    {
      name: "Alisher K.",
      role: "Pekin Universiteti",
      quote: "Hayotimdagi eng yaxshi qaror! 2 yildan beri Xitoyda o'qiyapman.",
      image: placeholderImage,
    },
    {
      name: "Malika N.",
      role: "Shanxay Universiteti",
      quote: "Agentlik yordamida stipendiya oldim!",
      image: placeholderImage,
    },
    {
      name: "Rustam D.",
      role: "Fudan Universiteti",
      quote: "Hozir Xitoydagi xalqaro kompaniyada ishlayman!",
      image: placeholderImage,
    }
  ];
  
  // Add id to each testimonial for key tracking
  const processedTestimonials = testimonials.map((t, index) => ({
    ...t,
    id: index + 1
  }));
  
  // Balance columns to have equal number of cards
  let leftColumnCards = [];
  let rightColumnCards = [];
  
  // If there's an odd number of testimonials, duplicate the last one to balance columns
  if (processedTestimonials.length % 2 !== 0) {
    const balancedTestimonials = [...processedTestimonials];
    if (balancedTestimonials.length > 0) {
      const lastItem = {...balancedTestimonials[balancedTestimonials.length - 1]};
      lastItem.id = lastItem.id + 1000; // Ensure unique key
      balancedTestimonials.push(lastItem);
    }
    
    // Distribute cards evenly
    leftColumnCards = balancedTestimonials.filter((_, idx) => idx % 2 === 0);
    rightColumnCards = balancedTestimonials.filter((_, idx) => idx % 2 === 1);
  } else {
    // If even number, just distribute evenly
    leftColumnCards = processedTestimonials.filter((_, idx) => idx % 2 === 0);
    rightColumnCards = processedTestimonials.filter((_, idx) => idx % 2 === 1);
  }
  
  // Clone cards for seamless loop
  const getClonedCards = (cards) => [...cards, ...cards, ...cards.slice(0, 2)];
  
  const clonedLeftCards = getClonedCards(leftColumnCards);
  const clonedRightCards = getClonedCards(rightColumnCards);
  
  // Handle image errors by replacing with placeholder
  function handleImageError(event) {
    event.target.src = placeholderImage;
  }
</script>

<div class="relative h-full w-full overflow-hidden">
  <!-- Left column -->
  <div class="scrolling-wrapper absolute left-0 w-1/2 pr-2">
    <div class="scrolling-content">
      {#each clonedLeftCards as testimonial, index (testimonial.id + '-' + index)}
        <div
          class="student-card"
          style="--delay: {index * 100}ms"
        >
          <div class="flex items-center gap-3 mb-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
              on:error={handleImageError}
            />
            <div>
              <h3 class="font-semibold text-slate-800 text-sm">{testimonial.name}</h3>
              <p class="text-blue-600 text-xs font-medium">{testimonial.role}</p>
            </div>
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">{testimonial.quote}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Right column -->
  <div class="scrolling-wrapper absolute right-0 w-1/2 pl-2">
    <div class="scrolling-content scrolling-content-delayed">
      {#each clonedRightCards as testimonial, index (testimonial.id + '-' + index)}
        <div
          class="student-card"
          style="--delay: {(index * 100) + 1000}ms"
        >
          <div class="flex items-center gap-3 mb-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
              on:error={handleImageError}
            />
            <div>
              <h3 class="font-semibold text-slate-800 text-sm">{testimonial.name}</h3>
              <p class="text-blue-600 text-xs font-medium">{testimonial.role}</p>
            </div>
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">{testimonial.quote}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .scrolling-wrapper {
    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }

  .scrolling-content {
    animation: scrollUp 40s linear infinite;
    will-change: transform;
  }
  
  .scrolling-content-delayed {
    animation-delay: -20s;
  }
  
  @keyframes scrollUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-50% - 1rem));
    }
  }

  .student-card {
    @apply bg-white rounded-xl shadow-md mb-4 p-5 border border-gray-100;
    @apply opacity-0 translate-y-4;
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: var(--delay);
    transition: all 0.3s ease;
    transform-origin: center center;
  }

  .student-card:hover {
    @apply shadow-lg -translate-y-0.5;
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(59, 130, 246, 0.2);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.08);
  }

  .student-card:hover h3 {
    @apply text-blue-700;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Pause animation on hover */
  .scrolling-wrapper:hover .scrolling-content {
    animation-play-state: paused;
  }
</style>