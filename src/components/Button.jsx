import React from "react";
import "../styles/button.css";

const Button = ({ content, isClickButton, handleClick }) => {
  return (
    <button
      className={isClickButton ? "click-button" : "restart-button"}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
