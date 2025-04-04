// Types for blog data
export type BlogCategory = 'all' | 'academic' | 'study-tips' | 'career' | 'student-life' | 'technology';

export interface BlogAuthor {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  categories: BlogCategory[];
  author: BlogAuthor;
  featured?: boolean;
}

// Sample blog categories
export const categories = [
  { id: 'all', label: 'Все категории' },
  { id: 'academic', label: 'Академические' },
  { id: 'study-tips', label: 'Советы по учебе' },
  { id: 'career', label: 'Карьера' },
  { id: 'student-life', label: 'Студенческая жизнь' },
  { id: 'technology', label: 'Технологии' },
];

// Sample authors
export const authors = {
  alex: {
    name: 'Алексей Петров',
    avatar: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    bio: 'Образовательный консультант с 5-летним опытом работы с китайскими университетами'
  },
  elena: {
    name: 'Елена Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    bio: 'Преподаватель китайского языка и культуры'
  },
  dimitri: {
    name: 'Дмитрий Сидоров',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    bio: 'Выпускник Пекинского университета, специалист по международному образованию'
  }
}; 