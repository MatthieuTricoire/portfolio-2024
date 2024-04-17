import bleuvertImg from "@/public/projects/bleuvert.png";
import pelushImg from "@/public/projects/pelush.png";

export const projectsData = [
  {
    title: "Studio bleuvert",
    description: "Blablabla",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Sanity", "Shadcn"],
    imageUrl: bleuvertImg,
  },
  {
    title: "Pelush",
    description: "Blablabla",
    tags: [
      "React",
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
  },
] as const;
