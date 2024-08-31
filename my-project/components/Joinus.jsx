"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import signup from "../public/signup.gif";
import build from "../public/build.gif";
import call from "../public/call.gif";
import earngraph from "../public/earngraph.gif";

const Joinus = () => {
  const router = useRouter();

  const handleJoinNowClick = () => {
    router.push("/login"); // Adjust the path if your login page is located somewhere else
  };

  return (
    <div className="overflow-visible rounded-none opacity-100 self-start min-w-0 order-2 min-h-[60px] flex-grow m-0 z-10 bg-white">
      <div className="flex justify-start gap-12 bg-white mb-20">
        <div className="sticky top-40 flex flex-col items-start w-100 h-72 ml-40 gap-5 mt-32 bg-teal-900 rounded-3xl">
          <div className="flex flex-col gap-7">
            <h3 className="font-sans text-2xl font-bold text-white ml-5 mt-5">
              Start Vybing with us!
            </h3>
            <p className="font-sans text-lg font-medium text-white ml-5">
              &quot;We help influencers make money by monetizing their travel plans, merchandise, digital goods, and more.&quot;
            </p>
          </div>
          <button
            className="bg-[#00DC82] w-36 h-11 font-urbanist text-lg font-semibold text-black text-center rounded-lg ml-5"
            onClick={handleJoinNowClick}
          >
            Join Now
          </button>
        </div>

        <div className="grid gap-6 grid-rows-3 w-full">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center mt-10">
              <div className="bg-teal-900 flex items-center justify-center w-14 h-14 rounded-lg font-urbanist text-2xl font-bold text-white">
                1
              </div>
              <div className="bg-gray-300 w-0.5 h-screen"></div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E5F0F1] p-6 rounded-2xl shadow-lg mt-10 mr-20">
              <h4 className="font-sans text-2xl font-bold text-gray-800 ml-5">
                Sign Up and create your own store hassle-free.
              </h4>
              <p className="font-sans text-lg font-medium text-gray-800 ml-5">
                Join us via Google Sign-In and verify your influencer status by entering your social media ID and unlock your store at zero cost.
              </p>
              <Image
                src={signup}
                alt="Step 1"
                className="rounded-lg w-[250px] h-full ml-[25%]"
                width={250} // Set appropriate width
                height={843} // Set appropriate height
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center mt-10">
              <div className="bg-teal-900 flex items-center justify-center w-14 h-14 rounded-lg font-urbanist text-2xl font-bold text-white">
                2
              </div>
              <div className="bg-gray-300 w-0.5 h-screen"></div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E5F0F1] p-6 rounded-2xl shadow-lg mt-10 mr-20">
              <h4 className="font-sans text-2xl font-bold text-gray-800 ml-5">
                Build & customize your store front.
              </h4>
              <p className="font-sans text-lg font-medium text-gray-800 ml-5">
                Simply fill in the details to build your digital store. Once done, start selling your products to your audience.
              </p>
              <Image
                src={build}
                alt="Step 2"
                className="rounded-lg w-[250px] h-full ml-[25%]"
                width={250} // Set appropriate width
                height={843} // Set appropriate height
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center mt-10">
              <div className="bg-teal-900 flex items-center justify-center w-14 h-14 rounded-lg font-urbanist text-2xl font-bold text-white">
                3
              </div>
              <div className="bg-gray-300 w-0.5 h-screen"></div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E5F0F1] p-6 rounded-2xl shadow-lg mt-10 mr-20">
              <h4 className="font-sans text-2xl font-bold text-gray-800 ml-5">
                Call the audience to your store. Easily integrate links into content.
              </h4>
              <p className="font-sans text-lg font-medium text-gray-800 ml-5">
                After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together!
              </p>
              <Image
                src={call}
                alt="Step 3"
                className="rounded-lg w-[250px] h-full ml-[25%]"
                width={250} // Set appropriate width
                height={843} // Set appropriate height
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center mt-10">
              <div className="bg-teal-900 flex items-center justify-center w-14 h-14 rounded-lg font-urbanist text-2xl font-bold text-white">
                4
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E5F0F1] p-6 rounded-2xl shadow-lg mt-10 mr-20">
              <h4 className="font-sans text-2xl font-bold text-gray-800 ml-5">
                &quot;Monetize your influencer status: Earn money adding real value to your true followers!&quot;
              </h4>
              <p className="font-sans text-lg font-medium text-gray-800 ml-5">
                Let VYB the money now!! It&apos;s here and withdraw it periodically.
              </p>
              <Image
                src={earngraph}
                alt="Step 4"
                className="rounded-lg w-[250px] h-full ml-[25%]"
                width={250} // Set appropriate width
                height={843} // Set appropriate height
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
