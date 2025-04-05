
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
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] h-16 shadow-xl bg-gray-500/30 backdrop-blur-lg z-50 rounded-3xl px-4 md:px-6">
  <div className="flex justify-between items-center h-full w-full">
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={96}
        height={40}
        className="cursor-pointer"
        priority
      />
    </Link>

    {/* Search input hidden on small screens */}
    <div className="hidden md:flex">
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

    {/* Main nav links for medium+ screens */}
    <div className="hidden lg:flex">
      <ul className="flex space-x-6 xl:space-x-10">
        <li>
          <Link href="/contact" className="text-base xl:text-xl hover:border-b-2">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-base xl:text-xl hover:border-b-2">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/policies" className="text-base xl:text-xl hover:border-b-2">
            Policies
          </Link>
        </li>
        <li>
          <Link href="/login">
            <button className="px-4 py-2 bg-white text-teal-900 rounded-lg font-bold hover:shadow-md transition-all duration-200">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </div>

    {/* Hamburger menu on small screens */}
    <div className="lg:hidden cursor-pointer" onClick={handleNav}>
      <AiOutlineMenu size={25} />
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`${
      menuOpen ? "left-0" : "left-[-100%]"
    } fixed top-0 w-[75%] sm:w-[60%] h-screen bg-white p-8 transition-all duration-500 ease-in-out z-50 rounded-r-2xl shadow-md`}
  >
    <div className="flex justify-end">
      <button onClick={handleNav}>
        <AiOutlineClose size={25} />
      </button>
    </div>

    <ul className="mt-8 space-y-6 text-lg">
      <li onClick={handleNav}>
        <Link href="/contact">Contact</Link>
      </li>
      <li onClick={handleNav}>
        <Link href="/about">About Us</Link>
      </li>
      <li onClick={handleNav}>
        <Link href="/policies">Policies</Link>
      </li>
      <li onClick={handleNav}>
        <Link href="/login">Login</Link>
      </li>
    </ul>

    <div className="flex justify-around pt-10 items-center">
      <AiOutlineInstagram size={30} className="cursor-pointer" />
      <AiOutlineFacebook size={30} className="cursor-pointer" />
      <AiOutlineTwitter size={30} className="cursor-pointer" />
    </div>

    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={96}
        height={40}
        className="cursor-pointer mt-6 mx-auto"
        priority
      />
    </Link>
  </div>
</nav>

  );
};

export default Navbar;