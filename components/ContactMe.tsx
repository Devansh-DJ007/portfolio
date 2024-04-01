import React from "react";
import { FrontPage, Social } from "@/typings";
import { SocialIcon } from "react-social-icons";
import { FaRegFileAlt } from "react-icons/fa";

type Props = {
  frontPage: FrontPage;
  social: Social[];
};

function ContactMe({ frontPage, social }: Props) {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 space-y-5 font-gilroy-medium">
      <div className="mt-28">
        <div className="">
          <p className="italic flex justify-center text-3xl font-semibold">
            Let&apos;s create something together &#33;
          </p>
        </div>
        <div className="mt-5">
          <p className="italic flex justify-center text-gray-400 text-xl tracking-wide">
            Working with someone has always been fun for me. Want to make
            something cool together &#63;
          </p>
        </div>
        <div className="mt-5">
          <p className="italic flex justify-center text-xl font-semibold">Hit me up &#33;</p>
        </div>
        <div className="my-14">
          <a
            className="italic flex justify-center text-xl font-bold text-[#96ff1d]"
            href="mailto: devansh2000.official@gmail.com"
          >
            devansh2000.official@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-row mt-16 space-x-5">
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
    </div>
  );
}

export default ContactMe;
