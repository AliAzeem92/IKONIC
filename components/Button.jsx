import React from "react";

const Button = ({ title, className = "", ...props }) => {
  return (
    <div>
      <button
        className={`px-[31.5px] py-[16px] text-white rounded-lg font-semibold ${className}`}
        {...props}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
