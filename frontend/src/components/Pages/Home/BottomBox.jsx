import React from "react";
import Nav from "./Nav";
import LoginForm from "./LoginForm";
const BottomBox = () => {
  return (
    <div className="h-full pb-10 w-140 bg-white rounded-2xl">
      <Nav />
      <LoginForm />
    </div>
  );
};

export default BottomBox;
