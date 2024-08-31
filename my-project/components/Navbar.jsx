
"use client";
import Image from "next/image";
import logo from "../public/logo.gif";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-[80%] h-16 shadow-xl bg-[#838383]/30 backdrop-blur-lg z-50 ml-40 mt-5 rounded-3xl ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="logo"
            width={96}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div>
          <label className="input input-bordered flex items-center gap-2 rounded-3xl">
          
            <input type="text" className="grow w-52" placeholder="Search Creator" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex space-x-10">
            <li className="flex items-center space-x-2">
              <Link href="/contact" className="flex items-center space-x-2">
                <span className="text-xl hover:border-b-2">Contact Us</span>
              </Link>
            </li>

            <li className="flex items-center space-x-2">
              <Link href="/about" className="flex items-center space-x-2">
                <span className="text-xl hover:border-b-2">About Us</span>
              </Link>
            </li>

            <li className="flex items-center space-x-2">
              <Link href="/policies" className="flex items-center space-x-2">
                <span className="text-xl hover:border-b-2">Policies</span>
              </Link>
            </li>

            <li>
              <Link href="/login" passHref>
                <button className="px-4 py-2 bg-white text-teal-900 rounded-lg font-bold ">Login</button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "left-0" : "left-[-100%]"
        } fixed top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-50`}
      >
        <div className="flex justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="mt-8">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4">
              <Link href="/contact">Contact
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4">
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4">
              <Link href="/policies">Policies</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>

        <Link href="/" passHref>
          <Image
            src={logo}
            alt="logo"
            width={96}
            height={40}
            className="cursor-pointer mt-6"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;