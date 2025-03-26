export interface ContactMethod {
  icon: 'Phone' | 'Send' | 'Mail';
  title: string;
  description: string;
  action: {
    text: string;
    link: string;
  };
}

export const contactMethods: ContactMethod[] = [
  {
    icon: 'Phone',
    title: 'Позвоните нам',
    description: 'Наши специалисты готовы ответить на ваши вопросы',
    action: {
      text: '+998 90 123 45 67',
      link: 'tel:+998901234567'
    }
  },
  {
    icon: 'Send',
    title: 'Telegram',
    description: 'Быстрые ответы в нашем Telegram канале',
    action: {
      text: '@educhinauz',
      link: 'https://t.me/educhinauz'
    }
  },
  {
    icon: 'Mail',
    title: 'Email',
    description: 'Отправьте нам email для детальной консультации',
    action: {
      text: 'info@educhina.uz',
      link: 'mailto:info@educhina.uz'
    }
  }
];
