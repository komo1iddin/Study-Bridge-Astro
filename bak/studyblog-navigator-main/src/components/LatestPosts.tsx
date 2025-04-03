
import { getLatestPosts } from '@/lib/blog-data';
import { BlogCard } from './BlogCard';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function LatestPosts() {
  const latestPosts = getLatestPosts(6);
  
  return (
    <section className="py-8 animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-blue-800">Последние Статьи</h2>
          <p className="text-muted-foreground mt-1">Свежий контент, чтобы держать вас в курсе событий</p>
        </div>
        
        <Button variant="outline" asChild className="hidden sm:flex">
          <Link to="/blog/studying-in-china" className="group">
            Читать статью о Китае 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {latestPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`animate-slide-up delay-${index % 3 + 1}`}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center sm:hidden">
        <Button variant="outline" asChild>
          <Link to="/blog/studying-in-china" className="group">
            Читать статью о Китае 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
