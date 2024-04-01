"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { TiTimes } from "react-icons/ti";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 space-y-5 font-gilroy-medium">
      <div className="mt-28 mb-8">
        <div className="">
          <p className="italic flex justify-center text-3xl font-bold">
            PROJECTS
          </p>
        </div>
        <div className="mt-5">
          <p className="italic flex justify-center text-gray-400 text-xl tracking-wide">
            Let&apos;s explore my pet projects &#33;
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5"
      >
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
