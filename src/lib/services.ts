/*
  Service categories (section 4: Service Superiority) and the productized
  offer tiers (section 4: Proposed Service Tiers). Copy follows the voice
  rules in 12.8 — owner-voice, plain, specific.
*/

export const serviceCategories = [
  {
    slug: "design-build",
    name: "Design & Build",
    blurb:
      "We design the space, then we build it. Landscape design, lighting plans, lakefront treatments, garden design and installation — drawn by the people who will be holding the shovel.",
    items: [
      "Landscape design",
      "Lighting plans",
      "Lakefront treatments",
      "Garden design & installation",
    ],
  },
  {
    slug: "hardscape",
    name: "Hardscape",
    blurb:
      "The heavy, permanent work. Patios, walkways, retaining walls, outdoor kitchens — built on a base that survives a Toronto winter, not a single season.",
    items: [
      "Patios & walkways",
      "Retaining walls",
      "Outdoor kitchens",
      "Paver installation",
      "Decorative stone",
      "Artificial turf",
    ],
  },
  {
    slug: "lawn-garden",
    name: "Lawn & Garden",
    blurb:
      "The work that keeps a finished property looking finished. The same crew that built the patio is the one keeping the beds and the sod to the standard you paid for.",
    items: [
      "Lawn care & mowing",
      "Mulching",
      "Sod installation",
      "Seasonal cleanups",
      "Hedging",
    ],
  },
  {
    slug: "snow-services",
    name: "Snow Services",
    blurb:
      "We do not disappear on November 1st. Residential plowing, commercial contracts, salting and walkway clearing — same company, on file before the first storm.",
    items: [
      "Residential plowing",
      "Commercial contracts",
      "Salting",
      "Walkway clearing",
    ],
  },
] as const;

export const tiers = [
  {
    slug: "the-estimate",
    name: "The Estimate",
    price: "Free",
    summary:
      "A no-obligation on-site visit. We walk the property, scope the work, and hand you a written quote with a materials list — not a number texted from a pickup truck.",
    points: [
      "On-site visit, not a phone guess",
      "Written quote and defined scope",
      "Itemized materials list",
      "Insurance & WSIB documentation provided up front",
    ],
    cta: "Book a free estimate",
  },
  {
    slug: "the-refresh",
    name: "The Refresh",
    price: "$",
    summary:
      "A single-season project — a patio, a walkway, a garden install, a retaining wall. Fixed scope, fixed price, fixed timeline, same crew from estimate to last cleanup.",
    points: [
      "One defined project",
      "Fixed scope and fixed price",
      "Written timeline",
      "Same crew start to finish",
    ],
    cta: "Plan a project",
  },
  {
    slug: "the-transformation",
    name: "The Transformation",
    price: "$$",
    summary:
      "A full design-build of an outdoor living space — hardscape, softscape and lighting together. Includes a design package, 3D rendering, materials sourcing, and a one-season maintenance check-in so it looks the same in October as the day we left.",
    points: [
      "Full design-build package",
      "3D rendering & materials sourcing",
      "Typically $40K–$150K",
      "One-season maintenance check-in included",
    ],
    cta: "Start a transformation",
    featured: true,
  },
  {
    slug: "the-estate-plan",
    name: "The Green FX Estate Plan",
    price: "$$$ · recurring",
    summary:
      "Year-round, one contract. Design and seasonal builds bundled with weekly maintenance in the growing season, fall cleanup, winter plowing and spring opening. One monthly fee. Same crew. Same standard.",
    points: [
      "Design + seasonal builds",
      "Weekly growing-season maintenance",
      "Fall cleanup · winter plowing · spring opening",
      "One monthly fee, one crew, one phone number",
    ],
    cta: "Ask about the Estate Plan",
  },
  {
    slug: "commercial-snow",
    name: "Commercial Snow Contract",
    price: "Seasonal",
    summary:
      "For property managers, townhouse complexes and small commercial. Priced per visit or per season, with insurance documentation included before the first storm — the kind of operator you can put your name behind.",
    points: [
      "Per-visit or per-season pricing",
      "Insurance & WSIB documentation included",
      "Route accountability",
      "Single point of contact",
    ],
    cta: "Request a snow contract",
  },
] as const;

// USP pillars — section 3.
export const uspPillars = [
  {
    title: "One crew, four seasons",
    body:
      "The same team that designs the patio in March builds it in June, plants the garden in August, blows out the leaves in October, and plows the drive in January. No handoffs. No “that’s not our job.”",
  },
  {
    title: "Family-owned since 2007",
    body:
      "Nineteen years under the same family. The crew doesn’t change between the estimate and the install. Trust isn’t a tagline here — it’s a track record.",
  },
  {
    title: "Design-build-maintain under one roof",
    body:
      "Not a designer who hires subs. Not a maintenance company that flips you to “a guy they know.” One company, one accountability line, one warranty.",
  },
  {
    title: "Real credentials, not badges",
    body:
      "CNLA member. Landscape Ontario member. Fully insured. WSIB compliant. The same documentation a commercial GC requires — handed to a homeowner before the first invoice.",
  },
] as const;
