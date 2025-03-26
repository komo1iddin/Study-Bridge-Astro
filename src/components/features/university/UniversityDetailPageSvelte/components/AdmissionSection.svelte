<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/svelte";
  import { Clock, Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;

  // Sample admission requirements (would come from university data in a real app)
  const admissionRequirements = [
    { requirement: "High School Diploma or equivalent", required: true },
    { requirement: "Minimum GPA of 3.5", required: true },
    { requirement: "SAT/ACT Scores", required: true },
    { requirement: "Letters of Recommendation (3)", required: true },
    { requirement: "Personal Statement", required: true },
    { requirement: "Interview", required: false },
    { requirement: "Portfolio (for specific programs)", required: false }
  ];

  // Sample admission deadlines
  const admissionDeadlines = [
    { round: "Early Decision", deadline: "November 1, 2023", notification: "December 15, 2023" },
    { round: "Regular Decision", deadline: "January 1, 2024", notification: "April 1, 2024" },
    { round: "Transfer Students", deadline: "March 1, 2024", notification: "May 15, 2024" }
  ];
</script>

<div class="space-y-6">
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Admission Requirements</CardTitle>
      <CardDescription>Essential criteria for admission to {university.name}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <p class="text-slate-600 mb-4">
          Admission to {university.name} is competitive. The following requirements must be met for your application to be considered:
        </p>
        
        <ul class="space-y-2">
          {#each admissionRequirements as item}
            <li class="flex items-start gap-2">
              {#if item.required}
                <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
                <span>{item.requirement} <span class="text-sm font-medium text-green-600">(Required)</span></span>
              {:else}
                <AlertCircle class="h-5 w-5 text-amber-500 mt-0.5" />
                <span>{item.requirement} <span class="text-sm font-medium text-amber-500">(Optional)</span></span>
              {/if}
            </li>
          {/each}
        </ul>
        
        <div class="p-3 bg-blue-50 rounded-lg mt-4">
          <p class="text-sm text-blue-800">
            <strong>Note:</strong> International students may have additional requirements including English proficiency test scores (TOEFL/IELTS) and visa documentation.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Application Deadlines</CardTitle>
      <CardDescription>Important dates for your application</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        {#each admissionDeadlines as deadline}
          <div class="border border-slate-200 rounded-lg p-3">
            <div class="flex justify-between items-center">
              <h4 class="font-semibold text-slate-800">{deadline.round}</h4>
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">
                2023-2024
              </span>
            </div>
            <div class="mt-2 space-y-1 text-sm">
              <div class="flex items-center gap-2 text-slate-600">
                <Calendar class="h-4 w-4 text-blue-600" />
                <span>Deadline: <span class="font-medium text-slate-800">{deadline.deadline}</span></span>
              </div>
              <div class="flex items-center gap-2 text-slate-600">
                <Clock class="h-4 w-4 text-blue-600" />
                <span>Decision: <span class="font-medium text-slate-800">{deadline.notification}</span></span>
              </div>
            </div>
          </div>
        {/each}
        
        <div class="p-3 bg-slate-50 rounded-lg mt-2">
          <p class="text-sm text-slate-600">
            All application materials must be submitted by 11:59 PM Eastern Time on the deadline date. Late applications may be considered on a space-available basis.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Admission Process</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="relative">
        <div class="absolute top-0 bottom-0 left-7 w-0.5 bg-blue-100"></div>
        
        <div class="space-y-8 relative">
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">1</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">Submit Your Application</h4>
              <p class="text-slate-600 mt-1">
                Complete and submit your application through our online portal, including all required documents and application fee.
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">2</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">Application Review</h4>
              <p class="text-slate-600 mt-1">
                Our admissions committee will carefully review your application, transcripts, test scores, and supporting materials.
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">3</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">Interview (if required)</h4>
              <p class="text-slate-600 mt-1">
                Some applicants may be invited for an interview, either in-person or virtually, depending on your location.
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">4</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">Admission Decision</h4>
              <p class="text-slate-600 mt-1">
                You'll receive an admission decision by the notification date for your application round.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div> 