import React from "react";
import {Link} from 'react-router-dom';
import RestaurantViewContainer from "./containers/RestaurantViewContainer.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/customers">Customers</Link>
    </div>
  )
}

export default NavBar;
