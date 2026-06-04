import React from "react";

const Buttons = ({
  text,
  bg,
  col,
  br,
  padd,
  wid,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: col,
        borderRadius: br,
        padding: padd,
        width: wid,
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Buttons;