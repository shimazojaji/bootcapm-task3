import React, { createContext, useState } from "react";

import useLocalStorage from "../../../hooks/useLocalStorage";
// Create a context
export const ProductContext = createContext(null);

//  Create a provider component

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useLocalStorage("PRODUCT", []);
  const addProduct = (product) => {
    setproducts((prevProducts) => [...prevProducts, product]);
  };
  const deleteProduct = (product) => {
    setproducts(product);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
