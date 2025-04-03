
import { getFeaturedPosts } from '@/lib/blog-data';
import { BlogCard } from './BlogCard';

export function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <section className="py-8 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Featured Articles</h2>
        <p className="text-muted-foreground mt-1">Selected insights to inspire your academic journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`animate-slide-up delay-${index + 1}`}
          >
            <BlogCard post={post} variant="featured" />
          </div>
        ))}
      </div>
    </section>
  );
}
