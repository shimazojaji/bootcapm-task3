import React from "react";

function Label({ labelOptions }) {
  return (
    <div>
    
      <label className={labelOptions.labelClass} htmlFor={labelOptions.id}>
        {labelOptions.label}
      </label>
    </div>
  );
}

export default Label;
