import Link from "next/link";
import { Wordmark } from "./logo";
import { Container } from "./ui";
import { nav, serviceAreas, site, trustBadges } from "@/lib/site";

/*
  Footer on Bark (section 12.3 deep contrast). The trust strip lives here and
  ONLY here — never crammed into the header beside the logo (section 12.7).
  Single consistent badge system: one type style, one weight, monochrome.
*/
export function SiteFooter() {
  return (
    <footer className="bg-bark text-stone">
      {/* Trust strip */}
      <div className="border-b border-white/10">
        <Container className="py-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-5">
            {trustBadges.map((b, i) => (
              <li key={b.label} className="flex items-center gap-3 sm:gap-5">
                <span className="text-meta font-medium uppercase tracking-[0.14em] text-limestone/85">
                  {b.label}
                </span>
                {i < trustBadges.length - 1 && (
                  <span aria-hidden className="text-limestone/25">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark variant="reverse" className="text-[20px]" />
            <p className="mt-5 max-w-sm text-meta leading-relaxed text-stone/80">
              The family-run, four-season outdoor-living craftsman the GTA&rsquo;s
              best suburbs already trust. Design, build, maintain and plow — one
              crew, every season, for as long as you own the home.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-block text-lead font-semibold text-limestone"
            >
              {site.phone}
            </a>
          </div>

          <div>
            <h3 className="!text-limestone/60 text-meta font-semibold uppercase tracking-[0.16em]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-meta text-stone/85 transition-colors hover:text-limestone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="!text-limestone/60 text-meta font-semibold uppercase tracking-[0.16em]">
              Service area
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-meta text-stone/85 transition-colors hover:text-limestone"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-[0.78rem] text-stone/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Family-owned since{" "}
            {site.established}. Based near {site.baseHomeRadius}.
          </p>
          <a
            href={site.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-limestone"
          >
            Read our Google reviews
          </a>
        </div>
      </Container>
    </footer>
  );
}
