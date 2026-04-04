import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes with tailwind-merge for proper merging
 * Prevents style conflicts when combining Tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
