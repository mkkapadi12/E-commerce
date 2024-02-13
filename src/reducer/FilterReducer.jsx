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
        setGridView: true,
      };
    default:
      return state;
  }
};

export default FilterRedducer;
