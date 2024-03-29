import React from "react";

export const Results = () => {
  return (
    <div className="flex flex-col space-y-6 mb-2">
      <div>
        <h1 className="text-gray-600 font-bold">RESULTS (25)</h1>
      </div>
      <div className="flex flex-col space-y-0">
        <div className="flex relative bg-white border-b border-dashed text-gray-600 space-x-8 px-6 py-4 rounded-t-3xl justify-center items-center">
          <div>
            <img src="/images/emirate.PNG" alt="" />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className=" text-3xl">JFK</h1>
            <p className="text-xs">13:00</p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-xs font-semibold ml-2">EMIRATE</p>
              <p className="text-sm font-semibold ml-2 text-[#C99C33]">11H 20M</p>
            </div>
            <div className="text-md whitespace-nowrap">NON-STOP</div>
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 className="text-3xl">BOM</h1>
            <p className="text-xs">14:20</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-xs font-bold">$1,572</p>
            <button className="bg-[#C99C33] text-white px-4 whitespace-nowrap py-2 text-xs rounded-full">
              BOOK NOW
            </button>
            <div className="w-5 h-5 bg-[#DADDE2] absolute rounded-full z-10 -bottom-3 -right-2"></div>
            <div className="w-5 h-5 bg-[#DADDE2] absolute rounded-full z-10 -left-2 -bottom-3"></div>
          </div>
        </div>
        <div className="flex relative bg-white border-b border-dashed text-gray-600 space-x-8 px-6 py-4 justify-center items-center">
          <div>
            <img src="/images/qatar.PNG" alt="qatar" />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className=" text-3xl">JFK</h1>
            <p className="text-xs">13:00</p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-xs font-semibold whitespace-nowrap">QATAR AIRWAY</p>
              <p className="text-sm font-semibold ml-2 text-[#C99C33]">11H 20M</p>
            </div>
            <div className="text-md whitespace-nowrap">NON-STOP</div>
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 className="text-3xl">BOM</h1>
            <p className="text-xs">14:20</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-xs font-bold">$2,072</p>
            <button className="bg-[#C99C33] whitespace-nowrap text-white px-4 py-2 text-xs rounded-full">
              BOOK NOW
            </button>
            <div className="w-5 h-5 bg-[#DEE1E6] absolute rounded-full -bottom-3 z-10 -right-2"></div>
            <div className="w-5 h-5 bg-[#DEE1E5] absolute rounded-full -left-2 z-10 -bottom-3"></div>
          </div>
        </div>
        <div className="flex relative bg-white border-b border-dashed text-gray-600 space-x-8 px-6 py-4 justify-center items-center">
          <div>
            <img src="/images/luf.PNG" alt="" />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className=" text-3xl">JFK</h1>
            <p className="text-xs">13:00</p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-xs font-semibold">LUFTHANSA</p>
              <p className="text-sm font-semibold ml-2 text-[#C99C33]">11H 20M</p>
            </div>
            <div className="text-md whitespace-nowrap">NON-STOP</div>
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 className="text-3xl">BOM</h1>
            <p className="text-xs">14:20</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-xs font-bold">$1,872</p>
            <button className="bg-[#C99C33] text-white px-4 whitespace-nowrap py-2 text-xs rounded-full">
              BOOK NOW
            </button>
            <div className="w-5 h-5 bg-[#E1E3E7] absolute rounded-full z-10 -bottom-3 -right-2"></div>
            <div className="w-5 h-5 bg-[#E1E3E7] absolute rounded-full z-10 -left-2 -bottom-3"></div>
          </div>
        </div>
        <div className="relative flex bg-white text-gray-600 space-x-8 rounded-b-3xl px-6 py-4 justify-center items-center">
          <div>
            <img src="/images/emirate.PNG" alt="" />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className=" text-3xl">JFK</h1>
            <p className="text-xs">13:00</p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-xs font-semibold ml-2">EMIRATE</p>
              <p className="text-sm font-semibold ml-2 text-[#C99C33]">11H 20M</p>
            </div>
            <div className="text-md whitespace-nowrap">NON-STOP</div>
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 className="text-3xl">BOM</h1>
            <p className="text-xs">14:20</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-xs font-bold">$1,872</p>
            <button className="bg-[#C99C33] whitespace-nowrap text-white px-4 py-2 text-xs rounded-full">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
