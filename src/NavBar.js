<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>{
  return (
    <div>
    <ul>
      <li className="navLink">
      <Link to="/bookings">Bookings</Link>
      </li>

      <li className="navLink">
      <Link to="/customers">Customers</Link>
      </li>

    </ul>
=======
import React from "react";
import {Link} from 'react-router-dom';
import RestaurantViewContainer from "./containers/RestaurantViewContainer.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/customers">Customers</Link>
>>>>>>> front_end_test
    </div>
  )
}

export default NavBar;
