import React from "react";
import LeftMidSingle from "./LeftMidSingle";
import LeftMidSearch from "./LeftMidSearch";

const LeftMidContacts = () => {
  return (
    <div className="flex-6 flex flex-col">
      <LeftMidSearch />
      <LeftMidSingle title="Ali Raza" lastMsg="Hey there!" />
      <LeftMidSingle title="Hamza" lastMsg="What are you doing?" />
      <LeftMidSingle title="Azan Ali" lastMsg="wassup" />
    </div>
  );
};

export default LeftMidContacts;
