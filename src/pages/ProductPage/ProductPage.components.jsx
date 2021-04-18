import React from "react";
import ProductList from "../../components/ProductList/ProductList.components";

const ProductPage = ({ location }) => {
  const l = String(location.pathname).substr(1);
  return (
    <div>
      <h1>{l}</h1>
      <ProductList type={l} />
    </div>
  );
};

export default ProductPage;
