import React from "react";

function Button({ options, onClickState,type, disable = false }) {
  return (
    <>
      <button
        id={options.id}
        className={ options.classList}
        onClick={onClickState}
        disabled={disable}
        type={type}      >
        {options.label}
      </button>
    </>
  );
}

export default Button;
