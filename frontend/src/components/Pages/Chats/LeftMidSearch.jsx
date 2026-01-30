import React from "react";

const LeftMidSearch = () => {
  return (
    <div className="flex bg-[#191A36] flex-row items-center h-15 justify-center text-center border-gray-700 border">
      <div className="h-full w-full flex justify-center items-center relative">
        <i className="fas fa-search text-white absolute left-[14%]"></i>
        <input
          type="search"
          placeholder="Search..."
          className="bg-gray-700 h-[80%] rounded-lg pl-[12%] text-white"
        ></input>
      </div>
    </div>
  );
};

export default LeftMidSearch;
