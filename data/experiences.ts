import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Stage Développeur Frontend",
    location: "À distance",
    description:
      "Création du MVP de Pelush. Monté en compétences sur Next.js 14",
    icon: React.createElement(CgWorkAlt),
    date: "Septembre 2023 - Mars 2023",
  },
  {
    title: "Bootcamp Le Reacteur",
    location: "À distance",
    description:
      "Formation autour du développement web et mobile. Prise en main du frontend (React / React Native) ainsi que du backend (Express).",
    icon: React.createElement(LuGraduationCap), // icon: <LuGradutionCap/> only valid on tsx file.

    date: "Janvier 2023 - Mars 2023",
  },
  {
    title: "Product Owner",
    location: "TotalEnergies, Pau",
    description:
      "Analyse des besoins utilisateurs, gestion du backlog, création de wireframes, organisation et animation de workshops, formations et recette des produits",
    icon: React.createElement(FaReact),
    date: "2018 - 2022",
  },
  {
    title: "Ingénieur projet",
    location: "TotalEnergies, Pau",
    description:
      "Élaboration de spécifications de différents modules autour des géostatistiques. Gestion de la TMA",
    icon: React.createElement(FaReact),
    date: "2012 - 2018",
  },
] as const;
