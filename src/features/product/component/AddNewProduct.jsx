import React, { useContext, useState } from "react";

import {
  selectOptions,
  labelOptions,
  btnOptions,
  textfeildTitle,
  textfeildQty,
} from "../data/ProductData";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import SelectOption from "../../../ui/SelectOption";
import TextField from "../../../ui/TextField";
import { CategoryContext } from "../../Category/context/CategoryContext";

import { ProductContext } from "../context/ProductContext";
function AddNewProduct() {
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
      value: "",
      label: "Select a category",
    },
    ...defaultOptions,
  ];
  const { addProduct } = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !quantity || !category) return null;

    const newProduct = {
      title,
      quantity,
      id: Date.now(),
      category: category,
    };

    setTitle(""); 

   
    setQuantity(0);
    setCategory("");
    addProduct(newProduct);
  };

  return (
    <form className="mb-10 flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-xl text-slate-300 font-bold mb-2 self-start">
        Add New Product
      </h2>
      <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 items-start">
        <TextField features={textfeildTitle} onChange={setTitle} value={title}/>
        <TextField features={textfeildQty} onChange={setQuantity} value={quantity}/>
        <div className="flex flex-col items-start gap-1 w-full">
          <Label labelOptions={labelOptions} />
          <SelectOption
            selectOptions={selectOptions}
            options={newOptions}
            onSelected={setCategory}
            value={category}
          />
        </div>
        <Button options={btnOptions} />
      </div>
    </form>
  );
}

export default AddNewProduct;
