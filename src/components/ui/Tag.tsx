import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)] border border-[var(--color-border)] px-3 py-1',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
