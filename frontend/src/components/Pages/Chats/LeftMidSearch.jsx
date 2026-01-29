import React from "react";

const LeftMidSearch = () => {
  return (
    <div className="flex bg-pink-600 flex-row items-center h-15 justify-center text-center border-gray-700 border">
      <div className="h-full w-full">
        {/* <i className="fas fa-search text-white "></i> */}
        <input
          type="search"
          placeholder="Search..."
          className="bg-gray-700 h-full rounded-lg pl-10 text-white"
        ></input>
      </div>
    </div>
  );
};

export default LeftMidSearch;
