import React from "react";

function SelectOption({ selectOptions, options, onSelected,value} ) {
  return (
    <div className={selectOptions.rootClass}>
      <select
        name={selectOptions.name}
        id={selectOptions.id}
        className={selectOptions.selectClass}
      value={value}
        onChange={(e) => onSelected(e.target.value)

        }
      >
        {options.map((option) => (
          <option
            key={option.id}
            className={option.optionClass}
            value={option.value}
         
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
