import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductLists({ filteredAndSortProducts }) {
  const { deleteProduct } = useContext(ProductContext);

  const [finalProducts, setFinalProducts] = useState(filteredAndSortProducts);
  function onDelete(id) {
    setFinalProducts(filteredAndSortProducts.filter((s) => s.id !== id));
    console.log(finalProducts);
    deleteProduct(finalProducts);
  }
  return (
    <div>
      <h2 className="text-xl w-full text-left text-slate-400 font-bold mb-4 border-b-slate-500 border-b ">
        ProductList
      </h2>
      <div className="flex items-center flex-col gap-2  w-full min-w-[400px]">
        {filteredAndSortProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center  justify-between mb-2 w-full min-w-[400px]"
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
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductLists;
