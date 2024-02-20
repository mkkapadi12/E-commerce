import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  Grid_View: true,
  List_View: true,
  sortValue: "a-z",
  filters: {
    text: "",
    category: "all",
    company: "dell",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  //   console.log("products :", products);

  const [state, dispatch] = useReducer(reducer, initialState);

  //to set Grid View
  const setGridView = () => {
    return dispatch({ type: "GRID_VIEW" });
  };

  //to set Grid View
  const setListView = () => {
    return dispatch({ type: "LIST_VIEW" });
  };

  //Sorting function

  const sorting = (event) => {
    var userValue = event.target.value;
    dispatch({ type: "SET_SORT_VALUE", payload: userValue });
  };

  //set filter Value

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_DATA" });
    // console.log("Sorting");
  }, [products, state.sortValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };
