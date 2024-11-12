import "./App.css";
import ProductHeader from "./features/product/component/ProductHeader";
import AddNewProduct from "./features/product/component/AddNewProduct";
import ProductFilter from "./features/product/component/ProductFilter";
import AddNewCategory from "./features/Category/components/AddNewCategory";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col items-center ">
      <Toaster />

      <ProductHeader />
      <div className="w-full container mx-auto p-4 max-w-screen-xl">
        <div className=" flex flex-col md:flex-row md:justify-between md:gap-x-12 ">
          <div className="w-full basis-2/4">
            <AddNewCategory />
            <AddNewProduct />
          </div>

          <div className="w-full basis-2/4">
            <ProductFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
