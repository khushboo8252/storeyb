import React from "react";
import Image from "next/image";
import travel from "../public/travel.png";
import custom from "../public/custom.png";
import digital from "../public/digital.png";
import fashion from "../public/fashion.png";

const Video = () => {
  return (
    <div>
      <div className="pt-10 sm:pt-24">
        <video src="/hero.mp4" autoPlay loop muted className="w-full h-auto">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-[80px] rounded-lg border-2 border-solid border-gray-200 p-4">
        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src={travel}
            alt="travel"
            width={128}
            height={128}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Travel Itinerary
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src={custom}
            alt="custom"
            width={128}
            height={143}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Custom Merchandise
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src={digital}
            alt="digital"
            width={128}
            height={129}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Digital Content
          </h3>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src={fashion}
            alt="fashion"
            width={128}
            height={97}
            className="w-24 h-24"
          />
          <h3 className="mt-2 text-center font-bold text-[1.25rem] text-gray-800">
            Fashion Brand
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Video;
