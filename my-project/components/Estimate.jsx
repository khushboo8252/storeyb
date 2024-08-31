import React from 'react';

const Estimate = () => {
  return (
    <div className="flex flex-col bg-[#E5F0F1] justify-start items-center rounded-none py-16 px-2 opacity-100 self-center min-w-[280px] min-h-[500px] w-full mt-16 z-7">
      <div className="flex flex-col justify-start items-center gap-14 rounded-none opacity-100 w-full max-w-[866px]">
        <h3 className="text-center font-bold text-[25px] text-[#000000]">
          ESTIMATE EARNING POTENTIAL
        </h3>
        <div className="flex flex-row justify-start items-start gap-28 w-full">
        <div className="flex flex-col gap-4 w-full">
  {/* Followers Section */}
  <div className="text-left font-medium text-base text-black mx-2">
    How many followers do you have?
  </div>
  <div className="relative flex items-center w-full px-2 mx-2">
    <div className="bg-white border border-black h-5 w-full flex items-center relative">
      <span className="absolute left-0 top-[-8px] h-[calc(100%+16px)] w-5 bg-teal-900"></span>
      <input
        type="text"
        className="  pl-6 pr-2 bg-transparent outline-none"
        
      />
    </div>
  </div>
  <div className="text-center border border-teal-900 shadow-sm font-medium text-base text-black py-2 px-4 rounded-lg ml-[50%] mx-2 w-16">
    10 k
  </div>

  {/* Products Listed Monthly Section */}
  <div className="text-left font-medium text-base text-black mx-2">
    How many products do you list monthly?
  </div>
  <div className="relative flex items-center w-full px-2 mx-2 ">
    <div className="bg-white border border-black h-5 w-full flex items-center relative">
      <span className="absolute left-0 top-[-8px] h-[calc(100%+16px)] w-5 bg-teal-900"></span>
      <input
        type="text"
        className="  pl-6 pr-2 bg-transparent outline-none"
        
      />
    </div>
  </div>
  <div className="text-center border border-teal-900 shadow-sm font-medium text-base text-black py-2 px-4 rounded-lg ml-[50%] mx-2 w-12">
    1
  </div>
</div>

          <div className="flex flex-col justify-start gap-10 w-full max-w-[400px]">
            <div className="flex flex-col justify-start gap-6 self-end">
              <h4 className="text-center text-[22px] font-semibold text-[#000000] pr-10">
                Monthly Earning
              </h4>
              <h1 className="text-center text-teal-900 font-semibold text-[40px] pr-10">
                ₹15000
              </h1>
            </div>
            <div className="flex flex-col justify-start gap-6 self-end">
              <h4 className="text-center text-[22px] font-semibold text-[#000000] pr-10">
                Yearly Earning
              </h4>
              <h1 className="text-center text-teal-900 font-semibold text-[40px] pr-10">
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
