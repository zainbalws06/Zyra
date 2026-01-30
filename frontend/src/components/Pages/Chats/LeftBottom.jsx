import React from "react";

const LeftBottom = () => {
  return (
    <div className=" border text-white bg-[#26273d] pl-2 border-b cursor-pointer border-gray-700 flex-1 max-h-15 flex flex-row items-center gap-1 ">
      <i className=" fa-solid fa-circle-user text-4xl"></i>
      <div>
        <p className="font-semibold">Zain Baloch</p>
        <p className="text-sm text-gray-400 font-semibold ">Settings</p>
      </div>
    </div>
  );
};

export default LeftBottom;
