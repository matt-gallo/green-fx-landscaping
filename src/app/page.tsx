import Link from "next/link";
import { Button, Card, Container, ImageSlot, SectionHeading } from "@/components/ui";
import { HomeHero } from "@/components/hero-variants";
import { serviceCategories, tiers, uspPillars } from "@/lib/services";
import { posts } from "@/lib/blog";
import { proof, serviceAreas, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero: section 1 promise + emotional core (section 2: Pride). */}
      <HomeHero />

      {/* ── The three-contractor problem (section 2) ─────────────────── */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="You shouldn't need four companies to look after one yard."
            lead="One company designs. Another builds. A third maintains. A fourth shows up with a plow. Nothing matches, nothing communicates, and no one owns the outcome."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                h: "Mid-project ghosting",
                p: "Quoted in March, started in May, abandoned in July with half a patio in the side yard. Nobody answers the phone.",
              },
              {
                h: "Maintenance roulette",
                p: "The build crew leaves, a different lawn guy shows up with a different standard, and the $60K patio is surrounded by patchy sod within a season.",
              },
              {
                h: "Winter abandonment",
                p: "The crew that designed the front yard disappears on November 1st, and you’re finding a snow contractor in the middle of the first storm.",
              },
            ].map((item) => (
              <Card key={item.h}>
                <h3 className="text-h3">{item.h}</h3>
                <p className="mt-3 text-meta leading-relaxed text-charcoal/70">
                  {item.p}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── USP pillars (section 3) ──────────────────────────────────── */}
      <section className="bg-white py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="What makes Green FX a category of one"
            title="Designed, built and maintained by the same hands."
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {uspPillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-5">
                <span className="text-h3 font-semibold text-stone">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-h3">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service categories (section 4) ───────────────────────────── */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="Under one roof"
            title="Four service categories most competitors split across four companies."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {serviceCategories.map((s) => (
              <Card key={s.slug} className="flex flex-col">
                <h3 className="text-h3">{s.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-charcoal/75">
                  {s.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-limestone px-3 py-1 text-[0.78rem] text-forest"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/services" variant="ghost">
              All services &amp; how we work
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Service tiers (section 4: offer architecture) ────────────── */}
      <section className="bg-white py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="The offer"
            title="Pick the level of partnership that fits the property."
            lead="From a single fixed-price project to a year-round contract with the same crew on call through every season."
          />
          {/*
            Flex-wrap so orphan rows center. 5 tiers:
            - lg (3 cols): 3 + 2 centered
            - sm (2 cols): the 5th card spans full width (no stranded half)
          */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {tiers.map((t, idx) => {
              const isLastOrphan = idx === tiers.length - 1; // 5th of 5
              return (
              <Card
                key={t.slug}
                className={`w-full ${
                  isLastOrphan
                    ? "sm:w-full lg:w-[calc(33.333%-0.834rem)]"
                    : "sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                } ${
                  "featured" in t && t.featured ? "ring-2 ring-sandstone" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-h3">{t.name}</h3>
                  <span className="text-meta font-semibold text-clay">
                    {t.price}
                  </span>
                </div>
                <p className="mt-3 text-meta leading-relaxed text-charcoal/70">
                  {t.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2 text-meta text-charcoal/80">
                      <span className="text-sandstone">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Proof points (section 5) ─────────────────────────────────── */}
      <section className="bg-forest py-[var(--spacing-section)] text-limestone">
        <Container>
          <SectionHeading
            invert
            eyebrow="Reason to believe"
            title="Credentials a commercial GC carries — handed to a homeowner."
          />
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <p className="font-serif text-[2.75rem] leading-none text-sandstone">
                  {p.value}
                </p>
                <p className="mt-3 font-medium text-limestone">{p.label}</p>
                <p className="mt-1 text-meta text-stone/70">{p.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Portfolio teaser (section 5 observation) ─────────────────── */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent work"
              title="Real projects. Real homes. Real materials."
            />
            <Button href="/portfolio" variant="ghost">
              View the full portfolio
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ImageSlot
              label="Hardscape"
              src="/portfolio/hardscape-02.jpg"
              caption={{ project: "Patio & walkway", location: "Hardscape", year: "Green FX" }}
            />
            <ImageSlot
              label="Lawn & Garden"
              src="/portfolio/garden-01.jpg"
              caption={{ project: "Garden & sod installation", location: "Lawn & Garden", year: "Green FX" }}
            />
            <ImageSlot
              label="Design-Build"
              src="/portfolio/lighting-01.jpg"
              caption={{ project: "Landscape lighting", location: "Design-Build", year: "Green FX" }}
            />
          </div>
        </Container>
      </section>

      {/* ── Sales argument (section 7) ───────────────────────────────── */}
      <section className="bg-white py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <ImageSlot
              label="Completed Green FX project"
              src="/portfolio/hardscape-01.jpg"
              ratio="4 / 5"
            />
            <div>
              <SectionHeading
                eyebrow="Why Green FX"
                title="The team that designs the work is the team that maintains it."
              />
              <div className="prose-brief mt-6 text-charcoal/80">
                <p>
                  You bought the house because of the lot. And then the previous
                  owner&rsquo;s landscaping let you down — a patio sinking on one
                  side, a retaining wall starting to bulge, a garden exhausted by
                  August.
                </p>
                <p>
                  In Etobicoke, Vaughan and Richmond Hill there are roughly four
                  hundred companies that will quote a patio. Almost none will be
                  in business in five years. Almost none will pick up the phone in
                  February with a foot of snow on the driveway.
                </p>
                <p>
                  Green FX was founded in {site.established} and is still run
                  today by the family that started it. {site.yearsInBusiness}{" "}
                  years. Same owner. Same standards. Real documentation, handed to
                  you before the first quote — because that&rsquo;s how you treat
                  a $50,000 outdoor living project.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/about">Meet the family behind it</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── From the blog (section 11 mid-funnel SEO content) ────────── */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the journal"
              title="Straight answers, before you spend a dollar."
            />
            <Button href="/blog" variant="ghost">
              Read the blog
            </Button>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
            {[...posts]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <ImageSlot label={p.category} src={p.image} ratio="3 / 2" />
                  <p className="mt-5 text-meta font-semibold uppercase tracking-[0.16em] text-clay">
                    {p.category} · {p.readMinutes} min read
                  </p>
                  <h3 className="mt-2 text-h3 transition-colors group-hover:text-sandstone">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-meta leading-relaxed text-charcoal/70">
                    {p.description}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA (section 11 bottom-funnel) ─────────────────────── */}
      <section className="bg-bark py-[var(--spacing-section)] text-limestone">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-h2 !text-limestone">
            Almost twenty years. One family. One crew. Four seasons.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lead text-stone">
            Start with a free on-site estimate — a real site walk, a written
            scope, and a materials list. No obligation. We respond within one
            business day.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Book your free estimate</Button>
          </div>
          <p className="mt-8 text-meta text-stone/60">
            Serving {serviceAreas.slice(0, -1).join(", ")} &amp;{" "}
            {serviceAreas.at(-1)} —{" "}
            <Link href="/areas/vaughan" className="underline hover:text-limestone">
              find your municipality
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
