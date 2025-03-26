<script lang="ts">
  import { Card, CardContent, Button, Badge } from "@/components/ui/svelte/index";
  import StepBenefit from "./StepBenefit.svelte";
  import type { StepType } from "../data/steps";
  import { ArrowLeft, ArrowRight, Users, School, FileText, Building2, Plane, Home } from "lucide-svelte";
  
  export let step: StepType;
  export let totalSteps: number;
  export let activeStep: number;
  export let goToNextStep: () => void;
  export let goToPrevStep: () => void;
  
  const iconMap = {
    'Users': Users,
    'School': School,
    'FileText': FileText,
    'Building2': Building2,
    'Plane': Plane,
    'Home': Home
  };
</script>

<Card class="border border-gray-200 shadow-lg bg-white rounded-xl overflow-hidden">
  <div class="h-2 w-full" style="background-color: {step.bgColor};"></div>
  <CardContent class="p-5 sm:p-6 md:p-8">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
      <div
        class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
        style="
          background-color: {step.color};
          box-shadow: 0 10px 15px -5px {step.color}40;
        "
      >
        <svelte:component this={iconMap[step.icon.name]} class="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <div class="text-center md:text-left flex-1">
        <Badge
          class="mb-2 font-normal"
          style="
            background-color: {step.bgColor};
            color: {step.color};
          "
        >
          Bosqich {activeStep + 1}/{totalSteps}
        </Badge>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
        <p class="text-gray-600 text-base md:text-lg">{step.description}</p>
      </div>
    </div>

    <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
      {#each step.benefits as benefit, idx}
        <StepBenefit 
          benefit={benefit}
          color={step.color}
          bgColor={step.bgColor}
          index={idx}
        />
      {/each}
    </div>

    <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
      <Button
        variant="outline"
        on:click={goToPrevStep}
        class="bg-white hover:bg-gray-50 border-gray-200 order-2 sm:order-1 sm:flex-1"
      >
        <ArrowLeft class="w-4 h-4 mr-2 md:mr-3" />
        Oldingi qadam
      </Button>
      <Button
        on:click={goToNextStep}
        class="text-white transition-all duration-300 order-1 sm:order-2 sm:flex-1"
        style="
          background-color: {step.color};
          box-shadow: 0 4px 14px -4px {step.color}40;
        "
      >
        Keyingi qadam
        <ArrowRight class="w-4 h-4 ml-2 md:mr-3" />
      </Button>
    </div>
  </CardContent>
</Card> 