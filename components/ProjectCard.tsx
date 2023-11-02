import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import React from "react";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    // <div className="p-1 my-2 rounded-lg font-gilroy-medium">
    <div className="p-1 my-2 rounded-lg font-poppins">
      <div className="">
        <div>
          <img
            width="100%"
            src={urlFor(project?.image).url()}
            alt="Tickets NFT"
            className="rounded-lg cursor-pointer shadow-[0_2px_111px_rgb(45,45,45,0.52)] hover:shadow-[0_2px_48px_rgb(158,158,158,0.25)]"
          />
        </div>
        <div className="mb-3 mt-4">
          <p className="text-base ">
            {project?.description}
          </p>
          <a href={project?.link} target="_blank">
            <p className="text-gray-500 text-base font-bold mt-4 hover:text-[#96ff1d] cursor-pointer">
              See more
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
