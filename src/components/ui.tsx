import Link from "next/link";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

/* Layout container — generous gutters per section 12.6 ("the new system breathes"). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

/*
  CTA buttons. Sandstone carries action (10% accent in the 60/30/10 rule);
  Forest carries authority. Pill radius, one-tier hover, no gradients.
*/
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-200";
  const variants = {
    primary: "bg-sandstone text-white hover:bg-clay",
    secondary: "bg-forest text-limestone hover:bg-bark",
    ghost:
      "border border-stone text-forest hover:border-forest hover:bg-stone/30",
  } as const;
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/* Editorial section heading — small eyebrow, serif headline, optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-meta font-semibold uppercase tracking-[0.18em] ${
            invert ? "text-sandstone" : "text-clay"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-h2 ${invert ? "!text-limestone" : ""}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-lead ${
            invert ? "text-stone" : "text-charcoal/75"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* Card surface — section 12.6: 10px radius, one-tier shadow, no gradient. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ${className}`}
    >
      {children}
    </div>
  );
}

/*
  ImageSlot — section 12.5 treatment: edge-to-edge, no drop shadow, no bevel,
  no green-chrome lightbox. Neutral placeholder explicitly marked for Pino's
  real project photography. Captions are small and subtle.
*/
export function ImageSlot({
  label,
  caption,
  ratio = "4 / 3",
  className = "",
  src,
}: {
  label: string;
  caption?: { project: string; location: string; year: string };
  ratio?: string;
  className?: string;
  src?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="relative w-full overflow-hidden bg-stone"
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          // Real Green FX project photo — edge-to-edge, no chrome (12.5).
          <Image
            src={src}
            alt={caption ? `${caption.project}, ${caption.location}` : label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          // Honest placeholder where no photo exists yet — no stock (12.5).
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[linear-gradient(135deg,#d6cfc2_0%,#cfc7b7_100%)] text-center">
            <span className="text-meta font-semibold uppercase tracking-[0.16em] text-forest/70">
              {label}
            </span>
            <span className="text-[0.72rem] text-forest/45">
              Real Green FX photo — to be supplied
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-meta text-charcoal/55">
          {caption.project} · {caption.location} · {caption.year}
        </figcaption>
      )}
    </figure>
  );
}
