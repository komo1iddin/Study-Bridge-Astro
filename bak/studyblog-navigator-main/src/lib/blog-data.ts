
export type BlogCategory = 'academic' | 'study-tips' | 'career' | 'student-life' | 'technology' | 'all';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  coverImage: string;
  categories: BlogCategory[];
  featured?: boolean;
}

export const categories: { id: BlogCategory; label: string }[] = [
  { id: 'all', label: 'Все статьи' },
  { id: 'academic', label: 'Академические' },
  { id: 'study-tips', label: 'Советы по учебе' },
  { id: 'career', label: 'Карьера' },
  { id: 'student-life', label: 'Студенческая жизнь' },
  { id: 'technology', label: 'Технологии' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как сдать экзамены на отлично: Проверенные стратегии обучения',
    excerpt: 'Откройте для себя подтвержденные исследованиями методы обучения, которые помогут вам максимально повысить эффективность экзаменов и надолго сохранить информацию.',
    author: {
      name: 'Др. Сара Чен',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-07-15',
    readTime: '8 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['academic', 'study-tips'],
    featured: true,
  },
  {
    id: '2',
    title: 'Будущее высшего образования: Цифровая трансформация',
    excerpt: 'Как технологии меняют опыт обучения и что это значит для студентов в ближайшее десятилетие.',
    author: {
      name: 'Проф. Джеймс Вильсон',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-08-02',
    readTime: '12 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['technology', 'academic'],
    featured: true,
  },
  {
    id: '3',
    title: 'Балансирование учебы и психического здоровья',
    excerpt: 'Практические стратегии для поддержания благополучия при управлении академическим давлением и сроками.',
    author: {
      name: 'Эмма Родригес',
      avatar: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-08-10',
    readTime: '7 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['student-life', 'study-tips'],
  },
  {
    id: '4',
    title: 'От кампуса до корпорации: Получение работы мечты',
    excerpt: 'Экспертные советы по составлению резюме, эффективному нетворкингу и успешному прохождению собеседований на современном конкурентном рынке труда.',
    author: {
      name: 'Михаил Чанг',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-08-18',
    readTime: '10 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['career'],
    featured: true,
  },
  {
    id: '5',
    title: 'Сила активного обучения: За пределами чтения учебников',
    excerpt: 'Почему активное взаимодействие с материалом приводит к лучшему пониманию и сохранению знаний, чем пассивные методы обучения.',
    author: {
      name: 'Др. Сара Чен',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-08-22',
    readTime: '9 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['academic', 'study-tips'],
  },
  {
    id: '6',
    title: 'ИИ-инструменты, которые трансформируют методы исследований',
    excerpt: 'Исчерпывающее руководство по ресурсам искусственного интеллекта, которые меняют способ проведения академических исследований.',
    author: {
      name: 'Проф. Джеймс Вильсон',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-08-28',
    readTime: '11 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['technology', 'academic'],
  },
  {
    id: '7',
    title: 'Создание продуктивного пространства для учебы: Принципы дизайна',
    excerpt: 'Как оптимизировать вашу среду для концентрации, творчества и эффективности обучения.',
    author: {
      name: 'Эмма Родригес',
      avatar: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-09-05',
    readTime: '6 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['student-life', 'study-tips'],
  },
  {
    id: '8',
    title: 'Стратегии нетворкинга для интровертных студентов',
    excerpt: 'Практические подходы к построению профессиональных связей, которые работают для тех, кто находит нетворкинг сложным.',
    author: {
      name: 'Михаил Чанг',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
    },
    publishedDate: '2023-09-12',
    readTime: '8 мин чтения',
    coverImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories: ['career', 'student-life'],
  }
];

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getLatestPosts = (count: number = 4): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.categories.includes(category));
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
};
