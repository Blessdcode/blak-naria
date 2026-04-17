import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import placeholder from "@/data/placeholder";
import { usePageTransition } from "@/hooks/usePageTransition";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const { transitionTo } = usePageTransition();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero image: scale in
      tl.fromTo(
        imageRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 },
        0,
      );

      // Name: split into chars and stagger
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            stagger: 0.04,
            duration: 0.85,
            ease: "power3.out",
          },
          0.2,
        );
      }

      // Tagline fade
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.7,
      );

      // Scroll hint
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.1,
      );

      // Infinite scroll hint animation
      const scrollLine =
        scrollHintRef.current?.querySelector(".scroll-line") ?? null;
      gsap.to(scrollLine, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: false,
        repeatDelay: 0.4,
      });
    },
    { scope: containerRef },
  );

  // Manual char split for the name
  const chars = placeholder.name.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero">
      {/* Background image */}
      <div
        ref={imageRef}
        className="absolute inset-0 opacity-0"
        style={{ scale: 0.92 }}>
        <img
          src="/images/optimized/IMG_1726.JPG.jpg"
          alt="Blak Naria — featured photograph"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/20 via-transparent to-[var(--color-bg)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Eyebrow label */}
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-8">
          Photographer · Nigeria
        </p>

        {/* Name with character splitting */}
        <h1
          ref={nameRef}
          className="font-display font-light text-[var(--color-text)] leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          aria-label={placeholder.name}>
          {chars.map((char, i) =>
            char === " " ? (
              <span key={i} className="inline-block">
                &nbsp;
              </span>
            ) : (
              <span key={i} className="inline-block overflow-hidden">
                <span className="char inline-block">{char}</span>
              </span>
            ),
          )}
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="font-display italic font-light text-[var(--color-muted)] max-w-xl mx-auto opacity-0"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}>
          {placeholder.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => transitionTo("/gallery")}
            className="font-mono text-[11px] tracking-widest uppercase bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-3 hover:bg-[var(--color-muted)] transition-colors duration-300">
            View Work
          </button>
          <button
            onClick={() => transitionTo("/contact")}
            className="font-mono text-[11px] tracking-widest uppercase border border-[var(--color-border)] text-[var(--color-text)] px-8 py-3 hover:border-[var(--color-text)] transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0">
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
          Scroll
        </span>
        <div className="w-px h-12 bg-[var(--color-border)] overflow-hidden">
          <div className="scroll-line w-full h-full bg-[var(--color-text)]" />
        </div>
      </div>
    </section>
  );
}
