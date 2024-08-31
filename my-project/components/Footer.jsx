import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-16 rounded-none mt-10 p-11 pt-0 bg-white min-w-[280px] min-h-[500px] w-full m-0 z-7'>
      <div className='flex flex-col items-center justify-start gap-16 max-w-[730px] w-full h-max m-0 z-6'>
        <div className='flex flex-col items-center justify-start gap-4'>
          <h3 className='text-[27px] font-bold leading-none text-center text-teal-900'>
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className='text-[16px] font-medium leading-none text-teal-900 max-w-[619px]'>
            Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for? Check out our full documentation.
          </div>
        </div>
        <div className='grid gap-4 grid-cols-1 auto-rows-min w-full max-w-[730px]'>
          {[
            "How does the VYB Store work?",
            "How do I get started with the VYB Store?",
            "What does “Zero Cost” mean?",
            "How do I track my earnings on VYB Store?",
            "What kind of products can I sell on VYB Store?",
            "How do I withdraw my earnings?",
            "How can I get support if I have any questions or issues?",
            "Do I need technical skills to use the platform?",
            "We didn&apos;t find any account with those login credentials?",
            "This email is already in use?",
          ].map((question, index) => (
            <div key={index} className='flex bg-[#E5F0F1] rounded-3xl mx-5 p-4 w-full max-w-[730px]'>
              <div className='text-[16px] font-bold text-teal-900 flex-grow'>
                {question}
              </div>
              <button className='w-5 h-5 text-teal-900'>
                <IoMdAdd />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer;
