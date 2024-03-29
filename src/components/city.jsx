import React from "react";
import { ImLocation } from "react-icons/im";
import { GoArrowSwitch } from "react-icons/go";
import { RxCalendar } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";

export const City = () => {
  return (
    <div className="flex flex-col bg-white mt-4 rounded-3xl px-4 text-sm font-semibold">
      <div className="flex space-x-6 mx-4 my-4">
        <div className="flex space-x-4 rounded-full py-3 px-6 text-gray-700 bg-gray-200 justify-center items-center">
          <ImLocation className="mt-1" size={20} />
          <h1 className="whitespace-nowrap">NEW YORK (JFK)</h1>

          <ImLocation className="mt-1" size={20} />
          <span className="bg-[#425C5A] h-8 w-8 rounded-full flex items-center justify-center">
            <GoArrowSwitch className="text-white" size={20} />
          </span>

          <h1 className="whitespace-nowrap">MUMBAI (BOM)</h1>
        </div>
        <div className=" text-gray-700 rounded-full space-x-4 py-3 px-6 bg-gray-200 flex justify-center items-center">
          <RxCalendar className="mt-1" size={20} />
          <h1 className="whitespace-nowrap">21 July 1999</h1>
        </div>
        <div className=" text-gray-700 rounded-full space-x-4 py-3 px-6 bg-gray-200 flex justify-center items-center">
          <FaUser className="mt-1" size={20} />
          <h1 className="whitespace-nowrap">2 TRAVELERS</h1>
        </div>
      </div>
      <div className="flex space-x-6 mx-4 mb-4">
        <div className="flex space-x-14 rounded-full px-6 text-gray-700 bg-gray-200 justify-center items-center">
          <h1 className="bg-[#425C5A] text-white rounded-full px-10 -mx-5 py-4">
            ONE WAY
          </h1>
          <h1 className="whitespace-nowrap">ONE TRIP</h1>
          <h1 className="whitespace-nowrap">MULTI CITY</h1>
        </div>

        <div className="text-gray-700 rounded-full space-x-4 px-5 bg-gray-200 flex justify-center items-center">
          <PiArmchairFill size={20} />
          <h1 className="whitespace-nowrap">FIRST CLASS</h1>
        </div>

        <div className="text-white rounded-full px-14 bg-[#C99C33] flex justify-center items-center cursor-pointer">
          <h1 className="whitespace-nowrap">SEARCH</h1>
        </div>
      </div>
    </div>
  );
};
