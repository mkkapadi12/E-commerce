import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";
// import ListView from "./ListView";

const ProductList = () => {
  const { filter_product, setGridView } = useFilterContext();

  if (setGridView) {
    return (
      <>
        <GridView products={filter_product} />
      </>
    );
  }
  //   if (setGridView === false) {
  //     return (
  //       <>
  //         <ListView products={filter_product} />
  //       </>
  //     );
  //   }

  return (
    <>
      <div>Product List</div>
    </>
  );
};

export default ProductList;
