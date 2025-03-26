export interface Step {
  title: string;
  description: string;
  icon: string;
}

export const steps: Step[] = [
  {
    title: 'Консультация',
    description: 'Бесплатная консультация и подбор программы обучения',
    icon: 'mdi:chat'
  },
  {
    title: 'Документы',
    description: 'Помощь в подготовке и оформлении документов',
    icon: 'mdi:file-document'
  },
  {
    title: 'Подача',
    description: 'Подача документов в выбранные университеты',
    icon: 'mdi:send'
  },
  {
    title: 'Зачисление',
    description: 'Получение приглашения и оформление визы',
    icon: 'mdi:school'
  }
];
