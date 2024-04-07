import React from 'react';
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filter_product, Grid_View } = useFilterContext();
  // console.log(filter_product);

  if (Grid_View === true) {
    return (
      <>
        <GridView products={filter_product} />
      </>
    );
  }
  if (Grid_View === false) {
    return (
      <>
        <ListView products={filter_product} />
      </>
    );
  }

  return (
    <>
      <div>Product List</div>
    </>
  );
};

export default ProductList;
