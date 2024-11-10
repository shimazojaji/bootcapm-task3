import React, { useCallback, useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductLists({ products }) {
  const { deleteProduct } = useContext(ProductContext);
  const onDelete = useCallback(
    (id) => {
      if (id) {
        deleteProduct(products.filter((p) => p.id !== id));
      }
    },
    [products]
  );

  return (
    <div className="flex flex-col w-11/12 md:w-full">
      <h2 className="text-xl w-full text-left text-slate-400 font-bold mb-4 border-b-slate-500 border-b ">
        Product List
      </h2>
      <div className="flex items-center flex-col gap-2 md:overflow-y-auto max-h-72 p-2">
        {products && products.length === 0 ? (
          <span className="text-slate-400">No products exist.</span>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center w-full justify-between mb-2"
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(product.id).toLocaleString("fa", {
                    dateStyle: "short",
                  })}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                  {product.category}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  className="border border-solid px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductLists;
