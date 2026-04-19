import { useState, useEffect } from 'react'

/** Returns true on devices with a precise pointer (mouse), false on touch/mobile. */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isDesktop
}
