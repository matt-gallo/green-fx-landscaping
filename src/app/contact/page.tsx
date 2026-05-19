import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { EstimateForm } from "@/components/estimate-form";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Estimate",
  description:
    "Book a free, no-obligation on-site estimate with Green FX. A real site walk, a written scope, and a materials list — across Etobicoke, Vaughan, Richmond Hill and the GTA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free on-site estimate"
        title="A real site walk. A written scope. A materials list."
        lead="Not a number texted from a pickup truck. We come to the property, scope the work, and put it in writing — with insurance and WSIB documentation up front."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <EstimateForm />

            <div className="space-y-8">
              <div>
                <h2 className="text-h3">Prefer to call?</h2>
                <a
                  href={site.phoneHref}
                  className="mt-2 block font-serif text-[2rem] text-forest"
                >
                  {site.phone}
                </a>
                <p className="mt-1 text-meta text-charcoal/65">
                  Owner-led. The person who quotes the job is the person
                  accountable for it.
                </p>
              </div>

              <div className="rule-stone pt-8">
                <h3 className="text-meta font-semibold uppercase tracking-[0.16em] text-clay">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-3 text-meta text-charcoal/80">
                  <li>1 — We respond within one business day.</li>
                  <li>2 — We book a 90-minute on-site visit.</li>
                  <li>3 — You get a written scope, quote and materials list.</li>
                  <li>4 — No obligation. No pressure. No napkin math.</li>
                </ol>
              </div>

              <div className="rule-stone pt-8">
                <h3 className="text-meta font-semibold uppercase tracking-[0.16em] text-clay">
                  Service area
                </h3>
                <p className="mt-3 text-meta text-charcoal/75">
                  {serviceAreas.join(" · ")} and the surrounding GTA, from our
                  base near {site.baseHomeRadius}.
                </p>
              </div>

              {/* Calendar booking slot — Pino embeds Cal.com / Calendly here. */}
              <div className="rounded-[var(--radius-card)] border border-dashed border-stone bg-white/60 p-6">
                <p className="text-meta font-semibold text-forest">
                  Direct calendar booking
                </p>
                <p className="mt-2 text-[0.82rem] text-charcoal/60">
                  Cal.com / Calendly embed slot — drop the booking widget here
                  once the account is connected.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
