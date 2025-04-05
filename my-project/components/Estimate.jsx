import React from 'react';

const Estimate = () => {
  return (
    <div className="flex flex-col bg-[#E5F0F1] justify-start items-center py-12 px-4 sm:px-6 md:px-8 lg:px-16 rounded-none min-w-[280px] min-h-[500px] w-full mt-16 z-7">
      <div className="flex flex-col justify-start items-center gap-10 w-full max-w-[1200px]">
        <h3 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-[#000000]">
          ESTIMATE EARNING POTENTIAL
        </h3>

        {/* Responsive layout: column on mobile, row on medium and up */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-28 w-full">
          
          {/* Input Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* Followers Section */}
            <div className="text-left font-medium text-base sm:text-lg text-black mx-2">
              How many followers do you have?
            </div>
            <div className="relative flex items-center w-full px-2 mx-2">
              <div className="bg-white border border-black h-10 w-full flex items-center relative rounded-md">
                <span className="absolute left-0 top-0 h-full w-5 bg-teal-900 rounded-l-md"></span>
                <input
                  type="text"
                  className="pl-6 pr-2 bg-transparent outline-none w-full text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="text-center border border-teal-900 shadow-sm font-medium text-base text-black py-2 px-4 rounded-lg w-fit mx-auto">
              10 k
            </div>

            {/* Products Section */}
            <div className="text-left font-medium text-base sm:text-lg text-black mx-2">
              How many products do you list monthly?
            </div>
            <div className="relative flex items-center w-full px-2 mx-2">
              <div className="bg-white border border-black h-10 w-full flex items-center relative rounded-md">
                <span className="absolute left-0 top-0 h-full w-5 bg-teal-900 rounded-l-md"></span>
                <input
                  type="text"
                  className="pl-6 pr-2 bg-transparent outline-none w-full text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="text-center border border-teal-900 shadow-sm font-medium text-base text-black py-2 px-4 rounded-lg w-fit mx-auto">
              1
            </div>
          </div>

          {/* Earnings Section */}
          <div className="flex flex-col justify-start gap-10 w-full md:w-1/2 max-w-[400px] self-center">
            <div className="flex flex-col justify-start gap-4 text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000]">
                Monthly Earning
              </h4>
              <h1 className="text-teal-900 font-semibold text-[32px] sm:text-[36px] md:text-[40px]">
                ₹15000
              </h1>
            </div>

            <div className="flex flex-col justify-start gap-4 text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000]">
                Yearly Earning
              </h4>
              <h1 className="text-teal-900 font-semibold text-[32px] sm:text-[36px] md:text-[40px]">
                ₹180000
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
