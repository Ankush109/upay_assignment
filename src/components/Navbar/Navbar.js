import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="header">
        <Link to="/">
          <h2>UPayments</h2>
        </Link>
      </div>
      <div className="btn">
        <h3>Register</h3>
      </div>
    </div>
  );
}

export default Navbar;
