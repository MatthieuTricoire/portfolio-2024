"use client";

import React from "react";
import { SectionHeading } from "./section-heading";
import { skills } from "@/data/skills";
import { useSectionInView } from "@/hooks/hooks";
import { Variants, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: idx * 0.08,
    },
  }),
} satisfies Variants;

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Mes skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-700">
        {skills.map((skill, idx) => (
          <motion.li
            className="bg-white borderBlack px-5 py-3 rounded-xl dark:text-white/80 dark:bg-white/10"
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
