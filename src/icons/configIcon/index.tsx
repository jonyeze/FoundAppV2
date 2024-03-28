import React from "react";
import { ConfigIconProps } from "./types";

const ConfigIcon: React.FC<ConfigIconProps> = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0509 13.725C22.1023 13.325 22.1408 12.925 22.1408 12.5C22.1408 12.075 22.1023 11.675 22.0509 11.275L24.7624 9.2125C25.0065 9.025 25.0708 8.6875 24.9166 8.4125L22.3464 4.0875C22.1922 3.8125 21.8453 3.7125 21.5626 3.8125L18.3627 5.0625C17.6945 4.5625 16.9749 4.15 16.191 3.8375L15.7027 0.525C15.6641 0.225 15.3942 0 15.073 0H9.9327C9.61144 0 9.34157 0.225 9.30302 0.525L8.8147 3.8375C8.03081 4.15 7.31117 4.575 6.64293 5.0625L3.44312 3.8125C3.14755 3.7 2.81344 3.8125 2.65923 4.0875L0.0890957 8.4125C-0.077963 8.6875 -0.000858813 9.025 0.243304 9.2125L2.95479 11.275C2.90339 11.675 2.86484 12.0875 2.86484 12.5C2.86484 12.9125 2.90339 13.325 2.95479 13.725L0.243304 15.7875C-0.000858813 15.975 -0.0651123 16.3125 0.0890957 16.5875L2.65923 20.9125C2.81344 21.1875 3.1604 21.2875 3.44312 21.1875L6.64293 19.9375C7.31117 20.4375 8.03081 20.85 8.8147 21.1625L9.30302 24.475C9.34157 24.775 9.61144 25 9.9327 25H15.073C15.3942 25 15.6641 24.775 15.7027 24.475L16.191 21.1625C16.9749 20.85 17.6945 20.425 18.3627 19.9375L21.5626 21.1875C21.8581 21.3 22.1922 21.1875 22.3464 20.9125L24.9166 16.5875C25.0708 16.3125 25.0065 15.975 24.7624 15.7875L22.0509 13.725ZM12.5028 16.875C10.0227 16.875 8.00511 14.9125 8.00511 12.5C8.00511 10.0875 10.0227 8.125 12.5028 8.125C14.983 8.125 17.0006 10.0875 17.0006 12.5C17.0006 14.9125 14.983 16.875 12.5028 16.875Z"
        fill={color}
      />
    </svg>
  );
};

export default ConfigIcon;
