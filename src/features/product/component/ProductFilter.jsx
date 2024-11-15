import React, { useContext, useMemo } from "react";
import TextField from "../../../ui/TextField";
import Label from "../../../ui/Label";
import SelectOption from "../../../ui/SelectOption";
import { CategoryContext } from "../../Category/context/CategoryContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  labelOptionsCategory,
  labelOptionsSort,
  textFeildSearch,
  selectOptionsSort,
  selectOptionsCategory,
} from "../data/ProductFilter";
import ProductLists from "./ProductLists";
import { ProductContext } from "../context/ProductContext";

const schema = yup.object({
  search: yup.string().trim(),
  sortD: yup.string(),
  sortC: yup.string(),
});

function ProductFilter() {
  const categories = useContext(CategoryContext).categories;
  const product = useContext(ProductContext).products;
  const defaultOptions = categories.map((category) => ({
    id: category.id,
    optionClass: "bg-slate-500 text-slate-300",
    value: category.title,
    label: category.title,
  }));

  const newOptions = [
    {
      id: 0,
      optionClass: "bg-slate-500 text-slate-300",
      value: "all",
      label: "All",
    },
    ...defaultOptions,
  ];
  const { register, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      search: "",
      sortD: "default",
      sortC: "all",
    },
    mode: "all",
  });
  const sortDate = watch("sortD");
  const searchTerm = watch("search");
  const sortCategory = watch("sortC");

  const sortedAndFilteredProducts = useMemo(() => {
    const filtered = product.filter(
      (p) => sortCategory === "all" || p.category === sortCategory
    );

    return filtered.sort((a, b) => {
      if (sortDate === "latest") {
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      } else if (sortDate === "earliest") {
        return new Date(a.id).getTime() - new Date(b.id).getTime();
      }
      return 0;
    });
  }, [product, sortDate, sortCategory]);

  const searchedProducts = useMemo(() => {
    return sortedAndFilteredProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [sortedAndFilteredProducts, searchTerm]);
  return (
    <div>
      <form className="mb-6 w-11/12 md:w-full">
        <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b text-left">
          Filters
        </h2>
        <TextField features={textFeildSearch} register={register("search")} />

        <div className="flex items-center justify-between mb-6 ">
          <Label labelOptions={labelOptionsSort} />
          <SelectOption
            selectOptions={selectOptionsSort}
            options={selectOptionsSort.options}
            register={register("sortD")}
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <Label labelOptions={labelOptionsCategory} />
          <SelectOption
            selectOptions={selectOptionsCategory}
            options={newOptions}
            register={register("sortC")}
          />
        </div>
      </form>
      <ProductLists products={searchedProducts} />
    </div>
  );
}

export default ProductFilter;
