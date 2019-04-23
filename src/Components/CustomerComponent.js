import React  from 'react';
import {Link} from 'react-router-dom';
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  const numberOfBookings = props.customer.bookings.length;

  return (
    <React.Fragment>
       <Link to = {"/customerbookings/" + props.customer.id} className="name">
       {props.customer.name} <br />
       </Link>
       <h3> Number Of Bookings <br/> {numberOfBookings}</h3>
      </React.Fragment>
  )
}

export default CustomerComponent;
