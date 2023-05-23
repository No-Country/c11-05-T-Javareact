import React from "react";

const Input = ({ type, name, placeholder, register, validation, errors, compare, textAlert}) => (
  <div>
    <input
      className="bg-white max-w-xl grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, validation)}
    />
    {errors[name] && errors[name].type === "required" && <span className="font-extralight text-sm p-2">{textAlert}</span>}
    {errors[name] && errors[name].type === "maxLength" && <span className="font-extralight text-sm p-2">{textAlert}</span> }
    {errors[name] && errors[name].type === "pattern" && <span className="font-extralight text-sm p-2">{textAlert}</span> }
  </div>
);

export default Input;