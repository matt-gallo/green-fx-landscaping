"use client";

import { useEffect, useState } from "react";

/*
  Newsletter slide-out — lead capture for the homeowner funnel
  (brief section 11, email gating). Triggers on 8s OR 33% scroll,
  whichever first. Dismissal is remembered so it doesn't re-nag.

  Pino/agency: wire onSubmit to the GHL/CRM endpoint. The $100-off
  offer is the lead magnet; no sensitive fields collected.
*/

const DISMISS_KEY = "gfx_newsletter_dismissed";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Don't show again if already dismissed or subscribed.
    if (localStorage.getItem(DISMISS_KEY)) return;

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };

    const timer = setTimeout(trigger, 8000); // 8 seconds

    const onScroll = () => {
      const scrolled =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight || 1);
      if (scrolled >= 0.33) trigger(); // 33% of the page
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = (remember: boolean) => {
    setOpen(false);
    if (remember) localStorage.setItem(DISMISS_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Newsletter offer"
      className="fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm motion-safe:animate-[gfxSlideIn_0.45s_ease-out]"
    >
      <style>{`@keyframes gfxSlideIn{from{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[0_12px_40px_rgba(15,36,24,0.22)]">
        <div className="relative bg-forest px-6 py-5 text-limestone">
          <button
            type="button"
            onClick={() => close(true)}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-stone/70 transition-colors hover:bg-white/10 hover:text-limestone"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <p className="text-meta font-semibold uppercase tracking-[0.18em] text-sandstone">
            For new clients
          </p>
          <p className="mt-2 font-serif text-[1.6rem] leading-tight">
            $100 off your first service
          </p>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="py-4 text-center">
              <p className="font-serif text-h3 text-forest">You&rsquo;re in.</p>
              <p className="mt-2 text-meta text-charcoal/70">
                Watch your inbox — your $100-off code is on the way.
              </p>
            </div>
          ) : (
            <>
              <p className="text-meta leading-relaxed text-charcoal/75">
                Subscribe to our newsletter and we&rsquo;ll take $100 off your
                first project. Seasonal tips, no spam.
              </p>
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  localStorage.setItem(DISMISS_KEY, "1");
                }}
              >
                <input
                  name="firstName"
                  required
                  placeholder="First name"
                  className="w-full rounded-[var(--radius-card)] border border-stone bg-white px-4 py-2.5 text-body text-charcoal outline-none transition-colors focus:border-forest"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-[var(--radius-card)] border border-stone bg-white px-4 py-2.5 text-body text-charcoal outline-none transition-colors focus:border-forest"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-sandstone px-6 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-clay"
                >
                  Get my $100 off
                </button>
              </form>
              <button
                type="button"
                onClick={() => close(true)}
                className="mt-3 w-full text-center text-[0.78rem] text-charcoal/45 transition-colors hover:text-charcoal/70"
              >
                No thanks
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
