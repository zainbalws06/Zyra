import React from "react";
import RightTop from "./RightTop";
import RightBottom from "./RightBottom";
import RightMidChat from "./RightMidChat";

const Right = () => {
  return (
    <div className="w-full bg-[#191A36]  h-screen flex flex-col">
      <RightTop />
      <RightMidChat />
      <RightBottom />
    </div>
  );
};

export default Right;
