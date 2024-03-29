import React from "react";
import { Dashboard } from "../pages/dashboard";

export const DashboardLayout = () => {
  return (
    <div className="bg-gray-200 w-full h-screen relative overflow-hidden flex justify-center items-center">
      <div
        className="bg-[#D6A217] w-96 h-96 z-20 rounded-full absolute top-0 left-0"
        style={{ marginTop: "-10%", marginLeft: "-4%" }}
      ></div>
      <div
        className="bg-gray-200 z-10 w-full h-96 rounded-full absolute top-0 right-10"
        style={{ marginTop: "-6%", marginRight: "-4%" }}
      ></div>
      <div
        className="bg-gray-300 w-80 h-full absolute top-10 right-0"
        style={{ marginTop: "", marginRight: "" }}
      ></div>
      <div
        className="bg-gray-300 w-full h-96 rounded-full absolute bottom-0 left-0"
        style={{ marginBottom: "-6%", marginLeft: "-1%" }}
      ></div>
      <div className="absolute z-40 w-full h-full flex justify-center items-center">
        <Dashboard />
      </div>
    </div>
  );
};
