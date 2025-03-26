<script>
  // No props or state needed for this component
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none">
  {#each Array(3) as _, i}
    <div 
      class="absolute bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl" 
      style={`
        width: ${Math.random() * 30 + 20}rem; 
        height: ${Math.random() * 30 + 20}rem; 
        top: ${Math.random() * 100}%; 
        left: ${Math.random() * 100}%; 
        opacity: ${Math.random() * 0.3 + 0.1};
        transform: translate(-50%, -50%);
      `}
    ></div>
  {/each}
</div> 