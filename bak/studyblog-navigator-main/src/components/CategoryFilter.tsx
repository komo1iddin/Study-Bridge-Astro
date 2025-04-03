
import { BlogCategory, categories } from '@/lib/blog-data';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-col space-y-4 animate-fade-in">
      <h3 className="text-sm font-medium text-blue-700">Фильтр по категории</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-full transition-all duration-200",
              "hover:bg-blue-100",
              selectedCategory === category.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-blue-700 border border-blue-200"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
