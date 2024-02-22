const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      //   console.log("product :", product);

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

    case "REMOVE_ITEM":
      let updatedItem = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      console.log(updatedItem);

      return {
        ...state,
        cart: updatedItem,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
