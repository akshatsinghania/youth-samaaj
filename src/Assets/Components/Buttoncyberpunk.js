import React from "react";

function Buttoncyberpunk({ text }) {
  return (
    <button className="cybr-btn">
      {text}
      <span aria-hidden></span>
      <span aria-hidden className="cybr-btn__glitch">
        🐱‍💻
      </span>
      <span aria-hidden className="cybr-btn__tag">
        R25
      </span>
    </button>
  );
}

export default Buttoncyberpunk;
