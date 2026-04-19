import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.classList.add('cursor-active')

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' })

    const handleMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'none' })
      moveRingX(e.clientX)
      moveRingY(e.clientY)
    }

    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const isImage = target.tagName === 'IMG' || target.dataset.cursorExpand !== undefined
      gsap.to(dot, { scale: isImage ? 4 : 2, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: isImage ? 2.5 : 1.8, opacity: 0.4, duration: 0.3, ease: 'power2.out' })
    }

    const handleLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', handleMove)

    // Observe DOM for new interactable elements
    const bindInteractables = () => {
      document.querySelectorAll('a, button, [data-cursor-expand]').forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    bindInteractables()

    let debounceTimer: ReturnType<typeof setTimeout>
    const observer = new MutationObserver(() => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(bindInteractables, 150)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(debounceTimer)
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', handleMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-2 h-2 rounded-full bg-[var(--color-text)] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[99998] pointer-events-none w-10 h-10 rounded-full border border-[var(--color-text)] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
