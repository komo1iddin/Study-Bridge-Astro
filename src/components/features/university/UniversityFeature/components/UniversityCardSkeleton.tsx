import { Card } from "@/components/ui/react/card"
import { Skeleton } from "@/components/ui/react/skeleton"

export function UniversityCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-xl max-w-[300px] w-full shadow-sm">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="p-4 sm:p-5 flex flex-col relative min-h-[280px]">
        {/* Logo skeleton */}
        <div className="absolute -top-8 left-4 sm:left-5 bg-white/90 p-1.5 rounded-full shadow-lg">
          <Skeleton className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
        </div>

        {/* Title section skeleton */}
        <div className="pl-14 sm:pl-16 pt-3 h-[50px] sm:h-[60px]">
          <Skeleton className="h-4 sm:h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 sm:h-5 w-1/2" />
        </div>

        <div className="h-px bg-gray-200 my-2 sm:my-3"></div>

        {/* Location section skeleton */}
        <div className="h-[28px] sm:h-[32px] mb-2">
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Faculties section skeleton */}
        <div className="h-[80px] sm:h-[90px] mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton 
                key={i} 
                className="h-5 sm:h-6 w-16 sm:w-20 rounded-full" 
              />
            ))}
          </div>
        </div>

        {/* Button skeleton */}
        <Skeleton className="w-full h-8 sm:h-10 rounded-xl" />
      </div>
    </Card>
  )
}
