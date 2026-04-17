import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import placeholder from "@/data/placeholder";
import { Divider } from "@/components/ui/Divider";
import { usePageTransition } from "@/hooks/usePageTransition";

export function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const { transitionTo } = usePageTransition();

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll(".reveal-item");
      items?.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
            },
          },
        );
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto"
      aria-label="About teaser">
      <Divider className="mb-16 reveal-item opacity-0" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="reveal-item opacity-0">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-4">
            About
          </p>
          <h2
            className="font-display font-light text-[var(--color-text)] leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            A decade of
            <br />
            <em>decisive moments.</em>
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-sm">
            {placeholder.bio[0]}
          </p>
          <button
            onClick={() => transitionTo("/about")}
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-text)] flex items-center gap-2 group">
            <span>Read more</span>
            <span
              className="transform transition-transform group-hover:translate-x-1"
              aria-hidden>
              →
            </span>
          </button>
        </div>

        <div className="reveal-item opacity-0 grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/images/optimized/IMG_4056.JPG.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden mt-8">
            <img
              src="/images/optimized/IMG_2999.JPG.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
