"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";
import Avatar from "@/public/avatar.svg";

const Navbar = ({ active, setActive }: any) => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   setToggle(!toggle);
  // }, [active]);
  return (
    <nav
      className={`paddingX
			w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Link href="https://github.com/Vinay2812">
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt="logo"
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-white text-[24px] font-bold cursor-pointer flex">
            Vinay Sarda
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 lg:block hidden">
          <ResumeButton />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={!toggle ? "/menu.svg" : "/close.svg"}
            width={28}
            height={28}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li>
                <div className="mt-2">
                  <ResumeButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
