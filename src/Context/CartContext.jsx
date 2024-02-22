import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/Cart_Reducer";

const cartContext = createContext();
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <cartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

//custom hook

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartContextProvider, useCartContext };
