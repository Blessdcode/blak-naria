import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from '@/lib/gsap'

export function usePageTransition() {
  const navigate = useNavigate()

  const transitionTo = useCallback(
    (to: string) => {
      const overlay = document.getElementById('page-transition')
      if (!overlay) {
        navigate(to)
        return
      }

      const tl = gsap.timeline()
      tl.set(overlay, { transformOrigin: 'bottom', scaleY: 0, pointerEvents: 'all' })
        .to(overlay, { scaleY: 1, duration: 0.55, ease: 'power3.inOut' })
        .add(() => navigate(to))
        .to(overlay, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 0.55,
          ease: 'power3.inOut',
          delay: 0.05,
        })
        .set(overlay, { pointerEvents: 'none' })
    },
    [navigate],
  )

  return { transitionTo }
}
