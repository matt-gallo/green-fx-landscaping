/*
  Per-municipality SEO landing pages — section 11, Funnel 1 (top of funnel).
  Local copy hooks (soil, drainage, winter) per the voice rule in 12.8:
  specific place references, never "your area" platitudes.
  Pino: extend this list to add municipalities; the route generates them.
*/

export type Area = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  localNote: string;
};

export const areas: Area[] = [
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    intro:
      "Vaughan's larger lots and established neighbourhoods — Kleinburg, Thornhill Woods, Vellore — are exactly the kind of property a four-season crew is built for.",
    localNote:
      "Vaughan's heavy clay soil and freeze-thaw cycles punish a poorly built base. We build patios and walls on a base engineered to survive the winter, not just to look good the day we leave.",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "Toronto",
    intro:
      "From the mature lots of Princess-Rosethorn to the lakeshore in Mimico, Etobicoke properties reward landscape work that respects the home it sits next to.",
    localNote:
      "Older Etobicoke neighbourhoods come with mature trees, established drainage patterns and tight side-yard access. We design around what's already there instead of fighting it.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    intro:
      "Richmond Hill homeowners in Bayview Hill, Mill Pond and Jefferson want intentional outdoor spaces — not the builder-grade interlock the next street already has.",
    localNote:
      "Richmond Hill's grade changes and clay base make retaining walls and proper drainage non-negotiable. We engineer for it up front.",
  },
  {
    slug: "king-city",
    name: "King City",
    region: "King Township",
    intro:
      "Estate lots in King City and the surrounding township call for landscape work at a scale most local crews aren't equipped for. We are.",
    localNote:
      "Larger King City properties often mean well water, septic and significant grade — we plan the landscape around the systems already in the ground.",
  },
  {
    slug: "aurora",
    name: "Aurora",
    region: "York Region",
    intro:
      "Aurora's heritage core and newer estate subdivisions both reward considered, durable outdoor living — designed once and looked after every season after.",
    localNote:
      "Aurora's freeze-thaw winters and clay soil are hard on hardscape built on the cheap. We build to last fifteen to twenty years, not three.",
  },
  {
    slug: "tottenham",
    name: "Tottenham",
    region: "New Tecumseth",
    intro:
      "Tottenham is home base. The properties here, and across New Tecumseth, get the same crew and the same standard as the work in Vaughan and Richmond Hill.",
    localNote:
      "Being based near Tottenham means shorter response times for snow and seasonal work across the northwest GTA — we're not driving in from across the city.",
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
