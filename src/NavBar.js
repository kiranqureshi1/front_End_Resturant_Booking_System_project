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
    </div>
  )
}

export default NavBar;
