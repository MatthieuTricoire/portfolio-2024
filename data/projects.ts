import bleuvertImg from "@/public/projects/bleuvert.png";
import pelushImg from "@/public/projects/pelush.png";
import budgetTracker from "@/public/projects/budgetTracker.png";

export const projectsData = [
  {
    title: "Studio bleuvert",
    description:
      "Création d'un site vitrine pour un studio d'architecture d'intérieur. Mise en place d'un CMS (Sanity) pour faciliter la contribution de nouvelles réalisations.",
    tags: ["Next.js", "Tailwind", "Typescript", "Sanity"],
    imageUrl: bleuvertImg,
    github: "https://github.com/MatthieuTricoire/bleuvert-sanity",
    live: "https://bleuvert-sanity.vercel.app/",
  },
  {
    title: "Pelush",
    description:
      "Réalisation d'un MVP durant mon stage de 6 mois chez Récursive.",
    tags: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "Strapi",
      "Shadcn",
      "NextAuth",
      "React Hook Form",
      "Amazon SeS",
    ],
    imageUrl: pelushImg,
    github: "",
    live: "https://pelushapp.com/fr/liste-de-naissance/",
  },
  {
    title: "Budget Tracker",
    description: "Réalisation d'une app qui permet de suivre son budget.",
    tags: ["Next.js", "Tailwind", "Clerk", "React Query", "Shadcn"],
    imageUrl: budgetTracker,
    github: "https://github.com/MatthieuTricoire/budget-tracker",
    live: "https://budget-tracker-a7osy1nlc-matths-projects.vercel.app/",
  },
] as const;
