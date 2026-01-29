import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [eye, setEye] = useState(false);

  const changeEye = () => {
    let newEye = !eye;
    setEye(newEye);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email" className="font-medium  mt-5 block mb-2">
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
          name="email"
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
            className={`block w-full outline-2 rounded-sm h-9 mb-5 p-2 pl-3 text-sm hover:shadow-gray-700/40 hover:shadow-inner ${errors.password ? "outline-red-600" : "outline-[#272944]"}`}
            id="password"
            type={eye === false ? "password" : "text"}
            placeholder="Enter your password"
            name="password"
          ></input>
          <button
            type="button"
            onClick={() => {
              changeEye();
            }}
            className="absolute w-7 h-7 cursor-pointer right-1 top-1 text-sm"
          >
            <i
              className={`fa-solid  fa-eye ${eye === true ? "text-blue-400" : ""}`}
            ></i>
          </button>
        </div>
        {errors.password && (
          <div className="errMessage -mt-3">{errors.password.message}</div>
        )}
        <button
          type="submit"
          className=" shadow-white/30 shadow-inner bg-[#593CCA] w-full p-2 rounded-md mt-5 font-semibold hover:bg-[#3b3da7] active:bg-[#2c2d70]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
