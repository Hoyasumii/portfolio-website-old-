import { Project } from "@/types";

export const Projects: Array<Project> = [
  {
    title: "Site Pessoal",
    date: new Date(2024, 4, 19),
    description:
      "Site pessoal desenvolvido em Next.js + React.js + Sass + Tailwind CSS.",
    imgSrc: "/projects/portfolio-website.png",
    href: "https://alanreis.blog",
  },
  {
    title: "Task.me",
    date: new Date(2024, 3, 1),
    description:
      "Aplicativo de tarefas feito em TypeScript + Next.js + React + Sass + Ant Design + Express.js + Prisma + Zod.",
    imgSrc: "/projects/task-me.png",
    href: "https://task-me-client.vercel.app/",
    featured: true
  },
  {
    title: "PokéAPI",
    date: new Date(2023, 11, 29),
    description:
      "Projeto simples no intuito de Consumir a PokéAPI. Feito em Vite + React.js + Bootstrap + Tailwind CSS",
    imgSrc: "/projects/consuming-pokeapi.png",
    href: "https://pokedex-2-chi.vercel.app/",
  },
  {
    title: "Bun Mailer",
    date: new Date(2024, 3, 1),
    description:
      "Api simples feita em Elysia, no intuito de enviar emails através do Resend",
    imgSrc: "/projects/bun.png",
    href: "https://github.com/Hoyasumii/bun-mailer",
  },
  {
    title: "SimpleForm",
    date: new Date(2024, 0, 1),
    description: "Pequena biblioteca Python para facilitar formulários em CLI.",
    imgSrc: "/projects/pypi.png",
    href: "https://github.com/Hoyasumii/SimpleForm",
  },
  {
    title: "SetupGenerator",
    date: new Date(2024, 0, 3),
    description: "Pequena biblioteca Python para criar um setup.py rápido.",
    imgSrc: "/projects/pypi.png",
    href: "https://github.com/Hoyasumii/SetupGenerator",
  },
].sort(
  (projectA, projectB) =>
    new Date(projectB.date).getTime() - new Date(projectA.date).getTime()
);

export const FeaturedProjects: Array<Project> = Projects.filter(
  (project) => project.featured
);

export const AnotherProjects: Array<Project> = Projects.filter(project => !project.featured);