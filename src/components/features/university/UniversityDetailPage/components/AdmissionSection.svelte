<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/svelte";
  import { Clock, Calendar, CheckCircle, XCircle, AlertCircle, FileText, GraduationCap } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;

  // Sample admission requirements (would come from university data in a real app)
  const sampleAdmissionRequirements = [
    { requirement: "High School Diploma or equivalent", required: true },
    { requirement: "Minimum GPA of 3.5", required: true },
    { requirement: "SAT/ACT Scores", required: true },
    { requirement: "Letters of Recommendation (3)", required: true },
    { requirement: "Personal Statement", required: true },
    { requirement: "Interview", required: false },
    { requirement: "Portfolio (for specific programs)", required: false }
  ];

  // Sample admission deadlines
  const sampleAdmissionDeadlines = [
    { round: "Early Decision", deadline: "November 1, 2023", notification: "December 15, 2023" },
    { round: "Regular Decision", deadline: "January 1, 2024", notification: "April 1, 2024" },
    { round: "Transfer Students", deadline: "March 1, 2024", notification: "May 15, 2024" }
  ];
  
  // Use university admission requirements data if available, otherwise use sample data
  $: admissionRequirements = university.admissionRequirements && Array.isArray(university.admissionRequirements) 
    && university.admissionRequirements.length > 0
    ? university.admissionRequirements
    : sampleAdmissionRequirements;
    
  // Use university admission deadlines data if available, otherwise use sample data
  $: admissionDeadlines = university.admissionDeadlines && Array.isArray(university.admissionDeadlines) 
    && university.admissionDeadlines.length > 0
    ? university.admissionDeadlines
    : sampleAdmissionDeadlines;

  // Translations
  const texts = {
    admissionRequirements: {
      en: "Admission Requirements",
      ru: "Требования для поступления",
      uz: "Qabul talablari"
    },
    essentialCriteria: {
      en: `Essential criteria for admission to ${university.name}`,
      ru: `Основные критерии для поступления в ${university.name}`,
      uz: `${university.name}ga qabul qilish uchun asosiy mezonlar`
    },
    competitiveAdmission: {
      en: `Admission to ${university.name} is competitive. The following requirements must be met for your application to be considered:`,
      ru: `Поступление в ${university.name} конкурентное. Для рассмотрения вашего заявления необходимо соответствовать следующим требованиям:`,
      uz: `${university.name}ga qabul raqobatbardosh. Arizangiz ko'rib chiqilishi uchun quyidagi talablarga javob berish kerak:`
    },
    required: {
      en: "Required",
      ru: "Обязательно",
      uz: "Majburiy"
    },
    optional: {
      en: "Optional",
      ru: "Необязательно",
      uz: "Ixtiyoriy"
    },
    note: {
      en: "Note:",
      ru: "Примечание:",
      uz: "Eslatma:"
    },
    internationalNote: {
      en: "International students may have additional requirements including English proficiency test scores (TOEFL/IELTS) and visa documentation.",
      ru: "Для иностранных студентов могут быть дополнительные требования, включая результаты теста на знание английского языка (TOEFL/IELTS) и документацию для визы.",
      uz: "Xalqaro talabalar uchun qo'shimcha talablar bo'lishi mumkin, jumladan ingliz tili bilimini baholash testlari (TOEFL/IELTS) va viza hujjatlari."
    },
    applicationDeadlines: {
      en: "Application Deadlines",
      ru: "Сроки подачи заявлений",
      uz: "Ariza topshirish muddatlari"
    },
    importantDates: {
      en: "Important dates for your application",
      ru: "Важные даты для вашего заявления",
      uz: "Arizangiz uchun muhim sanalar"
    },
    deadline: {
      en: "Deadline:",
      ru: "Крайний срок:",
      uz: "Muddat:"
    },
    decision: {
      en: "Decision:",
      ru: "Решение:",
      uz: "Qaror:"
    },
    allMaterials: {
      en: "All application materials must be submitted by 11:59 PM Eastern Time on the deadline date. Late applications may be considered on a space-available basis.",
      ru: "Все материалы заявления должны быть поданы до 23:59 по восточному времени в день крайнего срока. Поздние заявления могут быть рассмотрены при наличии мест.",
      uz: "Barcha ariza materiallari muddat sanasida soat 23:59 (Sharqiy vaqti bo'yicha) gacha topshirilishi kerak. Kechikkan arizalar bo'sh joy mavjud bo'lgan taqdirda ko'rib chiqilishi mumkin."
    },
    admissionProcess: {
      en: "Admission Process",
      ru: "Процесс поступления",
      uz: "Qabul jarayoni"
    },
    steps: {
      step1: {
        title: {
          en: "Submit Your Application",
          ru: "Подайте заявку",
          uz: "Arizangizni yuboring"
        },
        description: {
          en: "Complete and submit your application through our online portal, including all required documents and application fee.",
          ru: "Заполните и отправьте заявку через наш онлайн-портал, включая все необходимые документы и плату за заявку.",
          uz: "Barcha zarur hujjatlar va ariza to'lovlarini o'z ichiga olgan holda bizning onlayn portal orqali arizangizni to'ldiring va yuboring."
        }
      },
      step2: {
        title: {
          en: "Application Review",
          ru: "Рассмотрение заявки",
          uz: "Arizani ko'rib chiqish"
        },
        description: {
          en: "Our admissions committee will carefully review your application, transcripts, test scores, and supporting materials.",
          ru: "Наша приемная комиссия тщательно рассмотрит вашу заявку, выписки, результаты тестов и вспомогательные материалы.",
          uz: "Bizning qabul qilish qo'mitasi sizning arizangizni, tabelnomangizni, test natijalaringizni va qo'shimcha materiallaringizni sinchiklab ko'rib chiqadi."
        }
      },
      step3: {
        title: {
          en: "Interview (if required)",
          ru: "Собеседование (если требуется)",
          uz: "Suhbat (agar talab qilinsa)"
        },
        description: {
          en: "Some applicants may be invited for an interview, either in-person or virtually, depending on your location.",
          ru: "Некоторые кандидаты могут быть приглашены на собеседование, очно или виртуально, в зависимости от вашего местоположения.",
          uz: "Ba'zi abituriyentlar joylashuviga qarab shaxsan yoki virtual ravishda suhbatga taklif qilinishi mumkin."
        }
      },
      step4: {
        title: {
          en: "Admission Decision",
          ru: "Решение о поступлении",
          uz: "Qabul qarorini qabul qilish"
        },
        description: {
          en: "You'll receive an admission decision by the notification date for your application round.",
          ru: "Вы получите решение о поступлении к дате уведомления для вашего тура заявки.",
          uz: "Ariza berish davringiz uchun belgilangan xabarnoma sanasiga qadar qabul bo'yicha qaror olasiz."
        }
      }
    },
    applyNow: {
      en: "Apply Now",
      ru: "Подать заявку",
      uz: "Hozir ariza topshiring"
    },
    readyToApply: {
      en: "Ready to Apply?",
      ru: "Готовы подать заявку?",
      uz: "Ariza topshirishga tayyormisiz?"
    },
    getStarted: {
      en: "Take the first step towards your future at",
      ru: "Сделайте первый шаг к своему будущему в",
      uz: "Kelajagingiz sari birinchi qadamni tashlang"
    }
  };

  // Get text based on language
  function getText(key: string, subKey: string): string {
    return texts[key]?.[lang] || texts[key]?.en || key;
  }

  // Get nested text based on language
  function getNestedText(key: string, nestedKey: string, subKey: string): string {
    return texts[key]?.[nestedKey]?.[subKey]?.[lang] || 
           texts[key]?.[nestedKey]?.[subKey]?.en || 
           `${key}.${nestedKey}.${subKey}`;
  }
