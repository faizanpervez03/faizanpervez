'use client';

import { cn } from '@/app/utils/cn';

/**
 * Badge component for tags and labels
 * Small visual indicators for categories, statuses, and technologies
 */
export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}) {
  const variants = {
    default: 'bg-gray-800 text-gray-300 border border-gray-700',
    primary: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
    success: 'bg-green-500/20 text-green-300 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
