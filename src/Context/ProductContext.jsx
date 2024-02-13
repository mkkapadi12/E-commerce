import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import { useContext } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isError: false,
  isLoading: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {}
    dispatch({ type: "API_ERROR" });
    // console.log(products[0].featured);
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SE_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// { Custom Hook}

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext, AppContext };
