/*
  Portfolio — real Green FX project photos pulled from their gallery,
  mapped to the brief's categories (section 5 observation).

  Captions: project type is accurate from the photo; location/year are
  placeholders. Pino: confirm real project names, municipalities and years.
  Photography is the original web-res set — upgrade to higher-craft shots
  per brief 12.5 when available.
*/

export type Project = {
  category: string;
  label: string;
  project: string;
  location: string;
  year: string;
  src: string;
  feature?: boolean;
};

export const projects: Project[] = [
  {
    category: "Design-Build",
    label: "Walkway, deck & glass railing",
    project: "Walkway, deck & glass railing",
    location: "GTA",
    year: "—",
    src: "/portfolio/hardscape-01.jpg",
    feature: true,
  },
  {
    category: "Lawn & Garden",
    label: "Garden & sod installation",
    project: "Garden & sod installation",
    location: "GTA",
    year: "—",
    src: "/portfolio/garden-01.jpg",
  },
  {
    category: "Hardscape",
    label: "Patio & walkway",
    project: "Patio & walkway",
    location: "GTA",
    year: "—",
    src: "/portfolio/hardscape-02.jpg",
  },
  {
    category: "Design-Build",
    label: "Landscape lighting at dusk",
    project: "Landscape lighting",
    location: "GTA",
    year: "—",
    src: "/portfolio/lighting-01.jpg",
    feature: true,
  },
  {
    category: "Lawn & Garden",
    label: "Garden bed & planting",
    project: "Garden bed & planting",
    location: "GTA",
    year: "—",
    src: "/portfolio/garden-04.jpg",
  },
  {
    category: "Hardscape",
    label: "Interlock & retaining wall",
    project: "Interlock & retaining wall",
    location: "GTA",
    year: "—",
    src: "/portfolio/hardscape-07.jpg",
  },
  {
    category: "Design-Build",
    label: "Deck & railing build",
    project: "Deck & railing build",
    location: "GTA",
    year: "—",
    src: "/portfolio/deck-04.jpg",
  },
  {
    category: "Hardscape",
    label: "Stone walkway & steps",
    project: "Stone walkway & steps",
    location: "GTA",
    year: "—",
    src: "/portfolio/hardscape-08.jpg",
  },
  {
    category: "Lawn & Garden",
    label: "Full lawn & sod project",
    project: "Lawn & sod project",
    location: "GTA",
    year: "—",
    src: "/portfolio/garden-05.jpg",
    feature: true,
  },
  {
    category: "Hardscape",
    label: "Patio installation",
    project: "Patio installation",
    location: "GTA",
    year: "—",
    src: "/portfolio/hardscape-09.jpg",
  },
  {
    category: "Design-Build",
    label: "Fence & deck project",
    project: "Fence & deck project",
    location: "GTA",
    year: "—",
    src: "/portfolio/deck-01.jpg",
  },
  {
    category: "Lawn & Garden",
    label: "Garden redesign",
    project: "Garden redesign",
    location: "GTA",
    year: "—",
    src: "/portfolio/garden-06.jpg",
  },
];

// Extra photos available in /public/portfolio not placed above — Pino can
// slot these in as project details are confirmed:
// garden-02, garden-03, garden-07, hardscape-03..06, hardscape-10,
// hardscape-11.png, deck-02, deck-03, deck-05.

export const portfolioCategories = [
  "All",
  "Design-Build",
  "Hardscape",
  "Lawn & Garden",
] as const;
