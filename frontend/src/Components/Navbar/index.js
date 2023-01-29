import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <nav>
      <h1>Notary</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Practice Areas</Link>
        </li>
        <li>
          <Link to="/">Testimonials</Link>
        </li>
        <li>
          <Link to="/Add">Add</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
