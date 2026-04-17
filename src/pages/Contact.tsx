import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import placeholder from "@/data/placeholder";
import { Divider } from "@/components/ui/Divider";
import { TikTokIcon, TwitterIcon, WhatsAppIcon } from "@/lib/contact.utils";

const W3F_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type SendStatus = "idle" | "sending" | "success" | "error";

const PROJECT_TYPES = [
  "Portrait Session",
  "Out-Door",
  "Studio",
  "Commercial",
  "Event Coverage",
  "Other",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<SendStatus>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  // ── Animations ──────────────────────────────────────────────────────────────
  useGSAP(
    () => {
      const track = marqueeRef.current?.querySelector(".marquee-track");
      if (track) {
        gsap.to(track, { x: "-50%", duration: 22, ease: "none", repeat: -1 });
      }

      pageRef.current?.querySelectorAll(".reveal-item").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        );
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: pageRef },
  );

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    // Fallback to mailto if key not configured
    if (!W3F_KEY || W3F_KEY === "your_access_key_here") {
      const mailto =
        `mailto:${placeholder.email}` +
        `?subject=${encodeURIComponent(`Project enquiry from ${form.name}`)}` +
        `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.projectType}\n\n${form.message}`)}`;
      window.location.href = mailto;
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: W3F_KEY,
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          message: form.message,
          subject: `New enquiry from ${form.name} — ${form.projectType || "General"}`,
          from_name: "Blak Naira Portfolio",
        }),
      });

      const data = (await res.json()) as { success: boolean };

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div ref={pageRef} className="pt-24 md:pt-28 min-h-screen">
      {/* Marquee */}
      <div
        ref={marqueeRef}
        aria-hidden
        className="overflow-hidden border-b border-[var(--color-border)] py-4 select-none">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display italic font-light text-2xl text-[var(--color-muted)] mx-8 flex-shrink-0">
              Let's work together &nbsp;·&nbsp; Let's work together
              &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Email hero */}
      <div className="px-6 md:px-10 pt-20 pb-8 max-w-screen-xl mx-auto reveal-item opacity-0">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-6">
          Get in touch
        </p>
        <a
          href={`mailto:${placeholder.email}`}
          className="font-display font-light text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors block"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
          {placeholder.email}
        </a>
      </div>

      <Divider className="mx-6 md:mx-10 mb-16 reveal-item opacity-0" />

      {/* Form + Social */}
      <div className="px-6 md:px-10 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 pb-24">
        {/* ── Form ── */}
        <div className="reveal-item opacity-0">
          {status === "success" ? (
            <div className="py-12">
              <p className="font-display font-light text-[var(--color-text)] text-3xl mb-4">
                Message received.
              </p>
              <p className="text-[var(--color-muted)]">
                Thank you for reaching out. I'll be in touch shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors underline-offset-4 hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-8">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-0 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-none ${
                    focused === "name" || form.name
                      ? "-top-4 text-[var(--color-text)]"
                      : "top-3 text-[var(--color-muted)]"
                  }`}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-text)] pt-3 pb-2 text-[var(--color-text)] outline-none transition-colors duration-300 font-light text-base"
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-0 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-none ${
                    focused === "email" || form.email
                      ? "-top-4 text-[var(--color-text)]"
                      : "top-3 text-[var(--color-muted)]"
                  }`}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-text)] pt-3 pb-2 text-[var(--color-text)] outline-none transition-colors duration-300 font-light text-base"
                  autoComplete="email"
                />
              </div>

              {/* Project type */}
              <div className="relative">
                <label
                  htmlFor="projectType"
                  className="block font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)] mb-2">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-text)] py-2 text-[var(--color-text)] outline-none transition-colors duration-300 font-light text-base appearance-none cursor-pointer">
                  <option value="" disabled className="bg-[var(--color-bg)]">
                    Select a type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[var(--color-bg)]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-none ${
                    focused === "message" || form.message
                      ? "-top-4 text-[var(--color-text)]"
                      : "top-3 text-[var(--color-muted)]"
                  }`}>
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-text)] pt-6 pb-2 text-[var(--color-text)] outline-none transition-colors duration-300 font-light text-base resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-muted)]">
                  Something went wrong. Please email directly at{" "}
                  <a
                    href={`mailto:${placeholder.email}`}
                    className="text-[var(--color-text)] underline">
                    {placeholder.email}
                  </a>
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative font-mono text-[11px] tracking-widest uppercase border border-[var(--color-text)] text-[var(--color-text)] px-10 py-4 overflow-hidden transition-colors duration-300 hover:text-[var(--color-bg)] disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center gap-3">
                  {status === "sending" ? (
                    <>
                      <span
                        className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"
                        aria-hidden
                      />
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[var(--color-text)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"
                />
              </button>
            </form>
          )}
        </div>

        {/* ── Social + info ── */}
        <div className="reveal-item opacity-0 flex flex-col justify-start gap-12 md:pl-12">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-6">
              Follow along
            </p>
            <div className="space-y-4">
              {/* <a
                href={`https://instagram.com/${placeholder.social.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Instagram">
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  <InstagramIcon size={16} />
                </span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {placeholder.social.instagram}
                </span>
              </a> */}
              <a
                href={`https://wa.link/vln6lt`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="WhatsApp">
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  <WhatsAppIcon size={16} />
                </span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {placeholder.social.whatsapp}
                </span>
              </a>
              <a
                href={`https://x.com/blak_naira?s=21`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Twitter / X">
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  <TwitterIcon size={16} />
                </span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {placeholder.social.twitter}
                </span>
              </a>
              <a
                href={`https://www.tiktok.com/@blak.naira.photography?_r=1&_t=ZS-95cVsYPbrjo`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="TikTok">
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  <TikTokIcon size={16} />
                </span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {placeholder.social.tiktok}
                </span>
              </a>
            </div>
          </div>

          <Divider />

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
              Based in
            </p>
            <p className="font-display font-light text-[var(--color-text)] text-2xl">
              Edo State, Nigeria
            </p>
            <p className="text-[var(--color-muted)] text-sm mt-1">
              Available for work worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
