import React  from 'react';
import {Link} from 'react-router-dom';
import "./css/CustomerComponent.css"
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  const numberOfBookings = props.customer.bookings.length;

  return (
    <React.Fragment>
    <div className= "customer-container">
       <Link to = {"/customerbookings/" + props.customer.id} className="name">
       {props.customer.name} <br />
       </Link>
       <h3 className = "table-number"> {numberOfBookings}</h3>
       </div>
      </React.Fragment>
  )
}

export default CustomerComponent;
