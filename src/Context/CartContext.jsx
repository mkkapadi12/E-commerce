import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Cart_Reducer";

const cartContext = createContext();

const getlocalData = () => {
  let localCartData = localStorage.getItem("mayurCart");
  if (localCartData === "") {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getlocalData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //set localStorage data

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_TOAL_PRICE_ITEM" });
    localStorage.setItem("mayurCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

//custom hook

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartContextProvider, useCartContext };
