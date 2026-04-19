import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import placeholder from '@/data/placeholder'
import { Divider } from '@/components/ui/Divider'


const STATS = [
  { value: 5, label: 'Years experience', suffix: '+' },
  { value: 100, label: 'Projects completed', suffix: '+' },
  // { value: 30, label: 'Countries visited', suffix: '' },
  // { value: 5, label: 'Awards', suffix: '' },
]

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Parallax portrait — desktop only
      const isDesktop = window.matchMedia('(pointer: fine)').matches
      if (isDesktop) {
        const portraitImg = imageRef.current?.querySelector('img') ?? null
        gsap.to(portraitImg, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Bio lines stagger
      pageRef.current?.querySelectorAll('.bio-line').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)', y: 20 },
          {
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              once: true,
            },
          },
        )
      })

      // Reveal items
      pageRef.current?.querySelectorAll('.reveal-item').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          },
        )
      })

      // Stats count up
      if (statsRef.current) {
        const statEls = statsRef.current.querySelectorAll('.stat-number')
        gsap.fromTo(
          statsRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              onEnter: () => {
                statEls.forEach((el) => {
                  const target = parseInt(el.getAttribute('data-value') ?? '0', 10)
                  const obj = { v: 0 }
                  gsap.to(obj, {
                    v: target,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: () => {
                      el.textContent = Math.round(obj.v).toString()
                    },
                  })
                })
              },
            },
          },
        )
      }

      // Refresh after lazy-loaded layout settles so trigger positions are correct
      setTimeout(() => ScrollTrigger.refresh(), 100)
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef} className="pt-24 md:pt-28">
      {/* Hero bar */}
      <div className="px-6 md:px-10 pt-20 pb-8 max-w-screen-xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-4 reveal-item opacity-0">
          About
        </p>
        <h1
          className="font-display font-light text-[var(--color-text)] reveal-item opacity-0"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          {placeholder.name}
        </h1>
      </div>

      <Divider className="mx-6 md:mx-10 mb-16 reveal-item opacity-0" />

      {/* Split layout */}
      <div className="px-6 md:px-10 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 mb-24">
        {/* Image with parallax */}
        <div
          ref={imageRef}
          className="overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[70vh]">
          <img
            src="/images/optimized/blak naria.jpg"
            alt={`${placeholder.name} — photographer portrait`}
            className="w-full h-[120%] -mt-[10%] object-cover filter grayscale"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          {placeholder.bio.map((para, i) => (
            <p
              key={i}
              className="bio-line text-[var(--color-muted)] leading-relaxed mb-6 text-base md:text-lg"
              style={{ clipPath: "inset(0 0 100% 0)" }}>
              {para}
            </p>
          ))}

          {/* Services */}
          <div className="mt-12 reveal-item opacity-0">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {placeholder.services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span
                    className="w-4 h-px bg-[var(--color-border)]"
                    aria-hidden
                  />
                  <span className="font-display font-light text-[var(--color-text)] text-xl">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[var(--color-surface)] py-20 px-6 md:px-10">
        <div
          ref={statsRef}
          className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center gap-8 opacity-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display font-light text-[var(--color-text)] mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                <span className="stat-number" data-value={stat.value}>
                  0
                </span>
                <span>{stat.suffix}</span>
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      {/* <div className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
        <Divider className="mb-16 reveal-item opacity-0" />
        <div className="reveal-item opacity-0">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-8">
            Clients
          </p>
          <div className="flex flex-wrap gap-8 md:gap-16">
            {placeholder.clients.map((client) => (
              <span
                key={client}
                className="font-mono text-xs md:text-sm tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
