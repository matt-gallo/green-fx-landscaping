import { Container } from "./ui";

/* Compact inner-page hero on Forest — consistent with the homepage band. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-forest text-limestone">
      <Container className="py-20 sm:py-24">
        <p className="mb-4 text-meta font-semibold uppercase tracking-[0.2em] text-sandstone">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-display !text-limestone">{title}</h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lead text-stone">{lead}</p>
        )}
      </Container>
    </section>
  );
}
