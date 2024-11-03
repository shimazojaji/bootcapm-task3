export const textFeildSearch =
{
    rootClass: "flex items-center justify-between mb-6",
    inputClass:
        "bg-transparent basis-3/5 border border-solid border-slate-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg  text-slate-400 p-2 w-full md:w-auto focus:ring-blue-500 focus:border-blue-500",
    name: "search-input",
    type: "text",
    labelClass: "text-slate-500 text-lg",
    id: "search-input",
    label: "Search",
};

export const selectOptionsSort = {
    name: "categoryId",
    id: "product-category",
    selectClass:
        "bg-transparent  focus:ring-blue-500 focus:border-blue-500 block text-slate-400 rounded-lg p-2.5 w-full",

    rootClass: "basis-7/12   lg:basis-2/5 ",
    options: [
        {
            id: 0,
            optionClass: "bg-slate-500 text-slate-300 ",
            value: "",
            label: "Select a category",
        },
        {
            id: 1,
            optionClass: "bg-slate-500 text-slate-300 selected",
            value: "latest",
            label: "latest",
        },
        {
            id: 2,
            optionClass: "bg-slate-500 text-slate-300",
            value: "earliest",
            label: "earliest",
        },

    ],
};

export const labelOptionsSort = {
    label: "Sort",
    labelClass: "text-lg text-slate-500",
    id: "sort-products",
};


export const selectOptionsCategory = {
    name: "categoryId",
    id: "product-category",
    selectClass:
        "bg-transparent  items-center focus:ring-blue-500 focus:border-blue-500  text-slate-400 rounded-lg w-full",
    rootClass: "basis-2/6",

};

export const labelOptionsCategory = {
    label: "Category",
    labelClass: "text-lg text-slate-500",
    id: "sort-products",
};
