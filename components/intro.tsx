"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import socialLink from "@/data/social-links.json";
import { useSectionInView } from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { introData } from "@/data/intro";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] w-full  sm:mb-0 -scroll-mt-56 grid grid-cols-2 place-items-center"
    >
      <div className="flex items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="introImg"
          />

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.15,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-10"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col  h-full justify-center gap-2"
      >
        <h1 className="mb-4 mt-4 text-2xl font-medium !leading-[1.5] sm:text-3xl  ">
          {introData.name}
        </h1>

        <div className="flex items-center gap-2">
          <span className="w-12 h-px bg-gray-600" />
          <h3 className="relative text-base font-medium">{introData.status}</h3>
        </div>

        <small>{introData.description}</small>
      </motion.div>

      <motion.div
        className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium col-span-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="bg-gray-900 px-7 py-3 group flex items-center gap-2 text-white rounded-full outline-none buttonBehaviorPrimary"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Me contacter
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV-Matthieu-Tricoire-FR.pdf"
          download
          className="border borderBlack bg-white px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none group buttonBehaviorSecondary dark:bg-white/10"
        >
          Télecharger CV
          <HiDownload className="size-4 group-hover:translate-y-1 opacity-70 transition" />
        </a>

        <a
          href={socialLink.linkedin}
          target="_blank"
          className="borderBlack bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin className="size-6" />
        </a>

        <a
          href={socialLink.github}
          target="_blank"
          className="borderBlack bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare className="size-7" />
        </a>
      </motion.div>
    </section>
  );
};
