import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names with tailwind classes, preventing duplicates
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
