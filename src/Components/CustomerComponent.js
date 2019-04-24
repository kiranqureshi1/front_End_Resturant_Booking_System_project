import React  from 'react';
import {Link} from 'react-router-dom';
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  const numberOfBookings = props.customer.bookings.length;

  return (
    <React.Fragment>
       <Link to = {"/customerbookings/" + props.customer.id} className = "componentLink">
         <span className="label"> Name: </span> {props.customer.name}
         <span className="label">Bookings:</span> {numberOfBookings}
          </Link>
      </React.Fragment>
  )
}

export default CustomerComponent;
