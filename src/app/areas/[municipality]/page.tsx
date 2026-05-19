import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button, Card, Container, ImageSlot, SectionHeading } from "@/components/ui";
import { areas, getArea } from "@/lib/areas";
import { serviceCategories } from "@/lib/services";
import { site } from "@/lib/site";

// Pre-render every municipality at build time for SEO.
export function generateStaticParams() {
  return areas.map((a) => ({ municipality: a.slug }));
}

// Next.js 16: params is async and must be awaited.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ municipality: string }>;
}): Promise<Metadata> {
  const { municipality } = await params;
  const area = getArea(municipality);
  if (!area) return {};
  return {
    title: `Landscaping in ${area.name}`,
    description: `Design, build, maintenance and snow services in ${area.name}, ${area.region}. Family-owned since ${site.established}, one crew, four seasons. Book a free on-site estimate.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ municipality: string }>;
}) {
  const { municipality } = await params;
  const area = getArea(municipality);
  if (!area) notFound();

  // Deterministic per-area photo so each municipality page differs.
  const areaPhotos = [
    "/portfolio/hardscape-01.jpg",
    "/portfolio/garden-05.jpg",
    "/portfolio/hardscape-02.jpg",
    "/portfolio/garden-01.jpg",
    "/portfolio/hardscape-07.jpg",
    "/portfolio/deck-04.jpg",
  ];
  const areaPhoto =
    areaPhotos[
      area.slug.split("").reduce((n, c) => n + c.charCodeAt(0), 0) %
        areaPhotos.length
    ];

  return (
    <>
      <PageHero
        eyebrow={`${area.name} · ${area.region}`}
        title={`The four-season outdoor-living crew ${area.name} trusts.`}
        lead={area.intro}
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={`Built for ${area.name}`}
                title="Local soil. Local winters. Local accountability."
              />
              <p className="prose-brief mt-6 text-charcoal/80">
                {area.localNote}
              </p>
              <p className="prose-brief mt-4 text-charcoal/80">
                The same crew that designs the work in {area.name} is the one
                that builds it, maintains it through the growing season, and
                plows it in January. One company, one phone number, one
                warranty.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Book a free {area.name} estimate
                </Button>
              </div>
            </div>
            <ImageSlot
              label={`Completed project · ${area.name}`}
              src={areaPhoto}
              ratio="4 / 5"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="What we do here"
            title={`Every outdoor service, across ${area.name}.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((s) => (
              <Card key={s.slug}>
                <h3 className="text-h3">{s.name}</h3>
                <p className="mt-3 text-meta leading-relaxed text-charcoal/70">
                  {s.blurb}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bark py-[var(--spacing-section)] text-limestone">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-h2 !text-limestone">
            {area.name} homeowners: stop coordinating four contractors.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-stone">
            Family-owned since {site.established}. {site.yearsInBusiness} years,
            same owner, same standard. Free on-site estimate, no obligation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Book your free estimate</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
