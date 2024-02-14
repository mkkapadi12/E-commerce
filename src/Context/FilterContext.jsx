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

  useEffect(() => {
    dispatch({ type: "SORTING_DATA" });
    // console.log("Sorting");
  }, [state.sortValue]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
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
