import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size, width }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius, width }}
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
