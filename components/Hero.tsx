"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FrontPage, Social } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  frontPage: FrontPage;
  social: Social[];
};

function Hero({ frontPage,social }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col items-center font-gilroy-medium"
    >
      <div className="mt-60 sm:mt-28 md:mt-24 lg:mt-28 2xl:mt-52">
        <p className="italic text-3xl tracking-[1px] font-bold">Hi&#33; I&#39;m</p>
      </div>
      <div>
        <img
          src={urlFor(frontPage?.mainImage).url()}
          alt=""
          width={600}
          height={40}
        />
      </div>
      <div className="my-5">
        <p className="italic text-lg md:text-xl text-gray-500 font-semibold px-6 md:px-20 lg:px-40 text-center justify-center">
          {frontPage?.description}
        </p>
      </div>
      <div className="flex flex-row mt-16 lg:mt-10 2xl:mt-16 space-x-8">
        {social.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="currentColor"
            bgColor="transparent"
            className="text-white hover:text-[#96ff1d]"
            target="_blank"
          />
        ))}
        <a
          href={frontPage.resumeURL}
          className="mt-3 pl-2 text-white hover:text-[#96ff1d]"
          target="_blank"
        >
          <FaRegFileAlt size={25} />
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;
