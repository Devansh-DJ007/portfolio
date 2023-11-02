"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 space-y-5 font-roboto-slab">
      <div className="mt-14">
        <p className="text-3xl font-bold">Experience</p>
      </div>
      <div>
        <p className="text-gray-400 text-xl tracking-wide">
          Want insights into my past experiences &#63;
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </motion.div>
    </div>
  );
}

export default Experience;
