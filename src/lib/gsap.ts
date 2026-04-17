import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Flip)

// Kill all scroll triggers on route change
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill())
}

export { gsap, ScrollTrigger, Flip }
