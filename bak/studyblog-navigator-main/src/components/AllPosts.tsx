
import { useState } from 'react';
import { BlogCategory, blogPosts, getPostsByCategory } from '@/lib/blog-data';
import { BlogCard } from './BlogCard';
import { CategoryFilter } from './CategoryFilter';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AllPosts() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const filteredPosts = getPostsByCategory(selectedCategory);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage, 
    currentPage * postsPerPage
  );
  
  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the top of the posts section
    document.getElementById('all-posts')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="all-posts" className="py-8 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-blue-800">Все Статьи</h2>
        <p className="text-muted-foreground mt-1">Откройте для себя информацию и ресурсы для вашего академического успеха</p>
      </div>
      
      <div className="mb-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`animate-slide-up delay-${index % 3 + 1}`}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-md transition-colors",
                currentPage === 1 
                  ? "text-muted-foreground cursor-not-allowed" 
                  : "hover:bg-blue-100 text-blue-600"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "px-3.5 py-2 rounded-md transition-colors",
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 text-blue-600"
                )}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-md transition-colors",
                currentPage === totalPages 
                  ? "text-muted-foreground cursor-not-allowed" 
                  : "hover:bg-blue-100 text-blue-600"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
