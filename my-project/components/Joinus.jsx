"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import signup from "../public/signup.gif";
import build from "../public/build.gif";
import call from "../public/call.gif";
import earngraph from "../public/earngraph.gif";

const Joinus = () => {
  const router = useRouter();

  const handleJoinNowClick = () => {
    router.push("/login");
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Card CTA */}
        <div className="sticky top-28 flex flex-col justify-between bg-teal-900 text-white rounded-2xl p-6 w-full lg:w-[30%] h-fit shadow-md">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Start Vybing with us!</h3>
            <p className="text-base font-medium">
              We help influencers make money by monetizing their travel plans, merchandise, digital goods, and more.
            </p>
          </div>
          <button
            onClick={handleJoinNowClick}
            className="mt-6 bg-[#00DC82] text-black font-semibold py-2 px-5 rounded-lg hover:bg-[#00c973] transition-all duration-200"
          >
            Join Now
          </button>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-12 w-full">
          {[
            {
              step: "1",
              title: "Sign Up and create your own store hassle-free.",
              desc: "Join us via Google Sign-In and verify your influencer status by entering your social media ID and unlock your store at zero cost.",
              image: signup,
            },
            {
              step: "2",
              title: "Build & customize your store front.",
              desc: "Simply fill in the details to build your digital store. Once done, start selling your products to your audience.",
              image: build,
            },
            {
              step: "3",
              title: "Call the audience to your store. Easily integrate links into content.",
              desc: "After setting up your products, it's time to go public. Put your store link in Insta bio and let's make your first post together!",
              image: call,
            },
            {
              step: "4",
              title: "Monetize your influencer status: Earn money adding real value to your true followers!",
              desc: "Let VYB the money now!! It's here and withdraw it periodically.",
              image: earngraph,
            },
          ].map((stepData, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Step Indicator */}
              <div className="flex flex-col items-center pt-3">
                <div className="bg-teal-900 text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold">
                  {stepData.step}
                </div>
                {i !== 3 && (
                  <div className="bg-gray-300 w-0.5 h-full mt-2" />
                )}
              </div>

              {/* Step Content */}
              <div className="bg-[#E5F0F1] rounded-2xl p-6 flex flex-col gap-4 shadow-md w-full">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {stepData.title}
                </h4>
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  {stepData.desc}
                </p>
                <div className="flex justify-center">
                  <Image
                    src={stepData.image}
                    alt={`Step ${stepData.step}`}
                    width={250}
                    height={200}
                    className="rounded-lg w-[250px] sm:w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joinus;
