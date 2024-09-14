import { useContext, useState } from "react";

import "./App.css";
import ProductHeader from "./features/product/component/ProductHeader";

import { CategoryProvider } from "./features/Category/context/CategoryContext";
import {
  ProductContext,
  ProductProvider,
} from "./features/product/context/ProductContext";
import AddNewProduct from "./features/product/component/AddNewProduct";
import ProductFilter from "./features/product/component/ProductFilter";
import ProductLists from "./features/product/component/ProductLists";
import AddNewCategory from "./features/Category/components/AddNewCategory";

function App() {
  const handleSort = (a, b) => {
    switch (sort) {
      case "latest": // latest
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      case "earliest": // earliest
        return new Date(a.id).getTime() - new Date(b.id).getTime();
    }
  };

  const products = useContext(ProductContext).products;
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("All");

  let filteredAndSortProducts = products;
 
    filteredAndSortProducts =(category === "All"?filteredAndSortProducts:products
      .filter((p) => p.category === category)) 
      .sort(handleSort);

  return (
    <>
      <ProductHeader />
      <div className=" w-full">
        <div className="container mx-auto p-4 flex flex-col md:flex-row md:justify-between md:gap-x-12 lg:max-w-screen-xl">
          <div className="w-full basis-2/4">
            <AddNewCategory />
            <AddNewProduct />
          </div>

          <div className="w-full basis-2/4">
            <ProductFilter
              selected={category}
              onChangeCategory={setCategory}
              onChangeSort={setSort}
            />
            <ProductLists filteredAndSortProducts={filteredAndSortProducts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
