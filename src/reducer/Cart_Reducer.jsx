const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      //   console.log("product :", product);
      let existingProduct = state.cart.find(
        (curEle) => curEle.id === id + color
      );

      // console.log("existingProduct :", existingProduct);

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;

            // console.log(newAmount);

            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }

            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return {
              ...curElem,
            };
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let CartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, CartProduct],
        };
      }

    case "SET_INCREMENT":
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newIncrement = curEle.amount + 1;
          if (newIncrement >= curEle.max) {
            newIncrement = curEle.max;
          }

          return {
            ...curEle,
            amount: newIncrement,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_DECREMENT":
      let updatedProduct2 = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newDecrement = curEle.amount - 1;
          if (newDecrement <= 1) {
            newDecrement = 1;
          }

          return {
            ...curEle,
            amount: newDecrement,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct2,
      };

    case "REMOVE_ITEM":
      let updatedItem = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      console.log(updatedItem);

      return {
        ...state,
        cart: updatedItem,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // case "CART_TOTAL_ITEM":
    //   let cartItem = state.cart.reduce((initialVal, curEle) => {
    //     let { amount } = curEle;
    //     initialVal = initialVal + amount;
    //     return initialVal;
    //   }, 0);

    //   return {
    //     ...state,
    //     total_item: cartItem,
    //   };

    // case "CART_TOTAL_PRICE":
    //   let totalPrice = state.cart.reduce((initialVal, curEle) => {
    //     let { amount, price } = curEle;
    //     initialVal = initialVal + amount * price;
    //     return initialVal;
    //   }, 0);

    //   return {
    //     ...state,
    //     total_amount: totalPrice,
    //   };

    // This code is simplify by above code.

    case "CART_TOAL_PRICE_ITEM":
      let { total_item, total_price } = state.cart.reduce(
        (accumulator, curEle) => {
          let { price, amount } = curEle;

          accumulator.total_item += amount;
          accumulator.total_price += amount * price;

          return accumulator;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item: total_item,
        total_price: total_price,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
