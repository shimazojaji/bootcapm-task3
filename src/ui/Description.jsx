import React from "react";
import Label from "./Label";

function Description({ options }) {
  const labelOptions = {
    label: options.label,
    labelClass: options.labelClass,
    id: options.id,
  };
  return (
    <div className={options.rootClass}>
      <Label labelOptions={labelOptions} />
      <textarea rows={3} className={options.desClass}></textarea>
    </div>
  );
}

export default Description;
