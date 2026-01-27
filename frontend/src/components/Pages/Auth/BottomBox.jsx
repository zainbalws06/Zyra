import React from "react";
import Nav from "./Nav";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const BottomBox = ({ mode, setMode }) => {
  return (
    <div className="shadow-black/60 shadow-lg pb-10 w-full max-w-md bg-[#1F203C] text-white rounded-2xl">
      <Nav mode={mode} setMode={setMode} />
      {mode === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default BottomBox;
