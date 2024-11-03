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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductContext } from "../context/ProductContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const schema = yup
  .object({
    title: yup.string().trim().required("Title is required"),
    quantity: yup
      .number()
      .typeError("Quantity must be a number")
      .required("Quantity is required")
      .positive("Quantity must be greater than zero")
      .integer("Quantity must be an integer"),

    selectedCategory: yup
      .string()
      .required("You must select an option")
      .notOneOf(["default"], "Please select an option "),
  })
  .required();

function AddNewProduct() {
  const categories = useContext(CategoryContext).categories;

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
      value: "default",
      label: "Select a category",
    },
    ...defaultOptions,
  ];

  const { addProduct } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = ({ title, quantity, selectedCategory }, e) => {
    e.preventDefault();
    const newProduct = {
      title,
      quantity,
      id: Date.now(),
      category: selectedCategory,
    };

    try {
      addProduct(newProduct);
      toast.success("Product added successfully!");

      reset(); // reset after form submit
    } catch (error) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <form
      className="mb-10 flex flex-col w-11/12 md:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl text-slate-300 font-bold mb-2 self-start">
        Add New Product
      </h2>
      <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 items-start">
        <TextField
          features={textfeildTitle}
          register={register("title")}
          error={errors.title?.message}
        />

        <TextField
          features={textfeildQty}
          register={register("quantity")}
          error={errors.quantity?.message}
        />

        <div className="flex flex-col items-start gap-1 w-full">
          <Label
            labelOptions={labelOptions}
            error={errors.selectedCategory?.message}
          />

          <SelectOption
            selectOptions={selectOptions}
            options={newOptions}
            register={register("selectedCategory")}
            error={errors.selectedCategory?.message}
          />
        </div>
        <Button options={btnOptions} type={"submit"} />
      </div>
    </form>
  );
}

export default AddNewProduct;
