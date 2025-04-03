
import { useState, useEffect } from 'react';
import { Article } from '@/lib/article-data';
import { cn } from '@/lib/utils';
import { Clock, Calendar, User } from 'lucide-react';

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);

  return (
    <article className="max-w-none prose prose-blue lg:prose-lg mx-auto prose-img:rounded-xl prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-headings:text-gray-900">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-4">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center bg-white shadow-sm">
              {article.author.avatar ? (
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-6 h-6 text-gray-500" />
              )}
            </div>
            <span className="font-medium">{article.author.name}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{new Date(article.publishedDate).toLocaleDateString('ru-RU', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-sm bg-black/30 inline-block px-2 py-1 rounded">
              Обучение в Китае открывает новые возможности для студентов со всего мира
            </p>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          {article.excerpt}
        </p>
      </header>
      
      {/* Article Sections */}
      <div className="space-y-12">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} data-section={section.id} className={cn(
            "scroll-mt-24 animate-fade-in",
          )}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {section.title}
            </h2>
            
            <div 
              dangerouslySetInnerHTML={{ __html: section.content }} 
              className="space-y-4 text-gray-700"
            />
          </section>
        ))}
      </div>
    </article>
  );
}
