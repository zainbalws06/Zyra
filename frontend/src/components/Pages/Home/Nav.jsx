import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between p-5 ">
      <div className="block bg-amber-600 w-1/2 text-center h-10 py-2 rounded-sm">
        <button className="w-full h-full">Login</button>
      </div>
      <div className="bg-blue-400 w-1/2 text-center h-10 py-2 rounded-sm">
        <button className="w-full h-full">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
