"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Container } from "./ui";
import { site } from "@/lib/site";

// Real project photos cycled behind the hero (brief 12.5 — photo-led).
const heroSlides = [
  "/portfolio/hardscape-01.jpg",
  "/portfolio/garden-05.jpg",
  "/portfolio/lighting-01.jpg",
  "/portfolio/hardscape-08.jpg",
  "/portfolio/garden-01.jpg",
];

function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // Respect reduced-motion: hold on the first frame.
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      {/*
        Let the photography read (brief 12.5) while keeping the serif
        headline legible: stronger wash on the left where the text sits,
        fading so the image stays visible on the right.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-bark/85 via-forest/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bark/60 to-transparent" />
    </div>
  );
}

/*
  Homepage hero with a live A/B switcher for headline/subhead copy.
  TEMP review tool — once a winner is chosen, keep the chosen entry,
  delete the rest and the switcher UI. All variants follow the brief's
  emotional core (section 2: Pride) and the owner-voice rule (12.8).
*/

type Variant = {
  id: string;
  tag: string;
  headline: string;
  subhead: string;
};

export const heroVariants: Variant[] = [
  {
    id: "proud",
    tag: "Pride · come home",
    headline: "Come home to a place you're proud of.",
    subhead:
      "The same family crew designs the property, builds it, and looks after it every season — so it always looks the way it did the day we finished.",
  },
  {
    id: "slow-down",
    tag: "Status · the driveway",
    headline: "The house your neighbours slow down for.",
    subhead:
      "We design, build and maintain outdoor spaces for the GTA's best streets — one family crew, every season, for as long as you own the home.",
  },
  {
    id: "five-years",
    tag: "Pride · permanence",
    headline: "A property that still looks like this in five years.",
    subhead:
      "One family crew designs it, builds it, and keeps it to standard through every season. No handoffs, no decline, no “that's not our job.”",
  },
  {
    id: "third-pass",
    tag: "Quiet confidence",
    headline: "Landscaping people notice on the third pass.",
    subhead:
      "Designed, built and maintained by the same family crew — the kind of work that quietly says something about the home it belongs to.",
  },
  {
    id: "parked",
    tag: "Feeling-led",
    headline: "Proud of it before you've even parked.",
    subhead:
      "The GTA's best suburbs trust one family crew to design, build and look after the property — every season, every year you own the home.",
  },
  {
    id: "say-something",
    tag: "Status · direct",
    headline: "Some properties say something. We build those.",
    subhead:
      "One family crew, four seasons, nineteen years — design, build and maintenance for Etobicoke, Vaughan and Richmond Hill's best addresses.",
  },
];

export function HomeHero() {
  const [i, setI] = useState(0);
  const v = heroVariants[i];

  return (
    <section className="relative overflow-hidden bg-forest text-limestone">
      <HeroSlideshow />

      <Container className="relative py-24 sm:py-32">
        <p className="mb-5 text-meta font-semibold uppercase tracking-[0.2em] text-sandstone">
          Etobicoke · Vaughan · Richmond Hill · GTA
        </p>
        <h1 className="max-w-4xl text-display !text-limestone">
          {v.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-lead text-stone">{v.subhead}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Book a free on-site estimate</Button>
          <Button
            href="/portfolio"
            variant="ghost"
            className="!border-stone/40 !text-limestone hover:!bg-white/10"
          >
            See the work
          </Button>
        </div>
        <p className="mt-8 text-meta text-stone/70">
          {`Family-owned since ${site.established} · CNLA & Landscape Ontario member · Fully insured`}
        </p>
      </Container>

      {/* ── TEMP review switcher — delete with the unused variants ── */}
      <div className="relative border-t border-white/10 bg-bark/60">
        <Container className="flex flex-wrap items-center gap-2 py-3">
          <span className="mr-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone/60">
            Preview headline
          </span>
          {heroVariants.map((variant, idx) => (
            <button
              key={variant.id}
              type="button"
              onClick={() => setI(idx)}
              className={`rounded-full px-3 py-1.5 text-[0.72rem] font-medium transition-colors ${
                idx === i
                  ? "bg-sandstone text-white"
                  : "bg-white/10 text-stone hover:bg-white/20"
              }`}
              title={variant.headline}
            >
              {idx + 1}. {variant.tag}
            </button>
          ))}
        </Container>
      </div>
    </section>
  );
}
