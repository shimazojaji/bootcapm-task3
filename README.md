# Inventory App  




## Introduction
This mini app is developed  to add products as well as to search based on product titles and filter by product creation date and product category.
In this mini app, there is the option to delete products within the app, but there is no option to delete categories in the app; instead, they must be deleted directly from local storage.

The React features used in this mini app include: 
- multi components
- state
-  props
- context
- react hook form
- useCallback
- useMemo
- toaster
- yup
  
The JavaScript features and methods used in this mini app include: 
- local storage
- call back functions
- filter
- sort
- map
- Date
- trim
- includes
- toLowerCase
- toLocalString

## Technologies applied 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)




## How to use
- npm install

  
## Details
The project includes a main folder named src, which contains components, hooks, and all the core files of the project.
The structure of the src folder is as follows:
- The *features* folder includes subfolders category and product, where all items related to these features, such as components, context, and data, are organized within these subfolders.
- The *hooks* folder is dedicated to all hooks that are shared between product and category.
- The *ui* folder contains  components for any UI, including: Button, Description, Label, SelectOption, and TextField.

The components of the project embedded in the main App component are as follows:
- ProductHeader
- AddNewCategory
- AddNewProduct
- ProductFilter

The  *ProductHeader*: This component is developed to display the title and the number of products available in the product list. Since this component requires access to product information stored in the local storage, it utilizes the `ProductContext`.

The  _AddNewCategory_: The responsibility of this component is to add a category to the local storage. Each category includes a title and a description that the user must complete. Field validation is handled using `react-hook-form` and `yup`, and the `CategoryContext` is used to save the category in local storage.

The  _AddNewProduct_: The responsibility of this component is to add products to the local storage. For this purpose, the user provides the product title and quantity through text fields and then selects a category for the product, which must have been previously saved in local storage by the `AddNewCategory` component. Form validation is handled using `react-hook-form` and `yup`. The component uses `ProductContext` to store product information and `CategoryContext` to read category information from local storage.


