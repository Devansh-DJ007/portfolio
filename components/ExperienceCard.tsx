import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import React from "react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <div className="p-3 my-2 font-roboto-slab">
      <div className="flex flex-row space-x-3">
        <div className="text-center my-auto">
          <img
            src={urlFor(experience?.image).url()}
            alt=""
            className="w-16 h-16 rounded-full object-cover object-center "
          />
        </div>
        <div className="flex flex-col">
          <div className="items-center object-center">
            <p className="text-xl font-bold">{experience?.company}</p>
          </div>
          <div className="items-center object-center">
            <p className="text-base">{experience?.position}</p>
          </div>
          <div className="items-center object-center">
            <p className="text-base text-gray-500">{experience?.timeline}</p>
          </div>
          <div className="flex space-x-2 my-2 ">
            {experience?.skills.map((skill) => (
              <img
                key={skill?._id}
                className="h-7 w-7 rounded-full"
                src={urlFor(skill?.image).url()}
                alt={skill?.title}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-2">
        <p className="text-sm tracking-wide">{experience?.description}</p>
      </div> */}
    </div>
  );
}

export default ExperienceCard;
