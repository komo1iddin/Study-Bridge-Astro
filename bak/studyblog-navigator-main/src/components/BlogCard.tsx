
import { BlogPost, formatDate } from '@/lib/blog-data';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

export function BlogCard({ post, variant = 'default', className }: BlogCardProps) {
  const isMinimal = variant === 'minimal';
  const isFeatured = variant === 'featured';

  return (
    <article 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300",
        "hover:shadow-lg transform hover:-translate-y-1",
        isFeatured ? "h-full" : "",
        isMinimal ? "border-0" : "border border-blue-100",
        "bg-white",
        className
      )}
    >
      <div className={cn(
        "relative overflow-hidden",
        isMinimal ? "aspect-[16/9] rounded-lg" : 
        isFeatured ? "aspect-[16/12]" : "aspect-[16/9]",
      )}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className={cn(
        "flex flex-col",
        isMinimal ? "p-2" : isFeatured ? "p-6" : "p-4"
      )}>
        <div className="flex items-center gap-2 mb-2">
          {!isMinimal && post.categories.slice(0, 2).map((category) => (
            <span key={category} className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
              {category === 'academic' && 'Академические'}
              {category === 'study-tips' && 'Советы по учебе'}
              {category === 'career' && 'Карьера'}
              {category === 'student-life' && 'Студенческая жизнь'}
              {category === 'technology' && 'Технологии'}
            </span>
          ))}
          {!isMinimal && (
            <span className="text-xs text-blue-500 ml-auto">
              {post.readTime}
            </span>
          )}
        </div>

        <h3 className={cn(
          "font-semibold tracking-tight leading-tight mb-2 group-hover:text-blue-600 transition-colors",
          isFeatured ? "text-2xl" : isMinimal ? "text-base" : "text-lg"
        )}>
          <a href={`/blog/${post.id}`}>
            {post.title}
          </a>
        </h3>

        {!isMinimal && (
          <p className={cn(
            "text-gray-600 line-clamp-2 mb-4",
            isFeatured ? "text-base" : "text-sm"
          )}>
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2">
          {!isMinimal && (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover border-2 border-blue-200"
            />
          )}
          <div className="flex flex-col">
            {!isMinimal && (
              <span className="text-xs font-medium text-gray-700">
                {post.author.name}
              </span>
            )}
            <span className="text-xs text-blue-500">
              {formatDate(post.publishedDate)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
