import bleuvertImg from "@/public/projects/bleuvert.png";
import pelushImg from "@/public/projects/pelush.png";

export const projectsData = [
  {
    title: "Studio bleuvert",
    description:
      "Création d'un site vitrine pour un studio d'architecture d'intérieur. Mise en place d'un CMS (Sanity) pour faciliter la contribution de nouvelles réalistations.",
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
    github: "https://github.com/MatthieuTricoire/bleuvert-sanity",
    live: "https://pelushapp.com/fr/liste-de-naissance/",
  },
] as const;
