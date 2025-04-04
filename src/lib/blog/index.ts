import { BlogPost, BlogCategory, BlogAuthor, categories, authors } from './types';
import { post as studyingInChina } from './posts/studying-in-china';
import { post as movingToChina } from './posts/moving-to-china';

// Combine all blog posts
export const blogPosts: BlogPost[] = [
  studyingInChina,
  movingToChina,
  // New posts will be added here
];

// Re-export types
export type { BlogPost, BlogCategory, BlogAuthor };
export { categories, authors };

// Utility functions
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.categories.includes(category));
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
}

export function getRelatedPosts(postId: string, count: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === postId);
  
  if (!currentPost) {
    return getLatestPosts(count);
  }
  
  // Find posts with matching categories
  const relatedPosts = blogPosts
    .filter(post => 
      post.id !== postId && 
      post.categories.some(category => currentPost.categories.includes(category))
    )
    .slice(0, count);
  
  // If we don't have enough related posts, fill with latest posts
  if (relatedPosts.length < count) {
    const latestPosts = getLatestPosts(count)
      .filter(post => 
        post.id !== postId && 
        !relatedPosts.some(relatedPost => relatedPost.id === post.id)
      )
      .slice(0, count - relatedPosts.length);
    
    return [...relatedPosts, ...latestPosts];
  }
  
  return relatedPosts;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
} 