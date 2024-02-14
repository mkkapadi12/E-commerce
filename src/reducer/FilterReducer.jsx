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
      const userSortValue = document.getElementById("sort");
      const SortValue =
        userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log("SortValue :", SortValue);

      return {
        ...state,
        sortValue: SortValue,
      };

    case "SORTING_DATA":
      let newSortData;
      let tempSortProduct = [...action.payload];
      //   console.log('tempSortProduct :', tempSortProduct);

      //sorting by lowest price
      if (state.sortValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
        //   console.log(newSortData);
      }

      //sorting by highest price
      if (state.sortValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
        //   console.log(newSortData);
      }

      //Sorting a-z :
      if (state.sortValue === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        //   console.log(newSortData);
      }
      if (state.sortValue === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        //   console.log(newSortData);
      }

      //Sorting z-a :
      return {
        ...state,
        filter_product: newSortData,
      };

    default:
      return state;
  }
};

export default FilterRedducer;
