import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
function Products({ product }) {
  return (
    <div className="productss">
      <Link to={`products/${product._id}`}>
        <div className="product-container">
          <div className="img">
            <img src={product.avatar} />
          </div>
          <div className="product-name">
            <span>{product.name}</span>
          </div>
          <div className="product-price">{product.price}</div>
        </div>
      </Link>
    </div>
  );
}

export default Products;
