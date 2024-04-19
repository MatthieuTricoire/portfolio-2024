"use client";
import { projectsData } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
  live,
  github,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end .8"], //['bottom of viewport cross top of target', 'target reach 33% viewport']
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mt-3 sm:mb-8 last:mb-0 group "
    >
      <section className="rounded-lg bg-gray-100 sm:group-even:pl-8 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem]  hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <div className="mt-4 flex gap-3  items-center">
            {github.length > 0 && (
              <a href={github} target="_blank">
                <BsGithub className="size-6 text-gray-600  hover:scale-[1.08] active:scale-105 hover:opacity-80 dark:text-gray-200 transition" />
              </a>
            )}

            <a href={live} target="_blank">
              <AiFillEye className="size-7 text-gray-600  hover:scale-110 active:scale-105 hover:opacity-80 dark:text-gray-200 transition" />
            </a>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="group-hover:scale-105 group-hover:group-even:rotate-2 group-hover:group-even:translate-x-3 group-hover:group-even:translate-y-3 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition absolute hidden sm:block top-8 left-[25rem]  w-[40rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-[22rem]"
        />
      </section>
    </motion.div>
  );
};
