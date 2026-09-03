import type { TeamMember } from "../types";

export const team: TeamMember[] = [
  {
    id: "mila-chen",
    name: "Mila Chen",
    role: "Co-Founder & Head Baker",
    bio: "Sourdough expert with 10 years of slow-fermentation baking.",
    photo: { id: "team-mila", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", alt: "Portrait of Mila Chen" },
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Co-Founder & Director",
    bio: "Ensures the highest standards of clean sourcing and community.",
    photo: { id: "team-david", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", alt: "Portrait of David Chen" },
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Executive Chef",
    bio: "Brings 15 years of gourmet, organic-focused kitchen craft.",
    photo: { id: "team-sarah", url: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80", alt: "Portrait of Sarah Jenkins" },
  },
  {
    id: "marcus-vance",
    name: "Dr. Marcus Vance",
    role: "Atelier Nutritionist",
    bio: "Maps and optimizes the micro & macro nutritional density.",
    photo: { id: "team-marcus", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80", alt: "Portrait of Dr. Marcus Vance" },
  },
];
