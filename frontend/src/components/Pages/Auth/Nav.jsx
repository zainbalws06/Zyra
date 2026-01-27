import React from "react";

const Nav = ({ mode, setMode }) => {
  function changeMode(val) {
    setMode(val);
  }
  return (
    <div className={`flex justify-between border-[#272944] border-b-2 `}>
      <div
        className={` block w-1/2 text-center h-10 rounded-sm  ${mode === "login" ? "border-b-2 border-purple-900" : "hover:shadow-white/5 hover:shadow-inner"} `}
      >
        <button
          onClick={() => {
            changeMode("login");
          }}
          className="w-full h-full cursor-pointer"
        >
          Login
        </button>
      </div>

      <div
        className={`block w-1/2 text-center h-10 py-2 rounded-sm  ${mode === "signup" ? "border-b-2 border-purple-900" : "hover:shadow-white/5 hover:shadow-inner "}`}
      >
        <button
          onClick={() => {
            changeMode("signup");
          }}
          className="w-full h-full cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
