/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

interface Props {
  src: string
  fallback?: string
  alt: string
  className?: string
}

/**
 * Shows the local fallback image immediately, then swaps to the
 * high-res URL in the background. If no fallback is given, behaves
 * like a normal <img>.
 */
export function ProgressiveImage({ src, fallback, alt, className }: Props) {
  const [displaySrc, setDisplaySrc] = useState(fallback ?? src)

  useEffect(() => {
    if (!fallback || src === fallback) return
    setDisplaySrc(fallback)

    const img = new window.Image()
    img.onload = () => setDisplaySrc(src)
    img.src = src
    return () => { img.onload = null }
  }, [src, fallback])

  return <img src={displaySrc} alt={alt} className={className} />
}
