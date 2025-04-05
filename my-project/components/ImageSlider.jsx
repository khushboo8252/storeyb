import React from 'react';
import Image from 'next/image';
import imageslider from "../public/imageslider.gif";

const ImageSlider = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-none sm:rounded-lg">
      {/* Responsive Image */}
      <Image
        src={imageslider}
        alt="Image Slider"
        fill
        className="object-cover w-full h-full"
        quality={100}
        priority
      />

      {/* CTA Button */}
      <button className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-teal-900 text-white text-sm sm:text-base font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-xl shadow-md hover:bg-teal-800 transition-all duration-300">
        Start Selling
      </button>
    </div>
  );
};

export default ImageSlider;
