import { City } from "@/components/city";
import { Map } from "@/components/map";
import { Results } from "@/components/results";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="text-white justify-center items-center w-full flex space-x-8 rounded-3xl mb-10 mt-40 mr-20 ml-60 pr-10 bg-gradient-to-b from-gray-300 to-gray-200 shadow-lg" style={{transformOrigin: 'top left', transform: 'scale(0.8)'}}>
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col space-y-6">
        <div>
          <City />
        </div>
        <div className="flex space-x-6">
          <Results />
          <Map />
        </div>
      </div>
    </div>
  );
};
