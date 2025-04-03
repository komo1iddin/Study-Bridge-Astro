
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
    active?: boolean;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav>
      <ol className="flex items-center space-x-1 text-sm">
        <li className="flex items-center">
          <a 
            href="/" 
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Главная</span>
          </a>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center">
              <ChevronRight className="h-3 w-3 text-gray-400" />
            </li>
            <li>
              <a
                href={item.href}
                className={cn(
                  "transition-colors hover:text-blue-600",
                  item.active ? "text-gray-900 font-medium" : "text-gray-500"
                )}
              >
                {item.label}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
