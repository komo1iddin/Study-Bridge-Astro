// types/blog.ts
import type { Lang } from '@/i18n/langUtils';

export interface Author {
  name: string;
  image: string;
  role: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  publishedDate?: string;
  image: string;
  author: string | Author;
  authorImage?: string;
  authorRole?: string;
  readTime?: string;
  content: string;
  tags?: string[];
  id?: string;
  slug?: string;
  featured?: boolean;
  lang?: Lang;
}
