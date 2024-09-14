import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductHeader() {
  const products = useContext(ProductContext).products;
  return (
    <div className="bg-slate-700 flex items-center justify-center gap-x-4 sticky top-0 p-3 mb-6">
      <h1 className="text-sm md:text-xl text-slate-300 font-bold">
        Inventory App using tailwind & React.js
      </h1>
      <span className="flex items-center justify-center h-7 w-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">
       {products.length}
      </span>
    </div>
  );
}

export default ProductHeader;
