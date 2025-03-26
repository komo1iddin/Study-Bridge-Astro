// src/data/store/contact/contactStore.ts

export const contactStore = {
    async submitForm(formData: Record<string, any>): Promise<void> {
      // Bu funktsiya kontakt formasini topshirish logikasini amalga oshiradi.
      // Hozircha faqat ma'lumotlarni konsolga chiqarib, muvaffaqiyatli topshirilganlik haqida xabar beramiz.
  
      console.log('Contact Form Data Submitted:', formData);
  
      // Bu yerda siz backend API ga ma'lumotlarni yuborish yoki boshqa amallarni bajarishingiz mumkin.
      // Masalan:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // if (response.ok) {
      //   console.log('Form submitted successfully to backend!');
      // } else {
      //   console.error('Form submission failed:', response.status, response.statusText);
      //   throw new Error('Form submission failed');
      // }
  
      // Muvaffaqiyatli topshirilganlikni simulyatsiya qilish uchun biroz kutamiz (3 sekund)
      await new Promise(resolve => setTimeout(resolve, 3000));
  
      alert('Message sent successfully!'); // Oddiy alert xabari
    },
  };