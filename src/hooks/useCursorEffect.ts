import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export function useCursorEffect() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.classList.add('cursor-active')

    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    let mouseX = 0
    let mouseY = 0

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: 'none' })
      moveRingX(mouseX)
      moveRingY(mouseY)
    }

    const handleEnter = () => {
      gsap.to(dot, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: 1.6, opacity: 0.5, duration: 0.3, ease: 'power2.out' })
    }

    const handleLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', handleMove)

    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', handleMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return { dotRef, ringRef }
}
