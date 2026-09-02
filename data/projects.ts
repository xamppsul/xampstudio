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
  {
    id: "project-4",
    title: "Social Media API",
    shortDescription: "RESTful backend for social networking platform",
    description:
      "A robust REST API built with Node.js and Express for a social networking platform. Includes user authentication, post management, comments, likes, and real-time notifications using WebSockets.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/project-4.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "Weather Forecast App",
    shortDescription: "Real-time weather data with location services",
    description:
      "A weather application that provides real-time weather forecasts using external APIs. Features include location-based weather, multiple city management, and weather alerts with a beautiful modern UI.",
    tech: ["React", "Tailwind CSS", "OpenWeather API", "Geolocation"],
    image: "/images/project-5.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Document Management System",
    shortDescription: "Enterprise document handling and organization",
    description:
      "An enterprise document management system with file upload, version control, and collaboration features. Built with Next.js and PostgreSQL, featuring document search, tagging, and access control.",
    tech: ["Next.js", "PostgreSQL", "AWS S3", "TypeScript"],
    image: "/images/project-6.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
  {
    id: "project-7",
    title: "AI Chatbot Platform",
    shortDescription: "Conversational AI with natural language processing",
    description:
      "An AI-powered chatbot platform built with OpenAI API integration. Features include conversation history, custom training data, multiple chat sessions, and analytics dashboard for monitoring interactions.",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    image: "/images/project-7.png",
    demo: "https://example.com",
    github: "https://github.com",
    featured: false,
  },
];
