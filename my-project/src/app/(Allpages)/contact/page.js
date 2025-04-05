import React from 'react';
import Navbar from '../../../../components/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image'; // Import Next.js Image component
import contactimage from "../../../../public/contactimage.jpeg";

const ContactPage = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/khushboo-kumari-23814225b/',
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: 'https://github.com/khushboo8252',
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: './image/resume.pdf',
      download: true,
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
<div name="home" className="w-full pt-12 bg-[#FFFFFF]">
  <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-10 gap-10">
    
    {/* Left Text Section */}
    <div className="flex flex-col sm:w-1/2 w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center sm:text-left mb-6">
        Hey! We Are VYB Store
      </h2>
      <h3 className="text-xl sm:text-2xl font-bold text-black text-center sm:text-left mb-4">
        Our Objective
      </h3>
      <p className="text-base sm:text-lg text-black max-w-md mx-auto sm:mx-0">
        Join us exclusively as we revolutionize content monetization for influencers! We want to excel in offering meticulously crafted itineraries and premium digital content, merchandise, and listing of clothing brands...
      </p>
    </div>

    {/* Right Image Section */}
    <div className="sm:w-1/2 w-full flex justify-center">
      <Image
        src={contactimage}
        alt="Contact Image"
        className="rounded-2xl w-[80%] sm:w-[60%] md:w-[70%]"
        width={512}
        height={512}
      />
    </div>
  </div>
</div>

{/* Contact Section */}
<div name="contact" className="w-full bg-[#FFFFFF] pt-24 px-4 sm:px-8 lg:px-16 pb-10 text-black">
  <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-12">

    {/* Left Info Section */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left mb-4">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-2">
        Phone Number: <span className="text-teal-900 font-semibold">8383877065</span>
      </p>
      <p className="text-gray-600 mb-2">
        Email: <span className="text-teal-900 font-semibold">support@vybstore.com</span>
      </p>
      <p className="text-gray-600 mb-6">
        Location: <span className="text-teal-900 font-semibold">Delhi</span>
      </p>

      {/* Social Icons (only on small screens) */}
      <div className="flex justify-center md:hidden mb-6">
        <ul className="flex space-x-4">
          {links.map(({ id, child, href, download }) => (
            <li key={id} className="p-3 bg-gray-500 hover:bg-gray-600 rounded-full">
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right Contact Form */}
    <div className="w-full md:w-1/2">
      <form
        action="https://getform.io/f/apjmlzpa"
        method="POST"
        className="flex flex-col w-full space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-3 bg-transparent border border-black rounded-md text-black focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 bg-transparent border border-black rounded-md text-black focus:outline-none"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          className="p-3 bg-transparent border border-black rounded-md text-black focus:outline-none"
        />
        <button className="bg-teal-900 text-white py-3 px-6 rounded-md hover:bg-teal-800 transition-all duration-300">
          Send
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default ContactPage;