export function PageTransition() {
  return (
    <div
      id="page-transition"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--color-bg)',
        zIndex: 9999,
        transformOrigin: 'bottom',
        transform: 'scaleY(0)',
        pointerEvents: 'none',
      }}
    />
  )
}
