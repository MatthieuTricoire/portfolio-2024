"use client";

import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export const About = () => {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28"
    >
      <SectionHeading>À propos de moi</SectionHeading>

      <p className="leading-8 text-justify text-sm sm:text-base">
        Après plus de 10 ans à travailler dans le domaine de la conception
        logicielle centrée sur les géosciences, j'ai ressenti le besoin de
        changer de perspective. Plutôt que de rester du côté de la gestion de
        projet, j'ai voulu m'impliquer davantage dans sa réalisation concrète.{" "}
        <br />
        C'est ainsi qu'en 2023, j'ai pris la décision de me reconvertir
        professionnellement pour revenir au domaine que j'avais étudié il y a 20
        ans : <span className="font-semibold">le développement</span>, plus
        précisément le développement web. Ma stack de principale comprend{" "}
        <span className="font-semibold">
          React, Next.js, Node.js, PostgreSql et Prisma
        </span>
        .
      </p>
      <p className="mt-2 text-justify">
        Si je suis <span className="italic">pas entrain de coder</span>, je suis
        probablement en montagne entrain de remplir{" "}
        <a
          className="underline italic"
          href="https://www.instagram.com/matthieutricoire/"
          target="_blank"
        >
          mes cartes SD
        </a>
        .
      </p>

      <p></p>
    </motion.section>
  );
};
