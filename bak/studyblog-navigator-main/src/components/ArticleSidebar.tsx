
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Book, Languages, Wallet, Users, Briefcase, CheckCircle, Share2, Copy } from 'lucide-react';
import { Article } from '@/lib/article-data';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ArticleSidebarProps {
  article: Article;
  activeSection: string | null;
}

// Map section IDs to appropriate icons
const getSectionIcon = (id: string) => {
  const iconMap: Record<string, any> = {
    'intro': Book,
    'admission': GraduationCap,
    'language': Languages,
    'costs': Wallet,
    'life': Users,
    'work': Briefcase,
    'benefits': CheckCircle
  };
  
  // Return the mapped icon or default to Book
  const IconComponent = iconMap[id] || Book;
  return <IconComponent className="flex-shrink-0 h-5 w-5" />;
};

export function ArticleSidebar({ article, activeSection }: ArticleSidebarProps) {
  const [open, setOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Ссылка скопирована",
      description: "Ссылка на статью скопирована в буфер обмена",
    });
  };

  // Mobile drawer with table of contents
  const MobileTableOfContents = () => (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg md:hidden"
        >
          <Book className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white border-t border-gray-200">
        <div className="p-4">
          <h3 className="text-xl font-bold text-blue-900 mb-1">Содержание статьи</h3>
          <p className="text-sm text-gray-500 mb-4">Выберите раздел для навигации</p>
          <div className="mt-4">
            <ul className="space-y-2">
              {article.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg text-sm flex items-center gap-3 transition-colors",
                      activeSection === section.id 
                      ? "bg-blue-50 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {getSectionIcon(section.id)}
                    <span className="font-medium">{section.title}</span>
                    {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <MobileTableOfContents />
      
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="pb-2 bg-white">
          <div className="px-4 py-3">
            <h3 className="text-xl font-bold text-blue-900 mb-1">Содержание статьи</h3>
            <p className="text-sm text-gray-500">Выберите раздел для навигации</p>
          </div>
          <div className="flex justify-start px-4 pb-2">
            <Link to="/" className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
              <GraduationCap className="w-5 h-5 mr-1" />
              <span>Назад к блогу</span>
            </Link>
          </div>
        </SidebarHeader>
        
        <SidebarContent className="px-2 py-2 bg-white border-y border-gray-200">
          <SidebarMenu>
            {article.sections.map((section) => (
              <SidebarMenuItem key={section.id}>
                <SidebarMenuButton
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "p-3",
                    activeSection === section.id 
                      ? "bg-blue-50 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {getSectionIcon(section.id)}
                  <span>{section.title}</span>
                  {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter className="bg-white">
          <div className="p-4 bg-blue-50 rounded-lg m-3 border border-blue-100">
            <h4 className="font-medium text-blue-800 text-sm mb-2">Понравилась статья?</h4>
            <p className="text-xs text-gray-700 mb-3">Поделитесь с друзьями или сохраните для будущего прочтения.</p>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white hover:bg-gray-50 text-gray-700"
                onClick={() => {
                  const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`;
                  window.open(shareUrl, '_blank', 'width=600,height=400');
                }}
              >
                <Share2 className="mr-1 h-4 w-4 text-blue-600" />
                <span>Поделиться</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white hover:bg-gray-50 text-gray-700"
                onClick={handleCopyLink}
              >
                <Copy className="mr-1 h-4 w-4 text-blue-600" />
                <span>Копировать</span>
              </Button>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
