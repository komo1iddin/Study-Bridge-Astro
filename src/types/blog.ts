// types/blog.ts
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
  readTime?: string;
  content: string;
  tags?: string[];
  id?: string;
  slug?: string;
  featured?: boolean;
}
