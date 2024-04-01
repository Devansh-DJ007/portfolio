"use client";

import React from "react";
import { motion } from "framer-motion";
import { Techstack } from "@/typings";
import { urlFor } from "@/sanity";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CgYinyang } from "react-icons/cg";

type Props = {
  techstack: Techstack[];
};

function Techstacks({ techstack }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 space-y-5 font-gilroy-medium z-10">
      <div className="mt-28 mb-8">
        <div className="flex justify-center">
          <p className="italic flex justify-center text-3xl font-bold">TECHSTACK</p>
        </div>
        <div className="flex justify-center mt-5">
          <p className="italic flex justify-center text-gray-400 text-xl tracking-wide">Languages and framework I use</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap justify-center"
      >
        {techstack.map((techstack) => (
          <div 
          ref={emblaRef}
            key={techstack?._id}
            className="w-[56px] h-[px] mr-[16px] md:mr-[42px] mb-3"
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

export default Techstacks;
