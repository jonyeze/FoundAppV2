import React from "react";
import { CustomInputProps } from "./types";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-base text-inputText ml-1 font-lato">
        {label}
      </label>
      <input
        className="mt-1 p-2 border border-inputBorder text-base text-inputText font-lato rounded-md w-full focus:outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
