
import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogHeader } from '@/components/BlogHeader';
import { FeaturedPosts } from '@/components/FeaturedPosts';
import { LatestPosts } from '@/components/LatestPosts';
import { AllPosts } from '@/components/AllPosts';
import { Separator } from '@/components/ui/separator';
import { CategoryFilter } from '@/components/CategoryFilter';

const Index = () => {
  const breadcrumbItems = [
    { label: 'Ресурсы', href: '/resources' },
    { label: 'Блог', href: '/blog', active: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-6">
          <BlogHeader />
        </div>
        
        <Separator className="my-8" />
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-blue-800 mb-4">Категории</h2>
          <CategoryFilter selectedCategory="all" onCategoryChange={() => {}} />
        </div>
        
        <FeaturedPosts />
        
        <Separator className="my-8" />
        
        <LatestPosts />
        
        <Separator className="my-8" />
        
        <AllPosts />
      </div>
    </div>
  );
};

export default Index;
