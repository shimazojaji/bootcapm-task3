import React from "react";

function SelectOption({ selectOptions, options, error, register }) {
  // return (
  //   <div className={selectOptions.rootClass}>
  //     <select
  //     {...register}
  //       id={selectOptions.id}
  //       className={selectOptions.selectClass}
  //       onChange={onChange}
  //     value={value}

  //     >
  //       {options.map((option) => (
  //         <option
  //           key={option.id}
  //           className={option.optionClass}
  //           value={option.value}

  //         >
  //           {option.label}
  //         </option>
  //       ))}
  //     </select>
  //   </div>
  // );
  return (
    <div className={selectOptions.rootClass}>
            {error && <p className="text-red-500 text-left">{error}</p>}

      <select
        {...register}
        id={selectOptions.id}
        className={selectOptions.selectClass}
      >
        {options.map((option) => (
          <option
            key={option.id}
            className={option.optionClass}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}

export default SelectOption;
