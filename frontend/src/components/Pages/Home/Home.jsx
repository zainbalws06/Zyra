import React from "react";
import UpperBox from "./UpperBox";
import BottomBox from "./BottomBox";

const Home = () => {
  return (
    <div className="p-10    flex items-center justify-center flex-col gap-4">
      <UpperBox />
      <BottomBox />
    </div>
  );
};

export default Home;
