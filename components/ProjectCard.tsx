import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import Link from "next/link";
import React from "react";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="p-1 my-2 rounded-lg font-sans">
      <div className="">
        <Link href={project?.link} target="_blank">
          <img
            width="90%"
            src={urlFor(project?.image).url()}
            alt="Tickets NFT"
            className="transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg rounded-2xl cursor-pointer"
          />
        </Link>
        <div className="mb-3 mt-4">
          <p className="text-base mb-2">{project?.description}</p>
          <a href={project?.link} target="_blank" className="text-gray-500 text-base font-bold mt-4 hover:text-[#96ff1d] cursor-pointer">  
              See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
