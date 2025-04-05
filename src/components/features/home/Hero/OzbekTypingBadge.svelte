<script>
  import { onMount, onDestroy } from 'svelte';

  const messages = ["Qabul ochiq", "2025-yil uchun qabul", "Stipendiyalar mavjud"];
  let currentMessageIndex = 2; // Start with "Stipendiyalar mavjud" to match first image
  let displayText = "";
  let isDeleting = false;
  let timeout;

  function typeEffect() {
    const currentMessage = messages[currentMessageIndex];

    timeout = setTimeout(
      () => {
        if (!isDeleting) {
          displayText = currentMessage.substring(0, displayText.length + 1);

          if (displayText.length === currentMessage.length) {
            isDeleting = true;
            setTimeout(() => {
              typeEffect();
            }, 1500);
            return;
          }
        } else {
          displayText = currentMessage.substring(0, displayText.length - 1);

          if (displayText.length === 0) {
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
          }
        }
        typeEffect();
      },
      isDeleting ? 50 : 100
    );
  }

  onMount(() => {
    // Initialize with the full text to match the image
    displayText = messages[currentMessageIndex];
    typeEffect();
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<div class="inline-flex items-center px-5 py-2.5 rounded-full badge-container">
  <div class="pulse-dot">
    <span class="absolute inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
  </div>
  <span class="text-slate-800 font-medium typing-text">
    {displayText}
    <span class="ml-[1px] animate-blink">|</span>
  </span>
</div>

<style>
  .badge-container {
    @apply bg-white shadow-sm border border-blue-100/70;
    transition: all 0.3s ease;
    animation: badgeFadeIn 0.6s ease-out;
    transform-origin: left center;
  }
  
  .badge-container:hover {
    @apply border-blue-200 shadow-md;
    transform: translateY(-2px) scale(1.01);
  }
  
  .pulse-dot {
    @apply flex h-2.5 w-2.5 mr-3 relative;
    transition: all 0.3s ease;
  }
  
  .badge-container:hover .pulse-dot {
    transform: scale(1.2);
  }
  
  .typing-text {
    transition: color 0.3s ease;
  }
  
  .badge-container:hover .typing-text {
    @apply text-blue-700;
  }
  
  @keyframes badgeFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .animate-blink {
    animation: blink 1s step-end infinite;
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-ping {
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style> 