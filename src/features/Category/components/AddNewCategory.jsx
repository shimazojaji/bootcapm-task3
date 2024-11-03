import React, { useContext, useState } from "react";
import { btnOptionAdd, btnOptionCancel } from "../data/CategoryData";
import Button from "../../../ui/Button";
import { CategoryContext } from "../context/CategoryContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-hot-toast";
const schema = yup
  .object({
    category: yup.string().trim().required("Category is required"),
    categoryDescription: yup
      .string()
      .trim()
      .min(0)
      .max(500, "Description can't exceed 500 characters"),
  })
  .required();

function AddNewCategory() {
  const [isFormVisible, SetIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    SetIsFormVisible(!isFormVisible);
  };

  return (
    <div className="w-11/12  md:w-full flex flex-col ">
      <ButtonToggle onClick={toggleFormVisibility} isDisabled={isFormVisible} />
      {isFormVisible && <AddForm cancelHandle={toggleFormVisibility} />}
    </div>
  );
}

export default AddNewCategory;

const ButtonToggle = ({ onClick, isDisabled }) => {
  const classList = isDisabled
    ? "self-start text-slate-300 text-xl mb-4 font-medium"
    : "self-start text-slate-600 text-lg mb-4 font-medium";

  return (
    <button
      id="toggle-add-category"
      className={classList}
      onClick={onClick}
      type="button"
      disabled={isDisabled}
    >
      Add New Category
    </button>
  );
};

function AddForm({ cancelHandle }) {
  const { addCategory } = useContext(CategoryContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = ({ category, categoryDescription }, e) => {
    e.preventDefault();
    const newCategory = {
      title: category,
      description: categoryDescription,
      id: Date.now(),
    };

    try {
      addCategory(newCategory);
      toast.success("Category added successfully!");
      reset(); // reset after form submit
    } catch (error) {
      toast.error("Failed to add category.");
    }
  };
  return (
    <form
      className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 mb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Add Category"
        register={register("category")}
        error={errors.category?.message}
      />
      <TextAreaField
        label="Description"
        register={register("categoryDescription")}
        error={errors.categoryDescription?.message}
      />

      <div className="flex items-center justify-between gap-x-4">
        <Button options={btnOptionCancel} onClickState={cancelHandle} type={"button"}/>
        <Button options={{ ...btnOptionAdd }}  type={"submit"}/>
        {/* Ensure Add button submits the form */}
      </div>
    </form>
  );
}

function InputField({ label, register, error }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-1" >
           <label className="mb-1 text-slate-400">{label}</label> 
           {error && <span className="text-red-500">*</span>}
      </div>
  
      <input
        {...register}
        className="bg-transparent border border-solid border-slate-400 focus:ring-blue-500 focus:border-blue-500 rounded-xl text-slate-400 p-2 w-full"
        type="text"
        autoComplete="off"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

function TextAreaField({ label, register, error }) {
  return (
    <div className="flex flex-col items-start">
      <label className="block mb-1 text-slate-400">{label}</label>
      <textarea
        {...register}
        rows={3}
        className="bg-transparent h-auto rounded-xl border border-solid border-slate-500 text-slate-400 w-full outline-none focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
