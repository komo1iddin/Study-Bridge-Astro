<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Plus, Minus } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  
  export let university: University;
  export let lang: Lang;
  
  // Sample FAQ categories and questions - in a real app, these would come from university data
  const faqCategories = [
    {
      name: "Admissions",
      faqs: [
        {
          question: "What are the admission requirements?",
          answer: "Admission requirements vary by program but generally include academic transcripts, standardized test scores (SAT/ACT for undergraduates, GRE/GMAT for graduates), letters of recommendation, and personal statements. International students may need to provide English proficiency test results (TOEFL/IELTS)."
        },
        {
          question: "When is the application deadline?",
          answer: "Early decision applications are due November 1, with decisions released by December 15. Regular decision applications are due January 1, with decisions released by April 1. Transfer applications are due March 1."
        },
        {
          question: "Is there an application fee?",
          answer: "Yes, there is a non-refundable application fee of $75 for domestic students and $90 for international students. Fee waivers are available for eligible applicants demonstrating financial need."
        }
      ]
    },
    {
      name: "Financial Aid",
      faqs: [
        {
          question: "What types of financial aid are available?",
          answer: "We offer a comprehensive financial aid program including merit-based scholarships, need-based grants, work-study opportunities, and student loans. All admitted students are automatically considered for merit scholarships."
        },
        {
          question: "How do I apply for financial aid?",
          answer: "To apply for need-based financial aid, complete the Free Application for Federal Student Aid (FAFSA) and the university's supplemental financial aid application. International students should complete the International Student Financial Aid Application."
        },
        {
          question: "When will I receive my financial aid decision?",
          answer: "Financial aid decisions are typically sent with admission decisions. If you apply by the priority deadline, you'll receive your aid package with your admission letter."
        }
      ]
    },
    {
      name: "Campus Life",
      faqs: [
        {
          question: "Is on-campus housing guaranteed?",
          answer: "On-campus housing is guaranteed for all first-year students. Returning students participate in a housing selection process based on seniority. Graduate housing is available but limited."
        },
        {
          question: "What dining options are available on campus?",
          answer: "The university offers multiple dining halls, cafes, and food courts across campus. Meal plans are required for all students living in residence halls and optional for those in apartments or off-campus housing."
        },
        {
          question: "What extracurricular activities are available?",
          answer: "We have over 300 student organizations spanning interests from academic and professional development to cultural, religious, political, service, and recreational activities. The university also sponsors numerous events throughout the year."
        }
      ]
    }
  ];
  
  // Set all FAQs to be collapsed initially
  let expandedFaqs = {}; 
  
  function toggleFaq(categoryIndex, faqIndex) {
    const key = `${categoryIndex}-${faqIndex}`;
    expandedFaqs = {...expandedFaqs, [key]: !expandedFaqs[key]};
  }
</script>

<style>
  .faq-content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 300ms ease-in-out, opacity 200ms ease-in-out, padding 300ms ease-in-out;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .faq-content.expanded {
    max-height: 500px; /* Large enough to contain content */
    opacity: 1;
    padding: 1rem !important; /* Equal padding on all sides when expanded */
  }
  
  .faq-item {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
    overflow: hidden;
  }
  
  .faq-trigger {
    width: 100%;
    text-align: left;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 150ms ease;
  }
  
  .faq-trigger:hover {
    background-color: #f8fafc;
  }
  
  .faq-trigger.expanded {
    background-color: #f1f5f9;
  }
  
  /* Add additional space between FAQ answer text and container */
  .faq-content .text-slate-600 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
</style>

<Card class="border-none shadow-md">
  <CardHeader>
    <CardTitle class="text-xl font-bold text-slate-800">Frequently Asked Questions</CardTitle>
  </CardHeader>
  <CardContent>
    <p class="text-slate-600 mb-6">
      Find answers to common questions about {university.name}. If you don't see your question here, 
      please contact our admissions office for more information.
    </p>
    
    <div class="space-y-6">
      {#each faqCategories as category, categoryIndex}
        <div>
          <h3 class="text-lg font-semibold text-slate-800 mb-3">{category.name}</h3>
          <div class="space-y-3">
            {#each category.faqs as faq, faqIndex}
              {@const key = `${categoryIndex}-${faqIndex}`}
              <div class="faq-item">
                <button 
                  class="faq-trigger"
                  class:expanded={expandedFaqs[key]}
                  on:click={() => toggleFaq(categoryIndex, faqIndex)}
                >
                  <span class="font-medium text-slate-800">{faq.question}</span>
                  {#if expandedFaqs[key]}
                    <Minus class="h-5 w-5 text-blue-600 flex-shrink-0" />
                  {:else}
                    <Plus class="h-5 w-5 text-blue-600 flex-shrink-0" />
                  {/if}
                </button>
                
                <div 
                  class="faq-content"
                  class:expanded={expandedFaqs[key]}
                >
                  <div class="text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    
    <div class="mt-8 bg-blue-50 p-4 rounded-lg">
      <h4 class="font-medium text-slate-800 mb-2">Still have questions?</h4>
      <p class="text-slate-600 mb-3">
        If you couldn't find the answer to your question, please contact us directly.
      </p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <h5 class="font-medium text-slate-800 text-sm mb-1">Admissions Office</h5>
          <div class="text-sm text-slate-600">
            <p>Email: admissions@{university.name.toLowerCase().replace(/\s+/g, '')}.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <h5 class="font-medium text-slate-800 text-sm mb-1">Financial Aid Office</h5>
          <div class="text-sm text-slate-600">
            <p>Email: finaid@{university.name.toLowerCase().replace(/\s+/g, '')}.edu</p>
            <p>Phone: (123) 456-7891</p>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 