import React from "react";
import { CurvedLine } from "./curvedLine";
import { BiSolidUpArrow } from "react-icons/bi";

export const Map = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="space-x-3">
        <button className="bg-white text-gray-600 px-6 font-semibold py-2 text-xs rounded-full">
          FILTER
        </button>
        <select className="bg-white text-gray-600 px-4 font-semibold py-2 text-xs rounded-full">
  <option value="1">TICKET OF CLASS 1</option>
  <option value="2">TICKET OF CLASS 2</option>
  <option value="3">TICKET OF CLASS 3</option>
</select>

      </div>
      <div className="flex flex-col bg-[#425C5A] rounded-3xl p-4">
        <div className="flex space-x-10">
          <div className="flex flex-col">
            <p className="text-xs">FROM</p>
            <h1 className="text-xl">JFK</h1>
          </div>
          <div className="mt-4">
            <p>NON-STOP</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">TO</p>
            <h1 className="text-xl">BOM</h1>
          </div>
        </div>
        <div>
          <img src="/images/curve.PNG" alt="" />
        </div>
        <div className="bg-[#3D5654] px-6 -mx-4 rounded-b-3xl pb-6 -mb-4 relative">
          <div className="flex space-x-2 mt-4 justify-center items-center">
            <button className="bg-[#C99C33] whitespace-nowrap text-white px-4 py-2 text-xs rounded-full">
              NON-STOP
            </button>
            <p className="text-xs whitespace-nowrap">ONE STOP</p>
            <p className="text-xs whitespace-nowrap">MORE STOP</p>
          </div>
          <div>
            <div className="border-b border-gray-500 my-2 pb-2">
              <p className="text-xs">PRICE</p>
              <div className="w-4 h-4 rounded-full bg-[#C99C33] cursor-pointer absolute right-20 bottom-15"></div>
              <div className="w-4 h-4 rounded-full bg-[#C99C33] cursor-pointer absolute left-14 bottom-15"></div>
            </div>
            <div className="flex space-x-16 ml-2 mt-4">
              <div >
              <BiSolidUpArrow size={20} className="text-[#C99C33] -mb-1 ml-6" />
                <p className=" px-4 bg-[#C99C33] rounded-full">$500</p>
              </div>
              <div >
              <BiSolidUpArrow size={20} className="text-[#C99C33] -mb-1 ml-7" />
                <p className=" px-4 bg-[#C99C33] rounded-full">$2500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
