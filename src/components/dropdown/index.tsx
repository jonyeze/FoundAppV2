import React from "react";
import { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <div className="relative mb-4 w-full">
      <select
        className="block w-full p-2 border border-inputBorder text-base uppercase text-inputText font-lato rounded-md focus:outline-none"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          {options.placeholder}
        </option>
        {options.items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
