"use client";

import React from "react";
import { motion } from "framer-motion";
import { Techstack } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  techstack: Techstack[];
};

function Techstack({ techstack }: Props) {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 space-y-5 font-gilroy-medium z-10">
      <div className="mt-28 mb-8">
        <div className="">
          <p className="text-3xl font-bold">My Techstack</p>
        </div>
        <div className="mt-5">
          <p className="text-gray-400 text-xl tracking-wide">Languages and framework I use</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap justify-start"
      >
        {techstack.map((techstack) => (
          <div
            key={techstack?._id}
            className="w-[48px] h-[64px] mr-[16px] md:mr-[42px] mb-3"
          >
            <img
              width="100%"
              src={urlFor(techstack?.image).url()}
              alt={techstack?.title}
            ></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Techstack;
