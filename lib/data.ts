export const site = {
  name: "Wira Bintang A.W.",
  fullName: "Wira Bintang Alvarya Wibisono",
  role: "Creative Technologist & Designer",
  status: "Available for Q3/Q4 Projects",
  email: "alvarya56@gmail.com",
  eyebrow: "Portfolio & Index — 2024",
  headline:
    "Designing calm, purposeful digital interfaces and tactile interactive systems.",
  intro:
    "Based in Jakarta & working globally across UI/UX, creative code, and visual architecture.",
  coordinates: "JKT / 06° 12' S 106° 49' E",
  contactTitle: "Let's build something enduring together.",
  contactText:
    "Always open to conversations regarding complex design systems, design executive advisory, experimental creative technology, and select contract engagements.",
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const marquee = [
  "Product Design",
  "Design Systems",
  "Creative Direction",
  "Editorial Typography",
  "Creative Code",
  "WebGL & Shaders",
  "Spatial Interfaces",
  "High-Fidelity Prototyping",
];

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Aura — Spatial Audio Ecosystem",
    category: "Spatial Computing",
    year: "2024",
    description:
      "Next-generation sound staging control suite designed for acoustic researchers and spatial mix engineers.",
    tags: ["VisionOS", "Design Tokens", "Web Audio API"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCELcO8M6edrT7_eWmksCszjt52EVB0FlfcNJc1obbGVY77jUXUlTh_x088wJuqll7BSCRCb9ad1HuyjZYIRO3ed8B_6ZUTAzH7_38U1i4fl_SEmNAlHUjLo6zp0v4UpocEy5Ag-yhaZjuilP1onNbnDKjFttX-vTSAt3_gq8Mj-N5baEJHhKep7Y9vaYVN5nknsyO-anxtD9TpBha-JEYd9mKCEexmAGFnzAnkx0BZV1-QvSYJbhaX",
    alt: "Dark charcoal spatial audio device interface resting on natural stone in soft gallery light.",
  },
  {
    title: "Lumina — Editorial Commerce OS",
    category: "Commerce Engine",
    year: "2024",
    description:
      "A modular publishing architecture merging longform cultural monographs directly with high-volume transaction conduits.",
    tags: ["Next.js", "Micro-interactions", "Editorial UI"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnaZwgiA5IHmMf7YLubXMwJS6Be11Q19y7DwZK8kgUN-gQIbsOGAvE80TJ5tGVPnf5e1HGk-13ZkCHQDadNuSX6btulakdOYktAecdjfuGgQsuZ8UYJ8g7ofeDmrwwD2qjF9gSmg3dQFRIzVEjEhnMOlMc7rgimc_z-Bs9c_MlAyYuvTQYgIexj1Pde5PG66UNexiGf2A8Cv3AjQoewBbVQ0t-e9yn49Q48ItLtgiQ4XIcjbirB_u9",
    alt: "Ultra-slim tablet on a timber plinth showing an editorial e-commerce interface with serif typography.",
  },
  {
    title: "Kanso — Studio Architecture & Object",
    category: "Spatial Design",
    year: "2023",
    description:
      "Identity and digital inventory archive celebrating brutalist monolithic forms and minimalist residential planning.",
    tags: ["Three.js", "WebGL", "Archival Curation"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRLS_HaJT8Wc6JzRjBmMtWH2OCCfrBf8VRSvo9NvvvKVoGY_nzTA_AowHLROOjHc5Edgz_4o9alk72ZNqN8KPr_dwmG6WbdHjaBz4KnpcvF7lmyhdtjCapD-iAGeRz7aEI6giXH1fcMtJeZMvE8G3ZYrRDFxHJadT6BEu-pGzfhN_MwAYGgXEXlzWriovk5NlBB4UrMDGnHzUP8ER7ZpPBZx1vMgX-KSmLFDge2TXWkUDuTa-KVFLB",
    alt: "Overhead view of an architect's table with blueprints, brass calipers and a tablet showing 3D floor plans.",
  },
  {
    title: "Nectar — Ambient Health Tracker",
    category: "Bio-Informatics",
    year: "2023",
    description:
      "Glanceable physiologic wellness visualization engine prioritizing circadian alignment over panic-inducing notification loops.",
    tags: ["iOS Architecture", "Sensory UX", "Data Sonification"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrzCf_GVOQgo6Q579tu0bc8S8eyZD6iadnvLd2w2-4IjErqL8KZvNda787Pi8XatYJ4mk8OpiVxiY_ePgPcXboJX5ti8PgRkx6SicKKzwRH3qwo29N4KifQFbF-NC3uO0xRQDbL0OPFVmcGV0yWrJLynp4raCTNnpONY1FWAnPzoBJl7pSGlyqFB3FpwPsSWzvtTzQ2npkwPX7KHqfzUlfuyJZc4_35VbAkprLwT1PP0O9srlPzVmK",
    alt: "Phone showing a calm sage-green biomonitoring app on a concrete pedestal beside dry botanicals.",
  },
  {
    title: "Monolith — Generative Type Tool",
    category: "Creative Tooling",
    year: "2022",
    description:
      "Computational bezier spline experiment generating algorithmic glyph systems calibrated for large-scale spatial installations.",
    tags: ["Canvas API", "OpenType.js", "Mathematical Design"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlPDBm47pABECuu92Wn8cOCQJ0e1jvsakI0zooIGyAPAiOvj18dKoP-_BoxfOOoQa1SrXdKBTZtiZ1kh30ciE-xLL5BU0sYtmSnRjSVUIiuKeq-e9symjeB9LuAAlbQ4apQUkAuK3WC-YZ8kUcW-xCzdcFFSZi-vcMSbCTMeoBvoI4Xk298t6dMNjkVGeZwfyS-22bDmzKk4uia9Di05qR_VMyMzFK0f6t8e-RudvnibGiL-0KqE87",
    alt: "Monitor displaying a procedural typography tool with dense glyph matrices and bezier controls.",
  },
  {
    title: "Terra — Regenerative Climate Atlas",
    category: "Cartography & AI",
    year: "2022",
    description:
      "High-density geographic visualization mapping reforestation initiatives across Southeast Asian archipelago ecosystems.",
    tags: ["Mapbox GL", "GeoJSON", "Earth Observation"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiUpcPbpU6zyJ4mkkK9dIGHQs4fJQipPPBHYHPrGWtbUyOxsqsFm_xMc8bzZGfAlIhnf_MzFt8SZelNFcHB21RxW-w4BAiq58zHFRHhRWpxYViyH4UFXAfDG_kEz91k-dGUNekO1rHn07-TqDE3k0fLBp6YmnC-bzjVybDwwypq1pLivb3yK503CkiXmL9EGO5KXSbLe6ym5FOnsvx99pK2ucxFOAV4PSA7IQG7cCJ36s-JWriEsEl",
    alt: "Wide mapping console showing topographic satellite layers with sage-green biome contours.",
  },
];

export const about = {
  eyebrow: "Philosophy / 02",
  heading: "Bridging the contemplative quietude of classical print with algorithmic rigor.",
  paragraphs: [
    "I operate at the intersection of aesthetic craft and software architecture. Over the last decade, I have partnered with pioneering technology teams, cultural foundations, and independent founders to articulate complex programmatic capabilities into effortless, tactile human experiences.",
    "My work rejects arbitrary decoration, prioritizing spatial cadence, typographic legibility, and deterministic interaction performance. Every system is built to age gracefully, balancing utility with emotional stillness.",
  ],
  portrait: "/profile.jpeg",
  portraitAlt:
    "Black-and-white portrait of Wira Bintang in a charcoal linen shirt, standing in a quiet architecture library.",
};

export const disciplines = [
  {
    title: "Design",
    items: [
      "Product Design (UI/UX)",
      "Design Systems Architecture",
      "Creative Direction",
      "Editorial Typographics",
    ],
  },
  {
    title: "Engineering",
    items: [
      "TypeScript / React / Next.js",
      "Three.js / WebGL Shaders",
      "Tailwind CSS Architecture",
      "State Machines & Micro-APIs",
    ],
  },
  {
    title: "Methodologies",
    items: [
      "Atomic Token Hierarchies",
      "High-Fidelity Prototyping",
      "Accessible DOM Semantics",
      "Spatial Wireframing",
    ],
  },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Lead Product Designer",
    company: "Studio Monad",
    location: "Global / Remote",
    current: true,
  },
  {
    period: "2021 — 2023",
    role: "Senior UX Specialist",
    company: "Archaic Labs",
    location: "Singapore",
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Interaction Designer",
    company: "Framer Guild",
    location: "Jakarta",
    current: false,
  },
  {
    period: "2018 — 2020",
    role: "UI Engineer & Visual Fellow",
    company: "Polymath Digital Foundry",
    location: "Bandung",
    current: false,
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Read.cv", href: "https://read.cv" },
  { label: "Instagram", href: "https://instagram.com" },
];
