import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { TbPlaneTilt } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbChartPie } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import { CurvedLine } from "./curvedLine";

export const Sidebar = () => {
  const items = [
    { icon: <BsHouseDoor size={20} />, text: "Dashboard" },
    { icon: <TbPlaneTilt size={20} />, text: "Flights" },
    { icon: <LuWallet size={20} />, text: "Wallet" },
    { icon: <MdOutlineLibraryBooks size={20} />, text: "Reports" },
    { icon: <TbChartPie size={20} />, text: "Statistics" },
    { icon: <FiSettings size={20} />, text: "Settings" },
  ];

  return (
    <div>
      <div className="bg-[#3D5654] w-60 h-60 flex flex-col rounded-t-3xl justify-center items-center">
        <div className="flex-col border-2 border-red-500 rounded-full h-20 w-20 flex justify-center items-center">
          <Image
            src="/images/martins.jpg"
            alt="profile"
            className="h-16 w-16 rounded-full"
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-lg font-medium text-center uppercase mt-2">
          Alex Johnson
        </h1>
        <p className="text-xs mt-1">alex.johnson@gmail.com</p>
      </div>

      <div className="bg-[#425C5A] p-4 w-60 rounded-b-3xl">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mt-2 ${
              item.text === "Flights"
                ? "bg-[#D9DDE2] text-gray-700 py-2 rounded-l-full pl-2 -mr-4"
                : ""
            }`}
          >
            <span className="mr-4 ml-1 text-[#C99C33]">{item.icon}</span>
            <p className="uppercase my-1 font-sm cursor-pointer text-sm">
              {item.text}
            </p>
          </div>
        ))}
        <div className="ml-2 mt-2">
          <h1 className="text-[#C99C33] capitalize">Active Users</h1>
          <Image
            src="/images/people.png"
            alt="people"
            className=" mt-1.5"
            width={400}
            height={200}
          />
          <Image
            src="/images/image.PNG"
            alt=""
            className=""
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
