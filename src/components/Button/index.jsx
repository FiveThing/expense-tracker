import React from "react";

import "./style.css";

const Button = ({ handleClick }) => {
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Button;
