import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  setGridView: true,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  //   console.log("products :", products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "GRID_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };
