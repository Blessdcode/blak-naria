import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ className, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return <div className={cn('w-px bg-[var(--color-border)] self-stretch', className)} />
  }
  return <div className={cn('w-full h-px bg-[var(--color-border)]', className)} />
}
