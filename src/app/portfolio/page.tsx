import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button, Container, ImageSlot } from "@/components/ui";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real, in-house Green FX projects across the GTA — patios, retaining walls, gardens, walkways, outdoor kitchens, decks, lighting and lakefront treatments. Real homes, real materials.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="The work"
        title="Real projects. Real homes. Real materials."
        lead="Every project below was designed and built in-house by the same crew that maintains it. No stock photography — these are GTA homes the team still drives past."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          {/*
            Masonry-ish editorial grid. Feature projects span wider.
            Edge-to-edge, no drop shadow, no lightbox chrome — section 12.5.
          */}
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((p, idx) => (
              <ImageSlot
                key={`${p.project}-${idx}`}
                label={`${p.category} · ${p.label}`}
                src={p.src}
                caption={{
                  project: p.project,
                  location: p.category,
                  year: "Green FX",
                }}
                ratio={p.feature ? "16 / 10" : "4 / 3"}
                className={p.feature ? "lg:col-span-3" : "lg:col-span-2"}
              />
            ))}
          </div>

          <div className="mt-16 rounded-[var(--radius-card)] bg-white p-8 text-center shadow-[var(--shadow-card)]">
            <p className="mx-auto max-w-xl text-lead text-charcoal/75">
              Want to see a project like yours in person? We&rsquo;ll walk you
              through a completed install in your municipality.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact">Book a free on-site estimate</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
