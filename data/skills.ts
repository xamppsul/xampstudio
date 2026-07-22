export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Docker"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Vercel", "AWS", "VS Code", "Figma"],
  },
  {
    category: "Concepts",
    items: ["System Design", "Performance Optimization", "Testing", "Accessibility"],
  },
];
