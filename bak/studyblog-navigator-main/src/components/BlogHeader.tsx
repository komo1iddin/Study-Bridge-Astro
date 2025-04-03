
import { Search } from 'lucide-react';

export function BlogHeader() {
  return (
    <header className="py-6 w-full animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Study Blog</h1>
          <p className="text-muted-foreground mt-1">
            Insights and strategies for academic excellence
          </p>
        </div>
        
        <div className="relative hidden md:block">
          <div className="flex items-center h-10 rounded-md border px-3 focus-within:ring-1 focus-within:ring-ring">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
