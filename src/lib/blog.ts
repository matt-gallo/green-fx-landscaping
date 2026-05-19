/*
  Blog content — sample SEO articles for the GTA homeowner funnel
  (brief section 11, mid-funnel). Each post targets real search intent
  for affluent GTA suburbs and is written in the owner-voice (12.8).

  This is the recurring-SEO engine: Pino/agency adds posts here and they
  publish with metadata + Article JSON-LD automatically. Body is light
  markdown-ish (paragraphs + ## headings + - bullets).
*/

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readMinutes: number;
  image: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "what-a-backyard-transformation-costs-in-the-gta",
    title: "What a Backyard Transformation Actually Costs in the GTA",
    description:
      "A straight answer on real budget ranges for a full backyard design-build in Vaughan, Etobicoke and Richmond Hill — and what actually drives the number.",
    category: "Planning",
    date: "2026-05-04",
    readMinutes: 6,
    image: "/portfolio/hardscape-01.jpg",
    body: `Most homeowners start with the same question, and almost nobody gives them a real answer: what does a backyard actually cost?

The honest range for a full design-build in the GTA's established suburbs is wide — and it should be, because a flagstone path and a full outdoor living room are not the same project. But "it depends" is not an answer. Here is what actually moves the number.

## The base is the budget

The single biggest cost driver isn't the pavers you see — it's the base you don't. GTA clay soil and the freeze-thaw cycle punish anything built on a thin base. A patio built to last fifteen years costs more on day one than one built to look good for a season. That difference is most of the gap between two quotes for "the same" patio.

## What sits in each range

- **A single hardscape project** — a patio, a walkway, a retaining wall — is a defined scope with a fixed price. This is most homeowners' first project.
- **A full transformation** — hardscape, planting, lighting and grading together — is where design fees, materials sourcing and 3D rendering come in. This is the range most "$40K–$150K" quotes are pointing at, without explaining why.
- **Year-round care** changes the math entirely, because you're no longer buying a project — you're buying a property that stays the way it was built.

## Why opaque quotes cost you

A number texted from a pickup truck has no materials list, no scope and no accountability behind it. The fair way to price a project is an on-site visit, a written scope and an itemized materials list — before any money changes hands. If you can't see what you're paying for, you can't tell whether it's a fair deal.

If you're planning a project this year, the most useful first step is a free on-site estimate: a real site walk and a number you can actually read.`,
  },
  {
    slug: "why-gta-patios-sink-and-how-to-prevent-it",
    title: "Why GTA Patios Sink — and How to Stop It Before It Starts",
    description:
      "Sinking pavers and bulging retaining walls almost always trace back to one thing. Here's what causes it in Toronto-area soil and how a proper build prevents it.",
    category: "Craft",
    date: "2026-04-18",
    readMinutes: 5,
    image: "/portfolio/hardscape-08.jpg",
    body: `If your patio is sinking on one side or your retaining wall is starting to bulge, the cause is almost never the stone. It's what's underneath, and it's almost always the same story.

## Clay soil moves

Most of the GTA sits on heavy clay. Clay holds water, and water that freezes expands. Every winter, the ground under a poorly built patio heaves and settles. Do that for three or four winters and you get the sink, the slope, the gap at the door.

## The base does the work

A patio that survives a Toronto winter is built on a deep, compacted aggregate base with proper drainage — not a few inches of sand over disturbed soil. The base is invisible in the finished project, which is exactly why it's the corner most often cut.

## Retaining walls have the same problem

A bulging retaining wall is a drainage failure. Water builds up behind the wall, the clay swells, and the wall has nowhere to go but out. Proper drainage and engineered backfill behind the wall are not optional in this soil — they're the difference between a wall that lasts twenty years and one that fails in five.

## What to ask before you sign

- How deep is the base, and what's it made of?
- How does water drain away from the patio or wall?
- Who is accountable if it settles — and for how long?

A crew that designs, builds and then maintains the same property has a reason to answer those questions honestly: they're the ones who'll be standing on it next year.`,
  },
  {
    slug: "the-four-contractor-problem",
    title: "The Four-Contractor Problem (and Why Your Yard Looks Like It)",
    description:
      "One company designs, another builds, a third maintains, a fourth plows. Here's why that hand-off model quietly degrades your property — and the alternative.",
    category: "Ownership",
    date: "2026-03-30",
    readMinutes: 4,
    image: "/portfolio/garden-05.jpg",
    body: `Walk most suburban properties and you can see the seams. The patio was built by one crew. The garden was planted by another. The lawn is cut by a third. And in November, a fourth shows up with a plow — if you found one in time.

## Nobody owns the outcome

When four companies touch one property, no one is accountable for how it looks as a whole. The build crew leaves. The maintenance crew arrives with a different standard. The $60K patio is surrounded by patchy sod within a season, and every company can honestly say it wasn't their part that failed.

## The hand-off is where quality dies

Every hand-off is a place where information is lost and responsibility is dropped. The designer's intent doesn't survive contact with the build sub. The build crew's work doesn't survive contact with a maintenance company that was never told how it was meant to look.

## The alternative is boring on purpose

The fix isn't complicated: the team that designs the work builds it, and the team that builds it maintains it. One company, one phone number, one accountability line through every season. It's not a clever model — it's just the one that keeps a property looking the way it did the day the crew left.

That continuity is the whole point. It's also the thing four separate contractors structurally cannot offer you.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

// Tiny markdown-ish renderer: ## headings, - bullets, blank-line paragraphs.
export function renderBlocks(body: string) {
  return body.split("\n\n").map((block) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return { type: "h2" as const, text: trimmed.slice(3) };
    }
    if (trimmed.startsWith("- ")) {
      return {
        type: "ul" as const,
        items: trimmed
          .split("\n")
          .map((l) => l.replace(/^-\s+/, "").trim())
          .filter(Boolean),
      };
    }
    return { type: "p" as const, text: trimmed };
  });
}
