import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const changeEye = () => {
    let newEye = !eye;
    setEye(newEye);
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
        <label htmlFor="email" className="font-medium  mt-5 block mb-2">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => {
            emailChange(e.target.value);
          }}
          className="hover:shadow-gray-700/40 hover:shadow-inner block w-full outline-[#272944] outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm"
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
      </form>
      <button className=" shadow-white/30 shadow-inner bg-[#593CCA] w-full p-2 rounded-md mt-5 font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70]">
        Continue
      </button>
    </div>
  );
};

export default LoginForm;
