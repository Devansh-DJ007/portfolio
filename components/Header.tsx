import { FrontPage } from "@/typings";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaGithub } from "react-icons/fa";

type Props = {
  frontPage: FrontPage;
};

function Header({ frontPage }: Props) {
  return (
    <header className="fixed w-screen bg-black top-0 flex items-center justify-between space-x-2 px-6 md:px-20 lg:px-40 py-5 shadow-[0_4px_8px_rgb(162,182,185,0.2)] z-30">
      <Link href="#hero">
        <div className="flex items-center">
          <p className="italic uppercase text-xl font-bold cursor-pointer sm:hidden hover:text-[#96ff1d]">
            {frontPage?.initials}
          </p>
          <p className="italic uppercase text-xl font-bold cursor-pointer hidden sm:block hover:text-[#96ff1d]">
            {frontPage?.name}
          </p>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="https://bento.me/devanshdj" target="_blank">
          <p className="text-lg font-bold cursor-pointer hover:text-[#96ff1d]">
            Bento
          </p>
        </Link>
        <Link href="https://github.com/Devansh-DJ007" target="_blank">
          <p className="cursor-pointer hover:text-[#96ff1d]">
            <FaGithub className="text-xl" />
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
