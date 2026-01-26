import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <label for="name" className="font-medium block mb-2">
          Name
        </label>
        <input
          onChange={(e) => {
            nameChange(e.target.value);
          }}
          className=" block w-full outline outline-gray-200 border-gray-400 rounded-sm h-9"
          id="name"
          type="text"
          required
          placeholder="Enter Your Name"
          name="name"
        ></input>

        <label for="email" className="font-medium  mt-2 block mb-2">
          Email
        </label>
        <input
          onChange={(e) => {
            emailChange(e.target.value);
          }}
          className=" block w-full outline outline-gray-200 border-gray-400 rounded-sm h-9"
          id="email"
          type="text"
          required
          placeholder="Enter Your Email"
          name="email"
        ></input>

        <label for="password" className="font-medium block mt-2 mb-2">
          Password
        </label>
        <input
          onChange={(e) => {
            passwordChange(e.target.value);
          }}
          className=" block w-full outline outline-gray-200 border-gray-400 rounded-sm h-9"
          id="password"
          type="text"
          required
          placeholder="Enter Your Password"
          name="password"
        ></input>
      </form>
    </div>
  );
};

export default LoginForm;
