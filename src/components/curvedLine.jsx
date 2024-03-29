import React from "react";

export const CurvedLine = () => {
  return (
    <svg width="200" height="100">
      <circle cx="10" cy="50" r="3" fill="red" />
      
      <path
        d="M10 50 Q 95 10 180 50"
        fill="none"
        stroke="red"
        strokeWidth="2"
      />

      <circle cx="180" cy="50" r="3" fill="red" />
    </svg>
  );
};
