interface Author {
  name: string;
  image: string;
  role: string;
}

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: Author;
  category: string;
  readTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: 'Как поступить в университет Китая в 2025 году',
    slug: 'how-to-apply-chinese-university-2025',
    excerpt: 'Пошаговое руководство по поступлению в китайские вузы: от выбора программы до подачи документов.',
    content: '...', // Full content here
    image: '/images/blog/university-application.jpg',
    date: '2025-02-15',
    author: {
      name: 'Анна Ли',
      image: '/images/team/anna.jpg',
      role: 'Образовательный консультант'
    },
    category: 'Поступление',
    readTime: '8 мин',
    tags: ['образование', 'китай', 'поступление', 'университет']
  },
  {
    title: 'Стипендии и гранты для иностранных студентов',
    slug: 'scholarships-for-international-students',
    excerpt: 'Обзор доступных стипендиальных программ и грантов для обучения в Китае.',
    content: '...', // Full content here
    image: '/images/blog/scholarships.jpg',
    date: '2025-02-10',
    author: {
      name: 'Михаил Чен',
      image: '/images/team/michael.jpg',
      role: 'Финансовый консультант'
    },
    category: 'Финансирование',
    readTime: '6 мин',
    tags: ['стипендии', 'гранты', 'финансирование', 'обучение']
  }
];