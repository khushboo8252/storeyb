import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-12 md:gap-16 bg-white min-w-[280px] w-full px-4 sm:px-6 md:px-10 py-10 md:py-16 mt-10">
      <div className="flex flex-col items-center justify-start gap-8 md:gap-12 w-full max-w-[1200px]">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 text-center px-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 leading-snug">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <p className="text-sm sm:text-base font-medium text-teal-900 max-w-xl">
            Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for? Check out our full documentation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 gap-4 w-full">
          {[
            "How does the VYB Store work?",
            "How do I get started with the VYB Store?",
            "What does “Zero Cost” mean?",
            "How do I track my earnings on VYB Store?",
            "What kind of products can I sell on VYB Store?",
            "How do I withdraw my earnings?",
            "How can I get support if I have any questions or issues?",
            "Do I need technical skills to use the platform?",
            "We didn’t find any account with those login credentials?",
            "This email is already in use?",
          ].map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#E5F0F1] rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm sm:text-base font-semibold text-teal-900 flex-1 pr-2">
                {question}
              </p>
              <button className="text-teal-900 text-xl md:text-2xl flex-shrink-0">
                <IoMdAdd />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
