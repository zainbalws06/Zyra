import React from "react";
import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pfp, setPfp] = useState("No file chosen");
  const [pic, setPic] = useState(null);
  const [eye, setEye] = useState(false);

  const changeEye = () => {
    let newEye = !eye;
    setEye(newEye);
  };

  const pfpChange = (val) => {
    setPfp(val);
  };
  const picChange = (val) => {
    setPic(val);
  };
  const nameChange = (val) => {
    setName(val);
  };
  const emailChange = (val) => {
    setEmail(val);
  };
  const passwordChange = (val) => {
    setPassword(val);
  };

  return (
    <div className="p-5">
      <form>
        <label htmlFor="name" className="font-medium block mt-2 mb-2 ">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => {
            nameChange(e.target.value);
          }}
          className=" block w-full outline-[#272944] outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner"
          id="name"
          type="text"
          required
          placeholder="Enter your name"
          name="name"
        ></input>

        <label htmlFor="email" className="font-medium  mt-5 block mb-2">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => {
            emailChange(e.target.value);
          }}
          className=" block w-full outline-[#272944] outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner"
          id="email"
          type="text"
          required
          placeholder="Enter your email"
          name="email"
        ></input>

        <label htmlFor="password" className="font-medium block mt-2 mb-2 ">
          Password
        </label>
        <div className=" flex flex-row relative">
          <input
            value={password}
            onChange={(e) => {
              passwordChange(e.target.value);
            }}
            className=" block w-full outline-[#272944] outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner"
            id="password"
            type={eye === false ? "password" : "text"}
            required
            placeholder="Enter your password"
            name="password"
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              changeEye();
            }}
            className="absolute right-2 top-2 text-sm"
          >
            <i
              className={`fa-solid fa-eye ${eye === true ? "text-blue-400" : ""}`}
            ></i>
          </button>
        </div>
        <label htmlFor="pic" className="font-medium block mt-2 mb-2 ">
          Profile Picture
        </label>
        <label
          htmlFor="pic"
          className=" shadow-white/5 shadow-inner cursor-pointer bg-[#593CCA] px-2 py-1 rounded-sm text-center active:bg-[#2c2d70] hover:bg-[#3b3da7] text-sm"
        >
          Choose File
          <input
            onChange={(e) => {
              picChange(e.target.files[0]);
              pfpChange(e.target.files[0].name);
            }}
            id="pic"
            className="bg-black"
            hidden
            type="file"
            name="pic"
            accept="image/*"
          />
        </label>
        <span className="pl-2 text-sm">{pfp}</span>
      </form>
      <button className=" shadow-white/30 shadow-inner bg-[#593CCA] cursor-pointer w-full p-2 rounded-md mt-5 font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70]">
        Continue
      </button>
    </div>
  );
};

export default SignupForm;
