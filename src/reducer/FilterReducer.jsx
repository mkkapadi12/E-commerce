const FilterRedducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
      };

    case "GRID_VIEW":
      return {
        ...state,
        Grid_View: true,
      };

    case "LIST_VIEW":
      return {
        ...state,
        Grid_View: false,
      };

    case "SET_SORT_VALUE":
      // const userSortValue = document.getElementById("sort");
      // const SortValue =
      //   userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log("SortValue :", SortValue);

      return {
        ...state,
        sortValue: action.payload,
      };

    case "SORTING_DATA":
      let newSortData;
      const { filter_product, sortValue } = state;
      let tempSortProduct = filter_product;
      //   console.log('tempSortProduct :', tempSortProduct);

      const sortingProducts = (a, b) => {
        //sorting by lowest price
        if (sortValue === "lowest") {
          return a.price - b.price;
        }
        //sorting by highest price
        if (sortValue === "highest") {
          return b.price - a.price;
        }
        //Sorting a-z :
        if (sortValue === "a-z") {
          return a.name.localeCompare(b.name);
        }
        //Sorting z-a :
        if (sortValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      
      return {
        ...state,
        filter_product: newSortData,
      };

    default:
      return state;
  }
};

export default FilterRedducer;
