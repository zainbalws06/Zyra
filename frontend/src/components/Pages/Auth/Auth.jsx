import React from "react";
import UpperBox from "./UpperBox";
import BottomBox from "./BottomBox";
import { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="p-4 sm:p-10 bg-[#191A36] flex items-center justify-center flex-col gap-4 min-h-screen w-full">
      <UpperBox />
      <BottomBox mode={mode} setMode={setMode} />
    </div>
  );
};

export default Auth;
