import React from "react";

const LeftMidSingle = ({ title, lastMsg }) => {
  return (
    <div className=" cursor-pointer text-white pl-2 border-b border-gray-700 flex-1 max-h-15 flex flex-row items-center gap-1 ">
      <i className=" fa-solid fa-circle-user text-4xl"></i>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400 font-semibold">{lastMsg}</p>
      </div>
    </div>
  );
};

export default LeftMidSingle;
