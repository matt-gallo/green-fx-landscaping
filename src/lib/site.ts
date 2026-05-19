/*
  Single source of truth for site-wide content.
  Pino: update phone, email, review link, and the OPEN_PROOF numbers here
  once confirmed — every page reads from this file.
*/

export const site = {
  name: "Green FX",
  legalName: "Green FX Landscaping",
  tagline: "One crew. Four seasons. Every year you own the home.",
  established: 2007,
  // Derived so it never goes stale.
  get yearsInBusiness() {
    return new Date().getFullYear() - this.established;
  },
  phone: "(905) 555-0100", // TODO(Pino): confirm real number
  phoneHref: "tel:+19055550100", // TODO(Pino): confirm real number
  email: "hello@greenfxlandscaping.com", // TODO(Pino): confirm
  reviewUrl: "https://g.page/r/CfabZIR2FYUOEBM/review",
  currentSite: "https://greenfxlandscaping.com",
  baseHomeRadius: "Tottenham, ON",
} as const;

// Proof points — section 5. Numbers marked TBD are awaiting confirmation from Pino.
export const proof = [
  { value: `${site.yearsInBusiness}`, label: "Years in operation", note: `Established ${site.established}` },
  { value: "4", label: "Service categories", note: "Design · Hardscape · Lawn · Snow" },
  { value: "2", label: "Industry memberships", note: "CNLA · Landscape Ontario" },
  { value: "100%", label: "Insured & WSIB", note: "Documentation up front" },
] as const;

// Trust badges — section 12.7. Single consistent system, footer trust strip only.
export const trustBadges = [
  { label: `Est. ${site.established}`, kind: "anchor" },
  { label: "Family Owned", kind: "credibility" },
  { label: "Fully Insured", kind: "risk" },
  { label: "WSIB Compliant", kind: "risk" },
  { label: "CNLA Member", kind: "credential" },
  { label: "Landscape Ontario Member", kind: "credential" },
] as const;

// Service area — section 8, primary vertical municipalities.
export const serviceAreas = [
  "Etobicoke",
  "Vaughan",
  "Richmond Hill",
  "King City",
  "Aurora",
  "Tottenham",
] as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
