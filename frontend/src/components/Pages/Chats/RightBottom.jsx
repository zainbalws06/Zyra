import React from "react";

const RightBottom = () => {
  return (
    <div className=" bg-[#191A36] flex-[0.6] ">
      <div className="flex h-full w-full items-center gap-4">
        <input
          type="search"
          placeholder="Search..."
          className="bg-gray-700 h-[80%] w-[70%] ml-10 pl-5 rounded-lg text-white"
        ></input>
        <button
          type="submit"
          className=" shadow-white/20 shadow-inner bg-[#593CCA] cursor-pointer p-2 rounded-md font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70] text-white mr-10 w-"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default RightBottom;
