import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [pfp, setPfp] = useState("No file chosen");
  const [eye, setEye] = useState(false);

  const changeEye = () => {
    let newEye = !eye;
    setEye(newEye);
  };

  const pfpChange = (val) => {
    setPfp(val);
  };

  let navigator = useNavigate();

  async function submit(data) {
    try {
      const res = await axios.post(
        "https://zyra-32ze.onrender.com/api/data/signup",
        data,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log("res send ", res);
      navigator("/chats");
    } catch {
      console.log("could not send res");
    }
  }

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name" className="font-medium block mt-2 mb-2 ">
          Name
        </label>
        <input
          {...register("name", {
            required: { value: true, message: "Please enter your name." },
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters.",
            },
            maxLength: {
              value: 70,
              message: "Name can't be longer than 70 characters.",
            },
          })}
          className={`block w-full outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner ${errors.name ? "outline-red-600" : "outline-[#272944]"}`}
          id="name"
          type="name"
          placeholder="Enter your name"
        ></input>
        {errors.name && (
          <div className="errMessage -mt-3">{errors.name.message}</div>
        )}
        <label htmlFor="email" className="font-medium  mt-2 block mb-2">
          Email
        </label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Please enter your email address.",
            },
            maxLength: { value: 254, message: "Email address is too long." },
          })}
          className={`block w-full outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner ${errors.email ? "outline-red-600" : "outline-[#272944]"}`}
          id="email"
          type="email"
          placeholder="Enter your email"
        ></input>

        {errors.email && (
          <div className="errMessage -mt-3">{errors.email.message}</div>
        )}

        <label htmlFor="password" className="font-medium block mt-2 mb-2 ">
          Password
        </label>
        <div className=" flex flex-row relative">
          <input
            {...register("password", {
              required: { value: true, message: "Please enter your password." },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
              maxLength: {
                value: 64,
                message: "Password can't be longer than 64 characters.",
              },
            })}
            className={` block w-full outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner ${errors.password ? "outline-red-600" : "outline-[#272944]"} `}
            id="password"
            type={eye === false ? "password" : "text"}
            placeholder="Enter your password"
          ></input>
          <button
            type="button"
            className="absolute w-7 h-7 cursor-pointer right-1 top-1 text-sm"
            onClick={changeEye}
          >
            <i
              className={`fa-solid fa-eye ${eye === true ? "text-blue-400" : ""}`}
            ></i>
          </button>
        </div>

        {errors.password && (
          <div className="errMessage -mt-3">{errors.password.message}</div>
        )}

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
              pfpChange(e.target.files[0].name);
            }}
            id="pic"
            className="bg-black"
            hidden
            type="file"
            accept="image/*"
          />
        </label>
        <span className="pl-2 text-sm">{pfp}</span>

        <button
          type="submit"
          className=" shadow-white/30 shadow-inner bg-[#593CCA] cursor-pointer w-full p-2 rounded-md mt-5 font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
