import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button, Card, Container, ImageSlot, SectionHeading } from "@/components/ui";
import { proof, site, trustBadges } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Green FX has been family-owned since 2007 — the same owner, the same crew, the same standards. CNLA and Landscape Ontario member, fully insured, WSIB compliant.",
};

const credentials = [
  {
    name: "CNLA Member",
    body: "Canadian Nursery Landscape Association — the national industry body.",
  },
  {
    name: "Landscape Ontario Member",
    body: "Provincial professional body with standards verification.",
  },
  {
    name: "Fully Insured",
    body: "Liability coverage, documented before any work begins.",
  },
  {
    name: "WSIB Compliant",
    body: "Every worker is covered. Documentation provided to clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="One family. The same name on every invoice since 2007."
        lead={`${site.yearsInBusiness} consecutive years in operation under the same ownership — through 2008, COVID, and every Toronto winter in between.`}
      />

      {/* Story — section 7 voice */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The track record"
                title="Trust isn't a tagline. It's nineteen years of showing up."
              />
              <div className="prose-brief mt-6 text-charcoal/80">
                <p>
                  Green FX was founded in {site.established} and is still run
                  today by the family that started it. The person who quotes the
                  job is the person who&rsquo;s accountable for delivering it.
                </p>
                <p>
                  The crew doesn&rsquo;t change between the estimate and the
                  install. The same hands installing the work this June were
                  doing it last June — that continuity is the whole point.
                </p>
                <p>
                  We hand over verifiable insurance, WSIB and association
                  documentation up front — not after a problem. That&rsquo;s how
                  you treat a $50,000 outdoor living project, not a
                  &ldquo;we&rsquo;ll get to it&rdquo; lawn cut.
                </p>
              </div>
            </div>
            <ImageSlot
              label="A completed Green FX project"
              src="/portfolio/garden-05.jpg"
              ratio="4 / 5"
            />
          </div>
        </Container>
      </section>

      {/* Proof numbers — section 5 */}
      <section className="bg-forest py-[var(--spacing-section)] text-limestone">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
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

      {/* Credentials — section 5 evidence */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <SectionHeading
            eyebrow="Reason to believe"
            title="The same documentation a commercial GC carries."
            lead="Provided before the first invoice — not produced after something goes wrong."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {credentials.map((c) => (
              <Card key={c.name}>
                <h3 className="text-h3">{c.name}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/75">
                  {c.body}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[var(--radius-card)] border border-stone bg-white px-6 py-5">
            <span className="text-meta font-semibold uppercase tracking-[0.14em] text-forest">
              Verified
            </span>
            {trustBadges.map((b) => (
              <span key={b.label} className="text-meta text-charcoal/70">
                {b.label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bark py-[var(--spacing-section)] text-limestone">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-h2 !text-limestone">
            Talk to the person who&rsquo;ll actually be accountable for the work.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Book a free on-site estimate</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
