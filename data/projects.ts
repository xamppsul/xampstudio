export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    shortDescription: "Full-stack marketplace with payment integration",
    description:
      "A modern e-commerce platform built with Next.js, featuring product search, filtering, user authentication, and Stripe payment integration. Includes an admin dashboard for inventory management.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/images/project-1.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    shortDescription: "Real-time collaborative task management",
    description:
      "A collaborative task management application with real-time updates using WebSockets. Features include team collaboration, task assignments, deadlines, and progress tracking.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/images/project-2.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    shortDescription: "Real-time data visualization and reporting",
    description:
      "An analytics dashboard providing real-time insights into user behavior and system metrics. Built with React, featuring interactive charts, custom reports, and data export functionality.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/images/project-3.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
];
