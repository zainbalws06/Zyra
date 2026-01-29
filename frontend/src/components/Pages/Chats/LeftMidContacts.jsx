import React from "react";
import LeftMidSingle from "./LeftMidSingle";
import LeftMidSearch from "./LeftMidSearch";

const LeftMidContacts = () => {
  return (
    <div className="flex-6 flex flex-col">
      <LeftMidSearch />
      <LeftMidSingle />
      <LeftMidSingle />
      <LeftMidSingle />
    </div>
  );
};

export default LeftMidContacts;
