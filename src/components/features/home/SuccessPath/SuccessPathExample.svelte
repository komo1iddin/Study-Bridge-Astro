<script lang="ts">
  import { steps } from './data/steps';
  import StepCard from './components/StepCard.svelte';
  import { onMount } from 'svelte';

  let activeStep = 0;
  const totalSteps = steps.length;

  function goToNextStep() {
    if (activeStep < totalSteps - 1) {
      activeStep = activeStep + 1;
    } else {
      activeStep = 0; // Loop back to first step
    }
  }

  function goToPrevStep() {
    if (activeStep > 0) {
      activeStep = activeStep - 1;
    } else {
      activeStep = totalSteps - 1; // Loop to last step
    }
  }
</script>

<section class="max-w-4xl mx-auto px-4 py-12">
  <h2 class="text-3xl font-bold text-center mb-10">Xitoyda o'qishga olti bosqichli yo'l</h2>
  
  <div class="space-y-8">
    <StepCard 
      step={steps[activeStep]}
      {totalSteps}
      {activeStep}
      {goToNextStep}
      {goToPrevStep}
    />
  </div>
</section> 