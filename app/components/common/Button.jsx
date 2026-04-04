'use client';

import { cn } from '@/app/utils/cn';

/**
 * Reusable Button component with multiple variants
 * Supports different sizes, colors, and disabled states
 */
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 focus:ring-gray-500',
    ghost: 'hover:bg-gray-900 text-gray-300 hover:text-white focus:ring-gray-500',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 focus:ring-cyan-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
