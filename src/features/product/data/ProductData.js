
export const textfeildTitle =
{
    rootClass: "flex flex-col items-start justify-center gap-y-1",
    inputClass:
        "bg-transparent border border-solid border-slate-400 focus:ring-blue-500 focus:border-blue-500 rounded-xl  text-slate-400 p-2 w-full md:w-auto",
    name: "title",
    type: "text",
    labelClass: "block mb-1 text-slate-400",
    id: "product-title",
    label: "Title",
};
export const textfeildQty = {
    rootClass: "flex flex-col items-start justify-center gap-y-1",
    inputClass:
        "bg-transparent border border-solid border-slate-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg  text-slate-400 p-2.5 w-full md:w-auto focus:ring-blue-500 focus:border-blue-500",
    name: "quantity",
    type: "number",
    labelClass: "block mb-1 text-slate-400",
    id: "product-quantity",
    label: "Quantity",
};


export const btnOptionAdd = {
    id: "Add New Product",
    classList: "text-xs sm:text-base flex-1 bg-slate-500 text-slate-200 rounded-xl py-2",
    label: "Add New Product",

};

export const btnOptionCancel = {
    id: "reset-add-product",
    classList: "text-xs sm:text-base flex-1 border border-solid border-slate-400 text-slate-400 rounded-xl py-2",
    label: "Reset",

};
export const selectOptions = {
    name: "categoryId",
    id: "product-category",
    selectClass:
        "bg-transparent  focus:ring-blue-500 focus:border-blue-500 block text-slate-400 rounded-lg w-full p-2.5 ",
    rootClass: "w-full",
};
export const labelOptions = {
    label: "Category",
    labelClass: "block mb-1 text-slate-400",
    id: "product-category",
};