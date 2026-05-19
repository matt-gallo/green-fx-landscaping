"use client";

import Link from "next/link";
import { useState } from "react";
import { Wordmark } from "./logo";
import { Button } from "./ui";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone/60 bg-limestone/85 backdrop-blur-md">
      {/* Generous, single-tier band — no coupon, no badge clutter (section 12.6). */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" aria-label={`${site.legalName} home`} className="shrink-0">
          <Wordmark className="text-[19px]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-charcoal/80 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={site.phoneHref}
            className="text-[0.95rem] font-semibold text-forest"
          >
            {site.phone}
          </a>
          <Button href="/contact">Free estimate</Button>
        </div>

        {/* Mobile: tap-to-call always visible (section 11 bottom-funnel). */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={site.phoneHref}
            className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-limestone"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone text-forest"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone/60 bg-limestone md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-charcoal/85"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full" onClick={() => setOpen(false)}>
              Book a free estimate
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
