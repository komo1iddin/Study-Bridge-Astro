
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ArticleContent } from '@/components/ArticleContent';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Clock, Calendar, User } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { toast } from '@/hooks/use-toast';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { getArticleBySlug } from '@/lib/article-data';

const Article = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const article = getArticleBySlug("studying-in-china");
  
  const breadcrumbItems = [
    { label: 'Ресурсы', href: '/resources' },
    { label: 'Блог', href: '/' },
    { label: article.title, href: `/blog/${id}`, active: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentActiveSection = null;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActiveSection = section.getAttribute('data-section');
          break;
        }
      }
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Ссылка скопирована",
          description: "Ссылка на статью скопирована в буфер обмена",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <ArticleSidebar 
            article={article} 
            activeSection={activeSection}
          />
          
          <main className="flex-1">
            {/* Top navigation bar with breadcrumbs */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild 
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Link to="/">
                    <ArrowLeft size={18} className="mr-1" />
                    <span>Назад к блогу</span>
                  </Link>
                </Button>
                
                <Breadcrumb items={breadcrumbItems} />
                
                <div className="flex space-x-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleShare('twitter')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleShare('facebook')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleShare('telegram')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M21.75 2.008a1.881 1.881 0 0 0-1.89-.22L2.18 8.693a1.882 1.882 0 0 0 .21 3.535l4.21 1.272.76 5.55a1.884 1.884 0 0 0 3.243.911l2.063-2.352 4.02 3.05a1.885 1.885 0 0 0 2.952-1.252l3-16.228a1.885 1.885 0 0 0-.89-2.171Z"></path><path d="m7.84 13.757 10.67-6.337"></path></svg>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Telegram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleShare('copy')}
                        >
                          <Share2 className="h-4 w-4 text-blue-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Копировать ссылку</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="fixed top-0 left-0 w-full h-1 z-50">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                  style={{ 
                    width: `${(activeSection ? article.sections.findIndex(s => s.id === activeSection) + 1 : 0) / article.sections.length * 100}%` 
                  }}
                />
              </div>
              
              <ArticleContent article={article} />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Article;
