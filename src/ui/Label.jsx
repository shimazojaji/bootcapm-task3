import React from "react";

function Label({ labelOptions,error }) {
  return (
    <div>
    
      <label className={labelOptions.labelClass}  htmlFor={labelOptions.id}>
        {labelOptions.label} {error && <span className="text-rose-500">*</span>}
      </label>
    </div>
  );
}

export default Label;
