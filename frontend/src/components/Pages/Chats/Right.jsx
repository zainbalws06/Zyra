import React from "react";
import RightTop from "./RightTop";
import RightBottom from "./RightBottom";
import RightMidChat from "./RightMidChat";

const Right = () => {
  return (
    <div className="w-full bg-amber-500 h-screen">
      <RightTop />
      <RightMidChat />
      <RightBottom />
    </div>
  );
};

export default Right;