</script>

<div class="space-y-6">
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">{getText('admissionRequirements', '')}</CardTitle>
      <CardDescription>{getText('essentialCriteria', '')}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <p class="text-slate-600 mb-4">
          {getText('competitiveAdmission', '')}
        </p>
        
        <div class="grid gap-3 sm:grid-cols-2">
          {#each admissionRequirements as item}
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <div class="flex-shrink-0 mt-0.5">
                {#if item.required}
                  <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle class="h-4 w-4 text-green-600" />
                  </div>
                {:else}
                  <div class="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertCircle class="h-4 w-4 text-amber-500" />
                  </div>
                {/if}
              </div>
              <div>
                <p class="font-medium text-slate-800">
                  {item.requirement}
                </p>
                <p class="text-xs mt-1">
                  {#if item.required}
                    <span class="text-green-600 font-medium">{getText('required', '')}</span>
                  {:else}
                    <span class="text-amber-500 font-medium">{getText('optional', '')}</span>
                  {/if}
                </p>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="p-3 bg-blue-50 rounded-lg mt-4">
          <p class="text-sm text-blue-800">
            <strong>{getText('note', '')}</strong> {getText('internationalNote', '')}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">{getText('applicationDeadlines', '')}</CardTitle>
      <CardDescription>{getText('importantDates', '')}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each admissionDeadlines as deadline}
            <div class="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-blue-200">
              <div class="bg-blue-600 py-3 px-4 text-white">
                <h4 class="font-semibold">{deadline.round}</h4>
              </div>
              <div class="p-4 space-y-3">
                <div class="flex items-center gap-2 text-slate-600">
                  <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Calendar class="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">{getText('deadline', '')}</p>
                    <p class="font-medium text-slate-800">{deadline.deadline}</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-2 text-slate-600">
                  <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock class="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">{getText('decision', '')}</p>
                    <p class="font-medium text-slate-800">{deadline.notification}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="p-4 bg-slate-50 rounded-lg mt-4 border border-slate-200">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <FileText class="h-4 w-4 text-blue-600" />
            </div>
            <p class="text-sm text-slate-600">
              {getText('allMaterials', '')}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">{getText('admissionProcess', '')}</CardTitle>
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
              <h4 class="font-semibold text-slate-800 text-lg">{getNestedText('steps', 'step1', 'title')}</h4>
              <p class="text-slate-600 mt-1">
                {getNestedText('steps', 'step1', 'description')}
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">2</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">{getNestedText('steps', 'step2', 'title')}</h4>
              <p class="text-slate-600 mt-1">
                {getNestedText('steps', 'step2', 'description')}
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">3</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">{getNestedText('steps', 'step3', 'title')}</h4>
              <p class="text-slate-600 mt-1">
                {getNestedText('steps', 'step3', 'description')}
              </p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 relative z-10">
              <span class="text-blue-700 font-bold">4</span>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-lg">{getNestedText('steps', 'step4', 'title')}</h4>
              <p class="text-slate-600 mt-1">
                {getNestedText('steps', 'step4', 'description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

<!-- Apply Now CTA -->
<div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 mt-6 text-white">
  <div class="text-center space-y-4">
    <h3 class="text-2xl font-bold">{getText('readyToApply', '')}</h3>
    <p>{getText('getStarted', '')} {university.name}</p>
    <button class="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-semibold inline-flex items-center">
      {getText('applyNow', '')}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
</div> 