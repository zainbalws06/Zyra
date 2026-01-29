import React from "react";
import LeftTop from "./LeftTop";
import LeftMidContacts from "./LeftMidContacts";
import LeftBottom from "./LeftBottom";

const Left = () => {
  return (
    <div className=" bg-[#191A36] flex w-30 flex-col h-screen md:w-md">
      <LeftTop />
      <LeftMidContacts />
      <LeftBottom />
    </div>
  );
};

export default Left;
