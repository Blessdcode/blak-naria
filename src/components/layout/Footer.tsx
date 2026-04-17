import placeholder from '@/data/placeholder'
import { Divider } from '@/components/ui/Divider'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-bg)] pt-0 pb-8 px-6 md:px-10">
      <Divider className="mb-8" />
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)]">
          © {year} {placeholder.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`https://instagram.com/${placeholder.social.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href={`https://twitter.com/${placeholder.social.twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Twitter / X"
          >
            Twitter
          </a>
          <a
            href={`https://linkedin.com/in/${placeholder.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
