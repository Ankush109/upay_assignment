import { Button, Input, Typography } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";

import React, { useState } from "react";
import "./createproduct.css";
import { useDispatch } from "react-redux";
import { allproductsaction, createproducts } from "../../Actions/Postaction";
import { useNavigate } from "react-router";
function Createproduct() {
  const [category, setcategories] = useState("categories");
  const [name, setname] = useState("");
  const [avatar, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [developerEmail, setdeveloperEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();

    dispatch(
      createproducts(name, description, category, price, avatar, developerEmail)
    );

    // dispatch(allproductsaction());
    // navigate("/");
  };
  return (
    <div className="create">
      <div className="form">
        <div className="header">
          <Typography variant="h4">Create Product</Typography>
        </div>
        <form onSubmit={submithandler}>
          <div className="input">
            <Input
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Product name"
            />
          </div>
          <div className="input">
            <Input
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="description"
            />
          </div>
          <div className="input">
            <Input
              value={avatar}
              onChange={(e) => setimage(e.target.value)}
              placeholder="image url"
            />
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {category}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setcategories("Electronics")}>
                Electronics
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setcategories("Furniture")}>
                Furniture
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setcategories("Clothing")}>
                Clothing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setcategories("Hobby")}>
                hobby
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div
            value={price}
            onChange={(e) => setprice(e.target.value)}
            className="input"
          >
            <Input placeholder="price" />
          </div>
          <div
            value={developerEmail}
            onChange={(e) => setdeveloperEmail(e.target.value)}
            className="input"
          >
            <Input placeholder="developer Email" />
          </div>
          <div>
            <Button onClick={submithandler}>Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createproduct;
