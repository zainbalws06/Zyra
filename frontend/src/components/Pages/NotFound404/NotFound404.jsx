import React from "react";
import UpperBox from "../Auth/UpperBox";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };
  return (
    <div className="bg-[#191A36] flex items-center justify-between flex-col min-h-screen w-full">
      <div className=" p-3 w-full max-w-md text-white font-semibold  flex justify-center">
        <p className=" text-4xl pt-10 ">
          <i className="fa-solid fa-comment-dots text-[#865CE9]"></i> Zyra
        </p>
      </div>
      <div className="flex-col text-center p-4 items-center  flex justify-center gap-3 absolute top-55">
        <p className="text-[#703aee] text-shadow-black/70 text-shadow-md text-8xl font-bold">
          404
        </p>
        <p className="text-white text-4xl font-semibold pb-3">Page not found</p>
        <p className="text-gray-400 text-md">
          Oops.. The page you're looking for doesn't seem to exist.
        </p>
        <button
          onClick={() => {
            navigator();
          }}
          className=" shadow-white/30 shadow-inner bg-[#593CCA] cursor-pointer w-xs p-2 rounded-md mt-5 font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70]"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
