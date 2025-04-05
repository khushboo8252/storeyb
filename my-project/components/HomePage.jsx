import React from "react";
import Image from "next/image";
import travel from "../public/travel.png";
import custom from "../public/custom.png";
import digital from "../public/digital.png";
import fashion from "../public/fashion.png";

const Video = () => {
  return (
    <div className="w-full">
      {/* Video Section */}
      <div className="pt-10 sm:pt-20 md:pt-24">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover rounded-none"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Features Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-10">
        {[ 
          { img: travel, alt: "travel", label: "Travel Itinerary" },
          { img: custom, alt: "custom", label: "Custom Merchandise" },
          { img: digital, alt: "digital", label: "Digital Content" },
          { img: fashion, alt: "fashion", label: "Fashion Brand" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 bg-white"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={128}
              height={128}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
            <h3 className="mt-4 text-center text-base sm:text-lg font-semibold text-gray-800">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
