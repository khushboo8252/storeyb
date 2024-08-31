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
      <div name="home" className='w-full pt-12 sm:h-screen bg-gradient-to-b bg-[#FFFFFF] '>
        <div className='max-w-screen-lg mx-auto flex flex-col mt-10 h-full px-4 sm:flex-row'>
          <div className='flex flex-col h-full pt-10'>
            <h2 className='text-3xl sm:text-4xl font-bold text-black text-center mb-10'>
              Hey! We Are VYB Store
            </h2>
            <h2 className='text-2xl sm:text-3xl font-bold text-black text-center mb-4'>
              Our Objective
            </h2>
            <p className='text-black py-4 max-w-md mx-auto'>
              Join us exclusively as we revolutionize content monetization for influencers! We want to excel
              in offering meticulously crafted itineraries and premium digital content, merchandise, and listing
              of clothing brands. Our upcoming features will empower creators and influencers to kickstart their
              businesses effortlessly, without the need for their own websites. Say goodbye to the hassle of
              dealing with developers and hello to unleashing your creativity! Partner with us now and unlock
              the full potential to monetize your content.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src={contactimage}
              alt="Profile"
              className='rounded-2xl w-2/3 md:w-[70%] mx-auto'
              width={512} // Set appropriate width
              height={512} // Set appropriate height
            />
          </div>
        </div>
      </div>

      <div name="contact" className='w-full bg-gradient-to-b bg-[#FFFFFF] pt-24 p-4 text-black'>
        <div className='flex flex-col md:flex-row md:justify-between max-w-screen-lg mx-auto'>
          
          {/* Details Section */}
          <div className='flex flex-col w-full md:w-1/2 p-4'>
            <div className='pb-8'>
              <p className='text-4xl font-bold text-center md:text-left py-2 text-black'>
                Contact Us
              </p>
              <p className='text-gray-500 mt-5'>
                Phone Number: <span className='text-teal-900 font-bold'>8383877065</span>
              </p>
              <p className='text-gray-500 mt-1'>
                Email: <span className='text-teal-900 font-bold'>support@vybstore.com</span>
              </p>
              <p className='text-gray-500 mt-1'>
                Location: <span className='text-teal-900 font-bold'>Delhi</span>
              </p>
            </div>
            <div className='flex justify-center md:hidden mb-4'>
              <ul className='flex space-x-4'>
                {links.map(({ id, child, download, href }) => (
                  <li
                    key={id}
                    className='flex justify-center items-center p-3 bg-gray-500 rounded-md hover:bg-gray-600 duration-300 cursor-pointer'
                  >
                    <a
                      href={href}
                      className='flex font-bold text-white'
                      download={download}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Form Section */}
          <div className='flex flex-col w-full md:w-1/2 p-4'>
            <form
              action="https://getform.io/f/apjmlzpa"
              method='POST'
              className='flex flex-col w-full'
            >
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                className='p-2 mb-4 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'
              />
              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                className='p-2 mb-4 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'
              />
              <textarea
                name="message"
                rows="6"
                placeholder='Enter your message'
                className='p-2 mb-4 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'
              />
              <button className='text-white bg-teal-900 px-6 py-3 rounded-md hover:bg-teal-800 duration-300'>
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