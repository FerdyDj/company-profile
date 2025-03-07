"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.removeEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="max-sm:pt-2 max-sm:flex-row sm:flex max-w-screen max-sm:h-fit sm:h-[70px] justify-between items-center z-50 px-8 sticky top-0 bg-gradient-to-b from-yellow-100 to-transparent">
      <div className="flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="logo-kids"
          width={100}
          height={50}
        ></Image>
        <span
          onClick={toggleMenu}
          className="text-3xl cursor-pointer sm:hidden block mx-4"
        >
          {menuOpen ? (
            <GiHamburgerMenu className="text-amber-400 bg-fuchsia-700 rounded-lg" />
          ) : (
            <RiCloseLargeLine className="text-red-600" />
          )}
        </span>
      </div>
      <ul
        ref={dropdownRef}
        className={
          menuOpen
            ? "sm:flex gap-3 text-gray-700 z-[-1] sm:z-auto sm:static absolute max-sm:bg-gradient-to-b max-sm:from-transparent max-sm:to-amber-300 w-full sm:w-auto left-0 sm:opacity-100 opacity-0 top-[-400px] transition ease-in duration-500"
            : "sm:flex gap-3 text-gray-700 z-[-1] sm:z-auto sm:static absolute max-sm:bg-gradient-to-b max-sm:from-transparent max-sm:to-amber-300 w-full sm:w-auto left-0 transition ease-in duration-500"
        }
      >
        <li className="mx-8 sm:mx-0 my-4 sm:my-0">
          <Link
            onClick={() => setMenuOpen(true)}
            href={"/Home"}
            className="hover:text-fuchsia-700 hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
        </li>
        <li className="mx-8 sm:mx-0 my-4 sm:my-0">
          <Link
            onClick={() => setMenuOpen(true)}
            href={"/About"}
            className="hover:text-fuchsia-700 hover:underline hover:underline-offset-4"
          >
            About Us
          </Link>
        </li>
        <li className="mx-8 sm:mx-0 my-4 sm:my-0">
          <Link
            onClick={() => setMenuOpen(true)}
            href={"/Product"}
            className="hover:text-fuchsia-700 hover:underline hover:underline-offset-4"
          >
            Product
          </Link>
        </li>
        <li className="mx-8 sm:mx-0 my-4 sm:my-0">
          <Link
            onClick={() => setMenuOpen(true)}
            href={"/Teams"}
            className="hover:text-fuchsia-700 hover:underline hover:underline-offset-4"
          >
            Teams
          </Link>
        </li>
      </ul>
    </div>
  );
}
