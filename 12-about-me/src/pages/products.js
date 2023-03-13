import React from "react";
import { Link, useParams } from "react-router-dom";

export const Products = () => {
  document.title = "Products";
  const { proId } = useParams();
  return (
    <div>
      <h2>Products Page</h2>
      <Link to={`/products/${proId}`}>Test</Link>
    </div>
  );
};
