import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button, Card, Container, ImageSlot, SectionHeading } from "@/components/ui";
import { serviceCategories, tiers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design & build, hardscape, lawn & garden, and snow services — four categories under one roof. Plus the Green FX offer tiers, from a fixed-price Refresh to the year-round Estate Plan.",
};

// Representative real photo per category. Snow has no gallery photo yet —
// it falls back to the honest placeholder (per brief 12.5).
const categoryImage: Record<string, string | undefined> = {
  "design-build": "/portfolio/hardscape-01.jpg",
  hardscape: "/portfolio/hardscape-08.jpg",
  "lawn-garden": "/portfolio/garden-04.jpg",
  "snow-services": undefined,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Everything outdoors, under one roof."
        lead="Most competitors split this across four companies. We design it, build it, maintain it, and plow it — same crew, one phone number, one warranty."
      />

      {/* Four service categories — section 4 */}
      <section className="py-[var(--spacing-section)]">
        <Container className="space-y-16">
          {serviceCategories.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center"
            >
              <ImageSlot
                label={s.name}
                src={categoryImage[s.slug]}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              />
              <div>
                <p className="mb-3 text-meta font-semibold uppercase tracking-[0.16em] text-clay">
                  0{i + 1} — Service category
                </p>
                <h2 className="text-h2">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-charcoal/75">
                  {s.blurb}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-meta text-charcoal/80"
                    >
                      <span className="text-sandstone">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Offer tiers — section 4 offer architecture */}
      <section className="bg-white py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="The offer"
            title="How we structure the work."
            lead="Self-select the level of partnership that fits the property. Every tier starts with a free, no-obligation on-site estimate."
          />
          <div className="mt-12 space-y-4">
            {tiers.map((t) => (
              <Card
                key={t.slug}
                className={`grid gap-6 md:grid-cols-[1fr_2fr_auto] md:items-center ${
                  "featured" in t && t.featured ? "ring-2 ring-sandstone" : ""
                }`}
              >
                <div>
                  <h3 className="text-h3">{t.name}</h3>
                  <p className="mt-1 text-meta font-semibold text-clay">
                    {t.price}
                  </p>
                </div>
                <div>
                  <p className="text-meta leading-relaxed text-charcoal/75">
                    {t.summary}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="text-[0.78rem] text-charcoal/60"
                      >
                        · {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="/contact" variant="ghost" className="whitespace-nowrap">
                  {t.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bark py-[var(--spacing-section)] text-limestone">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-h2 !text-limestone">
            Not sure which fits? Start with the free estimate.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-stone">
            We walk the property, scope the work, and put it in writing. No
            obligation, no pressure.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Book a free on-site estimate</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
