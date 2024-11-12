import React, { createContext } from "react";

import useLocalStorage from "../../../hooks/useLocalStorage";
// Create a context
export const CategoryContext = createContext(null);

//  Create a provider component

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useLocalStorage("CATEGORY", []);
  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
