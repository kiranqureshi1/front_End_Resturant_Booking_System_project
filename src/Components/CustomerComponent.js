import React  from 'react';
import {Link} from 'react-router-dom';
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  const numberOfBookings = <span>{props.customer.bookings.length}</span>
  const customerName = <span>{props.customer.name}</span>

  return (
    <React.Fragment>
       <Link to = {"/customerbookings/" + props.customer.id} className = "componentLink">
        <span className="hoverWhite"><span>{customerName} with {numberOfBookings} bookings </span></span>
          </Link>
      </React.Fragment>
  )
}

export default CustomerComponent;
