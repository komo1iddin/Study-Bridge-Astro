<script lang="ts">
  import Accordion from './Accordion.svelte';
  import AccordionItem from './AccordionItem.svelte';
  import AccordionTrigger from './AccordionTrigger.svelte';
  import AccordionContent from './AccordionContent.svelte';
  import Card from './Card.svelte';
  import CardContent from './CardContent.svelte';
  import CardHeader from './CardHeader.svelte';
  import CardTitle from './CardTitle.svelte';
  
  let value = 'item-1';
  
  const faqs = [
    {
      id: 'item-1',
      question: "Xitoyda o'qish qancha turadi?",
      answer: "Xitoyda o'qish narxi universitetga qarab 3,000 AQSh dollaridan 15,000 AQSh dollarigacha bo'lishi mumkin. Ba'zi universitetlar stipendiya va chegirmalar ham taklif qiladi."
    },
    {
      id: 'item-2',
      question: "Xitoy universitetlarida qanday dasturlar mavjud?",
      answer: "Xitoy universitetlari bakalavr, magistratura va doktorantura darajalarini taklif etadi. Ko'plab universitetlar ingliz tilida o'qitiladigan dasturlarni ham taklif qiladi."
    },
    {
      id: 'item-3',
      question: "Xitoyda o'qish uchun qanday hujjatlar kerak?",
      answer: "Xitoyda o'qish uchun pasport, oldingi ta'lim haqidagi diplom yoki sertifikat, ingliz yoki xitoy tili sertifikati va sog'liq sug'urtasi kerak bo'ladi."
    },
    {
      id: 'item-4',
      question: "Xitoy universitetlariga qachon ariza topshirish mumkin?",
      answer: "Ko'pgina Xitoy universitetlari uchun ariza topshirish muddati bahor semestri uchun oktyabr-noyabr, kuz semestri uchun mart-may oylaridir."
    },
    {
      id: 'item-5',
      question: "Xitoyda talabalar yotoqxonasi qanchalik qulay?",
      answer: "Xitoy universitetlarida talabalar yotoqxonalari odatda 2-4 kishilik xonalardan iborat bo'ladi. Ko'pgina yotoqxonalarda dush, Wi-Fi va konditsioner mavjud."
    }
  ];
</script>

<Card>
  <CardHeader>
    <CardTitle class="text-center">Tez-tez so'raladigan savollar</CardTitle>
  </CardHeader>
  <CardContent>
    <Accordion bind:value={value} type="single" collapsible={true} className="w-full">
      {#each faqs as faq}
        <AccordionItem value={faq.id}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      {/each}
    </Accordion>
  </CardContent>
</Card> 