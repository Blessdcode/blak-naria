import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'outline', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-mono text-xs tracking-widest uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-1',
          variant === 'primary' && 'bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-3 hover:bg-[var(--color-muted)] hover:text-[var(--color-text)]',
          variant === 'outline' && 'border border-[var(--color-border)] text-[var(--color-text)] px-8 py-3 hover:border-[var(--color-text)]',
          variant === 'ghost' && 'text-[var(--color-text)] underline-offset-4 hover:underline px-0 py-1',
          size === 'sm' && 'text-[10px] px-5 py-2',
          size === 'lg' && 'text-sm px-10 py-4',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export { Button }
