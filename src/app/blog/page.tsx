import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container, ImageSlot } from "@/components/ui";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Planning guides, craft notes and straight answers on landscaping in the GTA — patios, budgets, soil, drainage and how to choose a contractor that's still there in winter.",
};

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Straight answers on landscaping in the GTA."
        lead="No fluff. How to plan a project, what it actually costs, why work fails in Toronto soil, and how to pick a crew that's still there in February."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <article key={p.slug} className="flex flex-col">
                <Link href={`/blog/${p.slug}`} className="group">
                  <ImageSlot label={p.category} src={p.image} ratio="3 / 2" />
                  <p className="mt-5 text-meta font-semibold uppercase tracking-[0.16em] text-clay">
                    {p.category} · {p.readMinutes} min read
                  </p>
                  <h2 className="mt-2 text-h3 transition-colors group-hover:text-sandstone">
                    {p.title}
                  </h2>
                </Link>
                <p className="mt-3 flex-1 text-meta leading-relaxed text-charcoal/70">
                  {p.description}
                </p>
                <p className="mt-4 text-[0.78rem] text-charcoal/50">
                  {fmtDate(p.date)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
