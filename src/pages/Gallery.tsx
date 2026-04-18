/* eslint-disable react-hooks/preserve-manual-memoization */
import { useRef, useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import placeholder, { type GalleryItem } from "@/data/placeholder";

type FilterCategory = "All" | GalleryItem["category"];
const CATEGORIES: FilterCategory[] = [
  "All",
  "Portrait",
  "Landscape",
  "Pre-Wedding"
];

export default function Gallery() {
  const pageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImgRef = useRef<HTMLImageElement>(null);

  const filtered =
    activeFilter === "All"
      ? placeholder.gallery
      : placeholder.gallery.filter((i) => i.category === activeFilter);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Animate filter indicator
  const updateIndicator = useCallback((activeEl: HTMLButtonElement) => {
    const bar = filterBarRef.current;
    const indicator = indicatorRef.current;
    if (!bar || !indicator) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = activeEl.getBoundingClientRect();
    gsap.to(indicator, {
      x: btnRect.left - barRect.left,
      width: btnRect.width,
      duration: 0.35,
      ease: "power3.out",
    });
  }, []);

  // Initialize indicator position
  useEffect(() => {
    const bar = filterBarRef.current;
    if (!bar) return;
    const first = bar.querySelector("button") as HTMLButtonElement | null;
    if (first) updateIndicator(first);
  }, [updateIndicator]);

  // Grid reveal on scroll
  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll<HTMLElement>(".gallery-card");
      cards?.forEach((card, i) => {
        // Skip cards already animated (GSAP sets inline opacity: 1)
        if (card.style.opacity === "1") return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        );
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: gridRef, dependencies: [visibleItems.length, activeFilter] },
  );

  // Lightbox open
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  // Lightbox close
  const closeLightbox = useCallback(() => {
    const lb = lightboxRef.current;
    if (!lb) {
      setLightboxIndex(null);
      return;
    }
    gsap.to(lb, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setLightboxIndex(null);
        document.body.style.overflow = "";
      },
    });
  }, []);

  // Lightbox navigate
  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next = (lightboxIndex + dir + filtered.length) % filtered.length;
      if (!lightboxImgRef.current) {
        setLightboxIndex(next);
        return;
      }
      gsap.to(lightboxImgRef.current, {
        opacity: 0,
        x: dir * -30,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setLightboxIndex(next);
          gsap.fromTo(
            lightboxImgRef.current,
            { opacity: 0, x: dir * 30 },
            { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
          );
        },
      });
    },
    [lightboxIndex, filtered.length],
  );

  // Lightbox entry animation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const lb = lightboxRef.current;
    if (!lb) return;
    gsap.fromTo(
      lb,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" },
    );
    gsap.fromTo(
      lightboxImgRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" },
    );
  }, [lightboxIndex]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div ref={pageRef} className="pt-24 md:pt-28 min-h-screen">
      {/* Page heading */}
      <div className="px-6 md:px-10 pt-20 pb-12 max-w-screen-xl mx-auto">
        <h1
          className="font-display font-light text-[var(--color-text)]"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          Gallery
        </h1>
      </div>

      {/* Filter bar */}
      <div className="px-6 md:px-10 max-w-screen-xl mx-auto mb-16">
        <div
          ref={filterBarRef}
          role="tablist"
          aria-label="Filter by category"
          className="relative flex items-center gap-0 border-b border-[var(--color-border)] overflow-x-auto scrollbar-none flex-nowrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={(e) => {
                setActiveFilter(cat);
                setVisibleCount(12);
                updateIndicator(e.currentTarget);
              }}
              className={`
                font-mono text-[10px] tracking-widest uppercase px-5 py-3 transition-colors duration-300
                ${activeFilter === cat ? "text-[var(--color-text)]" : "text-[var(--color-muted)] hover:text-[var(--color-text)]"}
              `}>
              {cat}
            </button>
          ))}
          {/* Animated underline */}
          <div
            ref={indicatorRef}
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-[var(--color-text)] transition-none"
          />
        </div>
      </div>

      {/* Masonry grid */}
      <div
        ref={gridRef}
        className="px-6 md:px-10 max-w-screen-xl mx-auto pb-6 columns-2 md:columns-3 gap-4">
        {visibleItems.map((item, i) => (
          <div
            key={item.id}
            className="gallery-card group relative overflow-hidden mb-4 cursor-pointer opacity-0 break-inside-avoid"
            onClick={() => openLightbox(i)}
            data-cursor-expand
            role="button"
            aria-label={`Open ${item.title}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}>
            <img
              src={item.src}
              alt={item.title}
              className="w-full block transition-transform duration-700 group-hover:scale-[1.04] opacity-0"
              loading="lazy"
              onLoad={(e) => {
                const img = e.currentTarget;
                img.style.opacity = "1";
                img.style.transition = "opacity 0.5s ease";
                const skeleton = img.nextElementSibling as HTMLElement | null;
                if (skeleton) skeleton.style.display = "none";
              }}
            />
            {/* Skeleton overlay — hidden once image loads */}
            <div className="skeleton-shimmer absolute inset-0 pointer-events-none" aria-hidden />
            {/* Caption overlay */}
            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-bg)]/90 to-transparent p-4
                         translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              {/* <p className="font-display font-light text-[var(--color-text)] text-lg">
                {item.title}
              </p> */}
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)]">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      {hasMore && (
        <div className="flex justify-center py-12">
          <button
            onClick={() => setVisibleCount((c) => c + 12)}
            className="font-mono text-[10px] tracking-widest uppercase px-8 py-3 border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors duration-300">
            See More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && currentItem && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "var(--color-overlay)", opacity: 0 }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${currentItem.title}`}>
          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}>
            <img
              ref={lightboxImgRef}
              src={currentItem.src}
              alt={currentItem.title}
              className="max-w-[80vw] max-h-[82vh] object-contain"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex justify-between items-center border-t border-[var(--color-border)]">
              <div>
                {/* <p className="font-display font-light text-[var(--color-text)] text-lg">
                  {currentItem.title}
                </p> */}
                <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)]">
                  {currentItem.category}
                </p>
              </div>
              <span className="font-mono text-[10px] text-[var(--color-muted)]">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox">
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>

          {/* Next */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            aria-label="Next image">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
