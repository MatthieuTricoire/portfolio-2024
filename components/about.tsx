"use client";

import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

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

      <p>
        Après plusieurs années en tant qu'ingénieur réservoir, puis en tant que
        proxy product owner, j'ai décidé au début de l'année 2023, de me lancer
        dans une reconversion professionnelle pour excercer un métier qui
        m'attire depuis toujours : Développeur Frontend.
      </p>

      <p></p>
    </motion.section>
  );
};
