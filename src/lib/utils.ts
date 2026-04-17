import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Split a string into individual character spans for GSAP animation */
export function splitChars(text: string): string {
  return text
    .split('')
    .map((char) =>
      char === ' '
        ? '<span class="inline-block">&nbsp;</span>'
        : `<span class="inline-block overflow-clip"><span class="inline-block char">${char}</span></span>`,
    )
    .join('')
}

/** Split text into line spans */
export function splitLines(text: string): string {
  return text
    .split('\n')
    .map((line) => `<span class="line-wrap overflow-clip block"><span class="line inline-block">${line}</span></span>`)
    .join('')
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}
