import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Container, ImageSlot } from "@/components/ui";
import { getPost, posts, renderBlocks } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blocks = renderBlocks(post.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${site.currentSite}${post.image}`,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${site.currentSite}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="bg-forest text-limestone">
          <Container className="py-20 sm:py-24">
            <Link
              href="/blog"
              className="text-meta text-stone/70 transition-colors hover:text-limestone"
            >
              ← All articles
            </Link>
            <p className="mt-6 text-meta font-semibold uppercase tracking-[0.18em] text-sandstone">
              {post.category} · {post.readMinutes} min read
            </p>
            <h1 className="mt-3 max-w-4xl text-display !text-limestone">
              {post.title}
            </h1>
            <p className="mt-5 text-meta text-stone/70">{fmtDate(post.date)}</p>
          </Container>
        </header>

        <Container className="py-[var(--spacing-section)]">
          <div className="mx-auto max-w-3xl">
            <ImageSlot label={post.category} src={post.image} ratio="16 / 9" />

            <div className="mt-12 space-y-6">
              {blocks.map((b, i) => {
                if (b.type === "h2") {
                  return (
                    <h2 key={i} className="text-h2 pt-4">
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {b.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-3 leading-relaxed text-charcoal/85"
                        >
                          <span className="mt-1 text-sandstone">—</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[1.0625rem] leading-[1.7] text-charcoal/85"
                  >
                    {b.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-14 rounded-[var(--radius-card)] bg-forest p-8 text-center text-limestone">
              <h2 className="text-h3 !text-limestone">
                Planning a project this year?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-meta text-stone">
                Start with a free on-site estimate — a real site walk, a written
                scope, and a materials list. No obligation.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact">Book a free estimate</Button>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
