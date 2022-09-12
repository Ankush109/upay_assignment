import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Productsdetailsaction } from "../../Actions/Postaction";
import "./productdetails.css";
function Productsdetails() {
  const { products, loading } = useSelector((state) => state.allproducts);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Productsdetailsaction(id));
  }, []);
  return loading === false ? (
    <div className="maindiv">
      <div className="namediv">{products.name}</div>
      <div>
        <img style={{ width: "20%" }} src={products.avatar} />
      </div>
      <div className="price">{products.price}</div>
      <div className="description">{products.description}</div>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Productsdetails;
