import React from "react";

const UpperBox = () => {
  return (
    <div>
      <div className=" p-3 w-full max-w-md text-white font-semibold  flex justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl">
          <i className="fa-solid fa-comment-dots text-[#865CE9]"></i> Zyra
        </p>
      </div>
      <div className=" text-sm sm:text-base text-white font-semibold  flex justify-center">
        <p>Connect. Chat. Instantly.</p>
      </div>
    </div>
  );
};

export default UpperBox;
