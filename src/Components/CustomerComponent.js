import React  from 'react';
import {Link} from 'react-router-dom';
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  const numberOfBookings = props.customer.bookings.length;

  return (
    <React.Fragment>
       <Link to = {"/customerbookings/" + props.customer.id} className = "componentLink">
       <h4> Name: {props.customer.name}</h4>
       <h4> Number Of Bookings: {numberOfBookings}</h4>
          </Link>
      </React.Fragment>
  )
}

export default CustomerComponent;
