import React, { useContext, useState } from "react";
import TextField from "../../../ui/TextField";
import Label from "../../../ui/Label";
import SelectOption from "../../../ui/SelectOption";
import { CategoryContext } from "../../Category/context/CategoryContext";

import {
  labelOptionsCategory,
  labelOptionsSort,
  textfeildSearch,
  selectOptionsSort,
  selectOptionsCategory,
} from "../data/ProductFilter";

function ProductFilter({ onChangeSort, onChangeCategory }) {
  const categories = useContext(CategoryContext).categories;

  const defaultOptions = categories.map((category, index) => ({
    id: index + 1,
    optionClass: "bg-slate-500 text-slate-300",
    value: category.title,
    label: category.title,
  }));

  const newOptions = [
    {
      id: 0,
      optionClass: "bg-slate-500 text-slate-300",
      value: "All",
      label: "All",
    },
    ...defaultOptions,
  ];

  return (
    <form className="mb-6">
      <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b text-left">
        Filters
      </h2>
      <TextField features={textfeildSearch} onChange={""} />

      <div className="flex items-center justify-between mb-6 ">
        <Label labelOptions={labelOptionsSort} />
        <SelectOption
          selectOptions={selectOptionsSort}
          options={selectOptionsSort.options}
          onSelected={onChangeSort}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <Label labelOptions={labelOptionsCategory} />
        <SelectOption
          selectOptions={selectOptionsCategory}
          options={newOptions}
          onSelected={onChangeCategory}
        />
      </div>
    </form>
  );
}

export default ProductFilter;
