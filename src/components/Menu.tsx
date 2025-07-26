"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const listClassNames = [
    "bg-white/50",
    "flex",
    "flex-col",
    "rounded-lg",
    "lg:rounded-none",
    "lg:flex-row",
    "px-8",
    "py-4",
    "gap-2",
    "lg:gap-6",
    "justify-end",
    "text-dark-green",
    "font-bold",
    "transition",
    "duration-300",
    "ease-in-out",
    !isOpen ? "opacity-[0]" : [],
    "lg:opacity-100",
  ].flatMap(x => x).join(" ");

  const strokeColor = isOpen ? "stroke-dark-green" : "stroke-white";

  const navRef = useRef<HTMLElement>(null);

  useClickOutside(navRef, () => {
    setIsOpen(false);
  });

  return (
    <nav ref={navRef} className="p-8 lg:p-0 absolute w-full top-0 left-0 z-2">
      <ul className={listClassNames}>
        <li>
          <a className="block" href="#">home</a>
        </li>
        <li>
          <a className="block" href="#sobre">sobre mim</a>
        </li>
        <li>
          <a className="block" href="#aulas">aulas</a>
        </li>
        <li>
          <a className="block" href="#material">material</a>
        </li>
        <li>
          <a className="block" href="#missao">missão</a>
        </li>
        <li>
          <a className="block" href="#investimento">investimento</a>
        </li>
      </ul>
      <button className="lg:hidden" onClick={toggleMenu}>
        <svg
          className="absolute top-12 right-12"
          width={36}
          height={36}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={strokeColor}
            d="M4 7L7 7M20 7L11 7"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className={strokeColor}
            d="M20 17H17M4 17L13 17"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className={strokeColor}
            d="M4 12H7L20 12"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="sr-only">Abrir menu</span>
      </button>
    </nav>
  );
}
