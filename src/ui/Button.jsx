import React from "react";

function Button({ options, onClickState, disable = false }) {
  return (
    <>
      <button
        id={options.id}
        className={ options.classList}
        onClick={onClickState}
        disabled={disable}
        type={options.type}      >
        {options.label}
      </button>
    </>
  );
}

export default Button;
