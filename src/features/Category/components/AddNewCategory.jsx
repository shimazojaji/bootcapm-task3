import React, { useContext, useState } from "react";
import { btnOptionAdd, btnOptionCancel } from "../data/CategoryData";
import Button from "../../../ui/Button";
import { CategoryContext } from "../context/CategoryContext";

function AddNewCategory() {
  const [isFormVisible, SetIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    SetIsFormVisible(!isFormVisible);
  };

  return (
    <div className="w-full flex flex-col ">
      <Btn
        onButtonClick={toggleFormVisibility}
        isDisable={isFormVisible ? true : false}
      />
      {isFormVisible && <AddForm />}
    </div>
  );
}

export default AddNewCategory;

const Btn = ({ onButtonClick, isDisable }) => {
  const classList = "self-start text-slate-600 text-lg mb-4 font-medium false";
  const classListAlternative =
    "self-start text-slate-300 text-xl mb-4 font-medium false";
  return (
    <button
      id="toggle-add-category"
      className={isDisable ? classListAlternative : classList}
      onClick={onButtonClick}
      type="submit"
      disabled={isDisable}
    >
      Add New Category
    </button>
  );
};

function AddForm() {
  const { addCategory } = useContext(CategoryContext);
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");
  const handleButtonCliked = (buttonName) => {
    setButtonClicked(buttonName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newCategory = {
      title,
      description,
      id: Date.now(),
    };

    if (buttonClicked === "add") {
      addCategory(newCategory);

      setTtile("");
      setDescription("");
    } else {
      setTtile("");
      setDescription("");
    }
  };

  return (
    <form
      className=" bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 mb-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-start">
        <label className="block mb-1 text-slate-400" htmlFor="add-new-category">
          Add Category
        </label>
        <input
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          name="title"
          className="bg-transparent border border-solid border-slate-400 focus:ring-blue-500 focus:border-blue-500 rounded-xl  text-slate-400 p-2 w-full md:w-auto"
          type="text"
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col  items-start">
        <label
          className="block mb-1 text-slate-400"
          htmlFor="category-description"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="bg-transparent h-auto rounded-xl border border-solid border-slate-500 text-slate-400 w-full outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <Button
          options={btnOptionCancel}
          onClickState={() => handleButtonCliked("cancel")}
        />
        <Button
          options={btnOptionAdd}
          onClickState={() => handleButtonCliked("add")}
        />
      </div>
    </form>
  );
}
