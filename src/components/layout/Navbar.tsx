/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '@/lib/gsap'
import { usePageTransition } from '@/hooks/usePageTransition'
import { cn } from '@/lib/utils'
import placeholder from '@/data/placeholder'


const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  // { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { transitionTo } = usePageTransition()

  // Scroll detection — plain listener so route-change ScrollTrigger.killAll() can't touch it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Mobile menu open/close animation
  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    if (menuOpen) {
      gsap.set(menu, { display: 'flex' })
      gsap.fromTo(
        menu,
        { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.55, ease: 'power3.inOut' },
      )
      const links = menu.querySelectorAll('.mobile-link')
      gsap.fromTo(
        links,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, delay: 0.2, duration: 0.5, ease: 'power3.out' },
      )
    } else {
      gsap.to(menu, {
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => gsap.set(menu, { display: 'none' }),
      })
    }
  }, [menuOpen])

  const handleNav = (to: string) => {
    setMenuOpen(false)
    transitionTo(to)
  }

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)] py-4'
            : 'bg-transparent py-6',
        )}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-screen-xl mx-auto px-8 md:px-14 flex items-center justify-between"
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="font-display text-xl font-light tracking-widest text-[var(--color-text)] hover:opacity-70 transition-opacity"
            aria-label="Go to homepage"
          >
            {placeholder.name}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <button
                key={to}
                onClick={() => handleNav(to)}
                className={cn(
                  'font-mono text-[11px] tracking-widest uppercase transition-colors duration-300',
                  location.pathname === to
                    ? 'text-[var(--color-text)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
                )}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('/contact')}
              className="font-mono text-[11px] tracking-widest uppercase border border-[var(--color-border)] text-[var(--color-text)] px-5 py-2 hover:border-[var(--color-text)] transition-colors duration-300 ml-4"
            >
              Hire Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={cn(
                'block w-6 h-px bg-[var(--color-text)] transition-transform duration-300 origin-center',
                menuOpen && 'translate-y-[10px] rotate-45',
              )}
            />
            <span
              className={cn(
                'block w-4 h-px bg-[var(--color-text)] transition-all duration-300',
                menuOpen && 'opacity-0 w-0',
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-[var(--color-text)] transition-transform duration-300 origin-center',
                menuOpen && '-translate-y-[4px] -rotate-45',
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        ref={menuRef}
        aria-label="Mobile navigation"
        style={{ display: 'none', clipPath: 'inset(0 0 100% 0)' }}
        className="fixed inset-0 z-40 bg-[var(--color-bg)] flex-col items-center justify-center gap-8"
      >
        {NAV_LINKS.map(({ label, to }) => (
          <button
            key={to}
            onClick={() => handleNav(to)}
            className="mobile-link font-display text-5xl font-light text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => handleNav('/contact')}
          className="mobile-link font-mono text-sm tracking-widest uppercase border border-[var(--color-text)] text-[var(--color-text)] px-8 py-3 mt-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors"
        >
          Hire Me
        </button>
      </div>
    </>
  )
}
