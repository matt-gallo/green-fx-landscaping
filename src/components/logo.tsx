/*
  greenFX wordmark — recreation of the real lockup (script "green" + bold
  "FX" + "LANDSCAPING INC." baseline), recolored in Forest per brief 12.2.
  The original bright kelly/lime green is retired; brand recognition of the
  lockup structure is preserved.
*/

export function Wordmark({
  className = "",
  variant = "forest",
}: {
  className?: string;
  variant?: "forest" | "reverse";
}) {
  const main = variant === "reverse" ? "#F7F4EE" : "#1F3D2B";
  const fx = variant === "reverse" ? "#F7F4EE" : "#1F3D2B";

  return (
    <span
      className={`inline-flex select-none flex-col leading-none ${className}`}
      aria-label="green FX Landscaping Inc."
      role="img"
    >
      <span className="flex items-baseline">
        <span
          style={{
            fontFamily: "var(--font-script), cursive",
            color: main,
            fontSize: "1.55em",
            lineHeight: 1,
            paddingRight: "0.04em",
          }}
        >
          green
        </span>
        <span
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: fx,
            fontWeight: 700,
            fontSize: "1.7em",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginLeft: "-0.02em",
          }}
        >
          FX
        </span>
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          color: main,
          fontSize: "0.42em",
          fontWeight: 600,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          borderTop: `0.13em solid ${main}`,
          marginTop: "0.18em",
          paddingTop: "0.22em",
          alignSelf: "stretch",
          textAlign: "center",
        }}
      >
        Landscaping Inc.
      </span>
    </span>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="greenFX">
      <rect width="40" height="40" rx="9" fill="#1F3D2B" />
      <text
        x="50%"
        y="56%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#F7F4EE"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        FX
      </text>
    </svg>
  );
}
