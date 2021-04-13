import React from "react";

import "./style.css";

const Button = ({ handleClick }) => {
  return (
    <div className="">
      <button
        className="p-14 border-2 border-black-500 bg-red-500"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
