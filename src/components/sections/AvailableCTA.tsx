import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Divider } from '@/components/ui/Divider'
import { usePageTransition } from '@/hooks/usePageTransition'



export function AvailableCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { transitionTo } = usePageTransition()

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll('.cta-item')
      if (!items?.length) return
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        },
      )

      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto"
      aria-label="Call to action"
    >
      <Divider className="mb-16" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="cta-item opacity-0">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-2">
            Availability
          </p>
          <p
            className="font-display font-light text-[var(--color-text)]"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            Available for work.
          </p>
        </div>
        <div className="cta-item opacity-0">
          <button
            onClick={() => transitionTo('/contact')}
            className="font-mono text-[11px] tracking-widest uppercase bg-[var(--color-text)] text-[var(--color-bg)] px-10 py-4 hover:bg-[var(--color-muted)] transition-colors duration-300 flex items-center gap-3"
          >
            Contact <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
