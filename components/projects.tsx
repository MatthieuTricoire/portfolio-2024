"use client";
import React, { Fragment } from "react";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/data/projects";
import { Project } from "@/components/project";
import { useSectionInView } from "@/hooks/hooks";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Mes projets</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
