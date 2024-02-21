const FilterRedducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log("priceArr :", priceArr);

      let maxPrice = Math.max(...priceArr);
      // console.log("maxPrice :", maxPrice);
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          Price: maxPrice,
        },
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
      // console.log("SortValue   :", SortValue);

      return {
        ...state,
        sortValue: action.payload,
      };

    case "SORTING_DATA":
      let newSortData;
      const { filter_product, sortValue } = state;
      let tempSortProduct = filter_product;
      // console.log("filter_product :", filter_product);
      // console.log("tempSortProduct :", tempSortProduct);

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
      // console.log("newSortData :", newSortData);

      return {
        ...state,
        filter_product: newSortData,
      };

    //set filter value

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      // console.log(value);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    //set filter Product

    case "FILTER_PRODUCTS":
      let { all_product } = state;
      let tempFilterProduct = [...all_product];

      const { text, category, company, color, Price } = state.filters;
      // console.log(company);
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
          // return curElem.name.toLowerCase().startsWith(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (Price) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= Price;
        });
      }

      return {
        ...state,
        filter_product: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          Price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterRedducer;
