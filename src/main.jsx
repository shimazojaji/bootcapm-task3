import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CategoryProvider } from "./features/Category/context/CategoryContext.jsx";
import { ProductProvider } from "./features/product/context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CategoryProvider>
  </StrictMode>
);
