<script>
  import { onMount } from 'svelte';
  
  const testimonials = [
    {
      id: 1,
      name: "Alisher K.",
      university: "Pekin Universiteti",
      comment: "Hayotimdagi eng yaxshi qaror! 2 yildan beri Xitoyda o'qiyapman.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Malika N.",
      university: "Shanxay Universiteti",
      comment: "Agentlik yordamida stipendiya oldim!",
      imageUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Rustam D.",
      university: "Fudan Universiteti",
      comment: "Hozir Xitoydagi xalqaro kompaniyada ishlayman!",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Nodira I.",
      university: "Chjejiang Universiteti",
      comment: "Jamoadan har bir bosqichda ajoyib qo'llab-quvvatlash!",
      imageUrl: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Aziz T.",
      university: "Nankin Universiteti",
      comment: "Ikkinchi yildan beri Xitoyda tibbiyot o'qiyapman!",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Sabina M.",
      university: "Tyanjin Universiteti",
      comment: "To'liq stipendiya oldim! Juda minnatdorman!",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Temur P.",
      university: "Uxan Universiteti",
      comment: "IT o'rganyapman va Xitoy kompaniyasida amaliyot o'tayapman!",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
    },
  ];
  
  // Create two columns of cards
  const leftColumnCards = testimonials.filter((_, idx) => idx % 2 === 0);
  const rightColumnCards = testimonials.filter((_, idx) => idx % 2 === 1);
  
  // Clone cards for seamless loop
  const getClonedCards = (cards) => [...cards, ...cards, ...cards.slice(0, 2)];
  
  const clonedLeftCards = getClonedCards(leftColumnCards);
  const clonedRightCards = getClonedCards(rightColumnCards);
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
              src={testimonial.imageUrl}
              alt={testimonial.name}
              class="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <div>
              <h3 class="font-semibold text-slate-800 text-sm">{testimonial.name}</h3>
              <p class="text-blue-600 text-xs font-medium">{testimonial.university}</p>
            </div>
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">{testimonial.comment}</p>
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
              src={testimonial.imageUrl}
              alt={testimonial.name}
              class="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <div>
              <h3 class="font-semibold text-slate-800 text-sm">{testimonial.name}</h3>
              <p class="text-blue-600 text-xs font-medium">{testimonial.university}</p>
            </div>
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">{testimonial.comment}</p>
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
  
  .student-card:hover .stat-icon {
    transform: scale(1.1);
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