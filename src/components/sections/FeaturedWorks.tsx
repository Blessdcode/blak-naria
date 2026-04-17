import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import placeholder from '@/data/placeholder'
import { Tag } from '@/components/ui/Tag'
import { usePageTransition } from '@/hooks/usePageTransition'


const FEATURED = placeholder.gallery.slice(0, 5)

export function FeaturedWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const { transitionTo } = usePageTransition()

  useGSAP(
    () => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        },
      )

      // Image clip-path reveal on scroll
      sectionRef.current?.querySelectorAll('.work-item').forEach((item) => {
        const img = item.querySelector('.work-img-wrap')
        const caption = item.querySelector('.work-caption')

        gsap.fromTo(
          img,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          },
        )

        gsap.fromTo(
          caption,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          },
        )
      })

      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 md:px-10 max-w-screen-xl mx-auto"
      aria-label="Featured works"
    >
      {/* Heading */}
      <div ref={headingRef} className="flex items-end justify-between mb-16 opacity-0">
        <h2
          className="font-display font-light text-[var(--color-text)]"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
         Work Completed 
        </h2>
        <button
          onClick={() => transitionTo('/gallery')}
          className="hidden md:flex font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors items-center gap-2"
        >
          All work <span aria-hidden>→</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {FEATURED.map((item, i) => (
          <div
            key={item.id}
            className={`work-item group cursor-pointer ${i === 0 ? 'md:row-span-2' : ''}`}
            onClick={() => transitionTo('/gallery')}
            data-cursor-expand
          >
            <div
              className="work-img-wrap relative overflow-hidden"
              style={{
                clipPath: 'inset(100% 0 0 0)',
                aspectRatio: i === 0 ? '3/4' : '4/3',
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-bg)]/0 group-hover:bg-[var(--color-bg)]/20 transition-colors duration-500" />
            </div>
            <div className="work-caption flex items-center justify-between mt-3 opacity-0">
              <div>
                {/* <p className="font-display font-light text-[var(--color-text)] text-lg">{item.title}</p> */}
              </div>
              <Tag>{item.category}</Tag>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile "all work" link */}
      <div className="mt-10 md:hidden text-center">
        <button
          onClick={() => transitionTo('/gallery')}
          className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          View all work →
        </button>
      </div>
    </section>
  )
}
